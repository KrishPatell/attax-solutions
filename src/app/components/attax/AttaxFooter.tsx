import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, Instagram, Facebook, Download } from "lucide-react";
import { Link } from "react-router";
import { BrandLogo } from "./BrandLogo";
import attaxPdf from "../../../assets/ATTAX Solutions-2.pdf";

function TikTokIcon({ size = 15 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.95a8.27 8.27 0 0 0 4.84 1.54V7.05a4.85 4.85 0 0 1-1.07-.36z" />
    </svg>
  );
}

const navColumns = [
  {
    heading: "Company",
    links: [
      { label: "About Us", to: "/about" },
      { label: "Our Process", to: "/our-process" },
      { label: "Services", to: "/services" },
      { label: "ATTAX Clarity", to: "/clarity" },
      { label: "Contact Us", to: "/contact" },
    ],
  },
  {
    heading: "Tax Services",
    links: [
      { label: "Offer in Compromise", to: "/resources/offer-in-compromise-guide" },
      { label: "Installment Agreements", to: "/resources/installment-agreement-guide" },
      { label: "Penalty Abatement", to: "/resources/penalty-abatement-guide" },
      { label: "Wage Garnishment Relief", to: "/resources/wage-garnishment-bank-levy-guide" },
      { label: "Tax Lien Defense", to: "/resources/tax-lien-guide" },
      { label: "Currently Not Collectible", to: "/our-process#fresh-start" },
      { label: "Innocent Spouse Relief", to: "/our-process#fresh-start" },
      { label: "IRS Fresh Start", to: "/our-process#fresh-start" },
    ],
  },
  {
    heading: "Tax Resources",
    links: [
      { label: "Resource Library", to: "/resources" },
      { label: "Tax Glossary", to: "/glossary" },
      { label: "IRS Audit Guide", to: "/resources/irs-audit-survival-guide" },
      { label: "Tax Debt Relief Scams", to: "/resources/tax-debt-relief-scams" },
      { label: "Client Portal", to: "https://clientportal.attaxsolutions.com", external: true },
    ],
  },
];

