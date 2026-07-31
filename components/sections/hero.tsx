import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

export function Hero() {
  return (
    <section id="top" className="pt-6 sm:pt-10">
      <Container>
        <div>
          <div className="grid lg:grid-cols-[1.3fr_1fr]">
            <div className="flex flex-col justify-center gap-6 px-6 py-16 sm:px-12 sm:py-20 lg:px-16">
              <Badge variant="pennant" className="self-start">
                CODEDOJO
              </Badge>

              <h1 className="font-heading text-6xl leading-[0.95] font-bold tracking-tight uppercase sm:text-7xl lg:text-8xl">
                Hack-<span className="text-md-primary">A</span>-THON
              </h1>

              <p className="max-w-md text-lg leading-relaxed text-md-on-surface-variant">
                48 hours. One dojo. Student teams from schools across the
                region go head-to-head to ship the boldest project they&apos;ve
                ever built. First hackathon? Even better.
              </p>

              <div className="mt-2 flex flex-col gap-4 sm:flex-row">
                <Link href="#register" className={buttonVariants({ size: "lg" })}>
                  Enroll your team
                </Link>
                <Link
                  href="#schedule"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  See the timeline
                </Link>
              </div>
            </div>

            <div className="relative flex items-center justify-center px-10 py-16">
              <div className="relative flex h-40 w-40 shrink-0 items-center justify-center rounded-full border-4 border-md-secondary-container bg-md-primary shadow-md-lg sm:h-48 sm:w-48">
                <span className="font-heading text-5xl font-bold text-md-secondary-container sm:text-6xl">
                  CD
                </span>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
