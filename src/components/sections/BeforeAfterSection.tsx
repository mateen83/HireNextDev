import { Frown, Smile } from "lucide-react";

const beforeItems = [
  "Months spent on recruiting",
  "Expensive agency fees",
  "High turnover rates",
  "Culture mismatches",
  "Timezone nightmares",
  "Quality inconsistency",
];

const afterItems = [
  "Match in 48 hours",
  "Simple hourly pricing",
  "Long-term partnerships",
  "Pre-vetted for culture fit",
  "Your timezone coverage",
  "Guaranteed senior quality",
];

export function BeforeAfterSection() {
  return (
    <section className="py-16 md:py-24">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why engineering leaders choose us
          </h2>
          <p className="text-lg text-muted-foreground">
            See the difference HireNextDev makes
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Before */}
          <div className="bg-destructive/5 rounded-2xl p-8 border border-destructive/20">
            <div className="flex items-center gap-3 mb-6">
              <Frown className="w-8 h-8 text-destructive" />
              <h3 className="text-xl font-bold">Before</h3>
            </div>
            <ul className="space-y-4">
              {beforeItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm font-medium">
                    ✕
                  </span>
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-primary/10 rounded-2xl p-8 border border-primary/30">
            <div className="flex items-center gap-3 mb-6">
              <Smile className="w-8 h-8 text-foreground" />
              <h3 className="text-xl font-bold">With HireNextDev</h3>
            </div>
            <ul className="space-y-4">
              {afterItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm font-medium">
                    ✓
                  </span>
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
