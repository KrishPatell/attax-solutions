import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Linkedin, Twitter } from "lucide-react";
import imgT1 from "figma:asset/451d5d4a71c6738f259f5383908e377669212f88.png";
import imgT2 from "figma:asset/8bb7b6f102fcb7a35d57429d860c067541e9a562.png";
import imgT3 from "figma:asset/04ae057b352f2e1c4d2f3aa615af85ae11e80dfd.png";
import imgT4 from "figma:asset/afa36224e38e9e7fb232df764780938a9cb9d361.png";
import imgT5 from "figma:asset/82a4dd6d07f48dec7af80cdd45cab92284604235.png";
import imgT6 from "figma:asset/54eb0fce67fdb9f52800f90543d3290b573a90e9.png";
import imgT7 from "figma:asset/593663dca6da7b7ec234dc70e3a379cc5460b897.png";

const team = [
  { name: "Sarah Mitchell", title: "CEO & Founder", img: imgT1 },
  { name: "James Okafor", title: "Head of Strategy", img: imgT2 },
  { name: "Priya Sharma", title: "Operations Lead", img: imgT3 },
  { name: "Lucas Vander", title: "Finance Director", img: imgT4 },
  { name: "Elena Rossi", title: "Risk Analyst", img: imgT5 },
  { name: "Thomas Bell", title: "Growth Manager", img: imgT6 },
  { name: "Diana Kim", title: "Senior Consultant", img: imgT7 },
];

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="bg-[#03030f] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span
            className="text-[#1d1ee3] text-[16px] block mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            [Our Team]
          </span>
          <h2
            className="text-[52px] leading-[1.2] text-white"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            Meet the Beautiful Team{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              behind Optimo
            </span>
          </h2>
          <p
            className="text-[18px] text-white/60 mt-4 max-w-[540px] mx-auto"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            A diverse team of strategists, analysts, and visionaries united by one mission: your success.
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid grid-cols-4 gap-5">
          {team.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative rounded-[12px] overflow-hidden cursor-pointer"
            >
              {/* Photo */}
              <div className="h-[280px] overflow-hidden">
                <motion.img
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-5">
                <div className="translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                  <p
                    className="text-white text-[18px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {member.name}
                  </p>
                  <p
                    className="text-white/70 text-[14px] mt-0.5"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {member.title}
                  </p>
                  <div className="flex gap-2 mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#1d1ee3] transition-colors">
                      <Linkedin size={14} color="white" />
                    </button>
                    <button className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center hover:bg-[#1d1ee3] transition-colors">
                      <Twitter size={14} color="white" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}

          {/* Join CTA card */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: team.length * 0.08 }}
            className="rounded-[12px] bg-[#1d1ee3] h-[280px] flex flex-col items-center justify-center gap-4 cursor-pointer hover:bg-[#1618c7] transition-colors"
          >
            <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
              <span className="text-white text-2xl">+</span>
            </div>
            <div className="text-center px-6">
              <p
                className="text-white text-[18px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Join Our Team
              </p>
              <p
                className="text-white/70 text-[14px] mt-1"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                We're hiring
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
