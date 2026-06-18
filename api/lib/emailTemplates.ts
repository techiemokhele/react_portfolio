/**
 * Fully custom HTML email templates.
 * Inline styles only — required for email client compatibility.
 * Design mirrors the portfolio: #0a0a0a background, #D4AF37 gold, Inter font.
 */

const PORTFOLIO_URL = "https://neo-mokhele-react-portfolio.vercel.app";
const RESUME_URL = `${PORTFOLIO_URL}/resume/NeoMokhele_Resume_Latest.pdf`;
const PROFILE_IMG = `${PORTFOLIO_URL}/images/neo.jpg`;

const SOCIAL = {
  linkedin: "https://www.linkedin.com/in/neo-mokhele-458188188/",
  github: "https://github.com/techiemokhele",
  twitter: "https://twitter.com/tsietsineo",
};

const UNSUBSCRIBE_NOTE =
  "You received this one-time confirmation because you submitted the contact form " +
  "on Neo Mokhele's portfolio. You won't receive further emails unless you reach out again. " +
  "To opt out of any future communication, reply with <strong>unsubscribe</strong>.";

/* ── Shared primitives ─────────────────────────────────────────────────────── */

const wrap = (body: string): string => `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <title>Neo Mokhele</title>
</head>
<body style="margin:0;padding:0;background:#0d0d0d;font-family:Inter,-apple-system,BlinkMacSystemFont,'Segoe UI',Helvetica,Arial,sans-serif;">
  <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="background:#0d0d0d;">
    <tr>
      <td align="center" style="padding:32px 16px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="560"
          style="max-width:560px;background:#111;border-radius:16px;border:1px solid #1f2937;overflow:hidden;">
          ${body}
        </table>
        <p style="color:#374151;font-size:11px;text-align:center;margin-top:20px;">
          &copy; ${new Date().getFullYear()} Neo Mokhele &mdash;
          <a href="${PORTFOLIO_URL}" style="color:#D4AF37;text-decoration:none;">Portfolio</a>
        </p>
      </td>
    </tr>
  </table>
</body>
</html>`;

const goldBar = (): string => `
<tr>
  <td style="height:4px;background:linear-gradient(90deg,#D4AF37,#b97a14);"></td>
</tr>`;

const header = (subtitle: string): string => `
${goldBar()}
<tr>
  <td align="center" style="padding:28px 32px 20px;">
    <img
      src="${PROFILE_IMG}"
      alt="Neo Mokhele"
      width="68"
      height="68"
      style="border-radius:50%;border:2px solid #D4AF37;display:block;margin:0 auto 14px;"
    />
    <p style="color:#D4AF37;font-size:11px;font-weight:700;letter-spacing:0.15em;
              text-transform:uppercase;margin:0 0 4px;">Neo Mokhele</p>
    <p style="color:#6b7280;font-size:13px;margin:0;">${subtitle}</p>
  </td>
</tr>`;

const divider = (): string => `
<tr><td style="height:1px;background:#1f2937;margin:0 32px;"></td></tr>`;

const footer = (extra = ""): string => `
${divider()}
<tr>
  <td style="padding:20px 32px;">
    <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%">
      <tr>
        <td>
          <p style="color:#9ca3af;font-size:12px;margin:0 0 4px;">
            <strong style="color:#D4AF37;">Neo Mokhele</strong>
          </p>
          <p style="color:#6b7280;font-size:11px;margin:0 0 2px;">Intermediate Frontend Developer</p>
          <p style="color:#6b7280;font-size:11px;margin:0;">Springs, Gauteng, South Africa</p>
        </td>
        <td align="right" valign="top">
          <a href="${SOCIAL.linkedin}" style="display:inline-block;margin-left:8px;">
            <img src="https://cdn.simpleicons.org/linkedin/D4AF37" alt="LinkedIn" width="18" height="18" />
          </a>
          <a href="${SOCIAL.github}" style="display:inline-block;margin-left:8px;">
            <img src="https://cdn.simpleicons.org/github/D4AF37" alt="GitHub" width="18" height="18" />
          </a>
        </td>
      </tr>
    </table>
    ${extra ? `<p style="color:#4b5563;font-size:10px;line-height:1.6;margin:14px 0 0;">${extra}</p>` : ""}
  </td>
</tr>
${goldBar()}`;

const infoRow = (label: string, value: string, isLink = false): string => `
<tr>
  <td style="padding:4px 0;">
    <p style="margin:0;font-size:13px;color:#9ca3af;">
      <span style="color:#D4AF37;font-weight:600;">${label}:&nbsp;</span>
      ${isLink
        ? `<a href="mailto:${value}" style="color:#e2e8f0;text-decoration:none;">${value}</a>`
        : `<span style="color:#e2e8f0;">${value}</span>`}
    </p>
  </td>
</tr>`;

