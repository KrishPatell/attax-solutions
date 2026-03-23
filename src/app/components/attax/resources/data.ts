export interface BlogPostData {
  slug: string;
  category: string;
  title: string;
  featuredImage: string;
  overview: string;
  expectations: string[];
  quote: {
    text: string;
    author: string;
    role: string;
    avatar: string;
  };
  sections: {
    title: string;
    content: string;
  }[];
  interstitialImage?: string;
  finalThoughts: string;
}

export const blogPosts: Record<string, BlogPostData> = {
  "irs-audit-survival-guide": {
    slug: "irs-audit-survival-guide",
    category: "Audit Insight",
    title: "The Ultimate Hub for IRS Audit Survival Strategies",
    featuredImage: "https://images.unsplash.com/photo-1554224155-1696413575b8?w=1200&auto=format&fit=crop&q=80",
    overview: "Welcome to ATTAX Insights, a platform dedicated to helping taxpayers navigate, plan, and address tax audits with confidence. Backed by professional tax specialization, our Hub provides a comprehensive framework to understand, prepare, and resolve your audit challenges.",
    expectations: [
      "Strategic insights into federal and state audit processes.",
      "Actionable toolkits for documentation and response management.",
      "Clear timelines and expectations for every stage of an examination.",
      "A focus on achieving the most favorable legal outcome possible."
    ],
    quote: {
      text: "An audit is not a verdict; it's a process. With the right strategy and direct advocacy, we turn a period of uncertainty into a clear path toward resolution and financial closure.",
      author: "Omar S.",
      role: "Principal Tax Specialist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    sections: [
      {
        title: "Audit Triggers & Compliance",
        content: "Understanding why you were selected for an audit is the first step. From statistical anomalies to high-risk deductions, we break down the IRS selection criteria to help you build a proactive defense strategy."
      },
      {
        title: "The Documentation Framework",
        content: "Success in an audit is built on a foundation of solid evidence. We provide guidance on organizing records, reconstructive accounting, and how to present documentation in a way that aligns with IRS standards."
      }
    ],
    interstitialImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000",
    finalThoughts: "At ATTAX Solutions, we believe that every taxpayer deserves professional, direct, and effective representation. Whether you're just starting the process or facing an uphill battle, our insights and strategies are here to help you stay ahead of the curve."
  },
  "offer-in-compromise-guide": {
    slug: "offer-in-compromise-guide",
    category: "Debt Relief",
    title: "Navigating the Offer in Compromise (OIC) Program",
    featuredImage: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?w=1200&auto=format&fit=crop&q=80",
    overview: "The Offer in Compromise (OIC) is perhaps the most misunderstood program in the tax resolution world. It allows qualified taxpayers to settle their tax liability for less than the full amount they owe. It’s a legitimate 'fresh start,' but the IRS criteria are stringent.",
    expectations: [
      "A deep dive into the 'Reasonable Collection Potential' formula.",
      "How the IRS evaluates your assets, income, and necessary expenses.",
      "Common pitfalls that lead to OIC rejections.",
      "Step-by-step guidance on the application and negotiation process."
    ],
    quote: {
      text: "The OIC is not a loophole; it's a legal remedy for those who truly cannot pay. Success requires mathematical precision and a deep understanding of IRS internal manuals.",
      author: "Omar S.",
      role: "Principal Tax Specialist",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    sections: [
      {
        title: "The Qualification Barrier",
        content: "Before applying, you must meet basic requirements: you cannot be in an open bankruptcy proceeding, and you must be current on all filing and payment requirements. We'll help you audit your own eligibility before you ever pay an IRS application fee."
      },
      {
        title: "Calculated Asset Valuation",
        content: "One of the biggest areas of contention in an OIC is asset valuation. The IRS often values assets at their quick-sale value, but they also consider future income potential. Navigating this calculation is where professional advocacy makes the biggest difference."
      }
    ],
    interstitialImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1000",
    finalThoughts: "An Offer in Compromise can be life-changing, but it requires a meticulous approach. At ATTAX, we specialize in building cases that the IRS simply cannot ignore."
  }
};
