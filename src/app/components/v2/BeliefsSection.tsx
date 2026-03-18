import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Target, TrendingUp, Cpu } from "lucide-react";
import imgTeam from "figma:asset/c5d95e24f92efaec2adf928c440bb7efc96cf21d.png";

const features = [
  {
    icon: Target,
    title: "Strategic Planning",
    desc: "Define clear goals and chart the path.",
  },
  {
    icon: TrendingUp,
    title: "Operational Growth",
    desc: "Streamline processes to scale efficiently.",
  },
  {
    icon: Cpu,
    title: "Digital Evolution",
    desc: "Leverage technology to transform.",
  },
];

export function BeliefsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#f7f7f7] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-14"
        >
          <div className="flex flex-col gap-3 max-w-[600px]">
            <span
              className="text-[#1d1ee3] text-[16px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [More About Us]
            </span>
            <h2
              className="text-[52px] leading-[1.2] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              We Believe In Results With Smart{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Consulting
              </span>
              .
            </h2>
          </div>
          <motion.button
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group shrink-0"
          >
            <span
              className="text-white text-[16px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              See All Service
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <ArrowUpRight size={20} color="#1d1ee3" />
            </div>
          </motion.button>
        </motion.div>

        {/* Content */}
        <div className="flex gap-16 items-start">
          {/* Left: text + feature cards */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1 flex flex-col gap-12"
          >
            <div>
              <h3
                className="text-[28px] leading-[1.3] text-[#03030f]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                At Optimo, we believe that real business growth is rooted in strategy, insight, and execution. As a results-driven consulting firm for you.
              </h3>
              <p
                className="text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)] mt-4 max-w-[500px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Our approach blends deep industry insight, extensive experience, and strategic thinking to solve complex challenges, innovation, and deliver measurable, lasting business value.
              </p>
            </div>

            {/* Feature Cards */}
            <div className="grid grid-cols-3 gap-4">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.55, delay: 0.3 + i * 0.1 }}
                    className="bg-white rounded-[12px] p-5 flex flex-col gap-8"
                  >
                    <div className="w-[60px] h-[60px] bg-[#eaeaff] rounded-full flex items-center justify-center">
                      <Icon size={26} color="#1d1ee3" strokeWidth={1.5} />
                    </div>
                    <div className="flex flex-col gap-2">
                      <p
                        className="text-[20px] text-[#03030f]"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                      >
                        {f.title}
                      </p>
                      <p
                        className="text-[16px] leading-[1.5] text-[rgba(3,3,15,0.7)]"
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                      >
                        {f.desc}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="w-[399px] shrink-0 rounded-[12px] overflow-hidden self-stretch"
          >
            <img src={imgTeam} alt="Team" className="w-full h-full object-cover" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
