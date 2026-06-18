/// <reference types="vite/client" />

interface ImportMetaEnv {
  /** Web3Forms fallback key (kept for backwards compat) */
  readonly VITE_WEB3FORMS_KEY: string;

  /** EmailJS public key (Project > Account > Public Key) */
  readonly VITE_EMAILJS_PUBLIC_KEY: string;
  /** EmailJS email service ID */
  readonly VITE_EMAILJS_SERVICE_ID: string;
  /** EmailJS template ID — admin notification email */
  readonly VITE_EMAILJS_ADMIN_TEMPLATE_ID: string;
  /** EmailJS template ID — sender confirmation email */
  readonly VITE_EMAILJS_CONFIRM_TEMPLATE_ID: string;

  /** Google reCAPTCHA v3 site key */
  readonly VITE_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
