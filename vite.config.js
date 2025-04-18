import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "Todo App",
        short_name: "TodoApp",
        start_url: "/",
        icons: [
          {
            src: "star.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
