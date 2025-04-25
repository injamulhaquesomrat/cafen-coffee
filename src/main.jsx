import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import "./styles/fonts.css";
import { RouterProvider } from "react-router-dom";
import Router from "./routes/Router.jsx";
import "@splidejs/splide/dist/css/splide.min.css";
import { CartProvider } from "./provider/CartProvider.jsx";
import { ProductProvider } from "./provider/ProductProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <ProductProvider>
        <RouterProvider router={Router} />
      </ProductProvider>
    </CartProvider>
  </StrictMode>
);
