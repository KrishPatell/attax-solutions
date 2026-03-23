import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function Breadcrumbs({ current, light }: { current: string; light?: boolean }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Link
        to="/"
        className={`transition-colors text-[14px] ${light ? "text-[#03030f]/40 hover:text-[#03030f]" : "text-white/40 hover:text-white"}`}
        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
      >
        Home
      </Link>
      <ChevronRight size={14} className={light ? "text-[#03030f]/20" : "text-white/20"} />
      <span
        className={`text-[14px] ${light ? "text-[#1d1ee3]" : "text-white/80"}`}
        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
      >
        {current}
      </span>
    </div>
  );
}
