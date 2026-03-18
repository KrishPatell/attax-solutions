import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Plus } from "lucide-react";

const principles = [
  {
    id: "01",
    title: "Client-Centered Thinking",
    content:
      "We put our clients first—understanding their goals, challenges, and customers to deliver tailored solutions that create real value.",
  },
  {
    id: "02",
    title: "Data-Driven Excellence",
    content:
      "Every strategy is backed by rigorous analysis and insight. We don't guess—we measure, validate, and optimize for maximum impact.",
  },
  {
    id: "03",
    title: "Radical Transparency",
    content:
      "We communicate openly and honestly at every stage. You'll always know where your strategy stands and why we recommend every decision.",
  },
  {
    id: "04",
    title: "Growth Accountability",
    content:
      "We don't just hand over a report. We stay engaged, track outcomes, and hold ourselves accountable to the results we commit to delivering.",
  },
];

export function CorePrinciplesSection() {
  const [open, setOpen] = useState<string>("01");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f7f7f7] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex gap-20 items-start">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-[444px] shrink-0"
          >
            <span
              className="text-[#1d1ee3] text-[16px] block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [Our Expertise]
            </span>
            <h2
              className="text-[52px] leading-[1.2] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              The Core Principles that{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Guide Us
              </span>
            </h2>
            <p
              className="text-[18px] leading-[1.6] text-[rgba(3,3,15,0.7)] mt-6"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              At Optimo, our mission is to empower businesses with strategic solutions that drive growth, efficiency, and transformation.
            </p>
          </motion.div>

          {/* Right: Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1"
          >
            {principles.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
                className="border-t border-[rgba(0,0,0,0.08)] last:border-b"
              >
                <button
                  onClick={() => setOpen(open === p.id ? "" : p.id)}
                  className="w-full flex items-center justify-between py-6 gap-6 text-left group"
                >
                  <span
                    className="text-[28px] text-[#03030f] flex-1 group-hover:text-[#1d1ee3] transition-colors duration-200"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                  >
                    [{p.id}] {p.title}
                  </span>
                  <motion.div
                    animate={{ rotate: open === p.id ? 45 : 0 }}
                    transition={{ duration: 0.25 }}
                    className={`w-[28px] h-[28px] rounded-full flex items-center justify-center shrink-0 transition-colors duration-200 ${open === p.id ? "bg-[#1d1ee3]" : "bg-[#dddeff]"}`}
                  >
                    <Plus size={14} color={open === p.id ? "white" : "#1d1ee3"} />
                  </motion.div>
                </button>
                <AnimatePresence initial={false}>
                  {open === p.id && (
                    <motion.div
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
                        {p.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
