import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config

// export default defineConfig({
//   site: "http://localhost:5173/",
//   integrations: [sitemap()],
// });

export default defineConfig({
  site: "https:robinthehoo.github.io",
  base: "garden",
});
