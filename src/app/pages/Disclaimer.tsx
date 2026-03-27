import { useEffect } from "react";
import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export default function Disclaimer() {
  useEffect(() => {
    document.title = "Website Disclaimer | ATTAX Solutions";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#fcfdff] selection:bg-[#1d1ee3]/10 selection:text-[#1d1ee3]">
      <AttaxNavbar />
      <main className="pt-32 pb-24 px-6">
        <div className="max-w-[800px] mx-auto">
          <nav className="flex items-center gap-2 mb-8 text-[14px] text-[#0a1628]/40" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <Link to="/" className="hover:text-[#1d1ee3] transition-colors">Home</Link>
            <ChevronRight size={14} />
            <span className="text-[#0a1628]/80 font-medium">Disclaimer</span>
          </nav>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-[48px] lg:text-[64px] leading-[1.1] text-[#0a1628] mb-8" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
              Website{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>Disclaimer</span>
            </h1>
            <p className="text-[18px] text-[#0a1628]/60 mb-12" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              Last updated: March 27, 2026
            </p>

            <div className="space-y-10 text-[#0a1628]/80" style={{ fontFamily: "'Inter Tight', sans-serif", lineHeight: 1.8 }}>
              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Results Disclaimer</h2>
                <p className="text-[16px] leading-[1.8]">
                  Estimates and statements about program performance are based on historical results and specific client situations. Individual results will vary based on circumstances which include, but are not limited to, your financial situation and the accuracy and timeliness of the information you provide to ATTAX Solutions. We do not guarantee that your taxes owed will be reduced by a specific amount or percentage, paid off within a specific period, or that you will qualify for any IRS or state programs. Penalties and interest will continue to accrue until your tax liability is fully paid to the IRS and state.
                </p>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Independence from Government Agencies</h2>
                <p className="text-[16px] leading-[1.8]">
                  ATTAX Solutions LLC is a private tax resolution company independent from the IRS. We are not affiliated with or endorsed by the IRS or any government agency. We are licensed tax professionals. We do not assume tax liability, make payments to taxing authorities or creditors, or provide tax, bankruptcy, accounting, or legal advice. Results vary. Nothing on this website constitutes legal or financial advice. For official IRS information, visit{" "}
                  <a href="https://www.irs.gov" target="_blank" rel="noopener noreferrer" className="text-[#1d1ee3] underline">IRS.gov</a>.
                </p>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Testimonials &amp; Reviews</h2>
                <p className="text-[16px] leading-[1.8]">
                  Testimonials were provided by actual ATTAX Solutions clients and represent the clients' sole opinions and experiences. Clients were not compensated for their testimonials. These are individual results which will vary based on circumstances. We do not claim that they are typical results that consumers will generally achieve. Nothing included here should be taken as a guarantee, warranty, prediction, or representation about the results of your situation.
                </p>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">No Attorney-Client Relationship</h2>
                <p className="text-[16px] leading-[1.8]">
                  Communications through this website do not create an attorney-client or professional-client relationship. Submitting a form, making a phone call, or sending an email does not establish a professional engagement. A formal engagement only begins when a written Engagement Letter is signed by both parties and the required retainer has been received.
                </p>
              </section>

              <section>
                <h2 className="text-[22px] text-[#0a1628] font-bold mb-4">Accuracy of Information</h2>
                <p className="text-[16px] leading-[1.8]">
                  We make reasonable efforts to ensure that the information on this website is accurate and up to date. However, tax laws change frequently. Content on this site is provided for general informational purposes and may not reflect the most current legal developments. Always consult a qualified tax professional regarding your specific situation.
                </p>
              </section>

              <div className="mt-8 p-6 bg-[#f7f9ff] rounded-[16px] border border-[#eaeeff]">
                <p className="font-bold text-[#1d1ee3] mb-1" style={{ fontFamily: "'Inter Tight', sans-serif" }}>ATTAX Solutions LLC</p>
                <p className="text-[15px]">Irvine, CA · Phone: +1 (855) 829-2829 · info@attaxsolutions.com</p>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      <AttaxFooter />
    </div>
  );
}
