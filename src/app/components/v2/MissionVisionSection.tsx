import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import imgMission from "figma:asset/e7fd341ed65c545b0fae5c0179a3ff8787193b3c.png";
import imgVision from "figma:asset/90e3ed70d39398911573f698fd529c5036421152.png";

const missionPoints = [
  "Deliver results-driven strategies aligned with your goals",
  "Empower organizations to grow and lead in a changing market",
  "Foster partnerships built on trust and measurable impact",
];

const visionPoints = [
  "Innovate continuously to stay ahead in a changing market",
  "Empower businesses to lead with confidence and clarity",
  "Build sustainable growth through forward-thinking strategies",
];

function ContentBlock({
  label,
  title,
  italicWord,
  desc,
  points,
  delay,
}: {
  label: string;
  title: string;
  italicWord: string;
  desc: string;
  points: string[];
  delay: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="flex flex-col gap-10">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay }}
      >
        <span
          className="text-[#1d1ee3] text-[16px] block mb-3"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
        >
          {label}
        </span>
        <h2
          className="text-[52px] leading-[1.2] text-[#03030f]"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
        >
          {title}{" "}
          <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
            {italicWord}
          </span>
        </h2>
        <p
          className="text-[16px] leading-[1.6] text-[rgba(3,3,15,0.7)] mt-4"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
        >
          {desc}
        </p>
      </motion.div>

      <motion.ul
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: delay + 0.15 }}
        className="flex flex-col gap-3"
      >
        {points.map((pt) => (
          <li key={pt} className="flex items-start gap-3">
            <CheckCircle2 size={18} color="#1d1ee3" className="shrink-0 mt-0.5" />
            <span
              className="text-[16px] text-[#03030f]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              {pt}
            </span>
          </li>
        ))}
      </motion.ul>

      <motion.button
        initial={{ opacity: 0, y: 10 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: delay + 0.3 }}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 w-fit group"
      >
        <span
          className="text-white text-[16px]"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
        >
          Get Started
        </span>
        <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors">
          <ArrowUpRight size={18} color="#1d1ee3" />
        </div>
      </motion.button>
    </div>
  );
}

export function MissionVisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8 flex flex-col gap-[120px]">
        {/* Mission: text left, image right */}
        <div className="flex gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="flex-1"
          >
            <ContentBlock
              label="[Our Mission]"
              title="Built to Drive Real Business"
              italicWord="Growth"
              desc="At Optimo, our mission is to empower businesses with strategic solutions that drive growth, efficiency, and transformation."
              points={missionPoints}
              delay={0}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-[516px] h-[620px] shrink-0 rounded-[12px] overflow-hidden"
          >
            <img src={imgMission} alt="Mission" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Vision: image left, text right */}
        <div className="flex gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7 }}
            className="w-[516px] h-[620px] shrink-0 rounded-[12px] overflow-hidden"
          >
            <img src={imgVision} alt="Vision" className="w-full h-full object-cover" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="flex-1"
          >
            <ContentBlock
              label="[Our Vision]"
              title="Shaping The Future of Business"
              italicWord="Success"
              desc="At Optimo, our mission is to empower businesses with strategic solutions that drive growth, efficiency, and transformation."
              points={visionPoints}
              delay={0}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
