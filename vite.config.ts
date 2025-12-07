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
      external: [],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
  define: {
    // Stringified JSON for process.env (React expects this format)
    'process.env': JSON.stringify({ NODE_ENV: 'production' }),
    // Simple string replacements only
    'process.env.NODE_ENV': JSON.stringify('production'),
    global: 'globalThis',
  },
});
