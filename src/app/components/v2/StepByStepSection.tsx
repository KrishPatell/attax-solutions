import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, Lightbulb, Rocket, BarChart2 } from "lucide-react";

const steps = [
  {
    num: "01",
    icon: Search,
    title: "Discover & Diagnose",
    desc: "We begin by deeply understanding your organization's unique challenges, opportunities, and goals.",
  },
  {
    num: "02",
    icon: Lightbulb,
    title: "Strategize & Plan",
    desc: "With insights in hand, we co-create a tailored strategy that aligns with your business objectives.",
  },
  {
    num: "03",
    icon: Rocket,
    title: "Execute & Launch",
    desc: "We support end-to-end implementation, working alongside your teams to drive real outcomes.",
  },
  {
    num: "04",
    icon: BarChart2,
    title: "Measure & Optimize",
    desc: "We track KPIs, measure impact, and continuously refine our approach to maximize your ROI.",
  },
];

export function StepByStepSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <div className="flex gap-20 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span
              className="text-[#1d1ee3] text-[16px] block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [Step by Step]
            </span>
            <h2
              className="text-[52px] leading-[1.2] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Step-by-Step to{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Business Growth
              </span>
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex-1 text-[18px] leading-[1.5] text-[rgba(3,3,15,0.7)]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            How We Turn Strategy Into Measurable Success
          </motion.p>
        </div>

        {/* Steps with connecting line */}
        <div className="relative">
          {/* Connector */}
          <div className="absolute top-6 left-6 right-6 h-[2px] bg-[#eaeaff] hidden lg:block" />
          <div
            className="absolute top-6 left-6 h-[2px] bg-[#1d1ee3] hidden lg:block transition-all duration-1000"
            style={{ width: inView ? "75%" : "0%" }}
          />

          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, y: 40 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex flex-col gap-8 pt-0"
                >
                  {/* Step number bubble */}
                  <div className="w-12 h-12 rounded-full bg-[#eaeaff] flex items-center justify-center z-10 relative">
                    <span
                      className="text-[#1d1ee3] text-[18px]"
                      style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Card */}
                  <div className="bg-[#f7f7f7] rounded-[12px] p-6 flex flex-col gap-8 flex-1">
                    <div className="w-[60px] h-[60px] bg-[#eaeaff] rounded-full flex items-center justify-center">
                      <Icon size={26} color="#1d1ee3" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <h3
                        className="text-[24px] leading-[1.4] text-[#03030f]"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                      >
                        {step.title}
                      </h3>
                      <p
                        className="text-[16px] leading-[1.5] text-[rgba(3,3,15,0.7)]"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                      >
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
