/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead, b as renderComponent } from '../chunks/astro/server_DU5pJwfW.mjs';
import 'kleur/colors';
import { $ as $$BaseLayout, a as $$SimpleFooter } from '../chunks/SimpleFooter_BBA0D0c1.mjs';
import 'clsx';
import { Utensils, Bath, Home, Trees, Hammer, Paintbrush, Sofa, ChevronDown, ShowerHead, ChefHat, Landmark } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';
import { jsxs, jsx, Fragment } from 'react/jsx-runtime';
import React__default, { memo, useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", '<section class="relative w-full min-h-[60vh] sm:min-h-[70vh] md:min-h-[80vh] flex items-center justify-center overflow-hidden"> <!-- Image carousel with overlay --> <div class="absolute inset-0 z-0 carousel-container"> <!-- Images --> <div class="carousel-slide absolute inset-0 opacity-100 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower3.jpeg" alt="Remodeling project shower3" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower2.jpg" alt="Remodeling project shower2" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/fullKitchen.jpeg" alt="Remodeling project fullKitchen" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower4.jpeg" alt="Remodeling project shower4" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower6.jpeg" alt="Remodeling project shower6" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/showerBlue5.jpeg" alt="Remodeling project showerBlue5" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/fullKitchen2.jpeg" alt="Remodeling project fullKitchen2" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/sink1.jpeg" alt="Remodeling project sink1" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/stairs/stairs5.jpg" alt="Remodeling project stairs5" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/kitchenCabinets.jpg" alt="Remodeling project kitchenCabinets" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/stairs/stairs4.jpg" alt="Remodeling project stairs4" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower+tub.jpg" alt="Remodeling project shower and tub" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/kitchenCabinets2.jpg" alt="Remodeling project kitchenCabinets2" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/other stuff/livingRoom.jpeg" alt="Remodeling project livingRoom" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/sink+shower.jpeg" alt="Remodeling project sink and shower" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/IMG_8650.jpeg" alt="Remodeling project bathroom detail" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/other stuff/doors.jpg" alt="Remodeling project doors" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/stairs/stairs1.jpeg" alt="Remodeling project stairs1" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/IMG_8651.jpeg" alt="Remodeling project bathroom finish" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/other stuff/doorWithTile.jpeg" alt="Remodeling project door with tile" loading="lazy" decoding="async" class="lazy-img object-cover"> </div> <!-- Dark overlay --> <div class="absolute inset-0 bg-black/40 z-10"></div> <!-- Carousel controls --> <button class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none" id="prev-btn" aria-label="Previous slide">\n\u2190\n</button> <button class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none" id="next-btn" aria-label="Next slide">\n\u2192\n</button> <!-- Carousel indicators --> <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 w-full max-w-xs px-2"> ', ` </div> </div> <!-- Centered content box --> <div class="relative z-0 container-premium text-center max-w-4xl w-full px-4 sm:px-0"> <div class="bg-white/90 backdrop-blur-sm py-6 sm:py-8 px-4 sm:px-6 md:px-12 rounded-lg shadow-2xl w-full sm:w-auto"> <p class="text-base sm:text-lg md:text-xl font-medium text-gray-800 mb-3">
Broad Vision. Inspired Design. Superior Construction.
</p> <h1 class="text-2xl sm:text-3xl md:text-5xl font-bold font-display mb-6 text-[color:var(--primary)] leading-tight">
MichalExp Remodeling
</h1> <div class="btn-conteiner flex flex-col sm:flex-row gap-4 justify-center items-center"> <button class="btn-content" data-estimate-button aria-label="Schedule a Free Estimate"> <span class="sm:hidden">Estimate</span><span class="hidden sm:inline">Schedule an Estimate</span> <span class="icon-arrow"> <svg width="40" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="arrow-icon-one"> <path d="M0 10 H40" stroke="white" stroke-width="3"></path> </g> <g id="arrow-icon-two"> <path d="M40 10 L35 5" stroke="white" stroke-width="3"></path> <path d="M40 10 L35 15" stroke="white" stroke-width="3"></path> </g> <g id="arrow-icon-three"> <circle cx="47" cy="10" r="3" fill="white"></circle> </g> </svg> </span> </button> <a href="#portfolio" class="btn-content btn-gold" aria-label="View Our Portfolio"> <span class="sm:hidden">Portfolio</span><span class="hidden sm:inline">View Our Work</span> <span class="icon-arrow"> <svg width="40" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="arrow-icon-one"> <path d="M0 10 H40" stroke="#0F2A44" stroke-width="3"></path> </g> <g id="arrow-icon-two"> <path d="M40 10 L35 5" stroke="#0F2A44" stroke-width="3"></path> <path d="M40 10 L35 15" stroke="#0F2A44" stroke-width="3"></path> </g> <g id="arrow-icon-three"> <circle cx="47" cy="10" r="3" fill="#0F2A44"></circle> </g> </svg> </span> </a> </div> </div> </div> </section> <script type="module">
  document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000;
    
    function startCarousel() {
      slideInterval = setInterval(nextSlide, intervalTime);
    }
    
    function resetInterval() {
      clearInterval(slideInterval);
      startCarousel();
    }
    
    function showSlide(n) {
      // Safety check: ensure slides array has elements and index is valid
      if (!slides.length || n < 0 || n >= slides.length) return;
      
      slides.forEach(slide => {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      });
      
      slides[n].classList.remove('opacity-0');
      slides[n].classList.add('opacity-100');
      
      indicators.forEach(indicator => {
        indicator.classList.remove('active', 'bg-white');
        indicator.classList.add('bg-white/50');
      });
      
      // Safety check: ensure indicators array has element at index n
      if (indicators[n]) {
        indicators[n].classList.add('active', 'bg-white');
        indicators[n].classList.remove('bg-white/50');
      }
    }
    
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
    
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval();
      });
    });
    
    showSlide(currentSlide);
    startCarousel();
    
    const btn = document.querySelector('[data-estimate-button]');
    if (btn) {
      btn.addEventListener('click', e => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('openEstimateModal'));
      });
    }
  });
