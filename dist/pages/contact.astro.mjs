/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, b as renderComponent, r as renderTemplate } from '../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../renderers.mjs';

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`---
import ${Dialog} from "../components/ui/dialog";
---
${maybeRenderHead()}<section class="container mx-auto py-12 max-w-2xl"> <h1 class="text-4xl font-playfair mb-4">Contact MichalExp</h1> <p class="text-lg mb-6">Ready to start your remodeling project? Fill out the form below or call us for a free estimate.</p> <div class="mb-8"> ${renderComponent($$result, "Dialog", Dialog, { "client:idle": true, "client:component-hydration": "idle" }, { "default": ($$result2) => renderTemplate` <form class="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 max-w-xl mx-auto"> <label class="font-semibold">Name
<input type="text" name="name" required class="block w-full mt-1 border rounded px-3 py-2"> </label> <label class="font-semibold">Email
<input type="email" name="email" required class="block w-full mt-1 border rounded px-3 py-2"> </label> <label class="font-semibold">Message
<textarea name="message" required class="block w-full mt-1 border rounded px-3 py-2" rows="4"></textarea> </label> <button type="submit" class="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Send Message</button> </form> ` })} </div> <div class="text-gray-700"> <div><span class="font-semibold">Phone:</span> (312) 555-0199</div> <div><span class="font-semibold">Service Area:</span> Chicago &amp; all suburbs</div> <div><span class="font-semibold">Email:</span> info@michalexp.com</div> </div> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/contact.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
