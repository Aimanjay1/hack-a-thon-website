import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const STEPS = [
  {
    number: "1",
    title: "Register",
    description: "Sign up solo or as a squad of up to four teammates.",
  },
  {
    number: "2",
    title: "Team up",
    description: "Meet collaborators at our kickoff mixer or team-formation channel.",
  },
  {
    number: "3",
    title: "Build",
    description: "48 hours of hacking, workshops, and mentor office hours.",
  },
  {
    number: "4",
    title: "Demo & win",
    description: "Pitch to judges in a 3-minute demo and compete for prizes.",
  },
];

export function HowItWorks() {
  return (
    <section id="schedule" className="py-16 sm:py-24">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <Badge variant="secondary">Schedule</Badge>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            How it works
          </h2>
          <p className="mt-3 text-md-on-surface-variant">
            Four steps between you and a working product.
          </p>
        </div>

        <div className="relative mt-14 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div
            aria-hidden="true"
            className="absolute top-7 right-0 left-0 hidden border-t border-dashed border-md-outline/30 lg:block"
          />

          {STEPS.map((step) => (
            <div key={step.number} className="group relative flex flex-col items-center text-center">
              <div className="relative">
                <div
                  aria-hidden="true"
                  className="absolute -inset-2 rounded-full bg-md-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-30"
                />
                <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-md-primary-container text-lg font-medium text-md-on-primary-container">
                  {step.number}
                </div>
              </div>
              <h3 className="mt-5 text-lg font-medium">{step.title}</h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-md-on-surface-variant">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
