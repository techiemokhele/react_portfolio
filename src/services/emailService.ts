/**
 * emailService.ts
 *
 * Thin client-side wrapper around the /api/send-email serverless function.
 * All SMTP credentials and reCAPTCHA secret keys live on the server —
 * this module only passes validated, sanitised data to the endpoint.
 */

export interface SendEmailPayload {
  name: string;
  email: string;
  message: string;
  recaptchaToken: string;
}

export interface SendEmailResult {
  success: boolean;
  error?: string;
}

export const sendContactEmail = async (
  payload: SendEmailPayload
): Promise<SendEmailResult> => {
  const res = await fetch("/api/send-email", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  const data = await res.json();

  if (!res.ok) {
    return { success: false, error: data.error ?? "Failed to send message." };
  }

  return { success: true };
};
