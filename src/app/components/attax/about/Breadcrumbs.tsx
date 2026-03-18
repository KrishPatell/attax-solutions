import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";
import { Link } from "react-router";

export function Breadcrumbs({ current }: { current: string }) {
  return (
    <div className="flex items-center gap-2 mb-8">
      <Link 
        to="/" 
        className="text-white/40 hover:text-white transition-colors text-[14px]"
        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 400 }}
      >
        Home
      </Link>
      <ChevronRight size={14} className="text-white/20" />
      <span 
        className="text-white/80 text-[14px]"
        style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 500 }}
      >
        {current}
      </span>
    </div>
  );
}
