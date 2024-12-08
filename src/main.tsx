import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "@resourge/react-router";
import "./assets/reset.css";
import "./assets/index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NextUIProvider>
    </BrowserRouter>
  </StrictMode>
);
