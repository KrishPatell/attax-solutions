import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "How quickly can ATTAX stop IRS collection actions like levies or garnishments?",
    a: "In many cases, we can get an IRS levy or wage garnishment released within 24–72 hours of engaging with us. We immediately file for a Collection Due Process hearing or contact the IRS Automated Collection System on your behalf to halt aggressive collection activity while we negotiate a resolution.",
  },
  {
    q: "What is an Offer in Compromise and do I qualify?",
    a: "An Offer in Compromise (OIC) is an IRS program that allows qualified taxpayers to settle their tax debt for less than the full amount owed. Eligibility depends on your income, expenses, asset equity, and ability to pay. ATTAX conducts a thorough financial analysis before pursuing an OIC to ensure it's the right strategy — not every firm will tell you when you don't qualify, but we will.",
  },
  {
    q: "I haven't filed taxes in several years. Can ATTAX still help me?",
    a: "Absolutely. Unfiled returns are one of the most common situations we handle. We'll prepare and file all delinquent returns, bring you into compliance with the IRS, and then negotiate the best possible resolution for any resulting liability — often preventing the IRS from filing Substitute for Returns (SFRs) that inflate what you owe.",
  },
  {
    q: "What's the difference between an installment agreement and an Offer in Compromise?",
    a: "An installment agreement lets you pay your full tax debt over time in monthly payments, while an Offer in Compromise settles the debt for a reduced lump sum (or short-term payments). We evaluate both options — along with Currently Not Collectible status and penalty abatement — to determine which path saves you the most money.",
  },
  {
    q: "How much does ATTAX charge for tax resolution services?",
    a: "Our fees are transparent and based on the complexity of your case — never a percentage of your debt. We offer a free consultation to review your situation and provide a clear fee estimate before you commit to anything. We believe you shouldn't have to pay a fortune to stop paying a fortune to the IRS.",
  },
  {
    q: "Will the IRS negotiate directly with me, or do I need representation?",
    a: "You have the right to represent yourself, but the IRS is an experienced negotiating party with tools and tactics most taxpayers aren't prepared for. Having a tax professional from ATTAX represent you levels the playing field, protects your rights, and typically results in a significantly better outcome.",
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
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
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
              Don't see your question here? Book a free consultation and we'll walk you through your options — no pressure, no obligation.
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
