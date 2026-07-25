import Link from "next/link";
import { Globe, Mail, MessageCircle, Sparkles } from "lucide-react";
import { Container } from "@/components/ui/container";

const LINK_GROUPS = [
  {
    title: "Event",
    links: [
      { label: "Overview", href: "#top" },
      { label: "Tracks", href: "#tracks" },
      { label: "Schedule", href: "#schedule" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Info",
    links: [
      { label: "Code of conduct", href: "#" },
      { label: "Sponsors", href: "#" },
      { label: "Press kit", href: "#" },
    ],
  },
];

const SOCIALS = [
  { icon: MessageCircle, label: "Community chat", href: "#" },
  { icon: Globe, label: "Website", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:hello@buildshipwin.dev" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-md-outline/15">
      <Container className="py-14">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="#top" className="flex items-center gap-2.5">
              <span className="flex h-8 w-8 items-center justify-center rounded-md-sm bg-md-primary text-md-on-primary">
                <Sparkles className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="text-[1.05rem] font-medium tracking-tight">
                Build/Ship/Win
              </span>
            </Link>
            <p className="mt-3 max-w-xs text-sm leading-relaxed text-md-on-surface-variant">
              A 48-hour hackathon for builders — March 13–15, 2026 in Austin,
              TX and online.
            </p>
            <div className="mt-5 flex items-center gap-1">
              {SOCIALS.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full text-md-on-surface-variant transition-all duration-200 ease-md hover:bg-md-primary/10 hover:text-md-primary active:scale-95"
                >
                  <Icon className="h-4.5 w-4.5" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {LINK_GROUPS.map((group) => (
            <div key={group.title}>
              <h3 className="text-sm font-medium text-md-on-surface-variant">
                {group.title}
              </h3>
              <ul className="mt-4 flex flex-col gap-3">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm transition-colors duration-200 hover:text-md-primary"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-md-outline/15 pt-6 text-xs text-md-on-surface-variant sm:flex-row">
          <p>© 2026 Build/Ship/Win. All rights reserved.</p>
          <p>Built with Next.js, Tailwind, and Material You.</p>
        </div>
      </Container>
    </footer>
  );
}
