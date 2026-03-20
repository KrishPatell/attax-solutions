import { motion } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
  {
    question: "What industries does ATTAX Solutions serve?",
    answer: "We serve a wide range of industries including healthcare, real estate, construction, and e-commerce. Any individual or business facing significant tax debt or complex IRS issues can benefit from our strategic intervention.",
  },
  {
    question: "How do I know which service is right for my business?",
    answer: "It starts with a comprehensive consultation. During our initial deep-dive, we evaluate your financial status, current tax notices, and future goals to recommend the most effective resolution program   whether that's an Offer in Compromise, Installment Agreement, or Audit Defense.",
  },
  {
    question: "Do you offer customized solutions or standard frameworks?",
    answer: "Every tax situation is unique. While we utilize established IRS 'Fresh Start' frameworks, our implementation strategy is 100% customized to your specific financial data and goals.",
  },
  {
    question: "How do you measure success with clients?",
    answer: "Success is measured by the total reduction in tax liability, the removal of immediate threats (levies/liens), and the establishment of a sustainable, long-term compliance plan that protects your future assets.",
  },
  {
    question: "How can I get started with ATTAX Solutions?",
    answer: "Simply book a free consultation via our website or call +1 (855) 829-2829. You'll speak directly with a Tax Specialist who can provide an immediate assessment of your case.",
  },
];

export function ProcessFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-[60px] md:py-[120px] bg-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-16 lg:gap-20">
          <div className="flex flex-col gap-8 md:gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-[32px] md:text-[44px] lg:text-[56px] leading-[1.1] text-[#0a1628] font-medium font-['Inter_Tight']">
                Friendly Asked <br />
                <span className="italic font-['Playfair_Display']">Questions.</span>
              </h2>
            </div>

            <div className="bg-[#f7f9ff] p-6 md:p-10 rounded-[24px] border border-[#eaeeff] flex flex-col gap-6 max-w-full md:max-w-[400px]">
              <h3 className="text-[22px] md:text-[24px] font-semibold text-[#0a1628] font-['Inter_Tight']">
                Still have a question?
              </h3>
              <p className="text-[#0a1628]/60 text-[14px] md:text-[16px] font-['Inter_Tight']">
                Our team is ready to assist you with any questions you may have.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#1d1ee3] text-white rounded-full px-6 md:px-8 py-3 md:py-4 flex items-center justify-between group self-start w-full md:w-auto max-w-[260px]"
              >
                <span className="font-medium font-['Inter_Tight'] text-[14px] md:text-[16px]">Make a Call</span>
                <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center rotate-45 group-hover:rotate-90 transition-transform ml-4">
                  <Plus size={14} className="text-white" />
                </div>
              </motion.button>
            </div>
          </div>

          <div className="flex flex-col border-t border-[#eaeeff]">
            {faqs.map((faq, i) => (
              <div key={i} className="border-b border-[#eaeeff]">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="w-full py-5 md:py-8 flex items-center justify-between text-left gap-4 group"
                >
                  <span className={`text-[15px] md:text-[18px] font-medium font-['Inter_Tight'] transition-colors ${openIndex === i ? 'text-[#1d1ee3]' : 'text-[#0a1628] group-hover:text-[#1d1ee3]'}`}>
                    {faq.question}
                  </span>
                  <div className={`w-8 h-8 shrink-0 rounded-full flex items-center justify-center transition-all ${openIndex === i ? 'bg-[#1d1ee3] text-white rotate-180' : 'bg-[#f0f4ff] text-[#1d1ee3]'}`}>
                    {openIndex === i ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openIndex === i ? "auto" : 0, opacity: openIndex === i ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 md:pb-8 text-[#0a1628]/60 text-[14px] md:text-[16px] leading-relaxed font-['Inter_Tight']">
                    {faq.answer}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
