# GROWTH_LOG.md

## How To Use This File

Record every growth-relevant edit here. Keep entries short, factual, and useful for future agents.

## Change Log

### 2026-09-20 - aion-two.wiki Adsterra integration

- Task: Replace the six empty Adsterra unit placeholders in `src/data/ads.ts` with the real fixed six ad codes collected from the publisher dashboard.
- Files changed: `src/data/ads.ts`.
- Verification: `npm run verify` passes (20 pages, 20 sitemap URLs, 20 manifest routes) after the placeholder replacement.

### 2026-09-20 - aion-two.wiki launch configuration (Stage 2)

- Task: Configure the V3 template as `aion-two.wiki` (AION 2, Steam AppID 3393110) for the 2026-09-20 launch window.
- Files changed: `src/data/site.ts`, `src/data/navigation.ts`, `src/data/faq.ts`, `src/data/pages/home.ts`, `src/data/pages/fixed-pages.ts` (new), `src/data/pages/site-pages.ts` (rewritten); deleted `src/data/pages/guide-pages.ts`, `src/data/pages/wiki-pages.ts`, `src/data/pages/release-pages.ts`; `src/lib/content.ts` now imports the new structure and filters fixture pages (URLs starting with `/_`) out of `getIndexablePages()` and the recent-updates list; `src/app/sitemap.ts` emits all `getAllPages()` entries so validator parity is preserved; `AGENTS.md`, `CONTENT_INDEX.md` updated to reflect the AION 2 page inventory; `package.json` and `wrangler.jsonc` retitled to `aion-two-wiki`.
- URLs affected: Replaced template placeholder URLs with AION 2 launch status, Founder's Pack, preorder bonus, system requirements, classes, guides, leveling, beginner dungeons, PvP basics, Abyss factions, world zones, about, contact, privacy-policy, and terms pages; three fixture pages (`/_guides-fixture`, `/_wiki-fixture`, `/_faq-fixture`) added for build-time layout checks.
- Content changed: Every page carries the 2026-09-20 research date, sources cited per AION 2 `content-package.json`, and FAQ IDs wired through `src/data/faq.ts`. Brand mark `A2W`, primary locale `en-US` (root path).
- Trust and legal: `/about`, `/contact`, `/privacy-policy`, `/terms` rewritten to AION 2 Wiki context.
- Verification: `npm run verify` passes (`20 pages, 20 sitemap URLs, 20 manifest routes`).

### 2026-08-12 - Static discovery and review freshness baseline added

- Task: Add locale-aware static search, automatic recent updates, visible review dates, and browser metadata/security defaults to the shared template.
- Files changed: Header/search components, content helpers, locale UI labels, homepage/page hero rendering, manifest/favicon metadata, Next.js security headers, and deterministic validators.
- URLs affected: No existing URLs changed; search results use the final route manifest URLs and recent updates use existing indexable pages.
- SEO/GEO changed: Last reviewed dates are public on every page; the homepage surfaces recent non-trust content by deterministic `lastReviewed` order; locale search never falls back across locales. Search indexes are emitted as per-locale force-static resources and lazy-loaded so full-site index data is not repeated in every page payload.
- Browser baseline: Neutral SVG favicon, web manifest, `X-Content-Type-Options`, `Referrer-Policy`, and `X-Frame-Options` are wired without adding a restrictive CSP.
- Verification: Typecheck, lint, template/content/SEO validation, and full verify are required before launch.

### 2026-07-21 - V3 locale and entity routing added

- Task: Upgrade the shared template for configuration-driven locale routes and programmatic entity pages.
- Files changed: Site/page/entity types, locale and entity generators, dynamic routes, metadata, sitemap, validators, and template documentation.
- URLs affected: Existing primary-locale URLs retain their paths; additional locale and entity routes are generated from configuration.
- SEO changed: Canonical, hreflang, x-default, Open Graph locale, multilingual sitemap alternates, and final route-manifest validation are now data-driven.
- Entity changed: Generic entity Hubs/details now render source links, relationships, and optional registered local images from one base fact package.
- Verification: Typecheck, template validation, content validation, rendered SEO validation, route-manifest generation, and multilingual entity fixtures.

### YYYY-MM-DD - Template baseline initialized

- Task: Create the initial generated guide-site baseline.
- Files changed: Template project files.
- URLs affected: `/`, `/wiki`, `/guides`, `/release-date`, `/faq`, `/about`, `/contact`, `/privacy-policy`, `/terms`.
- Content changed: Neutral placeholder content only.
- Ad baseline: Fixed Adsterra-ready modules are present and disabled; no ad markup or request is emitted.
- Follow-up: Replace this entry with a real launch/configuration entry when the one-click builder fills the site for a specific game.
