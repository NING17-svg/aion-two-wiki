import type { SiteLocaleConfig } from "@/types/localization";

export interface SiteOfficialSource {
  label: string;
  href: string;
  description: string;
}

export interface SiteConfig {
  name: string;
  brandMark?: string;
  gameName: string;
  domain: string;
  baseUrl: string;
  description: string;
  tagline: string;
  primaryLocale: string;
  locales: SiteLocaleConfig[];
  author: string;
  gaMeasurementId: string;
  bingSiteAuthCode: string;
  officialSources: SiteOfficialSource[];
  disclaimer: string;
}

export const site: SiteConfig = {
  name: "AION 2 Wiki",
  brandMark: "A2W",
  gameName: "AION 2",
  domain: "aion-two.wiki",
  baseUrl: (process.env.NEXT_PUBLIC_SITE_URL || "https://aion-two.wiki").replace(/\/$/, ""),
  description:
    "AION 2 Wiki is an unofficial pre-launch reference hub for US English search users: release date status, Founder's Pack tiers, classes, system requirements, guides hub, and Abyss faction PvP context for the AION 2 Steam launch.",
  tagline: "AION 2 release date, classes, Founder's Packs, and Abyss faction PvP context for US launch players.",
  primaryLocale: "en-US",
  locales: [
    {
      code: "en-US",
      label: "English",
      pathPrefix: "",
      htmlLang: "en-US",
      openGraphLocale: "en_US",
      ui: {
        searchOpen: "Search",
        searchClose: "Close search",
        searchPlaceholder: "Search this guide",
        searchSubmit: "Search",
        searchLoading: "Loading search…",
        searchError: "Search is unavailable right now.",
        searchNoResults: "No matching pages found.",
        recentUpdates: "Recent updates",
        lastReviewed: "Last reviewed",
      },
    },
  ],
  author: "AION 2 Wiki",
  gaMeasurementId: process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || "",
  bingSiteAuthCode: process.env.NEXT_PUBLIC_BING_SITE_AUTH_CODE || "",
  officialSources: [
    {
      label: "AION 2 on Steam (AppID 3393110)",
      href: "https://store.steampowered.com/app/3393110/",
      description:
        "Official Steam store page for AION 2 (AppID 3393110, developer and publisher NCWest, planned release date Oct 5, 2026).",
    },
    {
      label: "NCWest AION portal",
      href: "https://www.ncwest.com/",
      description:
        "Western AION publisher portal; confirms AION IP ownership and AION 2 publisher scope.",
    },
    {
      label: "PlayNC AION franchise portal",
      href: "https://aion.plaync.com/",
      description:
        "Korean AION franchise portal; confirms franchise status and AION 2 announcement scope.",
    },
  ],
  disclaimer:
    "AION 2 Wiki is an unofficial fan reference built from the AION 2 Steam store page (AppID 3393110), SteamDB metadata, the NCWest and PlayNC publisher portals, and r/aion community discussion. Current-game facts are dated to research date 2026-09-20; any item that has not been confirmed in official or dated media is written as a dated not-confirmed status note. The original 2009 AION is referenced only as legacy clarification; AION 2 systems are evolved versions and not directly inherited.",
};
