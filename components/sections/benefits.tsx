import { Rocket, Trophy, Users } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const BENEFITS = [
  {
    icon: Rocket,
    title: "Ship fast",
    description:
      "Go from blank repo to a working demo in 48 hours with mentors, free dev tools, and workshops on tap.",
  },
  {
    icon: Users,
    title: "Find your squad",
    description:
      "Coming solo? We'll match you with teammates from other schools before check-in even starts.",
  },
  {
    icon: Trophy,
    title: "Bragging rights",
    description:
      "$10,000 in prizes, plus scholarship leads and internship fast-tracks from our sponsors.",
  },
];

const STATS = [
  { value: "500+", label: "Students" },
  { value: "48", label: "Hours" },
  { value: "15+", label: "Schools" },
  { value: "20+", label: "Mentors" },
];

export function Benefits() {
  return (
    <section className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md-lg bg-linear-to-br from-md-primary to-md-tertiary sm:rounded-md-2xl lg:rounded-md-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-10"
          />

          <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="mx-auto max-w-xl text-center">
              <Badge variant="glass">Why join</Badge>
              <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
                Everything you need to build
              </h2>
              <p className="mt-3 text-white/80">
                We handle the logistics so you can focus on the thing you came to make.
              </p>
            </div>

            <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 border-y border-white/20 py-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-heading text-3xl font-semibold text-md-secondary-container sm:text-4xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-white/70 uppercase tracking-wide sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
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
                    <h3 className="mt-5 font-heading text-lg font-semibold text-white uppercase">{title}</h3>
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
