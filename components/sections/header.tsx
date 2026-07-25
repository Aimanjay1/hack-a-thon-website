import Link from "next/link";
import { Menu, Sparkles } from "lucide-react";
import { buttonVariants, Button } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";

const NAV_LINKS = [
  { href: "#tracks", label: "Tracks" },
  { href: "#schedule", label: "Schedule" },
  { href: "#faq", label: "FAQ" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-md-outline/15 bg-md-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between sm:h-20">
        <Link href="#top" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-md-sm bg-md-primary text-md-on-primary">
            <Sparkles className="h-4 w-4" aria-hidden="true" />
          </span>
          <span className="text-[1.05rem] font-medium tracking-tight">
            Build/Ship/Win
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-md-on-surface-variant transition-colors duration-200 hover:text-md-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Link href="#register" className={buttonVariants({ size: "sm" })}>
            Register
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon-sm" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Build/Ship/Win</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-6">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-md-sm px-3 py-3 text-base font-medium transition-colors duration-200 hover:bg-md-primary/10 hover:text-md-primary"
                    >
                      {link.label}
                    </Link>
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </Container>
    </header>
  );
}
