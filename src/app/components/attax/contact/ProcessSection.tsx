import { motion } from "motion/react";
import { CheckCircle2, Clock, Calendar, Search, ArrowRight } from "lucide-react";

export function ProcessSection() {
  const steps = [
    {
      icon: Search,
      title: "Review",
      description: "A Tax Specialist reviews your inquiry within 1 business day to understand the specifics of your situation.",
      color: "#1d1ee3"
    },
    {
      icon: Calendar,
      title: "Schedule",
      description: "We reach out to schedule your free consultation at a time that works for you   via phone or video conference.",
      color: "#F59E0B"
    },
    {
      icon: Clock,
      title: "Evaluation",
      description: "We conduct a full case review and preliminary investigation before recommending any specific path forward.",
      color: "#10b981"
    },
    {
      icon: CheckCircle2,
      title: "Decision",
      description: "You decide whether to move forward with our representation   there is zero obligation and no high-pressure sales.",
      color: "#8b5cf6"
    }
  ];

  return (
    <section className="py-[60px] md:py-[120px] bg-[#f9faff] border-y border-[#eaeaff]">
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center max-w-[800px] mx-auto mb-10 md:mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2
              className="text-[32px] md:text-[40px] lg:text-[48px] text-[#0a1628] mb-6 tracking-tight"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 700 }}
            >
              What Happens After You{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Submit
              </span>
            </h2>
            <div className="flex items-center justify-center gap-3 bg-white px-5 py-3 rounded-[20px] md:rounded-full border border-[#eaeaff] shadow-sm max-w-[340px] mx-auto">
              <Clock size={18} className="text-[#1d1ee3] shrink-0" />
              <p
                className="text-[13px] md:text-[15px] text-[#0a1628]/70 text-left"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                We respond within 1 business day (Mon–Fri, 9 AM–6 PM PT)
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
              <div 
                className="w-14 h-14 rounded-[18px] flex items-center justify-center mb-6 text-white shadow-lg"
                style={{ backgroundColor: step.color }}
              >
                <step.icon size={28} />
              </div>
              
              <div className="absolute top-8 right-8 text-[40px] font-bold text-[#0a1628]/5 select-none">
                0{idx + 1}
              </div>

              <h3 
                className="text-[22px] text-[#0a1628] mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
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
