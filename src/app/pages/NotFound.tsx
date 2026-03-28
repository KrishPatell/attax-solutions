import { Link, useLocation } from "react-router";
import { AttaxNavbar } from "../components/attax/AttaxNavbar";
import { AttaxFooter } from "../components/attax/AttaxFooter";
import { usePageSeo } from "../lib/pageSeo";

const suggestions = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Resources", to: "/resources" },
  { label: "Contact", to: "/contact" },
  { label: "Sitemap", to: "/sitemap" },
];

export default function NotFound() {
  const location = useLocation();

  usePageSeo({
    title: "Page Not Found | ATTAX Solutions",
    description:
      "This page is not on ATTAX Solutions. Explore IRS tax relief services, free guides, or contact our licensed Tax Specialists.",
    path: location.pathname,
    noindex: true,
    breadcrumbs: [
      { name: "Home", path: "/" },
      { name: "Page not found", path: location.pathname },
    ],
  });

  return (
    <div className="min-h-screen bg-[#fcfdff] flex flex-col">
      <AttaxNavbar />
      <main className="flex-1 pt-36 pb-24 px-6">
        <div className="max-w-lg mx-auto text-center">
          <p className="text-[13px] uppercase tracking-widest font-bold text-[#1d1ee3] mb-4" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            404
          </p>
          <h1
            className="text-[32px] md:text-[40px] text-[#0a1628] font-semibold mb-4"
            style={{ fontFamily: "'Inter Tight', sans-serif" }}
          >
            Page not found
          </h1>
          <p className="text-[16px] text-[#0a1628]/65 mb-10 leading-relaxed" style={{ fontFamily: "'Inter Tight', sans-serif" }}>
            The link may be broken or the page may have moved. Use the links below or the main navigation.
          </p>
          <ul className="flex flex-col gap-3 text-left max-w-xs mx-auto">
            {suggestions.map((s) => (
              <li key={s.to}>
                <Link
                  to={s.to}
                  className="text-[15px] text-[#1d1ee3] font-medium hover:underline"
                  style={{ fontFamily: "'Inter Tight', sans-serif" }}
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
      <AttaxFooter />
    </div>
  );
}
