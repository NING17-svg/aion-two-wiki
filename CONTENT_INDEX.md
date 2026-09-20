# CONTENT_INDEX.md

## How To Use This File

Use this index to find the current role of each URL before editing. Update it whenever URLs, page roles, metadata, CTAs, schema, or internal-link responsibilities change.

## Page Inventory

The rows below are the primary-locale baseline (en-US). Localized versions keep the same `translationKey`, use their configured locale prefix, and must appear in canonical, hreflang, sitemap, and route-manifest validation.

| URL | File/Route | Type | Primary Keyword | Search Intent | Primary CTA | Internal-Link Role | Notes |
|---|---|---|---|---|---|---|---|
| `/` | `src/data/pages/home.ts` | Landing | AION 2 release date | Confirm launch and find the right page | Release Date / Classes / Founder's Packs | Hub | Pre-launch hub for US English search users. |
| `/release-date` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 release date | Verify the launch date and stage | Founder's Packs / Global Release / Preorder Bonus | Supporting hub | Sources: Steam store page (AppID 3393110), SteamDB. |
| `/global-release` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 global release date | Understand worldwide launch scope | Release Date / Founder's Packs / System Requirements | Supporting hub | Single worldwide Steam date under NCWest publisher scope. |
| `/founders-packs` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 Founder's Packs | Compare tiers, prices, early-access days | Preorder Bonus / Global Release | Supporting hub | Standard, Deluxe, Ultimate, Global. Prices carry research date 2026-09-20. |
| `/preorder-bonus` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 preorder bonus | Digital entitlements and Founder's Pack overlap | Founder's Packs / Release Date | Supporting hub | Physical collectibles not announced as of 2026-09-20. |
| `/system-requirements` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 system requirements | Check PC minimum specs and platform status | Release Date / Global Release | Supporting hub | Recommended tier, Steam Deck, mobile cross-play not announced. |
| `/classes` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 classes | Browse the seven confirmed classes | Leveling / PvP / Abyss Factions | Hub | Seven confirmed classes. Per-class skill trees not confirmed. |
| `/guides` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 guides | Find beginner, progression, endgame guides | Leveling / Beginner Dungeons / PvP Basics | Hub | Three-stage guide index. |
| `/guides/leveling` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 leveling guide | Fastest path to the level 45 milestone | Classes / Beginner Dungeons / Abyss Factions | Supporting | Quest-first, dungeon-second; level 45 Abyss unlock. |
| `/guides/dungeons-beginner` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 beginner dungeons | First instanced group content | Leveling / Classes | Supporting | Roles, mechanics, rewards. Roster requires dated media. |
| `/guides/pvp-basics` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 PvP | Open-world PvP, gear, class suitability | Classes / Abyss Factions | Supporting | Gear ladder not announced as of 2026-09-20. |
| `/guides/abyss-factions` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 Abyss factions | Elyos vs Asmodians, sieges, endgame | PvP Basics / World Zones | Supporting | Faction transfer not confirmed. |
| `/world-zones` | `src/data/pages/fixed-pages.ts` | Guide | AION 2 world zones | Starting areas, level gates, flight | Abyss Factions / Leveling | Supporting | Flight unlock level not announced. |
| `/about` | `src/data/pages/site-pages.ts` | Utility | about AION 2 Wiki | Trust and editorial policy | Contact | Trust | Research date 2026-09-20. |
| `/contact` | `src/data/pages/site-pages.ts` | Utility | contact AION 2 Wiki | Corrections and source updates | About | Trust | support@aion-two.wiki via Cloudflare email routing. |
| `/privacy-policy` | `src/data/pages/site-pages.ts` | Legal | privacy policy | Privacy and analytics | Terms | Trust | GA4 only when configured. |
| `/terms` | `src/data/pages/site-pages.ts` | Legal | terms of use | Site use expectations | Privacy Policy | Trust | Unofficial fan site disclaimer. |

## Fixture Pages (excluded from search index and homepage "Recent updates")

The following fixture pages exist behind URLs that start with `/_` so they are filtered out of `getIndexablePages()` and out of the homepage recent-updates list. They are kept in `getAllPages()` for build-time layout checks (PageHero review-date rendering, multilingual FAQ fixtures, etc.).

| URL | File/Route | Purpose |
|---|---|---|
| `/_guides-fixture` | `src/data/pages/fixed-pages.ts` | Reference fixture for guides layout checks |
| `/_wiki-fixture` | `src/data/pages/fixed-pages.ts` | Reference fixture for wiki layout checks |
| `/_faq-fixture` | `src/data/pages/fixed-pages.ts` | Reference fixture for FAQ layout checks |

## Generated Route Families

- Fixed and tool pages: authored in `src/data/pages/*.ts` with explicit locale and final URL.
- Entity Hubs and details: `entity_families` is empty for this site; `buildEntityPages(entityFamilies)` returns no entity routes.
- Final route inventory: `npm run routes:manifest`.
- The primary locale (en-US) stays on root paths; no secondary locale is configured.

## Content Clusters

- Launch and Status: `/release-date`, `/global-release`, `/founders-packs`, `/preorder-bonus`, `/system-requirements`
- Classes and Roles: `/classes`, `/guides`, `/guides/leveling`, `/guides/dungeons-beginner`
- Endgame and PvP: `/guides/pvp-basics`, `/guides/abyss-factions`, `/world-zones`
- Trust and Legal: `/about`, `/contact`, `/privacy-policy`, `/terms`

## Internal Linking Map

- Homepage links to all five Launch and Status pages, the classes hub, the guides hub, the leveling guide, the beginner dungeons guide, PvP basics, Abyss factions, and world zones.
- The guides hub groups pages by beginner, progression, and endgame stages and links to the dedicated pages in each stage.
- Every fixed page has `relatedPageIds` pointing to peer pages in the same cluster so the route manifest stays a graph instead of a flat list.
- Fixture pages have empty `relatedPageIds` and empty `faqIds` because they exist only for build-time checks.

## Source Map

Each page lists sources in the Sources module with the 2026-09-20 research date:

- Official/store: `https://store.steampowered.com/app/3393110/` (AION 2 Steam store page, AppID 3393110).
- Official/store: `https://steamdb.info/app/3393110/` (SteamDB metadata).
- Official/community: `https://steamcommunity.com/app/3393110` (Steam Community hub).
- Official/publisher: `https://www.ncwest.com/` (NCWest publisher portal).
- Official/publisher: `https://aion.plaync.com/` (PlayNC franchise portal).
- Community: `https://www.reddit.com/r/aion/` (r/aion subreddit).

## Open Questions

- Beta unlock times, head-start windows, Steam Deck verification status, mobile cross-play support, and review embargo status are not announced by NCWest as of 2026-09-20.
- Per-class skill trees, gender-lock rules, and per-tier Founder's Pack pricing in US dollars carry the 2026-09-20 research date.