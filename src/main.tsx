import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "@resourge/react-router";
import Routes from "./Routes.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  </StrictMode>
);
