import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AttaxTestimonialCard } from "./AttaxTestimonialCard";

const photoUrls = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=facearea&facepad=2&q=80&w=200",
  "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=facearea&facepad=2&q=80&w=200",
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&q=80&w=200",
  "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=facearea&facepad=2&q=80&w=200",
];

const testimonials = [
  {
    name: "Michael T.",
    location: "Orange County, CA",
    stars: 5,
    result: "Penalty abatement: $31K reduced to $0",
    quote:
      "I had significant back taxes and hadn't filed in years. The ATTAX team got me current, stopped the levy on my bank account, and settled the entire liability. I don't say this lightly   they changed my life.",
  },
  {
    name: "Sandra R.",
    location: "Riverside, CA",
    stars: 5,
    result: "$110K tax debt resolved for $8,900",
    quote:
      "When the IRS started garnishing my wages I panicked. ATTAX had the garnishment released within three days and put me on a manageable payment plan. Their professionalism and speed were unlike anything I expected.",
  },
  {
    name: "David & Linda K.",
    location: "Irvine, CA",
    stars: 5,
    result: "Installment plan secured at $180/month",
    quote:
      "We owed the IRS a substantial amount. ATTAX prepared and negotiated an Offer in Compromise   we settled for a fraction of what was owed. Every step of the process was explained clearly, and we always knew where things stood. Highly recommend.",
  },
  {
    name: "Patricia M.",
    location: "San Diego, CA",
    stars: 5,
    result: "Innocent Spouse Relief granted in full",
    quote:
      "I was held responsible for my ex-husband's tax debt and had no idea what to do. ATTAX walked me through the Innocent Spouse Relief process and got me completely cleared. I am so grateful for their patience and expertise.",
  },
];

// Triple the cards for a seamless infinite loop
const loopCards = [...testimonials, ...testimonials, ...testimonials];

export function AttaxResults() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="results" className="bg-[#f7f9ff] py-[60px] md:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-10 md:mb-16 gap-4 md:gap-0"
        >
          <div>
            <span
              className="text-[#1d1ee3] text-[14px] md:text-[16px] block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [Client Results]
            </span>
            <h2
              className="text-[32px] md:text-[36px] lg:text-[52px] leading-[1.15] text-[#03030F] md:whitespace-nowrap"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              Real Outcomes.{" "}
              <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
                Real Clients.
              </span>
            </h2>
          </div>
          <p
            className="text-[16px] leading-[1.6] text-[rgba(10,22,40,0.6)] max-w-[360px] hidden lg:block"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
          >
            These are not typical results   but they are real ones. Every case is unique. Every outcome is earned.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll strip */}
      <div className="overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-33.333%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          className="flex gap-5"
          style={{ width: "max-content" }}
        >
          {loopCards.map((card, i) => (
            <div key={i} className="w-[360px] md:w-[420px] shrink-0">
              <AttaxTestimonialCard
                name={card.name}
                title={card.location}
                quote={card.quote}
                photo={photoUrls[i % photoUrls.length]}
                stars={card.stars}
                result={card.result}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
