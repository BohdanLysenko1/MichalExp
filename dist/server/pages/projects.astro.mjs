/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_B-ZIt8ph.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Projects = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container-premium py-16 sm:py-20"> <h1 class="text-3xl sm:text-4xl font-playfair mb-10 text-center">Recent Projects</h1> <div class="grid md:grid-cols-2 gap-8"> <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center"> <img src="/pictures/bathroom/shower1.jpg" alt="Kitchen remodel" class="lazy-img rounded-2xl object-cover w-full sm:w-40 h-48 sm:h-32" loading="lazy" decoding="async"> <div> <h2 class="text-2xl font-semibold mb-2">Lakeview Kitchen Transformation</h2> <p class="text-gray-700">Complete redesign with custom cabinets, quartz countertops, and modern lighting.</p> </div> </div> <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center"> <img src="/pictures/IMG_5276.HEIC" alt="Basement buildout" class="lazy-img rounded-2xl object-cover w-full sm:w-40 h-48 sm:h-32" loading="lazy" decoding="async"> <div> <h2 class="text-2xl font-semibold mb-2">Wilmette Basement Retreat</h2> <p class="text-gray-700">Finished basement with home theater, wet bar, and guest suite for entertaining.</p> </div> </div> <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center"> <img src="/pictures/Custom Solutions/doors.jpg" alt="Bathroom remodel" class="lazy-img rounded-2xl object-cover w-full sm:w-40 h-48 sm:h-32" loading="lazy" decoding="async"> <div> <h2 class="text-2xl font-semibold mb-2">Lincoln Park Spa Bath</h2> <p class="text-gray-700">Luxury bathroom renovation with walk-in shower, soaking tub, and heated floors.</p> </div> </div> <div class="bg-white rounded-xl shadow-lg p-6 flex flex-col md:flex-row gap-4 items-center"> <img src="/pictures/stairs/stairs5.jpg" alt="Exterior remodel" class="lazy-img rounded-2xl object-cover w-full sm:w-40 h-48 sm:h-32" loading="lazy" decoding="async"> <div> <h2 class="text-2xl font-semibold mb-2">Suburban Curb Appeal</h2> <p class="text-gray-700">Exterior facelift with new siding, windows, and landscaping for a fresh look.</p> </div> </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/projects.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/projects.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Projects,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
