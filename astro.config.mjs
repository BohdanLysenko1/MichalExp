import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';
import react from '@astrojs/react';

export default defineConfig({
  adapter: vercel(),
  integrations: [
    tailwind({ applyBaseStyles: true }),
    react(),
  ],
  trailingSlash: 'never',
  output: 'hybrid',
  vite: {
    optimizeDeps: {
      exclude: [], // Add problematic deps here if identified
    },
  },

});
