const steps = [
  {
    number: "01",
    title: "Technical Assessment",
    description: "Candidates complete a rigorous 4-hour coding challenge covering React, TypeScript, and system design.",
  },
  {
    number: "02",
    title: "Live Coding Interview",
    description: "A 90-minute pair programming session to evaluate problem-solving and collaboration skills.",
  },
  {
    number: "03",
    title: "Architecture Review",
    description: "Candidates present and defend their past work, demonstrating senior-level decision making.",
  },
  {
    number: "04",
    title: "Culture & Communication",
    description: "Assessment of English proficiency, remote work experience, and cultural fit.",
  },
  {
    number: "05",
    title: "Reference Checks",
    description: "We verify work history and speak with previous managers and colleagues.",
  },
  {
    number: "06",
    title: "Trial Project",
    description: "A paid trial project with a partner company to validate real-world performance.",
  },
];

export function VettingProcessSection() {
  return (
    <section id="vetting" className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our 6-step vetting process
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Only 2.3% of applicants make it through our rigorous selection process
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="relative bg-background rounded-xl p-6 border border-border hover:border-primary/50 transition-colors group"
            >
              <div className="flex items-start gap-4">
                <span className="text-4xl font-bold text-primary/30 group-hover:text-primary/50 transition-colors">
                  {step.number}
                </span>
                <div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-secondary/10 text-secondary">
            <span className="font-semibold">500+ hours</span>
            <span className="text-muted-foreground">of training per developer</span>
          </div>
        </div>
      </div>
    </section>
  );
}
