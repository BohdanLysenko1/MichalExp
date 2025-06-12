import { c as createComponent, m as maybeRenderHead, r as renderTemplate, e as renderHead, b as renderComponent, f as renderSlot } from './astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */

const $$ResponsiveNavMenu = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<nav class="w-full"> <ul class="flex gap-6 items-center justify-end"> <li><a href="#" class="px-4 py-2 rounded hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">Home</a></li> <li><a href="#services" class="px-4 py-2 rounded hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">Services</a></li> <li><a href="#portfolio" class="px-4 py-2 rounded hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">Portfolio</a></li> <li><a href="#testimonials" class="px-4 py-2 rounded hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">Testimonials</a></li> <li><a href="#faq" class="px-4 py-2 rounded hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">FAQ</a></li> <li><a href="#contact" class="px-4 py-2 rounded bg-[color:var(--primary)] text-white hover:bg-[color:var(--accent)] transition-colors font-semibold shadow focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]">Contact</a></li> </ul> </nav>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/ResponsiveNavMenu.astro", void 0);

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.pageYOffset > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return /* @__PURE__ */ jsx(
    "button",
    {
      onClick: scrollToTop,
      className: `fixed bottom-8 left-8 bg-[color:var(--primary)] text-white p-3 rounded-full shadow-lg transition-opacity ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}`,
      "aria-label": "Back to top",
      children: "↑"
    }
  );
};

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title><slot name="title">MichalExp Remodeling</slot></title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/src/styles/global.css"><link rel="stylesheet" href="/src/styles/uiverse-btn-li-deheng.css">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-neutral-50" data-astro-cid-37fxchfa> <header class="w-full bg-white shadow min-h-[60px] relative z-10" data-astro-cid-37fxchfa> <nav class="container mx-auto px-4 py-4 flex items-center justify-between" data-astro-cid-37fxchfa> <a href="/" class="flex items-center gap-2 text-2xl font-bold font-playfair" data-astro-cid-37fxchfa> <img src="/pictures/logo/michalLogo.png" alt="MichalExp Logo" class="h-8 w-auto" data-astro-cid-37fxchfa>
MichalExp
</a> ${renderComponent($$result, "ResponsiveNavMenu", $$ResponsiveNavMenu, { "data-astro-cid-37fxchfa": true })} </nav> </header> <main class="flex-1 container mx-auto px-4 py-8 w-full" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "BackToTop", BackToTop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/BackToTop", "client:component-export": "default", "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