<\/script>`])), maybeRenderHead(), Array(15).fill(0).map((_, i) => renderTemplate`<button${addAttribute(`w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full ${i === 0 ? "bg-white active" : "bg-white/50 hover:bg-white"} carousel-indicator`, "class")}${addAttribute(i, "data-index")}${addAttribute(`Go to slide ${i + 1}`, "aria-label")}></button>`));
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/HeroSection.astro", void 0);

const $$TrustSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-12 sm:py-16 bg-[#FFFFFF]"> <div class="container-premium"> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> <div class="bg-[color:var(--secondary)] rounded-xl text-center py-8 px-6 sm:py-10 shadow-sm flex flex-col items-center"> <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[color:var(--primary)] mb-2">25+</div> <div class="text-lg md:text-xl font-semibold text-gray-800">Years Experience</div> </div> <div class="bg-[color:var(--secondary)] rounded-xl text-center py-8 px-6 sm:py-10 shadow-sm flex flex-col items-center"> <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[color:var(--primary)] mb-2">500+</div> <div class="text-lg md:text-xl font-semibold text-gray-800">Homes Renovated</div> </div> <div class="bg-[color:var(--secondary)] rounded-xl text-center py-8 px-6 sm:py-10 shadow-sm flex flex-col items-center"> <div class="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-[color:var(--primary)] mb-2">Client</div> <div class="text-lg md:text-xl font-semibold text-gray-800">Favorite</div> </div> </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/TrustSection.astro", void 0);

const $$ServicesOverview = createComponent(($$result, $$props, $$slots) => {
  const services = [
    {
      icon: Utensils,
      title: "Kitchen Remodels",
      desc: "Custom cabinetry, countertops, lighting, and layouts for the heart of your home.",
      href: "/services/kitchen"
    },
    {
      icon: Bath,
      title: "Bathroom Renovation",
      desc: "Modern fixtures, tiling, and spa-like upgrades for every budget.",
      href: "/services/bathroom"
    },
    {
      icon: Home,
      title: "Basement Finishing",
      desc: "Transform your basement into a living space, gym, or entertainment room.",
      href: "/services/basement"
    },
    {
      icon: Trees,
      title: "Outdoor Spaces",
      desc: "Decks, patios, and landscaping to expand your living area outdoors.",
      href: "/services/outdoor"
    },
    {
      icon: Hammer,
      title: "General Remodeling",
      desc: "Whole-home updates, repairs, and custom projects\u2014big or small.",
      href: "/services/general"
    },
    {
      icon: Paintbrush,
      title: "Painting & Finishes",
      desc: "Professional painting, wall treatments, and finishing touches.",
      href: "/services/painting"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="services" class="w-full py-12 sm:py-16 bg-[color:var(--background)]"> <div class="container-premium"> <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-10 text-[color:var(--primary)] leading-tight">Our Services</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> ${services.map(({ icon: Icon, title, desc, href }) => renderTemplate`<div class="service-card flex flex-col items-center text-center hover:shadow-xl transition-shadow"> <div class="mb-4 text-[color:var(--primary)]"> ${renderComponent($$result, "Icon", Icon, { "size": 40, "strokeWidth": 1.5 })} </div> <h3 class="text-lg sm:text-xl font-semibold mb-2 text-[color:var(--primary)]">${title}</h3> <p class="text-gray-600 mb-4">${desc}</p> <a${addAttribute(href, "href")} class="inline-block mt-auto px-6 py-2 sm:py-3 rounded-full bg-[color:var(--primary)] text-white font-medium shadow hover:bg-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">
