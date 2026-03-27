import { RouterProvider } from "react-router";
import { router } from "./Router.tsx";
import { CookieConsent } from "./components/attax/CookieConsent";

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <CookieConsent />
    </>
  );
}
