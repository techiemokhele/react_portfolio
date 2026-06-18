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
  payload: SendEmailPayload,
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