Learn More
</a> </div>`)} </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/ServicesOverview.astro", void 0);

const ProjectImage = memo(({ src, alt, onClick, idx }) => {
  return /* @__PURE__ */ jsxs(
    motion.button,
    {
      type: "button",
      className: "group focus:outline-none",
      onClick,
      initial: { opacity: 0, y: 40 },
      whileInView: { opacity: 1, y: 0 },
      viewport: { once: true, amount: 0.2 },
      transition: { duration: 0.5, delay: idx * 0.05 },
      style: { position: "relative" },
      layout: true,
      children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src,
            alt,
            className: "w-full aspect-[4/3] rounded-xl shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:scale-[1.02] object-cover",
            loading: "lazy",
            decoding: "async"
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "absolute inset-0 rounded-xl bg-[color:var(--accent)]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center pointer-events-none",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx("svg", { className: "w-10 h-10 text-white opacity-90", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6-6l-4.553 2.276a1 1 0 000 1.448L9 16" }) })
          }
        )
      ]
    }
  );
});
ProjectImage.displayName = "ProjectImage";
const CategoryButton = memo(({
  name,
  isOpen,
  onClick
}) => {
  let Icon = Sofa;
  if (/bathroom/i.test(name)) Icon = ShowerHead;
  else if (/kitchen/i.test(name)) Icon = ChefHat;
  else if (/stairs?/i.test(name)) Icon = Landmark;
  else if (/custom projects/i.test(name)) Icon = Sofa;
  return /* @__PURE__ */ jsxs(
    Disclosure.Button,
    {
      className: `flex w-full justify-between items-center text-xl md:text-2xl font-semibold font-display py-5 px-6 transition-all duration-200 focus:outline-none bg-white/80 hover:bg-white rounded-xl shadow-md hover:shadow-lg ${isOpen ? "text-[#D4AF37] border-b-2 border-[#D4AF37]" : "text-[#0F2A44] hover:text-[#D4AF37]"}`,
      onClick,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-4", children: [
          /* @__PURE__ */ jsx("div", { className: `flex items-center justify-center w-14 h-14 rounded-lg shadow p-3 ${isOpen ? "bg-[#D4AF37]/20 border border-[#D4AF37]" : "bg-[#0F2A44]/10 border border-[#0F2A44]/20 hover:bg-[#D4AF37]/10 hover:border-[#D4AF37]/20"}`, children: /* @__PURE__ */ jsx(
            Icon,
            {
              className: `w-full h-full ${isOpen ? "text-[#D4AF37]" : "text-[#0F2A44] group-hover:text-[#D4AF37]"}`,
              "aria-hidden": "true",
              strokeWidth: 1.5
            }
          ) }),
          /* @__PURE__ */ jsx("span", { className: `font-bold font-display ${isOpen ? "text-[#D4AF37]" : "text-[#0F2A44]"}`, children: name })
        ] }),
        /* @__PURE__ */ jsx("div", { className: `w-8 h-8 rounded-full flex items-center justify-center ${isOpen ? "bg-[#D4AF37]/20" : "bg-[#0F2A44]/10 group-hover:bg-[#D4AF37]/10"}`, children: /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 transition-transform duration-200 ${isOpen ? "text-[#D4AF37] rotate-180" : "text-[#0F2A44] group-hover:text-[#D4AF37]"}` }) })
      ]
    }
  );
});
CategoryButton.displayName = "CategoryButton";
function PortfolioTeaser({ categories }) {
  const [openSection, setOpenSection] = useState(null);
  const [open, setOpen] = useState(null);
  const keyboardNavigation = useCallback((e) => {
    if (e.key === "ArrowRight") nextImage();
    if (e.key === "ArrowLeft") prevImage();
    if (e.key === "Escape") setOpen(null);
  }, [open, categories]);
  React__default.useEffect(() => {
    if (!open) return;
    window.addEventListener("keydown", keyboardNavigation);
    return () => window.removeEventListener("keydown", keyboardNavigation);
  }, [open, keyboardNavigation]);
  const nextImage = useCallback(() => {
    if (!open) return;
    const cat = categories.find((c) => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx + 1) % cat.images.length
    });
  }, [open, categories]);
  const prevImage = useCallback(() => {
    if (!open) return;
    const cat = categories.find((c) => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx - 1 + cat.images.length) % cat.images.length
    });
  }, [open, categories]);
  const toggleSection = useCallback((name) => {
    setOpenSection((current) => current === name ? null : name);
  }, []);
  return /* @__PURE__ */ jsx("section", { id: "portfolio", className: "w-full py-12 sm:py-16 bg-[color:var(--secondary)]", children: /* @__PURE__ */ jsxs("div", { className: "container-premium min-h-[300px]", children: [
    /* @__PURE__ */ jsx("div", { className: "text-center mb-12", children: /* @__PURE__ */ jsxs("h2", { className: "text-3xl md:text-5xl font-bold font-display text-[#0F2A44] leading-tight relative inline-block", children: [
      "Our Work",
      /* @__PURE__ */ jsx("span", { className: "absolute -bottom-2 left-0 w-full h-0.5 bg-[#D4AF37]" })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "w-full max-w-3xl mx-auto", children: categories.map(({ name, images }) => {
      const isOpen = openSection === name;
      return /* @__PURE__ */ jsx(Disclosure, { as: "div", className: "mb-6", children: () => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          CategoryButton,
          {
            name,
            isOpen,
            onClick: () => toggleSection(name)
          }
        ),
        isOpen && /* @__PURE__ */ jsx(Disclosure.Panel, { static: true, className: "overflow-hidden mt-4 bg-white/50 p-6 rounded-xl", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6", children: images.map((src, idx) => /* @__PURE__ */ jsx(
          ProjectImage,
          {
            src,
            alt: `${name} project photo ${idx + 1}`,
            idx,
            onClick: () => setOpen({ category: name, idx })
          },
          src
        )) }) })
      ] }) }, name);
    }) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && (() => {
      const cat = categories.find((c) => c.name === open.category);
      if (!cat) return null;
      const src = cat.images[open.idx];
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "fixed inset-0 z-50 flex items-center justify-center bg-black/60",
          onClick: () => setOpen(null),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
          transition: { duration: 0.2 },
          children: /* @__PURE__ */ jsxs(
            motion.div,
            {
              className: "relative",
              onClick: (e) => e.stopPropagation(),
              initial: { scale: 0.85, opacity: 0 },
              animate: { scale: 1, opacity: 1 },
              exit: { scale: 0.85, opacity: 0 },
              transition: { type: "spring", stiffness: 200, damping: 20 },
              children: [
                /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] max-w-5xl max-h-[90vh] w-[95vw] bg-[color:var(--secondary)] flex items-center justify-center rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src,
                    alt: "Enlarged project photo",
                    className: "object-cover w-full h-full rounded-2xl shadow-2xl",
                    loading: "eager"
                  }
                ) }),
                cat.images.length > 1 && /* @__PURE__ */ jsxs(Fragment, { children: [
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: prevImage,
                      className: "absolute left-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg focus:outline-none",
                      style: { transform: "translate(-50%, -50%)" },
                      "aria-label": "Previous image",
                      children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 19l-7-7 7-7" }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "button",
                    {
                      onClick: nextImage,
                      className: "absolute right-0 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-700 rounded-full p-2 shadow-lg focus:outline-none",
                      style: { transform: "translate(50%, -50%)" },
                      "aria-label": "Next image",
                      children: /* @__PURE__ */ jsx("svg", { className: "w-7 h-7", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M9 5l7 7-7 7" }) })
                    }
                  )
                ] })
              ]
            }
          )
        }
      );
    })() })
  ] }) });
}

