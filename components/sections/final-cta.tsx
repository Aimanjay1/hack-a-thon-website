import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { cn } from "@/lib/utils";

export function FinalCta() {
  return (
    <section id="register" className="py-12 sm:py-16">
      <Container>
        <div className="relative overflow-hidden rounded-md-lg bg-md-primary text-center sm:rounded-md-2xl lg:rounded-md-3xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.2)_0%,transparent_45%)]"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-24 -right-16 h-80 w-80 rounded-full bg-md-tertiary/40 blur-3xl"
          />

          <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 sm:px-12 sm:py-20">
            <Badge variant="glass">Last call</Badge>
            <h2 className="mt-4 text-3xl font-medium tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to build something real?
            </h2>
            <p className="mt-3 text-white/80">
              Spots are limited to keep team-matching and mentorship personal.
              Reserve yours before March 6.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-md-primary hover:bg-white/90 active:bg-white/80",
                )}
              >
                Register now
              </a>
              <a
                href="mailto:hello@buildshipwin.dev"
                className={cn(
                  buttonVariants({ variant: "outline", size: "lg" }),
                  "border-white/40 text-white hover:bg-white/10 active:bg-white/15",
                )}
              >
                Ask a question
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
