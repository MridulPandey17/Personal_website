import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
import netlify from '@astro/adapters/netlify';

export default {
  site: 'https://your-site-name.netlify.app',  // Replace with your Netlify URL
  base: '/',  // Set to '/' if deploying at the root
  adapter: netlify(), // Ensure you're using the Netlify adapter
  output: 'static',  // Specify the output type
};
