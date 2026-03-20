import { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight, Bell, BarChart3, Route } from "lucide-react";
import svgPaths from "../../../imports/svg-2lgb454t5i";

function CheckIcon({ color = "#5858F7" }: { color?: string }) {
  return (
    <div className="shrink-0 w-[18px] h-[18px] relative">
      <svg className="absolute block size-full" fill="none" viewBox="0 0 14.3438 14.3438">
        <path d={svgPaths.pd1458b0} fill={color} />
      </svg>
    </div>
  );
}

const cards = [
  {
    icon: Bell,
    badge: "Available at Launch",
    title: "IRS Notice Detection",
    desc: "Real-time monitoring of your IRS account. Get instant alerts the moment the IRS issues a notice, files a lien, or initiates collection action   days before the mail arrives.",
    features: [
      "Live IRS transcript monitoring",
      "Instant SMS & email notice alerts",
      "Early warning before enforcement begins",
    ],
    featured: false,
  },
  {
    icon: BarChart3,
    badge: "Beta · Coming Soon",
    title: "ATTAX Score",
    desc: "Your personal tax health score. A single number that tells you exactly where you stand with the IRS, what risks you face, and what actions to take   updated in real time.",
    features: [
      "Comprehensive IRS risk assessment",
      "Actionable score with improvement plan",
      "Track your progress through resolution",
    ],
    featured: true,
  },
  {
    icon: Route,
    badge: "Coming Soon",
    title: "Resolution Tracker",
    desc: "A live timeline of your case from first contact to final resolution. Always know exactly where your case stands, what's next, and when to expect results.",
    features: [
      "Step-by-step case milestone tracking",
      "Document status and submission log",
      "Estimated resolution timeline",
    ],
    featured: false,
  },
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
    <section id="clarity" className="py-[60px] md:py-[120px] bg-white" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center text-center mb-10 md:mb-14"
        >
          <span
            className="text-[#1d1ee3] text-[14px] md:text-[16px] block mb-2 md:mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            [Coming Soon · Proprietary Technology]
          </span>
          <h2
            className="leading-[1.2] md:leading-[1.1] text-[#03030f] text-[32px] md:text-[34px] lg:text-[52px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600, maxWidth: 820 }}
          >
            Introducing{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic", color: "#1d1ee3" }}>
              ATTAX Clarity
            </span>
          </h2>
          <p
            className="text-[14px] md:text-[16px] lg:text-[18px] leading-[1.65] text-[rgba(3,3,15,0.65)] mt-4 md:mt-5 max-w-[720px]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            The only platform that monitors your IRS standing in real time   so you see every notice, every flag, and every risk before it becomes a crisis.{" "}
            <span style={{ fontWeight: 500, color: "rgba(3,3,15,0.85)" }}>No competitor offers anything like it.</span>
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-12">
          {cards.map((card, i) => {
            const Icon = card.icon;
            const featured = card.featured;
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                className={`rounded-[16px] p-6 md:p-8 flex flex-col gap-6 relative overflow-hidden ${
                  featured
                    ? "bg-[#0a1628]"
                    : "bg-[#f7f7f4]"
                }`}
                style={featured ? {} : { border: "1px solid #eaeeff" }}
              >
                {featured && (
                  <div
                    className="absolute top-0 right-0 w-[280px] h-[280px] rounded-full opacity-10 pointer-events-none"
                    style={{ background: "radial-gradient(circle, #1d1ee3 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
                  />
                )}

                {/* Icon */}
                <div
                  className={`w-[50px] h-[50px] rounded-full flex items-center justify-center shrink-0 ${
                    featured ? "bg-white/10" : "bg-[#eaeeff]"
                  }`}
                >
                  <Icon size={22} className={featured ? "text-white" : "text-[#1d1ee3]"} />
                </div>

                {/* Badge */}
                <div
                  className="inline-flex items-center gap-2 rounded-full px-3 py-1 self-start"
                  style={{ background: featured ? "rgba(255,255,255,0.12)" : "#eaeeff" }}
                >
                  <span className={`w-1.5 h-1.5 rounded-full ${featured ? "bg-white animate-pulse" : "bg-[#1d1ee3]"}`} />
                  <span
                    className={`text-[12px] ${featured ? "text-white/80" : "text-[#1d1ee3]"}`}
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                  >
                    {card.badge}
                  </span>
                </div>

                {/* Title + Desc */}
                <div className="flex flex-col gap-2">
                  <h3
                    className={`leading-[1.2] text-[26px] ${featured ? "text-white" : "text-[#03030f]"}`}
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                  >
                    {card.title}
                  </h3>
                  <p
                    className={`text-[15px] leading-[1.65] ${featured ? "text-white/70" : "text-[rgba(3,3,15,0.65)]"}`}
                    style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                  >
                    {card.desc}
                  </p>
                </div>

                {/* Features */}
                <ul className={`flex flex-col gap-3 border-t pt-5 mt-auto ${featured ? "border-white/15" : "border-[#eaeeff]"}`}>
                  {card.features.map((f) => (
                    <li key={f} className="flex items-start gap-3">
                      <CheckIcon color={featured ? "rgba(255,255,255,0.85)" : "#5858F7"} />
                      <span
                        className={`text-[14px] leading-snug ${featured ? "text-white/75" : "text-[rgba(3,3,15,0.7)]"}`}
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>

        {/* Single waitlist CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          id="clarity-waitlist"
          className="bg-[#f7f9ff] rounded-[20px] px-6 md:px-12 py-10 flex flex-col md:flex-row items-center gap-6 md:gap-10"
          style={{ border: "1px solid #dde0ff" }}
        >
          <div className="flex-1 text-center md:text-left">
            <p
              className="text-[#03030f] text-[17px] md:text-[22px] leading-[1.3] mb-1"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Be the first to access ATTAX Clarity
            </p>
            <p
              className="text-[14px] text-[rgba(3,3,15,0.55)] leading-relaxed"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
            >
              No spam. Just one email when we launch. Unsubscribe anytime.
            </p>
          </div>

          {submitted ? (
            <div className="flex items-center gap-3 shrink-0">
              <div className="w-10 h-10 bg-[#eaeaff] rounded-full flex items-center justify-center">
                <CheckIcon color="#1d1ee3" />
              </div>
              <p
                className="text-[#1d1ee3] text-[15px]"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                You're on the list!
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex gap-2 w-full md:w-auto shrink-0">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="rounded-[12px] px-4 py-3 text-[14px] text-[#03030f] outline-none w-full md:w-[220px]"
                style={{
                  fontFamily: "'Inter Tight', sans-serif",
                  background: "white",
                  border: "1.5px solid #dde0ff",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#1d1ee3")}
                onBlur={(e) => (e.target.style.borderColor = "#dde0ff")}
              />
              <button
                type="submit"
                className="flex items-center gap-2 bg-[#1d1ee3] rounded-[50px] pl-5 pr-1.5 py-1.5 group hover:bg-[#1618c7] transition-colors shrink-0"
              >
                <span
                  className="text-white text-[14px] whitespace-nowrap"
                  style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
                >
                  Notify Me
                </span>
                <div className="w-9 h-9 bg-white rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-colors">
                  <ArrowUpRight size={15} color="#1d1ee3" />
                </div>
              </button>
            </form>
          )}
        </motion.div>

      </div>
    </section>
  );
}
