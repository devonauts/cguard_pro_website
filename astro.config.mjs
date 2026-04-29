import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://cguardpro.com',
  integrations: [
    react(),
    sitemap({
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
