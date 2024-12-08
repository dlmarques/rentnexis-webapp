import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "@resourge/react-router";
import "./assets/reset.css";
import "./assets/index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <App />
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
