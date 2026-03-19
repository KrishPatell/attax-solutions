import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { AttaxTestimonialCard } from "./AttaxTestimonialCard";

const photoUrls = [
  "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczNDczODc5fDA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1773336099065-57893268749f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwc21pbGluZ3xlbnwxfHx8fDE3NzM0MzI0NjV8MA&ixlib=rb-4.1.0&q=80&w=200",
  "https://images.unsplash.com/photo-1771924367247-3ea9ec09a258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwY291cGxlJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3MzQ5NTIwM3ww&ixlib=rb-4.1.0&q=80&w=200",
];

const testimonials = [
  {
    name: "Michael T.",
    location: "Orange County, CA",
    stars: 5,
    result: "Tax liability resolved through negotiation",
    quote:
      "I had significant back taxes and hadn't filed in years. The ATTAX team got me current, stopped the levy on my bank account, and settled the entire liability. I don't say this lightly — they changed my life.",
  },
  {
    name: "Sandra R.",
    location: "Riverside, CA",
    stars: 5,
    result: "Wage garnishment released in 72 hours",
    quote:
      "When the IRS started garnishing my wages I panicked. ATTAX had the garnishment released within three days and put me on a manageable payment plan. Their professionalism and speed were unlike anything I expected.",
  },
  {
    name: "David & Linda K.",
    location: "Irvine, CA",
    stars: 5,
    result: "Offer in Compromise successfully settled",
    quote:
      "We owed the IRS a substantial amount. ATTAX prepared and negotiated an Offer in Compromise — we settled for a fraction of what was owed. Every step of the process was explained clearly, and we always knew where things stood. Highly recommend.",
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
            These are not typical results — but they are real ones. Every case is unique. Every outcome is earned.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll strip — full width, no padding clipping */}
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
