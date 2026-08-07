import { NextResponse } from "next/server";
import { getDb } from "@/lib/db";

const MAX_NAME_LENGTH = 100;
const MAX_EMAIL_LENGTH = 254;
const MAX_MESSAGE_LENGTH = 1000;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, website } = body;

    // Honeypot: real users never fill this hidden field. Pretend success.
    if (typeof website === "string" && website.trim()) {
      return NextResponse.json({ ok: true });
    }

    if (typeof name !== "string" || !name.trim() || name.trim().length > MAX_NAME_LENGTH) {
      return NextResponse.json(
        { error: "Please enter your name" },
        { status: 400 },
      );
    }

    const cleanEmail = typeof email === "string" ? email.trim().toLowerCase() : "";
    if (!cleanEmail || cleanEmail.length > MAX_EMAIL_LENGTH || !EMAIL_REGEX.test(cleanEmail)) {
      return NextResponse.json(
        { error: "Please enter a valid email address" },
        { status: 400 },
      );
    }

    const cleanMessage = typeof message === "string" ? message.trim() : "";
    if (cleanMessage.length > MAX_MESSAGE_LENGTH) {
      return NextResponse.json(
        { error: "That message is a bit too long" },
        { status: 400 },
      );
    }

    const sql = getDb();
    await sql`
      INSERT INTO notify_signups (name, email, message)
      VALUES (${name.trim()}, ${cleanEmail}, ${cleanMessage})
      ON CONFLICT (lower(email)) DO UPDATE
        SET name = EXCLUDED.name, message = EXCLUDED.message
    `;

    return NextResponse.json({ ok: true });
  } catch (err) {
    // Log the real cause on the server; never leak it to the browser.
    console.error("Notify route error:", err);
    return NextResponse.json(
      { error: "Something went wrong — please try again" },
      { status: 500 },
    );
  }
}
