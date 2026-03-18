import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import svgPaths from "../../../imports/svg-2lgb454t5i";

// Checkmark icon using the Figma SVG path
function CheckIcon({ color = "#5858F7" }: { color?: string }) {
  return (
    <div className="shrink-0 w-[18px] h-[18px] relative">
      <svg
        className="absolute block size-full"
        fill="none"
        viewBox="0 0 14.3438 14.3438"
      >
        <path d={svgPaths.pd1458b0} fill={color} />
      </svg>
    </div>
  );
}

const noticeFeatures = [
  "Live IRS transcript monitoring",
  "Instant SMS & email notice alerts",
  "Early warning before enforcement begins",
];

const scoreFeatures = [
  "Comprehensive IRS risk assessment",
  "Actionable score with improvement plan",
  "Track your progress through resolution",
];

export function AttaxClarity() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) setSubmitted(true);
  };

  return (
    <section id="clarity" className="py-[60px] md:py-[120px] bg-[#eaeaff00]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-10 md:mb-14"
        >
          <span
            className="text-[#1d1ee3] text-[14px] md:text-[16px] block mb-2 md:mb-4 w-full text-center"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            [Coming Soon · Proprietary Technology]
          </span>
          <h2
            className="leading-[1.2] md:leading-[1.1] text-[#03030f] mx-auto w-full text-center text-[32px] md:text-[34px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, maxWidth: 1020 }}
          >
            Introducing{" "}
            <span className="block md:inline" style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#1d1ee3" }}>
              ATTAX Clarity
            </span>
          </h2>
          <p
            className="text-[14px] md:text-[15px] lg:text-[18px] leading-[1.6] md:leading-[1.65] text-[rgba(3,3,15,0.65)] mt-4 md:mt-5 mx-auto max-w-[790px] w-full text-center"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            The only platform that monitors your IRS standing in real time — so you see every notice, every flag, and every risk before it becomes a crisis.{" "}
            <span style={{ fontWeight: 500, color: "rgba(3,3,15,0.85)" }}>No competitor offers anything like it.</span>
          </p>
        </motion.div>

        {/* ── Cards ── */}
        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 relative">

          {/* Card 1 — IRS Notice Detection */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-[16px] p-6 md:p-8 flex flex-col gap-6 md:gap-7 relative overflow-hidden sticky top-[80px] md:static"
            style={{ border: "1px solid #dde0ff", zIndex: 1 }}
          >
            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 self-start"
              style={{ background: "#eaeaff" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#1d1ee3]" />
              <span
                className="text-[12px] text-[#1d1ee3]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Available at Launch
              </span>
            </div>

            {/* Title */}
            <div>
              <h3
                className="text-[#03030f] leading-[1.2] mb-2 text-[26px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                IRS Notice Detection
              </h3>
              <p
                className="text-[15px] leading-[1.65] text-[rgba(3,3,15,0.65)]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Real-time monitoring of your IRS account. Get instant alerts the moment the IRS issues a notice, files a lien, or initiates collection action — days before the mail arrives.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-between bg-[#1d1ee3] rounded-[50px] pl-6 pr-1.5 py-1.5 group transition-all hover:bg-[#1618c7]"
            >
              <span
                className="text-white text-[15px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Get Early Access
              </span>
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                <ArrowUpRight size={16} color="#1d1ee3" />
              </div>
            </button>

            {/* Features */}
            <ul className="flex flex-col gap-3 border-t border-[#eaeeff] pt-5">
              {noticeFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon color="#5858F7" />
                  <span
                    className="text-[15px] text-[rgba(3,3,15,0.7)] leading-snug"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 2 — ATTAX Score (Featured / Blue) */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.22 }}
            className="bg-[#1d1ee3] rounded-[16px] p-6 md:p-8 flex flex-col gap-6 md:gap-7 relative overflow-hidden sticky top-[100px] md:static"
            style={{ zIndex: 2 }}
          >
            {/* Glow */}
            <div
              className="absolute top-0 right-0 w-[300px] h-[300px] rounded-full opacity-20 pointer-events-none"
              style={{ background: "radial-gradient(circle, #ffffff 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
            />

            {/* Badge */}
            <div
              className="inline-flex items-center gap-2 rounded-full px-3 py-1 self-start"
              style={{ background: "rgba(255,255,255,0.2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span
                className="text-[12px] text-white"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Beta Access · Join Waitlist
              </span>
            </div>

            {/* Title */}
            <div>
              <h3
                className="text-[26px] md:text-[30px] text-white leading-[1.2] mb-2"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                ATTAX Score
              </h3>
              <p
                className="text-[15px] leading-[1.65] text-white/75"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Your personal tax health score. A single number that tells you exactly where you stand with the IRS, what risks you face, and what actions to take — updated in real time.
              </p>
            </div>

            {/* CTA */}
            <button
              onClick={() => document.querySelector("#clarity-waitlist")?.scrollIntoView({ behavior: "smooth" })}
              className="flex items-center justify-between bg-white rounded-[50px] pl-6 pr-1.5 py-1.5 group transition-all hover:bg-blue-50"
            >
              <span
                className="text-[#1d1ee3] text-[15px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
              >
                Join the Waitlist
              </span>
              <div className="w-10 h-10 bg-[#1d1ee3] rounded-full flex items-center justify-center group-hover:bg-[#1618c7] transition-colors">
                <ArrowUpRight size={16} color="white" />
              </div>
            </button>

            {/* Features */}
            <ul className="flex flex-col gap-3 border-t border-white/20 pt-5">
              {scoreFeatures.map((f) => (
                <li key={f} className="flex items-start gap-3">
                  <CheckIcon color="rgba(255,255,255,0.9)" />
                  <span
                    className="text-[15px] text-white/80 leading-snug"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Card 3 — Waitlist Form */}
          <motion.div
            id="clarity-waitlist"
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.34 }}
            className="bg-white rounded-[16px] p-6 md:p-8 flex flex-col gap-6 sticky top-[120px] md:static"
            style={{ border: "1px solid #dde0ff", zIndex: 3 }}
          >
            {/* Competitor callout */}
            <div
              className="rounded-[10px] p-4"
              style={{ background: "#f4f4ff", border: "1px solid #dde0ff" }}
            >
              <p
                className="text-[13px] leading-[1.6] text-[rgba(3,3,15,0.65)]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                <span
                  className="text-[#03030f]"
                  style={{ fontWeight: 600 }}
                >
                  TaxRise, Optima, Safeway
                </span>{" "}
                — none offer real-time IRS account monitoring.
              </p>
            </div>

            {/* Copy */}
            <div>
              <h3
                className="text-[26px] md:text-[22px] text-[#03030f] leading-[1.25] mb-2"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Be the first to know
              </h3>
              <p
                className="text-[14px] leading-[1.65] text-[rgba(3,3,15,0.55)]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                Get notified the moment ATTAX Clarity opens for early access. No competitor can match what's coming.
              </p>
            </div>

            {/* Form */}
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex-1 flex flex-col items-center justify-center gap-3 text-center py-8"
              >
                <div className="w-12 h-12 bg-[#eaeaff] rounded-full flex items-center justify-center">
                  <CheckIcon color="#1d1ee3" />
                </div>
                <p
                  className="text-[#1d1ee3] text-[16px]"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                >
                  You're on the list!
                </p>
                <p
                  className="text-[13px] text-[rgba(3,3,15,0.5)] leading-relaxed"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  We'll notify you the moment ATTAX Clarity launches.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full rounded-[12px] px-4 py-3 text-[15px] text-[#03030f] outline-none transition-all"
                  style={{
                    fontFamily: "'Inter Tight', sans-serif",
                    fontWeight: 400,
                    background: "#f4f4ff",
                    border: "1.5px solid #dde0ff",
                  }}
                  onFocus={(e) => (e.target.style.borderColor = "#1d1ee3")}
                  onBlur={(e) => (e.target.style.borderColor = "#dde0ff")}
                />
                <button
                  type="submit"
                  className="flex items-center justify-between bg-[#1d1ee3] rounded-[50px] pl-6 pr-1.5 py-1.5 group hover:bg-[#1618c7] transition-colors"
                >
                  <span
                    className="text-white text-[15px]"
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                  >
                    Join the Waitlist
                  </span>
                  <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                    <ArrowUpRight size={16} color="#1d1ee3" />
                  </div>
                </button>
                <p
                  className="text-[12px] leading-[1.6] text-[rgba(3,3,15,0.45)] text-center"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                >
                  No spam. Just a notification when ATTAX Clarity launches. Unsubscribe anytime.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* ── Competitor Bar ── */}
        

      </div>
    </section>
  );
}