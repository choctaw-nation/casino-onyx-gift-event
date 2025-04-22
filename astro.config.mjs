// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://choctaw-nation.github.io',
	base: 'casino-onyx-gift-event',
	build: {
		assets: 'dist',
		format: 'directory',
	},
});
