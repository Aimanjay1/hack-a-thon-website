import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";
import { FAQS, RULES, TONES } from "@/data";
import { Link } from "lucide-react";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

type Tone = keyof typeof TONES;

function AccordionColumn({
  eyebrow,
  title,
  items,
  idPrefix,
  tone,
}: {
  eyebrow: string;
  title: string;
  items: readonly { question: string; answer: string }[];
  idPrefix: string;
  tone: Tone;
}) {
  const t = TONES[tone];

  return (
    <div>
      <Badge variant="pennant" className={t.badge}>
        {eyebrow}
      </Badge>
      <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight uppercase sm:text-3xl text-[#2d435b]">
        {title}
      </h3>
      <Accordion type="single" collapsible className="mt-6">
        {items.map((item, index) => (
          <AccordionItem
            key={item.question}
            value={`${idPrefix}-${index}`}
            className={t.item}
          >
            <AccordionTrigger className={t.trigger}>
              {item.question}
            </AccordionTrigger>
            <AccordionContent className={t.content}>
              {item.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function FaqRules() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container>
        <ScrollReveal delay={100}>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-4 text-3xl tracking-tight uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-navy">
            Questions & rules
          </h2>
          <p className="mt-3 text-md-on-surface-variant domine italic">
            Everything you need to know before you show up.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <AccordionColumn
              eyebrow="FAQ"
              title="Questions, answered"
              items={FAQS}
              idPrefix="faq"
              tone="gold"
            />
          </div>

          <div>
            <AccordionColumn
              eyebrow="Rules"
              title="House rules"
              items={RULES}
              idPrefix="rules"
              tone="burgundy"
            />
            <br />
            <a
              href="https://oasis-periwinkle-ec4.notion.site/Hack-A-Ton-Information-Rules-Regulations-3b47dc15b0308024a82dc9697320be96"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-none px-8 py-3 text-lg font-medium transition-colors duration-200 bg-white text-[#2d435b] border-2 border-[#2d435b] hover:bg-[#2d435b] hover:text-white"
              style={{
                fontFamily: "'Alfa Slab One', serif",
              }}
            >
              See More
            </a>
          </div>
        </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
