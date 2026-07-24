// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';

// https://astro.build/config
export default defineConfig({
  site: 'https://still.makestuffthatmatters.com',

  srcDir: 'src',

  adapter: netlify(),

  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        if (pathname === '/404' || pathname.startsWith('/404/')) return false;
        if (pathname === '/success' || pathname.startsWith('/success/')) return false;
        if (pathname === '/thank-you' || pathname.startsWith('/thank-you/')) return false;
        if (pathname === '/style-guide' || pathname.startsWith('/style-guide/')) return false;

        return true;
      },
      changefreq: 'weekly',
      priority: 0.8,
    }),
  ],
});