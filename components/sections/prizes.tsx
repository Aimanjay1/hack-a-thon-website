import { Award, Medal, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

const PRIZES = [
  {
    icon: Medal,
    place: "Runner-Up",
    amount: "$2,500",
    description: "Cash prize plus a laptop upgrade kit for every team member.",
    className: "bg-md-surface-container-low",
  },
  {
    icon: Trophy,
    place: "Champion Dojo",
    amount: "$5,000",
    description: "Top cash prize, sponsor interview fast-track, and the traveling trophy.",
    className: "bg-md-secondary-container md:-translate-y-6 shadow-md-lg",
    featured: true,
  },
  {
    icon: Award,
    place: "Rising Rookie",
    amount: "$1,500",
    description: "Best team competing in their first-ever hackathon, plus mentorship for a year.",
    className: "bg-md-primary-container",
  },
];

export function Prizes() {
  return (
    <section id="prizes" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="pennant" className="mx-auto">
            Prizes
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight uppercase sm:text-4xl lg:text-5xl">
            Walk away a winner
          </h2>
          <p className="mt-3 text-md-on-surface-variant">
            $10,000+ up for grabs across three categories — every team leaves with something.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 items-center gap-6 md:grid-cols-3">
          {PRIZES.map(({ icon: Icon, place, amount, description, className, featured }) => (
            <Card
              key={place}
              className={cn("text-center transition-transform duration-300 ease-md", className)}
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
                <p className="mt-3 text-sm leading-relaxed text-md-on-surface-variant">
                  {description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </Container>
    </section>
  );
}
