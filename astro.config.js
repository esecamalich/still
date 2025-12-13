// @ts-check
import { defineConfig } from 'astro/config';
import netlify from '@astrojs/netlify';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
    site: 'https://camali.ch',
    srcDir: 'src',
    adapter: netlify(),
    integrations: [
    sitemap({
      filter: (page) => {
        const pathname = page.toString();
        if (!pathname) return true;
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
