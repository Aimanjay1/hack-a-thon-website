import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SCHEDULE } from "@/data";

export function ScheduleTimeline() {
  return (
    <section id="schedule" className="py-16 sm:py-24 bg-[#1d3557]">
      <Container className="max-w-5xl">
        <ScrollReveal delay={0}>
          <div className="text-center">
            <Badge variant="pennant" className="mx-auto varsity-title">
              {SCHEDULE.badge}
            </Badge>
            <h2 className="mt-4 text-3xl tracking- uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-white">
              {SCHEDULE.heading}
            </h2>
            <p className="mt-3 text-md-primary domine italic">
              {SCHEDULE.description}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-14 flex flex-col gap-6 md:flex-row ">
          {SCHEDULE.days.map((card, i) => (
            <ScrollReveal key={card.day} delay={200 + i * 150}>
              <div
                className="flex flex-1 flex-col justify-between border-2 border-md-outline-variant bg-[#7b1113] p-6 shadow-sm sm:p-10 transition-transform duration-300 hover:-translate-y-2"
                 style={{ borderRadius: 0 }}
              >
              <span className=" px-3 py-1 text-[16px] varsity-title tracking-widest text-md-primary ">
                  {card.day}
                </span>
                 <p className="mt-5 text-[16px] text-sm italic leading-relaxed text-[#e0dac7] domine">
                  {card.description}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={650}>
          <p className="mt-10 text-center text-sm sm:text-base text-md-primary domine italic">
            {SCHEDULE.note}
          </p>
        </ScrollReveal>
      </Container>
    </section>
  );
}
