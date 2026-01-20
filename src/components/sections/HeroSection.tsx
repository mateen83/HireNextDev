import { Check, Clock, DollarSign } from "lucide-react";
import { Button } from "@/components/ui/button";

const badges = [
  { icon: Check, text: "14-Day Trial" },
  { icon: Clock, text: "Match in 48 Hours" },
  { icon: DollarSign, text: "$75/hour" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden gradient-hero">
      <div className="section-container py-16 md:py-24 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {badges.map((badge) => (
              <div
                key={badge.text}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-sm font-medium"
              >
                <badge.icon className="w-4 h-4 text-foreground" />
                <span>{badge.text}</span>
              </div>
            ))}
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 text-balance">
            <span className="text-foreground">Hire Your Next Developer</span>
            <br />
            <span className="text-secondary">Ready to Ship</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Scale your engineering team with pre-vetted senior Software developers. 
            No recruiting, no overhead, no risk. Start your 14-day trial today.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
  <a href="#contact">
    <Button
      size="lg"
      className="bg-foreground text-background hover:bg-foreground/90 font-semibold px-8 py-6 text-lg"
    >
      Get In Touch
    </Button>
  </a>

  <a href="#how-it-works">
    <Button
      size="lg"
      variant="outline"
      className="font-semibold px-8 py-6 text-lg border-foreground/20"
    >
      See how it works
    </Button>
  </a>
</div>


          {/* Trust indicators */}
          <p className="mt-8 text-sm text-muted-foreground">
            Trusted by 100+ tech companies worldwide
          </p>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-secondary/10 rounded-full blur-xl" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
    </section>
  );
}
