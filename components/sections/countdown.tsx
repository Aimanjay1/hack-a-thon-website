"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { PHASES } from "@/data";

function getTimeLeft(targetMs: number) {
  const diff = Math.max(targetMs - Date.now(), 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

function getCurrentPhase() {
  const now = Date.now();
  return PHASES.find((p) => new Date(p.date).getTime() > now) ?? null;
}

export function Countdown() {
  const [phase, setPhase] = useState(getCurrentPhase);
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const targetMs = phase ? new Date(phase.date).getTime() : 0;
    const tick = () => {
      setTimeLeft(getTimeLeft(targetMs));
      const next = getCurrentPhase();
      if (next?.label !== phase?.label) setPhase(next);
    };
    const timeout = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, [phase]);

  const units: Array<{ label: string; value: number | undefined }> = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <section className="border-y-4 border-md-secondary-container bg-md-tertiary py-10 sm:py-14" aria-label="Countdown to CodeDojo">
      <Container>
        <ScrollReveal delay={0}>
          <p className="text-center text-xs tracking-[0.3em] text-white uppercase sm:text-sm font-heading">
            {phase && `${phase.label} in`}
          </p>
        </ScrollReveal>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
          {units.map((unit, i) => (
            <ScrollReveal key={unit.label} delay={100 + i * 100}>
              <div className="flex flex-col items-center">
                <span className="text-5xl tabular-nums text-md-secondary-container sm:text-7xl lg:text-8xl varsity-layered-white" style={{ fontFamily: "'Alfa Slab One', serif" }}>
                  {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
                </span>
                <span className="mt-2 text-[0.65rem] font-medium tracking-[0.2em] text-white uppercase sm:text-sm font-heading">
                  {unit.label}
                </span>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </Container>
    </section>
  );
}
