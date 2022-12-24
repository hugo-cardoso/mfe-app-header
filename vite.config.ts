import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.tsx",
      name: "Header",
      formats: ["iife"],
    },
    rollupOptions: {
      output: {
        manualChunks: undefined,
        entryFileNames: "assets/[name].js",
        assetFileNames: "assets/[name].[ext]",
      },
    },
  },
  define: {
    "process.env": {},
  },
});
