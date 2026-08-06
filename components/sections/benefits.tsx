import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const BENEFITS = [
  {
    title: "Hands-on Learning",
    description:
      "Apply your web development knowledge by building a functional and responsive web application within 24 hours.",
  },
  {
    title: "Collaboration & Skill Development",
    description:
      "Work in teams to enhance your communication, teamwork, problem-solving, and time management skills.",
  },
  {
    title: "Innovation & Portfolio Building",
    description:
      "Create an innovative web solution and enhance your portfolio for future opportunities.",
  },
];

const STATS = [
  { value: "500+", label: "Students" },
  { value: "48", label: "Hours" },
  { value: "15+", label: "Schools" },
  { value: "20+", label: "Mentors" },
];

const BORDER_COLORS = [
  "#1d3557",
  "#D4A017",
  "#78141e",
];

export function Benefits() {
  return (
    <div className="relative overflow-hidden bg-md-background">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-10"
      />

      <div className="relative z-10 px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <ScrollReveal delay={0}>
              <div className="mx-auto max-w-xl text-center ">
                <Badge variant="glass" className="bg-[#7b1113] font-heading">Why join</Badge>
                <h2 className="mt-4 text-3xl tracking-wider uppercase sm:text-4xl lg:text-5xl varsity-layered-navy" style={{ fontFamily: "'Alfa Slab One', serif"}}>
                  Turn Ideas into Reality
                </h2>
                <p className="mt-3 text-gray-600 domine italic">
                Gain hands-on experience, strengthen your skills, and build a functional web application in a 24-hour hackathon.              </p>
              </div>
            </ScrollReveal>

            <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
              {BENEFITS.map(({ title, description }, index) => (
                <ScrollReveal key={title} delay={200 + index * 150}>
                  <Card
                    className="rounded-none border-t-4 bg-white card-shadow p-10 shadow-lg transition-transform duration-300 hover:-translate-y-2"
                    style={{ borderTopColor: BORDER_COLORS[index] }}
                  >
                    <CardContent>
                      <h3 className="mb-4 font-heading text-xl uppercase varsity-title text-[#1d3557]" >{title}</h3>
                      <p className="domine italic leading-relaxed text-gray-600">
                        {description}
                      </p>
                    </CardContent>
                  </Card>
                </ScrollReveal>
              ))}
        </div>

      {/*  <div className="mx-auto mt-10 grid max-w-2xl grid-cols-2 gap-6 border-y border-white/20 py-8 sm:grid-cols-4">
              {STATS.map((stat) => (
                <div key={stat.label} className="flex flex-col items-center">
                  <span className="font-heading text-3xl font-semibold text-md-secondary-container sm:text-5xl">
                    {stat.value}
                  </span>
                 <span className="mt-2 text-[0.65rem] font-medium tracking-[0.2em] text-gray-600 uppercase font-heading sm:text-sm">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div> */}
      </div>
    </div>
  );
}
