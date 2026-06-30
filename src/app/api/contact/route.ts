import { NextResponse } from "next/server";

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);

export async function POST(request: Request) {
  let data: Record<string, string>;
  try {
    data = (await request.json()) as Record<string, string>;
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const name = (data.name ?? "").trim();
  const email = (data.email ?? "").trim();
  const message = (data.message ?? "").trim();

  const errors: Record<string, string> = {};
  if (!name) errors.name = "Please enter your name.";
  if (!email) errors.email = "Please enter your email address.";
  else if (!isEmail(email)) errors.email = "Please enter a valid email address.";
  if (!message) errors.message = "Please enter a message.";
  if (Object.keys(errors).length) {
    return NextResponse.json({ errors }, { status: 422 });
  }

  // Forward to an email provider when configured (set CONTACT_WEBHOOK_URL in env).
  // Without one, the message is accepted and logged so the form works end to end.
  const webhook = process.env.CONTACT_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      if (!res.ok) throw new Error("provider error");
    } catch {
      return NextResponse.json({ error: "Delivery failed" }, { status: 502 });
    }
  } else {
    console.info("[contact] message received from", email);
  }

  return NextResponse.json({ ok: true });
}
