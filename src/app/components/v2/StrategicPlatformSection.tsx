import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { MapPin } from "lucide-react";
import imgPlatform from "figma:asset/96a118d2c4996e175c855f18b6f32df4d1f5c5ee.png";

const features = ["Strategic Planning", "Operational Excellence", "Market Expansion", "Risk Management"];

export function StrategicPlatformSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <span
            className="text-[#1d1ee3] text-[16px] block mb-5"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            [Our Process]
          </span>
          <h2
            className="text-[52px] leading-[1.2] text-[#03030f]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            Optimo Your Strategic Growth{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Partner
            </span>
          </h2>
        </motion.div>

        {/* Large hero image with pin card overlay */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative rounded-[12px] overflow-hidden h-[650px]"
        >
          <img
            src={imgPlatform}
            alt="Strategic Growth Platform"
            className="w-full h-full object-cover"
          />
          {/* Gradient overlay */}
          <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(3,3,15,0.7) 0%, rgba(3,3,15,0.1) 50%, transparent 100%)" }} />

          {/* Pin card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute bottom-10 left-10 bg-white rounded-[12px] p-5 w-[220px]"
          >
            <div className="w-6 h-6 bg-[#1d1ee3] rounded-full flex items-center justify-center mb-4">
              <MapPin size={14} color="white" />
            </div>
            <ul className="flex flex-col gap-2">
              {features.map((feat) => (
                <li
                  key={feat}
                  className="text-[16px] text-[#03030f]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  {feat}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Floating stat card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="absolute bottom-10 right-10 bg-[#1d1ee3] rounded-[12px] p-6 text-white"
          >
            <div
              className="text-[48px] tracking-[-2px]"
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
            >
              150+
            </div>
            <div
              className="text-[14px] opacity-80 mt-1"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Projects Delivered
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
