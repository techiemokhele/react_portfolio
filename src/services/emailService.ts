/**
 * emailService.ts
 *
 * Wraps @emailjs/browser so the rest of the app never imports EmailJS directly.
 * All EmailJS IDs and keys come from environment variables — never hardcoded.
 *
 * ── EmailJS setup (one-time) ─────────────────────────────────────────────────
 * 1. Create a free account at https://www.emailjs.com
 * 2. Add an email service (Gmail recommended) — copy the Service ID
 * 3. Create the ADMIN template using ADMIN_TEMPLATE_HTML below — copy Template ID
 * 4. Create the CONFIRM template using CONFIRM_TEMPLATE_HTML below — copy Template ID
 * 5. Copy your Public Key from Account > General
 * 6. Add all four values to your .env file (see vite-env.d.ts for var names)
 * 7. In each template's Settings tab, enable reCAPTCHA v3 and paste your site key
 * ─────────────────────────────────────────────────────────────────────────────
 */

import emailjs from "@emailjs/browser";
import type { AdminEmailParams, ConfirmEmailParams } from "@/types";

const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const ADMIN_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_ADMIN_TEMPLATE_ID;
const CONFIRM_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_CONFIRM_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

type EmailJSParams = Record<string, string>;

/**
 * Sends an admin-notification email to Neo Mokhele.
 * Template variables: from_name, from_email, message, reply_to, sent_at,
 *                     to_email, portfolio_url, recaptcha_token
 */
export const sendAdminNotification = (
  params: AdminEmailParams
): Promise<void> =>
  emailjs
    .send(SERVICE_ID, ADMIN_TEMPLATE_ID, params as EmailJSParams, {
      publicKey: PUBLIC_KEY,
    })
    .then(() => undefined);

/**
 * Sends a confirmation email to the person who filled in the form.
 * Template variables: to_name, to_email, from_name, from_email, message,
 *                     message_preview, reply_to, sent_at, portfolio_url,
 *                     resume_url, unsubscribe_note, recaptcha_token
 */
export const sendUserConfirmation = (
  params: ConfirmEmailParams
): Promise<void> =>
  emailjs
    .send(SERVICE_ID, CONFIRM_TEMPLATE_ID, params as EmailJSParams, {
      publicKey: PUBLIC_KEY,
    })
    .then(() => undefined);