export function AttaxFooter() {
  const [email, setEmail] = useState("");

  return (
    <footer id="contact" className="bg-[#0a1628] text-white">

      {/* ── Top CTA bar ── */}
      <div className="border-b border-white/10">
        <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-10 lg:py-16">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div>
              <h2
                className="text-[32px] lg:text-[44px] leading-[1.15] text-white"
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
              <a
                href={attaxPdf}
                download="ATTAX Solutions Presentation.pdf"
                className="flex items-center justify-start gap-5 bg-white rounded-[50px] pl-5 md:pl-7 pr-1.5 md:pr-2 py-1.5 md:py-2 group cursor-pointer w-auto"
                style={{ textDecoration: "none" }}
              >
                <span
                  className="text-[#0a1628] text-[14px] md:text-[15px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Download Presentation
                </span>
                <div className="w-10 h-10 md:w-12 md:h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors shrink-0">
                  <Download size={18} className="md:w-[18px] md:h-[18px] w-4 h-4" color="white" />
                </div>
              </a>
              <a
                href="tel:+18558292829"
                className="flex items-center justify-start gap-2 text-white/70 hover:text-white text-[14px] md:text-[15px] transition-colors py-2 whitespace-nowrap"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                <Phone size={15} className="text-[#a5b4fc]" />
                +1 (855) 829-2829
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Main grid ── */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-14 lg:py-20">
        <div className="grid grid-cols-12 gap-y-12 lg:gap-10">

          {/* Brand + contact + social */}
          <div className="col-span-12 lg:col-span-3">
            <div className="mb-6">
              <BrandLogo light className="w-[140px]" />
            </div>
            <p
              className="text-white/55 text-[14px] leading-[1.7] mb-8 max-w-[260px]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              The fastest growing tax relief company in the nation. IRS & state tax debt resolution with integrity and precision.
            </p>

            {/* Contact info */}
            <p
              className="text-white/40 text-[11px] uppercase tracking-widest font-bold mb-3"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Contact Us
            </p>
            <ul className="flex flex-col gap-3 mb-8">
              {[
                { icon: Phone, text: "+1 (855) 829-2829", href: "tel:+18558292829" },
                { icon: Mail, text: "info@attaxsolutions.com", href: "mailto:info@attaxsolutions.com" },
                { icon: MapPin, text: "Irvine, CA", href: "#" },
              ].map(({ icon: Icon, text, href }) => (
                <li key={text}>
                  <a
                    href={href}
                    className="flex items-center gap-2 text-white/55 text-[14px] hover:text-white transition-colors"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    <Icon size={13} className="shrink-0 text-[#a5b4fc]" />
                    {text}
                  </a>
                </li>
              ))}
            </ul>

            {/* Connect */}
            <p
              className="text-white/40 text-[11px] uppercase tracking-widest font-bold mb-3"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Connect With Us
            </p>
            <div className="flex gap-2 flex-wrap">
              {[
                { href: "https://www.linkedin.com/company/attax-solutions", label: "LinkedIn", Icon: Linkedin },
                { href: "https://www.instagram.com/attaxsolutions", label: "Instagram", Icon: Instagram },
                { href: "https://www.facebook.com/profile.php?id=61585792798511", label: "Facebook", Icon: Facebook },
              ].map(({ href, label, Icon }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.1, backgroundColor: "#1d1ee3" }}
                  className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors"
                >
                  <Icon size={15} color="white" />
                </motion.a>
              ))}
              <motion.a
                href="https://www.tiktok.com/@attaxsolutions"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                whileHover={{ scale: 1.1, backgroundColor: "#1d1ee3" }}
                className="w-9 h-9 rounded-full bg-white/10 flex items-center justify-center transition-colors text-white"
              >
                <TikTokIcon size={15} />
              </motion.a>
            </div>
          </div>

          {/* Nav columns */}
          {navColumns.map((col) => (
            <div key={col.heading} className="col-span-6 sm:col-span-4 lg:col-span-2">
              <h4
                className="text-white/40 text-[11px] mb-5 uppercase tracking-widest font-bold"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {col.heading}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.to}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/55 text-[14px] hover:text-white transition-colors"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.to}
                        className="text-white/55 text-[14px] hover:text-white transition-colors"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div className="col-span-12 sm:col-span-8 lg:col-span-3">
            <h4
              className="text-white/40 text-[11px] mb-5 uppercase tracking-widest font-bold"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Tax Tips Newsletter
            </h4>
            <p
              className="text-white/50 text-[13px] leading-[1.65] mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Monthly insights on IRS programs, deadlines, and tax relief strategies — delivered free.
            </p>
            <div className="flex items-center bg-white/10 rounded-full p-1.5 gap-2 overflow-hidden">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your email address"
                className="min-w-0 flex-1 bg-transparent px-3 py-1 text-[14px] text-white placeholder:text-white/35 outline-none border-none"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              />
              <motion.button
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Subscribe to newsletter"
                className="w-9 h-9 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0 cursor-pointer hover:bg-[#1618c7] transition-colors"
              >
                <Send size={13} color="white" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Disclaimer block ── */}
      <div className="border-t border-white/08">
        <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-10">
          <div className="space-y-5">
            <div>
              <p
                className="text-white/35 text-[11px] uppercase tracking-widest font-bold mb-3"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Website Disclaimer
              </p>
              <p
                className="text-white/35 text-[12px] leading-[1.75]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Estimates and statements about program performance are based on historical results and specific client situations. Individual results will vary based on circumstances which include, but are not limited to, your financial situation and the accuracy and timeliness of the information you provide to ATTAX Solutions. We do not guarantee that your taxes owed will be reduced by a specific amount or percentage, paid off within a specific period, or that you will qualify for any IRS or state programs. Penalties and interest will continue to accrue until your tax liability is fully paid to the IRS and state.
              </p>
            </div>
            <p
              className="text-white/30 text-[12px] leading-[1.75]"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              ATTAX Solutions LLC is a private tax resolution company independent from the IRS. We are not affiliated with or endorsed by the IRS or any government agency. We are licensed tax professionals. We do not assume tax liability, make payments to taxing authorities or creditors, or provide tax, bankruptcy, accounting, or legal advice. Results vary. Nothing here constitutes legal or financial advice. For official IRS information, visit{" "}
              <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer" className="underline hover:text-white/50 transition-colors">IRS.gov</a>.
            </p>
            <div>
              <p
                className="text-white/35 text-[11px] uppercase tracking-widest font-bold mb-2"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Testimonials &amp; Reviews
              </p>
              <p
                className="text-white/30 text-[12px] leading-[1.75]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Testimonials were provided by actual ATTAX Solutions clients and are the clients' sole opinions and experiences. Clients were not compensated. These are individual results which will vary based on circumstances. We do not claim that they are typical results that consumers will generally achieve. Nothing included here should be taken as a guarantee, warranty, prediction, or representation about the results of your situation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="border-t border-white/08">
        <div className="max-w-[1200px] mx-auto px-5 md:px-0 py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p
            className="text-white/35 text-[12px] text-center md:text-left"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            © 2025–26 ATTAX Solutions LLC · All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2">
            {[
              { label: "Privacy Policy", to: "/privacy" },
              { label: "Terms of Use", to: "/terms" },
              { label: "Disclaimer", to: "/disclaimer" },
              { label: "California Privacy Rights", to: "/california-privacy" },
            ].map((item) => (
              <Link
                key={item.label}
                to={item.to}
                className="text-white/35 text-[12px] hover:text-white/65 transition-colors whitespace-nowrap"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href="https://blitzstudio.xyz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/35 text-[12px] hover:text-white/55 transition-colors whitespace-nowrap"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Built by <span className="text-white/45">Blitz Studio</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
