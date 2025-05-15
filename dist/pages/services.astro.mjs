/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Services = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-12"> <h1 class="text-4xl font-playfair mb-8">Our Remodeling Services</h1> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white rounded-xl shadow-lg p-6"> <h2 class="text-2xl font-semibold mb-2">Kitchen Remodeling</h2> <p class="text-gray-700">Custom cabinetry, countertops, lighting, and layouts to create your dream kitchen.</p> </div> <div class="bg-white rounded-xl shadow-lg p-6"> <h2 class="text-2xl font-semibold mb-2">Bathroom Renovation</h2> <p class="text-gray-700">Modernize your bath with beautiful tilework, fixtures, vanities, and spa-like details.</p> </div> <div class="bg-white rounded-xl shadow-lg p-6"> <h2 class="text-2xl font-semibold mb-2">Basement Finishing</h2> <p class="text-gray-700">Turn your basement into a functional living space, home theater, or guest suite.</p> </div> <div class="bg-white rounded-xl shadow-lg p-6"> <h2 class="text-2xl font-semibold mb-2">Additions &amp; Carpentry</h2> <p class="text-gray-700">Expand your home with seamless additions or custom built-ins and trim work.</p> </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services.astro";
const $$url = "/services";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Services,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
