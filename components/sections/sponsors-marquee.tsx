import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MERCHS } from "@/data";
import { SPONSORS } from "@/data";
import { Badge } from "../ui/badge";
import { Card } from "@/components/ui/card";

type MerchItem = {
  name: string;
  price: string;
  link: string;
  image: { src: string; alt: string; width: number; height: number };
};

function MerchCard({ item }: { item: MerchItem }) {
  return (
    <Card className="group/card relative flex h-full overflow-hidden rounded-md-lg border border-[#1d3557]/10 bg-white card-shadow pt-0 pb-0 transition-all duration-300 hover:-translate-y-2 hover:border-[#D4A017]/60 hover:shadow-xl">
      <div className="absolute inset-x-0 top-0 z-10 h-1 bg-linear-to-r from-[#D4A017] via-[#f4bd6a] to-[#D4A017]" />
      <div className="overflow-hidden">
        <img
          src={item.image.src}
          alt={item.image.alt}
          width={item.image.width}
          height={item.image.height}
          className="h-44 w-full object-cover transition-transform duration-500 group-hover/card:scale-110"
        />
      </div>
      <div className="flex flex-1 flex-col items-center gap-2 p-5 text-center">
        <h3 className="text-lg font-bold leading-snug text-[#1d3557]">
          {item.name}
        </h3>
        <p className="text-xl font-bold text-[#D4A017]">{item.price}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-block w-full rounded-md bg-[#1d3557] py-2 font-semibold text-white transition-colors hover:bg-[#D4A017]"
        >
          Order Now
        </a>
      </div>
    </Card>
  );
}

export function MerchAndSponsors() {
  return (
    <section id="merchs-and-sponsors" className="py-12 p-7 sm:py-24">
      <ScrollReveal delay={0}>
        <div className="flex flex-col items-center text-center mb-2 sm:mb-6">
          <Badge variant="pennant" className="mx-auto varsity-title">
            {MERCHS.badge}
          </Badge>
          <h2 className="mt-3 sm:mt-4 text-3xl sm:text-4xl lg:text-5xl tracking-wide uppercase varsity-title varsity-layered-navy">
            {MERCHS.heading}
          </h2>
          <p className="mt-3 text-gray-600 domine">{MERCHS.description}</p>
        </div>

        <div className="grid grid-cols-2 gap-6 my-4 mx-0 sm:m-10 lg:grid-cols-4">
          {MERCHS.products.map((item) => (
            <MerchCard key={item.name} item={item} />
          ))}
        </div>
        <div className="grid grid-cols-1 gap-6 my-6 mx-3 sm:m-10 sm:grid-cols-3">
          {MERCHS.bundles.map((bundle) => (
            <MerchCard key={bundle.name} item={bundle} />
          ))}
        </div>
      </ScrollReveal>
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
            <p
              className="text-[#1d3557] text-sm sm:text-lg font-medium mb-3 sm:mb-4"
              style={{ fontFamily: "'Libertinus Math', system-ui" }}
            >
              {SPONSORS.contactLabel}
            </p>

            <div className="bg-[#f4bd6ac2] w-70 sm:w-2xl py-5 sm:p-8 card-shadow border-l-4 border-[#7b1113]">
              <a
                className="text-xs sm:text-xl md:text-2xl varsity-title text-[#7b1113] hover:text-[#1d3557] transition-colors break-all"
                href={`mailto:${SPONSORS.contactEmail}`}
              >
                {SPONSORS.contactEmail}
              </a>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
