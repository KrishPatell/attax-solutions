import { motion } from "motion/react";
import { CheckCircle2, ShieldCheck, HeartHandshake, Scale } from "lucide-react";
import { AttaxTestimonialCard } from "../AttaxTestimonialCard";
import meImg from "../../../../assets/me.jpg";

const commitments = [
  {
    icon: Scale,
    title: "Honest Case Evaluation",
    description: "We tell you exactly where you stand. If we can't help you, we'll tell you upfront. We never take on a case unless we believe there is a viable path to resolution."
  },
  {
    icon: ShieldCheck,
    title: "Transparent Fees",
    description: "No hidden costs, no surprise hourly billing. We provide clear, flat-fee pricing for our services so you know exactly what your investment is from day one."
  },
  {
    icon: HeartHandshake,
    title: "Dedicated Representation",
    description: "Your case is handled by a licensed professional who knows your story. You aren't just a number in a database; you're a person who deserves real advocacy."
  },
  {
    icon: CheckCircle2,
    title: "Clear Communication",
    description: "We answer your questions, we return your calls, and we keep you informed. You will always know the current status of your case and the next steps in our strategy."
  }
];

const testimonials = [
  {
    quote: "ATTAX didn't promise me the world; they promised me they would work hard and be honest. They delivered on both. Settling my $42k debt was the weight off my shoulders I'd been carrying for years.",
    author: "Robert M.",
    role: "Orange County Business Owner",
    photo: meImg,
  },
  {
    quote: "The transparency was what sold me. I'd spoken to other firms that felt like sales mills. ATTAX felt like a law firm. Professional, direct, and actually effective.",
    author: "Sarah J.",
    role: "Recent Client",
    photo: "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=facearea&facepad=2&q=80&w=200",
  }
];

export function ClientAssurance() {
  return (
    <section id="client-assurance" className="bg-[#0a1628] py-[60px] md:py-[120px] overflow-hidden relative">
      {/* Decorative glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#1d1ee3]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1200px] mx-auto relative z-10">
        <div className="grid grid-cols-12 gap-8 md:gap-16 items-start">
          <div className="col-span-12 lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2
                className="text-[32px] md:text-[48px] leading-[1.2] md:leading-[1.1] text-white mb-6 md:mb-8"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
              >
                Our Client{" "}
                <span className="italic font-normal text-[#a5b4fc]" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Assurance
                </span>
              </h2>
              <p
                className="text-[15px] md:text-[18px] text-white/60 leading-[1.7] mb-8 md:mb-12"
                style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
              >
                We do not use the word "guarantee" when it comes to legal outcomes   the IRS is a complex government agency and no firm can ethically promise a specific result.
              </p>

              <div className="space-y-8">
                {commitments.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-6"
                  >
                    <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#a5b4fc] shrink-0">
                      <item.icon size={20} />
                    </div>
                    <div>
                      <h3 
                        className="text-white text-[20px] mb-2" 
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-white/50 text-[15px] leading-[1.6]" 
                        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          <div className="col-span-12 lg:col-span-6">
            <div className="space-y-6">
              {testimonials.map((t, idx) => (
                <AttaxTestimonialCard
                  key={idx}
                  quote={t.quote}
                  name={t.author}
                  title={t.role}
                  photo={t.photo}
                  index={idx}
                />
              ))}

              {/* Trust Badge */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="pt-8 flex items-center justify-center gap-12"
              >
                <div className="opacity-40 grayscale brightness-200">
                  {/* Mock logos */}
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center font-bold text-white text-[12px]">BBB</div>
                    <span className="text-white text-[14px] font-bold">A+ RATING</span>
                  </div>
                </div>
                <div className="opacity-40 grayscale brightness-200">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={28} className="text-white" />
                    <span className="text-white text-[14px] font-bold">IRS COMPLIANT</span>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
