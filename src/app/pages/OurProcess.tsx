import { useEffect } from "react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { usePageSeo } from "../lib/pageSeo";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ProcessHero } from "../components/attax/process/ProcessHero";
import { ProcessStepsSection } from "../components/attax/process/ProcessStepsSection";
import { FreshStartPrograms } from "../components/attax/process/FreshStartPrograms";
import { EnrolledAgentBlock } from "../components/attax/process/EnrolledAgentBlock";
import { AttaxResults } from "../components/attax/AttaxResults";
import { AboutCTA } from "../components/attax/about/AboutCTA";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";

export default function OurProcess() {
  usePageSeo({
    title: "Our Process | ATTAX Solutions — IRS Tax Resolution, Step by Step",
    description:
      "Learn exactly how ATTAX Solutions resolves IRS tax debt — from free consultation to final close. No surprises. 4 clear steps, Fresh Start Programs, and licensed Tax Specialist representation.",
    path: "/our-process",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Our Process", path: "/our-process" },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />

      <main>
        {/* 02. Hero */}
        <ProcessHero />

        {/* 03–06. The 4 Steps */}
        <ProcessStepsSection />

        {/* 07. Fresh Start Programs */}
        <FreshStartPrograms />

        {/* 08. Enrolled Agent Credential Block */}
        <EnrolledAgentBlock />

        {/* 09. Client results — same block as home */}
        <AttaxResults />

        {/* CTA — same block as About page */}
        <AboutCTA />

        <AttaxFAQ />
      </main>

      <AttaxFooter />
    </div>
  );
}
