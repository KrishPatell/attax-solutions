import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ArrowRight, BadgeCheck, Star } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

const bannerImg = "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=1200";

export function AttaxCtaBanner() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const bookingUrl = "https://calendly.com/attax-solutions";

  return (
    null
  );
}
