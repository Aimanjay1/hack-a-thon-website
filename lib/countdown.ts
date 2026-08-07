import { PHASES } from "@/data";

export function getTimeLeft(targetMs: number) {
  const diff = Math.max(targetMs - Date.now(), 0);
  return {
    days: Math.floor(diff / 86_400_000),
    hours: Math.floor((diff / 3_600_000) % 24),
    minutes: Math.floor((diff / 60_000) % 60),
    seconds: Math.floor((diff / 1_000) % 60),
  };
}

export function getCurrentPhase() {
  const now = Date.now();
  return PHASES.find((p) => new Date(p.date).getTime() > now) ?? null;
}

export const REGISTRATION_OPENS_MS = new Date(PHASES[0].date).getTime();

export function isRegistrationOpen() {
  return Date.now() >= REGISTRATION_OPENS_MS;
}

export function daysUntilRegistration() {
  return Math.ceil(Math.max(REGISTRATION_OPENS_MS - Date.now(), 0) / 86_400_000);
}
