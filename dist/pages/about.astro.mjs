/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from '../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$About = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-12 max-w-3xl"> <h1 class="text-4xl font-playfair mb-4">About MichalExp</h1> <p class="text-lg mb-4">MichalExp is a family-owned remodeling company serving Chicago and all surrounding suburbs. With over 15 years of experience, we are dedicated to transforming homes with integrity, quality, and attention to detail.</p> <p class="mb-4 text-gray-700">Our mission is to make your dream space a reality—on time, on budget, and with minimal disruption. We believe in honest communication, transparent pricing, and treating every home as if it were our own.</p> <p class="text-gray-700">Whether you need a kitchen makeover, a finished basement, or a whole-home renovation, MichalExp is here to help you love where you live.</p> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/about.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/about.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$About,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
