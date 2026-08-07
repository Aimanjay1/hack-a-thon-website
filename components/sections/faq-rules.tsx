import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const FAQS = [
  {
    question: "Who can participate?",
    answer:
      "Any currently enrolled high school student, grades 9–12 — from first-time coders to seasoned club veterans.",
  },
  {
    question: "Do I need a team?",
    answer:
      "No — register solo and we'll help you find teammates at check-in, or bring a squad of up to four.",
  },
  {
    question: "What should I bring?",
    answer: "Your laptop and charger. We provide meals, snacks, and a place to crash if you need it.",
  },
  {
    question: "Is there a cost to enter?",
    answer: "It's free. We cover food, swag, and workshop materials — just bring your ideas.",
  },
  {
    question: "How are winners judged?",
    answer: "A panel of industry and faculty judges scores each demo on impact, execution, and creativity.",
  },
];

const RULES = [
  {
    question: "Team size",
    answer: "Teams can have 1–4 members. Solo hacking is welcome — we'll help you find a squad if you want one.",
  },
  {
    question: "Eligibility",
    answer: "Open to all currently enrolled high school students, regardless of school or experience level.",
  },
  {
    question: "Original work only",
    answer:
      "All code must be written during the event. Pre-built projects or unmodified templates will be disqualified.",
  },
  {
    question: "Code of conduct",
    answer: "Be excellent to each other. Harassment or plagiarism results in immediate disqualification.",
  },
  {
    question: "Submission deadline",
    answer: "Projects must be submitted through Devpost by 9:00 AM sharp on Day 3. Late submissions aren't judged.",
  },
];

function AccordionColumn({
  eyebrow,
  title,
  items,
  idPrefix,
}: {
  eyebrow: string;
  title: string;
  items: { question: string; answer: string }[];
  idPrefix: string;
}) {
  return (
    <div>
      <Badge variant="pennant">{eyebrow}</Badge>
      <h3 className="mt-4 font-heading text-2xl font-semibold tracking-tight uppercase sm:text-3xl text-[#ffffff]">
        {title}
      </h3>
      <Accordion type="single" collapsible className="mt-6">
        {items.map((item, index) => (
          <AccordionItem key={item.question} value={`${idPrefix}-${index}`}>
            <AccordionTrigger>{item.question}</AccordionTrigger>
            <AccordionContent>{item.answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}

export function FaqRules() {
  return (
    <section id="faq" className="py-16 sm:py-24 bg-[#1d3557]">
      <Container>
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mt-4 text-3xl tracking- uppercase sm:text-4xl lg:text-5xl varsity-title varsity-layered-white">
            Questions & rules
          </h2>
          <p className="mt-3 text-md-on-surface-variant domine italic">
            Everything you need to know before you show up.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <AccordionColumn eyebrow="FAQ" title="Questions, answered" items={FAQS} idPrefix="faq" />
          <AccordionColumn eyebrow="Rules" title="House rules" items={RULES} idPrefix="rules" />
        </div>
      </Container>
    </section>
  );
}
