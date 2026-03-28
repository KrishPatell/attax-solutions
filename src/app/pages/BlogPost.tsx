import { useParams, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { ImageWithFallback } from "../components/figma/ImageWithFallback";
import { blogPosts } from "../components/attax/resources/data";
import {
  heroFallbackForSlug,
  interstitialFallbackForSlug,
  quoteAvatarFallback,
} from "../components/attax/resources/blogImageFallbacks";
import { useEffect, useMemo } from "react";
import { ArrowLeft, Clock, User, ArrowUpRight } from "lucide-react";
import { DEFAULT_OG_IMAGE, usePageSeo, type PageSeoConfig } from "../lib/pageSeo";

const RELATED_TAX_GUIDES: { title: string; slug: string; img: string; date: string }[] = [
  {
    title: "What to Do If You Owe the IRS (Unfiled Returns)",
    slug: "what-to-do-owe-irs-money",
    img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "IRS Audit Survival: Documentation & Defense",
    slug: "irs-audit-survival-guide",
    img: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "Offer in Compromise: Settle IRS Debt for Less",
    slug: "offer-in-compromise-guide",
    img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "Stop Wage Garnishments & Bank Levies",
    slug: "wage-garnishment-bank-levy-guide",
    img: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "Tax Debt Relief Scams: What to Watch For",
    slug: "tax-debt-relief-scams",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "IRS Penalty Abatement & First-Time Relief",
    slug: "penalty-abatement-guide",
    img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "Installment Agreements & Monthly IRS Payments",
    slug: "installment-agreement-guide",
    img: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
  {
    title: "Federal Tax Liens: Release, Withdrawal & Your Options",
    slug: "tax-lien-guide",
    img: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=800",
    date: "Mar 2026",
  },
];

export default function BlogPost() {
  const { slug } = useParams();
  const location = useLocation();
  const blog = blogPosts[slug || ""];

  const seo = useMemo((): PageSeoConfig => {
    if (blog) {
      const desc =
        blog.overview.length > 158 ? `${blog.overview.slice(0, 155).trimEnd()}…` : blog.overview;
      const og = blog.featuredImage.startsWith("http") ? blog.featuredImage : DEFAULT_OG_IMAGE;
      return {
        title: `${blog.title} | ATTAX Solutions`,
        description: desc,
        path: `/resources/${blog.slug}`,
        ogImage: og,
        ogType: "article",
        article: {
          publishedTime: "2026-03-01T12:00:00.000Z",
          modifiedTime: "2026-03-28T12:00:00.000Z",
          section: blog.category,
        },
        breadcrumbs: [
          { name: "Home", path: "/" },
          { name: "Resources", path: "/resources" },
          { name: blog.title, path: `/resources/${blog.slug}` },
        ],
      };
    }
    return {
      title: "Article Not Found | ATTAX Solutions",
      description:
        "This tax guide could not be found. Browse the ATTAX resource library for IRS debt relief articles and tools.",
      path: location.pathname || "/resources",
      noindex: true,
      breadcrumbs: [
        { name: "Home", path: "/" },
        { name: "Resources", path: "/resources" },
        { name: "Not found", path: location.pathname },
      ],
    };
  }, [blog, location.pathname]);

  usePageSeo(seo);

  const relatedGuides = useMemo(
    () => RELATED_TAX_GUIDES.filter((g) => g.slug !== slug).slice(0, 4),
    [slug]
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!blog) {
    return (
      <div className="w-full min-h-screen flex flex-col bg-white">
        <AttaxNavbar />
        <div className="flex-1 flex items-center justify-center px-6 pt-28 pb-20">
          <div className="text-center max-w-md">
            <h1
              className="text-[28px] md:text-[34px] font-semibold text-[#0a1628] mb-4"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              Article not found
            </h1>
            <p className="text-[#0a1628]/60 mb-8 text-[15px]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
              That guide may have moved. Explore the resource library or contact us for help.
            </p>
            <Link
              to="/resources"
              className="text-[#1d1ee3] hover:underline inline-flex items-center gap-2 justify-center font-medium"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              <ArrowLeft size={18} /> Back to Resources
            </Link>
          </div>
        </div>
        <AttaxFooter />
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <AttaxNavbar />

      <main className="pt-[140px] pb-[100px]">
        {/* Blog Header + article — px-5 on mobile aligns with navbar / site chrome */}
        <div className="max-w-[1440px] mx-auto px-5 md:px-0">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center text-center mb-12"
          >
            <Link to="/resources" className="text-[12px] uppercase tracking-widest font-bold text-[#1d1ee3] mb-6 hover:opacity-70 transition-opacity">
              {blog.category}
            </Link>
            <h1 
              className="text-[40px] md:text-[56px] lg:text-[72px] leading-[1.1] text-[#0a1628] font-medium max-w-[900px] mb-8"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              {blog.title}
            </h1>

            {/* Meta bar */}
            <div className="flex flex-wrap items-center justify-center gap-6 mb-12 text-[14px] text-[rgba(10,22,40,0.5)] font-medium">
              <div className="flex items-center gap-2">
                <User size={16} className="text-[#1d1ee3]" />
                <span>By {blog.quote.author}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-[#1d1ee3]" />
                <span>{blog.readTime ?? "12 min read"}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1d1ee3]" />
                <span>Updated March 2026</span>
              </div>
            </div>
            
            {/* Featured Image */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="w-full aspect-[16/9] md:aspect-[21/9] rounded-[24px] overflow-hidden mb-20 shadow-[0_40px_100px_rgba(0,0,0,0.08)]"
            >
              <ImageWithFallback
                src={blog.featuredImage}
                fallbackSrc={heroFallbackForSlug(blog.slug)}
                alt={blog.title}
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* Blog Content */}
          <div className="max-w-[800px] mx-auto">
            <div
              className="prose prose-slate max-w-none
              [&_blockquote]:my-8 [&_blockquote]:border-l-4 [&_blockquote]:border-[#1d1ee3] [&_blockquote]:border-t-0 [&_blockquote]:border-r-0 [&_blockquote]:border-b-0 [&_blockquote]:bg-[#f0f4ff] [&_blockquote]:rounded-[16px] [&_blockquote]:py-6 [&_blockquote]:px-6 [&_blockquote]:not-italic
              [&_blockquote_p]:text-[16px] [&_blockquote_p]:md:text-[17px] [&_blockquote_p]:leading-[1.65] [&_blockquote_p]:text-[#0a1628] [&_blockquote_p]:font-normal [&_blockquote_p]:mb-0"
              style={{ fontFamily: "'Inter Tight', sans-serif" }}
            >
              <section className="mb-16">
                <h2 className="text-[28px] font-semibold text-[#0a1628] mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Overview
                </h2>
                <p className="text-[18px] leading-[1.8] text-[rgba(10,22,40,0.7)]">
                  {blog.overview}
                </p>
              </section>

              <section className="mb-16">
                <h2 className="text-[28px] font-semibold text-[#0a1628] mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  What You Can Expect:
                </h2>
                <ul className="space-y-4 list-disc pl-6">
                  {blog.expectations.map((item, idx) => (
                    <li key={idx} className="text-[18px] leading-[1.6] text-[rgba(10,22,40,0.7)]">
                      {item}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Quote Block */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-[#f0f4ff] border-l-4 border-[#1d1ee3] p-6 md:p-8 rounded-[20px] mb-16 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1d1ee3]/5 rounded-full -mr-16 -mt-16" />
                <p
                  className="text-[16px] md:text-[17px] leading-[1.65] text-[#0a1628] font-normal not-italic mb-6 relative z-10"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  &ldquo;{blog.quote.text}&rdquo;
                </p>
                <div className="flex items-center gap-4 relative z-10">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shadow-sm">
                    <ImageWithFallback
                      src={blog.quote.avatar}
                      fallbackSrc={quoteAvatarFallback}
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="font-bold text-[#0a1628]">{blog.quote.author}</p>
                    <p className="text-[14px] text-[rgba(10,22,40,0.6)]">{blog.quote.role}</p>
                  </div>
                </div>
              </motion.div>

              {/* Sub-sections */}
              {blog.sections.map((section, idx) => (
                <section key={idx} className="mb-16">
                  <h2 className="text-[28px] font-semibold text-[#0a1628] mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                    {section.title}
                  </h2>
                  <p className="text-[18px] leading-[1.8] text-[rgba(10,22,40,0.7)]">
                    {section.content}
                  </p>
                </section>
              ))}

              {/* Interstitial Image */}
              {blog.interstitialImage && (
                <div className="w-full aspect-[16/9] rounded-[24px] overflow-hidden mb-16 shadow-lg">
                  <ImageWithFallback
                    src={blog.interstitialImage}
                    fallbackSrc={interstitialFallbackForSlug(blog.slug)}
                    alt="Process context"
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <section className="mb-16">
                <h2 className="text-[28px] font-semibold text-[#0a1628] mb-6" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                  Final Thoughts
                </h2>
                <p className="text-[18px] leading-[1.8] text-[rgba(10,22,40,0.7)]">
                  {blog.finalThoughts}
                </p>
              </section>
            </div>
          </div>
        </div>

        {/* Related Posts Section (Strategic Insights) */}
        <section className="pt-[100px] border-t border-[rgba(0,0,0,0.05)] bg-[#f9faff]">
          <div className="max-w-[1200px] mx-auto px-5 md:px-0">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between items-start justify-start mb-10 md:mb-16 gap-6">
              <h2 className="text-[40px] lg:text-[52px] leading-[1.1] text-[#0a1628] font-medium text-left" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                Strategic Insights That <br className="hidden sm:block" />
                Drive Business Success
              </h2>
              <Link
                to="/resources"
                className="self-start md:self-auto shrink-0 bg-[#1d1ee3] text-white rounded-[50px] pl-5 pr-1.5 py-1.5 inline-flex items-center gap-5 font-semibold group transition-transform hover:scale-[1.03] active:scale-[0.98]"
                style={{ fontFamily: "'Inter Tight', sans-serif" }}
              >
                View All Hubs
                <span className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center group-hover:rotate-45 transition-transform">
                  <ArrowUpRight size={18} />
                </span>
              </Link>
            </div>

            {/* Reading path timeline — mobile / tablet (compact horizontal) */}
            <div className="flex lg:hidden items-center gap-1 overflow-x-auto pb-3 mb-8 -mx-1 px-1 [scrollbar-width:thin]" aria-label="Suggested reading order">
              {relatedGuides.map((item, i) => (
                <div key={`m-step-${item.slug}`} className="flex items-center shrink-0">
                  <div className="flex flex-col items-center gap-1 w-[52px]">
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#1d1ee3] bg-white text-[11px] font-bold tabular-nums text-[#1d1ee3]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[9px] uppercase tracking-wider font-bold text-[#0a1628]/35 text-center leading-none" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {item.date}
                    </span>
                  </div>
                  {i < relatedGuides.length - 1 && <div className="h-0.5 w-6 shrink-0 bg-[#1d1ee3]/20 self-start mt-4" />}
                </div>
              ))}
            </div>

            {/* Reading path timeline — lg+ */}
            <ol className="hidden lg:flex list-none items-center gap-0 mb-10 p-0 m-0" aria-label="Suggested reading order">
              {relatedGuides.map((item, i) => (
                <li key={`step-${item.slug}`} className="flex flex-1 min-w-0 items-center">
                  <div className="flex flex-col items-center gap-1.5 shrink-0 w-full max-w-[76px] mx-auto">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-[#1d1ee3] bg-white text-[12px] font-bold tabular-nums text-[#1d1ee3]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-[10px] uppercase tracking-widest font-bold text-[#0a1628]/40 text-center leading-tight px-0.5" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      {item.date}
                    </span>
                  </div>
                  {i < relatedGuides.length - 1 && <div className="h-0.5 flex-1 bg-[#1d1ee3]/20 min-w-[8px] self-start mt-[18px]" />}
                </li>
              ))}
            </ol>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5">
              {relatedGuides.map((item, i) => (
                <motion.div
                  key={item.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="group relative"
                >
                  <Link to={`/resources/${item.slug}`} className="block">
                    <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden mb-4">
                      <div className="absolute left-3 top-3 z-[1] flex items-center gap-2 rounded-full bg-white/95 px-2.5 py-1 text-[11px] font-bold uppercase tracking-wider text-[#0a1628]/70 shadow-sm border border-[rgba(10,22,40,0.06)]" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                        <span className="tabular-nums text-[#1d1ee3]">{String(i + 1).padStart(2, "0")}</span>
                        <span className="text-[#0a1628]/35">·</span>
                        <Clock className="w-3 h-3 text-[#1d1ee3]" aria-hidden />
                        <span>{item.date}</span>
                      </div>
                      <ImageWithFallback
                        src={item.img}
                        fallbackSrc={heroFallbackForSlug(item.slug)}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <h4
                      className="text-[18px] leading-[1.4] text-[#0a1628] font-semibold mb-3 group-hover:text-[#1d1ee3] transition-colors text-left"
                      style={{ fontFamily: "'Inter Tight', sans-serif" }}
                    >
                      {item.title}
                    </h4>
                    <span className="inline-flex items-center gap-2 text-[#1d1ee3] text-[14px] font-bold text-left" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
                      Read More{" "}
                      <span className="w-6 h-6 bg-[#1d1ee3] rounded-full flex items-center justify-center text-white">
                        <ArrowUpRight size={12} />
                      </span>
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <AttaxFooter />
    </div>
  );
}
