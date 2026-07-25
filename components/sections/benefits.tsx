import { Rocket, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const BENEFITS = [
  {
    icon: Rocket,
    title: "Ship fast",
    description:
      "Go from idea to working demo in 48 hours with mentors, free API credits, and workshops on tap.",
  },
  {
    icon: Users,
    title: "Find your team",
    description:
      "Registering solo? We'll help you match with teammates who complement your skills before day one.",
  },
  {
    icon: Trophy,
    title: "Real prizes",
    description:
      "$25,000 across four tracks, plus interview fast-tracks with our sponsor partners.",
  },
];

export function Benefits() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md-lg bg-linear-to-br from-md-primary to-md-tertiary sm:rounded-md-2xl lg:rounded-md-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.25)_0%,transparent_45%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-md-secondary-container/30 blur-3xl"
          />

          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="mx-auto max-w-xl text-center">
              <Badge variant="glass">Why join</Badge>
              <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
                Everything you need to build
              </h2>
              <p className="mt-3 text-white/80">
                We handle the logistics so you can focus on the thing you came to make.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {BENEFITS.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  variant="glass"
                  interactive
                  className="text-left shadow-none hover:shadow-md-lg"
                >
                  <CardContent>
                    <span className="flex h-11 w-11 items-center justify-center rounded-md-sm bg-white/15">
                      <Icon className="h-5 w-5 text-white" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-medium text-white">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/75">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
