import { useState } from "react";
import { motion } from "motion/react";
import { Shield, Mail, Phone, MapPin, Send, Linkedin, Twitter, Facebook } from "lucide-react";
import { useNavigate, Link } from "react-router";
import { BrandLogo } from "./BrandLogo";

const links = {
  Company: ["About", "Our Process", "ATTAX", "Clarity", "Contact"],
  Resources: ["Blog", "Tax Resources", "IRS Fresh Start", "Offer in Compromise", "Client Portal"],
};

export function AttaxFooter() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleLinkClick = (e: React.MouseEvent, item: string) => {
    e.preventDefault();
    if (item === "About") navigate("/about");
    if (item === "Resources" || item === "Tax Resources") navigate("/resources");
    if (item === "Our Process") navigate("/our-process");
    if (item === "ATTAX") navigate("/attax");
    if (item === "Clarity" || item === "Client Portal") navigate("/clarity");
    if (item === "Contact") navigate("/contact");
    if (item === "Blog") navigate("/resources");
    if (item === "IRS Fresh Start" || item === "Offer in Compromise") navigate("/services");
  };

  return (
    <footer id="contact" className="bg-[#0a1628] text-white">
      {/* Contact CTA bar */}
      <div className="border-b border-white/10 border-solid">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2
                className="text-[32px] md:text-[38px] lg:text-[44px] leading-[1.15] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Ready to resolve your{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  tax problem?
                </span>
              </h2>
              <p
                className="text-white/60 text-[15px] lg:text-[16px] mt-3"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Speak with a tax specialist today — no cost, no obligation.
              </p>
            </div>
            <div className="flex flex-row flex-wrap items-center gap-4 shrink-0 w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(29,30,227,0.4)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact-form")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center justify-start gap-3 bg-[#1d1ee3] rounded-[50px] pl-5 md:pl-7 pr-1.5 md:pr-2 py-1.5 md:py-2 group cursor-pointer w-auto"
              >
                <span
                  className="text-white text-[14px] md:text-[15px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Free Consultation
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors shrink-0">
                  <Mail size={18} className="md:w-[18px] md:h-[18px] w-4 h-4" color="#1d1ee3" />
                </div>
              </motion.button>
              <a
                href="tel:+19492873015"
                className="flex items-center justify-start gap-2 text-white/70 hover:text-white text-[14px] md:text-[15px] transition-colors py-2 whitespace-nowrap"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                <Phone size={15} className="text-[#a5b4fc]" />
                +1 (949) 287-3015
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-10">
          {/* Brand */}
          <div className="col-span-12 lg:col-span-4">
            <div className="flex items-center gap-2 mb-5">
              <BrandLogo light />
            </div>
            <p
              className="text-white/55 text-[14px] leading-[1.7] mb-6 max-w-[280px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              The fastest growing tax relief company in the nation. IRS & state tax debt resolution handled with integrity and precision.
            </p>

            {/* Newsletter */}
            <div className="flex items-center bg-white/10 rounded-full p-1.5 gap-2 max-w-[280px]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent px-3 py-1 text-[13px] text-white placeholder:text-white/40 outline-none border-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0 cursor-pointer"
              >
                <Send size={13} color="white" />
              </motion.button>
            </div>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {[Linkedin, Twitter, Facebook].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, backgroundColor: "#1d1ee3" }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} color="white" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="col-span-6 lg:col-span-2">
              <h4
                className="text-white text-[12px] mb-5 uppercase tracking-wider"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <button
                      onClick={(e) => handleLinkClick(e, item)}
                      className="text-white/50 text-[13px] hover:text-white/90 transition-colors duration-200 cursor-pointer text-left"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-12 lg:col-span-2">
            <h4
              className="text-white text-[12px] mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-4">
              {[
                { icon: Mail, text: "info@attaxsolutions.com", href: "mailto:info@attaxsolutions.com" },
                { icon: Phone, text: "+1 (949) 287-3015", href: "tel:+19492873015" },
                { icon: MapPin, text: "Irvine, CA", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-start gap-2 text-white/50 text-[13px] hover:text-white/90 transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    <Icon size={13} className="shrink-0 mt-0.5" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 border-solid">
        <div className="max-w-[1200px] mx-auto px-5 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/35 text-[12px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            © 2026 ATTAX Solutions LLC · All rights reserved. · ATTAX Solutions LLC is not affiliated with the IRS.
          </p>
          <div className="flex gap-6">
            <Link
              to="/privacy"
              className="text-white/35 text-[12px] hover:text-white/70 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Privacy Policy
            </Link>
            <Link
              to="/terms"
              className="text-white/35 text-[12px] hover:text-white/70 transition-colors"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
            >
              Terms of Use
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
