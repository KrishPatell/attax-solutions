import { useEffect } from "react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ProcessHero } from "../components/attax/process/ProcessHero";
import { ProcessStats } from "../components/attax/process/ProcessStats";
import { ProcessStepsSection } from "../components/attax/process/ProcessStepsSection";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { AttaxContactForm } from "../components/attax/AttaxContactForm";
import { ProcessCTA } from "../components/attax/process/ProcessCTA";

export default function OurProcess() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />

      <main>
        {/* 01. Hero - Based on Optimo Design */}
        <ProcessHero />

        {/* 02. Stats - Based on Optimo Design */}
        <ProcessStats />

        {/* 03. Steps Grid - Based on Optimo "Explore More Services" */}
        <ProcessStepsSection />

        {/* 04. FAQ */}
        <AttaxFAQ />

        {/* 05. Contact Form */}
        <AttaxContactForm />

        {/* 06. CTA */}
        <ProcessCTA />
      </main>

      <AttaxFooter />
    </div>
  );
}
