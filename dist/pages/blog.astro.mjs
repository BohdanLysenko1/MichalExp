/* empty css                                 */
import { c as createComponent, r as renderTemplate, d as addAttribute, m as maybeRenderHead } from '../chunks/astro/server_CUsm7G4n.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
export { renderers } from '../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template([`<script lang="ts">
  const modules = import.meta.glob('../../content/blog/*.md', { eager: true });
  const posts = Object.entries(modules)
    .map(([path, post]: [string, any]) => {
      const slug = path.split('/').pop().replace('.md', '');
      return { slug, ...(post.frontmatter as any) };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
<\/script> `, '<section class="container mx-auto py-8"> <h1 class="text-4xl font-playfair mb-4">Blog</h1> <ul class="space-y-6"> ', " </ul> </section>"])), maybeRenderHead(), posts.map((post) => renderTemplate`<li> <a${addAttribute(`/blog/${post.slug}`, "href")} class="text-2xl font-playfair text-[color:var(--primary)] hover:underline">${post.title}</a> <p class="text-sm text-gray-500">${new Date(post.date).toLocaleDateString()}</p> <p class="mt-1">${post.description}</p> </li>`));
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
