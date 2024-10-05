import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    cssMinify: "lightningcss",
  },
  server: { port: 4000 },
  plugins: [react()],
});
