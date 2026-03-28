import { useLocation } from "react-router";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxHero } from "../components/attax/AttaxHero";
import { AttaxTrustBar } from "../components/attax/AttaxTrustBar";
import { AttaxStrategicPlatformV2 } from "../components/attax/AttaxStrategicPlatform_V2";
import { AttaxServices } from "../components/attax/AttaxServices";
import { AttaxProcess } from "../components/attax/AttaxProcess";
import { AttaxResults } from "../components/attax/AttaxResults";
import { AttaxMidCTA } from "../components/attax/AttaxMidCTA";
import { AttaxContactForm } from "../components/attax/AttaxContactForm";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { AttaxCtaBanner } from "../components/attax/CtaBannerSection";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { usePageSeo } from "../lib/pageSeo";

export default function ATTAX() {
  const { pathname } = useLocation();
  const canonicalPath = pathname === "/attax" ? "/" : "/";

  usePageSeo({
    title: "ATTAX Solutions — Expert IRS Tax Debt Resolution",
    description:
      "ATTAX Solutions resolves IRS tax debt through expert negotiation, Offers in Compromise, installment agreements, and penalty abatement. Licensed Tax Specialists. Free consultation. All 50 states.",
    path: canonicalPath,
    breadcrumbs: [{ name: "Home", path: "/" }],
  });

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <AttaxNavbar />
      <main>
        <AttaxHero />
        <AttaxTrustBar />
        <AttaxStrategicPlatformV2 />
        <AttaxServices />
        <AttaxProcess />
        <AttaxResults />
        <AttaxMidCTA />
        <AttaxContactForm />
        <AttaxFAQ />
        <AttaxCtaBanner />
      </main>
      <AttaxFooter />
    </div>
  );
}