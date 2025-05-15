/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent } from '../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_gZs2SP7F.mjs';
import 'clsx';
import lucide, { Sofa, ChevronDown, ShowerHead, ChefHat, Landmark } from 'lucide-react';
import fs from 'fs/promises';
import path from 'path';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Disclosure } from '@headlessui/react';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$HeroSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(["", `<section class="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden"> <!-- Image carousel with overlay --> <div class="absolute inset-0 z-0 carousel-container"> <!-- Images will be inserted here by JavaScript --> <div class="carousel-slide absolute inset-0 opacity-100 transition-opacity duration-1000"> <img src="/pictures/stairs/stairs5.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/kitchenCabinets2.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/stairs/stairs4.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/other stuff/doors.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower1.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/kitchenCabinets.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/kitchen/kitchenCabinets3.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower2.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/bathroom/shower+tub.jpg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <div class="carousel-slide absolute inset-0 opacity-0 transition-opacity duration-1000"> <img src="/pictures/stairs/stairs3.jpeg" alt="MichalExp Remodeling project" class="w-full h-full object-cover"> </div> <!-- Dark overlay --> <div class="absolute inset-0 bg-black/40 z-10"></div> <!-- Carousel controls --> <button class="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none" id="prev-btn" aria-label="Previous slide">
\u2190
</button> <button class="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/20 hover:bg-white/40 text-white w-10 h-10 rounded-full flex items-center justify-center focus:outline-none" id="next-btn" aria-label="Next slide">
\u2192
</button> <!-- Carousel indicators --> <div class="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-wrap justify-center gap-2 max-w-xs"> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator active" data-index="0" aria-label="Go to slide 1"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="1" aria-label="Go to slide 2"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="2" aria-label="Go to slide 3"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="3" aria-label="Go to slide 4"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="4" aria-label="Go to slide 5"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="5" aria-label="Go to slide 6"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="6" aria-label="Go to slide 7"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="7" aria-label="Go to slide 8"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="8" aria-label="Go to slide 9"></button> <button class="w-2.5 h-2.5 rounded-full bg-white/50 hover:bg-white carousel-indicator" data-index="9" aria-label="Go to slide 10"></button> </div> </div> <!-- Centered content box --> <div class="relative z-10 container mx-auto px-4 text-center max-w-4xl"> <div class="bg-white/90 backdrop-blur-sm py-8 px-6 md:px-12 rounded-lg shadow-2xl"> <p class="text-lg md:text-xl font-medium text-gray-800 mb-3">
Broad Vision. Inspired Design. Superior Construction.
</p> <h1 class="text-3xl md:text-5xl font-bold font-playfair mb-6 text-[color:var(--primary)] leading-tight">
Michal Exp Remodeling
</h1> <div class="btn-conteiner"> <button class="btn-content" data-estimate-button aria-label="Schedule a Free Estimate">
Schedule an Estimate
<span class="icon-arrow"> <svg width="40" height="20" viewBox="0 0 50 20" fill="none" xmlns="http://www.w3.org/2000/svg"> <g id="arrow-icon-one"> <path d="M0 10 H40" stroke="white" stroke-width="3"></path> </g> <g id="arrow-icon-two"> <path d="M40 10 L35 5" stroke="white" stroke-width="3"></path> <path d="M40 10 L35 15" stroke="white" stroke-width="3"></path> </g> <g id="arrow-icon-three"> <circle cx="47" cy="10" r="3" fill="white"></circle> </g> </svg> </span> </button> </div> </div> </div> </section> <script type="module">
  document.addEventListener('DOMContentLoaded', () => {
    // Carousel functionality
    const slides = document.querySelectorAll('.carousel-slide');
    const indicators = document.querySelectorAll('.carousel-indicator');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    let slideInterval;
    const intervalTime = 5000; // Time between auto-slides (5 seconds)
    
    // Initialize the carousel
    function startCarousel() {
      slideInterval = setInterval(() => {
        nextSlide();
      }, intervalTime);
    }
    
    // Stop the auto-rotation when user interacts
    function resetInterval() {
      clearInterval(slideInterval);
      startCarousel();
    }
    
    // Show specific slide
    function showSlide(n) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      });
      
      // Show the target slide
      slides[n].classList.remove('opacity-0');
      slides[n].classList.add('opacity-100');
      
      // Update indicators
      indicators.forEach(indicator => {
        indicator.classList.remove('active', 'bg-white');
        indicator.classList.add('bg-white/50');
      });
      
      indicators[n].classList.add('active', 'bg-white');
      indicators[n].classList.remove('bg-white/50');
    }
    
    // Next slide function
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
    
    // Previous slide function
    function prevSlide() {
      currentSlide = (currentSlide - 1 + slides.length) % slides.length;
      showSlide(currentSlide);
    }
    
    // Add event listeners
    prevBtn.addEventListener('click', () => {
      prevSlide();
      resetInterval();
    });
    
    nextBtn.addEventListener('click', () => {
      nextSlide();
      resetInterval();
    });
    
    // Indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        resetInterval();
      });
    });
    
    // Show the initial slide
    showSlide(currentSlide);
    
    // Start the carousel
    startCarousel();
    
    // Handle modal button if it exists
    const btn = document.querySelector('[data-estimate-button]');
    if (btn) {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.dispatchEvent(new CustomEvent('openEstimateModal'));
      });
    }
  });
<\/script>`])), maybeRenderHead());
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/HeroSection.astro", void 0);

