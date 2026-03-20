import { motion } from "motion/react";
import { PhoneCall, Calendar, Search, ClipboardCheck, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Contact Us",
    description: "Whether by form, phone, or email, your initial reach-out is private and secure."
  },
  {
    icon: Calendar,
    title: "Initial Callback",
    description: "We reach back within 1 business day to schedule your free consultation at a time that works for you."
  },
  {
    icon: Search,
    title: "Case Review",
    description: "We review your situation together   no charge, no commitment. We provide an honest evaluation of your legal options."
  },
  {
    icon: ClipboardCheck,
    title: "Clear Plan & Fees",
    description: "If you choose to move forward, we outline the strategy and all fees clearly before any work begins."
  }
];

export function WhatHappensNext() {
  return (
    <section id="what-happens-next" className="bg-white py-[60px] md:py-[120px]">
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="md:sticky md:top-40"
            >
              <h2
                className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] text-[#0a1628] mb-6 md:mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                What Happens{" "}
                <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Next?
                </span>
              </h2>
              <p
                className="text-[15px] md:text-[18px] text-[#0a1628]/60 leading-[1.7] mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Hesitation often comes from not knowing what to expect. We've made our process as transparent as possible to eliminate that uncertainty.
              </p>
              
              <div className="bg-[#1d1ee3]/5 rounded-[24px] p-8 border border-[#1d1ee3]/10">
                <p 
                  className="text-[#1d1ee3] text-[15px] mb-2 uppercase tracking-widest font-bold" 
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  Our Promise
                </p>
                <p 
                  className="text-[#0a1628] text-[18px] font-medium" 
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  "No surprises. No high-pressure sales. Just direct legal representation."
                </p>
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-7">
            <div className="space-y-6">
              {steps.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex gap-8 group"
                >
                  {/* Step Number Circle */}
                  <div className="relative shrink-0 pt-2">
                    <div className="w-14 h-14 rounded-full bg-white border-2 border-[#1d1ee3]/10 flex items-center justify-center text-[#1d1ee3] group-hover:border-[#1d1ee3] transition-colors duration-300 relative z-10 shadow-sm group-hover:shadow-[0_8px_24px_rgba(29,30,227,0.15)]">
                      <step.icon size={22} />
                    </div>
                    {idx !== steps.length - 1 && (
                      <div className="absolute top-16 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#1d1ee3]/10" />
                    )}
                  </div>

                  {/* Step Content */}
                  <div className="pb-12 group-last:pb-0 pt-2">
                    <span 
                      className="text-[#1d1ee3] text-[13px] font-bold uppercase tracking-widest mb-2 block" 
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      Step 0{idx + 1}
                    </span>
                    <h3 
                      className="text-[24px] text-[#0a1628] mb-4" 
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-[16px] text-[#0a1628]/60 leading-[1.7] max-w-[480px]" 
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                    >
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
