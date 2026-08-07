import { neon } from "@neondatabase/serverless";

export function getDb() {
  const url = process.env.DATABASE_URL;
  if (!url) {
    // Never expose this to the client; callers return generic errors.
    throw new Error("DATABASE_URL is not set — check .env.local");
  }
  return neon(url);
}
