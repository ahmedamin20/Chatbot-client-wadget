import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "src/main.ts",  // entry point of your widget
      name: "ChatWidget",
      fileName: "chat-widget",
      formats: ["iife"], // single JS bundle for global usage
    },
    rollupOptions: {
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    "process.env": {}, // replace all process.env references
    "process.env.NODE_ENV": '"production"',
  },
});
