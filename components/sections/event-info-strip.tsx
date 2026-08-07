import { Calendar, MapPin } from "lucide-react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const INFO = [
  { icon: Calendar, label: "October 16-17, 2026" },
  { icon: MapPin, label: "KICT, IIUM" },
];

export function EventInfoStrip() {
  return (
    <section className="border-b border-md-outline/20 py-6">
      <Container className="flex flex-wrap items-center justify-center gap-x-10 gap-y-3">
        {INFO.map(({ icon: Icon, label }, i) => (
          <ScrollReveal key={label} delay={i * 100}>
            <div className="flex items-center gap-2 text-sm font-medium sm:text-base">
              <Icon className="h-4 w-4 text-md-primary" aria-hidden="true" />
              {label}
            </div>
          </ScrollReveal>
        ))}
      </Container>
    </section>
  );
}
