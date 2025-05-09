# Astro Marketing Website Starter

Modern static marketing website starter built with [Astro](https://astro.build) & [Tailwind CSS](https://tailwindcss.com).

## Features

- Astro v4 with file-based routing
- Tailwind CSS with Typography & Forms plugins
- Astro Image for automatic image optimisation
- Reusable `<SEO>` component with Open Graph & JSON-LD
- Content collections powered by `content/`
- Ready for headless CMS integration (Sanity, Netlify CMS)
- ESLint & Prettier configured
- Perfect Lighthouse baseline (accessibility, best practices, SEO, performance)
- Deploy-ready for Netlify & Vercel

## Scripts

```bash
npm install      # Install dependencies
npm run dev      # Start local dev server
npm run build    # Build for production (output in dist/)
npm run preview  # Preview production build
npm run format   # Prettier format
npm run lint     # ESLint check
```

## Project Structure

```
├── src
│   ├── components      # Reusable UI & head components
│   ├── content         # Markdown/MDX content collections
│   ├── layouts         # Shared page layouts (optional)
│   ├── pages           # Astro pages & routes
│   └── styles          # Global & component-level styles
├── public              # Static assets (e.g. images, favicons)
├── astro.config.mjs    # Astro configuration
├── tailwind.config.js  # Tailwind configuration
```

## CMS Integration

Sanity & Netlify CMS clients are installed; add environment variables and follow their docs to integrate.

---

Made with ❤️ & Astro.
