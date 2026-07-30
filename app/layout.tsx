import type { Metadata, Viewport } from "next";
import { Roboto, Oswald } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const metadata: Metadata = {
  title: "CodeDojo: Hack-a-thon 2026",
  description:
    "CodeDojo is a 48-hour high school hackathon. Form a team, pick your dojo, and build something worth bragging about — October 15-17, 2026.",
};

export const viewport: Viewport = {
  themeColor: "#7a1620",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`h-full antialiased ${roboto.variable} ${oswald.variable}`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
