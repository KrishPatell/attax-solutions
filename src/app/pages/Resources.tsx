import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ResourcesHero } from "../components/attax/resources/ResourcesHero";
import { FeaturedResource } from "../components/attax/resources/FeaturedResource";
import { ResourcesGrid } from "../components/attax/resources/ResourcesGrid";
import { ResourcesCTA } from "../components/attax/resources/ResourcesCTA";
import { useEffect } from "react";

export default function Resources() {
  // Smooth scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />
      
      <main>
        <ResourcesHero />
        <FeaturedResource />
        <ResourcesGrid />
        <ResourcesCTA />
      </main>

      <AttaxFooter />
    </div>
  );
}
