import { motion } from "motion/react";
import { PhoneCall, Calendar, Search, ClipboardCheck, ArrowUpRight } from "lucide-react";
import { Link } from "react-router";

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description: "Whether by form, phone, or email, your initial reach-out is private and secure.",
  },
  {
    icon: Calendar,
    title: "Initial Callback",
    description: "We reach back within 1 business day to schedule your free consultation at a time that works for you.",
  },
  {
    icon: Search,
    title: "Case Review",
    description: "We review your situation together, at no charge and with no commitment. We provide an honest evaluation of your legal options.",
  },
  {
    icon: ClipboardCheck,
    title: "Clear Plan & Fees",
    description: "If you choose to move forward, we outline the strategy and all fees clearly before any work begins.",
  },
] as const;

type CardVariant = "cream" | "white";

const bentoLayout = [
  { span: "lg:col-span-8", variant: "cream" as const },
  { span: "lg:col-span-4", variant: "white" as const },
  { span: "lg:col-span-4", variant: "cream" as const },
  { span: "lg:col-span-8", variant: "white" as const },
] as const;

const cardShell: Record<CardVariant, string> = {
  cream:
    "bg-[#f7f7f4] border border-[rgba(0,0,0,0.07)] shadow-[0_2px_24px_rgba(10,22,40,0.04)]",
  white:
    "bg-white border border-[#eaeeff] shadow-[0_2px_20px_rgba(10,22,40,0.03)]",
};

export function WhatHappensNext() {
  return (
    <section id="what-happens-next" className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        {/* Top: section intro (full width) */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-[820px]"
        >
          <span
            className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            [What Happens Next]
          </span>
          <h2
            className="text-[32px] md:text-[48px] lg:text-[50px] leading-[1.2] md:leading-[1.1] text-[#0a1628] mb-6 md:mb-8"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
          >
            What Happens{" "}
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Next?
            </span>
          </h2>
          <p
            className="text-[15px] md:text-[18px] text-[#0a1628]/60 leading-[1.7]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            Hesitation often comes from not knowing what to expect. We've made our process as transparent as possible to eliminate that uncertainty.
          </p>
        </motion.div>

        {/* Bento grid — two cream (#f7f7f4), two white; no separate promise rail */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.65, delay: 0.08 }}
          className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 md:gap-5 auto-rows-min"
        >
          {steps.map((step, idx) => {
            const layout = bentoLayout[idx];
            const variant = layout.variant;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.06 + idx * 0.07 }}
                className={`${layout.span} rounded-[20px] p-6 md:p-8 flex flex-col h-full min-h-0 ${cardShell[variant]}`}
              >
                <div className="flex items-start justify-between gap-4 mb-5">
                  <span
                    className="text-[#1d1ee3] text-[12px] font-bold uppercase tracking-widest"
                    style={{ fontFamily: "'Inter Tight', sans-serif" }}
                  >
                    Step 0{idx + 1}
                  </span>
                  <div className="w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 bg-[#eaeeff]">
                    <step.icon size={22} className="text-[#1d1ee3]" />
                  </div>
                </div>
                <h3
                  className="text-[22px] md:text-[24px] mb-3 text-[#0a1628]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  {step.title}
                </h3>
                <p
                  className="text-[15px] leading-[1.65] flex-1 text-[#0a1628]/60"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  {step.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45, delay: 0.2 }}
          className="mt-8 md:mt-10"
        >
          <Link
            to="/our-process"
            className="group inline-flex items-center gap-2 text-[#1d1ee3] font-semibold text-[14px] hover:gap-3 transition-all"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            See our full process
            <ArrowUpRight size={16} />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
