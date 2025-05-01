/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue,md}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1769ff',
          dark: '#0f52d9'
        }
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            a: { color: '#1769ff', textDecoration: 'underline', fontWeight: '500' }
          }
        }
      }
    }
  },
  plugins: [require('@tailwindcss/typography'), require('@tailwindcss/forms')]
};
