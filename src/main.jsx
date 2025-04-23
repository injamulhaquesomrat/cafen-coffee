import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./fonts.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.jsx";
import "@splidejs/splide/dist/css/splide.min.css";
import { CartProvider } from "./provider/CartProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <RouterProvider router={Router} />
    </CartProvider>
  </StrictMode>
);
