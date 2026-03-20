import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { AttaxTestimonialCard } from "./attax/AttaxTestimonialCard";
import imgT1 from "figma:asset/bc6a7a1306da93ce34aa938d57759426b2b7a26f.png";
import imgT2 from "figma:asset/21f9aa116909b08a1de80d5b15bc21a94d62f0af.png";
import imgT3 from "figma:asset/16120a5996bd31397da968ddad2c4df1e4f7cc78.png";
import imgT4 from "figma:asset/48d2c073953fc45c457688960559029f37c71960.png";

const testimonials = [
  {
    photo: imgT1,
    name: "Marcus Chen",
    title: "CEO, Orion Tech",
    stars: 5,
    quote:
      "Optimo transformed how we approach strategy. Their team didn't just consult they became true partners in our growth. We saw a 40% operational improvement in just 6 months.",
  },
  {
    photo: imgT2,
    name: "Daniel Rivera",
    title: "COO, Apex Manufacturing",
    stars: 5,
    quote:
      "The depth of expertise and genuine commitment Optimo brings is remarkable. They helped us scale operations without losing quality, and the results speak for themselves.",
  },
  {
    photo: imgT3,
    name: "Tyler Brooks",
    title: "Founder, NovaPay",
    stars: 5,
    quote:
      "Working with Optimo was a turning point. Their strategic clarity and execution support helped us expand into 3 new markets faster than we ever thought possible.",
  },
  {
    photo: imgT4,
    name: "James Whitfield",
    title: "Director, MedCore Group",
    stars: 5,
    quote:
      "From risk frameworks to compliance alignment, Optimo delivered everything with precision. I can't imagine navigating our growth without their guidance.",
  },
];

export function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const go = (dir: number) => {
    setDirection(dir);
    setCurrent((prev) => (prev + dir + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(() => go(1), 5000);
    return () => clearInterval(timer);
  }, [current]);

  const t = testimonials[current];

  return (
    <section className="bg-[#eaeaff] py-[120px]" ref={ref}>
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <h2
            className="text-[52px] leading-[1.2] text-[#03030f]"
            style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
          >
            What Our{" "}
            <span style={{ fontFamily: "'Playfair Display', serif", fontStyle: "italic" }}>
              Clients
            </span>{" "}
            Say
          </h2>
        </motion.div>

        {/* Testimonial card */}
        <div className="relative flex items-center gap-6">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => go(-1)}
            className="w-[52px] h-[52px] rounded-full bg-white flex items-center justify-center hover:bg-[#1d1ee3] hover:text-white transition-colors duration-200 shadow-md shrink-0 group"
          >
            <ChevronLeft size={22} className="text-[#03030f] group-hover:text-white transition-colors" />
          </motion.button>

          <div className="flex-1 overflow-hidden px-4">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={{
                  enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
                  center: { x: 0, opacity: 1 },
                  exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
                }}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.45, ease: "easeInOut" }}
                className="max-w-[500px] mx-auto"
              >
                <AttaxTestimonialCard
                  quote={t.quote}
                  name={t.name}
                  title={t.title}
                  photo={t.photo}
                  stars={t.stars}
                />
              </motion.div>
            </AnimatePresence>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => go(1)}
            className="w-[52px] h-[52px] rounded-full bg-[#1d1ee3] flex items-center justify-center hover:bg-[#1618c7] transition-colors duration-200 shrink-0"
          >
            <ChevronRight size={22} className="text-white" />
          </motion.button>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i); }}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-[#1d1ee3]" : "w-2 bg-[rgba(0,0,0,0.2)]"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
