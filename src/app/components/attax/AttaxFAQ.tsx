import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "I owe the IRS and I'm honestly not sure what to do. What should I do first?",
    a: "The first step is not to panic. Many people reach out to us after months or even years of worrying about their situation. The most important thing is understanding what the IRS believes you owe, why it exists, and what options may be available. A proper review of your situation allows us to see the full picture before any decisions are made.",
  },
  {
    q: "Is it too late to fix my tax situation?",
    a: "In most cases, it is not. Tax problems can grow over time through penalties and interest, but the IRS still provides structured programs designed to help taxpayers resolve their balances. The key is understanding which options apply to your situation and addressing the matter before it becomes more serious.",
  },
  {
    q: "Will the IRS take my house or empty my bank account?",
    a: "Those types of enforcement actions are typically the last stage of a long process. The IRS usually sends multiple notices and warnings before taking aggressive action. Part of our role is to step in before matters reach that stage and work toward a structured resolution.",
  },
  {
    q: "Do I have to speak to the IRS myself if I hire representation?",
    a: "In most cases, once proper authorization forms are filed, your representative can communicate with the IRS on your behalf. This allows the process to move forward without you having to handle difficult conversations directly.",
  },
  {
    q: "How do I know what option I actually qualify for?",
    a: "Many taxpayers hear about programs like settling for less, but eligibility depends on several factors including income, assets, filing history, and financial ability. A proper investigation is necessary before determining what resolution options may realistically apply.",
  },
  {
    q: "I've ignored IRS letters for a while. Is that a problem?",
    a: "You are not alone. Many people delay dealing with tax notices because the situation feels overwhelming. The important thing is addressing it now. Once the situation is reviewed, the next steps can become much clearer.",
  },
  {
    q: "Can the IRS really settle tax debt for less than what is owed?",
    a: "In certain situations the IRS may accept a settlement if it determines the taxpayer cannot reasonably pay the full balance. However, the process involves strict financial analysis and documentation. Every case is different, and eligibility must be evaluated carefully.",
  },
  {
    q: "What if I haven't filed taxes in several years?",
    a: "Unfiled returns are one of the most common issues taxpayers face. Before most resolution options can be considered, filing compliance usually needs to be addressed. Once that is handled, the situation can be evaluated more accurately.",
  },
  {
    q: "How long does resolving a tax case usually take?",
    a: "Some matters can move quickly, while others require several months depending on the complexity of the situation and the IRS processes involved. Each case follows its own timeline, and our role is to move it forward in an organized and responsible way.",
  },
  {
    q: "Is my information safe and confidential?",
    a: "Yes. Tax matters involve sensitive financial information, and confidentiality is treated with the highest level of care. All discussions and documentation are handled professionally and privately.",
  },
  {
    q: "What happens after I contact ATTAX Solutions?",
    a: "The first step is understanding your situation. During the initial conversation we focus on learning about the issue, reviewing what information is available, and determining what the next investigative steps should be. We will be there for every step, notifying you along the way.",
  },
  {
    q: "What if I simply cannot afford to pay what the IRS says I owe?",
    a: "Financial hardship is something the IRS recognizes. In certain circumstances taxpayers may qualify for structured payment plans, temporary relief from collection activity, or other resolution options depending on their financial situation.",
  },
  {
    q: "Why do people hire professional representation instead of doing this themselves?",
    a: "Tax matters often involve detailed rules, financial analysis, and negotiation with government agencies. Many taxpayers prefer to have experienced representation guiding the process so they understand their options and avoid mistakes that could complicate the case.",
  },
  {
    q: "I'm embarrassed about my situation. Do you see cases like mine often?",
    a: "More often than you might think. Tax issues affect people from every profession and income level. Our focus is not on how the situation started, but on helping resolve it responsibly.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: index * 0.06 }}
      className="border-b border-[rgba(10,22,40,0.08)] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 md:py-6 gap-4 md:gap-6 text-left group"
      >
        <span
          className="text-[15px] md:text-[18px] leading-[1.4] text-[#0a1628] group-hover:text-[#1d1ee3] transition-colors duration-200"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-[36px] h-[36px] rounded-full bg-[#eaeaff] flex items-center justify-center shrink-0 group-hover:bg-[#1d1ee3] transition-colors duration-200 ml-3"
        >
          <Plus size={18} className="text-[#1d1ee3] group-hover:text-white transition-colors" />
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="answer"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p
              className="text-[14px] md:text-[16px] leading-[1.6] text-[rgba(10,22,40,0.65)] pb-6 pr-0 md:pr-12"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function AttaxFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-[#f7f9ff] py-[60px] md:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-20">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[360px] shrink-0"
          >
            <span
              className="text-[#1d1ee3] text-[16px] block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [FAQ]
            </span>
            <h2
              className="text-[32px] lg:text-[52px] leading-[1.2] text-[#0a1628]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Common{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Questions
              </span>
            </h2>
            <p
              className="text-[15px] lg:text-[16px] leading-[1.6] text-[rgba(10,22,40,0.6)] mt-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Don't see your question here? Book a free consultation and we'll walk you through your options   no pressure, no obligation.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
              className="mt-6 self-start flex items-center gap-5 bg-[#0a1628] rounded-[50px] pl-5 pr-1.5 py-1.5 group w-fit"
            >
              <span
                className="text-white text-[15px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Book Free Call
              </span>
              <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path
                    d="M4 14L14 4M14 4H7M14 4V11"
                    stroke="white"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </motion.button>
          </motion.div>

          {/* Right FAQ items */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            {faqs.map((faq, i) => (
              <FAQItem key={faq.q} faq={faq} index={i} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
