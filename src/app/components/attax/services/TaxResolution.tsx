import { motion } from "motion/react";
import { ArrowRight, ShieldCheck, Users, Scale, ShieldAlert, type LucideIcon } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Link } from "react-router";

const resolutionPoints: { title: string; text: string; icon: LucideIcon }[] = [
  {
    title: "Who Qualifies?",
    text: "Anyone currently owing back taxes, or those facing active liens, levies, and wage garnishments.",
    icon: Users,
  },
  {
    title: "Direct Advocacy",
    text: "We represent you in all IRS proceedings, audits, and negotiation sessions.",
    icon: Scale,
  },
  {
    title: "Halt Collections",
    text: "Our first priority is stopping aggressive IRS collection actions before they damage your life.",
    icon: ShieldAlert,
  },
];

export function TaxResolution() {
  return (
    <section
      id="tax-resolution"
      className="py-[60px] md:py-[120px] bg-[#f9faff] scroll-mt-[120px] border-t border-[rgba(29,30,227,0.06)]"
    >
      <div className="max-w-[1200px] mx-auto px-5 md:px-0">
        <div className="flex flex-col lg:flex-row lg:items-start gap-10 lg:gap-24">
          {/* Left: Content */}
          <div className="w-full lg:w-[50%] min-w-0">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Tax Resolution
            </motion.span>
            
            <h2
              className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium mb-6 md:mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Direct Representation{" "}
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Against the IRS
              </span>
            </h2>

            <p className="text-[14px] md:text-[16px] leading-[1.8] text-[rgba(10,22,40,0.6)] mb-8 md:mb-10">
              We resolve back taxes and stop collections through binding agreements with the IRS or state. ATTAX handles every agency conversation—you never speak with the IRS directly.
            </p>

            <div className="mb-12 border-y border-[rgba(10,22,40,0.08)]">
              {resolutionPoints.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.title}
                    className={`flex items-start gap-6 md:gap-8 py-6 md:py-8 ${
                      i < resolutionPoints.length - 1 ? "border-b border-[rgba(10,22,40,0.08)]" : ""
                    }`}
                  >
                    <div className="w-[52px] h-[52px] md:w-14 md:h-14 rounded-full bg-[#eaeeff] flex items-center justify-center shrink-0">
                      <Icon size={28} strokeWidth={2} className="text-[#1d1ee3]" aria-hidden />
                    </div>
                    <div className="min-w-0 pt-0.5">
                      <h4
                        className="text-[#0a1628] font-bold text-[17px] md:text-[18px] mb-2"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {item.title}
                      </h4>
                      <p
                        className="text-[15px] md:text-[16px] text-[rgba(10,22,40,0.52)] leading-relaxed"
                        style={{ fontFamily: "'Inter Tight', sans-serif" }}
                      >
                        {item.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            <Link
              to="/our-process"
              className="inline-flex items-center gap-2 text-[#1d1ee3] font-bold text-[14px] md:text-[16px] hover:gap-4 transition-all duration-300 self-start"
            >
              See how we handle your case
              <ArrowRight size={20} />
            </Link>
          </div>

          {/* Right: Image — sticky while this section scrolls (releases when section ends) */}
          <div className="w-full lg:w-[50%] relative md:pb-8 lg:sticky lg:top-28 lg:self-start lg:z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.05)]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1080"
                alt="Tax Specialist Reviewing Documents"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>

            {/* Trust badge   visible on md+ only to avoid mobile overflow */}
            <div className="hidden md:block absolute -bottom-0 -left-8 bg-white p-6 rounded-[24px] shadow-2xl border border-[rgba(0,0,0,0.05)] max-w-[240px]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center">
                  <ShieldCheck size={20} className="text-white" />
                </div>
                <span className="font-bold text-[#0a1628] leading-tight">Licensed <br />Representation</span>
              </div>
              <p className="text-[13px] text-[rgba(10,22,40,0.4)] font-medium uppercase tracking-widest">
                Credentialed
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
