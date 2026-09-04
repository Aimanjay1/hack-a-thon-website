import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Container } from "@/components/ui/container";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import { MERCH } from "@/data";

export function Merch() {
  return (
    <section id="merch" className="py-16 sm:py-24 bg-[#fff9eb]">
      <Container>
        <ScrollReveal delay={0}>
          <div className="mx-auto max-w-xl text-center">
            <Badge variant="pennant" className="mx-auto varsity-title">
              {MERCH.badge}
            </Badge>
            <h2 className="mt-4 text-3xl uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-navy">
              {MERCH.heading}
            </h2>
            <p className="mt-3 text-gray-600 domine">{MERCH.description}</p>
          </div>
        </ScrollReveal>

        <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {MERCH.products.map((product, i) => (
            <ScrollReveal key={product.name} delay={100 + i * 100}>
              <a
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
              >
              <Card className="overflow-hidden rounded-md-lg border border-md-outline/20 bg-white card-shadow p-0 transition-transform duration-300 hover:-translate-y-2">
                <img
                  src={product.image.src}
                  alt={product.image.alt}
                  width={product.image.width}
                  height={product.image.height}
                  className="h-auto w-full"
                />
              </Card>
              </a>
              <h3 className="mt-4 text-center font-heading text-lg font-semibold uppercase text-[#1d3557]">
                {product.name}
              </h3>
              <p className="mt-1 text-center font-heading text-xl font-bold text-md-primary">
                {product.price}
              </p>
            </ScrollReveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
