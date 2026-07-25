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
      "Anyone 18+, from first-time hackers to industry veterans. Students, professionals, and hobbyists are all welcome.",
  },
  {
    question: "Do I need a team?",
    answer:
      "No — register solo and we'll help you find teammates at our kickoff mixer, or bring a team of up to four.",
  },
  {
    question: "What should I bring?",
    answer:
      "Your laptop and charger. We provide meals, snacks, and a place to crash if you need it.",
  },
  {
    question: "Is there a cost to enter?",
    answer:
      "It's free. We cover food, swag, and workshop materials — just bring your ideas.",
  },
  {
    question: "How are winners judged?",
    answer:
      "A panel of industry judges scores each demo on impact, technical execution, and creativity.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="py-16 sm:py-24">
      <Container className="max-w-3xl">
        <div className="text-center">
          <Badge variant="secondary">FAQ</Badge>
          <h2 className="mt-4 text-3xl font-medium tracking-tight sm:text-4xl lg:text-5xl">
            Questions, answered
          </h2>
        </div>

        <Accordion type="single" collapsible defaultValue="item-0" className="mt-10">
          {FAQS.map((faq, index) => (
            <AccordionItem key={faq.question} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Container>
    </section>
  );
}
