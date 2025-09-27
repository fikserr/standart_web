import path from "path";
import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  server: {
    host: "127.0.0.1",
    port: 5173,
  },
  plugins: [
    laravel({
      input: ["resources/css/app.css", "resources/js/app.jsx"],
      refresh: true,
    }),
    react(),
    visualizer({
      filename: "bundle-report.html", // build natijasi shu faylga yoziladi
      template: "treemap",            // yoki "sunburst"
      open: true,                     // build tugagandan keyin avtomatik ochadi
    }),
  ],
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "resources/js"),
      "@images": path.resolve(__dirname, "public/storage/assets/"),
      "@shared": path.resolve(__dirname, "resources/js/components/shared"),
      "@ui": path.resolve(__dirname, "resources/js/components/ui"),
    },
  },
  build: {
    rollupOptions: {
      treeshake: true,
    },
    minify: "terser",
    sourcemap: false,
  },
});
