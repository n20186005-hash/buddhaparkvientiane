import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://buddhaparkvientiane.com',
  output: 'static',
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en', 'zh', 'fr', 'ko', 'ja'],
    routing: {
      prefixDefaultLocale: true,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
