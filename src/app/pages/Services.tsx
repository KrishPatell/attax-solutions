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
import { ServicesStats } from "../components/attax/services/ServicesStats";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Tax Relief Services — IRS Resolution, OIC & Negotiation | ATTAX Solutions";
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", "ATTAX Solutions offers comprehensive IRS tax relief services including Tax Resolution, Offer in Compromise, Installment Agreements, Penalty Abatement, and Wage Garnishment Release. Serving all 50 states.");
    }
    return () => {
      document.title = "ATTAX Solutions — Expert Tax Debt Resolution";
      if (metaDesc) metaDesc.setAttribute("content", "ATTAX Solutions offers expert IRS and state tax debt resolution. Licensed professionals, free consultations, and proven results. Serving clients nationwide.");
    };
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />
      
      <main>
        <ServicesHero />
        <ServicesStats />
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
        <AttaxContactForm />
        <AttaxFAQ />
      </main>

      <AttaxFooter />
    </div>
  );
}
