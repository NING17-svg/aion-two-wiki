import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

export const homePage: PageContent = {
  id: "home",
  translationKey: "home",
  locale: "en-US",
  routeKind: "home",
  slug: "",
  url: "/",
  pageType: "home",
  presentation: { shell: "home", variant: "media-hero" },
  h1: "AION 2 release date, classes, Founder's Packs hub",
  seoTitle: "AION 2 release date, classes, Founder's Packs hub",
  metaDescription:
    "Confirm the AION 2 release date and current Steam launch status, browse the class roster, compare Founder's Pack tiers, and find guides to prepare for US play.",
  summary:
    "Pre-launch reference hub for AION 2 (Steam AppID 3393110): release date status, Founder's Pack tiers, classes, system requirements, guides hub, and Abyss faction PvP context for US English search users.",
  hero: {
    eyebrow: "Pre-launch reference",
    subtitle: site.tagline,
    ctas: [
      { label: "Release date", href: "/release-date" },
      { label: "Browse classes", href: "/classes" },
      { label: "Founder's Packs", href: "/founders-packs" },
    ],
  },
  quickAnswer:
    "Based on the Steam store page and SteamDB listing for AppID 3393110, the AION 2 release date is Oct 5, 2026. The Steam launch is published by NCWest and confirmed across official store and publisher sources as of 2026-09-20. Founder's Pack tiers, the class roster, and English-language UI support are also confirmed on the Steam store page. Beta unlock times, Steam Deck verification, mobile cross-play, and review embargo status were not announced as of 2026-09-20.",
  keyFacts: [
    { label: "Release date", value: "October 5, 2026 (Steam AppID 3393110)" },
    { label: "Publisher", value: "NCWest" },
    { label: "Platform", value: "Steam (Windows 10 64-bit minimum)" },
    { label: "Language", value: "English (primary supported locale)" },
    { label: "Last verified", value: "2026-09-20" },
  ],
  modules: [
    {
      id: "release-window",
      type: "entity-grid",
      heading: "Launch & Status",
      items: [
        {
          title: "Release date status",
          summary:
            "Confirm the AION 2 release date and current Steam launch stage.",
          href: "/release-date",
        },
        {
          title: "Global release scope",
          summary:
            "Understand the worldwide launch scope, region ordering, and Korean franchise context.",
          href: "/global-release",
        },
        {
          title: "Founder's Packs",
          summary:
            "Compare Standard ($24.99), Deluxe ($49.99), and Ultimate ($99.99) tiers with named cosmetics and the 5-day Advance Access head start.",
          href: "/founders-packs",
        },
        {
          title: "Preorder bonus",
          summary:
            "Digital entitlements and Founder's Pack overlap explained before launch.",
          href: "/preorder-bonus",
        },
        {
          title: "System requirements",
          summary:
            "PC minimum specs and Steam Deck / mobile cross-play status as of the research date.",
          href: "/system-requirements",
        },
      ],
    },
    {
      id: "classes-and-guides",
      type: "entity-grid",
      heading: "Classes & Guides",
      items: [
        {
          title: "Classes hub",
          summary:
            "Browse the eight launch AION 2 classes with role archetypes, per-class weapons, and a starter-class pick framework.",
          href: "/classes",
        },
        {
          title: "Guides hub",
          summary:
            "Beginner, progression, and endgame guides for AION 2 grouped by stage.",
          href: "/guides",
        },
        {
          title: "Leveling guide",
          summary:
            "Quest and dungeon priority with the level 45 milestone that opens the Abyss.",
          href: "/guides/leveling",
        },
        {
          title: "Beginner dungeons",
          summary:
            "First instanced group content with mechanics, groups, and rewards.",
          href: "/guides/dungeons-beginner",
        },
        {
          title: "PvP basics",
          summary:
            "Open-world PvP, gear progression, and class suitability in the Abyss setting.",
          href: "/guides/pvp-basics",
        },
        {
          title: "Abyss factions",
          summary:
            "Elyos vs Asmodians conflict, sieges, and endgame progression.",
          href: "/guides/abyss-factions",
        },
        {
          title: "World zones",
          summary:
            "Starting zones, level-gated regions, and flight mechanics across the world map.",
          href: "/world-zones",
        },
      ],
    },
    {
      id: "safety-notes",
      type: "callout",
      tone: "caution",
      title: "What is not confirmed as of 2026-09-20",
      body:
        "Pre-launch beta unlock times, head-start windows, Steam Deck verification status, mobile cross-play support, and review embargoes have not been announced by NCWest. The level 45 milestone that opens the Abyss is a community-discussed reference point, not an officially confirmed cap. Per-class skill trees, gender-lock status, and tier rankings also require dated media or beta-confirmed sources.",
    },
    {
      id: "sources",
      type: "prose",
      heading: "Sources",
      body:
        "Every fact on this hub is dated to 2026-09-20 and sourced to the AION 2 Steam store page (AppID 3393110), SteamDB metadata, the NCWest publisher portal, the PlayNC franchise portal, the Steam Community hub, and r/aion community discussion. Legacy 2009 AION material is referenced only as clarification; AION 2 systems are the current confirmed scope.",
    },
  ],
  faqIds: [
    "what-is-aion-2",
    "when-is-aion-2-release",
    "which-founders-pack-tier",
    "how-many-aion-2-classes",
    "is-aion-2-global-on-steam",
  ],
  relatedPageIds: [
    "fixed-release-date-en-US",
    "fixed-classes-en-US",
    "fixed-founders-packs-en-US",
    "fixed-system-requirements-en-US",
    "fixed-preorder-bonus-en-US",
    "fixed-guides-hub-en-US",
    "fixed-global-release-en-US",
  ],
  schemaTypes: ["WebSite", "CollectionPage", "FAQPage"],
  sourceStatus: "official",
  lastReviewed: "2026-09-20",
};