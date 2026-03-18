import { motion } from "motion/react";
import { ArrowRight, MessageSquare, Target, Scale, ShieldCheck } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";

export function TaxNegotiation() {
  return (
    <section id="tax-negotiation" className="py-[120px] bg-white scroll-mt-[120px]">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row-reverse items-center gap-16 lg:gap-24">
          {/* Left: Content */}
          <div className="w-full lg:w-[50%]">
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Tax Negotiation]
            </motion.span>
            
            <h2 
              className="text-[42px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Strategic Advocacy <br />
              <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
                Negotiated Results
              </span>
            </h2>

            <p className="text-[18px] leading-[1.8] text-[rgba(10,22,40,0.6)] mb-10">
              Negotiation is the heart of our service. Our Tax Specialists work directly with IRS Revenue Officers to reach the most favorable outcomes, identifying leverage and proposing strategic terms based on your unique financial profile.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              {[
                { 
                  icon: MessageSquare,
                  title: "Direct Dialogue", 
                  text: "We respond to every IRS objection and handle all adversarial meetings on your behalf." 
                },
                { 
                  icon: Target,
                  title: "Identifying Leverage", 
                  text: "We analyze IRS records to find procedural errors and financial leverage points." 
                },
                { 
                  icon: Scale,
                  title: "Proposing Terms", 
                  text: "We build mathematical cases that force the IRS to consider the best terms available." 
                },
                { 
                  icon: ShieldCheck,
                  title: "Credentialed Power", 
                  text: "Our Tax Specialists are licensed to represent you at every level of the IRS." 
                }
              ].map((item, i) => (
                <div key={i} className="flex flex-col gap-4">
                  <div className="w-10 h-10 bg-[#1d1ee3]/10 rounded-full flex items-center justify-center text-[#1d1ee3] shrink-0">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <h4 className="text-[#0a1628] font-bold text-[16px] mb-2">{item.title}</h4>
                    <p className="text-[14px] text-[rgba(10,22,40,0.5)] leading-relaxed">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="w-full lg:w-[50%] relative">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/5] rounded-[32px] overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.12)] border border-[rgba(0,0,0,0.05)]"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1632433339330-f46c673854c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGRvY3VtZW50JTIwc2lnbmF0dXJlJTIwcGVuJTIwdGF4JTIwYWdyZWVtZW50JTIwb2ZmaWNlJTIwZGVzayUyMHByb2Zlc3Npb25hbCUyMGJ1c2luZXNzbWFuJTIwY29uc3VsdGF0aW9uJTIwbWVldGluZ3xlbnwxfHx8fDE3NzM2NjExMzV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Tax Negotiation Process"
                className="w-full h-full object-cover grayscale brightness-90 hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
