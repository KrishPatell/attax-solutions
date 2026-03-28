import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ServicesHero } from "../components/attax/services/ServicesHero";
import { TaxResolution } from "../components/attax/services/TaxResolution";
import { TaxRelief } from "../components/attax/services/TaxRelief";
import { TaxNegotiation } from "../components/attax/services/TaxNegotiation";
import { HandlingCases } from "../components/attax/about/HandlingCases";
import { AboutCTA } from "../components/attax/about/AboutCTA";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { useEffect } from "react";
import { usePageSeo } from "../lib/pageSeo";

export default function Services() {
  usePageSeo({
    title: "Tax Relief Services — IRS Resolution, OIC & Negotiation | ATTAX Solutions",
    description:
      "ATTAX Solutions offers comprehensive IRS tax relief services including Tax Resolution, Offer in Compromise, Installment Agreements, Penalty Abatement, and Wage Garnishment Release. Serving all 50 states.",
    path: "/services",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Services", path: "/services" },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />
      
      <main>
        <ServicesHero />

        <div className="space-y-0">
          <TaxResolution />
          <TaxRelief />
          <TaxNegotiation />
          <HandlingCases variant="commonProblems" />
        </div>
        <AboutCTA />
        <AttaxFAQ />
      </main>

      <AttaxFooter />
    </div>
  );
}
