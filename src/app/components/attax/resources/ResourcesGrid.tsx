import { motion } from "motion/react";
import { ArrowUpRight, Clock, User } from "lucide-react";
import { ImageWithFallback } from "../../figma/ImageWithFallback";
import { Link } from "react-router";

const articles = [
  {
    slug: "irs-audit-survival-guide",
    title: "IRS Audit Survival Guide: Everything You Need to Know",
    description: "An audit doesn't have to be the end of your financial freedom. Discover the proven strategies we use to protect our clients during IRS examinations.",
    image: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800",
    date: "March 15, 2026",
    author: "Tax Specialist Team"
  },
  {
    slug: "offer-in-compromise-guide",
    title: "Understanding the Offer in Compromise (OIC)",
    description: "Learn how you can potentially settle your IRS debt for a fraction of what you owe through the OIC program and start fresh with a clean slate.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=800",
    date: "March 12, 2026",
    author: "ATTAX Resolution Center"
  },
  {
    slug: "wage-garnishment-bank-levy-guide",
    title: "How to Stop Wage Garnishments and Bank Levies",
    description: "When the IRS starts taking your paycheck or freezing your assets, you need immediate action. We outline the steps to halt collection activities fast.",
    image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&q=80&w=800",
    date: "March 10, 2026",
    author: "Strategic Advocacy Team"
  },
  {
    slug: "tax-debt-relief-scams",
    title: "The Truth About Tax Debt Relief Scams",
    description: "Protect yourself from predatory companies that make false promises. We show you how to identify legitimate, professional tax representation.",
    image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&auto=format&fit=crop&q=80",
    date: "March 05, 2026",
    author: "Compliance Department"
  },
  {
    slug: "penalty-abatement-guide",
    title: "IRS Penalty Abatement: How to Get Your Penalties Removed",
    description: "Failure-to-file and failure-to-pay penalties can double your balance. Learn how First-Time Abatement and reasonable cause relief can eliminate them.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=800&auto=format&fit=crop&q=80",
    date: "March 20, 2026",
    author: "Tax Specialist Team"
  },
  {
    slug: "installment-agreement-guide",
    title: "IRS Installment Agreements: Your Complete Guide to Monthly Payments",
    description: "Can't pay your tax debt in full? An installment agreement stops collection action and gives you a manageable path to resolution — if structured correctly.",
    image: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&auto=format&fit=crop&q=80",
    date: "March 18, 2026",
    author: "Tax Specialist Team"
  },
  {
    slug: "tax-lien-guide",
    title: "IRS Tax Liens Explained: How to Protect Your Credit and Property",
    description: "A federal tax lien can block a home sale, damage your credit, and follow you for years. Understand your options for release, withdrawal, and discharge.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    date: "March 22, 2026",
    author: "Tax Specialist Team"
  }
];

export function ResourcesGrid() {
  return (
    <section className="py-[60px] md:py-[120px] bg-[#f7f9ff]">
      <div className="max-w-[1200px] mx-auto">
        <div className="flex items-end justify-between mb-8 md:mb-16">
          <motion.h2
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[32px] md:text-[42px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Popular <br />
            <span className="italic font-normal" style={{ fontFamily: "'Playfair Display', serif" }}>
              Insights
            </span>
          </motion.h2>

          <div className="hidden sm:block">
            <span className="text-[rgba(10,22,40,0.5)] text-[14px] uppercase tracking-widest font-bold">
              Explore All
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-10">
          {articles.map((article, idx) => (
            <Link
              key={idx}
              to={`/resources/${article.slug}`}
              className="group flex flex-col h-full bg-white rounded-[24px] overflow-hidden hover:shadow-[0_24px_48px_rgba(29,30,227,0.06)] transition-all duration-300 border border-[rgba(0,0,0,0.04)]"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <ImageWithFallback
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="flex-1 p-5 md:p-8 flex flex-col">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-[rgba(10,22,40,0.4)] text-[11px] mb-4 font-semibold uppercase tracking-wider">
                  <span className="flex items-center gap-1.5"><Clock size={12} /> {article.date}</span>
                  <span className="flex items-center gap-1.5"><User size={12} /> {article.author}</span>
                </div>

                <h3 className="text-[24px] md:text-[24px] lg:text-[28px] leading-[1.3] text-[#0a1628] font-medium mb-3 group-hover:text-[#1d1ee3] transition-colors">
                  {article.title}
                </h3>

                <p className="text-[rgba(10,22,40,0.6)] text-[14px] md:text-[15px] leading-[1.6] mb-6 flex-1">
                  {article.description}
                </p>

                <div className="flex items-center justify-between mt-auto">
                  <span className="flex items-center gap-2 text-[#1d1ee3] font-semibold text-[14px]">
                    Read More
                    <ArrowUpRight size={16} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
