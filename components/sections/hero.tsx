import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="top" className="pt-6 sm:pt-10">
      <Container>
        <div>
          <div className="grid lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <Badge variant="pennant" className="self-start varsity-title tracking-normal">
                CODEDOJO
              </Badge>

              <h1 className="text-6xl leading-[0.95] tracking-wide uppercase sm:text-7xl lg:text-8xl varsity-title varsity-layered-burgundy">
                Hack-<span className="text-md-primary">A</span>-TON
              </h1>

              <p className="max-w-md text-lg leading-relaxed text-[#1d3557] domine italic">
                48 hours. One dojo. Student teams from schools across the
                region go head-to-head to ship the boldest project they&apos;ve
                ever built. First hackathon? Even better.
              </p>

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
            </div>

            <div className="relative flex items-center justify-center px-10 py-16">
              <img
                src="/MotionU Logo.png"
                alt="MotionU Logo"
                style={{ animation: "float 2s ease-in-out infinite" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
