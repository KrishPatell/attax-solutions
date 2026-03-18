import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import imgHelp1 from "figma:asset/5d9c1bb00f7f7fc564af20757458780b7053c4ba.png";
import imgHelp2 from "figma:asset/b06bb250474083ad200a7224877c56895ef027ea.png";
import imgHelp3 from "figma:asset/a76c1e208521ce97184895091fe71fa916d86c45.png";
import imgHelp4 from "figma:asset/b75ee37257bd83e7d7f84299475db772c91fd553.png";
import imgHelp5 from "figma:asset/aeb22f7307bd11d26671f6b107e820881b428d99.png";

const caseStudies = [
  {
    img: imgHelp1,
    title: "Driving Efficiency Through Digital Transformation",
    desc: "Helping Orion Tech modernize operations with cutting-edge digital solutions.",
    tag: "Technology",
  },
  {
    img: imgHelp2,
    title: "Scaling Operations for Sustainable Growth",
    desc: "Supporting Apex Manufacturing to streamline and double their output capacity.",
    tag: "Operations",
  },
  {
    img: imgHelp3,
    title: "Market Expansion Strategy for FinTech Startup",
    desc: "Guiding NovaPay into 3 new international markets within 18 months.",
    tag: "Finance",
  },
  {
    img: imgHelp4,
    title: "Risk Resilience Framework for Healthcare",
    desc: "Building a proactive risk management system for MedCore Group.",
    tag: "Healthcare",
  },
  {
    img: imgHelp5,
    title: "Team Transformation & Leadership Development",
    desc: "Restructuring leadership culture at Summit Retail Co. for high performance.",
    tag: "Team Growth",
  },
];

export function HowWeHelpSection() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const VISIBLE = 3;

  const go = (dir: number) => {
    setDirection(dir);
    setIndex((prev) => {
      const next = prev + dir;
      if (next < 0) return caseStudies.length - VISIBLE;
      if (next > caseStudies.length - VISIBLE) return 0;
      return next;
    });
  };

  const visible = [
    caseStudies[(index) % caseStudies.length],
    caseStudies[(index + 1) % caseStudies.length],
    caseStudies[(index + 2) % caseStudies.length],
  ];

  return (
    <section className="bg-white py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-between mb-14"
        >
          <h2
            className="text-[52px] leading-[1.2] text-[#03030f] max-w-[600px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            How We Helped Clients Grow{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Smarter
            </span>
          </h2>
          {/* Navigation arrows */}
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(-1)}
              className="w-[52px] h-[52px] rounded-full bg-[#eaeaff] flex items-center justify-center hover:bg-[#1d1ee3] hover:text-white transition-colors duration-200 group"
            >
              <ChevronLeft size={22} className="text-[#03030f] group-hover:text-white transition-colors" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => go(1)}
              className="w-[52px] h-[52px] rounded-full bg-[#1d1ee3] flex items-center justify-center hover:bg-[#1618c7] transition-colors duration-200"
            >
              <ChevronRight size={22} className="text-white" />
            </motion.button>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="overflow-hidden">
          <motion.div
            key={index}
            initial={{ opacity: 0, x: direction > 0 ? 80 : -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="flex gap-5"
          >
            {visible.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex-1 bg-white rounded-[12px] overflow-hidden border border-[rgba(0,0,0,0.07)] flex flex-col"
              >
                <div className="h-[280px] overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 flex flex-col gap-3 flex-1">
                  <span className="text-[12px] text-[#1d1ee3] px-3 py-1 bg-[#eaeaff] rounded-full w-fit" style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}>
                    {item.tag}
                  </span>
                  <h3
                    className="text-[20px] leading-[1.4] text-[#03030f]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="text-[14px] leading-[1.5] text-[rgba(3,3,15,0.7)]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {Array.from({ length: caseStudies.length - VISIBLE + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > index ? 1 : -1); setIndex(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === index ? "w-8 bg-[#1d1ee3]" : "w-2 bg-[rgba(0,0,0,0.2)]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
