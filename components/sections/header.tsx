import Link from "next/link";
import { Menu } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import { NAV_LINKS } from "@/data";
import { cn } from "@/lib/utils";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-md-outline/15 bg-md-background/80 backdrop-blur-md">
      <Container className="flex h-16 items-center sm:h-20">
        <div className="flex-1">
          <Link href="#top" className="flex items-center gap-2.5">
            <img
              src="/logo hackaton.png"
              alt="Hack-a-ton Logo"
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-base tracking-normal uppercase varsity-title text-[#7b1113]">
              Hack-a-ton
            </span>
          </Link>
        </div>

        <nav className="hidden items-center gap-10 md:flex pl-14">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-base text-[#856300] transition-colors duration-200 hover:text-md-primary font-heading uppercase "
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-1 items-center justify-end gap-2">
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLScYaCuuy-nYPhO2xI2lu5KybvESA6KOJxtMNrGz8N00zfSZmw/viewform"
            className={cn(buttonVariants({ size: "sm" }), "hover:bg-[#7b1113] hover:text-white")}
          >
            Enroll
          </Link>

          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon-sm"
                className="md:hidden"
                aria-label="Open menu"
              >
                <Menu className="h-5 w-5 " aria-hidden="true" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle className="varsity-title">CodeDojo: Hack-A-Ton</SheetTitle>
              </SheetHeader>
              <nav className=" flex flex-col gap-1 px-6 items-center justify-between">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <Link
                      href={link.href}
                      className="rounded-md-sm px-3 py-3 text-xl font-heading transition-colors duration-200 hover:bg-md-primary/10 hover:text-md-primary"
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
