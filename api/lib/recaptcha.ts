/**
 * Server-side reCAPTCHA v3 token verification.
 * Called from the /api/send-email handler — never run in the browser.
 */

const VERIFY_URL = "https://www.google.com/recaptcha/api/siteverify";
const MIN_SCORE = 0.5;

interface RecaptchaResponse {
  success: boolean;
  score: number;
  action: string;
  challenge_ts: string;
  hostname: string;
  "error-codes"?: string[];
}

export const verifyRecaptcha = async (token: string): Promise<boolean> => {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;
  if (!secretKey) {
    console.warn("RECAPTCHA_SECRET_KEY not set — skipping verification");
    return true;
  }

  const params = new URLSearchParams({ secret: secretKey, response: token });

  const res = await fetch(`${VERIFY_URL}?${params.toString()}`, {
    method: "POST",
  });

  if (!res.ok) return false;

  const data: RecaptchaResponse = await res.json();
  return data.success && data.score >= MIN_SCORE;
};
