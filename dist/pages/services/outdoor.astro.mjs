/* empty css                                    */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_gZs2SP7F.mjs';
import { Trees } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Outdoor = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Outdoor Spaces | Our Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-16"> <div class="container mx-auto px-4 max-w-4xl"> <div class="mb-10 text-center"> <div class="inline-block text-blue-500 mb-4"> ${renderComponent($$result2, "Trees", Trees, { "size": 60, "strokeWidth": 1.5 })} </div> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Outdoor Spaces</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Decks, patios, and landscaping to expand your living area outdoors.
</p> </div> <div class="prose prose-lg max-w-none"> <p>
Extend your living space beyond your four walls with our outdoor living solutions. We design and build beautiful, functional outdoor areas that connect your home to nature and provide perfect spaces for relaxation, entertainment, and family gatherings.
</p> <h2>Our Outdoor Space Services Include:</h2> <ul> <li><strong>Custom Deck Construction:</strong> Beautifully crafted decks in a variety of materials including wood, composite, and PVC</li> <li><strong>Patio Design & Installation:</strong> Concrete, pavers, stone, and brick patios designed for beauty and durability</li> <li><strong>Pergolas & Gazebos:</strong> Stylish shade structures that define outdoor rooms and add architectural interest</li> <li><strong>Outdoor Kitchens:</strong> Fully equipped cooking spaces for alfresco dining and entertaining</li> <li><strong>Fire Features:</strong> Fire pits and fireplaces that extend the outdoor season and create a focal point</li> <li><strong>Landscape Design:</strong> Thoughtful plantings and hardscapes that enhance your property's beauty and function</li> <li><strong>Outdoor Lighting:</strong> Strategic illumination for safety, security, and ambiance</li> </ul> <h2>Benefits of Investing in Outdoor Living Spaces</h2> <p>
Well-designed outdoor living areas offer numerous advantages:
</p> <ul> <li><strong>Expanded Living Space:</strong> Gain functional square footage without the cost of a traditional addition</li> <li><strong>Increased Home Value:</strong> Quality outdoor improvements offer excellent return on investment</li> <li><strong>Enhanced Lifestyle:</strong> Create spaces for recreation, relaxation, and entertainment</li> <li><strong>Connection to Nature:</strong> Enjoy the health benefits of spending time outdoors</li> <li><strong>Energy Efficiency:</strong> Strategic landscaping can reduce heating and cooling costs</li> </ul> <h2>Our Outdoor Project Process</h2> <p>
Creating exceptional outdoor spaces requires careful planning and expert execution:
</p> <ol> <li><strong>Site Analysis:</strong> We evaluate your property's characteristics, including topography, drainage, and views</li> <li><strong>Design Consultation:</strong> We discuss your goals, preferences, and budget to develop a vision</li> <li><strong>Custom Design:</strong> We create detailed plans that integrate your outdoor space with your home and landscape</li> <li><strong>Material Selection:</strong> We help you choose materials that balance aesthetics, durability, and maintenance requirements</li> <li><strong>Professional Construction:</strong> Our skilled craftsmen build your outdoor space with attention to detail</li> <li><strong>Final Walkthrough:</strong> We ensure every aspect of your project meets our standards and your expectations</li> </ol> <div class="mt-8 text-center"> <a href="/contact" class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium shadow hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200">
Plan Your Outdoor Space
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/outdoor.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/outdoor.astro";
const $$url = "/services/outdoor";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Outdoor,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