const $$PortfolioTeaser = createComponent(async ($$result, $$props, $$slots) => {
  const getCategoryDisplayName = (dirName) => {
    const nameMap = {
      "bathroom": "Bathroom",
      "kitchen": "Kitchen",
      "stairs": "Staircases",
      "other stuff": "Custom Projects"
    };
    return nameMap[dirName.toLowerCase()] || dirName.replace(/\b\w/g, (l) => l.toUpperCase());
  };
  const picsDir = path.join(process.cwd(), "public", "pictures");
  const allowedFolders = ["kitchen", "bathroom", "stairs", "other stuff"];
  let categories = [];
  for (const dir of allowedFolders) {
    const dirPath = path.join(picsDir, dir);
    try {
      const stat = await fs.stat(dirPath);
      if (!stat.isDirectory()) continue;
      const files = await fs.readdir(dirPath);
      const images = files.filter((name) => /\.(jpe?g|png)$/i.test(name)).map((name) => `/pictures/${dir}/${name}`);
      if (images.length) categories.push({
        name: getCategoryDisplayName(dir),
        originalDir: dir,
        images
      });
    } catch (error) {
      console.warn(`Could not process folder ${dir}: ${error.message}`);
    }
  }
  categories = categories.sort((a, b) => {
    return allowedFolders.indexOf(a.originalDir) - allowedFolders.indexOf(b.originalDir);
  });
  const uniqueCategories = categories;
  return renderTemplate`${renderComponent($$result, "PortfolioTeaser", PortfolioTeaser, { "categories": uniqueCategories, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/PortfolioTeaser.tsx", "client:component-export": "default" })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/PortfolioTeaser.astro", void 0);

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  const testimonials = [
    {
      name: "Maria S.",
      service: "Kitchen Remodel",
      quote: "We were nervous about remodeling, but Michal and his crew made it so easy. They listened to all our ideas and even suggested a few clever touches. The kitchen feels twice as big now, and we still can't believe how smoothly everything went!",
      image: "/pictures/kitchen/fullKitchen.jpeg"
    },
    {
      name: "James R.",
      service: "Bathroom Renovation",
      quote: "There was a minor delay with some tile delivery, but the team kept us updated and handled it quickly. The new bathroom is even better than we pictured. We really appreciated the attention to detail and how clean they kept the work area.",
      image: "/pictures/bathroom/shower+tub.jpg"
    },
    {
      name: "Olivia T.",
      service: "Staircase Renovation",
      quote: "Our old staircase was creaky and outdated, but now it's the centerpiece of our home! Michal's team worked quickly and paid attention to every detail. The new stairs are beautiful and feel incredibly solid. We get compliments from everyone who visits!",
      image: "/pictures/stairs/stairs1.jpeg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="w-full py-12 sm:py-16 bg-[color:var(--secondary)]"> <div class="container-premium"> <h2 class="text-3xl md:text-4xl font-bold font-display text-center mb-10 text-[color:var(--primary)] leading-tight">Testimonials</h2> <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"> ${testimonials.map(({ name, service, quote, image }) => renderTemplate`<div class="bg-[color:var(--background)] rounded-xl shadow-md hover:shadow-lg hover:-translate-y-1 transform transition-all duration-300 flex flex-col items-center p-6 sm:p-8 text-center h-full"> <img${addAttribute(image, "src")}${addAttribute(`Project photo for ${service}`, "alt")} class="w-full h-48 object-cover rounded-lg shadow mb-4" loading="lazy" decoding="async"> <div class="flex flex-col flex-1 justify-between w-full"> <blockquote class="italic text-black mb-4 leading-relaxed text-sm sm:text-base min-h-[96px]">"${quote}"</blockquote> <div> <div class="font-bold text-black text-lg">${name}</div> <div class="text-sm text-black/70">${service}</div> </div> </div> </div>`)} </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/Testimonials.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Home" }, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "HeroSection", $$HeroSection, {})} ${renderComponent($$result2, "TrustSection", $$TrustSection, {})} ${renderComponent($$result2, "ServicesOverview", $$ServicesOverview, {})} ${renderComponent($$result2, "PortfolioTeaser", $$PortfolioTeaser, {})} ${renderComponent($$result2, "Testimonials", $$Testimonials, {})} ${renderComponent($$result2, "FAQSection", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/FAQSection.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "ContactCTA", null, { "client:only": "react", "client:component-hydration": "only", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/ContactCTA.tsx", "client:component-export": "default" })} ${renderComponent($$result2, "SimpleFooter", $$SimpleFooter, {})} ` })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/index.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
