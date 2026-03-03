// @ts-check

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
	site: 'https://Mbetz187.github.io',
	base: '/my-site',
	integrations: [mdx(), sitemap()],
});
