import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "What types of businesses does Optimo work with?",
    a: "We work with businesses of all sizes across various industries including technology, finance, healthcare, manufacturing, retail, and more. Our approach is tailored to meet the unique needs of each client.",
  },
  {
    q: "How long does a typical consulting engagement last?",
    a: "Engagement length varies depending on the scope and complexity of the project. Initial diagnostic engagements can last 2-4 weeks, while comprehensive transformation projects may span 6-18 months. We offer both short-term advisory and long-term partnership models.",
  },
  {
    q: "What sets Optimo apart from other consulting firms?",
    a: "We combine deep industry expertise with a hands-on, collaborative approach. Rather than delivering reports and walking away, we stay engaged through implementation, ensuring our strategies translate into measurable results and lasting change.",
  },
  {
    q: "How do you measure the success of your consulting work?",
    a: "We establish clear, measurable KPIs at the start of every engagement. These may include revenue growth, cost reduction, operational efficiency improvements, market share gains, or other metrics aligned with your specific goals.",
  },
  {
    q: "Can we start with a smaller project before committing to a full engagement?",
    a: "Absolutely. We offer diagnostic sprints and pilot projects that allow you to experience our methodology and see early results before committing to a longer engagement. Book a free call to discuss what makes sense for your situation.",
  },
  {
    q: "What does the 'Book A Free Call' offer include?",
    a: "Our free discovery call is a 30-45 minute conversation where we learn about your business challenges and goals. We'll provide initial insights and outline how we can help—completely free and with no obligation.",
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
      className="border-b border-[rgba(0,0,0,0.08)] last:border-b-0"
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 gap-6 text-left group"
      >
        <span
          className="text-[18px] leading-[1.4] text-[#03030f] group-hover:text-[#1d1ee3] transition-colors duration-200"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
        >
          {faq.q}
        </span>
        <motion.div
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ duration: 0.25 }}
          className="w-[36px] h-[36px] rounded-full bg-[#eaeaff] flex items-center justify-center shrink-0 group-hover:bg-[#1d1ee3] transition-colors duration-200"
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
              className="text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)] pb-6 pr-12"
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

export function FAQSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex gap-20">
          {/* Left heading */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-[360px] shrink-0"
          >
            <h2
              className="text-[52px] leading-[1.2] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Frequently Asked{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Questions
              </span>
            </h2>
            <p
              className="text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)] mt-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Can't find what you're looking for? Book a free call and our team will be happy to help.
            </p>
            <motion.button
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="mt-6 flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group"
            >
              <span className="text-white text-[16px]" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                Book Free Call
              </span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <svg width="18" height="18" fill="none" viewBox="0 0 18 18">
                  <path d="M4 14L14 4M14 4H7M14 4V11" stroke="#1d1ee3" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
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
