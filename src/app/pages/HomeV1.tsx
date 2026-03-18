import { Navbar } from "../components/Navbar";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { StatsSection } from "../components/StatsSection";
import { ServicesSection } from "../components/ServicesSection";
import { ProcessSection } from "../components/ProcessSection";
import { ValuesSection } from "../components/ValuesSection";
import { HowWeHelpSection } from "../components/HowWeHelpSection";
import { TestimonialsSection } from "../components/TestimonialsSection";
import { FAQSection } from "../components/FAQSection";
import { Footer } from "../components/Footer";

export function HomeV1() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <StatsSection />
        <ServicesSection />
        <ProcessSection />
        <ValuesSection />
        <HowWeHelpSection />
        <TestimonialsSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
}
