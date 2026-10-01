import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json({ error: "All fields are required." }, { status: 400 });
    }

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:520px;margin:0 auto;padding:24px;background:#18181b;color:#e4e4e7;border-radius:8px">
          <h2 style="margin:0 0 16px;font-size:20px;color:#ffffff">New Contact Form Submission</h2>
          <p style="margin:0 0 8px"><strong style="color:#a1a1aa">Name:</strong> ${name}</p>
          <p style="margin:0 0 8px"><strong style="color:#a1a1aa">Email:</strong> ${email}</p>
          <p style="margin:0 0 8px"><strong style="color:#a1a1aa">Message:</strong></p>
          <p style="margin:0;padding:12px;background:#27272a;border-radius:6px;white-space:pre-wrap">${message}</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Mail error:", err);
    return NextResponse.json({ error: "Failed to send message." }, { status: 500 });
  }
}
