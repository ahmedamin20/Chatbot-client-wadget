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
    // Critical: Target modern browsers that support Shadow DOM
    target: 'es2020',
  },
  define: {
    'window.process.env': JSON.stringify({ NODE_ENV: 'production' }),
    'process.env': JSON.stringify({ NODE_ENV: 'production' }),
    global: 'globalThis',
    // React 18+ fix - full process shim
    window: {process: JSON.stringify({
      env: { NODE_ENV: 'production' }
    }),},
    process: JSON.stringify({
      env: { NODE_ENV: 'production' }
    }),
  },
});
