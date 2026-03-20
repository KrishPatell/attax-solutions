import { useState } from "react";
import { motion } from "motion/react";
import { ArrowUpRight, Send } from "lucide-react";
import imgHeroBg from "figma:asset/03089e2d4a7b60e92d9c58c0c7c175ef479ee92f.png";

export function HeroSection() {
  const [email, setEmail] = useState("");

  const handleBookCall = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative min-h-screen bg-black">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={imgHeroBg}
          alt=""
          className="absolute w-full h-full object-cover opacity-70"
        />
        <div
          className="absolute inset-0"
          style={{ background: "linear-gradient(226deg, rgba(0,0,0,0) 41%, rgba(0,0,0,0.9) 88%)" }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-10 pt-[160px] pb-[80px]">
        <div className="flex flex-col gap-10 relative">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col gap-2 max-w-[750px]"
          >
            <h1
              className="text-[72px] leading-[1.2] text-white"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Navigate Business
            </h1>
            <div className="flex flex-wrap items-baseline gap-x-4">
              <span
                className="text-[72px] leading-[1.2] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                with
              </span>
              <span
                className="text-[72px] leading-[1.2] text-white italic tracking-[-1.44px]"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600 }}
              >
                Confidence
              </span>
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-[#eaeaff] text-[18px] leading-[1.5] max-w-[680px] mt-3"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Expert strategic consulting to drive sustainable growth, operational innovation, and lasting business transformation across industries and markets, maximizing impact.
            </motion.p>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex items-center gap-6"
          >
            <motion.button
              whileHover={{ scale: 1.04, boxShadow: "0 8px 40px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBookCall}
              className="flex items-center gap-3 bg-white rounded-[50px] pl-6 pr-2 py-2 group"
            >
              <span
                className="text-[#03030f] text-[16px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Book A Free Call
              </span>
              <div className="w-12 h-12 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors duration-200">
                <ArrowUpRight size={20} color="white" />
              </div>
            </motion.button>

            <motion.button
              onClick={() => document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })}
              whileHover={{ x: 4 }}
              className="text-[#eaeaff] text-[16px] flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              Learn more <ArrowUpRight size={16} />
            </motion.button>
          </motion.div>

          {/* Subscribe Card   inlined below on smaller screens, floated right on large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.7 }}
            className="lg:absolute lg:right-0 lg:top-0 bg-white rounded-[12px] p-6 w-full lg:w-[336px] shadow-[0_12px_40px_rgba(0,0,0,0.2)] border border-[#eaeaff]"
          >
            <div className="flex flex-col gap-4">
              <div>
                <h3
                  className="text-[20px] leading-[1.4] text-[#03030f]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  Let's Move Your Business Forward
                </h3>
                <p
                  className="text-[14px] leading-[1.5] text-[rgba(3,3,15,0.7)] mt-2"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  Success doesn't happen by chance it's built through smart strategy, informed decisions.
                </p>
              </div>
              <div className="flex items-center bg-[#eaeaff] rounded-full p-1.5 gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 bg-transparent px-3 py-1 text-[14px] text-[rgba(3,3,15,0.7)] outline-none placeholder:text-[rgba(3,3,15,0.4)]"
                  style={{ fontFamily: "'Inter', sans-serif" }}
                />
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-8 h-8 bg-[#1d1ee3] rounded-full flex items-center justify-center shrink-0"
                >
                  <Send size={14} color="white" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
