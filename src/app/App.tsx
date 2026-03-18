import { RouterProvider } from "react-router";
import { router } from "./Router.tsx";

export default function App() {
  return <RouterProvider router={router} />;
}
