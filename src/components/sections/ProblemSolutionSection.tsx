import { Zap, Shield, TrendingUp, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const problems = [
  "Spending months hiring senior React developers",
  "Paying expensive recruitment fees with no guarantees",
  "Onboarding developers who don't fit your culture",
];

const solutions = [
  "Get matched with vetted developers in 48 hours",
  "Start with a 14-day risk-free trial period",
  "Work with developers trained in your workflow",
];

const features = [
  {
    icon: Zap,
    title: "Fast, Reliable Matching",
    description: "Get matched with the right developer in 48 hours, not months.",
  },
  {
    icon: Shield,
    title: "2-Week Risk-Free Trial",
    description: "Try before you commit. No questions asked if it's not a fit.",
  },
  {
    icon: TrendingUp,
    title: "Scale Without Headache",
    description: "Add or reduce capacity as your needs change. No contracts.",
  },
  {
    icon: Users,
    title: "Seamless Collaboration",
    description: "Developers work in your timezone, with your tools and processes.",
  },
];

export function ProblemSolutionSection() {
  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-muted/50">
       
      <div className="section-container">
       <h2 className="text-3xl md:text-4xl font-bold  text-center mb-16">
            How It Works
          </h2>
        {/* Problem / Solution */}
        <div className="max-w-4xl mx-auto mb-16">
           
          <div className="grid md:grid-cols-2 gap-8 md:gap-12">
            {/* Problems */}
            <div className="bg-background rounded-2xl p-8 border border-border shadow-sm">
              <h3 className="text-lg font-semibold text-destructive mb-6">
                The old way
              </h3>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-destructive/10 text-destructive flex items-center justify-center text-sm">
                      ✕
                    </span>
                    <span className="text-muted-foreground">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div className="bg-primary/10 rounded-2xl p-8 border border-primary/20 shadow-sm">
              <h3 className="text-lg font-semibold text-foreground mb-6">
                The HireNextDev way
              </h3>
              <ul className="space-y-4">
                {solutions.map((solution, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center text-sm">
                      ✓
                    </span>
                    <span className="text-foreground">{solution}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
       <div className="text-center mb-16">
  <a href="#contact">
    <Button
      size="lg"
      className="bg-foreground text-background hover:bg-foreground/90 font-semibold"
    >
      Get In Touch
    </Button>
  </a>
</div>


        {/* Feature Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
