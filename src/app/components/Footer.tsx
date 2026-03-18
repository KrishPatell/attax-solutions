import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Mail, Phone, MapPin, Send } from "lucide-react";

export function Footer() {
  const [email, setEmail] = useState("");

  const links = {
    Services: ["Strategic Planning", "Risk Management", "Finance Advisory", "Asset Management", "Team Growth"],
    Company: ["About Us", "Blog", "Careers", "Press", "Contact"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer id="contact" className="bg-[#03030f] text-white">
      {/* CTA Banner */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 py-16">
          <div className="flex items-center justify-between gap-8 flex-wrap">
            <div>
              <h2
                className="text-[48px] leading-[1.15] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Let's Move Your Business{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  Forward
                </span>
              </h2>
              <p
                className="text-[rgba(255,255,255,0.6)] text-[16px] mt-3"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Ready to unlock your business's full potential? Book a free strategy call today.
              </p>
            </div>
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 0 40px rgba(29,30,227,0.4)" }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-7 pr-2 py-2 group shrink-0"
            >
              <span
                className="text-white text-[16px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Book A Free Call
              </span>
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
                <ArrowUpRight size={20} color="#1d1ee3" />
              </div>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-[1200px] mx-auto px-8 py-16">
        <div className="grid grid-cols-12 gap-10">
          {/* Brand */}
          <div className="col-span-4">
            <div
              className="text-[28px] leading-[36px] uppercase tracking-wide mb-4"
              style={{ fontFamily: "'Helvetica Neue', Helvetica, Arial, sans-serif", fontWeight: 700, color: "#1d1ee3" }}
            >
              Optimo
            </div>
            <p
              className="text-[rgba(255,255,255,0.6)] text-[14px] leading-[1.7] mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Expert strategic consulting to drive sustainable growth and lasting business transformation.
            </p>
            {/* Newsletter */}
            <div className="flex items-center bg-white/10 rounded-full p-1.5 gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="flex-1 bg-transparent px-3 py-1 text-[14px] text-white placeholder:text-white/40 outline-none"
                style={{ fontFamily: "'Inter', sans-serif" }}
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0"
              >
                <Send size={14} color="white" />
              </motion.button>
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="col-span-2">
              <h4
                className="text-white text-[14px] mb-5 uppercase tracking-wider"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                {category}
              </h4>
              <ul className="flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-[rgba(255,255,255,0.55)] text-[14px] hover:text-white transition-colors duration-200"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact */}
          <div className="col-span-2">
            <h4
              className="text-white text-[14px] mb-5 uppercase tracking-wider"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Contact
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { icon: Mail, text: "hello@optimo.co" },
                { icon: Phone, text: "+1 (800) 555-0198" },
                { icon: MapPin, text: "New York, NY 10001" },
              ].map(({ icon: Icon, text }) => (
                <li key={text} className="flex items-center gap-2 text-[rgba(255,255,255,0.55)] text-[14px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  <Icon size={14} className="shrink-0" />
                  {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1200px] mx-auto px-8 py-6 flex items-center justify-between">
          <p
            className="text-[rgba(255,255,255,0.4)] text-[13px]"
            style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
          >
            © 2026 Optimo. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-[rgba(255,255,255,0.4)] text-[13px] hover:text-white transition-colors"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
