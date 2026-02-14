import { NextResponse } from "next/server";
import { Resend } from "resend";

type ContactPayload = {
  name: string;
  email: string;
  subject: string;
  message: string;
  company?: string; // honeypot field for bots
};

const resend = new Resend(process.env.RESEND_API_KEY);

const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Partial<ContactPayload>;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();
    const company = (body.company ?? "").trim();

    if (company) {
      return NextResponse.json({ ok: true }); // silently ignore bots that fill the honeypot
    }

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }

    const to = "hctaylor@alumni.stanford.edu";

    const from = "Houston Taylor <houstontaylor@contact.houstontaylor.dev>";

    const html = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.5">
        <h2>New message from your portfolio</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Subject:</strong> ${escapeHtml(subject)}</p>
        <hr />
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>
      </div>
    `;

    const notify = await resend.emails.send({
      from,
      to,
      subject: `Portfolio: ${subject}`,
      replyTo: email,
      html,
    });

    if (notify.error) {
      return NextResponse.json({ ok: false, error: notify.error.message }, { status: 500 });
    }

    const confirmationHtml = `
      <div style="font-family: ui-sans-serif, system-ui; line-height: 1.6">
        <h2>🚀 Message received!</h2>
        <p>Hi ${escapeHtml(name)},</p>
        <p>Thanks for reaching out — I got your message and will get back to you soon.</p>

        <hr />

        <p><strong>Your message:</strong></p>
        <p style="white-space: pre-wrap">${escapeHtml(message)}</p>

        <br />
        <p>— Houston</p>
      </div>
    `;

    await resend.emails.send({
      from,
      to: email,
      subject: "Thanks for reaching out ✨",
      html: confirmationHtml,
    });

    return NextResponse.json({ ok: true }, { status: 200 });
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request" }, { status: 400 });
  }
}
