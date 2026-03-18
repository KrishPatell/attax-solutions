import { createBrowserRouter, Outlet } from "react-router";
import ATTAX from "./pages/ATTAX";
import AboutUs from "./pages/AboutUs";
import Contact from "./pages/Contact";
import { HomeV1 } from "./pages/HomeV1";
import { HomeV2 } from "./pages/HomeV2";
import Clarity from "./pages/Clarity";
import Resources from "./pages/Resources";
import BlogPost from "./pages/BlogPost";
import Services from "./pages/Services";
import OurProcess from "./pages/OurProcess";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Outlet,
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
        path: "terms",
        Component: Terms,
      },
      {
        path: "privacy",
        Component: Privacy,
      },
      {
        path: "optimo",
        Component: HomeV1,
      },
      {
        path: "optimo-v2",
        Component: HomeV2,
      },
      {
        path: "*",
        Component: ATTAX,
      },
    ],
  },
]);