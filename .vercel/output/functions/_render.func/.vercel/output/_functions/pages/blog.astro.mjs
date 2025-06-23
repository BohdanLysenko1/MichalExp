/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as addAttribute, r as renderTemplate } from '../chunks/astro/server_DU5pJwfW.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  const modules = /* #__PURE__ */ Object.assign({});
  const posts = Object.entries(modules).map(([path, post]) => {
    const slug = path.split("/").pop()?.replace(".md", "") ?? "";
    return { slug, ...post.frontmatter };
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  return renderTemplate`${maybeRenderHead()}<section class="container mx-auto py-8"> <h1 class="text-4xl font-playfair mb-4">Blog</h1> <ul class="space-y-6"> ${posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-2xl font-playfair text-[color:var(--primary)] hover:underline">${post.title}</a> <p class="text-sm text-gray-500">${new Date(post.date).toLocaleDateString()}</p> <p class="mt-1">${post.description}</p> </li>`)} </ul> </section>`;
}, "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/blog/index.astro", void 0);

const $$file = "/Users/bohdanlysenko/Desktop/MichalExp/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
