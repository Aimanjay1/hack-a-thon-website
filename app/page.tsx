import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Countdown } from "@/components/sections/countdown";
import { EventInfoStrip } from "@/components/sections/event-info-strip";
import { Benefits } from "@/components/sections/benefits";
import { ScheduleTimeline } from "@/components/sections/schedule-timeline";
import { SponsorsMarquee } from "@/components/sections/sponsors-marquee";
import { Prizes } from "@/components/sections/prizes";
import { FaqRules } from "@/components/sections/faq-rules";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { ScrollFab } from "@/components/sections/scroll-fab";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <br />
        <Countdown />
        <EventInfoStrip />
        <Benefits />
        <ScheduleTimeline />
        <SponsorsMarquee />
        <Prizes />
        <FaqRules />
        <FinalCta />
      </main>
      <Footer />
      <ScrollFab />
    </div>
  );
}
