import { AdminParams, ConfirmParams } from "@/types/props";

const PORTFOLIO_URL = "https://neo-mokhele-react-portfolio.vercel.app";
const RESUME_URL = `${PORTFOLIO_URL}/resume/Neo_Tsietsi_Mokhele-Resume.pdf`;
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
        <td align="right" valign="top" style="white-space:nowrap;">
          <!--
            Inline SVG icons — no external image requests, works in all major
            email clients (Gmail, Apple Mail, Outlook 365/web, iOS Mail).
            Outlook desktop (2016-2019) may fall back to the alt text links,
            which is still accessible.
          -->
          <a href="${SOCIAL.linkedin}"
             style="display:inline-block;margin-left:8px;vertical-align:middle;"
             title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                 viewBox="0 0 24 24" fill="#D4AF37" role="img"
                 aria-label="LinkedIn">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="${SOCIAL.github}"
             style="display:inline-block;margin-left:8px;vertical-align:middle;"
             title="GitHub">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"
                 viewBox="0 0 24 24" fill="#D4AF37" role="img"
                 aria-label="GitHub">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
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
      ${
        isLink
          ? `<a href="mailto:${value}" style="color:#e2e8f0;text-decoration:none;">${value}</a>`
          : `<span style="color:#e2e8f0;">${value}</span>`
      }
    </p>
  </td>
</tr>`;

const ctaButton = (href: string, label: string, filled = true): string => `
<a href="${href}"
  style="display:inline-block;padding:11px 24px;border-radius:24px;
         font-size:13px;font-weight:600;text-decoration:none;
         ${
           filled
             ? "background:#D4AF37;color:#fff;"
             : "border:1px solid #D4AF37;color:#D4AF37;"
         }">
  ${label}
</a>`;

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
          style="background:#0d0d0d;border-radius:10px;border-left:3px solid #D4AF37;margin-bottom:16px;padding:0px 16px;">
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
            <p style="color:#D4AF37;font-size:10px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;margin:0 0 10px;">Message</p>
            <p style="color:#e2e8f0;font-size:14px;line-height:1.8;white-space:pre-wrap;margin:0;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
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
