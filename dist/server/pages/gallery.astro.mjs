/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_B-ZIt8ph.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Gallery = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container-premium py-16 sm:py-20"> <h1 class="text-3xl sm:text-4xl font-playfair mb-10 text-center">Project Gallery</h1> <div class="grid gap-6 sm:grid-cols-2 md:grid-cols-3"> <img src="/pictures/bathroom/shower1.jpg" alt="Modern kitchen remodel" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/kitchen/kitchenCabinets.jpg" alt="Bathroom renovation" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/kitchen/kitchenCabinets2.jpg" alt="Basement finishing" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/IMG_5276.jpg" alt="Custom carpentry" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/IMG_5323.jpg" alt="Open concept living area" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/bathroom/shower2.jpg" alt="Flooring installation" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/bathroom/shower+tub.jpg" alt="Home addition" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/stairs/stairs3.jpeg" alt="Remodeled exterior" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/stairs/stairs5.jpg" alt="Finished basement" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> <img src="/pictures/stairs/stairs4.jpg" alt="Luxury bathroom" class="lazy-img rounded-2xl shadow-lg object-cover aspect-[4/3] w-full h-auto" loading="lazy" decoding="async"> </div> </section>`;
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
