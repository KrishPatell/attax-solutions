import { useEffect } from "react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { usePageSeo } from "../lib/pageSeo";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ClarityHeroV2 } from "../components/attax/clarity/ClarityHeroV2";
import { ClarityWhySection } from "../components/attax/clarity/ClarityWhySection";
import { AttaxClarity } from "../components/attax/AttaxClarity";
import { CoreValuesSection } from "../components/attax/clarity/CoreValuesSection";
import { ClarityPortalAndBackup } from "../components/attax/clarity/ClarityPortalAndBackup";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { AttaxCtaBanner } from "../components/attax/CtaBannerSection";

export default function Clarity() {
  usePageSeo({
    title: "ATTAX Clarity — Proactive IRS Monitoring & Tax Health Score",
    description:
      "ATTAX Clarity monitors your IRS account 24/7 and alerts you before a notice becomes a crisis. Know your ATTAX Score — a real-time tax health grade from 0 to 100. Coming soon. Join the waitlist.",
    path: "/clarity",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "ATTAX Clarity", path: "/clarity" },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      {/* 01. Global Navigation */}
      <AttaxNavbar />

      <main>
        {/* 02. Hero */}
        <ClarityHeroV2 />

        {/* Why We Built This */}
        <ClarityWhySection />

        {/* 03 + 04 + 05. Membership tiers & Waitlist (section id lives on AttaxClarity) */}
        <AttaxClarity />

        {/* ATTAX Score Factors */}
        <CoreValuesSection />

        {/* 06 + 07. Portal & Backup CTA */}
        <ClarityPortalAndBackup />

        {/* FAQ + CTA Banner */}
        <AttaxFAQ />
        <AttaxCtaBanner />
      </main>

      <AttaxFooter />
    </div>
  );
}
