import type { Metadata, Viewport } from "next";
import {
  Roboto,
  Oswald,
  Alfa_Slab_One,
  Libertinus_Math,
} from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

// Oswald is a variable font — loading the variable axis (rather than pinning
// static weights) fetches one file per subset instead of one per weight.
const oswald = Oswald({
  variable: "--font-heading",
  subsets: ["latin"],
});

const alfaSlabOne = Alfa_Slab_One({
  variable: "--font-varsity",
  subsets: ["latin"],
  weight: "400",
});

const libertinusMath = Libertinus_Math({
  variable: "--font-math",
  subsets: ["latin"],
  weight: "400",
});

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hackaton.motionukict.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "CodeDojo: Hack-A-Ton",
    template: "%s | CodeDojo: Hack-A-Ton",
  },
  description:
    "CodeDojo is a 24-hour high school hackathon. Form a team, pick your dojo, and build something worth bragging about — October 15-17, 2026.",
  applicationName: "CodeDojo: Hack-A-Ton",
  keywords: [
    "hackathon",
    "CodeDojo",
    "Hack-A-Ton",
    "Motion-U",
    "IIUM",
    "KICT",
    "coding competition",
    "high school hackathon",
    "Malaysia",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-hackaton.png",
  },
  openGraph: {
    type: "website",
    siteName: "CodeDojo: Hack-A-Ton",
    locale: "en_MY",
    url: "/",
    title: "CodeDojo: Hack-A-Ton 2026",
    description:
      "CodeDojo is a 24-hour high school hackathon. Form a team, pick your dojo, and build something worth bragging about — October 15-17, 2026.",
  },
  twitter: {
    card: "summary_large_image",
    title: "CodeDojo: Hack-A-Ton 2026",
    description:
      "CodeDojo is a 24-hour high school hackathon. Form a team, pick your dojo, and build something worth bragging about — October 15-17, 2026.",
  },
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
      className={`h-full antialiased ${roboto.variable} ${oswald.variable} ${alfaSlabOne.variable} ${libertinusMath.variable}`}
    >
      <body className="min-h-full flex flex-col" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
