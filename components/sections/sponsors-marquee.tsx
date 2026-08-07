import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { SPONSORS } from "@/data";

export function SponsorsMarquee() {
  return (
    <section id="sponsors" className="py-12 p-7 sm:py-24">
      <Container className="max-w-5xl border-t-4 border-[#0d1748] bg-white p-10 sm:p-10 card-shadow rounded-lg">
        <ScrollReveal delay={0}>
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase varsity-title varsity-layered-burgundy">
              {SPONSORS.heading}
            </h2>
            <div className="w-32 h-1 bg-[#1d3557]/10 mt-4" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center ">
            <p className="domine text-base sm:text-lg text-[#1d3557]/80 leading-relaxed mb-6 sm:mb-10">
              {SPONSORS.description}
          </p>
          <p className="text-[#1d3557] text-sm sm:text-lg font-medium mb-3 sm:mb-4" style={{ fontFamily: "'Libertinus Math', system-ui"}}>
              {SPONSORS.contactLabel}
            </p>

          <div className="bg-[#f4bd6ac2] w-70 sm:w-2xl py-5 sm:p-8 card-shadow border-l-4 border-[#7b1113]">

            <a
              className="text-xs sm:text-xl md:text-2xl varsity-title text-[#7b1113] hover:text-[#1d3557] transition-colors break-all"
              href={`mailto:${SPONSORS.contactEmail}`}>
              {SPONSORS.contactEmail}
            </a>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
