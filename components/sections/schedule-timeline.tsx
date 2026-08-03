import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const DAYS = [
  {
    day: "DAY 1",
    description:
      "Online briefing to introduce the hackathon, event guidelines, and participant preparation.",
  },
  {
    day: "DAY 2",
    description:
      "Opening ceremony, theme announcement, team formation, and 24-hour web development challenge.",
  },
  {
    day: "DAY 3",
    description:
      "Project submission, team presentations, judging session, and award & closing ceremony.",
  },
];

export function ScheduleTimeline() {
  return (
    <section id="schedule" className="py-16 sm:py-24 bg-[#1d3557]">
      <Container className="max-w-5xl">
        <div className="text-center">
          <Badge variant="pennant" className="mx-auto varsity-title">
            Schedule
          </Badge>
          <h2 className="mt-4 text-3xl tracking- uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-white">
            The dojo timeline
          </h2>
          <p className="mt-3 text-md-on-surface-variant domine italic">
            Three days, one relentless build. Here&apos;s how it runs.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-6 md:flex-row">
          {DAYS.map((card) => (
            <div
              key={card.day}
              className="flex flex-1 flex-col justify-between border-2 border-md-outline-variant bg-[#7b1113] p-6 shadow-sm sm:p-10"
               style={{ borderRadius: 0 }}
            >
            <span className="bg-md-primary/10 px-3 py-1 text-[15px] varsity-title tracking-widest text-md-primary ">
                {card.day}
              </span>
               <p className="mt-8 text-[16px] text-sm italic leading-relaxed text-[#e0dac7] domine">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
