import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";
import { verifyRecaptcha } from "./lib/recaptcha";
import {
  buildAdminSubject,
  buildAdminHtml,
  buildConfirmSubject,
  buildConfirmHtml,
} from "./lib/emailTemplates";
import { ContactBody } from "./../src/types/props";

const ADMIN_EMAIL = `${process.env.GMAIL_USER}`;
const SENDER_NAME = "Neo Mokhele Portfolio";

const createTransporter = () =>
  nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });

const formatDate = (): string =>
  new Date().toLocaleString("en-ZA", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: "Africa/Johannesburg",
  });

const getFirstName = (name: string): string =>
  name.trim().split(" ")[0] ?? name.trim();

const previewMessage = (msg: string, max = 180): string =>
  msg.length > max ? msg.slice(0, max).trimEnd() + "…" : msg;

export default async function handler(
  req: VercelRequest,
  res: VercelResponse,
): Promise<void> {
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  const { name, email, message, recaptchaToken }: ContactBody = req.body ?? {};

  if (
    !name?.trim() ||
    !email?.trim() ||
    !message?.trim() ||
    !recaptchaToken?.trim()
  ) {
    res
      .status(400)
      .json({ error: "All fields and reCAPTCHA token are required." });
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.trim())) {
    res.status(400).json({ error: "Invalid email address." });
    return;
  }

  if (message.trim().length < 10) {
    res.status(400).json({ error: "Message must be at least 10 characters." });
    return;
  }

  const recaptchaOk = await verifyRecaptcha(recaptchaToken.trim());
  if (!recaptchaOk) {
    res
      .status(403)
      .json({ error: "reCAPTCHA verification failed. Please try again." });
    return;
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("Gmail credentials missing from environment");
    res.status(500).json({ error: "Server configuration error." });
    return;
  }

  const transporter = createTransporter();
  const from = `"${SENDER_NAME}" <${process.env.GMAIL_USER}>`;
  const sentAt = formatDate();
  const cleanName = name.trim();
  const cleanEmail = email.trim();
  const cleanMessage = message.trim();

  try {
    await transporter.sendMail({
      from,
      to: ADMIN_EMAIL,
      replyTo: cleanEmail,
      subject: buildAdminSubject(cleanName),
      html: buildAdminHtml({
        fromName: cleanName,
        fromEmail: cleanEmail,
        message: cleanMessage,
        sentAt,
      }),
    });

    await transporter.sendMail({
      from,
      to: cleanEmail,
      replyTo: ADMIN_EMAIL,
      subject: buildConfirmSubject(getFirstName(cleanName)),
      html: buildConfirmHtml({
        toName: getFirstName(cleanName),
        toEmail: cleanEmail,
        messagePreview: previewMessage(cleanMessage),
      }),
    });

    res.status(200).json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    res.status(500).json({ error: "Failed to send email. Please try again." });
  }
}
