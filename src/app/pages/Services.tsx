import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ServicesHero } from "../components/attax/services/ServicesHero";
import { ServiceAnchors } from "../components/attax/services/ServiceAnchors";
import { TaxResolution } from "../components/attax/services/TaxResolution";
import { TaxRelief } from "../components/attax/services/TaxRelief";
import { TaxNegotiation } from "../components/attax/services/TaxNegotiation";
import { TaxProblems } from "../components/attax/services/TaxProblems";
import { FreeConsultation } from "../components/attax/services/FreeConsultation";
import { HandlingCases } from "../components/attax/about/HandlingCases";
import { ServiceCTA } from "../components/attax/services/ServiceCTA";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { AttaxContactForm } from "../components/attax/AttaxContactForm";
import { useEffect } from "react";

export default function Services() {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />
      
      <main>
        <ServicesHero />
        <ServiceAnchors />
        
        <div className="space-y-0">
          <TaxResolution />
          <TaxRelief />
          <TaxNegotiation />
          <TaxProblems />
          <HandlingCases />
          <FreeConsultation />
          <ServiceCTA />
        </div>
        <AttaxFAQ />
        <AttaxContactForm />
      </main>

      <AttaxFooter />
    </div>
  );
}
