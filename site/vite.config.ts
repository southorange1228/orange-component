import { defineConfig } from "vite";
import { join } from "path";
import { svelte } from "@sveltejs/vite-plugin-svelte";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svelte()],
  resolve: {
    alias: {
      "orange-component": join(__dirname, "../src"),
    },
  },
});
