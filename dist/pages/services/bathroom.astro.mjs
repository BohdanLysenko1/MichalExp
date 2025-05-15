/* empty css                                    */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_gZs2SP7F.mjs';
import { Bath } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Bathroom = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Bathroom Renovation | Our Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-16"> <div class="container mx-auto px-4 max-w-4xl"> <div class="mb-10 text-center"> <div class="inline-block text-[color:var(--primary)] mb-4"> ${renderComponent($$result2, "Bath", Bath, { "size": 60, "strokeWidth": 1.5 })} </div> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Bathroom Renovation</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Modern fixtures, tiling, and spa-like upgrades for every budget.
</p> </div> <div class="prose prose-lg max-w-none"> <p>
Your bathroom should be both functional and relaxing—a personal retreat within your home. Our bathroom renovation services transform ordinary bathrooms into beautiful, practical spaces that enhance your daily routine and add value to your home.
</p> <h2>Our Bathroom Renovation Services Include:</h2> <ul> <li><strong>Complete Bathroom Remodels:</strong> Full transformations from floor to ceiling</li> <li><strong>Shower & Tub Installation:</strong> Custom shower enclosures, walk-in showers, and luxury bathtubs</li> <li><strong>Tile Work:</strong> Expert installation of floor and wall tiles in various materials and patterns</li> <li><strong>Vanity & Cabinetry:</strong> Custom or pre-manufactured solutions for optimal storage</li> <li><strong>Fixture Upgrades:</strong> Water-efficient toilets, faucets, and showerheads</li> <li><strong>Lighting Solutions:</strong> Ambient, task, and accent lighting for functionality and ambiance</li> <li><strong>Accessibility Features:</strong> Grab bars, curbless showers, and other aging-in-place modifications</li> </ul> <h2>Our Bathroom Renovation Process</h2> <p>
We follow a streamlined process to deliver exceptional results with minimal disruption:
</p> <ol> <li><strong>Initial Consultation:</strong> We assess your current bathroom and discuss your vision and needs</li> <li><strong>Design Phase:</strong> Our designers create detailed plans that balance aesthetics and functionality</li> <li><strong>Material Selection:</strong> We help you choose fixtures, tiles, and finishes that suit your style and budget</li> <li><strong>Construction:</strong> Our skilled craftsmen execute the renovation with attention to detail</li> <li><strong>Final Inspection:</strong> We ensure everything is properly installed and functions perfectly</li> </ol> <h2>Bathroom Renovation Ideas</h2> <p>
Whether you're looking for a quick refresh or a complete transformation, we offer solutions for every scope and budget:
</p> <ul> <li><strong>Spa-Inspired Retreats:</strong> Rainfall showers, soaking tubs, and natural elements</li> <li><strong>Space-Saving Solutions:</strong> Innovative storage and fixtures for small bathrooms</li> <li><strong>Luxury Upgrades:</strong> Heated floors, smart toilets, and digital shower controls</li> <li><strong>Family-Friendly Bathrooms:</strong> Durable, low-maintenance materials and practical layouts</li> </ul> <div class="mt-8 text-center"> <a href="/contact" class="inline-block px-8 py-3 rounded-full bg-[color:var(--primary)] text-white font-medium shadow hover:bg-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">
Schedule a Bathroom Consultation
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/bathroom.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/bathroom.astro";
const $$url = "/services/bathroom";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Bathroom,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
