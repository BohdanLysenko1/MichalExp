import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [
    tailwind({ applyBaseStyles: true }),
    react(),
  ],
  trailingSlash: 'never',
  vite: {
    optimizeDeps: {
      exclude: [], // Add problematic deps here if identified
    },
  },
  output: 'server',
});
