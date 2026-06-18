/// <reference types="vite/client" />

/**
 * Client-side environment variables (VITE_ prefix, embedded at build time).
 * Server-side variables (GMAIL_USER, GMAIL_APP_PASSWORD, RECAPTCHA_SECRET_KEY)
 * live only in Vercel project settings — never exposed to the browser.
 */
interface ImportMetaEnv {
  /** Google reCAPTCHA v3 site key — safe to expose to client */
  readonly VITE_RECAPTCHA_SITE_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
