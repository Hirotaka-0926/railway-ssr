import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/railway-ssr/",
  build: {
    rollupOptions: {
      input: {
        client: path.resolve(__dirname, "src/entry-client.tsx"),
      },
    },
  },
});
