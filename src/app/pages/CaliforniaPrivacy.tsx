import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../lib/heroH1";
import { usePageSeo } from "../lib/pageSeo";

export default function CaliforniaPrivacy() {
  usePageSeo({
    title: "California Privacy Rights (CCPA / CPRA) | ATTAX Solutions",
    description:
      "California residents: your rights under the CCPA and CPRA with ATTAX Solutions — access, deletion, opt-out of sale/sharing, and how to submit requests.",
    path: "/california-privacy",
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "California Privacy Rights", path: "/california-privacy" },
    ],
  });

  return (
    <div className="min-h-screen bg-[#fcfdff] selection:bg-[#1d1ee3]/10 selection:text-[#1d1ee3]">
      <AttaxNavbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-[#0a1628]/40" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <Link to="/" className="hover:text-[#1d1ee3] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#0a1628]/80 font-medium">California Privacy Rights</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className={`${HERO_H1_CLASS_ON_LIGHT} mb-7`} style={HERO_H1_STYLE}>
              California{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", fontWeight: 400 }}>Privacy Rights</span>
            </h1>
            <p className="text-[18px] text-[#0a1628]/60 mb-12" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Last updated: March 27, 2026 · Applies to California residents under the CCPA / CPRA
            </p>

            <div className="space-y-10 text-[#0a1628]/80" style={{ fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.8 }}>
              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Your Rights Under California Law</h2>
                <p className="text-[16px] leading-[1.8]">
                  If you are a California resident, the California Consumer Privacy Act (CCPA) as amended by the California Privacy Rights Act (CPRA) grants you specific rights regarding your personal information. This notice supplements our Privacy Policy and applies specifically to California residents.
                </p>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Information We Collect</h2>
                <p className="text-[16px] leading-[1.8] mb-4">In the preceding 12 months, ATTAX Solutions may have collected the following categories of personal information:</p>
                <ul className="list-none space-y-3 pl-0">
                  {[
                    ["Identifiers", "Name, email address, mailing address, phone number, IP address."],
                    ["Personal Records", "Financial information, tax records, and documentation you provide during intake."],
                    ["Internet Activity", "Pages visited on our website, links clicked, and browser information."],
                    ["Geolocation Data", "General location data derived from IP address."],
                    ["Professional Information", "Employment status and income information relevant to your case."],
                  ].map(([cat, desc]) => (
                    <li key={cat} className="flex gap-3 text-[16px]">
                      <span className="shrink-0 w-2 h-2 rounded-full bg-[#1d1ee3] mt-[10px]" />
                      <span><strong>{cat}:</strong> {desc}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Your CCPA / CPRA Rights</h2>
                <div className="space-y-6">
                  {[
                    ["Right to Know", "You may request that we disclose what personal information we have collected about you, the categories of sources, the business purpose for collecting it, and the categories of third parties with whom we share it."],
                    ["Right to Delete", "You may request that we delete personal information we have collected from you, subject to certain exceptions (e.g., completing a transaction, complying with legal obligations)."],
                    ["Right to Correct", "You may request that we correct inaccurate personal information we maintain about you."],
                    ["Right to Opt-Out of Sale/Sharing", "ATTAX Solutions does not sell or share your personal information for cross-context behavioral advertising. You do not need to opt out."],
                    ["Right to Limit Use of Sensitive Information", "We only use sensitive personal information (e.g., financial data) to provide the services you requested. We do not use it for other purposes."],
                    ["Right to Non-Discrimination", "We will not discriminate against you for exercising any of your CCPA/CPRA rights. We will not deny services, charge different prices, or provide a different quality of service."],
                  ].map(([right, desc]) => (
                    <div key={right} className="p-5 bg-[#f7f9ff] rounded-[14px] border border-[#eaeeff]">
                      <p className="font-bold text-[#0a1628] mb-2 text-[16px]">{right}</p>
                      <p className="text-[15px] text-[#0a1628]/70 leading-[1.7]">{desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">How to Submit a Request</h2>
                <p className="text-[16px] leading-[1.8]">
                  To exercise any of your California privacy rights, submit a verifiable consumer request by:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2 text-[16px]">
                  <li>Emailing us at <a href="mailto:privacy@attaxsolutions.com" className="text-[#1d1ee3] underline">privacy@attaxsolutions.com</a></li>
                  <li>Calling us at <a href="tel:+18558292829" className="text-[#1d1ee3] underline">+1 (855) 829-2829</a></li>
                  <li>Writing to us at: ATTAX Solutions LLC, Irvine, CA</li>
                </ul>
                <p className="text-[16px] mt-4 leading-[1.8]">
                  We will respond to verified requests within 45 days. We may need to verify your identity before processing your request. You may designate an authorized agent to make a request on your behalf.
                </p>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Shine the Light Law</h2>
                <p className="text-[16px] leading-[1.8]">
                  California Civil Code Section 1798.83 (California's "Shine the Light" law) permits California residents to request information about the disclosure of personal information to third parties for direct marketing purposes. ATTAX Solutions does not share personal information with third parties for their direct marketing purposes.
                </p>
              </section>

              <div className="mt-8 p-6 bg-[#f7f9ff] rounded-[16px] border border-[#eaeeff]">
                <p className="font-bold text-[#1d1ee3] mb-1">Privacy Contact</p>
                <p className="text-[15px]">ATTAX Solutions LLC · Irvine, CA</p>
                <p className="text-[15px]">Email: <a href="mailto:privacy@attaxsolutions.com" className="text-[#1d1ee3] underline">privacy@attaxsolutions.com</a></p>
                <p className="text-[15px]">Phone: +1 (855) 829-2829</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <AttaxFooter />
    </div>
  );
}
