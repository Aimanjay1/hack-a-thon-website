import { Award, Icon, Medal, Trophy, type LucideIcon } from "lucide-react";
import prizesData from "@/data/prizes.json";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const ICONS: Record<string, LucideIcon> = {
  Medal,
  Trophy,
  Award,
};

export function Prizes() {
  return (
    <section id="prizes" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="pennant" className="mx-auto">
            Prizes
          </Badge>
          <h2
            className="mt-4 text-3xl tracking-normal uppercase sm:text-4xl lg:text-5xl varsity-layered-navy"
            style={{ fontFamily: "'Alfa Slab One', serif" }}
          >
            Walk away as a winner
          </h2>
          <p className="mt-3 text-gray-600 domine italic">
            $10,000+ up for grabs across three categories — every team leaves
            with something.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {prizesData.map(
            ({ icon, place, amount, description, className, featured }) => {
              const Icon = ICONS[icon];
              return (
                <Card
                  key={place}
                  className={cn(
                    "text-center transition-transform duration-300 ease-md",
                    className,
                  )}
                >
                  <CardContent className="flex flex-col items-center">
                    <span
                      className={cn(
                        "flex h-14 w-14 items-center justify-center rounded-full bg-md-background/50",
                        featured && "h-16 w-16",
                      )}
                    >
                      <Icon
                        className={cn(
                          "h-7 w-7 text-md-foreground",
                          featured && "h-8 w-8",
                        )}
                        aria-hidden="true"
                      />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold uppercase text-[#fafafa]">
                      {place}
                    </h3>
                    <p className="mt-1 font-heading text-3xl font-bold text-md-primary">
                      {amount}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-md-on-surface-variant font-semibold">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              );
            },
          )}
        </div>
      </Container>
    </section>
  );
}
