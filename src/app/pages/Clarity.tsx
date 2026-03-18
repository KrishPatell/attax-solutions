import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ClarityHeroV2 } from "../components/attax/clarity/ClarityHeroV2";
import { ClarityWhySection } from "../components/attax/clarity/ClarityWhySection";
import { AttaxClarity } from "../components/attax/AttaxClarity";
import { CoreValuesSection } from "../components/attax/clarity/CoreValuesSection";
import { CoreVisionSection } from "../components/attax/clarity/CoreVisionSection";
import { ClarityPortalAndBackup } from "../components/attax/clarity/ClarityPortalAndBackup";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { AttaxCtaBanner } from "../components/attax/CtaBannerSection";

export default function Clarity() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden bg-white">
      {/* 01. Global Navigation */}
      <AttaxNavbar />

      <main>
        {/* 02. Enhanced Hero Section */}
        <ClarityHeroV2 />

        {/* NEW: Why We Built This Section */}
        <ClarityWhySection />

        {/* 03, 04 & 05. Attax Clarity (Memberships & Waitlist) */}
        <div id="clarity">
          <AttaxClarity />
        </div>

        {/* NEW: Core Values & Vision */}
        <CoreValuesSection />
        <CoreVisionSection />

        {/* 06 & 07. Portal & Backup CTA */}
        <ClarityPortalAndBackup />

        {/* Common Components for consistency */}
        <AttaxFAQ />
        <AttaxCtaBanner />
      </main>

      {/* Footer */}
      <AttaxFooter />
    </div>
  );
}
