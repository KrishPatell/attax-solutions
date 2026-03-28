import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight, FileText } from "lucide-react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../lib/heroH1";
import { blogPosts } from "../components/attax/resources/data";
import { usePageSeo } from "../lib/pageSeo";

const sections: { heading: string; items: { label: string; to: string; external?: boolean }[] }[] = [
  {
    heading: "Company",
    items: [
      { label: "About Us", to: "/about" },
      { label: "Our Process", to: "/our-process" },
      { label: "Services", to: "/services" },
      { label: "ATTAX Clarity", to: "/clarity" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Resource Library", to: "/resources" },
      { label: "Tax Glossary", to: "/glossary" },
      { label: "Client Portal", to: "https://clientportal.attaxsolutions.com", external: true },
    ],
  },
  {
    heading: "Legal",
    items: [
      { label: "Privacy Policy", to: "/privacy" },
      { label: "Terms of Use", to: "/terms" },
      { label: "Disclaimer", to: "/disclaimer" },
      { label: "California Privacy Rights", to: "/california-privacy" },
    ],
  },
];

export default function Sitemap() {
  usePageSeo({
    title: "Sitemap | ATTAX Solutions",
    description:
      "Every public page on ATTAX Solutions — company, tax services, resource guides, glossary, and legal policies. Also available as sitemap.xml for search engines.",
    path: "/sitemap",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Sitemap", path: "/sitemap" },
    ],
  });

  const guideEntries = Object.values(blogPosts)
    .map((p) => ({ label: p.title, to: `/resources/${p.slug}` }))
    .sort((a, b) => a.label.localeCompare(b.label));

  return (
    <div className="min-h-screen bg-[#fcfdff] selection:bg-[#1d1ee3]/10 selection:text-[#1d1ee3]">
      <AttaxNavbar />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[900px] mx-auto">
          <nav
            className="flex items-center gap-2 mb-8 text-[14px] text-[#0a1628]/40"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            <Link to="/" className="hover:text-[#1d1ee3] transition-colors">
              Home
            </Link>
            <ChevronRight size={14} />
            <span className="text-[#0a1628]/80 font-medium">Sitemap</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className={`${HERO_H1_CLASS_ON_LIGHT} mb-4`} style={HERO_H1_STYLE}>
              Site<span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>map</span>
            </h1>
            <p
              className="text-[16px] md:text-[17px] text-[#0a1628]/60 mb-10 max-w-[640px] leading-[1.7]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Browse every public page on ATTAX Solutions. For search engines, we also publish a standard{" "}
              <a
                href="/sitemap.xml"
                className="text-[#1d1ee3] font-semibold hover:underline inline-flex items-center gap-1"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                <FileText size={15} className="shrink-0" aria-hidden />
                sitemap.xml
              </a>
              .
            </p>

            <div className="mb-12">
              <h2
                className="text-[12px] uppercase tracking-widest font-bold text-[#0a1628]/45 mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Main
              </h2>
              <ul className="flex flex-col gap-2">
                <li>
                  <Link
                    to="/"
                    className="text-[15px] md:text-[16px] text-[#0a1628]/75 hover:text-[#1d1ee3] transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Home
                  </Link>
                </li>
              </ul>
            </div>

            {sections.map((section) => (
              <div key={section.heading} className="mb-12">
                <h2
                  className="text-[12px] uppercase tracking-widest font-bold text-[#0a1628]/45 mb-4"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {section.heading}
                </h2>
                <ul className="flex flex-col gap-2.5">
                  {section.items.map((item) => (
                    <li key={`${item.label}-${item.to}`}>
                      {item.external ? (
                        <a
                          href={item.to}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[15px] md:text-[16px] text-[#0a1628]/75 hover:text-[#1d1ee3] transition-colors"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Link
                          to={item.to}
                          className="text-[15px] md:text-[16px] text-[#0a1628]/75 hover:text-[#1d1ee3] transition-colors"
                          style={{ fontFamily: "'Inter Tight', sans-serif" }}
                        >
                          {item.label}
                        </Link>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            <div className="mb-12">
              <h2
                className="text-[12px] uppercase tracking-widest font-bold text-[#0a1628]/45 mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Tax guides
              </h2>
              <ul className="flex flex-col gap-2.5">
                {guideEntries.map((item) => (
                  <li key={item.to}>
                    <Link
                      to={item.to}
                      className="text-[15px] md:text-[16px] text-[#0a1628]/75 hover:text-[#1d1ee3] transition-colors leading-snug block"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </main>

      <AttaxFooter />
    </div>
  );
}
