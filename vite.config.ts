import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.ts",
      name: "ChatWidget",
      fileName: "chat-widget",
      formats: ["iife"],
    },
    rollupOptions: {
      // ✅ React MUST be bundled
      external: [],
    },
    target: "es2020",
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
});
