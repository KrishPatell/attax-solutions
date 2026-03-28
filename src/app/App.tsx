import { RouterProvider } from "react-router";
import { router } from "./Router.tsx";
import { CookieConsent } from "./components/attax/CookieConsent";
import { AccessibilityWidget } from "./components/attax/AccessibilityWidget";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieConsent />
      <AccessibilityWidget />
    </>
  );
}
