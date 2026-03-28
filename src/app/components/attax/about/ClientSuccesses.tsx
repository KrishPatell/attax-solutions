import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

const successStories = [
  {
    tag: "OFFER IN COMPROMISE",
    tagColor: "#0d9488",
    tagBg: "#f0fdfa",
    title: "Saved $84,500: OIC Accepted After IRS Rejected First Attempt",
    excerpt: "A self-employed contractor owed $97,200 in back taxes. After a rejected OIC, our Tax Specialists restructured the offer with updated financials and secured full acceptance at $12,700.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    date: "Mar 10, 2026",
    readTime: "4 MIN READ",
    saved: "$84,500",
  },
  {
    tag: "WAGE GARNISHMENT",
    tagColor: "#b45309",
    tagBg: "#fffbeb",
    title: "IRS Wage Garnishment Released in 72 Hours",
    excerpt: "A nurse in California had 35% of her paycheck seized by the IRS. We filed an emergency release, negotiated a payment plan, and stopped the garnishment within three business days.",
    image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    date: "Feb 28, 2026",
    readTime: "3 MIN READ",
    saved: "$51,000",
  },
  {
    tag: "PENALTY ABATEMENT",
    tagColor: "#7c3aed",
    tagBg: "#f5f3ff",
    title: "$31,200 in IRS Penalties Fully Waived",
    excerpt: "A small restaurant owner was hit with $31,200 in failure-to-deposit penalties after a bookkeeping error. We submitted a first-time penalty abatement and got every dollar waived.",
    image: "https://images.unsplash.com/photo-1578574577315-3fbeb0cecdc2?auto=format&fit=crop&q=80&w=800",
    date: "Feb 18, 2026",
    readTime: "4 MIN READ",
    saved: "$31,200",
  },
  {
    tag: "TAX RELIEF",
    tagColor: "#1d1ee3",
    tagBg: "#eef2ff",
    title: "Back Taxes Reduced from $210K to $42K",
    excerpt: "A business owner in Texas faced $210,000 in accumulated payroll tax debt. Through an installment agreement restructure and partial payment OIC, we settled the case for $42,000.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    date: "Feb 6, 2026",
    readTime: "5 MIN READ",
    saved: "$168,000",
  },
  {
    tag: "IRS LIEN",
    tagColor: "#dc2626",
    tagBg: "#fef2f2",
    title: "Federal Tax Lien Released: Home Sale Saved",
    excerpt: "A homeowner in Arizona discovered an IRS lien days before closing on their home sale. We secured a lien discharge in under 10 days, allowing the transaction to proceed.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    date: "Jan 27, 2026",
    readTime: "4 MIN READ",
    saved: "$29,400",
  },
  {
    tag: "CURRENTLY NOT COLLECTIBLE",
    tagColor: "#0891b2",
    tagBg: "#ecfeff",
    title: "Currently Not Collectible Status Secured: Collections Halted",
    excerpt: "A disabled veteran on a fixed income was unable to pay $44,800 in IRS debt. We documented his financial hardship and secured CNC status, stopping all collection activity.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    date: "Jan 15, 2026",
    readTime: "3 MIN READ",
    saved: "$44,800",
  },
  {
    tag: "AUDIT DEFENSE",
    tagColor: "#059669",
    tagBg: "#ecfdf5",
    title: "IRS Audit Closed: Zero Additional Tax Owed",
    excerpt: "A freelance designer received a CP2000 notice claiming $38,000 in unreported income. Our Tax Specialists documented every deduction and resolved the audit with no additional liability.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800",
    date: "Jan 3, 2026",
    readTime: "5 MIN READ",
    saved: "$38,000",
  },
  {
    tag: "INSTALLMENT AGREEMENT",
    tagColor: "#9333ea",
    tagBg: "#faf5ff",
    title: "Manageable Payment Plan: $290/mo on $118K Debt",
    excerpt: "A retail shop owner owed $118,000 across four years of payroll taxes. We negotiated a structured installment agreement bringing monthly payments down to $290, keeping his business open.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    date: "Dec 20, 2025",
    readTime: "4 MIN READ",
    saved: "$60,000+",
  },
];

// Duplicate array for seamless infinite scroll
const doubled = [...successStories, ...successStories];

function SuccessCard({ story }: { story: (typeof successStories)[0] }) {
  return (
    <div className="flex-shrink-0 w-[65vw] md:w-[360px] bg-white rounded-[20px] overflow-hidden border border-[#eaeaff] hover:shadow-xl transition-shadow duration-300 group">
      {/* Image */}
      <div className="relative h-[200px] overflow-hidden">
        <img
          src={story.image}
          alt={story.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        {/* Saved badge */}
        <div className="absolute top-4 right-4 bg-[#0a1628]/90 backdrop-blur-sm text-white text-[13px] font-bold px-3 py-1.5 rounded-full" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
          Saved {story.saved}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Tag */}
        <span
          className="inline-block text-[11px] font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4"
          style={{
            color: story.tagColor,
            backgroundColor: story.tagBg,
            fontFamily: "'Inter Tight', sans-serif",
          }}
        >
          {story.tag}
        </span>

        {/* Title */}
        <h3
          className="text-[17px] text-[#0a1628] leading-[1.45] mb-3 line-clamp-2"
          style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
        >
          {story.title}
        </h3>

        {/* Excerpt */}
        <p
          className="text-[14px] text-[#0a1628]/55 leading-[1.6] mb-5 line-clamp-3"
          style={{ fontFamily: "'Inter Tight', sans-serif" }}
        >
          {story.excerpt}
        </p>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-[#eaeaff]">
          <div className="flex items-center gap-3 text-[12px] text-[#0a1628]/40" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            <span>{story.date}</span>
            <span>·</span>
            <span>{story.readTime}</span>
          </div>
          <div className="w-8 h-8 rounded-full bg-[#1d1ee3] flex items-center justify-center group-hover:bg-[#1618c7] transition-colors">
            <ArrowUpRight size={15} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function ClientSuccesses() {
  return (
    <section id="client-successes" className="bg-white py-[60px] md:py-[120px] overflow-hidden">
      {/* Header */}
      <div className="max-w-[1200px] mx-auto px-5 md:px-0 mb-12 md:mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-[#1d1ee3] text-[14px] uppercase tracking-widest font-bold block mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              [Client Successes]
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.05 }}
              className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.15] text-[#0a1628]"
              style={{ fontFamily: "'Inter Tight', sans-serif", fontWeight: 600 }}
            >
              Real Results.{" "}
              <span
                className="italic font-normal"
                style={{ fontFamily: "'Playfair Display', serif" }}
              >
                Real People.
              </span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[15px] text-[#0a1628]/55 leading-[1.7] max-w-[360px] md:text-right"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Every case is different. These are real outcomes secured by our Tax Specialists for clients across all 50 states.
          </motion.p>
        </div>
      </div>

      {/* Infinite scroll track */}
      <div className="relative">
  
        <div className="flex gap-5 animate-scroll-left" style={{ width: "max-content" }}>
          {doubled.map((story, i) => (
            <SuccessCard key={i} story={story} />
          ))}
        </div>
      </div>

      {/* Inject scroll animation via style tag */}
      <style>{`
        @keyframes scrollLeft {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-left {
          animation: scrollLeft 48s linear infinite;
        }
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
