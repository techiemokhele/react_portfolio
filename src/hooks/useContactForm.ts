import React, { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import { sendAdminNotification, sendUserConfirmation } from "@/services/emailService";
import { triggerResumeDownload } from "@/utils/utils";
import { ADMIN_EMAIL, PORTFOLIO_URL, RESUME_URL } from "@/services/emailTemplates";
import type { ContactFormData } from "@/types/props";
import type { UseContactFormReturn } from "@/types";

/* ── Helpers ─────────────────────────────────────────────────────────────── */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const formatSentAt = (): string =>
  new Date().toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  });

const getFirstName = (fullName: string): string =>
  fullName.trim().split(" ")[0] ?? fullName.trim();

const previewMessage = (msg: string, maxLen = 150): string =>
  msg.length > maxLen ? msg.slice(0, maxLen).trimEnd() + "…" : msg;

const UNSUBSCRIBE_NOTE =
  "You received this email because you submitted Neo Mokhele's portfolio contact form. " +
  "This is a one-time confirmation — you won't receive further emails unless you reach out again. " +
  "To opt out of any future communication, simply reply with \"unsubscribe\".";

/* ── Hook ────────────────────────────────────────────────────────────────── */

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

export const useContactForm = (): UseContactFormReturn => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  /** Keep form field state in sync. */
  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

  /** Validate the field that just lost focus. */
  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const field = e.target.name as keyof ContactFormData;
      const label = field.charAt(0).toUpperCase() + field.slice(1);
      if (!formData[field].trim()) {
        toast.error(`${label} is required`, { toastId: `blur-${field}` });
      }
    },
    [formData]
  );

  /** Validate → reCAPTCHA → send admin + confirmation emails. */
  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // ── Validation ──────────────────────────────────────────────────────
      const { name, email, message } = formData;

      if (!name.trim() || !email.trim() || !message.trim()) {
        toast.error("All fields are required.");
        return;
      }
      if (!EMAIL_REGEX.test(email.trim())) {
        toast.error("Please enter a valid email address.");
        return;
      }
      if (message.trim().length < 10) {
        toast.error("Message must be at least 10 characters.");
        return;
      }

      // ── reCAPTCHA ────────────────────────────────────────────────────────
      if (!executeRecaptcha) {
        toast.error("reCAPTCHA is not ready. Please wait and try again.");
        return;
      }

      setSending(true);

      try {
        const recaptchaToken = await executeRecaptcha("contact_form");

        const baseParams = {
          from_name: name.trim(),
          from_email: email.trim(),
          message: message.trim(),
          reply_to: email.trim(),
          sent_at: formatSentAt(),
          portfolio_url: PORTFOLIO_URL,
          recaptcha_token: recaptchaToken,
        };

        // ── Send to admin ──────────────────────────────────────────────────
        await sendAdminNotification({
          ...baseParams,
          to_email: ADMIN_EMAIL,
        });

        // ── Send confirmation to user ──────────────────────────────────────
        await sendUserConfirmation({
          ...baseParams,
          to_name: getFirstName(name),
          to_email: email.trim(),
          message_preview: previewMessage(message.trim()),
          resume_url: RESUME_URL,
          unsubscribe_note: UNSUBSCRIBE_NOTE,
        });

        toast.success(
          "Message sent! Check your inbox for a confirmation email."
        );
        setFormData(EMPTY_FORM);
        setEmailSent(true);
        localStorage.setItem("emailSent", "true");
      } catch (err) {
        console.error("Contact form error:", err);
        toast.error(
          "Failed to send your message. Please try again or email me directly."
        );
      } finally {
        setSending(false);
      }
    },
    [formData, executeRecaptcha]
  );

  const downloadResume = useCallback(() => triggerResumeDownload(), []);

  return {
    formData,
    sending,
    emailSent,
    handleChange,
    handleBlur,
    handleSubmit,
    downloadResume,
  };
};
