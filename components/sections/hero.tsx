import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function Hero() {
  return (
    <section id="top" className="pt-2 sm:pt-4">
      <Container>
        <div>
          <div className="grid lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col justify-center gap-6 px-6 py-8 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
              <ScrollReveal delay={0} className="self-start">
                <Badge variant="pennant" className="varsity-title tracking-normal">
                  CODEDOJO
                </Badge>
              </ScrollReveal>

              <ScrollReveal delay={100}>
                <h1 className="text-6xl leading-[0.95] tracking-wide uppercase sm:text-7xl lg:text-8xl varsity-title varsity-layered-burgundy">
                  Hack-<span className="text-md-primary">A</span>-TON
                </h1>
              </ScrollReveal>

              <ScrollReveal delay={200}>
                <div className="flex flex-wrap items-center gap-x-8 gap-y-2 text-sm font-medium sm:text-base" style={{ fontFamily: "'Alfa Slab One', serif", color: "#1d3557" }}>
                  <span className="inline-flex items-center gap-2">
                    <Calendar className="h-4 w-4" aria-hidden="true" />
                    October 16-17, 2026
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <MapPin className="h-4 w-4" aria-hidden="true" />
                    KICT, IIUM
                  </span>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={300}>
                <p className="max-w-md text-lg leading-relaxed text-[#1d3557] domine italic">
                  Join our hackathon and bring your ideas to life. 
                  Whether you're a beginner or an experienced developer, 
                  this is your chance to learn, collaborate, and compete for exciting prizes.
                </p>
              </ScrollReveal>

              <ScrollReveal delay={400}>
                <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                  <Link
                    href="https://docs.google.com/forms/d/e/1FAIpQLScYaCuuy-nYPhO2xI2lu5KybvESA6KOJxtMNrGz8N00zfSZmw/viewform?usp=header"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-lg font-medium text-white transition-colors duration-200 bg-[#2d435b] hover:bg-[#7b1113]"
                    style={{
                      fontFamily: "'Alfa Slab One', serif",
                    }}
                  >
                    Enroll your team
                  </Link>
                  <Link
                    href="#schedule"
                    className="inline-flex items-center justify-center rounded-none px-8 py-3 text-lg font-medium transition-colors duration-200 bg-white text-[#2d435b] border-2 border-[#2d435b] hover:bg-[#2d435b] hover:text-white"
                    style={{
                      fontFamily: "'Alfa Slab One', serif",
                    }}
                  >
                    See the timeline
                  </Link>
                </div>
              </ScrollReveal>
            </div>

            <div className="relative flex items-center justify-center px-6 py-4 sm:px-10 sm:py-8">
              <img
                src="/logo hackaton.png"
                alt="Hack-a-ton Logo"
                className="w-48 sm:w-64 lg:w-auto"
                style={{ animation: "float 3s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
