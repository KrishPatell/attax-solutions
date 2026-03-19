import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { UserPlus, DollarSign, Clock, CheckCircle2, ChevronDown, ChevronUp, Send } from "lucide-react";

const faqs = [
  {
    question: "When do I get paid?",
    answer: "Referral fees are paid after a 30-day clearance period following the successful collection of the investigation fee from the new client."
  },
  {
    question: "What if the client doesn't complete the investigation?",
    answer: "No referral fee is paid if the client does not complete the initial investigation phase or if the investigation fee is not collected."
  },
  {
    question: "Can I refer family members?",
    answer: "Yes, you can refer family members as long as you have their proper consent to share their contact information with us."
  }
];

export function ReferralProgram() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="referral" className="bg-[#f7f9ff] py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Left - Program Info */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] text-[#0a1628] mb-6 md:mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Help Others.{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Earn Rewards.
                </span>
              </h2>
              <p
                className="text-[15px] md:text-[18px] text-[#0a1628]/60 leading-[1.7] mb-8 md:mb-12"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Know someone struggling with IRS or state tax debt? Refer them to ATTAX Solutions. Our referral program is designed to reward you for helping people find professional representation.
              </p>

              <div className="space-y-6 mb-12">
                {[
                  { icon: UserPlus, text: "$50 referral fee per enrolled client" },
                  { icon: Clock, text: "30-day clearance period for payments" },
                  { icon: DollarSign, text: "Paid after investigation fee collection" },
                  { icon: CheckCircle2, text: "Simple referral agreement — no complexity" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-4 text-[#0a1628] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm border border-[#1d1ee3]/10">
                      <item.icon size={18} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>

              {/* FAQ Accordion */}
              <div className="mt-16">
                <h3 className="text-[20px] text-[#0a1628] mb-6 font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Referral Program FAQ</h3>
                <div className="space-y-3">
                  {faqs.map((faq, idx) => (
                    <div key={idx} className="border border-[#eaeaff] bg-white rounded-[16px] overflow-hidden">
                      <button
                        onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                        className="w-full flex items-center justify-between p-5 text-left text-[#0a1628] hover:bg-[#f9faff] transition-colors"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                      >
                        <span>{faq.question}</span>
                        {openIndex === idx ? <ChevronUp size={18} className="text-[#1d1ee3]" /> : <ChevronDown size={18} className="text-[#0a1628]/40" />}
                      </button>
                      <AnimatePresence>
                        {openIndex === idx && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden bg-[#f9faff]"
                          >
                            <div className="p-5 pt-0 text-[15px] text-[#0a1628]/60 leading-[1.6]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                              {faq.answer}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right - Referral Form */}
          <div className="col-span-12 lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-white p-6 md:p-10 lg:p-12 rounded-[24px] md:rounded-[32px] shadow-[0_40px_80px_rgba(0,0,0,0.06)] border border-[#eaeaff]"
            >
              <h3 className="text-[28px] text-[#0a1628] mb-8 font-semibold" style={{ fontFamily: "'Inter Tight', sans-serif" }}>Refer a Case</h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] text-[#0a1628]/60 mb-2 font-medium">Your Name</label>
                    <input type="text" className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[12px] px-4 py-3 outline-none focus:border-[#1d1ee3] transition-colors" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-[14px] text-[#0a1628]/60 mb-2 font-medium">Your Contact</label>
                    <input type="text" className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[12px] px-4 py-3 outline-none focus:border-[#1d1ee3] transition-colors" placeholder="Email or Phone" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[14px] text-[#0a1628]/60 mb-2 font-medium">Referral Name</label>
                    <input type="text" className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[12px] px-4 py-3 outline-none focus:border-[#1d1ee3] transition-colors" placeholder="Full Name" />
                  </div>
                  <div>
                    <label className="block text-[14px] text-[#0a1628]/60 mb-2 font-medium">Referral Phone/Email</label>
                    <input type="text" className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[12px] px-4 py-3 outline-none focus:border-[#1d1ee3] transition-colors" placeholder="Contact Details" />
                  </div>
                </div>

                <div>
                  <label className="block text-[14px] text-[#0a1628]/60 mb-2 font-medium">Brief Note (Optional)</label>
                  <textarea className="w-full bg-[#f9faff] border border-[#eaeaff] rounded-[12px] px-4 py-3 outline-none focus:border-[#1d1ee3] transition-colors min-h-[120px]" placeholder="Tell us a little about their situation..."></textarea>
                </div>

                <div className="flex items-start gap-3 p-4 bg-[#f0f4ff]/50 rounded-[12px] border border-[#1d1ee3]/10">
                  <input type="checkbox" id="consent" className="mt-1 cursor-pointer" />
                  <label htmlFor="consent" className="text-[13px] text-[#0a1628]/70 leading-[1.6] cursor-pointer" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    I have permission to share this person's contact information with ATTAX Solutions for the purpose of a tax resolution consultation.
                  </label>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-[#1d1ee3] text-white rounded-[16px] py-5 flex items-center justify-center gap-3 font-semibold text-[17px] shadow-[0_20px_40px_rgba(29,30,227,0.2)] hover:bg-[#1618c7] transition-colors"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  <Send size={18} />
                  Submit Referral
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
