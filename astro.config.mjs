import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	base: '/aira.github.io/',
	integrations: [tailwind()],
});
