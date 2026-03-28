import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { AboutHero } from "../components/attax/about/AboutHero";
import { HandlingCases } from "../components/attax/about/HandlingCases";
import { WhatHappensNext } from "../components/attax/about/WhatHappensNext";
import { OurTeam } from "../components/attax/about/OurTeam";
import { ClientAssurance } from "../components/attax/about/ClientAssurance";
import { ClientSuccesses } from "../components/attax/about/ClientSuccesses";
import { TeamSection } from "../components/attax/about/TeamSection";
import { ReferralProgram } from "../components/attax/about/ReferralProgram";
import { AboutCTA } from "../components/attax/about/AboutCTA";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { useEffect } from "react";
import { usePageSeo } from "../lib/pageSeo";

export default function AboutUs() {
  usePageSeo({
    title: "About Us — ATTAX Solutions | Tax Relief Experts in Irvine, CA",
    description:
      "Learn about ATTAX Solutions — the fastest growing tax relief company in the nation. Our team of Case Managers, Tax Consultants, and Tax Specialists serve clients in all 50 states from our Irvine, CA headquarters.",
    path: "/about",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "About Us", path: "/about" },
    ],
  });

  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => element.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white">
      <AttaxNavbar />
      <main>
        <AboutHero />
        <HandlingCases />
        <WhatHappensNext />
        <OurTeam />
        <ClientAssurance />
        <ClientSuccesses />
        <TeamSection />
        <ReferralProgram />
        <AboutCTA />
        <AttaxFAQ />
      </main>
      <AttaxFooter />
    </div>
  );
}
