/* empty css                                 */
import { c as createComponent, m as maybeRenderHead, d as renderComponent, r as renderTemplate } from '../chunks/astro/server_B-ZIt8ph.mjs';
import 'kleur/colors';
import { jsx, jsxs } from 'react/jsx-runtime';
import * as React from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
export { renderers } from '../renderers.mjs';

function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const Dialog = (props) => /* @__PURE__ */ jsx(DialogPrimitive.Root, { ...props });
const DialogOverlay = React.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsx(
  DialogPrimitive.Overlay,
  {
    ref,
    className: cn(
      "fixed inset-0 z-40 bg-black/50 backdrop-blur-sm",
      className
    ),
    ...props
  }
));
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName;
const DialogContent = React.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxs(
  DialogPrimitive.Content,
  {
    ref,
    className: cn(
      "fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 grid w-full max-w-lg gap-4 rounded-xl border bg-white p-6 shadow-lg animate-in fade-in-90 sm:rounded-xl",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxs(DialogPrimitive.Close, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-white transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none", children: [
        /* @__PURE__ */ jsx(X, { className: "h-4 w-4" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
      ] })
    ]
  }
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="container-premium py-16 sm:py-20 max-w-2xl text-base sm:text-lg"> <h1 class="text-3xl sm:text-4xl font-playfair mb-6">Contact MichalExp</h1> <p class="text-lg mb-6">Ready to start your remodeling project? Fill out the form below or call us for a free estimate.</p> <div class="mb-8"> ${renderComponent($$result, "Dialog", Dialog, { "client:idle": true, "client:component-hydration": "idle", "client:component-path": "/Users/bohdanlysenko/Desktop/MichalExp/src/components/ui/dialog", "client:component-export": "Dialog" }, { "default": ($$result2) => renderTemplate` <form class="bg-white rounded-xl shadow-lg p-6 flex flex-col gap-4 max-w-xl mx-auto"> <label class="font-semibold">Name
<input type="text" name="name" required class="block w-full mt-1 border rounded px-3 py-2"> </label> <label class="font-semibold">Email
<input type="email" name="email" required class="block w-full mt-1 border rounded px-3 py-2"> </label> <label class="font-semibold">Message
<textarea name="message" required class="block w-full mt-1 border rounded px-3 py-2" rows="4"></textarea> </label> <button type="submit" class="btn-primary w-full sm:w-auto justify-center">Send Message</button> </form> ` })} </div> <div class="text-gray-700"> <div><span class="font-semibold">Phone:</span> (312) 555-0199</div> <div><span class="font-semibold">Service Area:</span> Chicago &amp; all suburbs</div> <div><span class="font-semibold">Email:</span> info@michalexp.com</div> </div> </section>`;
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
