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
            className="pointer-events-none absolute inset-0 bg-[radial-gradient(white_1.5px,transparent_1.5px)] bg-size-[20px_20px] opacity-10"
          />

          <div className="relative z-10 mx-auto max-w-2xl px-6 py-16 sm:px-12 sm:py-20">
            <Badge variant="glass">Last call</Badge>
            <h2 className="mt-4 font-heading text-3xl font-semibold tracking-tight text-white uppercase sm:text-4xl lg:text-5xl">
              Earn your black belt in building
            </h2>
            <p className="mt-3 text-white/80">
              Registration closes October 30 — lock in your spot before the
              roster fills and your rival school beats you to it.
            </p>
            <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
              <a
                href="#"
                className={cn(
                  buttonVariants({ size: "lg" }),
                  "bg-white text-md-primary hover:bg-white/90 active:bg-white/80",
                )}
              >
                Enroll your team
              </a>
              <a
                href="mailto:hello@codedojo.dev"
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
