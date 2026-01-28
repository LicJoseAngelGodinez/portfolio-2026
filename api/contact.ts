import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

// Simple in-memory rate limiting (resets on cold start)
const rateLimitMap = new Map<string, { count: number; timestamp: number }>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const RATE_LIMIT_MAX = 3; // max 3 requests per minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimitMap.get(ip);

  if (!record || now - record.timestamp > RATE_LIMIT_WINDOW) {
    rateLimitMap.set(ip, { count: 1, timestamp: now });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function sanitize(str: string): string {
  return str.trim().slice(0, 5000);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  // Rate limiting
  const ip = (req.headers['x-forwarded-for'] as string)?.split(',')[0] || 'unknown';
  if (isRateLimited(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  const { email, message } = req.body;

  // Validation
  if (!email || !message) {
    return res.status(400).json({ error: 'Email and message are required' });
  }

  const sanitizedEmail = sanitize(email);
  const sanitizedMessage = sanitize(message);

  if (!isValidEmail(sanitizedEmail)) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (sanitizedMessage.length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters' });
  }

  try {
    await resend.emails.send({
      from: 'Portfolio Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL || '',
      replyTo: sanitizedEmail,
      subject: `New contact from ${sanitizedEmail}`,
      text: sanitizedMessage,
      html: `
        <h2>New Contact Message</h2>
        <p><strong>From:</strong> ${sanitizedEmail}</p>
        <hr />
        <p>${sanitizedMessage.replace(/\n/g, '<br />')}</p>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Resend error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
