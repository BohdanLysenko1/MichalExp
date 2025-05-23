/* empty css                                    */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_gZs2SP7F.mjs';
import { Kitchen } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Kitchen = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Kitchen Remodels | Our Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-16"> <div class="container mx-auto px-4 max-w-4xl"> <div class="mb-10 text-center"> <div class="inline-block text-blue-500 mb-4"> ${renderComponent($$result2, "Kitchen", Kitchen, { "size": 60, "strokeWidth": 1.5 })} </div> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Kitchen Remodels</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Custom cabinetry, countertops, lighting, and layouts for the heart of your home.
</p> </div> <div class="prose prose-lg max-w-none"> <p>
Your kitchen is more than just a place to cook—it's the heart of your home, where memories are made and shared.
          At our company, we specialize in transforming outdated kitchens into beautiful, functional spaces that reflect your style and meet your family's needs.
</p> <h2>Our Kitchen Remodeling Services Include:</h2> <ul> <li><strong>Custom Cabinetry:</strong> Handcrafted cabinets designed to maximize storage and enhance your kitchen's aesthetic</li> <li><strong>Countertop Installation:</strong> Premium materials including granite, quartz, marble, and eco-friendly options</li> <li><strong>Kitchen Islands:</strong> Custom-built islands that provide additional workspace and storage</li> <li><strong>Lighting Design:</strong> Layered lighting solutions including ambient, task, and accent lighting</li> <li><strong>Backsplash Installation:</strong> Tile, stone, or glass backsplashes that protect your walls and add style</li> <li><strong>Flooring Solutions:</strong> Durable, water-resistant flooring options that complement your design</li> <li><strong>Appliance Installation:</strong> Expert installation of energy-efficient appliances</li> </ul> <h2>Our Kitchen Remodeling Process</h2> <p>
We understand that remodeling your kitchen is a significant investment. That's why we follow a thorough, transparent process from concept to completion:
</p> <ol> <li><strong>Initial Consultation:</strong> We discuss your vision, needs, budget, and timeline</li> <li><strong>Design Planning:</strong> Our designers create detailed plans and 3D renderings</li> <li><strong>Material Selection:</strong> We help you choose the perfect materials and finishes</li> <li><strong>Construction:</strong> Our skilled craftsmen handle the renovation with minimal disruption</li> <li><strong>Final Walkthrough:</strong> We ensure every detail meets our high standards and your expectations</li> </ol> <h2>Why Choose Us for Your Kitchen Remodel</h2> <p>
With years of experience transforming kitchens throughout the area, we bring expertise, craftsmanship, and attention to detail to every project. We're committed to delivering exceptional results on time and within budget.
</p> <div class="mt-8 text-center"> <a href="/contact" class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium shadow hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200">
Request a Consultation
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/kitchen.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/kitchen.astro";
const $$url = "/services/kitchen";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Kitchen,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
