import { useRef } from "react";
import { motion, useInView } from "motion/react";
import {
  ArrowUpRight,
  Award,
  CheckCircle2,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const founderImg =
  "https://images.unsplash.com/photo-1603252112050-5ee77b4b4fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWxlJTIwcHJvZmVzc2lvbmFsJTIwZmluYW5jaWFsJTIwYWR2aXNvciUyMHBvcnRyYWl0JTIwaGVhZHNob3R8ZW58MXx8fHwxNzczNDg4NjE5fDA&ixlib=rb-4.1.0&q=80&w=1080";

const credentials = [
  "Expert Tax Resolution Specialist",
  "Certified Tax Resolution Specialist (CTRS)",
  "Irvine, CA — Established Practice",
];

export function AttaxAbout() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, {
    once: true,
    margin: "-80px",
  });

  return (
    <section
      id="about"
      className="bg-white py-[60px] md:py-[120px]"
      ref={ref}
    >
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-center">
          {/* Left: founder image with badge */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75 }}
            className="w-full lg:w-[380px] shrink-0 relative"
          >
            <div className="rounded-[16px] overflow-hidden aspect-[4/5] grayscale hover:grayscale-0 transition-all duration-700">
              <ImageWithFallback
                src={founderImg}
                alt="Omar Hassan — Founder, ATTAX Solutions"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Credential badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="absolute -bottom-6 -right-4 lg:-right-6 bg-[#1d1ee3] rounded-[14px] p-4 lg:p-5 max-w-[180px] lg:max-w-[200px]"
            >
              <Award size={24} color="white" className="mb-3" />
              <p
                className="text-white text-[14px]"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 600,
                }}
              >
                Tax Specialist
              </p>
              <p
                className="text-white/70 text-[12px] mt-0.5"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 400,
                }}
              >
                Expert IRS Representation
              </p>
            </motion.div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="flex-1 flex flex-col gap-6 lg:gap-8"
          >
            <div>
              <span
                className="text-[#1d1ee3] text-[16px] block mb-4"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 500,
                }}
              >
                [From Our Founder]
              </span>
              <h2
                className="text-[32px] md:text-[40px] lg:text-[48px] leading-[1.15] text-[#0a1628]"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  fontWeight: 500,
                }}
              >
                Built by Someone Who Has{" "}
                <span
                  style={{
                    fontFamily: "'Playfair Display', serif",
                    fontStyle: "italic",
                  }}
                >
                  Been There
                </span>
              </h2>
            </div>

            <p
              className="text-[15px] lg:text-[18px] leading-[1.7] text-[rgba(10,22,40,0.7)]"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 400,
              }}
            >
              ATTAX Solutions was founded with one purpose: to
              give individuals and businesses facing IRS and
              state tax problems a real advocate — not a
              salesperson. With direct experience working 
              inside the tax resolution system, I
              understand both sides of the table. That knowledge
              is the foundation of everything we do.
            </p>

            <p
              className="text-[15px] lg:text-[18px] leading-[1.7] text-[rgba(10,22,40,0.7)]"
              style={{
                fontFamily: "'Inter Tight', sans-serif",
                fontWeight: 400,
              }}
            >
              Our mission is simple: resolve your tax problem as
              efficiently and affordably as possible — with
              total transparency at every step. No jargon. No
              false promises. Just honest work and real results.
            </p>

            {/* Credentials */}
            <ul className="flex flex-col gap-3">
              {credentials.map((c) => (
                <li key={c} className="flex items-center gap-3">
                  <CheckCircle2
                    size={18}
                    color="#1d1ee3"
                    className="shrink-0"
                  />
                  <span
                    className="text-[15px] text-[#0a1628]"
                    style={{
                      fontFamily: "'Inter Tight', sans-serif",
                      fontWeight: 500,
                    }}
                  >
                    {c}
                  </span>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-3 bg-[#1d1ee3] rounded-[50px] pl-6 pr-2 py-2 group"
              >
                <span
                  className="text-white text-[16px]"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 500,
                  }}
                >
                  Our Story
                </span>
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <ArrowUpRight size={20} color="#1d1ee3" />
                </div>
              </motion.button>

              <div className="flex flex-col">
                <span
                  className="text-[15px] text-[#0a1628]"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 600,
                  }}
                >
                  Omar Hassan
                </span>
                <span
                  className="text-[13px] text-[rgba(10,22,40,0.5)]"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 400,
                  }}
                >
                  Founder · ATTAX Solutions
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}