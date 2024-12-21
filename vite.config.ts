import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";
import path from "path";

// https://vite.dev/config/

export default defineConfig({
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@components": path.resolve(__dirname, "src/shared/components"),
      "@utils": path.resolve(__dirname, "src/shared/resources/utils"),
      "@routes": path.resolve(__dirname, "src/shared/routes"),
      "@globalStyles": path.resolve(__dirname, "src/shared/styles"),
      "@globalData": path.resolve(__dirname, "src/shared/resources/data"),
      "@pages": path.resolve(__dirname, "src/pages"),
      "@features": path.resolve(__dirname, "src/features"),
      "@assets": path.resolve(__dirname, "src/assets"),
    },
  },
  server: {
    watch: {
      usePolling: true,
    },
  },
});
