/* empty css                                    */
import { c as createComponent, a as createAstro, m as maybeRenderHead, b as renderComponent, r as renderTemplate } from '../../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro();
async function getStaticPaths() {
  const modules = /* #__PURE__ */ Object.assign({});
  return Object.keys(modules).map((path) => {
    const slug = path.split("/").pop().replace(".md", "");
    return { params: { slug } };
  });
}
const $$slug = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const modules = /* #__PURE__ */ Object.assign({});
  const post = modules[`../../content/blog/${slug}.md`];
  if (!post) {
    throw new Error(`Post not found: ${slug}`);
  }
  const { frontmatter, default: Content } = post;
  return renderTemplate`${maybeRenderHead()}<article class="container mx-auto py-8"> <h1 class="text-4xl font-playfair mb-4">${frontmatter.title}</h1> <p class="text-sm text-gray-500 mb-8">${new Date(frontmatter.date).toLocaleDateString()}</p> ${renderComponent($$result, "Content", Content, {})} </article>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/blog/[slug].astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
