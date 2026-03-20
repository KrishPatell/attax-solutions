import { motion } from "motion/react";
import { AlertCircle, CheckCircle2 } from "lucide-react";

export function ClarityWhySection() {
  return (
    <section className="py-[60px] md:py-[120px] bg-slate-50 relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 lg:gap-24 items-center">
          {/* Left Column: Problem */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-4 text-[#F59E0B]">
              <AlertCircle size={20} />
              <span
                className="text-[14px] uppercase tracking-wider"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
              >
                The Problem
              </span>
            </div>
            <h2
              className="text-[32px] md:text-[36px] lg:text-[44px] leading-[1.1] text-[#060e1e] mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Most people find out about IRS problems when it's{" "}
              <span className="italic text-[#F59E0B]" style={{ fontFamily: "'Playfair Display', serif" }}>
                too late.
              </span>
            </h2>
            <p
              className="text-[14px] md:text-[16px] lg:text-[17px] leading-[1.6] text-slate-600 mb-0"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Whether it's a scary letter or an unexpected wage garnishment, the IRS doesn't wait for you to be ready. By the time you notice, the damage is already done.
            </p>
          </motion.div>

          {/* Center Divider: The Transformation */}
          <div className="hidden lg:flex col-span-2 flex-col items-center justify-center gap-4 py-12">
            <div className="w-[1px] flex-1 bg-slate-200" />
            <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400">
              VS
            </div>
            <div className="w-[1px] flex-1 bg-slate-200" />
          </div>

          {/* Right Column: Solution */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 lg:col-span-5"
          >
            <div className="flex items-center gap-2 mb-4 text-[#1d1ee3]">
              <CheckCircle2 size={20} />
              <span
                className="text-[14px] uppercase tracking-wider"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
              >
                The Solution
              </span>
            </div>
            <h2
              className="text-[32px] md:text-[36px] lg:text-[44px] leading-[1.1] text-[#060e1e] mb-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              ATTAX Clarity monitors your IRS account{" "}
              <span className="italic text-[#1d1ee3]" style={{ fontFamily: "'Playfair Display', serif" }}>
                proactively.
              </span>
            </h2>
            <p
              className="text-[14px] md:text-[16px] lg:text-[17px] leading-[1.6] text-slate-600 mb-0"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              We alert you before a notice becomes a crisis. Our system watches for liens, levies, and penalty accruals in real-time, giving you the power of "calm, not panic."
            </p>
          </motion.div>
        </div>
      </div>
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#1d1ee3]/5 blur-[120px] rounded-full pointer-events-none" />
    </section>
  );
}
