import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { Benefits } from "@/components/sections/benefits";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Tracks } from "@/components/sections/tracks";
import { Faq } from "@/components/sections/faq";
import { FinalCta } from "@/components/sections/final-cta";
import { Footer } from "@/components/sections/footer";
import { ScrollFab } from "@/components/sections/scroll-fab";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <Benefits />
        <HowItWorks />
        <Tracks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <ScrollFab />
    </div>
  );
}
