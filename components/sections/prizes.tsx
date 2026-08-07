import { Award, Medal, Trophy, type LucideIcon } from "lucide-react";
import { PRIZES } from "@/data";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Medal,
  Trophy,
  Award,
};

export function Prizes() {
  return (
    <section id="prizes" className="py-16 sm:py-12 bg-[#1d3557]">
      <Container>
        <ScrollReveal delay={0}>
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="pennant" className="mx-auto">
              Prizes
            </Badge>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-white">
              BECOME THE BEST ONE!
            </h2>
            <p className="mt-3 text-md-primary domine">
              Showcase your skills and compete for amazing prizes!
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {PRIZES.map(({ icon, place, amount, description, className, featured, order }, i) => {
            const Icon = ICONS[icon];
            return (
              <ScrollReveal key={place} delay={200 + i * 150} className={order}>
                <Card
                  className={cn("text-center transition-transform duration-300 ease-md", className , order)}
                >
                  <CardContent className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-full bg-md-background/50",
                        featured && "h-16 w-16",
                      )}
                    >
                      <Icon className={cn("h-7 w-7 text-md-foreground", featured && "h-8 w-8")} aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold uppercase">{place}</h3>
                    <p className="mt-1 font-heading text-3xl font-bold text-md-primary">{amount}</p>
                    <p className="mt-5 text-[16px] text-sm italic leading-relaxed text-[#e0dac7] domine">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </ScrollReveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
