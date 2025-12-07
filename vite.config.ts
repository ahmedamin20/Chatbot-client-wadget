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
      external: ["react", "react-dom"], // Use CDN versions
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    // Replace all process.env references with empty object
    "process.env": {},
    "process": {}, // ✅ This prevents "process is not defined"
  },
});
