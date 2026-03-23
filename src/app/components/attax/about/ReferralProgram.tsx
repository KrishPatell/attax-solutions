import { motion } from "motion/react";
import { UserPlus, DollarSign, Clock, CheckCircle2, Send } from "lucide-react";

export function ReferralProgram() {

  return (
    <section id="referral" className="bg-[#f7f9ff] py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="grid grid-cols-12 gap-8 md:gap-16">
          {/* Left - Program Info */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                [Referral Program]
              </motion.span>
              <h2
                className="text-[32px] md:text-[48px] lg:text-[50px] leading-[1.2] md:leading-[1.1] text-[#0a1628] mb-6 md:mb-8"
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

              <div className="space-y-5 md:space-y-7 mb-12">
                {[
                  { icon: UserPlus, text: "$50 referral fee per enrolled client" },
                  { icon: Clock, text: "30-day clearance period for payments" },
                  { icon: DollarSign, text: "Paid after investigation fee collection" },
                  { icon: CheckCircle2, text: "Simple referral agreement, no complexity" },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-[18px] text-[#0a1628] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    <div className="w-[46px] h-[46px] rounded-full bg-white flex items-center justify-center text-[#1d1ee3] shadow-sm border border-[#1d1ee3]/10">
                      <item.icon size={21} />
                    </div>
                    <span>{item.text}</span>
                  </div>
                ))}
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
