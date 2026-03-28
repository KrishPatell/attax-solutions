import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { Breadcrumbs } from "../about/Breadcrumbs";
import { HERO_H1_CLASS_ON_LIGHT, HERO_H1_STYLE } from "../../../lib/heroH1";

export function ProcessHero() {
  return (
    <section className="relative pt-[100px] md:pt-[160px] pb-[60px] md:pb-[100px] overflow-hidden bg-white border-b border-[rgba(29,30,227,0.06)]">
      {/* Reads as white; soft cool wash + blurs separate this band from the flat white steps block */}
      <div className="pointer-events-none absolute inset-0" aria-hidden>
        <div className="absolute inset-0 bg-gradient-to-b from-[#f4f6ff]/90 via-white to-white" />
        <div className="absolute -top-[30%] right-[-15%] h-[min(420px,85vw)] w-[min(420px,85vw)] rounded-full bg-[#1d1ee3]/[0.04] blur-[100px]" />
        <div className="absolute top-[40%] -left-[20%] h-[320px] w-[320px] rounded-full bg-[#c7d2fe]/25 blur-[90px]" />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="flex flex-col items-start gap-6 max-w-[780px]">
          <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
            <Breadcrumbs current="Our Process" light />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={HERO_H1_CLASS_ON_LIGHT}
            style={HERO_H1_STYLE}
          >
            A Clear Process. No Surprises. No Runaround.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-[15px] md:text-[18px] text-[#0a1628]/55 leading-[1.7] max-w-[620px]"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            From your first call to your final resolution, here's exactly what happens — and why we do it this way.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.26 }}
          >
            <Link to="/contact" className="block w-fit">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 text-[14px] md:text-[15px] font-medium flex items-center gap-5 w-fit group"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                <span className="whitespace-nowrap">Free Consultation</span>
                <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 shrink-0">
                  <ArrowRight size={17} className="text-[#1d1ee3]" />
                </div>
              </motion.button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.34 }}
            className="flex flex-wrap gap-3 pt-2"
          >
            {[
              { label: "The 4 Steps", href: "#process-steps" },
              { label: "Fresh Start Programs", href: "#fresh-start" },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="px-4 py-2 rounded-full border border-[#0a1628]/12 text-[13px] font-semibold text-[#0a1628]/60 hover:border-[#1d1ee3] hover:text-[#1d1ee3] transition-all"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                {item.label}
              </a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
