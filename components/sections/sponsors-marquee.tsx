import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function SponsorsMarquee() {
  return (
    <section id="sponsors" className="py-12 p-12 sm:py-24">
      <Container className="max-w-5xl border-t-4 border-[#0d1748] bg-white p-10 sm:p-10 card-shadow rounded-lg">
        <ScrollReveal delay={0}>
          <div className="flex flex-col items-center text-center mb-6">
            <h2 className="mt-3 sm:mt-4 text-xl sm:text-4xl lg:text-5xl tracking-wide uppercase varsity-title varsity-layered-burgundy">
              Calling For Sponsors
            </h2>
            <div className="w-32 h-1 bg-[#1d3557]/10 mt-4" />
          </div>
        </ScrollReveal>

        <ScrollReveal delay={200}>
          <div className="flex flex-col items-center max-w-4xl mx-auto text-center ">
            <p className="domine text-base sm:text-xl text-[#1d3557]/80 leading-relaxed mb-6 sm:mb-10">
            Support CodeDojo: Hack-A-Ton and gain valuable brand exposure among students and aspiring developers. 
            Sponsors will benefit from product showcases, social media promotions, logo placement on 
            official event materials, and official recognition through appreciation plaques and e-certificates.
          </p>
          <p className="text-[#1d3557] text-sm sm:text-xl font-medium mb-3 sm:mb-4" style={{ fontFamily: "'Domine', serif"}}>
              For any inquiries or further details, please contact:
            </p>

          <div className="bg-[#f4bd6ac2] p-5 sm:p-8 card-shadow border-l-4 border-[#7b1113]">

            <a
              className="text-base sm:text-xl md:text-2xl varsity-title text-[#7b1113] hover:text-[#1d3557] transition-colors break-all"
              href="mailto:partnerships@motionukict.com"
            >
              partnerships@motionukict.com
            </a>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
