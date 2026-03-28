import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

type LeadRequest = {
  name?: string;
  email?: string;
  company?: string;
  requirement?: string;
};

const smtpHost = process.env.SMTP_HOST;
const smtpPort = Number(process.env.SMTP_PORT ?? 587);
const smtpUser = process.env.SMTP_USER;
const smtpPass = process.env.SMTP_PASS;
const leadToEmail = process.env.LEAD_TO_EMAIL;
const leadFromEmail = process.env.LEAD_FROM_EMAIL ?? smtpUser;
const leadFromName = process.env.LEAD_FROM_NAME ?? "Aradient Website";

const transporter =
  smtpHost && smtpUser && smtpPass
    ? nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpPort === 465,
        auth: {
          user: smtpUser,
          pass: smtpPass,
        },
      })
    : null;

const sanitize = (value: string) => value.replace(/[<>&]/g, "");

export async function POST(request: Request) {
  if (!transporter || !leadToEmail || !leadFromEmail) {
    return NextResponse.json(
      { error: "Lead email service is not configured." },
      { status: 500 },
    );
  }

  const body = (await request.json()) as LeadRequest;
  const name = body.name?.trim() ?? "";
  const email = body.email?.trim() ?? "";
  const company = body.company?.trim() ?? "";
  const requirement = body.requirement?.trim() ?? "";

  if (!name || !email || !requirement) {
    return NextResponse.json(
      { error: "Name, email, and requirement are required." },
      { status: 400 },
    );
  }

  try {
    await transporter.sendMail({
      from: `"${leadFromName}" <${leadFromEmail}>`,
      to: leadToEmail,
      replyTo: email,
      subject: `New Aradient lead from ${name}`,
      text: [
        "A new lead form submission was received.",
        "",
        `Name: ${name}`,
        `Email: ${email}`,
        `Company: ${company || "Not provided"}`,
        "",
        "Requirement:",
        requirement,
      ].join("\n"),
      html: `
        <h2>New lead form submission</h2>
        <p><strong>Name:</strong> ${sanitize(name)}</p>
        <p><strong>Email:</strong> ${sanitize(email)}</p>
        <p><strong>Company:</strong> ${sanitize(company || "Not provided")}</p>
        <p><strong>Requirement:</strong></p>
        <p>${sanitize(requirement).replace(/\n/g, "<br />")}</p>
      `,
    });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send lead email", error);

    return NextResponse.json(
      { error: "Unable to send your request right now." },
      { status: 500 },
    );
  }
}
