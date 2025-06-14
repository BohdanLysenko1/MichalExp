import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_9z5Kmc5N.mjs';
import 'es-module-lexer';
import { g as decodeKey } from './chunks/astro/server_DU5pJwfW.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///Users/bohdanlysenko/Desktop/MichalExp/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"api/hubspot-contact","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/hubspot-contact","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/hubspot-contact$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"hubspot-contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/hubspot-contact.ts","pathname":"/api/hubspot-contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/basement/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/basement","isIndex":false,"type":"page","pattern":"^\\/services\\/basement$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"basement","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/basement.astro","pathname":"/services/basement","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/bathroom/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/bathroom","isIndex":false,"type":"page","pattern":"^\\/services\\/bathroom$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"bathroom","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/bathroom.astro","pathname":"/services/bathroom","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/general/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/general","isIndex":false,"type":"page","pattern":"^\\/services\\/general$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"general","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/general.astro","pathname":"/services/general","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/kitchen/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/kitchen","isIndex":false,"type":"page","pattern":"^\\/services\\/kitchen$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"kitchen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/kitchen.astro","pathname":"/services/kitchen","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/outdoor/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/outdoor","isIndex":false,"type":"page","pattern":"^\\/services\\/outdoor$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"outdoor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/outdoor.astro","pathname":"/services/outdoor","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/painting/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/painting","isIndex":false,"type":"page","pattern":"^\\/services\\/painting$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"painting","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/painting.astro","pathname":"/services/painting","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"testimonials/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonials","isIndex":false,"type":"page","pattern":"^\\/testimonials$","segments":[[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonials.astro","pathname":"/testimonials","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/basement.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/bathroom.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/general.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/kitchen.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/outdoor.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/painting.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/hubspot-contact@_@ts":"pages/api/hubspot-contact.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services/basement@_@astro":"pages/services/basement.astro.mjs","\u0000@astro-page:src/pages/services/bathroom@_@astro":"pages/services/bathroom.astro.mjs","\u0000@astro-page:src/pages/services/general@_@astro":"pages/services/general.astro.mjs","\u0000@astro-page:src/pages/services/kitchen@_@astro":"pages/services/kitchen.astro.mjs","\u0000@astro-page:src/pages/services/outdoor@_@astro":"pages/services/outdoor.astro.mjs","\u0000@astro-page:src/pages/services/painting@_@astro":"pages/services/painting.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/testimonials@_@astro":"pages/testimonials.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","/Users/bohdanlysenko/Desktop/MichalExp/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_DGkv0X0E.mjs","/Users/bohdanlysenko/Desktop/MichalExp/src/components/BackToTop":"_astro/BackToTop.Ba8wfJc-.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/FAQSection.tsx":"_astro/FAQSection.Cuf3rysV.js","/astro/hoisted.js?q=0":"_astro/hoisted.RGuZmuVL.js","/astro/hoisted.js?q=1":"_astro/hoisted.DmWcQa9_.js","/astro/hoisted.js?q=2":"_astro/hoisted.X5BVnE2I.js","/astro/hoisted.js?q=3":"_astro/hoisted.BBEQcVuc.js","/astro/hoisted.js?q=4":"_astro/hoisted.Ci_2QeUS.js","/astro/hoisted.js?q=5":"_astro/hoisted.CzwRLVEM.js","@astrojs/react/client.js":"_astro/client.C82LIi97.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/ui/dialog":"_astro/dialog.CC8mnR20.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/ContactCTA.tsx":"_astro/ContactCTA.CpjK7LZa.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/PortfolioTeaser.tsx":"_astro/PortfolioTeaser.B9CT0Y3m.js","/astro/hoisted.js?q=6":"_astro/hoisted.CRHlpsnn.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/about.CHpMl0Bq.css","/_astro/BackToTop.Ba8wfJc-.js","/_astro/ContactCTA.CpjK7LZa.js","/_astro/FAQSection.Cuf3rysV.js","/_astro/PortfolioTeaser.B9CT0Y3m.js","/_astro/client.C82LIi97.js","/_astro/createLucideIcon.DpdF_N-U.js","/_astro/dialog.CC8mnR20.js","/_astro/disclosure.DGUZYHse.js","/_astro/hoisted.BBEQcVuc.js","/_astro/hoisted.CRHlpsnn.js","/_astro/hoisted.Ci_2QeUS.js","/_astro/hoisted.CzwRLVEM.js","/_astro/hoisted.DmWcQa9_.js","/_astro/hoisted.RGuZmuVL.js","/_astro/hoisted.X5BVnE2I.js","/_astro/index.D-BB49yj.js","/_astro/index.DKuaSegQ.js","/_astro/jsx-runtime.CiDv_stu.js","/_astro/open-closed.D4nOIroD.js","/pictures/bathroom/IMG_8091.jpeg","/pictures/bathroom/IMG_8650.jpeg","/pictures/bathroom/IMG_8651.jpeg","/pictures/bathroom/shower+tub.jpg","/pictures/bathroom/shower1.jpg","/pictures/bathroom/shower2.jpg","/pictures/bathroom/shower3.jpeg","/pictures/bathroom/shower4.jpeg","/pictures/bathroom/shower5.jpeg","/pictures/bathroom/shower6.jpeg","/pictures/bathroom/showerBlue5.jpeg","/pictures/bathroom/sink+shower.jpeg","/pictures/bathroom/sink1.jpeg","/pictures/bathroom/tub2.jpeg","/pictures/other stuff/doorWithTile.jpeg","/pictures/other stuff/doors.jpg","/pictures/other stuff/livingRoom.jpeg","/pictures/servicesBasement/servicesBasementHero.png","/pictures/servicesBasement/servicesBasementStep1.png","/pictures/servicesBasement/servicesBasementStep2.png","/pictures/servicesBasement/servicesBasementStep3.png","/pictures/servicesBasement/servicesBasementStep4.png","/pictures/servicesBasement/servicesBasementStep5.png","/pictures/servicesBathroom/bathroomServices1.png","/pictures/servicesBathroom/bathroomServices2.png","/pictures/servicesBathroom/bathroomServices3.png","/pictures/servicesBathroom/bathroomServices4.png","/pictures/servicesBathroom/bathroomServices5.png","/pictures/servicesBathroom/bathroomServicesHero.png","/pictures/logo/logo2.png","/pictures/logo/logo2_nobackground.png","/pictures/logo/michalLogo.png","/pictures/kitchen/fullKitchen.jpeg","/pictures/kitchen/fullKitchen2.jpeg","/pictures/kitchen/kitchenCabinets.jpg","/pictures/kitchen/kitchenCabinets2.jpg","/pictures/kitchen/kitchenCabinets3.jpg","/pictures/servicesGeneral/servicesGeneralHero.png","/pictures/servicesGeneral/servicesGeneralStep1.png","/pictures/servicesGeneral/servicesGeneralStep2.png","/pictures/servicesGeneral/servicesGeneralStep3.png","/pictures/servicesGeneral/servicesGeneralStep4.png","/pictures/servicesGeneral/servicesGeneralStep5.png","/pictures/servicesKitchen/kitchenHero.png","/pictures/servicesKitchen/kitchenStep1.png","/pictures/servicesKitchen/kitchenStep2.png","/pictures/servicesKitchen/kitchenStep3.png","/pictures/servicesKitchen/kitchenStep4.png","/pictures/servicesKitchen/kitchenStep5.png","/pictures/servicesOutdoor/servicesOutdoorHero.png","/pictures/servicesOutdoor/servicesOutdoorStep1.png","/pictures/servicesOutdoor/servicesOutdoorStep2.png","/pictures/servicesOutdoor/servicesOutdoorStep3.png","/pictures/servicesOutdoor/servicesOutdoorStep4.png","/pictures/servicesOutdoor/servicesOutdoorStep5.png","/pictures/stairs/stairs1.jpeg","/pictures/stairs/stairs2.jpeg","/pictures/stairs/stairs3.jpeg","/pictures/stairs/stairs4.jpg","/pictures/stairs/stairs5.jpg","/pictures/servicesPainting/servicePaintingStep1.png","/pictures/servicesPainting/servicesPaintingHero.png","/pictures/servicesPainting/servicesPaintingStep2.png","/pictures/servicesPainting/servicesPaintingStep3.png","/pictures/servicesPainting/servicesPaintingStep4.png","/pictures/servicesPainting/servicesPaintingStep5.png","/about/index.html","/api/hubspot-contact","/blog/index.html","/contact/index.html","/faq/index.html","/gallery/index.html","/projects/index.html","/services/basement/index.html","/services/bathroom/index.html","/services/general/index.html","/services/kitchen/index.html","/services/outdoor/index.html","/services/painting/index.html","/services/index.html","/testimonials/index.html","/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"Me3rSGkJtWg6WcefcktBChVxJK0GJbmLkx6+/eJ5mOA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
