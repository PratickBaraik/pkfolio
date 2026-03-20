import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

/*
  Vercel-optimized Vite configuration

  Key optimizations:
  - Clean bundle output (no unnecessary manual chunking)
  - Fast builds for Vercel CI
  - SPA routing compatibility
  - Proper aliasing for scalable architecture
*/

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // cleaner imports
    },
  },

  build: {
    outDir: "dist",
    sourcemap: false, // faster builds on Vercel
    chunkSizeWarningLimit: 800,

    rollupOptions: {
      output: {
        // Let Vite handle smart chunking automatically
        // More stable for Vercel edge caching
        manualChunks: undefined,
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

  // Important for Vercel deployments (SPA routing)
  base: "/",
});
