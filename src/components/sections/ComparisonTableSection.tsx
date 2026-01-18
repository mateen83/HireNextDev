import { Check, X } from "lucide-react";

const comparisonData = [
  {
    feature: "Vetting quality",
    freelancers: false,
    marketplaces: false,
    us: true,
  },
  {
    feature: "Risk-free trial",
    freelancers: false,
    marketplaces: false,
    us: true,
  },
  {
    feature: "48-hour matching",
    freelancers: false,
    marketplaces: false,
    us: true,
  },
  {
    feature: "Timezone alignment",
    freelancers: false,
    marketplaces: true,
    us: true,
  },
  {
    feature: "Dedicated support",
    freelancers: false,
    marketplaces: false,
    us: true,
  },
  {
    feature: "Quality guarantee",
    freelancers: false,
    marketplaces: false,
    us: true,
  },
  {
    feature: "Transparent pricing",
    freelancers: true,
    marketplaces: false,
    us: true,
  },
  {
    feature: "Scale on demand",
    freelancers: false,
    marketplaces: true,
    us: true,
  },
];

export function ComparisonTableSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/70">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            See how we stack up
          </h2>
          <p className="text-lg text-muted-foreground">
            Compare HireNextDev against alternatives
          </p>
        </div>

        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 font-medium text-muted-foreground">Feature</th>
                <th className="text-center py-4 px-4">
                  <span className="font-medium text-muted-foreground">Freelancers</span>
                </th>
                <th className="text-center py-4 px-4">
                  <span className="font-medium text-muted-foreground">Marketplaces</span>
                </th>
                <th className="text-center py-4 px-4">
                  <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-primary/20 font-semibold">
                    HireNextDev
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              {comparisonData.map((row, index) => (
                <tr key={index} className="border-b border-border/50 hover:bg-muted/30">
                  <td className="py-4 px-4 font-medium">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.freelancers ? (
                      <Check className="w-5 h-5 text-secondary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive/50 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.marketplaces ? (
                      <Check className="w-5 h-5 text-secondary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive/50 mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.us ? (
                      <Check className="w-5 h-5 text-secondary mx-auto" />
                    ) : (
                      <X className="w-5 h-5 text-destructive/50 mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
