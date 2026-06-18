import React, { useId } from "react";
import { ToastContainer } from "react-toastify";
import { Send, Download, CheckCircle2 } from "lucide-react";
import "react-toastify/dist/ReactToastify.css";

import { useContactForm } from "@/hooks/useContactForm";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

const ContactFormSectionComponent: React.FC = () => {
  const formId = useId();
  const {
    formData,
    sending,
    emailSent,
    handleChange,
    handleBlur,
    handleSubmit,
    downloadResume,
  } = useContactForm();

  const fieldId = (name: string) => `${formId}-${name}`;

  return (
    <section
      aria-labelledby={`${formId}-heading`}
      className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start"
    >
      {/* Left — decorative image (hidden from assistive tech) */}
      <div className="hidden md:block">
        <img
          src="/images/contact.jpg"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover rounded-2xl border border-white/10"
          loading="lazy"
        />
      </div>

      {/* Right — form */}
      <div>
        <h2
          id={`${formId}-heading`}
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-extrabold mb-3"
        >
          Let&apos;s Have A Chat
        </h2>

        {/* Status message */}
        {emailSent ? (
          <div
            role="status"
            aria-live="polite"
            className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-4 mb-6"
          >
            <CheckCircle2
              className="w-5 h-5 text-green-400 shrink-0 mt-0.5"
              aria-hidden="true"
            />
            <p className="text-green-300 text-sm leading-relaxed">
              Message received! Check your inbox for a confirmation email with
              your message summary and a resume download link.
            </p>
          </div>
        ) : (
          <p className="text-gray-400 text-sm mb-6 leading-relaxed">
            Fill in the form below and I&apos;ll get back to you within one
            business day. Sending a message also unlocks the{" "}
            <span className="text-gold font-medium">Resume download</span>{" "}
            button — you&apos;ll receive a copy in your confirmation email too.
          </p>
        )}

        <form
          onSubmit={handleSubmit}
          noValidate
          className="space-y-5"
          aria-label="Contact Neo Mokhele"
        >
          {/* Name */}
          <div>
            <label
              htmlFor={fieldId("name")}
              className="block mb-1.5 text-white text-sm font-medium"
            >
              Full Name <span aria-hidden="true" className="text-gold">*</span>
            </label>
            <Input
              id={fieldId("name")}
              name="name"
              type="text"
              autoComplete="name"
              required
              aria-required="true"
              value={formData.name}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Neo Mokhele"
              disabled={sending || emailSent}
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor={fieldId("email")}
              className="block mb-1.5 text-white text-sm font-medium"
            >
              Email Address <span aria-hidden="true" className="text-gold">*</span>
            </label>
            <Input
              id={fieldId("email")}
              name="email"
              type="email"
              autoComplete="email"
              required
              aria-required="true"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="you@example.com"
              disabled={sending || emailSent}
            />
          </div>

          {/* Message */}
          <div>
            <label
              htmlFor={fieldId("message")}
              className="block mb-1.5 text-white text-sm font-medium"
            >
              Message <span aria-hidden="true" className="text-gold">*</span>
            </label>
            <Textarea
              id={fieldId("message")}
              name="message"
              required
              aria-required="true"
              value={formData.message}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Tell me about your project, idea, or opportunity…"
              disabled={sending || emailSent}
              className="min-h-[130px]"
            />
          </div>

          {/* reCAPTCHA notice (accessibility + legal) */}
          <p className="text-gray-500 text-xs leading-relaxed">
            This form is protected by reCAPTCHA.{" "}
            <a
              href="https://policies.google.com/privacy"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:text-yellow-400 underline"
            >
              Privacy Policy
            </a>{" "}
            and{" "}
            <a
              href="https://policies.google.com/terms"
              target="_blank"
              rel="noreferrer"
              className="text-gold hover:text-yellow-400 underline"
            >
              Terms of Service
            </a>{" "}
            apply.
          </p>

          {/* Submit */}
          {!emailSent && (
            <Button
              type="submit"
              disabled={sending}
              aria-disabled={sending}
              className="w-full sm:w-auto"
            >
              <Send
                className="w-4 h-4 mr-2"
                aria-hidden="true"
              />
              {sending ? "Sending…" : "Send Message"}
            </Button>
          )}
        </form>

        {/* Resume download — unlocked after submission */}
        {emailSent && (
          <Button
            onClick={downloadResume}
            variant="outline"
            className="mt-5 w-full sm:w-auto"
            aria-label="Download Neo Mokhele's resume as PDF"
          >
            <Download className="w-4 h-4 mr-2" aria-hidden="true" />
            Download Resume
          </Button>
        )}

        <ToastContainer
          position="bottom-right"
          autoClose={5000}
          theme="dark"
          aria-label="Notifications"
        />
      </div>
    </section>
  );
};

export default ContactFormSectionComponent;
