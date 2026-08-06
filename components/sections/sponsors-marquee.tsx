import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const SPONSORS = [
  "TechCorp",
  "Innovate Labs",
  "ByteWorks",
  "Nexus Systems",
  "Quantum Co",
  "Pixel Forge",
  "Northstar Bank",
  "Cloudline",
];

export function SponsorsMarquee() {
  return (
    <section id="sponsors" className="py-14 sm:py-20 hidden">
      <Container>
        <div className="text-center">
          <Badge variant="pennant" className="mx-auto">
            Powered by
          </Badge>
          <h2 className="mt-4 font-heading text-2xl font-semibold tracking-tight uppercase sm:text-3xl">
            This year&apos;s sponsors
          </h2>
        </div>
      </Container>

      <div className="mt-10 overflow-hidden border-y border-md-outline/20 py-6">
        <div className="flex w-max animate-marquee items-center gap-16 hover:paused">
          {[...SPONSORS, ...SPONSORS].map((sponsor, index) => (
            <span
              key={`${sponsor}-${index}`}
              className="shrink-0 font-heading text-xl font-semibold tracking-wide text-md-on-surface-variant uppercase sm:text-2xl"
            >
              {sponsor}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
