import { motion } from "motion/react";
import { ArrowUpRight, ShieldCheck } from "lucide-react";
import { Breadcrumbs } from "./Breadcrumbs";
import svgPaths from "../../../../imports/svg-tbbnbj1wyr";

export function AboutHero() {
  const navLinks = [
    { label: "Our Story", href: "#our-story" },
    { label: "How We Handle Cases", href: "#how-we-handle" },
    { label: "What Happens Next", href: "#what-happens-next" },
    { label: "Client Assurance", href: "#client-assurance" },
    { label: "Team", href: "#team" },
    { label: "Referral Program", href: "#referral" },
  ];

  return (
    <section className="relative min-h-[85vh] bg-[#0a1628] overflow-hidden flex items-center pt-[100px]">
      {/* BG pattern */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{ 
            backgroundImage: "radial-gradient(circle, #fff 1px, transparent 1px)",
            backgroundSize: "40px 40px"
          }} 
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(10,22,40,1) 0%, rgba(10,22,40,0.85) 50%, rgba(29,30,227,0.1) 100%)",
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 w-full py-20">
        <Breadcrumbs current="About" />

        <div className="grid grid-cols-12 gap-12 items-center">
          <div className="col-span-12 lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 mb-8"
            >
              <div className="h-[16px] relative shrink-0 w-[64px]">
                {[0, 12, 24, 36, 48].map((left, index) => (
                  <div key={index} className="absolute size-[16px] top-0" style={{ left: `${left}px` }}>
                    <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
                      <path 
                        d={svgPaths.p17f48400} 
                        fill="#F59E0B" 
                        stroke="#F59E0B" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="1.33333" 
                      />
                    </svg>
                  </div>
                ))}
              </div>
              <p className="font-normal leading-[21px] text-[14px] text-white/60 whitespace-nowrap" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                The fastest growing tax relief company in the nation
              </p>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span
                className="block text-[64px] lg:text-[72px] leading-[1.1] text-white tracking-[-1.5px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Tax Debt Doesn't
              </span>
              <span
                className="block text-[64px] lg:text-[72px] leading-[1.1] tracking-[-1.5px] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Have to{" "}
                <span
                  className="italic text-[#a5b4fc]"
                  style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, letterSpacing: "-1.44px" }}
                >
                  Define You
                </span>
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-6 text-[18px] leading-[1.7] text-white/72 max-w-[620px]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              ATTAX Solutions provides direct representation and clarity for IRS and state tax resolution. We are committed to honest, direct, and effective advocacy for every client.
            </motion.p>
          </div>
        </div>

        {/* In-page anchors */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-x-8 gap-y-4 mt-16 pt-8 border-t border-white/10"
        >
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => document.querySelector(link.href)?.scrollIntoView({ behavior: "smooth" })}
              className="text-[14px] text-white/50 hover:text-[#a5b4fc] transition-colors uppercase tracking-widest font-medium"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
