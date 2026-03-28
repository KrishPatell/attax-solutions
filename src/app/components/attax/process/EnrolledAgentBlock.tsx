import { motion } from "motion/react";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";
import { SECTION_H2_CLASS_LIGHT, SECTION_H2_STYLE } from "../../../lib/heroH1";

export function EnrolledAgentBlock() {
  return (
    <section className="py-[60px] md:py-[120px] bg-white">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="flex flex-col lg:flex-row items-start gap-10 lg:gap-20">

          {/* Left: heading */}
          <div className="lg:w-[380px] shrink-0">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Credentials]
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={SECTION_H2_CLASS_LIGHT}
              style={SECTION_H2_STYLE}
            >
              Why Our Credentials Matter
            </motion.h2>
          </div>

          {/* Right: content */}
          <div className="flex-1 flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start gap-5 p-6 bg-[#f7f9ff] rounded-[20px]"
              style={{ border: "1px solid #eaeeff" }}
            >
              <div className="w-12 h-12 rounded-full bg-[#eaeeff] flex items-center justify-center shrink-0">
                <ShieldCheck size={22} className="text-[#1d1ee3]" />
              </div>
              <div>
                <h3
                  className="text-[17px] font-semibold text-[#0a1628] mb-2"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Enrolled Agent (EA) — The Highest IRS Credential
                </h3>
                <p
                  className="text-[15px] text-[#0a1628]/60 leading-[1.65]"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  An Enrolled Agent is a federally licensed tax practitioner granted the highest credential
                  the IRS awards to non-attorneys. EAs are authorized to represent clients at{" "}
                  <strong className="text-[#0a1628]/80 font-semibold">all IRS levels</strong> — audits,
                  collections, appeals, and federal court submissions. Unlike CPAs or tax preparers, an EA's
                  practice is not limited by state licensing.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { label: "Federally Licensed", desc: "Credentialed directly by the U.S. Treasury Department." },
                { label: "Unlimited Practice Rights", desc: "Can represent any taxpayer at any IRS level, in any state." },
                { label: "IRS-Focused Specialists", desc: "Tax resolution is all we do — not accounting, not bookkeeping." },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="p-5 bg-white rounded-[16px]"
                  style={{ border: "1px solid rgba(10,22,40,0.07)" }}
                >
                  <p
                    className="text-[15px] font-semibold text-[#0a1628] mb-1.5"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {item.label}
                  </p>
                  <p
                    className="text-[13px] text-[#0a1628]/50 leading-[1.55]"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              <Link
                to="/about"
                className="inline-flex items-center gap-2 text-[#1d1ee3] text-[14px] font-semibold hover:gap-3 transition-all"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                Meet the full team
                <ArrowUpRight size={16} />
              </Link>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
