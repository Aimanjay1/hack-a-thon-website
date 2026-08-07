import Link from "next/link";
import { Globe, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SOCIALS, LINK_GROUPS } from "@/data";

const ICONS: Record<string, LucideIcon> = {
  MessageCircle,
  Globe,
  Mail,
};

export function Footer() {
  return (
    <footer className="mt-8 bg-md-tertiary text-white">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link href="#top" className="flex items-center gap-2.5">
              <img src="/logo hackaton.png" alt="Hack-a-ton Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
              <span className="font-heading text-xl font-semibold tracking-tight uppercase">
                HACK-A-TON
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
              A 48-hour high school hackathon — October 15–17, 2026, at the
              KICT,IIUM.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {SOCIALS.map(({ icon, label, href }) => {
                const Icon = ICONS[icon];
                return (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full text-white/80 transition-all duration-200 ease-md hover:bg-white/10 hover:text-md-secondary-container active:scale-95"
                  >
                    <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                  </a>
                );
              })}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="font-heading text-xs font-semibold tracking-widest text-md-secondary-container uppercase">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/80 transition-colors duration-200 hover:text-white"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="font-heading text-xs font-semibold tracking-widest text-md-secondary-container uppercase">
              Questions
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-white/80">
              Any inquiries? Reach out to us via email and we&apos;ll get back to you as soon as possible.
            </p>
            <a
              href="mailto:contacts@motionukict.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-md-secondary-container hover:underline"
            >
              contacts@motionukict.com
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Motion-U. All rights reserved.</p>
          <img src="/MotionU-logo.png" alt="Motion-U Logo" className="h-8 w-8 sm:h-10 sm:w-10" />
          <p>Built by the Motion-U crew, for builders.</p>
        </div>
      </Container>
    </footer>
  );
}
