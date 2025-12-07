import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load all environment variables
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    build: {
      lib: {
        entry: "src/main.ts",
        name: "ChatWidget",
        fileName: "chat-widget",
        formats: ["iife"],
      },
      rollupOptions: {
        external: ["react", "react-dom"], // React from CDN
        output: {
          globals: {
            react: "React",
            "react-dom": "ReactDOM",
          },
        },
      },
    },
    define: {
      "process.env": env, // fallback for any legacy references
      "process.env.NODE_ENV": `"${mode}"`, // usually 'production'
      "global": {}, // in case any library expects global
    },
  };
});
