import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { TrustedBySection } from "@/components/sections/TrustedBySection";
import { ProblemSolutionSection } from "@/components/sections/ProblemSolutionSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { CaseStudiesSection } from "@/components/sections/CaseStudiesSection";
import { VettingProcessSection } from "@/components/sections/VettingProcessSection";
import { PricingSection } from "@/components/sections/PricingSection";
import { BeforeAfterSection } from "@/components/sections/BeforeAfterSection";
import { ComparisonTableSection } from "@/components/sections/ComparisonTableSection";
import { TechStackSection } from "@/components/sections/TechStackSection";
import { FAQSection } from "@/components/sections/FAQSection";
import { FinalCTASection } from "@/components/sections/FinalCTASection";

import { ScrollToTop } from "@/components/ui/ScrollToTop";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <TrustedBySection />
        <ProblemSolutionSection />
        <TestimonialsSection />
        <CaseStudiesSection />
        <VettingProcessSection />
        <PricingSection />
        <BeforeAfterSection />
        <ComparisonTableSection />
        <TechStackSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
};


export default Index;
