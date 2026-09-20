import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-20";
const STEAM_URL = "https://store.steampowered.com/app/3393110/";
const STEAMDB_URL = "https://steamdb.info/app/3393110/";
const STEAM_COMMUNITY_URL = "https://steamcommunity.com/app/3393110";
const NCWEST_URL = "https://www.ncwest.com/";
const PLAYNC_URL = "https://aion.plaync.com/";
const REDDIT_URL = "https://www.reddit.com/r/aion/";

// Fixture pages live behind URLs that start with `/_`. They exist so that
// the contract validator can render PageHero and search-index fixtures for
// review-date and multilingual checks, but they are excluded from the
// indexable page set so they do not appear in the sitemap, the homepage
// "recent updates" list, or the public search index.
const fixturePages: PageContent[] = [
  {
    id: "guides",
    translationKey: "guides",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_guides-fixture",
    url: "/_guides-fixture",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} guide index`,
    seoTitle: `${site.gameName} guide index`,
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Guides",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-guides-body",
        type: "prose",
        heading: "Guides index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "wiki",
    translationKey: "wiki",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_wiki-fixture",
    url: "/_wiki-fixture",
    pageType: "wiki",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} wiki index`,
    seoTitle: `${site.gameName} wiki index`,
    metaDescription:
      "Reference fixture page used to validate PageHero review-date rendering for en-US content.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "Wiki",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-wiki-body",
        type: "prose",
        heading: "Wiki index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "faq-fixture",
    translationKey: "faq",
    locale: "en-US",
    routeKind: "fixed",
    slug: "_faq-fixture",
    url: "/_faq-fixture",
    pageType: "faq",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `${site.gameName} FAQ index`,
    seoTitle: `${site.gameName} FAQ index`,
    metaDescription:
      "Reference fixture page used to validate multilingual FAQ fixtures.",
    summary: "Reference fixture page (not a real indexable page).",
    hero: {
      eyebrow: "FAQ",
      subtitle: "Reference fixture page (not a real indexable page).",
      ctas: [],
    },
    quickAnswer: "Reference fixture page.",
    keyFacts: [{ label: "Type", value: "Reference fixture" }],
    modules: [
      {
        id: "fixture-faq-body",
        type: "prose",
        heading: "FAQ index fixture",
        body: "Reference fixture page used by internal layout checks.",
      },
    ],
    faqIds: [],
    relatedPageIds: [],
    schemaTypes: ["Article"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
];

// Real indexable AION 2 fixed pages assembled from the validated content
// package. Each page is paired with the research-date stamp and references the
// supporting FAQ IDs and related pages defined in src/data/faq.ts.
const realPages: PageContent[] = [
  // ---------------------------------------------------------------
  // release-date
  // ---------------------------------------------------------------
  {
    id: "fixed-release-date-en-US",
    translationKey: "release-date",
    locale: "en-US",
    routeKind: "fixed",
    slug: "release-date",
    url: "/release-date",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 release date: launch status and Steam page",
    seoTitle: "AION 2 release date: launch status and Steam page",
    metaDescription:
      "Get the confirmed AION 2 release date, current Steam launch stage, and where to verify status. Beta and Steam Deck are research-date status.",
    summary:
      "The AION 2 release date of October 5, 2026, the current Steam launch stage, and how to verify status before launch.",
    hero: {
      eyebrow: "Launch status",
      subtitle:
        "The AION 2 release date is October 5, 2026 on Steam (AppID 3393110). The launch is published by NCWest and listed as a standard MMORPG release, not an early-access experiment.",
      ctas: [
        { label: "Founder's Packs", href: "/founders-packs" },
        { label: "Global release scope", href: "/global-release" },
        { label: "Preorder bonus", href: "/preorder-bonus" },
      ],
    },
    quickAnswer:
      "The AION 2 release date is October 5, 2026, confirmed by the Steam store page and the SteamDB listing for AppID 3393110 as of 2026-09-20. The launch is published by NCWest and listed on Steam as a standard MMORPG release. Founder's Pack tiers are live on the store page. Beta unlock times, head-start windows, mobile cross-play, Steam Deck verification, and review embargo status were not announced as of 2026-09-20.",
    keyFacts: [
      { label: "Release date", value: "October 5, 2026" },
      { label: "Steam AppID", value: "3393110" },
      { label: "Publisher", value: "NCWest" },
      { label: "Store status", value: "Standard MMORPG release (not early access)" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "release-date-stage",
        type: "prose",
        heading: "AION 2 release date and launch stage",
        body:
          "The AION 2 release date of October 5, 2026 shows up directly on the Steam store page for AppID 3393110, and the SteamDB listing for the same AppID carries the same launch date. The Steam Community hub treats the title as an MMORPG launch rather than an early-access experiment, and the standard pre-order window with Founder's Pack tiers attached is still live on the store. The publisher of record is NCWest, which also runs the PlayNC franchise portal for the Korean AION history. As of 2026-09-20, no pre-launch beta unlock times, head-start windows, or early-access start dates have been announced.",
      },
      {
        id: "release-date-verify",
        type: "steps",
        heading: "How to verify the AION 2 release date",
        items: [
          {
            title: "Check the Steam store page (canonical)",
            body: "The Steam store page for AppID 3393110 is the only source that can change the launch date. Open it first when re-verifying.",
            doneCondition: "Steam store page shows October 5, 2026.",
          },
          {
            title: "Cross-check SteamDB",
            body: "SteamDB will reflect any Steam store metadata change within hours, so use it as the secondary cross-check.",
            doneCondition: "SteamDB listing agrees on October 5, 2026.",
          },
          {
            title: "Scan the Steam Community hub",
            body: "The Steam Community hub surfaces launch-day discussions and any slip rumours first, so skim the threads before relying on a single source.",
            doneCondition: "No contradicting slip announcement appears in recent hub threads.",
          },
        ],
      },
      {
        id: "release-date-unknowns",
        type: "callout",
        tone: "caution",
        title: "Known unknowns as of 2026-09-20",
        body:
          "Beta unlock times, head-start access windows, the exact unlock hour in US timezones, Steam Deck verification status, mobile cross-play support, and review embargoes have not been announced by NCWest. None of these gaps change the published launch date; they only affect the access shape around it.",
      },
      {
        id: "release-date-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed the AION 2 release date of Oct 5, 2026. SteamDB listing (official/store, checked 2026-09-20) cross-checked the release metadata. Steam Community hub (official/community, checked 2026-09-20) carries community demand and launch discussion. NCWest publisher portal (official/publisher, checked 2026-09-20) confirmed Western launch scope.",
      },
    ],
    faqIds: ["aion-2-release-date-delayed", "aion-2-early-access", "aion-2-steam-deck"],
    relatedPageIds: [
      "fixed-founders-packs-en-US",
      "fixed-global-release-en-US",
      "fixed-preorder-bonus-en-US",
      "fixed-system-requirements-en-US",
    ],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // global-release
  // ---------------------------------------------------------------
  {
    id: "fixed-global-release-en-US",
    translationKey: "global-release",
    locale: "en-US",
    routeKind: "fixed",
    slug: "global-release",
    url: "/global-release",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 global release date, regions, launch scope",
    seoTitle: "AION 2 global release date, regions, launch scope",
    metaDescription:
      "See the AION 2 global release date by region, how Steam launches worldwide, and what the Korean franchise context means for US players on Oct 5, 2026.",
    summary:
      "The AION 2 global release date of October 5, 2026, how Steam distributes the game worldwide, and what US players should expect from regional storefront scope.",
    hero: {
      eyebrow: "Worldwide launch scope",
      subtitle:
        "The AION 2 global release date is October 5, 2026 on Steam (AppID 3393110), published by NCWest as a single worldwide Steam launch.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Founder's Packs", href: "/founders-packs" },
        { label: "System requirements", href: "/system-requirements" },
      ],
    },
    quickAnswer:
      "The AION 2 global release date is October 5, 2026 on Steam for AppID 3393110, published by NCWest as the worldwide Steam launch. Steam global availability is confirmed on the store page as of 2026-09-20. The Korean franchise context (PlayNC portal) and the original 2009 AION history run in parallel as legacy reference, not as current launch ordering. Per-console storefront regional availability requires dated source; none is confirmed as of 2026-09-20.",
    keyFacts: [
      { label: "Global launch", value: "October 5, 2026 (single worldwide date)" },
      { label: "Steam region coverage", value: "All Steam regions under the same date" },
      { label: "Publisher", value: "NCWest" },
      { label: "Korean franchise context", value: "PlayNC portal (legacy reference only)" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "global-release-steam",
        type: "prose",
        heading: "AION 2 global release date on Steam",
        body:
          "The AION 2 global release date of October 5, 2026 is the single date published on the Steam store page for AppID 3393110, with the SteamDB listing for the same AppID carrying the same launch metadata. NCWest is listed as the publisher for the worldwide Steam rollout, which makes the Steam storefront the canonical worldwide launch vehicle as of 2026-09-20. English-language UI support is the primary supported locale on the store page, and the Steam release covers US, EU, Asia-Pacific, and other Steam regions under the same date. Because the Steam release is global by default, US players do not need to wait for a separate Western window.",
      },
      {
        id: "global-release-region-ordering",
        type: "prose",
        heading: "Region ordering and Korean franchise context",
        body:
          "AION 2 is the sequel to the original 2009 AION, which still runs as AION Classic, AION EU, and AION Korea on the NCSoft and NCWest networks. The Korean franchise history is anchored at the PlayNC franchise portal, while the Western publisher scope sits at NCWest. The Korean-first versus Western ordering that defined the original 2009 launch does not map cleanly onto the AION 2 release scope, because Steam itself is global and NCWest is listed as the publisher on the worldwide store page. For US players, the practical reading of the AION 2 global release date is that there is no separate Korean-first window that gates Western access: Steam handles the rollout globally. Any console-specific regional storefront ordering (PS5, Xbox), mobile cross-launch with Korean carriers, or Korean-only Founder's Pack SKUs requires dated source and is not announced as of 2026-09-20.",
      },
      {
        id: "global-release-us-players",
        type: "prose",
        heading: "What the AION 2 global release date means for US players",
        body:
          "For US players, the AION 2 global release date on Steam means three practical things: the game unlocks on October 5, 2026 under NCWest's publisher scope, Founder's Pack tiers are visible on the US store page, and PC system specs are listed under system requirements. Regional pricing in US dollars is shown on the Steam store page, and the page language stays English as the primary supported locale. US players do not need to plan around a region-by-region countdown; the Steam global release handles all Steam regions at once.",
      },
      {
        id: "global-release-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed global Steam availability and the October 5, 2026 release date. NCWest publisher portal (official/publisher, checked 2026-09-20) confirmed Western launch scope and worldwide publisher listing. PlayNC franchise portal (official/publisher, checked 2026-09-20) carries Korean franchise context as legacy reference. SteamDB listing (official/store, checked 2026-09-20) cross-checked the release metadata.",
      },
    ],
    faqIds: ["aion-2-global-same-date", "aion-2-korea-first", "aion-2-regional-founders-pack", "aion-2-console-launch"],
    relatedPageIds: [
      "fixed-release-date-en-US",
      "fixed-founders-packs-en-US",
      "fixed-system-requirements-en-US",
    ],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // classes
  // ---------------------------------------------------------------
  {
    id: "fixed-classes-en-US",
    translationKey: "classes",
    locale: "en-US",
    routeKind: "fixed",
    slug: "classes",
    url: "/classes",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "AION 2 classes: roster, roles, and selection guide",
    seoTitle: "AION 2 classes: roster, roles, and selection guide",
    metaDescription:
      "Browse AION 2 classes by role archetype, get selection guidance, and check gender-lock status. Per-class skills and tier rankings need dated media.",
    summary:
      "The seven confirmed AION 2 classes with role archetypes, selection guidance, and gender-lock status notes as of 2026-09-20.",
    hero: {
      eyebrow: "Classes",
      subtitle:
        "Seven confirmed AION 2 classes: assassin, gladiator, cleric, templar, chanter, ranger, and sorceress. Role archetypes are inferred from the class-based combat confirmed by the Steam store page.",
      ctas: [
        { label: "Leveling guide", href: "/guides/leveling" },
        { label: "PvP basics", href: "/guides/pvp-basics" },
        { label: "Abyss factions", href: "/guides/abyss-factions" },
      ],
    },
    quickAnswer:
      "The AION 2 classes roster covers seven roles: assassin, gladiator, cleric, templar, chanter, ranger, and sorceress. The Steam store page confirms class-based MMORPG combat, and the Steam Community hub plus r/aion discussions surface those seven names. Role archetypes (melee DPS, tank, healer, ranged DPS, support) are inferred from the original 2009 AION class system as legacy reference. Gender-lock status, per-class skill trees, and tier rankings still require dated media or beta-confirmed sources as of 2026-09-20.",
    keyFacts: [
      { label: "Confirmed classes", value: "7 (assassin, gladiator, cleric, templar, chanter, ranger, sorceress)" },
      { label: "Combat style", value: "Class-based MMORPG (confirmed on Steam store)" },
      { label: "Gender-lock status", value: "Not confirmed as of 2026-09-20" },
      { label: "Per-class skill trees", value: "Require dated media as of 2026-09-20" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "classes-roster",
        type: "data-table",
        heading: "AION 2 classes and role archetypes",
        columns: [
          { key: "class", label: "Class" },
          { key: "role", label: "Role archetype" },
          { key: "playstyle", label: "Playstyle note" },
        ],
        rows: [
          {
            class: "Assassin",
            role: "Melee DPS",
            playstyle: "Stealth melee DPS, single-target burst, open-world PvP duels.",
          },
          {
            class: "Gladiator",
            role: "Tank / frontline",
            playstyle: "Front-line melee, high durability, classic tank for dungeons and Abyss sieges.",
          },
          {
            class: "Cleric",
            role: "Healer",
            playstyle: "Healer and support, backbone of party composition, safe pick for new players.",
          },
          {
            class: "Templar",
            role: "Defensive support",
            playstyle: "Defensive support with off-heal, slotted into tank or hybrid groups.",
          },
          {
            class: "Chanter",
            role: "Support caster",
            playstyle: "Party buffs and sustained damage, popular in organized PvP groups.",
          },
          {
            class: "Ranger",
            role: "Ranged DPS",
            playstyle: "Ranged physical DPS, kite-friendly open-world pick with strong solo leveling.",
          },
          {
            class: "Sorceress",
            role: "Ranged magical DPS",
            playstyle: "High burst damage, glass-cannon archetype that rewards positioning.",
          },
        ],
      },
      {
        id: "classes-choose",
        type: "prose",
        heading: "How to choose your AION 2 class",
        body:
          "The selection framework uses only the seven role names confirmed by the community plus the role archetypes inferred from the original 2009 AION system (legacy reference). Each class maps to a question US players actually ask when choosing a starting character, and the answers stay neutral until dated media is published. For deeper progression paths after you pick a class, see the leveling guide for quest and dungeon priority, the PvP basics guide for class viability in Abyss faction fights, and the Abyss factions guide for the Elyos vs Asmo split that frames most PvP encounters.",
      },
      {
        id: "classes-gender-lock",
        type: "callout",
        tone: "caution",
        title: "Gender-lock status not confirmed",
        body:
          "Gender-lock status for the AION 2 classes was not confirmed as of 2026-09-20. The Steam store description, the Steam Community hub threads, and the NCWest publisher portal do not publish per-class gender-lock rules, and the original 2009 AION system used a stricter gender-lock model (legacy reference) that has not been carried forward as fact. Treat any pre-launch 'locked' or 'unlocked' claim as community speculation until an official NCWest announcement appears.",
      },
      {
        id: "classes-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed class-based MMORPG combat. Steam Community hub (official/community, checked 2026-09-20) carries class discussion and pre-launch speculation. r/aion subreddit (community, checked 2026-09-20) tracks demand signals and pre-launch tier speculation. Original 2009 AION class system (warrior, scout, mage, priest, engineer, artist) is referenced only as legacy clarification.",
      },
    ],
    faqIds: [
      "aion-2-classes-count",
      "aion-2-classes-gender-lock",
      "aion-2-class-solo",
      "aion-2-class-abyss-pvp",
    ],
    relatedPageIds: [
      "fixed-leveling-guide-en-US",
      "fixed-pvp-basics-en-US",
      "fixed-abyss-factions-en-US",
    ],
    schemaTypes: ["CollectionPage", "Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // founders-packs
  // ---------------------------------------------------------------
  {
    id: "fixed-founders-packs-en-US",
    translationKey: "founders-packs",
    locale: "en-US",
    routeKind: "fixed",
    slug: "founders-packs",
    url: "/founders-packs",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 founders packs: tiers, prices, early access",
    seoTitle: "AION 2 founders packs: tiers, prices, early access",
    metaDescription:
      "Compare AION 2 founders packs tiers, pricing, early-access days, and cosmetics. Exact per-tier currency and renewal terms carry the 2026-09-20 research date.",
    summary:
      "Comparison of the four AION 2 Founder's Packs tiers (Standard, Deluxe, Ultimate, Global) with prices, cosmetics, and early-access days, all dated to 2026-09-20.",
    hero: {
      eyebrow: "Founder's Packs comparison",
      subtitle:
        "Four Founder's Pack editions confirmed by the Steam store page and the NCWest publisher portal: Standard, Deluxe, Ultimate, and Global.",
      ctas: [
        { label: "Preorder bonus", href: "/preorder-bonus" },
        { label: "Global release", href: "/global-release" },
      ],
    },
    quickAnswer:
      "The AION 2 founders packs come in four editions: Standard, Deluxe, Ultimate, and Global. Tier availability is confirmed by the Steam store page for AppID 3393110 and the NCWest publisher portal as of 2026-09-20. Exact per-tier pricing, currency conversion, regional availability, and renewal terms carry the 2026-09-20 research date and should be reverified on the store page before purchase. Cosmetics and early-access days vary by tier; Ultimate and Global editions typically carry the largest cosmetic bundles and the longest early-access windows.",
    keyFacts: [
      { label: "Editions", value: "Standard, Deluxe, Ultimate, Global" },
      { label: "Availability", value: "Confirmed on Steam store and NCWest publisher portal" },
      { label: "Pricing source", value: "Live on Steam store page (carry 2026-09-20 research date)" },
      { label: "Early access", value: "All four tiers include an early-access window" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "founders-packs-comparison",
        type: "data-table",
        heading: "AION 2 founders packs tier comparison",
        columns: [
          { key: "tier", label: "Tier" },
          { key: "price", label: "Price" },
          { key: "cosmetics", label: "Cosmetics" },
          { key: "early", label: "Early access" },
        ],
        rows: [
          {
            tier: "Standard",
            price: "Carry research date 2026-09-20",
            cosmetics: "Base cosmetic bundle (confirmed on store page)",
            early: "Shortest early-access window (per-tier day count carries research date)",
          },
          {
            tier: "Deluxe",
            price: "Carry research date 2026-09-20",
            cosmetics: "Expanded cosmetic bundle (confirmed on store page)",
            early: "Extended early-access window (per-tier day count carries research date)",
          },
          {
            tier: "Ultimate",
            price: "Carry research date 2026-09-20",
            cosmetics: "Largest cosmetic bundle plus exclusive items (confirmed on store page)",
            early: "Longest non-Global early-access window (per-tier day count carries research date)",
          },
          {
            tier: "Global",
            price: "Carry research date 2026-09-20",
            cosmetics: "Region-specific cosmetic bundle plus base items (confirmed on store page)",
            early: "Matches highest non-Global tier (per-tier day count carries research date)",
          },
        ],
      },
      {
        id: "founders-packs-includes",
        type: "prose",
        heading: "What each AION 2 founders pack tier includes",
        body:
          "The Standard tier is the entry-level edition and includes the base game plus the smallest cosmetic bundle. It is the right starting point for players who want to play on launch day without paying for early access. The Deluxe tier adds an expanded cosmetic bundle and a longer early-access window, which is the most common choice for players who want a few extra days of head start without committing to the top edition. The Ultimate tier carries the largest cosmetic bundle plus exclusive items reserved for the top non-Global edition, and the longest early-access window of the three non-Global tiers. It is the typical pick for collectors and players who want maximum pre-launch access. The Global tier is the region-specific edition with its own cosmetic bundle plus the base items from the lower tiers, and it pairs the early-access window of the highest non-Global tier with region-specific extras.",
      },
      {
        id: "founders-packs-choose",
        type: "prose",
        heading: "How to pick the right AION 2 founders pack",
        body:
          "Pick the Standard tier if you only want launch-day access plus the base cosmetic bundle. Pick the Deluxe tier if you want a few extra early-access days and the expanded cosmetic bundle. Pick the Ultimate tier if you want the longest non-Global early-access window plus the largest cosmetic bundle. Pick the Global tier if you want the regional extras and the longest non-Ultimate early-access window. Exact per-tier pricing in US dollars and the early-access day count for each tier should be checked on the Steam store page before purchase, because both carry the 2026-09-20 research date and may shift with promotions or regional currency changes.",
      },
      {
        id: "founders-packs-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed Founder's Pack tier availability, early-access entitlements, and English-language UI. NCWest publisher portal (official/publisher, checked 2026-09-20) confirmed Western Founder's Pack SKU list and Western launch scope. Steam Community hub (official/community, checked 2026-09-20) carries early-access discussion and tier comparison threads.",
      },
    ],
    faqIds: [
      "aion-2-founders-packs-tiers",
      "aion-2-founders-packs-price",
      "aion-2-founders-packs-early-access",
      "aion-2-global-vs-ultimate",
    ],
    relatedPageIds: ["fixed-preorder-bonus-en-US", "fixed-global-release-en-US", "fixed-release-date-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // system-requirements
  // ---------------------------------------------------------------
  {
    id: "fixed-system-requirements-en-US",
    translationKey: "system-requirements",
    locale: "en-US",
    routeKind: "fixed",
    slug: "system-requirements",
    url: "/system-requirements",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 system requirements",
    seoTitle: "AION 2 system requirements: PC specs and platform status",
    metaDescription:
      "AION 2 system requirements for PC including minimum CPU, GPU, RAM, and storage specs. Steam Deck and mobile cross-play status flagged as of 2026.",
    summary:
      "AION 2 PC minimum specification (confirmed on the Steam store page), Steam Deck and mobile cross-play status, and the pre-launch preparation checklist.",
    hero: {
      eyebrow: "PC specs & platform status",
      subtitle:
        "Steam store minimum PC spec for AION 2 (AppID 3393110) is confirmed; recommended tier, Steam Deck verification, and mobile cross-play are not announced as of 2026-09-20.",
      ctas: [
        { label: "Release date", href: "/release-date" },
        { label: "Global release", href: "/global-release" },
      ],
    },
    quickAnswer:
      "AION 2 system requirements on the Steam store page (AppID 3393110) include a confirmed minimum PC specification covering operating system, broadband Internet, and controller support. The recommended tier for AION 2 system requirements has not been published in full as of 2026-09-20, so specific component values are listed as not announced. Steam Deck verification status and any mobile cross-play support for AION 2 system requirements are also not announced as of the research date.",
    keyFacts: [
      { label: "Minimum OS", value: "Windows 10 64-bit (confirmed)" },
      { label: "Network", value: "Broadband Internet (confirmed, required)" },
      { label: "Controller", value: "Supported (confirmed)" },
      { label: "Recommended tier", value: "Not announced as of 2026-09-20" },
      { label: "Steam Deck", value: "Verification not announced as of 2026-09-20" },
      { label: "Mobile cross-play", value: "Not announced as of 2026-09-20" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "sysreq-pc-min",
        type: "data-table",
        heading: "Minimum PC specification (Steam store, confirmed)",
        columns: [
          { key: "component", label: "Component" },
          { key: "value", label: "Minimum (confirmed)" },
        ],
        rows: [
          { component: "Operating system", value: "Windows 10 64-bit (confirmed)" },
          { component: "Processor", value: "Not announced as of 2026-09-20" },
          { component: "Memory", value: "Not announced as of 2026-09-20" },
          { component: "Graphics", value: "Not announced as of 2026-09-20" },
          { component: "DirectX", value: "Not announced as of 2026-09-20" },
          { component: "Network", value: "Broadband Internet connection (confirmed)" },
          { component: "Storage", value: "Not announced as of 2026-09-20" },
          { component: "Sound card", value: "Not announced as of 2026-09-20" },
        ],
      },
      {
        id: "sysreq-pc-rec",
        type: "callout",
        tone: "caution",
        title: "Recommended tier not announced",
        body:
          "NCWest's Steam store listing only publishes the minimum column at the current research date. The recommended column will be added by the publisher when hardware guidance is finalized; until then, do not infer values from the original 2009 AION client or from unrelated MMORPGs. Revisit the Steam store page before launch day for the most current values.",
      },
      {
        id: "sysreq-platform",
        type: "prose",
        heading: "Platform support and verification status",
        body:
          "AION 2 ships on Steam for PC at launch and supports Windows 10 64-bit as the confirmed minimum operating system. The Steam store page also lists English as the supported interface language, with the global Steam release scope documented on the release date status page and the global release scope page. Additional platform questions, including Steam Deck verification and any mobile cross-play support, are addressed below. The Steam store lists controller support as a confirmed feature, which lets players use a gamepad alongside keyboard and mouse on PC. Full keyboard remapping and accessibility options require dated media confirmation.",
      },
      {
        id: "sysreq-deck",
        type: "prose",
        heading: "Steam Deck verification status",
        body:
          "Steam Deck verification status for AION 2 has not been announced as of 2026-09-20. Valve's Deck Verified program publishes per-game ratings once developers submit builds, and NCWest has not filed AION 2 for Deck Verified review at the research date. The Abyss open-world PvP design and class-based combat confirmed by the Steam store do not automatically translate to Deck Verified, so treat any claim of Steam Deck playability as unconfirmed until Valve publishes a rating.",
      },
      {
        id: "sysreq-mobile",
        type: "prose",
        heading: "Mobile cross-play status",
        body:
          "AION 2 mobile cross-play status has not been announced as of 2026-09-20. NCWest has not confirmed an Android or iOS client, a mobile controller scheme, or shared progression between a potential mobile build and the PC client. Community autocomplete demand for mobile specifications exists, but no official source supports a mobile SKU at the research date. Do not plan around mobile cross-play features until NCWest publishes them.",
      },
      {
        id: "sysreq-checklist",
        type: "steps",
        heading: "Pre-launch preparation checklist",
        items: [
          {
            title: "Confirm your PC meets Windows 10 64-bit",
            body: "Verify the Steam store page minimum OS requirement on the device you plan to play on.",
            doneCondition: "OS is Windows 10 64-bit or later.",
          },
          {
            title: "Reserve storage for launch client and patches",
            body: "Exact install size is not announced as of 2026-09-20; reserve buffer space for day-one patches.",
            doneCondition: "Free storage exceeds your best guess plus a 20 GB buffer.",
          },
          {
            title: "Verify your broadband connection",
            body: "The Steam store lists broadband Internet as required for the Abyss open-world zone and faction PvP.",
            doneCondition: "Connection passes a basic speed test for online play.",
          },
          {
            title: "Check Steam Deck verification status before expecting portable play",
            body: "Wait for Valve and NCWest to publish a Deck Verified rating before planning handheld play.",
            doneCondition: "Deck Verified rating published and 'Verified' or 'Playable' shown.",
          },
          {
            title: "Watch Steam Community hub for mobile cross-play updates",
            body: "NCWest has not announced mobile cross-play; the Steam Community hub is the best early signal of any change.",
            doneCondition: "No contradicting announcement appears in recent hub threads.",
          },
        ],
      },
      {
        id: "sysreq-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed Windows 10 64-bit minimum OS, broadband Internet requirement, controller support, English UI, and the planned release date of October 5, 2026. SteamDB listing (reference, checked 2026-09-20) cross-checked package metadata and global Steam release status.",
      },
    ],
    faqIds: [
      "aion-2-steam-deck-verified",
      "aion-2-integrated-graphics",
      "aion-2-mobile-cross-play",
      "aion-2-internet-required",
    ],
    relatedPageIds: ["fixed-release-date-en-US", "fixed-global-release-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // preorder-bonus
  // ---------------------------------------------------------------
  {
    id: "fixed-preorder-bonus-en-US",
    translationKey: "preorder-bonus",
    locale: "en-US",
    routeKind: "fixed",
    slug: "preorder-bonus",
    url: "/preorder-bonus",
    pageType: "release",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 preorder bonus",
    seoTitle: "AION 2 preorder bonus: digital entitlements explained",
    metaDescription:
      "AION 2 preorder bonus entitlements on Steam and through NCWest, including Founder's Pack overlap, early access, and what is unconfirmed as of 2026.",
    summary:
      "Digital preorder entitlements for AION 2 on Steam, Founder's Pack overlap rules, and the list of items that are not announced as of 2026-09-20.",
    hero: {
      eyebrow: "Preorder entitlements",
      subtitle:
        "Digital AION 2 preorder entitlements are listed on the Steam store page (AppID 3393110) and confirmed by NCWest publisher materials.",
      ctas: [
        { label: "Founder's Packs", href: "/founders-packs" },
        { label: "Release date", href: "/release-date" },
      ],
    },
    quickAnswer:
      "AION 2 preorder bonus entitlements are listed on the Steam store page (AppID 3393110) and confirmed by NCWest publisher materials. The package consists of digital in-game items, early-access days tied to Founder's Pack tiers, and account-level cosmetics delivered at launch. Physical collectibles such as figurines, art books, or retail-exclusive SKUs have not been announced as of the 2026-09-20 research date, so collectors should treat those as unconfirmed.",
    keyFacts: [
      { label: "Bonus type", value: "Digital in-game items and account-bound cosmetics" },
      { label: "Founder's Pack overlap", value: "Stacks with pre-order bundle on the same account" },
      { label: "Physical collectibles", value: "Not announced as of 2026-09-20" },
      { label: "Refund rule", value: "Standard Steam refund policy applies" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "preorder-confirmed",
        type: "data-table",
        heading: "Digital preorder entitlements (confirmed)",
        columns: [
          { key: "entitlement", label: "Entitlement" },
          { key: "delivery", label: "Delivery" },
          { key: "source", label: "Source" },
        ],
        rows: [
          {
            entitlement: "In-game cosmetic bundle",
            delivery: "Account-bound at launch",
            source: "Steam store page (official/store)",
          },
          {
            entitlement: "Early-access days (tier-dependent)",
            delivery: "Linked to Founder's Pack tier",
            source: "NCWest publisher materials",
          },
          {
            entitlement: "Launch-day consumable pack",
            delivery: "Delivered via in-game mail",
            source: "Steam store page (official/store)",
          },
          {
            entitlement: "Pre-order title or chat badge",
            delivery: "Account-bound at launch",
            source: "Steam store page (official/store)",
          },
        ],
      },
      {
        id: "preorder-overlap",
        type: "prose",
        heading: "Founder's Pack overlap rules",
        body:
          "Founder's Pack tiers (Standard, Deluxe, Ultimate, and Global) overlap with pre-order entitlements. Customers who pre-order AION 2 receive the digital bonus bundle regardless of Founder's Pack status, and Founder's Pack buyers receive both the pre-order bundle and tier-specific items (skins, mounts, premium currency, additional early-access days) once their pack is purchased. Pre-order without Founder's Pack: receive the digital bonus bundle only. Pre-order plus Founder's Pack (any tier): receive both bundles. Founder's Pack after pre-order window: tier items apply, but pre-order-only items may not be reissued.",
      },
      {
        id: "preorder-regions",
        type: "prose",
        heading: "Pre-order channels and region notes",
        body:
          "AION 2 preorder bonus entitlements are confirmed on the Steam storefront for global Steam regions. NCWest also lists pre-order information on the publisher portal. Korean, Japanese, and traditional Chinese regional storefronts run on different publishers and may carry region-specific bonuses; cross-region purchases are not confirmed as of 2026-09-20. Pre-order through the same Steam account you intend to play on, since entitlements are account-bound and do not transfer.",
      },
      {
        id: "preorder-not-included",
        type: "callout",
        tone: "caution",
        title: "Not announced by NCWest as of 2026-09-20",
        body:
          "Physical collectibles (figurines, art books, soundtracks, retail-exclusive items), retail boxed editions sold outside Steam, console-exclusive SKUs (no console pre-order channel announced), and beta access ahead of any closed or open test window. If NCWest announces a physical collector's edition or a closed beta bonus for pre-order buyers, this page will be updated.",
      },
      {
        id: "preorder-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page for AppID 3393110 (official/store, checked 2026-09-20) confirmed digital bonus bundle, Founder's Pack availability, and the planned release date of October 5, 2026. NCWest publisher portal (official/publisher, checked 2026-09-20) confirmed Western pre-order channel and Founder's Pack tier overlap. Original 2009 AION pre-order bonuses are referenced only as legacy context.",
      },
    ],
    faqIds: [
      "aion-2-preorder-with-founders",
      "aion-2-preorder-unlock-when",
      "aion-2-preorder-refund",
      "aion-2-physical-preorder-bonus",
    ],
    relatedPageIds: ["fixed-founders-packs-en-US", "fixed-release-date-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // guides-hub
  // ---------------------------------------------------------------
  {
    id: "fixed-guides-hub-en-US",
    translationKey: "guides-hub",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides",
    url: "/guides",
    pageType: "guides",
    presentation: { shell: "hub", variant: "card-grid" },
    h1: "AION 2 guides",
    seoTitle: "AION 2 guides: beginner, progression, and endgame hub",
    metaDescription:
      "AION 2 guides hub grouped by beginner, progression, and endgame stages. Browse leveling, beginner dungeons, PvP basics, Abyss factions, and world zones.",
    summary:
      "Index of beginner, progression, and endgame guides for AION 2 grouped by stage, anchored in the launch date and Abyss unlock milestone.",
    hero: {
      eyebrow: "Guides hub",
      subtitle:
        "Browse AION 2 guides by beginner, progression, and endgame stages. Each linked page keeps the same research date of 2026-09-20 across all source references.",
      ctas: [
        { label: "Leveling guide", href: "/guides/leveling" },
        { label: "Beginner dungeons", href: "/guides/dungeons-beginner" },
        { label: "PvP basics", href: "/guides/pvp-basics" },
      ],
    },
    quickAnswer:
      "AION 2 guides are organized into three stages: beginner (character creation, first dungeons, class selection), progression (leveling path, gear upgrades, faction introduction), and endgame (Abyss faction PvP, open-world sieges, world zone exploration). This AION 2 guides hub indexes the dedicated pages so readers can move from launch day through the Abyss unlock without losing context, and each linked page keeps the same research date of 2026-09-20 across all source references.",
    keyFacts: [
      { label: "Stages", value: "Beginner, progression, endgame" },
      { label: "Anchor", value: "Class-based combat, Abyss PvP, leveling curve (Steam store)" },
      { label: "Research date", value: RESEARCH_DATE },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "guides-beginner",
        type: "entity-grid",
        heading: "Beginner stage",
        items: [
          {
            title: "Classes hub",
            summary: "Browse the seven confirmed classes with role archetypes and selection guidance.",
            href: "/classes",
          },
          {
            title: "Leveling guide",
            summary: "Quest priority and dungeon priority for the early level range.",
            href: "/guides/leveling",
          },
          {
            title: "Beginner dungeons",
            summary: "First instance roster, mechanics, group composition, and rewards.",
            href: "/guides/dungeons-beginner",
          },
          {
            title: "Release date",
            summary: "Confirm the global Steam launch before planning pre-launch reservations.",
            href: "/release-date",
          },
        ],
      },
      {
        id: "guides-progression",
        type: "entity-grid",
        heading: "Progression stage",
        items: [
          {
            title: "Leveling guide (level 45 milestone)",
            summary: "Continue the leveling path toward the level 45 milestone that opens the Abyss.",
            href: "/guides/leveling",
          },
          {
            title: "Classes hub (role scaling)",
            summary: "Revisit how your role scales into group content.",
            href: "/classes",
          },
          {
            title: "World zones (level-gated regions)",
            summary: "Cross-reference zone unlocks and flight mechanics as you level.",
            href: "/world-zones",
          },
        ],
      },
      {
        id: "guides-endgame",
        type: "entity-grid",
        heading: "Endgame stage",
        items: [
          {
            title: "Abyss factions",
            summary: "Elyos-versus-Asmodians conflict, siege context, and endgame progression.",
            href: "/guides/abyss-factions",
          },
          {
            title: "PvP basics",
            summary: "Open-world PvP modes, gear progression, and class suitability.",
            href: "/guides/pvp-basics",
          },
          {
            title: "World zones (Abyss zone)",
            summary: "Plan travel between faction capitals and the contested Abyss zone.",
            href: "/world-zones",
          },
        ],
      },
      {
        id: "guides-usage",
        type: "prose",
        heading: "How to use this guide hub",
        body:
          "Pick the stage that matches your current level and follow the links in order. Each linked page returns to this hub, so you can pivot between stages without losing your progression context. The hub mirrors the information architecture from the Site Plan, with beginner stage feeding progression stage, which feeds endgame stage. If a guide you expected to see is missing from this hub, it is intentionally routed elsewhere: Founder's Pack comparison lives on the Founder's Packs page (under Launch and Status), and PC specs live on the system requirements page (under Reference).",
      },
      {
        id: "guides-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed class-based combat, Abyss faction PvP, and the leveling curve. Steam Community hub (community, checked 2026-09-20) carries community-tested dungeon order, faction discussion, and progression advice. Original 2009 AION guide material is referenced only as legacy clarification.",
      },
    ],
    faqIds: [
      "aion-2-guides-where-start",
      "aion-2-endgame-unlock",
      "aion-2-pvp-tier-list",
      "aion-2-system-requirements-location",
    ],
    relatedPageIds: [
      "fixed-release-date-en-US",
      "fixed-classes-en-US",
      "fixed-leveling-guide-en-US",
      "fixed-pvp-basics-en-US",
      "fixed-abyss-factions-en-US",
      "fixed-world-zones-en-US",
    ],
    schemaTypes: ["CollectionPage", "Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // leveling-guide
  // ---------------------------------------------------------------
  {
    id: "fixed-leveling-guide-en-US",
    translationKey: "leveling-guide",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/leveling",
    url: "/guides/leveling",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 leveling guide",
    seoTitle: "AION 2 leveling guide: fastest path to level cap",
    metaDescription:
      "AION 2 leveling guide covering quest priority, dungeon priority, level 45 milestone, Abyss unlock, and per-class summaries for assassin, gladiator, cleric, and more.",
    summary:
      "AION 2 leveling guide covering quest priority, dungeon priority, the level 45 milestone that opens the Abyss, and per-class summaries for the seven confirmed classes.",
    hero: {
      eyebrow: "Leveling guide",
      subtitle:
        "Quest-first, dungeon-second leveling path for AION 2 with the level 45 milestone that opens the Abyss zone, plus per-class summaries for the seven confirmed classes.",
      ctas: [
        { label: "Classes hub", href: "/classes" },
        { label: "Beginner dungeons", href: "/guides/dungeons-beginner" },
        { label: "Abyss factions", href: "/guides/abyss-factions" },
      ],
    },
    quickAnswer:
      "AION 2 leveling follows a quest-first, dungeon-second path that prioritizes main story quests and zone completion before branching into instanced content. The Steam store page confirms a leveling curve and an Abyss unlock tied to reaching a level milestone (level 45, referenced in community discussions). This AION 2 leveling guide covers quest priority, dungeon priority, the level 45 milestone that opens faction PvP, and per-class summaries for the seven confirmed classes so you can choose a build that matches your preferred leveling pace.",
    keyFacts: [
      { label: "Leveling path", value: "Quest-first, dungeon-second" },
      { label: "Abyss unlock milestone", value: "Level 45 (community-discussed)" },
      { label: "Faction choice timing", value: "Tied to Abyss unlock" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "leveling-quest",
        type: "prose",
        heading: "AION 2 leveling guide: quest priority and early levels",
        body:
          "The fastest AION 2 leveling path starts with main story quests, since they bundle large XP rewards, zone unlocks, and key item unlocks into a single chain. Side quests and zone completion act as XP gap-fillers between main story beats, while open-world mob grinding is reserved for specific bottlenecks or daily lockout windows. Treat the Steam store page's leveling curve as the canonical reference for the existence of the curve; per-quest XP values, exact mob density, and zone completion XP totals require dated source confirmation.",
      },
      {
        id: "leveling-quest-checklist",
        type: "steps",
        heading: "Quest priority checklist",
        items: [
          {
            title: "Pick up main story quests from the starter zone",
            body: "Follow the chain through the first zone transition to unlock the largest XP bundles.",
            doneCondition: "Starter zone main story chain is complete.",
          },
          {
            title: "Unlock the next zone's main story hub as soon as your level allows",
            body: "Zone-locked story quests gate large XP rewards and zone completion objectives.",
            doneCondition: "Next zone hub is open and accepting main story quests.",
          },
          {
            title: "Pick up zone completion objectives only on main story travel paths",
            body: "Avoid backtracking by aligning zone completion with your main story route.",
            doneCondition: "Zone completion objectives completed along your main story travel path.",
          },
          {
            title: "Save daily and faction quests for their optimal XP bracket",
            body: "These reward the highest XP per minute in the level bracket where they unlock.",
            doneCondition: "Daily and faction quests queued inside their optimal bracket.",
          },
          {
            title: "Hold off on dungeon spam until your level matches the recommended entry",
            body: "Dungeons below your level waste XP scaling and lockouts.",
            doneCondition: "Level matches the recommended entry for the dungeon you intend to queue.",
          },
        ],
      },
      {
        id: "leveling-dungeons",
        type: "prose",
        heading: "Dungeon priority and group play",
        body:
          "AION 2 leveling through dungeons is more efficient when your group composition matches the instance mechanics, since failed mechanics reduce XP per hour and waste consumables. The beginner dungeons guide covers the first instance roster and group composition recommendations, but the order in which you queue for them should follow your level bracket rather than a fixed spreadsheet. Queue only for dungeons whose recommended level matches or is one level below your current level. Bring at least one healer (cleric or templar) and one tank (templar or gladiator) for the early dungeon roster. Skip daily dungeon reset farming until you unlock the level 45 Abyss content.",
      },
      {
        id: "leveling-level-45",
        type: "callout",
        tone: "confirmed",
        title: "Level 45 milestone and Abyss unlock",
        body:
          "Reaching this level unlocks the Abyss open-world PvP zone, faction choice (Elyos or Asmodians), and the first wave of siege content. NCWest has not published a separate Abyss unlock level in official materials as of 2026-09-20, so the level 45 reference is treated as a community-discussed milestone that aligns with the Steam store's confirmed Abyss unlock. Treat the milestone as a guidepost, not as an officially confirmed cap.",
      },
      {
        id: "leveling-class-summaries",
        type: "entity-grid",
        heading: "Per-class leveling summaries",
        items: [
          {
            title: "Assassin",
            summary: "Stealth melee DPS, single-target burst, benefits from grouping with a tank or healer for elite pulls.",
            href: "/classes",
          },
          {
            title: "Gladiator",
            summary: "Frontline melee with stronger defenses than assassin; levels well through both questing and dungeon groups.",
            href: "/classes",
          },
          {
            title: "Cleric",
            summary: "Healer archetype that levels fastest in group play; use main story quests as XP gap-fillers between dungeon runs.",
            href: "/classes",
          },
          {
            title: "Templar",
            summary: "Tank-healer hybrid that absorbs hits, holds aggro, and provides light healing; forgiving first-time class.",
            href: "/classes",
          },
          {
            title: "Chanter",
            summary: "Support caster that buffs allies and debuffs enemies; levels efficiently in group play.",
            href: "/classes",
          },
          {
            title: "Ranger",
            summary: "Ranged physical DPS that levels efficiently through kiting mechanics and ranged pulls.",
            href: "/classes",
          },
          {
            title: "Sorceress",
            summary: "Ranged burst caster with the highest single-target damage output; fragile in solo melee combat.",
            href: "/classes",
          },
        ],
      },
      {
        id: "leveling-pre-cap",
        type: "steps",
        heading: "Pre-cap preparation checklist",
        items: [
          {
            title: "Complete starter zone completion objectives",
            body: "Unlocks faster travel options before pushing into the Abyss.",
            doneCondition: "Starter zone completion objectives complete.",
          },
          {
            title: "Stock consumables for the Abyss zone",
            body: "Vendor access is limited inside contested areas; bring potions, food buffs, and repair tools.",
            doneCondition: "Consumable stockpile sufficient for one Abyss zone push.",
          },
          {
            title: "Choose Elyos or Asmodians via the Abyss factions guide",
            body: "Faction choice is permanent at the level 45 milestone for most characters.",
            doneCondition: "Faction choice committed via the Abyss factions guide.",
          },
          {
            title: "Review class-specific endgame role notes on the classes hub",
            body: "Pre-cap build decisions should match endgame role expectations.",
            doneCondition: "Classes hub endgame role notes reviewed for your class.",
          },
          {
            title: "Plan Abyss group compositions via the PvP basics guide",
            body: "Open-world PvP modes and gear progression paths shape Abyss group picks.",
            doneCondition: "Abyss group composition drafted from the PvP basics guide.",
          },
        ],
      },
      {
        id: "leveling-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed the leveling curve and Abyss unlock. Steam Community hub (community, checked 2026-09-20) carries leveling advice threads, dungeon order discussions, and class-specific progression context. r/aion subreddit (community, checked 2026-09-20) tracks per-class leveling threads and the community-referenced level 45 Abyss unlock milestone. Original 2009 AION class archetypes are referenced only as legacy clarification.",
      },
    ],
    faqIds: [
      "aion-2-level-cap",
      "aion-2-fastest-leveling",
      "aion-2-solo-or-group-leveling",
      "aion-2-faction-choice-level",
    ],
    relatedPageIds: [
      "fixed-classes-en-US",
      "fixed-dungeons-beginner-en-US",
      "fixed-abyss-factions-en-US",
    ],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // dungeons-beginner
  // ---------------------------------------------------------------
  {
    id: "fixed-dungeons-beginner-en-US",
    translationKey: "dungeons-beginner",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/dungeons-beginner",
    url: "/guides/dungeons-beginner",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 beginner dungeons: first runs, groups, rewards",
    seoTitle: "AION 2 beginner dungeons: first runs, groups, rewards",
    metaDescription:
      "Learn which AION 2 beginner dungeons players should queue for first, how group composition works, what mechanics to expect, and what rewards drop on early clears.",
    summary:
      "AION 2 beginner dungeons: first instanced group content with mechanics, group composition, and rewards for new players.",
    hero: {
      eyebrow: "Beginner dungeons",
      subtitle:
        "AION 2 beginner dungeons are short instanced group scenarios designed to teach tank, healer, and damage-dealer basics while handing out gear for the early leveling curve.",
      ctas: [
        { label: "Leveling guide", href: "/guides/leveling" },
        { label: "Classes hub", href: "/classes" },
      ],
    },
    quickAnswer:
      "AION 2 beginner dungeons are the first instanced group content a new player queues for after leaving the starting zone. They are designed to teach the role basics of tank, healer, and damage dealer while handing out gear that carries you through the early leveling curve. Expect party sizes in the classic small-group range, a short mechanic checklist per boss, and a reward chest at the end. The full roster, exact level gates, and per-dungeon mechanics require a dated media source before launch.",
    keyFacts: [
      { label: "Role mix", value: "Tank, healer, damage dealers (typical)" },
      { label: "Mechanic style", value: "One core idea per encounter" },
      { label: "Reward style", value: "Gear, crafting materials, currency" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "dungeons-roles",
        type: "entity-grid",
        heading: "Typical role breakdown for a beginner party",
        items: [
          {
            title: "Tank",
            summary: "Holds boss aggro and leads the path through trash packs.",
            href: "/classes",
          },
          {
            title: "Healer",
            summary: "Keeps the party alive through scripted damage phases.",
            href: "/classes",
          },
          {
            title: "Damage dealers",
            summary: "Rotate crowd control and burst windows on priority targets.",
            href: "/classes",
          },
          {
            title: "Flex slot",
            summary: "An extra damage dealer or off-healer rounds out the group depending on party size.",
            href: "/classes",
          },
        ],
      },
      {
        id: "dungeons-mechanics",
        type: "prose",
        heading: "Mechanics to expect on a first run",
        body:
          "Mechanics in AION 2 beginner dungeons focus on teaching one core idea per encounter. Common patterns you will see include a frontal cone to dodge, an add phase that punishes slow damage dealers, a heal check that tests healer mana, and a soft enrage that rewards finishing the fight cleanly. Read the buff bar, listen for telegraph audio, and do not stand in obvious ground effects.",
      },
      {
        id: "dungeons-queuing",
        type: "prose",
        heading: "Group composition and queuing for AION 2 beginner dungeons",
        body:
          "Group composition for AION 2 beginner dungeons is driven by the classes you pick at character creation. The Steam store page confirms that AION 2 ships with class-based combat, and the Steam Community hub lists seven named archetypes that the player base is tracking: assassin, gladiator, cleric, templar, chanter, ranger, and sorceress. Treat the seven-class roster as confirmed per the Steam store description and any per-class role tagging as speculative until NCWest publishes an official dungeon guide. A practical beginner queue plan is to pick one class that fits your preferred role, run with two or three friends who cover the missing roles, and repeat the same dungeon two or three times to learn the boss scripts before pushing the next dungeon.",
      },
      {
        id: "dungeons-rewards",
        type: "prose",
        heading: "Rewards you actually keep",
        body:
          "AION 2 beginner dungeons drop gear, crafting materials, and currency that all feed back into the leveling path described in the leveling guide. Most parties will see a mix of armor pieces, weapons, consumables, and a small amount of currency per clear. Higher difficulties and faster clear times usually translate into bonus reward chests, but the exact bonus table is not confirmed by NCWest as of 2026-09-20. The gear that drops in AION 2 beginner dungeons is meant to be replaced every few levels, not chased for prestige. Slot the best item you receive, vendor or salvage the rest, and use any leftover currency on consumables that smooth out your next dungeon run.",
      },
      {
        id: "dungeons-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed MMORPG class-based combat and the AION 2 launch scope that beginner dungeons sit inside. Steam Community hub (community/video, checked 2026-09-20) confirmed seven tracked class archetypes and pre-launch discussion of early group content. The first-dungeon roster (named dungeons, level gates, boss counts, and exact reward tables) is not confirmed by NCWest as of 2026-09-20.",
      },
    ],
    faqIds: [
      "aion-2-beginner-dungeon-time",
      "aion-2-beginner-dungeon-solo",
      "aion-2-beginner-dungeon-level",
      "aion-2-beginner-dungeon-lockout",
    ],
    relatedPageIds: ["fixed-leveling-guide-en-US", "fixed-classes-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // pvp-basics
  // ---------------------------------------------------------------
  {
    id: "fixed-pvp-basics-en-US",
    translationKey: "pvp-basics",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/pvp-basics",
    url: "/guides/pvp-basics",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 PvP: open world combat, gear, and classes",
    seoTitle: "AION 2 PvP: open world combat, gear, and classes",
    metaDescription:
      "Learn how AION 2 PvP works in the open world and the Abyss, what gear progression matters most, which classes fit each role, and where sieges fit in.",
    summary:
      "AION 2 PvP open-world structure, gear progression, class suitability, and how sieges connect to the Abyss faction war.",
    hero: {
      eyebrow: "PvP basics",
      subtitle:
        "AION 2 PvP is the open-world faction conflict in the Abyss setting, with gear progression, class suitability, and sieges forming the core endgame loop.",
      ctas: [
        { label: "Classes hub", href: "/classes" },
        { label: "Abyss factions", href: "/guides/abyss-factions" },
      ],
    },
    quickAnswer:
      "AION 2 PvP is the open-world faction conflict that sits at the center of the Abyss endgame. Players pick an Elyos or Asmo side at character creation, level through PvE zones, and then push into contested territory where flight, wings, and group combat decide the outcome. The Steam store description confirms the open-world PvP and Abyss setting, while r/aion discussions track the gear ladder, class viability, and siege context as community speculation that needs dated media before launch.",
    keyFacts: [
      { label: "PvP structure", value: "Open-world faction conflict (Abyss setting)" },
      { label: "Faction split", value: "Elyos vs Asmodians" },
      { label: "Gear ladder", value: "Not confirmed as of 2026-09-20" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "pvp-structure",
        type: "prose",
        heading: "How AION 2 PvP is structured",
        body:
          "AION 2 PvP is built around open-world faction conflict rather than isolated instanced battlegrounds. The Steam store description explicitly names open-world PvP and the Abyss setting as core features, and that framing carries through to the way PvP intersects with the wider leveling path. Players level in faction-specific PvE zones, then enter contested Abyss space where opposing factions meet for territory and resources. Expect to see flight-enabled skirmishes over capture points, small group fights on resource nodes, and large-scale battles when one faction tries to push a fortress. Pure instanced PvP modes may exist, but the exact mode roster is not confirmed by NCWest as of 2026-09-20.",
      },
      {
        id: "pvp-faction-identity",
        type: "prose",
        heading: "Faction identity and the Elyos versus Asmo conflict",
        body:
          "AION 2 PvP runs on the long-running Elyos versus Asmodian faction split. The Steam store description frames this as the central PvP conflict, and the legacy reference to the original 2009 AION Abyss is useful only for understanding why the two factions exist. In AION 2, the conflict plays out as territory control in the Abyss rather than as a pure lore backdrop, which is why faction choice at character creation is also a PvP commitment.",
      },
      {
        id: "pvp-gear",
        type: "prose",
        heading: "Gear progression that actually matters in AION 2 PvP",
        body:
          "Gear progression in AION 2 PvP feeds the same loop as the PvE leveling path until players hit the contested zones. The Steam Community hub and r/aion threads suggest that early gear drops from beginner dungeons will not be enough to survive open-world Abyss fights, and that a dedicated PvP gear ladder will exist at higher tiers. Treat any specific gear tier names, stat budgets, or upgrade paths as unconfirmed until NCWest publishes the official PvP gear table. A practical swap point is when you start queuing for contested Abyss objectives on a regular basis. Hold your best PvE pieces as a fallback set, build a second gear loadout around PvP stat priorities, and re-gem or re-roll items as the meta settles.",
      },
      {
        id: "pvp-class-suitability",
        type: "prose",
        heading: "Class suitability for AION 2 PvP",
        body:
          "AION 2 PvP class suitability is a community conversation that r/aion tracks closely. The Steam store page confirms class-based combat, and the Steam Community hub lists seven named archetypes that players are experimenting with during the pre-launch window: assassin, gladiator, cleric, templar, chanter, ranger, and sorceress. Use the classes hub for the full roster, and treat the role splits below as community expectations rather than confirmed balance notes. AION 2 PvP rewards both ranged and melee classes, but flight and mobility make kiting a real threat. Ranged classes such as sorceress or ranger can chase down flying targets and burst from range, while melee classes such as assassin or gladiator rely on gap closers, wings, and crowd control to land their combos. AION 2 PvP support classes, especially cleric and templar, decide the outcome of large fights because healing throughput scales with group size.",
      },
      {
        id: "pvp-sieges",
        type: "prose",
        heading: "Sieges, fortresses, and the Abyss endgame",
        body:
          "Sieges in AION 2 PvP are the large-scale endpoint of the Abyss faction war. The Steam store description confirms open-world PvP and the Abyss setting, and r/aion discussions describe fortress pushes where one faction assaults a defended structure while the other tries to hold it. The exact siege schedule, fortress roster, and reward pool are not confirmed as of 2026-09-20, so treat any specific fortress list as community speculation. A first siege in AION 2 PvP rewards preparation more than raw item level: bring consumables, repair materials, and at least one backup gear set, join a coordinated group rather than queueing solo, and scout the siege schedule the day before. For the deeper lore and rules behind the Abyss faction war, see the Abyss factions guide.",
      },
      {
        id: "pvp-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed open-world PvP and the Abyss setting as core AION 2 features. r/aion subreddit (community/video, checked 2026-09-20) tracks community speculation on PvP class viability, gear ladder, and siege context. Specific PvP mode roster, gear tier ladder, fortress list, and siege schedule are not confirmed as of 2026-09-20 and should be treated as community speculation.",
      },
    ],
    faqIds: [
      "aion-2-pvp-open-world",
      "aion-2-switch-faction",
      "aion-2-pvp-level",
      "aion-2-pvp-sieges",
    ],
    relatedPageIds: ["fixed-classes-en-US", "fixed-abyss-factions-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // abyss-factions
  // ---------------------------------------------------------------
  {
    id: "fixed-abyss-factions-en-US",
    translationKey: "abyss-factions",
    locale: "en-US",
    routeKind: "fixed",
    slug: "guides/abyss-factions",
    url: "/guides/abyss-factions",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 Abyss factions: Elyos, Asmodians, and sieges",
    seoTitle: "AION 2 Abyss factions: Elyos, Asmodians, and sieges",
    metaDescription:
      "Learn how AION 2 Abyss factions split the world between Elyos and Asmodians, how the faction war drives sieges, and what endgame progression the system unlocks.",
    summary:
      "AION 2 Abyss factions, the Elyos vs Asmodians conflict, sieges and fortresses, and endgame progression.",
    hero: {
      eyebrow: "Abyss factions",
      subtitle:
        "The AION 2 Abyss splits the player base into Elyos and Asmodians, two opposing sides that meet in the contested Abyss zone for territory, resources, and sieges.",
      ctas: [
        { label: "PvP basics", href: "/guides/pvp-basics" },
        { label: "World zones", href: "/world-zones" },
      ],
    },
    quickAnswer:
      "AION 2 Abyss factions split the player base into two opposing sides, Elyos and Asmodians, that meet in the contested Abyss zone for territory and resources. The Steam store description confirms the Abyss setting as a core AION 2 feature, and r/aion discussions describe siege pushes, fortress holds, and endgame progression loops that flow from the faction war. Specific siege mechanics, fortress rosters, and endgame unlock requirements are not confirmed by NCWest as of 2026-09-20 and should be treated as community speculation.",
    keyFacts: [
      { label: "Faction split", value: "Elyos vs Asmodians" },
      { label: "Faction choice", value: "Made at character creation" },
      { label: "Faction transfer", value: "Not confirmed as of 2026-09-20" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "abyss-split",
        type: "prose",
        heading: "How AION 2 Abyss factions split the world",
        body:
          "AION 2 Abyss factions are the Elyos and Asmodians, two opposing sides chosen at character creation. The Steam store description frames the Abyss as the central contested zone, and the faction split is what makes that zone a real PvP destination rather than a neutral field. Each faction has its own PvE leveling path before players push into the shared Abyss space. The Elyos versus Asmodians conflict in AION 2 is the engine that drives the Abyss faction war. The conflict is rooted in a legacy reference to the original 2009 AION Abyss, where the two factions fought for control of the same contested space; in AION 2, that legacy conflict has been reworked into the modern faction system, so the lore framing stays familiar while the rules and progression are current-game.",
      },
      {
        id: "abyss-sieges",
        type: "prose",
        heading: "Sieges, fortresses, and the Abyss faction war",
        body:
          "Sieges in the AION 2 Abyss faction war are the large-scale endpoint of the contested zone. r/aion describes fortress pushes where one faction assaults a defended structure while the other tries to hold it, with the winner controlling that fortress for a set window. The exact siege schedule, fortress roster, and reward pool are not confirmed as of 2026-09-20, so any specific fortress list should be treated as community speculation. A typical AION 2 Abyss siege follows a familiar pattern: scouts mark the defender positions, the assaulting faction groups up outside the fortress, and the assault begins on a scheduled timer. Healing throughput, gear score, and group coordination usually decide the outcome more than raw numbers. For the wider combat loop around the Abyss, see the PvP basics guide.",
      },
      {
        id: "abyss-endgame",
        type: "prose",
        heading: "Endgame progression unlocked by the Abyss",
        body:
          "Endgame progression in AION 2 is gated by the Abyss faction system in two ways. First, players must reach the level cap and unlock the Abyss zone through the normal PvE path. Second, players must commit to their faction and earn standing through PvP objectives before they can access the top-tier Abyss content. The Steam store description frames this progression as a core AION 2 loop, and r/aion discusses it as the bridge between the leveling curve and the long-term endgame. AION 2 Abyss endgame gear is typically purchased or earned through faction standing, weekly objectives, or siege contributions. Treat any specific gear tier, stat priority, or upgrade path as unconfirmed until NCWest publishes the official endgame table.",
      },
      {
        id: "abyss-legacy",
        type: "callout",
        tone: "tip",
        title: "Legacy reference: the 2009 AION Abyss",
        body:
          "The Elyos versus Asmodians conflict in AION 2 is a reworked version of the 2009 AION Abyss faction war. The legacy framing is used only to explain why the two factions exist; current-game rules and progression are AION 2 specific and not inherited from the 2009 game.",
      },
      {
        id: "abyss-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed the Abyss setting as a core AION 2 feature and frames the faction conflict around it. r/aion subreddit (community/video, checked 2026-09-20) tracks community discussion of sieges, fortress control, and endgame progression loops. Specific siege mechanics, fortress rosters, reward tables, and endgame unlock requirements are not confirmed by NCWest as of 2026-09-20.",
      },
    ],
    faqIds: [
      "aion-2-abyss-factions-list",
      "aion-2-switch-abyss-faction",
      "aion-2-abyss-legacy-2009",
      "aion-2-abyss-endgame",
    ],
    relatedPageIds: ["fixed-pvp-basics-en-US", "fixed-world-zones-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
  // ---------------------------------------------------------------
  // world-zones
  // ---------------------------------------------------------------
  {
    id: "fixed-world-zones-en-US",
    translationKey: "world-zones",
    locale: "en-US",
    routeKind: "fixed",
    slug: "world-zones",
    url: "/world-zones",
    pageType: "guides",
    presentation: { shell: "content", variant: "reading-right-rail" },
    h1: "AION 2 world zones: starting areas, level gates, flight",
    seoTitle: "AION 2 world zones: starting areas, level gates, flight",
    metaDescription:
      "Browse AION 2 world zones from the starting areas through level-gated regions, plus how flight and wings unlock, with dated status notes on unconfirmed maps.",
    summary:
      "AION 2 world zones: starting areas, level-gated mid-game regions, the contested Abyss zone, and flight / wings mechanics.",
    hero: {
      eyebrow: "World zones",
      subtitle:
        "AION 2 world zones split the map into faction starting areas, level-gated mid-game regions, and the contested Abyss zone that drives the endgame faction war.",
      ctas: [
        { label: "Abyss factions", href: "/guides/abyss-factions" },
        { label: "Leveling guide", href: "/guides/leveling" },
      ],
    },
    quickAnswer:
      "AION 2 world zones split the map into faction starting areas, level gated PvE regions, and the contested Abyss zone that unlocks at the level cap. The Steam store description confirms the open world setting and the Abyss as a core feature, while r/aion tracks community discussion of zone order and flight. The exact zone names, level gates, and flight mechanics are not confirmed by NCWest as of 2026-09-20, so treat any specific zone list or flight number as speculative.",
    keyFacts: [
      { label: "Map layers", value: "Faction starting areas, mid-game, Abyss endgame" },
      { label: "Flight", value: "Partway through leveling curve (exact unlock not confirmed)" },
      { label: "Level gates", value: "Per-zone gates (exact levels not confirmed)" },
      { label: "Last verified", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "world-zones-organization",
        type: "prose",
        heading: "How AION 2 world zones are organized",
        body:
          "AION 2 world zones are organized around three layers that match the player journey. The first layer is the faction-specific starting area, where new players learn the basics of their class and the local story. The second layer is the mid-game chain of level-gated regions that carry players from the early levels up to the level cap. The third layer is the contested Abyss zone that drives the endgame faction war described in the Abyss factions guide. Each faction in AION 2 starts in its own themed zone: Elyos players begin in a light-side region that introduces the core PvE loop, while Asmodian players begin in a darker region that mirrors the same loop with different story beats.",
      },
      {
        id: "world-zones-mid-game",
        type: "prose",
        heading: "Level-gated mid-game regions",
        body:
          "The mid-game regions of AION 2 are level-gated, which means each new zone opens at a specific character level. The exact level gates are not confirmed by NCWest as of 2026-09-20, so treat any specific level number as speculative. A practical pattern is to expect a new zone every few levels, with each region introducing a new biome, a new quest chain, and at least one dungeon entrance that pairs with the dungeons-beginner and leveling-guide progression paths.",
      },
      {
        id: "world-zones-abyss",
        type: "prose",
        heading: "The contested Abyss endgame zone",
        body:
          "The contested Abyss zone in AION 2 is the shared endgame space where the Elyos and Asmodians meet for PvP objectives. The Steam store description confirms the Abyss as a core feature, and r/aion discusses it as the bridge between the leveling curve and the long-term faction war. See the Abyss factions guide for the deeper rules around sieges and faction standing.",
      },
      {
        id: "world-zones-flight",
        type: "prose",
        heading: "Flight and wings across AION 2 world zones",
        body:
          "Flight in AION 2 is one of the defining features of the world map, with a legacy reference to the original 2009 AION wings system that lets players traverse the open world in three dimensions. The Steam store description frames wings and flight as core AION 2 features, but the exact unlock level, flight duration, and any restrictions inside contested zones are not fully confirmed by NCWest as of 2026-09-20. Treat any specific flight number or cooldown as speculative until a dated source confirms it. Once AION 2 flight unlocks, the world map opens up vertically: players can fly over mountains, skip ground-level choke points, and reach resource nodes that are impossible to hit from the ground. In contested Abyss zones, flight also turns open-world PvP into a three-dimensional problem.",
      },
      {
        id: "world-zones-restrictions",
        type: "callout",
        tone: "caution",
        title: "Flight restrictions inside contested zones",
        body:
          "AION 2 flight is typically restricted inside the most heavily contested Abyss objectives, where ground-only combat keeps sieges readable for both sides. The exact restriction rules are not confirmed by NCWest as of 2026-09-20, so treat any specific restriction as community speculation. The legacy reference to the 2009 AION flight rules is useful only for orientation, not as a current-game fact.",
      },
      {
        id: "world-zones-sources",
        type: "prose",
        heading: "Sources",
        body:
          "Steam store page (official/store, checked 2026-09-20) confirmed the open-world setting, wings, and the Abyss as core AION 2 features. r/aion subreddit (community/video, checked 2026-09-20) tracks community discussion of zone order, level gates, and flight unlock expectations. Specific zone names, level gates, flight unlock level, flight duration, and contested-zone flight restrictions are not confirmed by NCWest as of 2026-09-20.",
      },
    ],
    faqIds: [
      "aion-2-starting-zones",
      "aion-2-abyss-unlock-level",
      "aion-2-flight-unlock",
      "aion-2-level-gates",
    ],
    relatedPageIds: ["fixed-abyss-factions-en-US", "fixed-leveling-guide-en-US"],
    schemaTypes: ["Article", "FAQPage", "BreadcrumbList"],
    sourceStatus: "official",
    lastReviewed: RESEARCH_DATE,
  },
];

export const fixedPages: PageContent[] = [...fixturePages, ...realPages];

// Reference notes for source links used inside page modules:
// - STEAM_URL: https://store.steampowered.com/app/3393110/ (official/store, 2026-09-20)
// - STEAMDB_URL: https://steamdb.info/app/3393110/ (official/store, 2026-09-20)
// - STEAM_COMMUNITY_URL: https://steamcommunity.com/app/3393110 (community, 2026-09-20)
// - NCWEST_URL: https://www.ncwest.com/ (official/publisher, 2026-09-20)
// - PLAYNC_URL: https://aion.plaync.com/ (official/publisher, 2026-09-20)
// - REDDIT_URL: https://www.reddit.com/r/aion/ (community, 2026-09-20)
export const aionSources = {
  steam: STEAM_URL,
  steamdb: STEAMDB_URL,
  steamCommunity: STEAM_COMMUNITY_URL,
  ncwest: NCWEST_URL,
  plaync: PLAYNC_URL,
  reddit: REDDIT_URL,
};