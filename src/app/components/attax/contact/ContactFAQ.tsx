import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

const faqs = [
  {
    q: "How quickly can ATTAX stop IRS collection actions?",
    a: "In many cases, we can get an IRS levy or wage garnishment released within 24–72 hours of engagement. We immediately file for a Collection Due Process hearing to halt aggressive activity.",
  },
  {
    q: "What is an Offer in Compromise and do I qualify?",
    a: "An Offer in Compromise (OIC) allows you to settle tax debt for less than the full amount. Eligibility depends on income, expenses, and asset equity.",
  },
  {
    q: "I haven't filed taxes in several years. Can you help?",
    a: "Absolutely. We'll prepare and file all delinquent returns, bringing you into compliance and then negotiating the best possible resolution.",
  },
  {
    q: "How much does ATTAX charge for services?",
    a: "Our fees are transparent and based on case complexity — never a percentage of your debt. We provide a clear fee estimate before you commit.",
  },
  {
    q: "Will the IRS negotiate directly with me?",
    a: "You have the right to represent yourself, but the IRS is experienced and aggressive. Representation levels the playing field and typically yields better results.",
  },
];

function FAQItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-black/5 last:border-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-8 text-left group"
      >
        <span className="text-[20px] font-medium text-[#03030f] group-hover:text-[#1d1ee3] transition-colors pr-8">
          {faq.q}
        </span>
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${open ? 'bg-[#1d1ee3] text-white' : 'bg-[#f0f4ff] text-[#1d1ee3]'}`}>
          {open ? <Minus size={20} /> : <Plus size={20} />}
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="text-[17px] text-[#03030f]/60 leading-relaxed pb-8 max-w-[600px]">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export function ContactFAQ() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="grid grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="col-span-12 lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-[52px] leading-[1.1] text-[#03030f] mb-12 font-medium tracking-tight">
                Friendly Asked <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>Questions.</span>
              </h2>

              <div className="bg-[#f7f7f4] p-10 rounded-[32px] border border-black/5">
                <h3 className="text-[24px] font-semibold text-[#03030f] mb-4">Still have a question?</h3>
                <p className="text-[#03030f]/60 mb-8 leading-relaxed">
                  Our team is ready to assist you with anything you need.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => window.open("https://calendly.com/attax-solutions", "_blank")}
                  className="bg-[#1d1ee3] text-white rounded-full px-8 py-4 font-bold flex items-center gap-3 shadow-lg"
                >
                  Make A Call
                  <div className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center">
                    <ArrowUpRight size={18} />
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>

          {/* Right Column */}
          <div className="col-span-12 lg:col-span-7">
            <div className="divide-y divide-black/5">
              {faqs.map((faq, idx) => (
                <FAQItem key={idx} faq={faq} index={idx} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
