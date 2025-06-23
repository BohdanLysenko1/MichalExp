import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BjRBZTwq.mjs';
import { manifest } from './manifest_0CWIDMjC.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/about.astro.mjs');
const _page2 = () => import('./pages/api/hubspot-contact.astro.mjs');
const _page3 = () => import('./pages/blog/_slug_.astro.mjs');
const _page4 = () => import('./pages/blog.astro.mjs');
const _page5 = () => import('./pages/contact.astro.mjs');
const _page6 = () => import('./pages/faq.astro.mjs');
const _page7 = () => import('./pages/gallery.astro.mjs');
const _page8 = () => import('./pages/projects.astro.mjs');
const _page9 = () => import('./pages/services/basement.astro.mjs');
const _page10 = () => import('./pages/services/bathroom.astro.mjs');
const _page11 = () => import('./pages/services/general.astro.mjs');
const _page12 = () => import('./pages/services/kitchen.astro.mjs');
const _page13 = () => import('./pages/services/outdoor.astro.mjs');
const _page14 = () => import('./pages/services/painting.astro.mjs');
const _page15 = () => import('./pages/services.astro.mjs');
const _page16 = () => import('./pages/testimonials.astro.mjs');
const _page17 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/about.astro", _page1],
    ["src/pages/api/hubspot-contact.ts", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/index.astro", _page4],
    ["src/pages/contact.astro", _page5],
    ["src/pages/faq.astro", _page6],
    ["src/pages/gallery.astro", _page7],
    ["src/pages/projects.astro", _page8],
    ["src/pages/services/basement.astro", _page9],
    ["src/pages/services/bathroom.astro", _page10],
    ["src/pages/services/general.astro", _page11],
    ["src/pages/services/kitchen.astro", _page12],
    ["src/pages/services/outdoor.astro", _page13],
    ["src/pages/services/painting.astro", _page14],
    ["src/pages/services.astro", _page15],
    ["src/pages/testimonials.astro", _page16],
    ["src/pages/index.astro", _page17]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "2e1b8fec-2401-40c9-9c5a-ea7aa1810984",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
