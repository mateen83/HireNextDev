import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  "Senior Software Engineer only",
  "2-week risk-free trial",
  "48-hour matching",
  "Your timezone",
  "Your tools & processes",
  "No long-term contracts",
  "Dedicated account manager",
  "Quality guarantee",
];

export function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-muted/70 flex items-center justify-center">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple, transparent pricing
            </h2>
            <p className="text-lg text-muted-foreground">
              No hidden fees. No surprises. Just great developers.
            </p>
          </div>

          <div className="bg-background rounded-2xl border border-border shadow-xl overflow-hidden max-w-4xl ">
            <div className="p-8 md:p-12 text-center border-b border-border">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm font-medium mb-6">
                <span>Most popular</span>
              </div>
              <div className="flex items-baseline justify-center gap-2 mb-4">
                <span className="text-5xl md:text-6xl font-bold">$75</span>
                <span className="text-xl text-muted-foreground">/hour</span>
              </div>
              <p className="text-muted-foreground">
                Per developer, billed weekly
              </p>
            </div>

            <div className="p-8 md:p-12">
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center">
                      <Check className="w-3 h-3" />
                    </div>
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>

              <Button size="lg" className="w-full bg-foreground text-background hover:bg-foreground/90 font-semibold py-6 text-lg">
                Contact Us
              </Button>
              <p className="text-center text-sm text-muted-foreground mt-4">
                No credit card required. Cancel anytime.
              </p>
            </div>
          </div>

          {/* Additional note */}
          <div className="mt-8 text-center">
            <p className="text-sm text-muted-foreground">
              Need a custom solution?{" "}
              <a href="#contact" className="text-secondary hover:underline font-medium">
                Contact our sales team
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