const $$TrustSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="w-full py-16 bg-[#FFFFFF]"> <div class="container mx-auto px-4"> <div class="grid grid-cols-1 sm:grid-cols-3 gap-8"> <div class="bg-[color:var(--secondary)] rounded-xl text-center py-10 px-6 shadow-sm flex flex-col items-center"> <div class="text-4xl md:text-5xl font-extrabold text-[color:var(--primary)] mb-2">25+</div> <div class="text-lg md:text-xl font-semibold text-gray-800">Years Experience</div> </div> <div class="bg-[color:var(--secondary)] rounded-xl text-center py-10 px-6 shadow-sm flex flex-col items-center"> <div class="text-4xl md:text-5xl font-extrabold text-[color:var(--primary)] mb-2">500+</div> <div class="text-lg md:text-xl font-semibold text-gray-800">Homes Renovated</div> </div> <div class="bg-[color:var(--secondary)] rounded-xl text-center py-10 px-6 shadow-sm flex flex-col items-center"> <div class="text-4xl md:text-5xl font-extrabold text-[color:var(--primary)] mb-2">Client</div> <div class="text-lg md:text-xl font-semibold text-gray-800">Favorite</div> </div> </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/TrustSection.astro", void 0);

const $$ServicesOverview = createComponent(($$result, $$props, $$slots) => {
  const { Utensils, Bath, Trees, Home, Hammer, Paintbrush } = lucide;
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
  return renderTemplate`${maybeRenderHead()}<section id="services" class="w-full py-16 bg-[#FFFFFF]"> <div class="container mx-auto px-4"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Our Services</h2> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8"> ${services.map(({ icon: Icon, title, desc, href }) => renderTemplate`<div class="bg-white rounded-xl shadow-md flex flex-col items-center p-8 text-center hover:shadow-xl transition-shadow"> <div class="mb-4 text-[color:var(--primary)]">${Icon && renderTemplate`${renderComponent($$result, "Icon", Icon, { "size": 40, "strokeWidth": 1.5 })}`}</div> <h3 class="text-xl font-semibold mb-2">${title}</h3> <p class="text-gray-600 mb-4">${desc}</p> <a${addAttribute(href, "href")} class="inline-block mt-auto px-6 py-2 rounded-full bg-[color:var(--primary)] text-white font-medium shadow hover:bg-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">
Learn More
</a> </div>`)} </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/ServicesOverview.astro", void 0);

function PortfolioTeaser({ categories }) {
  const [openSection, setOpenSection] = useState(null);
  const [open, setOpen] = useState(null);
  React.useEffect(() => {
    if (!open) return;
    function onKeyDown(e) {
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") setOpen(null);
    }
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, categories]);
  function nextImage() {
    if (!open) return;
    const cat = categories.find((c) => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx + 1) % cat.images.length
    });
  }
  function prevImage() {
    if (!open) return;
    const cat = categories.find((c) => c.name === open.category);
    if (!cat) return;
    setOpen({
      category: open.category,
      idx: (open.idx - 1 + cat.images.length) % cat.images.length
    });
  }
  return /* @__PURE__ */ jsx("section", { id: "portfolio", className: "w-full py-16 bg-white", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4", children: [
    /* @__PURE__ */ jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-10 text-[color:var(--primary)]", children: "Our Work" }),
    /* @__PURE__ */ jsx("div", { className: "w-full", children: categories.map(({ name, images }) => /* @__PURE__ */ jsx(Disclosure, { as: "div", className: "mb-4", children: ({ open: open2 }) => {
      const isOpen = openSection === name;
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsxs(
          Disclosure.Button,
          {
            className: `flex w-full justify-between items-center text-2xl md:text-3xl font-semibold text-[color:var(--primary)] capitalize py-4 transition-all hover:underline focus:outline-none ${isOpen ? "border-b" : ""}`,
            onClick: () => setOpenSection(isOpen ? null : name),
            children: [
              /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-3", children: [
                (() => {
                  let Icon = Sofa;
                  if (/bathroom/i.test(name)) Icon = ShowerHead;
                  else if (/kitchen/i.test(name)) Icon = ChefHat;
                  else if (/stairs?/i.test(name)) Icon = Landmark;
                  else if (/other/i.test(name)) Icon = Sofa;
                  return /* @__PURE__ */ jsx(
                    Icon,
                    {
                      className: "w-12 h-12 rounded-lg object-cover shadow-sm border border-gray-200 bg-gray-100 p-2",
                      "aria-hidden": "true",
                      strokeWidth: 1.5
                    }
                  );
                })(),
                /* @__PURE__ */ jsx("span", { children: name })
              ] }),
              /* @__PURE__ */ jsx(ChevronDown, { className: `h-5 w-5 ml-2 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}` })
            ]
          }
        ),
        /* @__PURE__ */ jsx(Disclosure.Panel, { static: isOpen, className: "overflow-hidden transition-all", children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6", children: images.map((src, idx) => /* @__PURE__ */ jsxs(
          motion.button,
          {
            type: "button",
            className: "group focus:outline-none",
            onClick: () => setOpen({ category: name, idx }),
            initial: { opacity: 0, y: 40 },
            whileInView: { opacity: 1, y: 0 },
            viewport: { once: true, amount: 0.2 },
            transition: { duration: 0.5, delay: idx * 0.08 },
            style: { position: "relative" },
            children: [
              /* @__PURE__ */ jsx(
                motion.img,
                {
                  src,
                  alt: `${name} project photo ${idx + 1}`,
                  className: "rounded-xl w-full aspect-[4/3] object-cover shadow-md transition-shadow duration-300 group-hover:shadow-2xl",
                  loading: "lazy"
                }
              ),
              /* @__PURE__ */ jsx(
                "span",
                {
                  className: "absolute inset-0 rounded-xl bg-[color:var(--secondary)] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center",
                  "aria-hidden": "true",
                  children: /* @__PURE__ */ jsx("svg", { className: "w-10 h-10 text-[color:var(--accent)] opacity-80", fill: "none", stroke: "currentColor", strokeWidth: "2", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M15 10l4.553 2.276a1 1 0 010 1.448L15 16m-6-6l-4.553 2.276a1 1 0 000 1.448L9 16" }) })
                }
              )
            ]
          },
          src
        )) }) })
      ] });
    } }, name)) }),
    /* @__PURE__ */ jsx(AnimatePresence, { children: open && (() => {
      const cat = categories.find((c) => c.name === open.category);
      if (!cat) return null;
      const src = cat.images[open.idx];
      return /* @__PURE__ */ jsx(
        motion.div,
        {
          className: "fixed inset-0 z-50 flex items-center justify-center bg-[color:var(--secondary)] opacity-70",
          onClick: () => setOpen(null),
          initial: { opacity: 0 },
          animate: { opacity: 1 },
          exit: { opacity: 0 },
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
                /* @__PURE__ */ jsx("div", { className: "aspect-[4/3] max-w-3xl max-h-[80vh] w-[90vw] bg-[color:var(--secondary)] flex items-center justify-center rounded-2xl overflow-hidden", children: /* @__PURE__ */ jsx(
                  "img",
                  {
                    src,
                    alt: "Enlarged project photo",
                    className: "object-cover w-full h-full rounded-2xl shadow-2xl"
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
  const picsDir = new URL("../../public/pictures", import.meta.url).pathname;
  const dirNames = await fs.readdir(picsDir);
  let categories = [];
  for (const dir of dirNames) {
    const dirPath = path.join(picsDir, dir);
    const stat = await fs.stat(dirPath);
    if (!stat.isDirectory()) continue;
    const files = await fs.readdir(dirPath);
    const images = files.filter((name) => /\.(jpe?g|png)$/i.test(name)).map((name) => `/pictures/${dir}/${name}`);
    if (images.length) categories.push({ name: dir, images });
  }
  categories = categories.filter((cat) => cat.name.toLowerCase() !== "logo");
  return renderTemplate`${renderComponent($$result, "PortfolioTeaser", PortfolioTeaser, { "categories": categories, "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/PortfolioTeaser.tsx", "client:component-export": "default" })}`;
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
      quote: "Our old staircase was creaky and outdated, but now it\u2019s the centerpiece of our home! Michal\u2019s team worked quickly and paid attention to every detail. The new stairs are beautiful and feel incredibly solid. We get compliments from everyone who visits!",
      image: "/pictures/stairs/stairs1.jpeg"
    }
  ];
  return renderTemplate`${maybeRenderHead()}<section id="testimonials" class="w-full py-16 bg-blue-50"> <div class="container mx-auto px-4"> <h2 class="text-3xl md:text-4xl font-bold text-center mb-10 text-gray-900">Testimonials</h2> <div class="grid grid-cols-1 md:grid-cols-3 gap-8"> ${testimonials.map(({ name, service, quote, image }) => renderTemplate`<div class="bg-white rounded-xl shadow flex flex-col items-center p-8 text-center"> <img${addAttribute(image, "src")}${addAttribute(`Project photo for ${service}`, "alt")} class="w-full h-48 object-cover rounded-lg shadow mb-4" loading="lazy"> <blockquote class="italic text-gray-600 mb-4">“${quote}”</blockquote> <div class="font-semibold text-gray-900">${name}</div> <div class="text-sm text-gray-500">${service}</div> </div>`)} </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/Testimonials.astro", void 0);

const $$SimpleFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-[color:var(--primary)] text-white rounded-t-xl py-10 mt-12"> <div class="container mx-auto px-4"> <!-- Top Section: Logo, Navigation, Contact --> <div class="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-8"> <!-- Logo --> <div class="flex items-center gap-3"> <img src="/pictures/logo/michalLogo.png" alt="MichalExp Logo" class="h-10 w-auto bg-white/10 p-1 rounded"> <span class="text-2xl font-bold font-playfair">MichalExp</span> </div> <!-- Navigation --> <nav class="flex gap-8 text-lg text-[color:var(--primary)]"> <a href="/" class="hover:text-[color:var(--accent)] transition-colors">Home</a> <a href="/projects" class="hover:text-[color:var(--accent)] transition-colors">Projects</a> <a href="/contact" class="hover:text-[color:var(--accent)] transition-colors">Contact</a> </nav> <!-- Contact Info --> <div class="flex flex-col gap-2"> <div>Chicago, IL & Suburbs</div> <a href="tel:3125551234" class="hover:text-[color:var(--accent)]">(312) 555-1234</a> <a href="mailto:info@michalexp.com" class="hover:text-[color:var(--accent)]">info@michalexp.com</a> </div> </div> <!-- Bottom Section: Social Icons & Copyright --> <div class="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-[color:var(--accent)]"> <!-- Social Icons --> <div class="flex gap-4 mb-4 md:mb-0"> <a href="#" aria-label="Facebook" class="hover:text-[color:var(--accent)] transition-colors"> <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" class="lucide lucide-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg> </a> <a href="#" aria-label="Instagram" class="hover:text-[color:var(--accent)] transition-colors"> <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" class="lucide lucide-instagram"><rect width="20" height="20" x="2" y="2" rx="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg> </a> <a href="#" aria-label="LinkedIn" class="hover:text-[color:var(--accent)] transition-colors"> <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg> </a> </div> <!-- Copyright --> <div class="text-sm text-blue-200">
&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} MichalExp. All rights reserved.
</div> </div> </div> </footer>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/components/SimpleFooter.astro", void 0);

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
