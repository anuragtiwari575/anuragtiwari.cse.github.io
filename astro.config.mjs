import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";

export default defineConfig({
  site: "https://anuragtiwari575.github.io",
  base: "/anuragtiwari.cse.github.io",
  integrations: [mdx()],
  output: "static"
});