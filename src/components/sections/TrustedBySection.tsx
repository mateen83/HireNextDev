const logos = [
  { name: "Alpha", path: "/trustedlogos/Alpha-Logo.svg" },
  { name: "Avolin", path: "/trustedlogos/Avolin-Logo.svg" },
  { name: "Codenation", path: "/trustedlogos/Codenation.svg" },
  { name: "Coppertree", path: "/trustedlogos/Coppertree.svg" },
  { name: "DevFactory", path: "/trustedlogos/DevFactory-Logo.svg" },
  { name: "DevGraph", path: "/trustedlogos/DevGraph-Logo.svg" },
  { name: "Engine Yard", path: "/trustedlogos/Engine-Yard-Logo.svg" },
  
  { name: "Upland", path: "/trustedlogos/upland-logo.svg" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 bg-muted/30 border-y border-border overflow-hidden">
      <div className="section-container mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Trusted by US & UK Tech-CTOs
        </h2>
      </div>

      {/* Infinite scroll container */}
      <div className="relative">
        <div className="flex animate-scroll">
          {/* First set of logos */}
          {[...logos, ...logos].map((logo, index) => (
            <div
              key={`${logo.name}-${index}`}
              className="flex-shrink-0 mx-12 flex items-center grayscale hover:grayscale-0 transition-all duration-300"
            >
              <img
                src={logo.path}
                alt={`${logo.name} logo`}
                className="h-6 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