const ctaButton = (href: string, label: string, filled = true): string => `
<a href="${href}"
  style="display:inline-block;padding:11px 24px;border-radius:24px;
         font-size:13px;font-weight:600;text-decoration:none;
         ${filled
    ? "background:#D4AF37;color:#fff;"
    : "border:1px solid #D4AF37;color:#D4AF37;"
  }">
  ${label}
</a>`;

/* ── Admin notification ────────────────────────────────────────────────────── */

interface AdminParams {
  fromName: string;
  fromEmail: string;
  message: string;
  sentAt: string;
}

export const buildAdminSubject = (name: string): string =>
  `📩 Portfolio contact: ${name}`;

export const buildAdminHtml = ({
  fromName,
  fromEmail,
  message,
  sentAt,
}: AdminParams): string =>
  wrap(`
    ${header("Someone reached out via your portfolio")}
    <tr>
      <td style="padding:0 32px 24px;">

        <!-- Sender card -->
        <table role="presentation" cellpadding="12" cellspacing="0" border="0" width="100%"
          style="background:#0d0d0d;border-radius:10px;border-left:3px solid #D4AF37;margin-bottom:16px;">
          <tr><td>
            ${infoRow("Name", fromName)}
            ${infoRow("Email", fromEmail, true)}
            ${infoRow("Received", sentAt)}
          </td></tr>
        </table>

        <!-- Message card -->
        <table role="presentation" cellpadding="16" cellspacing="0" border="0" width="100%"
          style="background:#0d0d0d;border-radius:10px;margin-bottom:24px;">
          <tr><td>
            <p style="color:#D4AF37;font-size:10px;font-weight:700;letter-spacing:0.12em;
                      text-transform:uppercase;margin:0 0 10px;">Message</p>
            <p style="color:#e2e8f0;font-size:14px;line-height:1.8;white-space:pre-wrap;margin:0;">
              ${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}
            </p>
          </td></tr>
        </table>

        <!-- Reply CTA -->
        <table role="presentation" cellpadding="0" cellspacing="0" border="0">
          <tr>
            <td>
              ${ctaButton(`mailto:${fromEmail}?subject=Re: Your portfolio message`, `Reply to ${fromName}`)}
            </td>
          </tr>
        </table>

      </td>
    </tr>
    ${footer()}
  `);

/* ── User confirmation ─────────────────────────────────────────────────────── */

interface ConfirmParams {
  toName: string;
  toEmail: string;
  messagePreview: string;
}

export const buildConfirmSubject = (firstName: string): string =>
  `Got your message, ${firstName}! ✨`;

export const buildConfirmHtml = ({
  toName,
  messagePreview,
}: ConfirmParams): string =>
  wrap(`
    ${header("Intermediate Frontend Developer")}
    <tr>
      <td style="padding:0 32px 8px;">
        <h1 style="color:#fff;font-size:22px;font-weight:800;margin:0 0 8px;">
          Hey ${toName}, thanks for reaching out!
        </h1>
        <p style="color:#9ca3af;font-size:14px;line-height:1.7;margin:0 0 20px;">
          I&apos;ve received your message and will get back to you within
          <strong style="color:#D4AF37;">one business day</strong>.
          Here&apos;s a summary of what you sent.
        </p>
      </td>
    </tr>

    <!-- Message preview -->
    <tr>
      <td style="padding:0 32px 20px;">
        <table role="presentation" cellpadding="16" cellspacing="0" border="0" width="100%"
          style="background:#0d0d0d;border-radius:10px;border-left:3px solid #D4AF37;">
          <tr><td>
            <p style="color:#D4AF37;font-size:10px;font-weight:700;letter-spacing:0.12em;
                      text-transform:uppercase;margin:0 0 8px;">Your message</p>
            <p style="color:#9ca3af;font-size:13px;font-style:italic;line-height:1.7;margin:0;">
              &ldquo;${messagePreview.replace(/</g, "&lt;").replace(/>/g, "&gt;")}&rdquo;
            </p>
          </td></tr>
        </table>
      </td>
    </tr>

    <!-- CTAs -->
    <tr>
      <td style="padding:0 32px 28px;">
        <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%"
          style="background:#0d0d0d;border-radius:10px;padding:20px;">
          <tr><td style="padding:20px;">
            <p style="color:#D4AF37;font-size:10px;font-weight:700;letter-spacing:0.12em;
                      text-transform:uppercase;margin:0 0 10px;">While you wait</p>
            <p style="color:#9ca3af;font-size:13px;line-height:1.7;margin:0 0 16px;">
              Explore the portfolio or grab my latest resume:
            </p>
            <table role="presentation" cellpadding="0" cellspacing="0" border="0">
              <tr>
                <td style="padding-right:10px;">
                  ${ctaButton(PORTFOLIO_URL, "View Portfolio")}
                </td>
                <td>
                  ${ctaButton(RESUME_URL, "Download Resume", false)}
                </td>
              </tr>
            </table>
          </td></tr>
        </table>
      </td>
    </tr>

    ${footer(UNSUBSCRIBE_NOTE)}
  `);
