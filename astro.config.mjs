import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://basanta-svg.github.io',
  base: '/yangkhilresort',
  vite: { plugins: [tailwindcss()] },
});
