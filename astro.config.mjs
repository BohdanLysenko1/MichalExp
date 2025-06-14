import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import node from '@astrojs/node';
import react from '@astrojs/react';

export default defineConfig({
  adapter: node({ mode: 'standalone' }),
  integrations: [
    tailwind({ applyBaseStyles: true }),
    react(),
  ],
  trailingSlash: 'never',
  output: 'server',
  vite: {
    optimizeDeps: {
      exclude: [], // Add problematic deps here if identified
    },
  },

});
