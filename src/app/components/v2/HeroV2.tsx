import { motion } from "motion/react";
import { ArrowUpRight, Play } from "lucide-react";
import imgHero from "figma:asset/457c5c685aca58839b427afae4188fc40ffefcea.png";

export function HeroV2() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section id="hero" className="relative min-h-screen bg-[#03030f] overflow-hidden">
      {/* BG Image */}
      <div className="absolute inset-0">
        <img src={imgHero} alt="" className="absolute w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(3,3,15,0.4) 0%, rgba(3,3,15,0.75) 70%, rgba(3,3,15,0.95) 100%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-10 pt-[180px] pb-[100px]">
        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span
            className="text-[#1d1ee3] text-[16px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            [About Us]
          </span>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-[680px] mb-10"
        >
          <h1 style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}>
            <span className="block text-[72px] leading-[1.2] text-white">Intelligence That</span>
            <div className="flex items-baseline gap-3">
              <span className="text-[72px] leading-[1.2] text-white">Inspires</span>
              <span
                className="text-[72px] leading-[1.2] text-white italic tracking-[-1.44px]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Growth
              </span>
            </div>
          </h1>
        </motion.div>

        {/* Subtitle + CTA row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex items-center gap-8 flex-wrap"
        >
          <p
            className="text-[rgba(255,255,255,0.7)] text-[18px] leading-[1.5] max-w-[480px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            At Optimo, we transform business challenges into growth opportunities through intelligent strategy and execution.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex items-center gap-4 mt-10"
        >
          <motion.button
            whileHover={{ scale: 1.04, boxShadow: "0 8px 32px rgba(29,30,227,0.4)" }}
            whileTap={{ scale: 0.97 }}
            onClick={() => scrollTo("#contact")}
            className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group"
          >
            <span
              className="text-white text-[16px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Get Started
            </span>
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-gray-100 transition-colors duration-200">
              <ArrowUpRight size={20} color="#1d1ee3" />
            </div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 text-white opacity-80 hover:opacity-100 transition-opacity"
          >
            <div className="w-11 h-11 rounded-full border border-white/30 flex items-center justify-center">
              <Play size={16} fill="white" className="ml-0.5" />
            </div>
            <span
              className="text-[15px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Watch our story
            </span>
          </motion.button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex gap-12 mt-20 pt-10 border-t border-white/10"
        >
          {[
            { value: "5,000+", label: "Businesses Served" },
            { value: "$50M+", label: "Revenue Generated" },
            { value: "98%", label: "Client Satisfaction" },
            { value: "10+", label: "Years Experience" },
          ].map((stat) => (
            <div key={stat.label}>
              <div
                className="text-[36px] text-white tracking-[-1px]"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}
              >
                {stat.value}
              </div>
              <div
                className="text-[14px] text-white/50 mt-1"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
