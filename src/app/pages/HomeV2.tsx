import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { HeroV2 } from "../components/v2/HeroV2";
import { LogosSection } from "../components/v2/LogosSection";
import { BeliefsSection } from "../components/v2/BeliefsSection";
import { StrategicPlatformSection } from "../components/v2/StrategicPlatformSection";
import { MissionVisionSection } from "../components/v2/MissionVisionSection";
import { CorePrinciplesSection } from "../components/v2/CorePrinciplesSection";
import { StepByStepSection } from "../components/v2/StepByStepSection";
import { TeamSection } from "../components/v2/TeamSection";
import { CtaBannerSection } from "../components/v2/CtaBannerSection";

export function HomeV2() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroV2 />
        <LogosSection />
        <BeliefsSection />
        <StrategicPlatformSection />
        <MissionVisionSection />
        <CorePrinciplesSection />
        <StepByStepSection />
        <TestimonialsSection />
        <TeamSection />
        <CtaBannerSection />
      </main>
      <Footer />
    </div>
  );
}
