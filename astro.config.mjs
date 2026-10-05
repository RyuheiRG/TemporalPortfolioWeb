// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  base: '/TemporalPortfolioWeb/',
  integrations: [react(), tailwind()],
  vite: {
    optimizeDeps: {
      include: ['react', 'react-dom']
    }
  },
  site: 'https://RyuheiRG.github.io',
});
