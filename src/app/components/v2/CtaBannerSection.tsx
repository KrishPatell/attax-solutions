import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import imgCta from "figma:asset/949ef842ec4eb160e58016d024e6b27bc7b91bba.png";

const benefits = [
  "Free 30-minute strategy consultation",
  "No long-term commitment required",
  "Custom roadmap tailored to your goals",
  "Measurable results from day one",
];

export function CtaBannerSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#eaeaff] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        <div className="bg-[#1d1ee3] rounded-[20px] overflow-hidden flex flex-col lg:flex-row">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:w-[460px] shrink-0 h-[400px] lg:h-auto"
          >
            <img
              src={imgCta}
              alt="CTA"
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-1 p-12 flex flex-col justify-center gap-8"
          >
            <div>
              <span
                className="text-white/60 text-[16px] block mb-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                [Start Today]
              </span>
              <h2
                className="text-[40px] leading-[1.2] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Work with Experts to Grow Faster &{" "}
                <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                  Build a Habit
                </span>
              </h2>
              <p
                className="text-white/70 text-[16px] leading-[1.6] mt-4"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Join thousands of businesses who have transformed their trajectory with Optimo's expert guidance.
              </p>
            </div>

            <ul className="flex flex-col gap-3">
              {benefits.map((b) => (
                <li key={b} className="flex items-center gap-3">
                  <CheckCircle2 size={18} color="white" className="opacity-80 shrink-0" />
                  <span
                    className="text-white/90 text-[15px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {b}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4 flex-wrap">
              <motion.button
                whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(0,0,0,0.3)" }}
                whileTap={{ scale: 0.97 }}
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="flex items-center gap-3 bg-white rounded-[50px] pl-6 pr-2 py-2 group"
              >
                <span
                  className="text-[#1d1ee3] text-[16px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Book A Free Call
                </span>
                <div className="w-12 h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors">
                  <ArrowUpRight size={20} color="white" />
                </div>
              </motion.button>

              <motion.button
                whileHover={{ x: 4 }}
                className="text-white/70 hover:text-white text-[15px] flex items-center gap-2 transition-colors"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Learn more <ArrowUpRight size={15} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
