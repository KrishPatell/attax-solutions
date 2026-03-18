import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Terms() {
  return (
    <div className="min-h-screen bg-[#fcfdff] selection:bg-[#1d1ee3]/10 selection:text-[#1d1ee3]">
      <AttaxNavbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-[#0a1628]/40" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <Link to="/" className="hover:text-[#1d1ee3] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#0a1628]/80 font-medium">Terms & Conditions</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] lg:text-[64px] leading-[1.1] text-[#0a1628] mb-8" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
              Terms of <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Use</span>
            </h1>
            
            <p className="text-[18px] text-[#0a1628]/60 mb-12" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Last updated: March 16, 2026
            </p>

            <div className="prose prose-blue max-w-none space-y-12 text-[#0a1628]/80" style={{ fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.8 }}>
              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using the website of ATTAX Solutions LLC ("ATTAX Solutions", "we", "us", or "our"), you agree to comply with and be bound by these Terms of Use. If you do not agree to these terms, please do not use this website.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">2. Professional Representation</h2>
                <p>
                  ATTAX Solutions provides tax resolution and advocacy services. Our staff includes qualified Tax Specialists who represent clients before the IRS and state taxing authorities. We are not a law firm, and the information on this website does not constitute legal advice.
                </p>
                <p className="mt-4">
                  Engagement of our services requires a separate written agreement (Engagement Letter) that details the scope of representation and fee structure.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">3. IRS Disclaimer</h2>
                <p>
                  ATTAX Solutions LLC is a private professional services firm. We are not affiliated with, endorsed by, or part of the Internal Revenue Service (IRS) or any government agency. Using our services does not guarantee a specific outcome, as all settlements are subject to IRS or state approval.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">4. Use of Website</h2>
                <p>
                  The content on this website is for informational purposes only. You may use this website for personal, non-commercial use. Any unauthorized use of our content, including logos, text, and design patterns, is strictly prohibited.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">5. Contact Information</h2>
                <p>
                  For questions regarding these terms, please contact our headquarters:
                </p>
                <div className="mt-4 p-6 bg-white rounded-xl border border-[#eaeeff] shadow-sm">
                  <p className="font-bold text-[#1d1ee3]">ATTAX Solutions LLC</p>
                  <p>Irvine, CA</p>
                  <p>Phone: +1 (949) 287-3015</p>
                  <p>Email: info@attaxsolutions.com</p>
                </div>
              </section>
            </div>
          </motion.div>
        </div>
      </main>

      <AttaxFooter />
    </div>
  );
}
