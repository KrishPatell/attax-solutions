import { motion } from "motion/react";
import { CheckCircle2, Clock, Calendar, Search, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Review",
      description: "A Tax Specialist reviews your inquiry within 1 business hour to understand the specifics of your situation.",
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "We reach out to schedule your free consultation at a time that works for you, via phone or video conference.",
    },
    {
      icon: Clock,
      title: "Evaluation",
      description: "We conduct a full case review and preliminary investigation before recommending any specific path forward.",
    },
    {
      icon: CheckCircle2,
      title: "Decision",
      description: "You decide whether to move forward with our representation. You decide freely, with a full understanding of your options.",
    }
  ];

  return (
    <section className="py-[60px] md:py-[120px] bg-[#f9faff] border-y border-[#eaeaff]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="text-center max-w-[800px] mx-auto mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [What Happens After You Submit]
            </span>
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] text-[#0a1628] mb-6 tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              What Happens After You{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Submit
              </span>
            </h2>
            <div className="inline-flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-[#eaeaff] shadow-sm">
              <Clock size={16} className="text-[#1d1ee3] shrink-0" />
              <p
                className="text-[13px] md:text-[14px] text-[#0a1628]/70"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                We respond within 1 business hour — Mon–Fri, 9 AM–6 PM PT
              </p>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative p-5 md:p-8 rounded-[24px] md:rounded-[32px] bg-white border border-[#eaeaff] group hover:shadow-xl transition-all duration-300"
            >
              {/* Depth icon */}
              <div className="relative w-[52px] h-[52px] mb-6">
                <div className="absolute inset-0 rounded-[14px] blur-[6px] translate-y-[3px] bg-[#1d1ee3]/20" />
                <div className="relative w-full h-full rounded-[14px] flex items-center justify-center text-white bg-[#1d1ee3] shadow-[0_4px_12px_rgba(29,30,227,0.3)]">
                  <step.icon size={22} />
                </div>
              </div>

              <div className="absolute top-8 right-8 text-[40px] font-bold text-[#0a1628]/5 select-none">
                0{idx + 1}
              </div>

              <h3
                className="text-[22px] text-[#0a1628] mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                {step.title}
              </h3>
              <p
                className="text-[14px] md:text-[15px] text-[#0a1628]/60 leading-relaxed"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {step.description}
              </p>

              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 translate-x-1/2 -translate-y-1/2 z-10">
                  <ArrowRight size={24} className="text-[#0a1628]/10" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
