import Link from "next/link";
import { Calendar, MapPin, Wallet } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const META = [
  { icon: Calendar, label: "March 13–15, 2026" },
  { icon: MapPin, label: "Austin, TX + Remote" },
  { icon: Wallet, label: "$25,000 in prizes" },
];

const STATS = [
  { value: "500+", label: "Hackers" },
  { value: "48", label: "Hours" },
  { value: "4", label: "Tracks" },
  { value: "20+", label: "Mentors" },
];

export function Hero() {
  return (
    <section id="top" className="pt-6 sm:pt-10">
      <Container>
        <div className="relative overflow-hidden rounded-md-lg bg-md-surface-container sm:rounded-md-2xl lg:rounded-md-3xl">
          {/* Organic blur shapes — decorative only */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-md-primary/30 blur-3xl mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 top-1/3 h-72 w-72 rounded-full bg-md-tertiary/30 blur-3xl mix-blend-multiply"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-0 left-1/3 h-64 w-64 translate-y-1/3 rounded-full bg-md-secondary-container/60 blur-3xl mix-blend-multiply"
          />

          <div className="relative z-10 flex flex-col items-center gap-6 px-6 py-16 text-center sm:px-12 sm:py-24 lg:px-16">
            <Badge variant="secondary">Registration is open</Badge>

            <h1 className="max-w-3xl text-[2.75rem] font-medium leading-[1.15] tracking-tight sm:text-6xl lg:text-7xl">
              Build. Ship. <span className="text-md-primary">Win.</span>
            </h1>

            <p className="max-w-xl text-lg leading-relaxed text-md-on-surface-variant sm:text-xl">
              A 48-hour hackathon for builders. Form a team, pick a track, and
              turn your idea into a working demo — no experience required.
            </p>

            <div className="mt-2 flex flex-col gap-4 sm:flex-row">
              <Link href="#register" className={buttonVariants({ size: "lg" })}>
                Register now
              </Link>
              <Link
                href="#schedule"
                className={buttonVariants({ variant: "outline", size: "lg" })}
              >
                View schedule
              </Link>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
              {META.map(({ icon: Icon, label }) => (
                <Badge key={label} variant="outline" className="bg-md-background/60">
                  <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  {label}
                </Badge>
              ))}
            </div>

            <div className="mt-8 grid w-full max-w-2xl grid-cols-2 gap-6 border-t border-md-outline/20 pt-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="text-2xl font-medium text-md-primary sm:text-3xl">
                    {stat.value}
                  </span>
                  <span className="text-xs text-md-on-surface-variant sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
