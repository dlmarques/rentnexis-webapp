import { createRoot } from "react-dom/client";
import { BrowserRouter } from "@resourge/react-router";
import "@assets/reset.css";
import "@assets/index.css";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "react-query";
import { ClerkProvider } from "@clerk/clerk-react";
import { RoutePaths } from "@routes/routes.ts";

const queryClient = new QueryClient();

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
  throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")!).render(
  <ClerkProvider
    publishableKey={PUBLISHABLE_KEY}
    afterSignOutUrl={RoutePaths.signIn.path}
  >
    <BrowserRouter>
      <NextUIProvider>
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </NextUIProvider>
    </BrowserRouter>
  </ClerkProvider>
);
