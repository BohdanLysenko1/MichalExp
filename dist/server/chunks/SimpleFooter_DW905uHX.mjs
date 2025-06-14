import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate, e as renderHead, d as renderComponent, f as renderSlot } from './astro/server_B-ZIt8ph.mjs';
import 'kleur/colors';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
/* empty css                         */

const $$Astro$1 = createAstro();
const $$ResponsiveNavMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$ResponsiveNavMenu;
  const currentPath = Astro2.url.pathname;
  const isHomePage = currentPath === "/" || currentPath === "";
  function getNavPath(anchor) {
    if (isHomePage) {
      return anchor;
    } else {
      return `/${anchor}`;
    }
  }
  return renderTemplate`${maybeRenderHead()}<nav class="w-full h-20 flex items-center justify-between relative"> <!-- Logo Section with Enhanced Styling --> <a href="/" class="flex items-center gap-4 p-2 group"> <div class="relative"> <img src="/pictures/logo/logo2_nobackground.png" loading="lazy" decoding="async" alt="MichalExp Logo" class="h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-105"> <div class="absolute inset-0 bg-gradient-to-r from-[color:var(--accent)] to-[color:var(--primary)] opacity-0 group-hover:opacity-10 rounded-lg transition-opacity duration-300"></div> </div> <div class="flex flex-col"> <span class="font-display text-2xl lg:text-3xl font-bold text-[color:var(--primary)] transition-colors duration-300 group-hover:text-[color:var(--accent)]">
MichalExp
</span> <span class="text-xs text-[color:var(--muted-foreground)] font-medium tracking-wider uppercase">
Remodeling Studio
</span> </div> </a> <!-- Desktop Navigation --> <div class="hidden lg:flex items-center"> <ul class="flex items-center gap-2"> <li> <a href="/" class="nav-link px-5 py-3 rounded-full text-[color:var(--foreground)] font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--secondary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] relative group">
Home
<span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span> </a> </li> <li> <a${addAttribute(getNavPath("#services"), "href")} class="nav-link px-5 py-3 rounded-full text-[color:var(--foreground)] font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--secondary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] relative group">
Services
<span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span> </a> </li> <li> <a${addAttribute(getNavPath("#portfolio"), "href")} class="nav-link px-5 py-3 rounded-full text-[color:var(--foreground)] font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--secondary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] relative group">
Portfolio
<span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span> </a> </li> <li> <a${addAttribute(getNavPath("#testimonials"), "href")} class="nav-link px-5 py-3 rounded-full text-[color:var(--foreground)] font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--secondary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] relative group">
Reviews
<span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span> </a> </li> <li> <a${addAttribute(getNavPath("#faq"), "href")} class="nav-link px-5 py-3 rounded-full text-[color:var(--foreground)] font-medium hover:text-[color:var(--primary)] hover:bg-[color:var(--secondary)] transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] relative group">
FAQ
<span class="absolute bottom-0 left-1/2 w-0 h-0.5 bg-[color:var(--accent)] transition-all duration-300 group-hover:w-full group-hover:left-0"></span> </a> </li> </ul> <!-- Premium CTA Button --> <div class="ml-6 pl-6 border-l border-[color:var(--border)]"> <a${addAttribute(getNavPath("#contact"), "href")} class="btn-primary inline-flex items-center gap-2 group"> <span>Get Free Estimate</span> <svg class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path> </svg> </a> </div> </div> <!-- Mobile Menu Button --> <button id="mobile-menu-btn" aria-expanded="false" class="lg:hidden p-2 rounded-lg text-[color:var(--foreground)] hover:bg-[color:var(--secondary)] transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)]" aria-label="Toggle mobile menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path> </svg> </button> <!-- Mobile Menu Overlay --> <div id="mobile-menu" class="lg:hidden fixed inset-0 z-[9999] bg-black/50 backdrop-blur-sm opacity-0 invisible transition-all duration-300"> <div class="absolute right-0 top-0 h-full w-[85vw] max-w-sm bg-white shadow-2xl transform translate-x-full transition-transform duration-300 overflow-y-auto pb-safe"> <div class="p-6"> <!-- Mobile Menu Header --> <div class="flex items-center justify-between mb-8"> <div class="flex items-center gap-3"> <img src="/pictures/logo/logo2_nobackground.png" loading="lazy" decoding="async" alt="MichalExp Logo" class="h-10 w-auto"> <span class="font-display text-xl font-bold text-[color:var(--primary)]">MichalExp</span> </div> <button id="mobile-menu-close" class="p-2 rounded-lg text-[color:var(--foreground)] hover:bg-[color:var(--secondary)] transition-colors duration-300" aria-label="Close mobile menu"> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path> </svg> </button> </div> <!-- Mobile Menu Links --> <nav class="space-y-2"> <a href="/" class="mobile-nav-link block px-6 py-4 rounded-lg text-[color:var(--foreground)] font-medium hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-all duration-300">
Home
</a> <a${addAttribute(getNavPath("#services"), "href")} class="mobile-nav-link block px-6 py-4 rounded-lg text-[color:var(--foreground)] font-medium hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-all duration-300">
Services
</a> <a${addAttribute(getNavPath("#portfolio"), "href")} class="mobile-nav-link block px-6 py-4 rounded-lg text-[color:var(--foreground)] font-medium hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-all duration-300">
Portfolio
</a> <a${addAttribute(getNavPath("#testimonials"), "href")} class="mobile-nav-link block px-6 py-4 rounded-lg text-[color:var(--foreground)] font-medium hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-all duration-300">
Reviews
</a> <a${addAttribute(getNavPath("#faq"), "href")} class="mobile-nav-link block px-6 py-4 rounded-lg text-[color:var(--foreground)] font-medium hover:bg-[color:var(--secondary)] hover:text-[color:var(--primary)] transition-all duration-300">
FAQ
</a> <!-- Mobile CTA --> <div class="pt-6 mt-6 border-t border-[color:var(--border)]"> <a${addAttribute(getNavPath("#contact"), "href")} class="btn-primary w-full justify-center">
Get Free Estimate
</a> </div> </nav> </div> </div> </div> </nav> `;
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
      type: "button",
      children: "↑"
    }
  );
};

