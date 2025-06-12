/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-12"> <h1 class="text-4xl font-playfair mb-8">Project Gallery</h1> <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"> <img src="/pictures/bathroom/shower1.jpg" alt="Modern kitchen remodel" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/kitchen/kitchenCabinets.jpg" alt="Bathroom renovation" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/kitchen/kitchenCabinets2.jpg" alt="Basement finishing" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/IMG_5276.HEIC" alt="Custom carpentry" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/IMG_5323.HEIC" alt="Open concept living area" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/bathroom/shower2.jpg" alt="Flooring installation" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/bathroom/shower+tub.jpg" alt="Home addition" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/stairs/stairs3.jpeg" alt="Remodeled exterior" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/stairs/stairs5.jpg" alt="Finished basement" class="rounded-lg shadow" loading="lazy"> <img src="/pictures/stairs/stairs4.jpg" alt="Luxury bathroom" class="rounded-lg shadow" loading="lazy"> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/gallery.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/gallery.astro";
const $$url = "/gallery";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Gallery,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
