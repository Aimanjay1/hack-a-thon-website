import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const DAYS = [
  {
    day: "Day 1 — Friday",
    events: [
      { time: "4:00 PM", title: "Check-in & team formation", description: "Badge pickup, swag, and a mixer to find teammates if you came solo." },
      { time: "5:00 PM", title: "Opening ceremony", description: "Rules, judging criteria, and a few words from this year's sponsors." },
      { time: "6:00 PM", title: "Hacking begins", description: "Clock starts. Grab a mentor, claim a table, and start building." },
    ],
  },
  {
    day: "Day 2 — Saturday",
    events: [
      { time: "9:00 AM", title: "Workshop: API sprint", description: "Optional crash course on the sponsor APIs and starter kits." },
      { time: "1:00 PM", title: "Mentor office hours", description: "Stuck? Rotate through mentor tables for 1:1 help all afternoon." },
      { time: "8:00 PM", title: "Midnight oil", description: "Snacks, energy drinks, and a round of mini-games to keep spirits up." },
    ],
  },
  {
    day: "Day 3 — Sunday",
    events: [
      { time: "9:00 AM", title: "Hacking ends", description: "Pencils down. Final commits and submissions are locked." },
      { time: "10:00 AM", title: "Judging", description: "Teams demo live to a panel of industry and faculty judges." },
      { time: "1:00 PM", title: "Awards ceremony", description: "Prizes, shoutouts, and the closing group photo." },
    ],
  },
];

export function ScheduleTimeline() {
  return (
    <section id="schedule" className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Badge variant="pennant" className="mx-auto">
            Schedule
          </Badge>
          <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight uppercase sm:text-4xl lg:text-5xl">
            The dojo timeline
          </h2>
          <p className="mt-3 text-md-on-surface-variant">
            Three days, one relentless build. Here&apos;s how it runs.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-12">
          {DAYS.map((group) => (
            <div key={group.day}>
              <h3 className="font-heading text-lg font-semibold tracking-wide text-md-primary uppercase">
                {group.day}
              </h3>
              <div className="relative mt-6 flex flex-col gap-8 border-l-2 border-md-primary/25 pl-8">
                {group.events.map((event) => (
                  <div key={event.title} className="relative">
                    <span
                      aria-hidden="true"
                      className="absolute top-1.5 left-[-2.35rem] flex h-4 w-4 items-center justify-center rounded-full border-2 border-md-primary bg-md-secondary-container"
                    />
                    <span className="font-heading text-xs font-semibold tracking-widest text-md-tertiary uppercase">
                      {event.time}
                    </span>
                    <h4 className="mt-1 text-lg font-medium">{event.title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-md-on-surface-variant">
                      {event.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
