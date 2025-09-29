import type { VercelRequest, VercelResponse } from '@vercel/node';

// If you prefer Nodemailer + SMTP, swap this out. Using SendGrid here for simplicity.
import sgMail from '@sendgrid/mail';

// Environment variables (configure in Vercel project settings)
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY || '';
const TO_EMAIL = process.env.TO_EMAIL || 'hosea@sunlifehousingcorp.com';
const FROM_EMAIL = process.env.FROM_EMAIL || 'no-reply@sunlifehousingcorp.com';

if (SENDGRID_API_KEY) {
  sgMail.setApiKey(SENDGRID_API_KEY);
}

function isValidEmail(email: string) {
  return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ ok: false, error: 'Method not allowed' });
  }

  if (!SENDGRID_API_KEY) {
    return res.status(500).json({ ok: false, error: 'Email service not configured' });
  }

  try {
    const { name, email, phone, notes, _hp } = req.body || {};

    // Simple honeypot (bots often fill hidden fields)
    if (_hp) {
      return res.status(200).json({ ok: true });
    }

    if (!name || !email || !phone) {
      return res.status(400).json({ ok: false, error: 'Missing required fields' });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({ ok: false, error: 'Invalid email address' });
    }

    const subject = `New Contact Form Submission — Sunlife Corporate Housing`;
    const text = [
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      `Notes: ${notes || '(none)'} `,
      '',
      `Submitted at: ${new Date().toISOString()}`,
    ].join('\n');

    const html = `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Notes:</strong><br/>${(notes || '').replace(/\n/g, '<br/>')}</p>
      <hr/>
      <p style="color:#667; font-size:12px;">Submitted at: ${new Date().toISOString()}</p>
    `;

    const msg = {
      to: TO_EMAIL,
      from: FROM_EMAIL,
      subject,
      text,
      html,
    } as sgMail.MailDataRequired;

    await sgMail.send(msg);

    return res.status(200).json({ ok: true });
  } catch (err: unknown) {
    let detail: string | undefined;
    if (typeof err === 'object' && err !== null) {
      // Attempt to read common SendGrid error structure
      const e = err as { response?: { body?: unknown }, message?: string };
      detail = typeof e.response?.body === 'string' ? e.response.body : e.message;
    }
    console.error('Contact API error:', detail || err);
    return res.status(500).json({ ok: false, error: 'Failed to send message' });
  }
}
