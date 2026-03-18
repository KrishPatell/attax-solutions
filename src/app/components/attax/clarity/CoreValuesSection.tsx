import { motion } from "motion/react";
import { ArrowUpRight, TrendingUp, Zap } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { AttaxTestimonialCard } from "../AttaxTestimonialCard";

export function CoreValuesSection() {
  return (
    <section className="py-[120px] bg-white overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-[60px]">
          
          {/* Left: Image with Testimonial Card */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full lg:max-w-[540px] h-[620px] rounded-[12px] overflow-hidden"
          >
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1770943558988-2c605d6bd5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB0ZWFtJTIwY29sbGFib3JhdGluZyUyMGluJTIwbW9kZXJuJTIwZ2xhc3MlMjBvZmZpY2UlMjBtZWV0aW5nfGVufDF8fHx8MTc3MzY1NjkwOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="ATTAX Collaboration"
              className="w-full h-full object-cover rounded-[12px]"
            />
            
            {/* Testimonial Card Overlay */}
            <div className="absolute bottom-8 left-8 right-8 max-w-[361px]">
              <AttaxTestimonialCard
                quote="ATTAX Clarity helped our business stay compliant with proactive monitoring and strategic IRS insight."
                name="Zayan Daniel"
                title="Head of Business Strategy"
                photo="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=facearea&facepad=2&w=80&h=80&q=80"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <div className="flex-1 flex flex-col gap-12">
            <div>
              <motion.span 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[#1d1ee3] text-[16px] font-medium block mb-3" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                [Core Value]
              </motion.span>
              <motion.h2 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[52px] leading-[1.1] text-[#03030f] font-medium mb-6" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                The Value <span className="italic italic text-[#03030f]" style={{ fontFamily: "'Playfair Display', serif" }}>Behind</span>
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[18px] leading-[1.6] text-[rgba(3,3,15,0.7)] max-w-[500px]" 
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                The value behind our tax relief work goes far beyond simple resolutions. It's rooted in how we listen, collaborate, and protect every client's financial future.
              </motion.p>
            </div>

            <div className="flex flex-col gap-6">
              {[
                { 
                  title: "Strategic Alignment", 
                  desc: "We work closely with you to align every action with your long-term tax compliance.",
                  icon: TrendingUp
                },
                { 
                  title: "Long-Term Impact", 
                  desc: "We deliver sustainable tax relief solutions that drive stability and growth.",
                  icon: Zap
                }
              ].map((feature, i) => (
                <motion.div 
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 * i }}
                  viewport={{ once: true }}
                  className="group flex items-center gap-4 py-4 border-t border-[rgba(0,0,0,0.07)] last:border-b"
                >
                  <div className="w-12 h-12 bg-[#eaeaff] rounded-full flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                    <feature.icon size={22} className="text-[#1d1ee3]" />
                  </div>
                  <div>
                    <h4 className="text-[20px] font-medium text-[#03030f]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{feature.title}</h4>
                    <p className="text-[16px] text-[rgba(3,3,15,0.7)]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>{feature.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <button
                onClick={() => document.querySelector("#clarity")?.scrollIntoView({ behavior: "smooth" })}
                className="group relative bg-[#1d1ee3] rounded-[50px] pl-8 pr-2 py-2 inline-flex items-center gap-10 hover:bg-[#1618c7] transition-all"
              >
                <span className="text-white text-[16px] font-medium" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Get Started
                </span>
                <div className="w-11 h-11 bg-white rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform duration-300">
                  <ArrowUpRight size={20} className="text-[#1d1ee3]" />
                </div>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
