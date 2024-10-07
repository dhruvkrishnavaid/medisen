import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import About from "./pages/About";
import Appointment from "./pages/Appointment";
import Contact from "./pages/Contact";
import Diagnose from "./pages/Diagnose";
import Doctors from "./pages/Doctors";
import Home from "./pages/Home";
import LearnMore from "./pages/LearnMore";
import NotFound from "./pages/NotFound";
import Services from "./pages/Services";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App page={<Home />} />,
    errorElement: <App page={<NotFound />} />,
  },
  {
    path: "/about",
    element: <App page={<About />} />,
  },
  {
    path: "/doctors",
    element: <App page={<Doctors />} />,
  },
  {
    path: "/services",
    element: <App page={<Services />} />,
  },
  {
    path: "/contact",
    element: <App page={<Contact />} />,
  },
  {
    path: "/learn-more",
    element: <App page={<LearnMore />} />,
  },
  {
    path: "/diagnose",
    element: <App page={<Diagnose />} />,
  },
  {
    path: "/diagnose",
    element: <App page={<Diagnose />} />,
  },
  {
    path: "/appointment",
    element: <App page={<Appointment />} />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
