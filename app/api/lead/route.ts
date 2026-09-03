import { NextResponse } from "next/server";
import { z } from "zod";

/**
 * Lead capture for the marketing site (contact, demo and early-access requests).
 *
 * Leads are delivered by email via Resend. All secrets (RESEND_API_KEY) are
 * read here on the server only — never exposed to the client. The recipient is
 * always LEAD_TO_EMAIL; browser input can never choose a recipient.
 */

const DEMO_SIZES = ["1–10", "11–50", "51–200", "201–1000", "1000+"] as const;

/** Collapse whitespace and strip control characters from single-line fields. */
function singleLine(value: string) {
  return value
    .replace(/[\u0000-\u001f\u007f]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, 200);
}

function paragraph(value: string) {
  return value.replace(/\r\n/g, "\n").trim().slice(0, 2000);
}

const leadSchema = z
  .object({
    type: z.enum(["contact", "demo", "early-access"]),
    name: z.string().transform(singleLine).pipe(z.string().min(1).max(200)),
    email: z.string().transform((v) => v.trim().toLowerCase().slice(0, 200)).pipe(z.email()),
    company: z.string().transform(singleLine).pipe(z.string().min(1).max(200)),
    jobTitle: z.string().transform(singleLine).pipe(z.string().max(200)).optional(),
    size: z
      .string()
      .transform(singleLine)
      .pipe(z.enum(DEMO_SIZES))
      .optional(),
    message: z.string().transform(paragraph).pipe(z.string().max(2000)).optional(),
  })
  .refine(
    // only the general contact form requires a message
    (data) => data.type !== "contact" || (data.message ?? "").length > 0,
    { path: ["message"] }
  );

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type LeadData = z.infer<typeof leadSchema>;

function emailHtml(type: LeadData["type"], data: LeadData, receivedAt: string) {
  const rows: [string, string][] = [
    ["Lead type", type === "demo" ? "Demo request" : type === "early-access" ? "Early access request" : "Contact enquiry"],
    ["Full name", data.name],
    ["Work email", data.email],
    ["Company", data.company],
  ];
  if (data.jobTitle) rows.push(["Job title", data.jobTitle]);
  if (data.size) rows.push(["Company size", data.size]);
  if (data.message) rows.push(["Message", data.message.replace(/\n/g, "<br />")]);
  rows.push(["Submitted", receivedAt]);

  const table = rows
    .map(
      ([label, value]) =>
        `<tr><td style="padding:8px 16px;font-weight:600;color:#0f172a;vertical-align:top;white-space:nowrap;">${label}</td><td style="padding:8px 16px;color:#334155;">${value}</td></tr>`
    )
    .join("");

  return `<div style="font-family:Arial,Helvetica,sans-serif;max-width:560px;margin:0 auto;">
  <h2 style="color:#0f172a;font-size:18px;">New Aderiqo website lead</h2>
  <table style="border-collapse:collapse;width:100%;font-size:14px;">${table}</table>
</div>`;
}

function emailText(type: LeadData["type"], data: LeadData, receivedAt: string) {
  const lines = [
    `Lead type: ${type === "demo" ? "Demo request" : type === "early-access" ? "Early access request" : "Contact enquiry"}`,
    `Full name: ${data.name}`,
    `Work email: ${data.email}`,
    `Company: ${data.company}`,
    data.jobTitle ? `Job title: ${data.jobTitle}` : null,
    data.size ? `Company size: ${data.size}` : null,
    data.message ? `Message:\n${data.message}` : null,
    `Submitted: ${receivedAt}`,
  ].filter(Boolean);
  return lines.join("\n");
}

function subjectFor(type: LeadData["type"]) {
  if (type === "demo") return "New Aderiqo Demo Request";
  if (type === "early-access") return "New Aderiqo Early Access Request";
  return "New Aderiqo Contact Enquiry";
}

export async function POST(request: Request) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const parsed = leadSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid or missing fields" }, { status: 400 });
  }
  const data = parsed.data;

  const to = process.env.LEAD_TO_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!to || !from) {
    // Configuration error — log server-side details, return a generic message.
    console.error("Lead delivery is not configured: set LEAD_FROM_EMAIL and LEAD_TO_EMAIL");
    return NextResponse.json({ error: "Lead delivery is not configured" }, { status: 500 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Lead delivery is not configured: set RESEND_API_KEY");
    return NextResponse.json({ error: "Lead delivery is not configured" }, { status: 500 });
  }

  const receivedAt = new Date().toISOString();
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        subject: subjectFor(data.type),
        text: emailText(data.type, data, receivedAt),
        html: emailHtml(data.type, data, receivedAt),
      }),
    });
    if (!res.ok) {
      console.error("Lead email delivery failed", res.status);
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } catch (err) {
    console.error("Lead email delivery error", err instanceof Error ? err.message : err);
    return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}