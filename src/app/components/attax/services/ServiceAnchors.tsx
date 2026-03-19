import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const anchors = [
  { label: "Tax Resolution", href: "#tax-resolution" },
  { label: "Tax Relief", href: "#tax-relief" },
  { label: "Tax Negotiation", href: "#tax-negotiation" },
  { label: "Tax Problems", href: "#tax-problems" },
];

export function ServiceAnchors() {
  const [activeAnchor, setActiveAnchor] = useState("");

  const scrollToAnchor = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const id = href.substring(1);
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Offset for sticky nav
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
      setActiveAnchor(href);
    }
  };

  return (
    <div className="sticky top-[72px] lg:top-[88px] z-40 bg-white border-y border-[rgba(0,0,0,0.05)] shadow-sm">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between py-3 md:py-4 gap-3 md:gap-4">
          {/* Breadcrumb — hidden on mobile */}
          <div className="hidden md:flex items-center gap-2 text-[14px] font-medium text-[rgba(10,22,40,0.4)]">
            <Link to="/" className="hover:text-[#1d1ee3] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#0a1628]">Services</span>
          </div>

          {/* Anchor Nav */}
          <nav className="flex flex-wrap items-center justify-center gap-4 lg:gap-10">
            {anchors.map((anchor) => (
              <a
                key={anchor.label}
                href={anchor.href}
                onClick={(e) => scrollToAnchor(e, anchor.href)}
                className={`text-[14px] lg:text-[15px] font-bold uppercase tracking-wider transition-all duration-300 relative py-1
                  ${activeAnchor === anchor.href ? "text-[#1d1ee3]" : "text-[rgba(10,22,40,0.5)] hover:text-[#0a1628]"}
                `}
              >
                {anchor.label}
                {activeAnchor === anchor.href && (
                  <motion.div 
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1d1ee3]"
                  />
                )}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
