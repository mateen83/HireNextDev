import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const benefits = [
  "Senior React developers only",
  "2-week risk-free trial",
  "48-hour matching",
  "No long-term contracts",
];

export function FinalCTASection() {
  return (
    <section className="py-16 md:py-24 ">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground">
            Ready to scale your Tech team?
          </h2>
          <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
            Join 100+ companies that trust HireNextDev to build their products. 
            Start your 14-day risk-free trial today.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-foreground/10 text-sm font-medium"
              >
                <Check className="w-4 h-4" />
                {benefit}
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
  <a href="#contact">
    <Button
      size="lg"
      className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-lg"
    >
      Get In Touch
    </Button>
  </a>

  <a href="#contact">
    <Button
      size="lg"
      variant="outline"
      className="font-semibold px-8 py-6 text-lg border-foreground/30 hover:bg-secondary"
    >
      Contact Us
    </Button>
  </a>
</div>

        </div>
      </div>
    </section>
  );
}
