import { useEffect } from "react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { usePageSeo } from "../lib/pageSeo";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ResourcesHero } from "../components/attax/resources/ResourcesHero";
import { ResourcesTabs } from "../components/attax/resources/ResourcesTabs";
import { ContactFAQCTA } from "../components/attax/contact/ContactFAQCTA";

export default function Resources() {
  usePageSeo({
    title: "Resources — IRS Guides, FAQs & Tax Glossary | ATTAX Solutions",
    description:
      "Plain-English guides on IRS notices, tax relief programs, penalties, and wage garnishments. Browse the ATTAX blog, FAQ library, IRS notice decoder, and tax glossary.",
    path: "/resources",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Resources", path: "/resources" },
    ],
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />

      <main>
        <ResourcesHero />
        <ResourcesTabs />
        <ContactFAQCTA />
      </main>

      <AttaxFooter />
    </div>
  );
}
