import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import 'es-module-lexer';
import 'html-escaper';
import 'clsx';
import { N as NOOP_MIDDLEWARE_HEADER, g as decodeKey } from './chunks/astro/server_CUsm7G4n.mjs';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

const codeToStatusMap = {
  // Implemented from tRPC error code table
  // https://trpc.io/docs/server/error-handling#error-codes
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  TIMEOUT: 405,
  CONFLICT: 409,
  PRECONDITION_FAILED: 412,
  PAYLOAD_TOO_LARGE: 413,
  UNSUPPORTED_MEDIA_TYPE: 415,
  UNPROCESSABLE_CONTENT: 422,
  TOO_MANY_REQUESTS: 429,
  CLIENT_CLOSED_REQUEST: 499,
  INTERNAL_SERVER_ERROR: 500
};
Object.entries(codeToStatusMap).reduce(
  // reverse the key-value pairs
  (acc, [key, value]) => ({ ...acc, [value]: key }),
  {}
);

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

const manifest = deserializeManifest({"hrefRoot":"file:///Users/bohdanlysenko/Desktop/MichalExp/","adapterName":"","routes":[{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.astro","pathname":"/about","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/contact/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/contact","isIndex":false,"type":"page","pattern":"^\\/contact$","segments":[[{"content":"contact","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/contact.astro","pathname":"/contact","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/faq/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/faq","isIndex":false,"type":"page","pattern":"^\\/faq$","segments":[[{"content":"faq","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/faq.astro","pathname":"/faq","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/gallery/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/gallery","isIndex":false,"type":"page","pattern":"^\\/gallery$","segments":[[{"content":"gallery","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/gallery.astro","pathname":"/gallery","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/projects/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/projects","isIndex":false,"type":"page","pattern":"^\\/projects$","segments":[[{"content":"projects","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/projects.astro","pathname":"/projects","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/basement/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/basement","isIndex":false,"type":"page","pattern":"^\\/services\\/basement$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"basement","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/basement.astro","pathname":"/services/basement","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/bathroom/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/bathroom","isIndex":false,"type":"page","pattern":"^\\/services\\/bathroom$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"bathroom","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/bathroom.astro","pathname":"/services/bathroom","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/general/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/general","isIndex":false,"type":"page","pattern":"^\\/services\\/general$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"general","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/general.astro","pathname":"/services/general","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/kitchen/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/kitchen","isIndex":false,"type":"page","pattern":"^\\/services\\/kitchen$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"kitchen","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/kitchen.astro","pathname":"/services/kitchen","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/outdoor/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/outdoor","isIndex":false,"type":"page","pattern":"^\\/services\\/outdoor$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"outdoor","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/outdoor.astro","pathname":"/services/outdoor","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/painting/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services/painting","isIndex":false,"type":"page","pattern":"^\\/services\\/painting$","segments":[[{"content":"services","dynamic":false,"spread":false}],[{"content":"painting","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services/painting.astro","pathname":"/services/painting","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/services","isIndex":false,"type":"page","pattern":"^\\/services$","segments":[[{"content":"services","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/services.astro","pathname":"/services","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/testimonials/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/testimonials","isIndex":false,"type":"page","pattern":"^\\/testimonials$","segments":[[{"content":"testimonials","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/testimonials.astro","pathname":"/testimonials","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}},{"file":"file:///Users/bohdanlysenko/Desktop/MichalExp/dist/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"_meta":{"trailingSlash":"never"}}}],"base":"/","trailingSlash":"never","compressHTML":true,"componentMetadata":[["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/basement.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/bathroom.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/general.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/kitchen.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/outdoor.astro",{"propagation":"none","containsHead":true}],["/Users/bohdanlysenko/Desktop/MichalExp/src/pages/services/painting.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astro-page:src/pages/about@_@astro":"pages/about.astro.mjs","\u0000@astro-page:src/pages/blog/[slug]@_@astro":"pages/blog/_slug_.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/contact@_@astro":"pages/contact.astro.mjs","\u0000@astro-page:src/pages/faq@_@astro":"pages/faq.astro.mjs","\u0000@astro-page:src/pages/gallery@_@astro":"pages/gallery.astro.mjs","\u0000@astro-page:src/pages/projects@_@astro":"pages/projects.astro.mjs","\u0000@astro-page:src/pages/services/basement@_@astro":"pages/services/basement.astro.mjs","\u0000@astro-page:src/pages/services/bathroom@_@astro":"pages/services/bathroom.astro.mjs","\u0000@astro-page:src/pages/services/general@_@astro":"pages/services/general.astro.mjs","\u0000@astro-page:src/pages/services/kitchen@_@astro":"pages/services/kitchen.astro.mjs","\u0000@astro-page:src/pages/services/outdoor@_@astro":"pages/services/outdoor.astro.mjs","\u0000@astro-page:src/pages/services/painting@_@astro":"pages/services/painting.astro.mjs","\u0000@astro-page:src/pages/services@_@astro":"pages/services.astro.mjs","\u0000@astro-page:src/pages/testimonials@_@astro":"pages/testimonials.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-manifest":"manifest_PI0M17_X.mjs","/Users/bohdanlysenko/Desktop/MichalExp/src/components/BackToTop":"_astro/BackToTop.BEclA5A6.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/PortfolioTeaser.tsx":"_astro/PortfolioTeaser.9PWR1EtW.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/FAQSection.tsx":"_astro/FAQSection.BH3m12S6.js","/Users/bohdanlysenko/Desktop/MichalExp/src/components/ContactCTA.tsx":"_astro/ContactCTA.A-aRwacg.js","@astrojs/react/client.js":"_astro/client.C82LIi97.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/about/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/blog/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/contact/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/faq/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/gallery/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/projects/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/basement/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/bathroom/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/general/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/kitchen/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/outdoor/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/painting/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/services/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/testimonials/index.html","/file:///Users/bohdanlysenko/Desktop/MichalExp/dist/index.html"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"v4/7jlwTJP8F1XsK0R2Y3pkWt4s2amYL+uNjKdz1ppA=","experimentalEnvGetSecretEnabled":false});

export { manifest };
