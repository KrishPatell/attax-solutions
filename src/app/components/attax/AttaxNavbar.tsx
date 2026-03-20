import { useState, useEffect, CSSProperties } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Link, useLocation, useNavigate } from "react-router";
import { ChevronDown, Phone, Menu, X, Shield } from "lucide-react";
import { BrandLogo } from "./BrandLogo";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Our Process", href: "/our-process" },
  { label: "ATTAX", href: "/attax" },
  { label: "Clarity", href: "/clarity" },
  { label: "About", href: "/about" },
  { label: "Resources", href: "/resources" },
  { label: "Contact", href: "/contact" },
];

// Smooth CSS-only navbar entrance — avoids Framer Motion fixed-position jitter on iOS Safari
const navbarStyle: CSSProperties = {
  animation: "navbarSlideIn 0.6s cubic-bezier(0.22, 1, 0.36, 1) both",
};

// Inject the keyframes once when the module loads
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.textContent = `
    @keyframes navbarSlideIn {
      from { transform: translateY(-100%); opacity: 0; }
      to   { transform: translateY(0);     opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}

export function AttaxNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    // All other pages are currently draft — no navigation
  };

  return (
    <header
      style={navbarStyle}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-8">
        <div
          className={`bg-white rounded-[16px] px-6 py-3.5 flex items-center gap-4 transition-shadow duration-300 [transform:translate3d(0,0,0)] [-webkit-backface-visibility:hidden] [backface-visibility:hidden] ${
            scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.14)]" : "shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
          }`}
        >
          {/* Logo */}
          <button onClick={() => handleNavClick("/")} className="flex items-center gap-2 shrink-0 cursor-pointer">
            <BrandLogo />
          </button>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex flex-1 items-center justify-center gap-0.5">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick(link.href)}
                className="px-3.5 py-2 rounded-lg text-[rgba(10,22,40,0.7)] hover:text-[#0a1628] hover:bg-[#f0f4ff] transition-colors duration-200 text-[14px] whitespace-nowrap"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </motion.button>
            ))}
          </nav>

          {/* Right side: phone + CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0 ml-auto xl:ml-0">
            <a
              href="tel:+19492873015"
              className="flex items-center gap-2 text-[#0a1628] text-[14px] hover:text-[#1d1ee3] transition-colors"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              <Phone size={15} className="text-[#1d1ee3]" />
              +1 (949) 287-3015
            </a>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
              className="flex items-center gap-2 bg-[#1d1ee3] text-white rounded-[10px] px-5 py-2.5 text-[14px] hover:bg-[#1618c7] transition-colors"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Get Started
            </motion.button>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="xl:hidden ml-auto p-2"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="xl:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-[16px] mx-6 overflow-hidden border-t border-[#eaeaff] border-solid"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-6 py-4 text-[rgba(10,22,40,0.8)] hover:text-[#0a1628] hover:bg-[#f0f4ff] transition-colors text-[15px] border-b border-[rgba(0,0,0,0.04)] border-solid last:border-b-0"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </button>
            ))}
            <div className="px-6 py-4 flex items-center gap-4">
              <a href="tel:+19492873015" className="text-[#1d1ee3] text-[14px] flex items-center gap-2">
                <Phone size={14} /> +1 (949) 287-3015
              </a>
              <button
                onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
                className="bg-[#1d1ee3] text-white rounded-[10px] px-5 py-2.5 text-[14px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
