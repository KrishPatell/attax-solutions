import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { AboutHero } from "../components/attax/about/AboutHero";
import { OurStory } from "../components/attax/about/OurStory";
import { HandlingCases } from "../components/attax/about/HandlingCases";
import { WhatHappensNext } from "../components/attax/about/WhatHappensNext";
import { ClientAssurance } from "../components/attax/about/ClientAssurance";
import { TeamSection } from "../components/attax/about/TeamSection";
import { ReferralProgram } from "../components/attax/about/ReferralProgram";
import { AboutCTA } from "../components/attax/about/AboutCTA";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { useEffect } from "react";

export default function AboutUs() {
  // Smooth scroll for hash links if coming from another page
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />
      
      <main>
        <AboutHero />
        <OurStory />
        <HandlingCases />
        <WhatHappensNext />
        <ClientAssurance />
        <TeamSection />
        <ReferralProgram />
        <AboutCTA />
        <AttaxFAQ />
      </main>

      <AttaxFooter />
    </div>
  );
}
