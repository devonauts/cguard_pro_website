import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cguardpro.com',
  integrations: [
    react(),
    sitemap({
      // Keep noIndex'd pages (compliance/404) out of the sitemap — listing
      // pages Google is told not to index sends mixed signals.
      filter: (page) => !page.includes('/meta/') && !page.includes('/404'),
      i18n: {
        defaultLocale: 'es',
        locales: { es: 'es', en: 'en' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false, // Spanish lives at / (no /es/ prefix)
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
  build: {
    assets: '_assets',
  },
  compressHTML: true,
});
