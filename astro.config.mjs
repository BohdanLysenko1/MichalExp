import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

/**
 * Astro configuration
 * Docs: https://docs.astro.build/en/reference/configuration-reference/
 */
export default defineConfig({
  integrations: [
    // TailwindCSS with base styles disabled for full control
    tailwind({ applyBaseStyles: false }),
  ],
  // Always end URLs with a /
  trailingSlash: 'always'
});
