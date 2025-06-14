# Mobile UX Issues Log

> Initial pass – updated 2025-06-13 19:17 CDT

| # | Viewport / Device | Page & Location | Issue | Suggested Fix |
|---|-------------------|-----------------|-------|---------------|
| 1 | 360×640 (Android small) – Chrome | All **service** pages (hero at top) | `h-screen` (100vh) sections extend behind browser UI, causing ~60 px content cutoff / hidden portion | Replace `h-screen` with `min-h-[100dvh]` (dynamic viewport height) or use CSS `min-height: 100dvh;` via Tailwind plugin for iOS/Android safe-area compliance |
| 2 | 414×896 (iPhone 12) – Safari | Service page hero | `background-attachment: fixed` ignored on iOS; results in static background and potential rendering jank when scrolling | Detect mobile via `@media (pointer: coarse)` and switch to `bg-fixed` → `bg-scroll` / remove parallax on touch devices |
| 3 | 360×640 – Chrome | Navigation menu (hamburger) | Off-canvas menu panel lacks `safe-area-inset-bottom` padding; bottom items sit below screen edge on devices with gesture bars | Add `pb-[env(safe-area-inset-bottom)]` to mobile menu container |
| 4 | 375×667 (iPhone SE) – Safari | ContactCTA modal | Modal `min-h-screen` forces internal scroll plus body lock; top/bottom portions clipped on very small heights | Change wrapper from `min-h-screen` to `min-h-[100dvh]` and make inner panel `max-h-[90dvh] overflow-y-auto` |
| 5 | 768×1024 – iPad portrait Chrome | Gallery grid | 3-column grid uses fixed `h-48 sm:h-60`; taller tablets show too much empty whitespace under images | Make image height responsive: use `aspect-[4/3]` via Tailwind plugin or `h-auto` with `object-cover` |
| 6 | 360×640 – Android | Gallery **HEIC** images (`IMG_5276.HEIC`, `IMG_5323.HEIC`) don’t render outside iOS | Convert to JPEG/WEBP; update paths |

---

To reproduce tests rapidly, open Chrome DevTools → Device Toolbar, select devices above and reload each page.
Next steps:
1. Fix highest-impact issues (1–3) then retest.
2. Run Lighthouse mobile for baseline score.
