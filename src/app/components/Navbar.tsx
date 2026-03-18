import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ArrowUpRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Home", href: "#hero", hasDropdown: true },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
  { label: "Services", href: "#services" },
  { label: "Pricing", href: "#pricing" },
  { label: "Pages", href: "#pages", hasDropdown: true },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileOpen(false);
    if (href.startsWith("#")) {
      const target = document.querySelector(href);
      if (target) target.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Detect if we're on optimo-v2
  const isV2 = typeof window !== "undefined" && window.location.pathname.includes("optimo-v2");

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-2" : "py-4"}`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-[30px]">
        <div className={`bg-white rounded-[20px] px-7 py-4 flex items-center gap-5 transition-shadow duration-300 ${scrolled ? "shadow-[0_8px_32px_rgba(0,0,0,0.12)]" : "shadow-[0_2px_16px_rgba(0,0,0,0.06)]"}`}>
          {/* Logo */}
          <a
            href="/"
            className="shrink-0 w-[111px]"
          >
            <span
              className="text-[28px] leading-[36px] uppercase tracking-wide"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, color: "#1d1ee3" }}
            >
              Optimo
            </span>
          </a>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex flex-1 items-center justify-center gap-1">
            {navLinks.map((link) => (
              <motion.button
                key={link.label}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleNavClick(link.href)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-[rgba(3,3,15,0.7)] hover:text-[#03030f] transition-colors duration-200 text-[16px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                {link.label}
                {link.hasDropdown && <ChevronDown size={12} className="opacity-60" />}
              </motion.button>
            ))}
            {/* Version switcher */}
            <a
              href={isV2 ? "/optimo" : "/optimo-v2"}
              className="px-3 py-1.5 ml-1 rounded-full border border-[#1d1ee3] text-[#1d1ee3] text-[13px] hover:bg-[#1d1ee3] hover:text-white transition-colors duration-200"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              {isV2 ? "Home V1" : "Home V2"}
            </a>
          </nav>

          {/* CTA Button */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => handleNavClick("#contact")}
            className="hidden lg:flex items-center gap-2 relative h-[39px] w-[133px] shrink-0 group"
          >
            <span className="text-[#03030f] text-[16px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
              Contact Us
            </span>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[39px] h-[39px] bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors duration-200">
              <ArrowUpRight size={18} color="white" />
            </div>
          </motion.button>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden ml-auto p-2"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
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
            className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl rounded-b-[20px] mx-6 overflow-hidden"
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link.href)}
                className="w-full text-left px-6 py-4 text-[rgba(3,3,15,0.7)] hover:text-[#03030f] hover:bg-[#eaeaff] transition-colors text-[16px] border-b border-[rgba(0,0,0,0.05)] last:border-b-0"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                {link.label}
              </button>
            ))}
            <a
              href={isV2 ? "/optimo" : "/optimo-v2"}
              className="block w-full text-left px-6 py-4 text-[#1d1ee3] hover:bg-[#eaeaff] transition-colors text-[16px] border-b border-[rgba(0,0,0,0.05)]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              {isV2 ? "← Home V1" : "Home V2 →"}
            </a>
            <button
              onClick={() => handleNavClick("#contact")}
              className="w-full text-left px-6 py-4 text-[#03030f] hover:bg-[#eaeaff] transition-colors text-[16px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Contact Us →
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}