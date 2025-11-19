import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "../css/style.css";
import "../css/vendors/aos.css";
import AOS from "../js/vendors/aos.js";

// Initialize AOS
if (typeof window !== "undefined") {
  AOS.init({
    once: true,
    disable: "phone",
    duration: 600,
    easing: "ease-out-sine",
  });
}

createRoot(document.getElementById("root")!).render(<App />);
