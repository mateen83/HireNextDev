import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "How quickly can I get matched with a developer?",
    answer: "Most clients are matched with a suitable developer within 48 hours. We review your requirements, search our vetted talent pool, and present you with candidates that fit your tech stack, timezone, and culture preferences.",
  },
  {
    question: "What happens during the 14-day trial?",
    answer: "During the trial, the developer works on your team just like a regular engagement. You pay only for the hours worked. If you're not satisfied for any reason, you can end the trial with no further obligation.",
  },
  {
    question: "How do you vet your developers?",
    answer: "Our 6-step vetting process includes technical assessments, live coding interviews, architecture reviews, and reference checks. Only 2.3% of applicants make it through. Every developer also completes 500+ hours of training.",
  },
  {
    question: "What if the developer isn't a good fit?",
    answer: "If at any point you feel the developer isn't the right fit, we'll replace them at no additional cost. Our goal is your long-term satisfaction, not short-term placements.",
  },
  {
    question: "Can I scale up or down as needed?",
    answer: "Absolutely. You can add more developers as your needs grow, or reduce capacity when projects wind down. There are no long-term contracts or minimum commitments.",
  },
  {
    question: "What timezones do your developers work in?",
    answer: "We have developers across multiple timezones. When you share your requirements, we match you with developers who can work during your preferred hours, ensuring seamless collaboration.",
  },
  {
    question: "How does billing work?",
    answer: "You're billed weekly based on the hours worked. We provide detailed timesheets and reports. There are no hidden fees, setup costs, or long-term commitments.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-secondary/5">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about ReactSquad
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-background rounded-xl border border-border px-6 data-[state=open]:shadow-lg transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
