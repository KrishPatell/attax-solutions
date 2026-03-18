import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import imgCtaBg from "figma:asset/c9dc042e672baacb19d8348854111ab787eed7e5.png";

const tabs = [
  {
    id: "collaboration",
    label: "Deep Collaboration",
    content:
      "We work side by side with your team, fostering open communication and shared accountability to ensure strategies translate into real, lasting impact.",
  },
  {
    id: "expertise",
    label: "Expertise",
    content:
      "With decades of combined experience across industries, our consultants bring specialized knowledge and proven methodologies that deliver measurable outcomes.",
  },
  {
    id: "tailored",
    label: "Tailored Solutions",
    content:
      "No two businesses are the same. We craft bespoke strategies that address your unique challenges, opportunities, and vision—never a cookie-cutter approach.",
  },
];

export function ValuesSection() {
  const [active, setActive] = useState("collaboration");
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-[#f7f7f7] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="flex gap-16 items-start">
          {/* Left: CTA card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-[500px] shrink-0 h-[624px] rounded-[12px] overflow-hidden relative flex flex-col justify-end p-9"
          >
            <img
              src={imgCtaBg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col gap-5">
              <h3
                className="text-[32px] leading-[1.2] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                What to Know What's Possible
              </h3>
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 bg-white rounded-[50px] pl-6 pr-2 py-2 w-fit group"
              >
                <span
                  className="text-[#03030f] text-[16px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Get In Touch
                </span>
                <div className="w-11 h-11 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors duration-200">
                  <ArrowUpRight size={18} color="white" />
                </div>
              </motion.button>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 flex flex-col justify-between h-[624px]"
          >
            <div>
              <h2
                className="text-[52px] leading-[1.2] text-[#03030f]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                The Value Behind Our{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  Partnership
                </span>
              </h2>
              <p
                className="text-[18px] leading-[1.6] text-[rgba(3,3,15,0.7)] mt-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                At Optimo, Our partnership goes beyond delivering solutions—it's about building trust, aligning with your goals. We go beyond consulting to become your strategic partner—delivering tailored solutions, expert insight, and measurable results.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {/* Tabs */}
              <div className="flex border-b border-[#ced0da]">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActive(tab.id)}
                    className="flex items-center gap-2 pb-3 pr-8 mr-2 relative"
                  >
                    <motion.div
                      animate={{ opacity: active === tab.id ? 1 : 0 }}
                      className="w-[10px] h-[10px] rounded-full bg-[#1d1ee3] shrink-0"
                    />
                    <span
                      className="text-[18px] transition-opacity duration-200"
                      style={{
                        fontFamily: "'Inter Tight', sans-serif",
                        fontWeight: 500,
                        color: active === tab.id ? "#03030f" : "rgba(3,3,15,0.54)",
                      }}
                    >
                      {tab.label}
                    </span>
                    {active === tab.id && (
                      <motion.div
                        layoutId="tab-underline"
                        className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#1d1ee3]"
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Tab Content */}
              <AnimatePresence mode="wait">
                <motion.p
                  key={active}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  {tabs.find((t) => t.id === active)?.content}
                </motion.p>
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
