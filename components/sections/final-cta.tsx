import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FinalCta() {
  return (
    <section id="register" className="py-12 sm:py-16">
      <Container>
        <ScrollReveal delay={100}>
        <div className="relative overflow-hidden rounded-md-lg bg-[#0e69c5] text-center sm:rounded-md-2xl lg:rounded-md-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-10"
          />

          <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 sm:px-12 sm:py-20">
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-white">
              Earn your black belt in building
            </h2>
            <p className="mt-3 text-white/80 domine">
              Registration closes soon! Ready to take off your coding journey?
              Enroll your team now and secure your spot in the hackathon.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScYaCuuy-nYPhO2xI2lu5KybvESA6KOJxtMNrGz8N00zfSZmw/viewform?usp=header"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-none px-8 py-3 text-lg font-medium text-white transition-colors duration-200 bg-[#2d435b] hover:bg-[#7b1113]"
                style={{
                  fontFamily: "'Alfa Slab One', serif",
                }}
              >
                Enroll your team
              </a>
              <a
                href="https://athena.motionukict.com/"
                className="inline-flex items-center justify-center rounded-none px-8 py-3 text-lg font-medium transition-colors duration-200 bg-white text-[#2d435b] border-2 border-[#2d435b] hover:bg-[#2d435b] hover:text-white"
                style={{
                  fontFamily: "'Alfa Slab One', serif",
                }}
              >
                Ask a question
              </a>
            </div>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
