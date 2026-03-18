import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Search, LayoutDashboard, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    title: "Discover & Diagnose",
    description: "Uncover challenges, opportunities, and root causes with clarity. We immerse ourselves in your business to understand the full picture.",
  },
  {
    icon: LayoutDashboard,
    title: "Strategize & Plan",
    description: "Build a tailored roadmap that aligns with your business vision, goals, and the realities of your market and competitive landscape.",
  },
  {
    icon: Rocket,
    title: "Execute & Measure",
    description: "Implement with precision and discipline, then continuously measure results to refine and drive sustainable, compounding growth.",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <h2
            className="text-[52px] leading-[1.2] text-[#03030f] max-w-[600px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            Our Proven Process to Drive Your{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Success
            </span>
          </h2>
        </motion.div>

        {/* Steps — all aligned in a flat row for clarity; icons and spacing */}
        <div className="grid grid-cols-3 gap-5 items-stretch">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, delay: i * 0.15 }}
                className="bg-[#eaeaff] rounded-[12px] p-8 flex flex-col gap-10 min-h-[304px]"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[60px] h-[60px] bg-white rounded-full flex items-center justify-center border border-[rgba(0,0,0,0.07)] shrink-0">
                    <Icon size={26} color="#1d1ee3" strokeWidth={1.5} />
                  </div>
                  <span
                    className="text-[28px] text-[rgba(3,3,15,0.2)]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                  >
                    0{i + 1}
                  </span>
                </div>
                <div className="flex flex-col gap-3">
                  <h3
                    className="text-[24px] leading-[1.4] text-[#03030f]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
