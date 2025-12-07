// vite.config.ts
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.ts",      // your widget entry
      name: "ChatWidget",
      fileName: "chat-widget",
      formats: ["iife"],          // global IIFE
    },
    rollupOptions: {
      external: [],              // bundle React + ReactDOM inside
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    "process.env": {},          // prevent process errors
    "process.env.NODE_ENV": '"production"',
    "process": {},              // fallback for any process references
  },
});
