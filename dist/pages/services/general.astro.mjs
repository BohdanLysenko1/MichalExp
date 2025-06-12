/* empty css                                    */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_gZs2SP7F.mjs';
import { Hammer } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$General = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "General Remodeling | Our Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-16"> <div class="container mx-auto px-4 max-w-4xl"> <div class="mb-10 text-center"> <div class="inline-block text-blue-500 mb-4"> ${renderComponent($$result2, "Hammer", Hammer, { "size": 60, "strokeWidth": 1.5 })} </div> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">General Remodeling</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Whole-home updates, repairs, and custom projects—big or small.
</p> </div> <div class="prose prose-lg max-w-none"> <p>
From minor repairs to whole-house renovations, our general remodeling services address all aspects of home improvement. We bring the same attention to detail and quality craftsmanship to projects of every size, ensuring your home functions beautifully and reflects your personal style.
</p> <h2>Our General Remodeling Services Include:</h2> <ul> <li><strong>Whole-Home Renovations:</strong> Comprehensive updates to multiple rooms or entire houses</li> <li><strong>Room Additions:</strong> Expand your living space with carefully integrated new construction</li> <li><strong>Interior Reconfigurations:</strong> Improved floor plans that enhance flow and functionality</li> <li><strong>Structural Repairs:</strong> Solutions for foundation issues, water damage, and other structural concerns</li> <li><strong>Window & Door Replacement:</strong> Energy-efficient upgrades that improve comfort and aesthetics</li> <li><strong>Flooring Installation:</strong> A wide range of options including hardwood, tile, luxury vinyl, and carpet</li> <li><strong>Custom Built-ins:</strong> Tailor-made storage solutions that maximize space and add character</li> </ul> <h2>Why Choose Professional Remodeling</h2> <p>
Working with a professional remodeling contractor offers significant advantages:
</p> <ul> <li><strong>Design Expertise:</strong> We help you navigate design decisions and avoid costly mistakes</li> <li><strong>Project Management:</strong> We coordinate all aspects of your project, from permits to final inspections</li> <li><strong>Quality Craftsmanship:</strong> Our skilled tradespeople deliver superior results that last</li> <li><strong>Code Compliance:</strong> We ensure all work meets current building codes and safety standards</li> <li><strong>Warranty Protection:</strong> Our workmanship is backed by comprehensive warranties</li> </ul> <h2>Our Remodeling Process</h2> <p>
We follow a systematic approach that ensures a smooth, successful project:
</p> <ol> <li><strong>Initial Consultation:</strong> We discuss your goals, preferences, and budget constraints</li> <li><strong>Detailed Planning:</strong> We develop comprehensive plans and specifications</li> <li><strong>Accurate Estimation:</strong> We provide transparent pricing with no hidden costs</li> <li><strong>Material Selection:</strong> We guide you through choosing the right materials for your project</li> <li><strong>Professional Execution:</strong> Our team completes the work with attention to detail and minimal disruption</li> <li><strong>Quality Assurance:</strong> We conduct thorough inspections throughout the project</li> <li><strong>Final Walkthrough:</strong> We ensure your complete satisfaction before considering the project complete</li> </ol> <h2>Common Remodeling Projects</h2> <p>
Some of our most popular services include:
</p> <ul> <li><strong>Aging-in-Place Modifications:</strong> Accessibility improvements that allow homeowners to remain in their homes longer</li> <li><strong>Energy-Efficiency Upgrades:</strong> Insulation, windows, doors, and systems that reduce utility costs</li> <li><strong>Historic Home Renovations:</strong> Sensitive updates that preserve character while improving functionality</li> <li><strong>Home Office Conversions:</strong> Dedicated workspaces designed for productivity and comfort</li> <li><strong>Multi-Generational Living Solutions:</strong> Adaptations that accommodate extended family members</li> </ul> <div class="mt-8 text-center"> <a href="/contact" class="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-sky-400 to-blue-500 text-white font-medium shadow hover:from-sky-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 transition-all duration-200">
Start Your Remodeling Project
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/general.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/general.astro";
const $$url = "/services/general";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$General,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
