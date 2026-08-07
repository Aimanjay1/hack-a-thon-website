"use client";

import { useEffect, useState } from "react";
import { Dialog } from "radix-ui";
import { XIcon } from "lucide-react";
import { daysUntilRegistration, isRegistrationOpen } from "@/lib/countdown";

const OPEN_EVENT = "open-notify-popup";

export function openNotifyPopup() {
  window.dispatchEvent(new Event(OPEN_EVENT));
}

const inputClass =
  "w-full rounded-md-sm border border-md-outline/40 bg-white px-3 py-2 text-[#1d3557] focus:border-[#7b1113] focus:outline-none";

export function NotifyPopup() {
  const [open, setOpen] = useState(false);
  const [days, setDays] = useState(0);
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  useEffect(() => {
    const show = () => {
      setDays(daysUntilRegistration());
      setOpen(true);
    };
    const onEvent = () => {
      if (!isRegistrationOpen()) show();
    };
    window.addEventListener(OPEN_EVENT, onEvent);

    const onScroll = () => {
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight - 100) {
        window.removeEventListener("scroll", onScroll);
        if (!isRegistrationOpen()) show();
      }
    };
    if (!isRegistrationOpen()) {
      window.addEventListener("scroll", onScroll, { passive: true });
    }
    return () => {
      window.removeEventListener(OPEN_EVENT, onEvent);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  function onOpenChange(next: boolean) {
    setOpen(next);
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    try {
      const res = await fetch("/api/notify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(e.currentTarget))),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error);
      setStatus("done");
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error && err.message ? err.message : "Something went wrong — please try again");
    }
  }

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
        <Dialog.Portal>
          <Dialog.Overlay className="fixed inset-0 z-50 bg-black/30 duration-200 data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0" />
          <Dialog.Content className="fixed top-1/2 left-1/2 z-50 w-[calc(100%-2rem)] max-w-md -translate-x-1/2 -translate-y-1/2 rounded-md-lg border-t-4 border-[#f4bc6a] bg-[#fff9eb] p-6 shadow-md-lg duration-200 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95">
            <Dialog.Title className="varsity-title varsity-layered-burgundy pr-10 text-2xl uppercase">
              {days > 0 ? `Registration opens in ${days} ${days === 1 ? "day" : "days"}` : "Registration opens today"}
            </Dialog.Title>
            <Dialog.Description className="domine mt-2 text-[#1d3557] italic">
              Want to be notified first? Fill the details below.
            </Dialog.Description>

            {status === "done" ? (
              <p className="domine mt-6 text-[#1d3557] italic">
                You&apos;re on the list! We&apos;ll email you the moment registration opens.
              </p>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
                {/* Honeypot — humans never see or fill this. */}
                <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" />
                <label className="text-sm font-medium text-[#1d3557]">
                  Name
                  <input type="text" name="name" required maxLength={100} className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#1d3557]">
                  Email
                  <input type="email" name="email" required maxLength={254} className={inputClass} />
                </label>
                <label className="text-sm font-medium text-[#1d3557]">
                  What are you looking forward to during the Hack-A-Ton?
                  <textarea name="message" rows={3} maxLength={1000} className={inputClass} />
                </label>
                {error && <p className="text-sm text-md-error">{error}</p>}
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="mt-1 inline-flex items-center justify-center rounded-none bg-[#2d435b] px-8 py-3 text-lg font-medium text-white transition-colors duration-200 hover:bg-[#7b1113] disabled:opacity-60"
                  style={{ fontFamily: "'Alfa Slab One', serif" }}
                >
                  {status === "sending" ? "Sending..." : "Notify me"}
                </button>
              </form>
            )}

            <Dialog.Close
              className="absolute top-4 right-4 rounded-md-sm p-2.5 text-[#1d3557] transition-colors duration-200 hover:bg-[#7b1113]/10"
              aria-label="Close"
            >
              <XIcon className="h-5 w-5" />
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
    </Dialog.Root>
  );
}
