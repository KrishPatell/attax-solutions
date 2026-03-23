import { motion } from "motion/react";
import { ArrowUpRight, Search, ShieldAlert, FileCheck, Target, MessageSquare, CheckCircle2, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "01",
    title: "Initial Consultation",
    desc: "A comprehensive deep-dive into your tax situation. We identify immediate risks and provide a clear roadmap for your Fresh Start.",
    icon: <Search className="text-[#1d1ee3] size-8" />,
    wide: true,
  },
  {
    step: "02",
    title: "Immediate Protection",
    desc: "We file the necessary paperwork to stop IRS collection actions, including wage garnishments and bank levies, providing instant relief.",
    icon: <ShieldAlert className="text-[#1d1ee3] size-8" />,
    wide: false,
  },
  {
    step: "03",
    title: "Tax Compliance",
    desc: "Our Tax Specialists prepare all missing returns, ensuring you meet the IRS requirements for any resolution program.",
    icon: <FileCheck className="text-[#1d1ee3] size-8" />,
    wide: false,
  },
  {
    step: "04",
    title: "Strategic Planning",
    desc: "Analyzing your financial data to determine the optimal resolution strategy, whether it's an Offer in Compromise or a Penalty Abatement.",
    icon: <Target className="text-[#1d1ee3] size-8" />,
    wide: true,
  },
  {
    step: "05",
    title: "Expert Negotiation",
    desc: "Direct communication with IRS and state authorities. We represent your interests with professional advocacy to secure the best terms.",
    icon: <MessageSquare className="text-[#1d1ee3] size-8" />,
    wide: false,
  },
  {
    step: "06",
    title: "Final Resolution",
    desc: "Formalizing the settlement or payment plan. We ensure all documents are finalized and your case is successfully closed.",
    icon: <CheckCircle2 className="text-[#1d1ee3] size-8" />,
    wide: true,
  },
  {
    step: "07",
    title: "Ongoing Compliance",
    desc: "We set you up with the tools and monitoring needed to stay in good standing with the IRS for years to come.",
    icon: <ShieldCheck className="text-[#1d1ee3] size-8" />,
    wide: false,
  },
];

export function ProcessStepsSection() {
  return (
    <section className="py-[60px] md:py-[100px] bg-white">
      <div className="max-w-[1240px] mx-auto">
        <div className="flex flex-col items-start gap-4 mb-10 md:mb-16">
          <motion.span
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[#1d1ee3] text-[14px] md:text-[16px] font-medium font-['Inter_Tight']"
          >
            Step-by-Step
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#0a1628] font-medium font-['Inter_Tight']"
          >
            Explore Our <span className="italic font-['Playfair_Display']">Process</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`${
                step.wide ? "lg:col-span-2" : "lg:col-span-1"
              } bg-[#f7f9ff] p-5 md:p-8 lg:p-10 rounded-[20px] md:rounded-[24px] border border-[#eaeeff] group hover:border-[#1d1ee3]/30 transition-all duration-500 relative overflow-hidden`}
            >
              <div className="flex flex-col gap-6 md:gap-10 relative z-10">
                <div className="flex justify-between items-start">
                  <div className="w-[50px] h-[50px] md:w-16 md:h-16 bg-[#eaeeff] rounded-[16px] md:rounded-[20px] flex items-center justify-center transition-transform group-hover:scale-110 group-hover:rotate-6 duration-500">
                    {step.icon}
                  </div>
                  <span className="text-[16px] md:text-[20px] font-bold text-[#1d1ee3] font-['Inter_Tight']">
                    {step.step}
                  </span>
                </div>

                <div className="flex flex-col gap-3 md:gap-4">
                  <h3 className="text-[24px] md:text-[26px] lg:text-[32px] font-semibold text-[#0a1628] font-['Inter_Tight'] group-hover:text-[#1d1ee3] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-[#0a1628]/60 text-[14px] md:text-[15px] lg:text-[18px] leading-relaxed font-['Inter_Tight'] max-w-[600px]">
                    {step.desc}
                  </p>
                </div>

                <div className="flex items-center gap-2 text-[#0a1628] text-[14px] md:text-[15px] font-medium font-['Inter_Tight'] cursor-pointer group/link">
                  <span>Read More</span>
                  <div className="w-7 h-7 md:w-8 md:h-8 rounded-full border border-[#0a1628]/10 flex items-center justify-center group-hover/link:bg-[#1d1ee3] group-hover/link:border-[#1d1ee3] transition-all shrink-0">
                    <ArrowUpRight size={13} className="group-hover/link:text-white" />
                  </div>
                </div>
              </div>

              {/* Decorative Step Number in background */}
              <div className="absolute bottom-[-40px] right-[-20px] text-[120px] md:text-[200px] font-bold text-[#1d1ee3]/3 pointer-events-none font-['Inter_Tight'] select-none">
                {step.step}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
