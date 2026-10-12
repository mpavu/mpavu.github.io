// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
// For a user site (mpavu.github.io) no `base` is needed.
// If you host it in a project repo instead, add: base: "/<repo-name>"
export default defineConfig({
  site: "https://mpavu.github.io",
  vite: {
    plugins: [tailwindcss()],
  },
});
