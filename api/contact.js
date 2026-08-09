import { Resend } from 'resend';

// Read API key safely from environment variable (RESEND_API_KEY)
const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const data = await resend.emails.send({
      from: 'Portfolio Site <onboarding@resend.dev>',
      to: ['joshipawan2021@gmail.com'],
      subject: `New Portfolio Message from ${name}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #3B82F6;">New Message from Portfolio Website</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <div style="background: #f4f4f5; padding: 15px; border-radius: 8px;">
            ${message.replace(/\n/g, '<br/>')}
          </div>
          <hr style="margin-top: 20px; border: none; border-top: 1px solid #e4e4e7;" />
          <p style="font-size: 12px; color: #71717a;">Sent via Resend API from Pawan Joshi Portfolio</p>
        </div>
      `
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    console.error('Resend API Error:', error);
    return res.status(500).json({ error: error.message || 'Failed to send email' });
  }
}
