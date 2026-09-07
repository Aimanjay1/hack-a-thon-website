import type { Metadata } from "next";
import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Countdown } from "@/components/sections/countdown";
import { Benefits } from "@/components/sections/benefits";
import { ScheduleTimeline } from "@/components/sections/schedule-timeline";
import { MerchAndSponsors } from "@/components/sections/sponsors-marquee";
import { Prizes } from "@/components/sections/prizes";
import { FaqRules } from "@/components/sections/faq-rules";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import AthenaChatbot from "@/components/athena-chatbot";
import { NotifyPopup } from "@/components/notify-popup";

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://hackaton.motionukict.com";

export const metadata: Metadata = {
  title: "CodeDojo: Hack-A-Ton 2026 — 24-Hour High School Hackathon",
  description:
    "CodeDojo is a 24-hour Motion-U hackathon. Form a team of three, pick your dojo, and build something worth bragging about — October 16-17, 2026, at KICT, IIUM.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "CodeDojo: Hack-A-Ton 2026 — 24-Hour Motion-U Hackathon",
    description:
      "CodeDojo is a 24-hour Motion-U Hackaton. Form a team of three, pick your dojo, and build something worth bragging about — October 16-17, 2026, at KICT, IIUM.",
    type: "website",
    url: "/",
    siteName: "CodeDojo: Hack-A-Ton",
    locale: "en_MY",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "CodeDojo: Hack-A-Ton",
      url: SITE_URL,
      publisher: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Motion-U",
        url: "https://www.motionukict.com/",
      },
    },
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "Motion-U",
      url: "https://www.motionukict.com/",
      email: "contacts@motionukict.com",
      logo: `${SITE_URL}/logo-hackaton.png`,
    },
    {
      "@type": "Event",
      name: "CodeDojo: Hack-A-Ton 2026",
      description:
        "CodeDojo is a 24-hour high school hackathon. Form a team, pick your dojo, and build something worth bragging about.",
      startDate: "2026-10-15T20:30:00+08:00",
      endDate: "2026-10-17T23:59:59+08:00",
      eventStatus: "https://schema.org/EventScheduled",
      eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
      location: {
        "@type": "Place",
        name: "KICT, IIUM",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Kuala Lumpur",
          addressCountry: "MY",
        },
      },
      image: `${SITE_URL}/logo-hackaton.png`,
      organizer: {
        "@type": "Organization",
        "@id": `${SITE_URL}/#organization`,
        name: "Motion-U",
        url: "https://www.motionukict.com/",
      },
      isAccessibleForFree: false,
    },
  ],
};

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="flex-1">
        <Hero />
        <br />
        <Countdown />
        <div className="py-4 sm:py-10" />
        <About />
        <Benefits />
        <ScheduleTimeline />
        <MerchAndSponsors />
        <Prizes />
        <FaqRules />
        <FinalCta />
      </main>
      <Footer />
      <AthenaChatbot />
      <NotifyPopup />
    </div>
  );
}
