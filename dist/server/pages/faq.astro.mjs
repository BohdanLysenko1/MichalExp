/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_B-ZIt8ph.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Faq = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-12 max-w-2xl"> <h1 class="text-4xl font-playfair mb-8">Frequently Asked Questions</h1> <div class="space-y-6"> <details class="bg-white rounded-xl shadow p-4"> <summary class="font-semibold cursor-pointer">What areas do you serve?</summary> <div class="mt-2 text-gray-700">We serve all of Chicago and the surrounding suburbs.</div> </details> <details class="bg-white rounded-xl shadow p-4"> <summary class="font-semibold cursor-pointer">How do I get a quote?</summary> <div class="mt-2 text-gray-700">Fill out our <a href="/contact" class="text-blue-600 hover:underline">contact form</a> or call us to schedule a free estimate.</div> </details> <details class="bg-white rounded-xl shadow p-4"> <summary class="font-semibold cursor-pointer">Are you licensed and insured?</summary> <div class="mt-2 text-gray-700">Yes, MichalExp is fully licensed and insured for your peace of mind.</div> </details> <details class="bg-white rounded-xl shadow p-4"> <summary class="font-semibold cursor-pointer">Can you help with design?</summary> <div class="mt-2 text-gray-700">Absolutely! We offer design consultations to help you plan your perfect space.</div> </details> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/faq.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/faq.astro";
const $$url = "/faq";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Faq,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
