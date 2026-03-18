import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxHero } from "../components/attax/AttaxHero";
import { AttaxTrustBar } from "../components/attax/AttaxTrustBar";
import { AttaxStrategicPlatformV2 } from "../components/attax/AttaxStrategicPlatform_V2";
import { AttaxServices } from "../components/attax/AttaxServices";
import { AttaxProcess } from "../components/attax/AttaxProcess";
import { AttaxClarity } from "../components/attax/AttaxClarity";
import { AttaxResults } from "../components/attax/AttaxResults";
import { AttaxMidCTA } from "../components/attax/AttaxMidCTA";
import { AttaxAbout } from "../components/attax/AttaxAbout";
import { AttaxFAQ } from "../components/attax/AttaxFAQ";
import { AttaxCtaBanner } from "../components/attax/CtaBannerSection";
import { AttaxContactForm } from "../components/attax/AttaxContactForm";
import { AttaxFooter } from "../components/attax/AttaxFooter";

export default function ATTAX() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <AttaxNavbar />
      <main>
        <AttaxHero />
        <AttaxTrustBar />
        <AttaxStrategicPlatformV2 />
        <AttaxServices />
        <AttaxProcess />
        <AttaxClarity />
        <AttaxResults />
        <AttaxMidCTA />
        <AttaxAbout />
        <AttaxFAQ />
        <AttaxCtaBanner />
        <AttaxContactForm />
      </main>
      <AttaxFooter />
    </div>
  );
}