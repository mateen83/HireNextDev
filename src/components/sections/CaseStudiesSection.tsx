import { Globe, Building2 } from "lucide-react";

const caseStudies = [
  {
    name: "Alex Thompson",
    title: "CTO",
    company: "FinTech Pro",
    companyInitial: "F",
    industry: "FinTech",
    country: "United States",
    website: "fintechpro.com",
    challenge: "Needed to rebuild their legacy React application while maintaining feature velocity.",
    solution: "Added 3 senior React developers who integrated seamlessly with the existing team.",
    results: ["40% faster deployment cycles", "Zero production incidents", "Team scaled 3x in 6 months"],
  },
  {
    name: "Lisa Park",
    title: "VP Engineering",
    company: "HealthTech Labs",
    companyInitial: "H",
    industry: "Healthcare",
    country: "United Kingdom",
    website: "healthtechlabs.io",
    challenge: "Struggling to find HIPAA-compliant React developers for their patient portal.",
    solution: "Matched with 2 developers with healthcare experience and security expertise.",
    results: ["HIPAA compliance achieved", "Patient portal launched on time", "99.9% uptime since launch"],
  },
  {
    name: "Marcus Johnson",
    title: "Head of Product",
    company: "E-Commerce Plus",
    companyInitial: "E",
    industry: "E-Commerce",
    country: "Germany",
    website: "ecommerce-plus.de",
    challenge: "Black Friday deadline with only 8 weeks to build a new checkout experience.",
    solution: "Fast-tracked 4 senior developers who hit the ground running.",
    results: ["Delivered 2 weeks early", "30% higher conversion rate", "Zero downtime on Black Friday"],
  },
];

export function CaseStudiesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/70">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Real results from real teams
          </h2>
          <p className="text-lg text-muted-foreground">
            See how engineering leaders scaled their teams with HireNextDev
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Header */}
              <div className="p-6 border-b border-border">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-secondary text-secondary-foreground flex items-center justify-center font-bold text-lg">
                    {study.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <div>
                    <p className="font-semibold">{study.name}</p>
                    <p className="text-sm text-muted-foreground">{study.title}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-8 h-8 rounded bg-muted flex items-center justify-center">
                    <span className="font-bold text-sm">{study.companyInitial}</span>
                  </div>
                  <span className="font-medium">{study.company}</span>
                </div>
                <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Building2 className="w-4 h-4" />
                    {study.industry}
                  </span>
                  <span className="flex items-center gap-1">
                    <Globe className="w-4 h-4" />
                    {study.country}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-destructive mb-2">Challenge</h4>
                  <p className="text-sm text-muted-foreground">{study.challenge}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-secondary mb-2">Solution</h4>
                  <p className="text-sm text-muted-foreground">{study.solution}</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Results</h4>
                  <ul className="space-y-2">
                    {study.results.map((result, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <span className="w-5 h-5 rounded-full bg-primary/20 text-foreground flex items-center justify-center text-xs">
                          ✓
                        </span>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
