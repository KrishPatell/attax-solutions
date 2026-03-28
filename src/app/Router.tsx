import { useEffect } from "react";
import { createBrowserRouter, Outlet, useLocation } from "react-router";
import ATTAX from "./pages/ATTAX";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import Clarity from "./pages/Clarity";
import Resources from "./pages/Resources";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import OurProcess from "./pages/OurProcess";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Glossary from "./pages/Glossary";
import Disclaimer from "./pages/Disclaimer";
import CaliforniaPrivacy from "./pages/CaliforniaPrivacy";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";

/**
 * SPA navigation does not reset scroll. Scroll to top on pathname change; if the URL has a
 * hash, scroll that element into view after paint (retries briefly for lazy-mounted sections).
 */
function RootLayout() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      if (!id) {
        window.scrollTo({ top: 0, left: 0, behavior: "auto" });
        return;
      }
      let cancelled = false;
      const tryHash = () => {
        if (cancelled) return true;
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
          return true;
        }
        return false;
      };
      if (!tryHash()) {
        const t = window.setTimeout(() => tryHash(), 120);
        const t2 = window.setTimeout(() => tryHash(), 320);
        return () => {
          cancelled = true;
          clearTimeout(t);
          clearTimeout(t2);
        };
      }
      return () => {
        cancelled = true;
      };
    }

    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [location.pathname, location.hash]);

  return <Outlet />;
}

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: ATTAX,
      },
      {
        path: "about",
        Component: AboutUs,
      },
      {
        path: "services",
        Component: Services,
      },
      {
        path: "our-process",
        Component: OurProcess,
      },
      {
        path: "resources",
        Component: Resources,
      },
      {
        path: "resources/:slug",
        Component: BlogPost,
      },
      {
        path: "contact",
        Component: Contact,
      },
      {
        path: "attax",
        Component: ATTAX,
      },
      {
        path: "clarity",
        Component: Clarity,
      },
      {
        path: "glossary",
        Component: Glossary,
      },
      {
        path: "terms",
        Component: Terms,
      },
      {
        path: "disclaimer",
        Component: Disclaimer,
      },
      {
        path: "california-privacy",
        Component: CaliforniaPrivacy,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "sitemap",
        Component: Sitemap,
      },
      {
        path: "*",
        Component: NotFound,
      },
    ],
  },
]);