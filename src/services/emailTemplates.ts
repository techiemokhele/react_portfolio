/**
 * emailTemplates.ts
 *
 * HTML source for the two EmailJS templates.
 * These are NOT used at runtime — they exist purely as reference so you can
 * copy-paste them into the EmailJS template editor on the dashboard.
 *
 * Double-brace syntax ({{variable}}) is EmailJS template syntax.
 *
 * ── How to use ───────────────────────────────────────────────────────────────
 * 1. Go to https://dashboard.emailjs.com/admin/templates
 * 2. Click "Create New Template"
 * 3. Switch the editor to "HTML" mode
 * 4. Paste ADMIN_TEMPLATE_HTML or CONFIRM_TEMPLATE_HTML
 * 5. Set the Subject line shown below each template
 * 6. Save and copy the Template ID to your .env file
 * ─────────────────────────────────────────────────────────────────────────────
 */

export const PORTFOLIO_URL = "https://neo-mokhele-react-portfolio.vercel.app";
export const ADMIN_EMAIL = "neomokhele23@gmail.com";
export const RESUME_URL = `${PORTFOLIO_URL}/resume/NeoMokhele_Resume_Latest.pdf`;
export const PROFILE_IMAGE_URL = `${PORTFOLIO_URL}/images/neo.jpg`;

// ── Shared styles ─────────────────────────────────────────────────────────────
const BASE_STYLES = `
  font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  max-width: 580px;
  margin: 0 auto;
  background: #0a0a0a;
  color: #f1f5f9;
  padding: 32px;
  border-radius: 12px;
  border: 1px solid #1f2937;
`;

// ── Subject lines ─────────────────────────────────────────────────────────────
export const ADMIN_SUBJECT = "📩 Portfolio contact: {{from_name}}";
export const CONFIRM_SUBJECT = "Thanks for reaching out, {{to_name}}! ✨";

// ── Admin notification template ───────────────────────────────────────────────
export const ADMIN_TEMPLATE_HTML = `
<div style="${BASE_STYLES}">
  <!-- Header -->
  <div style="text-align:center;margin-bottom:28px;">
    <img
      src="${PROFILE_IMAGE_URL}"
      alt="Neo Mokhele"
      width="80"
      height="80"
      style="border-radius:50%;border:2px solid #D4AF37;display:inline-block;"
    />
    <h1 style="color:#D4AF37;font-size:20px;margin:12px 0 4px;">
      New Portfolio Contact
    </h1>
    <p style="color:#6b7280;font-size:13px;margin:0;">
      Someone reached out via your portfolio contact form
    </p>
  </div>

  <!-- Sender info -->
  <div style="background:#111;padding:20px;border-radius:8px;margin-bottom:16px;border-left:4px solid #D4AF37;">
    <p style="margin:0 0 8px;font-size:14px;">
      <strong style="color:#D4AF37;">Name:</strong>&nbsp;{{from_name}}
    </p>
    <p style="margin:0 0 8px;font-size:14px;">
      <strong style="color:#D4AF37;">Email:</strong>&nbsp;
      <a href="mailto:{{from_email}}" style="color:#D4AF37;">{{from_email}}</a>
    </p>
    <p style="margin:0;font-size:14px;">
      <strong style="color:#D4AF37;">Sent:</strong>&nbsp;{{sent_at}}
    </p>
  </div>

  <!-- Message -->
  <div style="background:#111;padding:20px;border-radius:8px;margin-bottom:24px;">
    <p style="color:#D4AF37;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;">
      Message
    </p>
    <p style="line-height:1.8;color:#e2e8f0;white-space:pre-wrap;margin:0;font-size:14px;">
      {{message}}
    </p>
  </div>

  <!-- CTA -->
  <div style="text-align:center;margin-bottom:24px;">
    <a
      href="mailto:{{from_email}}?subject=Re: Your message to Neo Mokhele"
      style="background:#D4AF37;color:#fff;padding:12px 28px;border-radius:24px;text-decoration:none;font-weight:600;font-size:14px;display:inline-block;"
    >
      Reply to {{from_name}}
    </a>
  </div>

  <!-- Footer -->
  <p style="text-align:center;color:#4b5563;font-size:11px;margin:0;">
    Sent from
    <a href="${PORTFOLIO_URL}" style="color:#D4AF37;text-decoration:none;">
      Neo Mokhele Portfolio
    </a>
  </p>
</div>
`;

// ── User confirmation template ────────────────────────────────────────────────
export const CONFIRM_TEMPLATE_HTML = `
<div style="${BASE_STYLES}">
  <!-- Header -->
  <div style="text-align:center;margin-bottom:28px;">
    <img
      src="${PROFILE_IMAGE_URL}"
      alt="Neo Mokhele"
      width="80"
      height="80"
      style="border-radius:50%;border:2px solid #D4AF37;display:inline-block;"
    />
    <h1 style="color:#D4AF37;font-size:22px;margin:12px 0 6px;">
      Hey {{to_name}}, thanks for reaching out!
    </h1>
    <p style="color:#6b7280;font-size:14px;margin:0;">
      I've received your message and will reply within 1 business day.
    </p>
  </div>

  <!-- Message preview -->
  <div style="background:#111;padding:20px;border-radius:8px;margin-bottom:20px;border-left:4px solid #D4AF37;">
    <p style="color:#D4AF37;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;">
      Your message
    </p>
    <p style="line-height:1.8;color:#9ca3af;font-style:italic;margin:0;font-size:13px;">
      {{message_preview}}
    </p>
  </div>

  <!-- CTAs -->
  <div style="background:#111;padding:20px;border-radius:8px;margin-bottom:24px;">
    <p style="color:#D4AF37;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1px;margin:0 0 10px;">
      While you wait
    </p>
    <p style="line-height:1.7;color:#e2e8f0;margin:0 0 16px;font-size:14px;">
      Feel free to explore my portfolio or download my latest resume:
    </p>
    <table role="presentation" cellpadding="0" cellspacing="0" border="0">
      <tr>
        <td style="padding-right:12px;">
          <a
            href="${PORTFOLIO_URL}"
            style="background:#D4AF37;color:#fff;padding:10px 22px;border-radius:24px;text-decoration:none;font-weight:600;font-size:13px;display:inline-block;"
          >
            View Portfolio
          </a>
        </td>
        <td>
          <a
            href="${RESUME_URL}"
            style="border:1px solid #D4AF37;color:#D4AF37;padding:10px 22px;border-radius:24px;text-decoration:none;font-weight:600;font-size:13px;display:inline-block;"
          >
            Download Resume
          </a>
        </td>
      </tr>
    </table>
  </div>

  <!-- Signature -->
  <div style="border-top:1px solid #1f2937;padding-top:20px;text-align:center;margin-bottom:20px;">
    <p style="font-size:15px;margin:0 0 4px;">
      <strong style="color:#D4AF37;">Neo Mokhele</strong>
    </p>
    <p style="color:#6b7280;font-size:13px;margin:0 0 4px;">Intermediate Frontend Developer</p>
    <p style="color:#6b7280;font-size:13px;margin:0;">Springs, Gauteng, South Africa</p>
    <p style="margin:8px 0 0;">
      <a href="mailto:${ADMIN_EMAIL}" style="color:#D4AF37;font-size:13px;text-decoration:none;">
        ${ADMIN_EMAIL}
      </a>
    </p>
  </div>

  <!-- Unsubscribe footer -->
  <p style="text-align:center;color:#4b5563;font-size:11px;line-height:1.6;margin:0;">
    {{unsubscribe_note}}
  </p>
</div>
`;
