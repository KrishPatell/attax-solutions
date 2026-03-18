import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { Shield, ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[#fcfdff] selection:bg-[#1d1ee3]/10 selection:text-[#1d1ee3]">
      <AttaxNavbar />
      
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          {/* Breadcrumbs */}
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-[#0a1628]/40" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <Link to="/" className="hover:text-[#1d1ee3] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#0a1628]/80 font-medium">Privacy Policy</span>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-[48px] lg:text-[64px] leading-[1.1] text-[#0a1628] mb-8" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
              Privacy <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Policy</span>
            </h1>
            
            <p className="text-[18px] text-[#0a1628]/60 mb-12" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Last updated: March 16, 2026
            </p>

            <div className="prose prose-blue max-w-none space-y-12 text-[#0a1628]/80" style={{ fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.8 }}>
              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">1. Information We Collect</h2>
                <p>
                  ATTAX Solutions LLC ("ATTAX Solutions", "we", "us", or "our") collects information from you when you use our website, contact us for a consultation, or engage our services. This may include:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Personal identifiers (name, email address, phone number).</li>
                  <li>Financial information relevant to your tax situation.</li>
                  <li>Usage data from your interaction with our website.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">2. Use of Information</h2>
                <p>
                  We use the information we collect to:
                </p>
                <ul className="list-disc pl-6 mt-4 space-y-2">
                  <li>Provide tax resolution services and representation.</li>
                  <li>Communicate with you about your case or requested information.</li>
                  <li>Improve our website and services.</li>
                  <li>Ensure compliance with IRS and state tax regulations.</li>
                </ul>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">3. Information Sharing</h2>
                <p>
                  We do not sell your personal information. We may share your information with taxing authorities (IRS, state agencies) as necessary for your representation. We may also share information with third-party service providers who help us operate our business (e.g., our secure Client Portal), provided they agree to keep your information confidential.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">4. Data Security</h2>
                <p>
                  We take reasonable measures to protect your information from unauthorized access, loss, or theft. Our systems use industry-standard encryption and security protocols.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">5. Your Rights</h2>
                <p>
                  You have the right to request access to the personal information we hold about you and to request that we correct or delete it. Please contact us at info@attaxsolutions.com to make such a request.
                </p>
              </section>

              <section>
                <h2 className="text-[24px] text-[#0a1628] font-bold mb-4">6. Contact Us</h2>
                <p>
                  If you have questions about this Privacy Policy, please contact our Irvine, CA headquarters:
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
