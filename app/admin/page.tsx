import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { createHmac, timingSafeEqual } from "node:crypto";
import { getDb } from "@/lib/db";

export const metadata = {
  title: "Sign-ups — Hack-A-Ton",
  robots: { index: false, follow: false },
};

const COOKIE = "admin_session";
const WEEK_S = 7 * 24 * 3600;

function sign(msg: string) {
  return createHmac("sha256", process.env.ADMIN_PASSWORD ?? "").update(msg).digest("hex");
}

function hmacEqual(a: string, b: string) {
  try {
    return timingSafeEqual(Buffer.from(a, "hex"), Buffer.from(b, "hex"));
  } catch {
    return false;
  }
}

function isAuthed(token?: string) {
  if (!process.env.ADMIN_PASSWORD || !token) return false;
  const [exp, sig] = token.split(".");
  if (!exp || !sig || Number(exp) < Date.now()) return false;
  return hmacEqual(sig, sign("admin:" + exp));
}

async function login(formData: FormData) {
  "use server";
  const password = formData.get("password");
  const secret = process.env.ADMIN_PASSWORD;
  const ok =
    secret && typeof password === "string" && hmacEqual(sign(password), sign(secret));
  if (!ok) redirect("/admin?error=1");
  const exp = Date.now() + WEEK_S * 1000;
  (await cookies()).set(COOKIE, `${exp}.${sign("admin:" + exp)}`, {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/admin",
    maxAge: WEEK_S,
  });
  redirect("/admin");
}

export default async function AdminPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const authed = isAuthed((await cookies()).get(COOKIE)?.value);

  if (!authed) {
    const { error } = await searchParams;
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#fff9eb] p-6">
        <form action={login} className="w-full max-w-sm rounded-md-lg border-t-4 border-[#f4bc6a] bg-white p-6 shadow-md-lg">
          <h1 className="varsity-title varsity-layered-burgundy text-2xl uppercase">Admin</h1>
          <label className="mt-4 block text-sm font-medium text-[#1d3557]">
            Password
            <input
              type="password"
              name="password"
              required
              autoFocus
              className="mt-1 w-full rounded-md-sm border border-md-outline/40 px-3 py-2 text-[#1d3557] focus:border-[#7b1113] focus:outline-none"
            />
          </label>
          {error && <p className="mt-2 text-sm text-md-error">Wrong password</p>}
          <button
            type="submit"
            className="mt-4 w-full rounded-none bg-[#2d435b] px-8 py-3 text-lg font-medium text-white transition-colors duration-200 hover:bg-[#7b1113]"
            style={{ fontFamily: "'Alfa Slab One', serif" }}
          >
            Sign in
          </button>
        </form>
      </main>
    );
  }

  const sql = getDb();
  const rows = (await sql`
    SELECT id, name, email, message, created_at
    FROM notify_signups
    ORDER BY created_at DESC
  `) as { id: number; name: string; email: string; message: string; created_at: Date }[];

  return (
    <main className="min-h-screen bg-[#fff9eb] p-6 sm:p-10">
      <div className="mx-auto max-w-4xl">
        <h1 className="varsity-title varsity-layered-burgundy text-3xl uppercase">
          Sign-ups ({rows.length})
        </h1>
        <div className="mt-6 overflow-x-auto rounded-md-lg border-t-4 border-[#f4bc6a] bg-white shadow-md-lg">
          <table className="w-full text-left text-sm text-[#1d3557]">
            <thead className="font-heading uppercase">
              <tr className="border-b border-md-outline/25">
                <th className="px-4 py-3">Name</th>
                <th className="px-4 py-3">Email</th>
                <th className="px-4 py-3">Looking forward to</th>
                <th className="px-4 py-3">Date</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row.id} className="border-b border-md-outline/15 align-top">
                  <td className="px-4 py-3 font-medium">{row.name}</td>
                  <td className="px-4 py-3">{row.email}</td>
                  <td className="max-w-xs px-4 py-3 whitespace-pre-wrap">{row.message}</td>
                  <td className="px-4 py-3 whitespace-nowrap">
                    {new Date(row.created_at).toLocaleString("en-MY", { timeZone: "Asia/Kuala_Lumpur" })}
                  </td>
                </tr>
              ))}
              {rows.length === 0 && (
                <tr>
                  <td colSpan={4} className="domine px-4 py-8 text-center italic">
                    No sign-ups yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