const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en" data-astro-cid-37fxchfa> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title><slot name="title">MichalExp Remodeling</slot></title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&family=Playfair+Display:wght@400;700&display=swap" rel="stylesheet"><link rel="stylesheet" href="/src/styles/global.css"><link rel="stylesheet" href="/src/styles/uiverse-btn-li-deheng.css">${renderHead()}</head> <body class="min-h-screen flex flex-col bg-neutral-50" data-astro-cid-37fxchfa> <header class="w-full bg-white shadow min-h-[60px] relative z-10" data-astro-cid-37fxchfa> <nav class="container mx-auto px-4 py-4 flex items-center justify-between" data-astro-cid-37fxchfa> ${renderComponent($$result, "ResponsiveNavMenu", $$ResponsiveNavMenu, { "data-astro-cid-37fxchfa": true })} </nav> </header> <main class="flex-1 container mx-auto px-4 py-8 w-full" data-astro-cid-37fxchfa> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "BackToTop", BackToTop, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/BackToTop", "client:component-export": "default", "data-astro-cid-37fxchfa": true })} </body></html>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/layouts/BaseLayout.astro", void 0);

const $$Astro = createAstro();
const $$SimpleFooter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SimpleFooter;
  const currentPath = Astro2.url.pathname;
  const isHomePage = currentPath === "/" || currentPath === "";
  function getNavPath(anchor) {
    if (isHomePage) {
      return anchor;
    } else {
      return `/${anchor}`;
    }
  }
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[color:var(--primary)] text-white rounded-t-3xl py-12 sm:py-20 mt-16 shadow-2xl"> <div class="container-premium mx-auto"> <!-- Top Section: Logo, Services & Links, Navigation, and Contact Info --> <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-14"> <!-- Logo and Tagline --> <div class="space-y-4"> <div class="flex items-center gap-2"> <img src="/pictures/logo/logo2_nobackground.png" loading="lazy" decoding="async" alt="MichalExp Logo" class="h-16 w-auto filter invert"> <span class="font-display text-4xl font-bold tracking-wide text-white">
Michal<span class="text-[color:var(--accent)]">Exp</span> </span> </div> <p class="text-white mt-3 max-w-xs">Broad Vision. Inspired Design. Superior Construction.</p> <p class="text-white/80 text-sm">Chicago's Premium Remodeling Studio</p> </div> <!-- Navigation --> <div> <h3 class="text-xl font-semibold font-display mb-4 text-[color:var(--accent)]">Navigation</h3> <ul class="space-y-3"> <li><a href="/" class="text-white hover:text-[color:var(--accent)] transition-colors flex items-center gap-2">Home</a></li> <li><a${addAttribute(getNavPath("#services"), "href")} class="text-white hover:text-[color:var(--accent)] transition-colors flex items-center gap-2">Services</a></li> <li><a${addAttribute(getNavPath("#portfolio"), "href")} class="text-white hover:text-[color:var(--accent)] transition-colors flex items-center gap-2">Portfolio</a></li> <li><a${addAttribute(getNavPath("#testimonials"), "href")} class="text-white hover:text-[color:var(--accent)] transition-colors flex items-center gap-2">Testimonials</a></li> <li><a${addAttribute(getNavPath("#faq"), "href")} class="text-white hover:text-[color:var(--accent)] transition-colors flex items-center gap-2">FAQ</a></li> <li><a${addAttribute(getNavPath("#contact"), "href")} class="text-white hover:text-[color:var(--accent)] transition-colors flex items-center gap-2">Contact</a></li> </ul> </div> <!-- Services --> <div> <h3 class="text-xl font-semibold font-display mb-4 text-[color:var(--accent)]">Services</h3> <ul class="space-y-3"> <li><a href="/services/kitchen" class="text-white hover:text-[color:var(--accent)] transition-colors">Kitchen Remodeling</a></li> <li><a href="/services/bathroom" class="text-white hover:text-[color:var(--accent)] transition-colors">Bathroom Remodeling</a></li> <li><a href="/services/basement" class="text-white hover:text-[color:var(--accent)] transition-colors">Basement Finishing</a></li> <li><a href="/services/general" class="text-white hover:text-[color:var(--accent)] transition-colors">Home Additions</a></li> <li><a href="/services/general" class="text-white hover:text-[color:var(--accent)] transition-colors">Whole Home Renovations</a></li> </ul> </div> <!-- Contact Info --> <div> <h3 class="text-xl font-semibold font-display mb-4 text-[color:var(--accent)]">Contact Us</h3> <div class="space-y-4"> <div class="flex items-start gap-3"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 mt-1 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path> </svg> <div> <p class="text-white">Elmwood Park, IL, 60707</p> </div> </div> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path> </svg> <a href="tel:3124042497" class="text-white hover:text-[color:var(--accent)]">(312) 404-2497</a> </div> <div class="flex items-center gap-2"> <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[color:var(--accent)]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path> </svg> <a href="mailto:info@michalexpedition.com" class="text-white hover:text-[color:var(--accent)]">info@michalexpedition.com</a> </div> </div> </div> </div> <!-- Middle section: Working hours & Follow us --> <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 pb-6 sm:pb-8 border-b border-[color:var(--accent)]/30"> <!-- Working Hours --> <div> <h3 class="text-xl font-semibold font-display mb-4 text-[color:var(--accent)]">Working Hours</h3> <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 text-white"> <div class="flex justify-between sm:block"> <span>Monday - Friday:</span> <span class="sm:hidden">8:00 AM - 6:00 PM</span> </div> <div class="hidden sm:block">8:00 AM - 6:00 PM</div> <div class="flex justify-between sm:block"> <span>Saturday:</span> <span class="sm:hidden">9:00 AM - 4:00 PM</span> </div> <div class="hidden sm:block">9:00 AM - 4:00 PM</div> <div class="flex justify-between sm:block"> <span>Sunday:</span> <span class="sm:hidden">Closed</span> </div> <div class="hidden sm:block">Closed</div> </div> </div> <!-- Social Media --> <div class="md:text-right"> <h3 class="text-xl font-semibold font-display mb-4 text-[color:var(--accent)]">Follow Us</h3> <div class="flex gap-5 justify-center md:justify-end"> <a href="#" aria-label="Facebook" class="bg-[color:var(--primary)]/70 p-3 rounded-lg hover:bg-[color:var(--primary)]/90 transition-colors"> <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="text-[color:var(--accent)]"> <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path> </svg> </a> <a href="#" aria-label="Instagram" class="bg-[color:var(--primary)]/70 p-3 rounded-lg hover:bg-[color:var(--primary)]/90 transition-colors"> <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="text-[color:var(--accent)]"> <rect width="20" height="20" x="2" y="2" rx="5"></rect> <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path> <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line> </svg> </a> <a href="#" aria-label="LinkedIn" class="bg-[color:var(--primary)]/70 p-3 rounded-lg hover:bg-[color:var(--primary)]/90 transition-colors"> <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="text-[color:var(--accent)]"> <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path> <rect width="4" height="12" x="2" y="9"></rect> <circle cx="4" cy="4" r="2"></circle> </svg> </a> <a href="#" aria-label="Twitter" class="bg-[color:var(--primary)]/70 p-3 rounded-lg hover:bg-[color:var(--primary)]/90 transition-colors"> <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" class="text-[color:var(--accent)]"> <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path> </svg> </a> </div> </div> </div> <!-- Bottom section: Copyright & Terms --> <div class="flex flex-col md:flex-row justify-between items-center pt-8 text-sm"> <div class="text-[color:var(--accent)]/80 mb-4 md:mb-0">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} MichalExp Remodeling. All rights reserved.
</div> <div class="flex gap-6"> <a href="#" class="text-[color:var(--accent)]/80 hover:text-[color:var(--accent)] transition-colors">Privacy Policy</a> <a href="#" class="text-[color:var(--accent)]/80 hover:text-[color:var(--accent)] transition-colors">Terms of Service</a> <a href="#" class="text-[color:var(--accent)]/80 hover:text-[color:var(--accent)] transition-colors">Sitemap</a> </div> </div> </div> </footer>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/SimpleFooter.astro", void 0);

export { $$BaseLayout as $, $$SimpleFooter as a };
