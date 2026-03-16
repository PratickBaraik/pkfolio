import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/*
  Production-ready Vite configuration for:
  - React + TypeScript
  - Netlify deployment
  - Atomic architecture structure
  - Optimized bundle splitting
*/

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    chunkSizeWarningLimit: 1000,

    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("react-router-dom")) {
              return "router";
            }

            if (id.includes("react")) {
              return "react";
            }

            return "vendor";
          }
        },
      },
    },
  },

  server: {
    port: 5173,
    open: true,
    strictPort: true,
  },

  preview: {
    port: 4173,
    strictPort: true,
  },
});
