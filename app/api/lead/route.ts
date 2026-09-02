import { NextResponse } from "next/server";

/**
 * Lead capture for the marketing site (contact + demo requests).
 *
 * If a RESEND_API_KEY is configured server-side, the lead is delivered by
 * email. Keys are only ever read here on the server — never exposed to the
 * client. No authenticated CRM data is involved.
 */
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, string>;
  if (!name?.trim() || !email?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (apiKey) {
    try {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: process.env.LEAD_FROM_EMAIL ?? "Aderiqo Website <onboarding@resend.dev>",
          to: process.env.LEAD_TO_EMAIL ?? "sales@ardenzatech.com",
          subject: `Aderiqo website ${body.type === "demo" ? "demo request" : "contact"} — ${name}`,
          text: JSON.stringify(body, null, 2),
        }),
      });
      if (!res.ok) {
        console.error("Lead email delivery failed", await res.text());
        return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
      }
    } catch (err) {
      console.error("Lead email delivery error", err);
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  }

  return NextResponse.json({ ok: true });
}