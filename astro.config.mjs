import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
	site: 'https://ak78699.github.io',
	base: '/aira.github.io/', // Updated to reflect subdirectory deployment
	integrations: [tailwind()],
});
