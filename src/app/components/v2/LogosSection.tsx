import { useRef } from "react";
import { motion, useInView } from "motion/react";
import imgLogo0 from "figma:asset/2595bc767e6c53dda8ddd79a59b6a14bcc3549a0.png";
import imgLogo1 from "figma:asset/322e732e9b7d9a777a63e69be6f7fe579c728936.png";
import imgLogo2 from "figma:asset/eb0b14126e05f98028fdc2edbc8ffdfd7ca85864.png";
import imgLogo3 from "figma:asset/f3f7de3be9b9abc09a49a6866e9a7aa01d8763f1.png";

const logos = [imgLogo0, imgLogo1, imgLogo2, imgLogo3, imgLogo0, imgLogo1, imgLogo2, imgLogo3];

export function LogosSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="bg-[#f7f7f7] py-16 overflow-hidden" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8 mb-10">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center text-[#03030f] text-[20px]"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
        >
          Trusted by nearly 5000+ paying customers
        </motion.p>
      </div>

      {/* Marquee track */}
      <div className="relative overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="flex gap-16 items-center"
          style={{ width: "max-content" }}
        >
          {[...logos, ...logos].map((logo, i) => (
            <div key={i} className="h-[28px] w-[120px] shrink-0 flex items-center justify-center">
              <img src={logo} alt="" className="h-full w-full object-contain grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-300" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
