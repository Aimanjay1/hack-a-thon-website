import { Bot, Coins, Leaf, Shapes } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const TRACKS = [
  {
    icon: Bot,
    title: "AI & automation",
    description: "Build agents, copilots, or automations that save people time.",
  },
  {
    icon: Leaf,
    title: "Climate & sustainability",
    description: "Tools that help people and businesses cut their footprint.",
  },
  {
    icon: Coins,
    title: "FinTech & Web3",
    description: "Reimagine payments, credit, or on-chain coordination.",
  },
  {
    icon: Shapes,
    title: "Open innovation",
    description: "Got a wildcard idea? Build whatever excites you most.",
  },
];

export function Tracks() {
  return (
    <section id="tracks" className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md-lg bg-md-surface-container sm:rounded-md-2xl lg:rounded-md-3xl">
          <div className="px-6 py-14 sm:px-12 sm:py-20 lg:px-16">
            <div className="mx-auto max-w-xl text-center">
              <Badge variant="secondary">Tracks</Badge>
              <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
                Pick your track
              </h2>
              <p className="mt-3 text-md-on-surface-variant">
                Every track competes for its own prize pool — pick the one that fits your idea.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
              {TRACKS.map(({ icon: Icon, title, description }) => (
                <Card
                  key={title}
                  interactive
                  className="bg-md-surface-container-low"
                >
                  <CardContent>
                    <span className="flex h-11 w-11 items-center justify-center rounded-md-sm bg-md-primary-container">
                      <Icon className="h-5 w-5 text-md-on-primary-container" aria-hidden="true" />
                    </span>
                    <h3 className="mt-5 text-lg font-medium">{title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-md-on-surface-variant">
                      {description}
                    </p>
                    <Badge variant="outline" className="mt-4">
                      $6,250 track prize
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
