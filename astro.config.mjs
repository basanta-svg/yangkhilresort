import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.yangkhil.com',
  vite: { plugins: [tailwindcss()] },
});
