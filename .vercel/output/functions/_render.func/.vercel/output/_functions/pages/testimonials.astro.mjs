/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_DU5pJwfW.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Testimonials = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-12 max-w-3xl"> <h1 class="text-4xl font-playfair mb-8">What Our Clients Say</h1> <div class="space-y-8"> <div class="bg-white rounded-xl shadow-lg p-6"> <p class="text-lg mb-2">“MichalExp made our kitchen remodel easy and stress-free. The crew was professional, tidy, and the results are stunning!”</p> <div class="font-semibold">— Sarah K., Chicago</div> </div> <div class="bg-white rounded-xl shadow-lg p-6"> <p class="text-lg mb-2">“We love our new basement! MichalExp finished on time and on budget. Highly recommend for any home project.”</p> <div class="font-semibold">— Mark & Lisa, Evanston</div> </div> <div class="bg-white rounded-xl shadow-lg p-6"> <p class="text-lg mb-2">“Excellent craftsmanship and great communication throughout our bathroom renovation.”</p> <div class="font-semibold">— Priya S., Oak Park</div> </div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/testimonials.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/testimonials.astro";
const $$url = "/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
