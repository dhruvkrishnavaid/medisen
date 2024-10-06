import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Home from "./pages/Home";
import Doctors from "./pages/Doctors";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={<Home />} />,
  },
  {
    path: "/about",
    element: <App page={<About />} />,
  },
  {
    path: "/doctors",
    element: <App page={<Doctors />} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
