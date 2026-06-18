import React, { useState, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { toast } from "react-toastify";
import { triggerResumeDownload } from "@/utils/utils";
import { sendContactEmail } from "@/services/emailService";
import type { ContactFormData } from "@/types/props";
import type { UseContactFormReturn } from "@/types";

/* ── Validation helpers ──────────────────────────────────────────────────── */

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const validate = (data: ContactFormData): string | null => {
  if (!data.name.trim()) return "Name is required.";
  if (!data.email.trim()) return "Email is required.";
  if (!EMAIL_REGEX.test(data.email.trim())) return "Please enter a valid email address.";
  if (!data.message.trim()) return "Message is required.";
  if (data.message.trim().length < 10) return "Message must be at least 10 characters.";
  return null;
};

/* ── Hook ────────────────────────────────────────────────────────────────── */

const EMPTY_FORM: ContactFormData = { name: "", email: "", message: "" };

export const useContactForm = (): UseContactFormReturn => {
  const { executeRecaptcha } = useGoogleReCaptcha();

  const [formData, setFormData] = useState<ContactFormData>(EMPTY_FORM);
  const [sending, setSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    },
    []
  );

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

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();

      // Client-side validation before hitting the server
      const validationError = validate(formData);
      if (validationError) {
        toast.error(validationError);
        return;
      }

      if (!executeRecaptcha) {
        toast.error("reCAPTCHA is not ready. Please wait a moment and try again.");
        return;
      }

      setSending(true);

      try {
        const recaptchaToken = await executeRecaptcha("contact_form");

        const result = await sendContactEmail({
          name: formData.name.trim(),
          email: formData.email.trim(),
          message: formData.message.trim(),
          recaptchaToken,
        });

        if (!result.success) {
          throw new Error(result.error ?? "Failed to send message.");
        }

        toast.success("Message sent! Check your inbox for a confirmation email.");
        setFormData(EMPTY_FORM);
        setEmailSent(true);
        localStorage.setItem("emailSent", "true");
      } catch (err) {
        const message =
          err instanceof Error ? err.message : "Something went wrong. Please try again.";
        toast.error(message);
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
