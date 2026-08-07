import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BENEFITS } from "@/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const CARDS = BENEFITS.cards;
const STATS = BENEFITS.stats;
const BORDER_COLORS = BENEFITS.borderColors;

export function Benefits() {
  return (
    <div className="relative overflow-hidden bg-md-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-10"
      />

      <div className="relative z-10 px-6 pb-14 sm:px-12 sm:py-18 lg:px-16">
            <ScrollReveal delay={100}>
              <div className="mx-auto max-w-xl text-center">
                <Badge variant="pennant" className="mx-auto varsity-title">{BENEFITS.badge}</Badge>

                <h2 className="mt-4 text-3xl tracking- uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-navy">
                  {BENEFITS.heading}
                </h2>
                <p className="mt-3 text-gray-600 domine">
                  {BENEFITS.description}
                </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {CARDS.map(({ title, description }, index) => (
                <Card
                  key={title}
                  className="rounded-none border-t-4 bg-white card-shadow p-10 shadow-lg transition-transform duration-300 hover:-translate-y-2"
                  style={{ borderTopColor: BORDER_COLORS[index] }}
                >
                  <CardContent>
                    <h3 className="mb-4 font-heading text-xl uppercase varsity-title text-[#1d3557]" >{title}</h3>
                    <p className="domine leading-relaxed text-gray-600">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              ))}
        </div>

        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 border-y border-white/20 py-8 sm:grid-cols-4 hidden">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-heading text-3xl font-semibold text-md-secondary-container sm:text-4xl">
                    {stat.value}
                  </span>
                 <span className="mt-2 text-[0.65rem] font-medium tracking-[0.2em] text-gray-600 uppercase sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
      </div>
    </div>
  );
}
