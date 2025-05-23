/* empty css                                    */
import { c as createComponent, b as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_gZs2SP7F.mjs';
import { Paintbrush } from 'lucide-react';
export { renderers } from '../../renderers.mjs';

const $$Painting = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Painting & Finishes | Our Services" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section class="w-full py-16"> <div class="container mx-auto px-4 max-w-4xl"> <div class="mb-10 text-center"> <div class="inline-block text-blue-500 mb-4"> ${renderComponent($$result2, "Paintbrush", Paintbrush, { "size": 60, "strokeWidth": 1.5 })} </div> <h1 class="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Painting & Finishes</h1> <p class="text-xl text-gray-600 max-w-3xl mx-auto">
Professional painting, wall treatments, and finishing touches.
</p> </div> <div class="prose prose-lg max-w-none"> <p>
Nothing transforms a space as dramatically and cost-effectively as a fresh coat of paint or a new finish. Our professional painting and finishing services elevate your home's appearance, protect surfaces, and express your personal style through color and texture.
</p> <h2>Our Painting & Finishing Services Include:</h2> <ul> <li><strong>Interior Painting:</strong> Walls, ceilings, trim, doors, and cabinetry</li> <li><strong>Exterior Painting:</strong> Siding, trim, doors, decks, and other outdoor surfaces</li> <li><strong>Specialty Finishes:</strong> Faux finishes, glazes, textured treatments, and decorative techniques</li> <li><strong>Cabinet Refinishing:</strong> Transform your cabinets with new paint or stain without full replacement</li> <li><strong>Staining & Sealing:</strong> Protect and enhance wood surfaces including floors, trim, and furniture</li> <li><strong>Wallpaper Installation:</strong> Expert application of traditional and modern wallcoverings</li> <li><strong>Surface Preparation:</strong> Thorough cleaning, sanding, patching, and priming for perfect results</li> </ul> <h2>The Importance of Professional Painting</h2> <p>
While painting might seem like a simple DIY project, professional results require expertise, proper tools, and meticulous attention to detail:
</p> <ul> <li><strong>Surface Preparation:</strong> We properly prepare surfaces to ensure lasting results</li> <li><strong>Product Knowledge:</strong> We select the right paints and finishes for each application</li> <li><strong>Precision Application:</strong> Our techniques ensure clean lines and uniform coverage</li> <li><strong>Efficiency:</strong> We complete projects quickly with minimal disruption to your household</li> <li><strong>Protection:</strong> We carefully protect your furnishings, floors, and fixtures</li> <li><strong>Cleanup:</strong> We leave your home spotless when the job is complete</li> </ul> <h2>Our Painting Process</h2> <p>
We follow a systematic approach to deliver flawless results:
</p> <ol> <li><strong>Color Consultation:</strong> We help you select colors that complement your home and reflect your taste</li> <li><strong>Surface Preparation:</strong> We clean, repair, sand, and prime surfaces as needed</li> <li><strong>Protection:</strong> We carefully cover and mask areas not being painted</li> <li><strong>Application:</strong> We apply paints and finishes using appropriate techniques for each surface</li> <li><strong>Inspection:</strong> We examine our work under various lighting conditions to ensure perfection</li> <li><strong>Cleanup:</strong> We remove all materials and leave your space clean and ready to enjoy</li> </ol> <h2>Popular Painting Trends</h2> <p>
Consider these current trends to refresh your space:
</p> <ul> <li><strong>Statement Walls:</strong> Bold colors or patterns on a single wall to create visual interest</li> <li><strong>Two-Tone Cabinetry:</strong> Different colors for upper and lower cabinets for a custom look</li> <li><strong>Painted Ceilings:</strong> Color on ceilings to add dimension and personality</li> <li><strong>Interior Doors:</strong> Bold colors on interior doors as an unexpected design element</li> <li><strong>Textured Finishes:</strong> Subtle textures that add depth and character to walls</li> </ul> <div class="mt-8 text-center"> <a href="/contact" class="inline-block px-8 py-3 rounded-full bg-[color:var(--primary)] text-white font-medium shadow hover:bg-[color:var(--accent)] focus:outline-none focus:ring-2 focus:ring-[color:var(--accent)] focus:ring-offset-2 transition-all duration-200">
Schedule Your Painting Project
</a> </div> </div> </div> </section> ` })}`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/painting.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/painting.astro";
const $$url = "/services/painting";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Painting,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
