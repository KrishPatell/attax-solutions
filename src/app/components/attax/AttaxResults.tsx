import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AttaxTestimonialCard } from "./AttaxTestimonialCard";

const resultsImg = "https://images.unsplash.com/photo-1589330694653-ded6df03f754?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkb2N1bWVudCUyMHNpZ25pbmclMjByZXNvbHV0aW9uJTIwc3VjY2VzcyUyMGFncmVlbWVudHxlbnwxfHx8fDE3NzM0ODg2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080";

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

const outcomes = [
  { value: "99%", label: "Client Success Rate" },
  { value: "500+", label: "Cases Closed" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "15+", label: "Years Experience" },
];

export function AttaxResults() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    // Disabled auto-play on mobile as requested
    // const t = setInterval(() => go(1), 6000);
    // return () => clearInterval(t);
  }, [current]);

  const t = testimonials[current];

  return (
    <section id="results" className="bg-[#f7f9ff] py-[60px] md:py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-5 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex items-end justify-between mb-16"
        >
          <div>
            <span
              className="text-[#1d1ee3] text-[16px] block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
            >
              [Client Results]
            </span>
            <h2
              className="text-[32px] lg:text-[52px] leading-[1.15] text-[#03030F]"
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

        {/* Outcomes stats */}
        

        {/* Testimonial carousel */}
        <div className="flex gap-6 items-stretch">
          {/* Image panel */}
          

          {/* Carousel */}
          <div className="flex-1">
            <div className="relative flex flex-col gap-6">
              {/* 3-card grid */}
              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={{
                    enter: (d: number) => ({ x: d > 0 ? 120 : -120, opacity: 0 }),
                    center: { x: 0, opacity: 1 },
                    exit: (d: number) => ({ x: d > 0 ? -120 : 120, opacity: 0 }),
                  }}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease: "easeInOut" }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-5"
                >
                  {[0, 1, 2].map((offset) => {
                    const photoUrls = [
                      "https://images.unsplash.com/photo-1651684215020-f7a5b6610f23?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoZWFkc2hvdCUyMHNtaWxpbmd8ZW58MXx8fHwxNzczNDczODc5fDA&ixlib=rb-4.1.0&q=80&w=200",
                      "https://images.unsplash.com/photo-1773336099065-57893268749f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90JTIwc21pbGluZ3xlbnwxfHx8fDE3NzM0MzI0NjV8MA&ixlib=rb-4.1.0&q=80&w=200",
                      "https://images.unsplash.com/photo-1771924367247-3ea9ec09a258?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBhZ2VkJTIwY291cGxlJTIwcG9ydHJhaXQlMjBzbWlsaW5nfGVufDF8fHx8MTc3MzQ5NTIwM3ww&ixlib=rb-4.1.0&q=80&w=200",
                    ];
                    const idx = (current + offset) % testimonials.length;
                    const card = testimonials[idx];
                    const isActive = offset === 0;
                    return (
                      <div
                        key={idx}
                        className={`transition-all duration-300 ${offset > 0 ? 'hidden md:block' : 'block'} ${
                          isActive
                            ? "opacity-100 scale-100"
                            : "opacity-40 scale-95 pointer-events-none"
                        }`}
                      >
                        <AttaxTestimonialCard
                          name={card.name}
                          title={card.location}
                          quote={card.quote}
                          photo={photoUrls[idx]}
                          stars={card.stars}
                          result={card.result}
                        />
                      </div>
                    );
                  })}
                </motion.div>
              </AnimatePresence>

              {/* Navigation row */}
              <div className="flex items-center justify-between pt-2">
                {/* Dots */}
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
                      className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#1d1ee3]" : "w-2 bg-[rgba(0,0,0,0.15)]"}`}
                    />
                  ))}
                </div>

                {/* Arrow buttons */}
                <div className="flex gap-3">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => go(-1)}
                    className="w-11 h-11 rounded-full bg-white border border-[#eaeeff] flex items-center justify-center hover:bg-[#1d1ee3] hover:border-[#1d1ee3] transition-colors group"
                  >
                    <ChevronLeft size={18} className="text-[#0a1628] group-hover:text-white transition-colors" />
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => go(1)}
                    className="w-11 h-11 rounded-full bg-[#1d1ee3] flex items-center justify-center hover:bg-[#1618c7] transition-colors"
                  >
                    <ChevronRight size={18} className="text-white" />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}