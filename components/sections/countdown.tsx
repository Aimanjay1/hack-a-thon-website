"use client";

import { useEffect, useState } from "react";
import { Container } from "@/components/ui/container";

const EVENT_DATE = new Date("2026-10-15T09:00:00-06:00").getTime();

function getTimeLeft() {
  const diff = Math.max(EVENT_DATE - Date.now(), 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

export function Countdown() {
  const [timeLeft, setTimeLeft] = useState<ReturnType<typeof getTimeLeft> | null>(null);

  useEffect(() => {
    const tick = () => setTimeLeft(getTimeLeft());
    const timeout = setTimeout(tick, 0);
    const interval = setInterval(tick, 1000);
    return () => {
      clearTimeout(timeout);
      clearInterval(interval);
    };
  }, []);

  const units: Array<{ label: string; value: number | undefined }> = [
    { label: "Days", value: timeLeft?.days },
    { label: "Hours", value: timeLeft?.hours },
    { label: "Minutes", value: timeLeft?.minutes },
    { label: "Seconds", value: timeLeft?.seconds },
  ];

  return (
    <section className="border-y-4 border-md-secondary-container bg-md-tertiary py-10 sm:py-14" aria-label="Countdown to CodeDojo">
      <Container>
        <p className="text-center font-heading text-xs font-semibold tracking-[0.3em] text-white/60 uppercase sm:text-sm">
          Dojo doors open in
        </p>
        <div className="mx-auto mt-4 grid max-w-2xl grid-cols-4 gap-3 sm:gap-6">
          {units.map((unit) => (
            <div key={unit.label} className="flex flex-col items-center">
              <span className="font-heading text-5xl font-semibold tabular-nums text-md-secondary-container sm:text-7xl lg:text-8xl">
                {unit.value !== undefined ? String(unit.value).padStart(2, "0") : "--"}
              </span>
              <span className="mt-2 text-[0.65rem] font-medium tracking-[0.2em] text-white/70 uppercase sm:text-sm">
                {unit.label}
              </span>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
