import path from "path";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({ 
      filename: "bundle-analysis.html", 
      open: true, // Automatically opens the report in the browser
      gzipSize: true, 
      brotliSize: true 
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          // Separate libraries from node_modules into individual chunks
          if (id.includes("node_modules")) {
            return id.toString().split("node_modules/")[1].split("/")[0].toString();
          }
        },
      },
    },
    chunkSizeWarningLimit: 1000, // Suppress chunk size warnings for up to 1MB
  },
});
