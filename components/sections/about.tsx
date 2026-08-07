import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { ABOUT } from "@/data";

export function About() {
  return (
    <section id="about" className="mx-6 sm:mx-auto max-w-5xl p-12 sm:px-16 sm:py-14 border-t-4 border-[#0d1748] bg-white card-shadow rounded-lg mb-12">
      <Container className="max-w-5xl">
        <ScrollReveal delay={0}>
          <div className="flex flex-col items-center text-center mb-6">
            <Badge variant="pennant" className="tracking-wide mx-auto varsity-title">
              {ABOUT.badge}
            </Badge>
            <h2 className="mt-6 text-3xl uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-burgundy">
              {ABOUT.heading}
            </h2>
            <p className="mt-6 text-md-on-surface-variant domine italic">
              {ABOUT.description}
            </p>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
