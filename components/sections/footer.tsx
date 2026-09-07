import Link from "next/link";
import Image from "next/image";
import { Globe, Mail, MessageCircle, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SOCIALS, LINK_GROUPS } from "@/data";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

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
          <ScrollReveal delay={0}>
            <div>
              <Link href="#top" className="flex items-center gap-2.5">
                <Image
                  src="/logo-hackaton.png"
                  alt="Hack-a-ton Logo"
                  width={40}
                  height={40}
                  className="h-8 w-8 sm:h-10 sm:w-10"
                />
                <span className="font-heading text-xl font-semibold tracking-tight uppercase">
                  HACK-A-TON
                </span>
              </Link>
              <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/70">
                A 24-hour high school hackathon — October 15–17, 2026, at the
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
          </ScrollReveal>

          {LINK_GROUPS.map((group, i) => (
            <ScrollReveal key={group.title} delay={100 + i * 100}>
              <div>
                <h3 className="font-heading text-xs font-semibold tracking-widest text-[#f4bc6a] uppercase">
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
            </ScrollReveal>
          ))}

          <ScrollReveal delay={300}>
            <div>
              <h3 className="font-heading text-xs font-semibold tracking-widest text-[#f4bc6a] uppercase">
                Questions
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-white/80">
                Any inquiries? Reach out to us via email and we&apos;ll get back to you as soon as possible.
              </p>
              <a
                href="mailto:contacts@motionukict.com"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 inline-block text-sm font-medium text-[#f4bc6a] hover:underline"
              >
                contacts@motionukict.com
              </a>
            </div>
          </ScrollReveal>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/15 pt-6 text-xs text-white/60 sm:flex-row">
          <p>© 2026 Motion-U. All rights reserved.</p>
          <Image
            src="/MotionU-logo.png"
            alt="Motion-U Logo"
            width={40}
            height={40}
            className="h-8 w-8 sm:h-10 sm:w-10"
          />
          <p>Built by the Motion-U crew, for builders.</p>
        </div>
      </Container>
    </footer>
  );
}
