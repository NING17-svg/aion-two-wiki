import { site } from "@/data/site";
import type { PageContent } from "@/types/content";

const RESEARCH_DATE = "2026-09-20";

export const sitePages: PageContent[] = [
  {
    id: "about",
    translationKey: "about",
    locale: "en-US",
    routeKind: "fixed",
    slug: "about",
    url: "/about",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: `About ${site.name}`,
    seoTitle: `About ${site.name}`,
    metaDescription:
      "About AION 2 Wiki: unofficial pre-launch reference scope, sourcing rules, and editorial principles for US English search users tracking the Steam launch.",
    summary:
      "A trust page explaining the unofficial status of AION 2 Wiki, sourcing rules, and guide scope.",
    hero: {
      eyebrow: "About",
      subtitle:
        "Learn what AION 2 Wiki covers, how facts are sourced, and what readers should expect from this reference hub.",
      ctas: [{ label: "Contact", href: "/contact" }],
    },
    quickAnswer: `${site.name} is an unofficial pre-launch reference hub for US English search users. Every fact is sourced from the AION 2 Steam store page (AppID 3393110), SteamDB metadata, the NCWest publisher portal, the PlayNC franchise portal, the Steam Community hub, or r/aion community discussion, and every claim carries the research date of ${RESEARCH_DATE}.`,
    keyFacts: [
      { label: "Status", value: "Unofficial fan reference" },
      { label: "Research date", value: RESEARCH_DATE },
      { label: "Primary sources", value: "Steam store, SteamDB, NCWest, PlayNC, r/aion" },
      { label: "Editor policy", value: "Sourced facts only; no unverified walkthroughs" },
    ],
    modules: [
      {
        id: "about-mission",
        type: "prose",
        heading: "Mission",
        body:
          "AION 2 Wiki exists to give US English search users a single pre-launch reference hub for the AION 2 Steam launch. The site keeps the release date, Founder's Pack tiers, class roster, system requirements, guide structure, and Abyss faction context in one place so readers do not have to bounce between community threads and store pages to verify the basics.",
      },
      {
        id: "about-scope",
        type: "prose",
        heading: "Scope",
        body:
          "The site covers launch and status (release date, global release, Founder's Packs, preorder bonus, system requirements), classes and roles (the seven confirmed classes plus a selection guide), guides (leveling, beginner dungeons, PvP basics, Abyss factions, world zones), and trust pages (about, contact, privacy, terms). Each page is dated to the research date and references the source it was checked against.",
      },
      {
        id: "about-sourcing",
        type: "prose",
        heading: "Sourcing",
        body:
          "Facts are sourced from the AION 2 Steam store page (AppID 3393110), the SteamDB metadata for the same AppID, the NCWest publisher portal, the PlayNC franchise portal, the Steam Community hub, and the r/aion subreddit. Original 2009 AION material is referenced only as legacy clarification; AION 2 systems are the current scope. Items that have not been confirmed by NCWest or dated media are written as dated not-confirmed status notes so readers can decide what to trust.",
      },
      {
        id: "about-editing",
        type: "prose",
        heading: "Editorial principles",
        body:
          "We do not fill gaps with speculation. Per-class skill trees, gender-lock rules, specific dungeon rosters, Steam Deck verification status, mobile cross-play support, and review embargo status are explicitly written as not confirmed when no official source supports them. We revisit the sources before launch day and update each page so the research date stays current.",
      },
    ],
    faqIds: ["what-is-aion-2", "is-official"],
    relatedPageIds: ["fixed-release-date-en-US", "fixed-classes-en-US", "fixed-guides-hub-en-US"],
    schemaTypes: ["Article", "BreadcrumbList", "FAQPage"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "contact",
    translationKey: "contact",
    locale: "en-US",
    routeKind: "fixed",
    slug: "contact",
    url: "/contact",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Contact",
    seoTitle: `Contact | ${site.name}`,
    metaDescription:
      "Contact AION 2 Wiki for corrections, source updates, and editorial feedback on the release date, Founder's Packs, classes, and guides content.",
    summary:
      "A trust page for corrections, source updates, and feedback on the AION 2 launch coverage.",
    hero: {
      eyebrow: "Contact",
      subtitle:
        "Send corrections, source updates, or feedback on the AION 2 launch coverage.",
      ctas: [{ label: "Read About", href: "/about" }],
    },
    quickAnswer:
      "Use the contact form to send corrections, source updates, or feedback on AION 2 Wiki content. We respond fastest when you include the official source link (Steam store page, NCWest portal, PlayNC portal, Steam Community hub, or r/aion thread) and the page URL that needs the update.",
    keyFacts: [
      { label: "Primary use", value: "Corrections, source updates, feedback" },
      { label: "Best attachment", value: "Official source link + page URL" },
      { label: "Out of scope", value: "Game account credentials, private account details" },
      { label: "Last reviewed", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "contact-method",
        type: "prose",
        heading: "Contact method",
        body:
          "Send corrections and feedback to the contact inbox listed in the Cloudflare email routing setup for this domain (support@aion-two.wiki). Include the page URL you want updated and an official source link that confirms the change. We do not request or store game account credentials or private account details.",
      },
      {
        id: "contact-corrections",
        type: "prose",
        heading: "Corrections",
        body:
          "If you spot a fact that disagrees with the AION 2 Steam store page (AppID 3393110), SteamDB metadata, the NCWest publisher portal, the PlayNC franchise portal, or the Steam Community hub, send us the official source link and the page URL. We update the page, refresh the research date, and note the source in the page footer.",
      },
      {
        id: "contact-feedback",
        type: "prose",
        heading: "Editorial feedback",
        body:
          "We accept feedback on which guide topics to expand first, which classes deserve deeper coverage, and which sources to cite. We do not respond to feedback that asks us to fill in unverified details about AION 2 systems, classes, or endgame content.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "privacy-policy", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "privacy-policy",
    translationKey: "privacy-policy",
    locale: "en-US",
    routeKind: "fixed",
    slug: "privacy-policy",
    url: "/privacy-policy",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Privacy Policy",
    seoTitle: `Privacy Policy | ${site.name}`,
    metaDescription:
      "Privacy policy for AION 2 Wiki: aggregate GA4 analytics only when configured, no user accounts, and Adsterra advertising only when enabled.",
    summary:
      "A starter privacy policy for analytics, hosting logs, and contact messages on AION 2 Wiki.",
    hero: {
      eyebrow: "Privacy",
      subtitle:
        "Explain what data AION 2 Wiki collects, why it is used, and how visitors can make contact.",
      ctas: [{ label: "Terms", href: "/terms" }],
    },
    quickAnswer:
      "AION 2 Wiki does not include user accounts, comments, or payments. If GA4 is configured, aggregate usage data is collected via the GA4 measurement ID on this domain; if Adsterra advertising is enabled, the Adsterra provider may process technical request data to deliver and measure ads. The site does not request sensitive personal information.",
    keyFacts: [
      { label: "Analytics", value: "GA4 only when configured" },
      { label: "Accounts", value: "No user accounts in V1" },
      { label: "Ads", value: "Adsterra only when enabled" },
      { label: "Last reviewed", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "privacy-data",
        type: "prose",
        heading: "Information we collect",
        body:
          "AION 2 Wiki does not include accounts, comments, or payments. If GA4 is configured for this domain, Google Analytics may collect aggregate usage information (page views, referrers, device category) according to the GA4 measurement ID associated with this site. If advertising is enabled, the third-party advertising provider may process technical request data and use cookies or similar technologies to deliver and measure ads.",
      },
      {
        id: "privacy-contact",
        type: "prose",
        heading: "Contact messages",
        body:
          "If a visitor sends a message to the support inbox or contact form, we keep the message long enough to respond and update the relevant page. We do not request sensitive personal information, game account credentials, or payment details through the contact form.",
      },
      {
        id: "privacy-cookies",
        type: "prose",
        heading: "Cookies and similar technologies",
        body:
          "AION 2 Wiki does not set first-party tracking cookies outside the analytics and advertising providers listed above. Third-party cookies set by GA4 or the advertising provider follow the respective provider's cookie policy.",
      },
      {
        id: "privacy-updates",
        type: "prose",
        heading: "Policy updates",
        body:
          "Update this policy whenever analytics, hosting, contact methods, or advertising providers change. The research date above tracks the last manual review of this page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "terms"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
  {
    id: "terms",
    translationKey: "terms",
    locale: "en-US",
    routeKind: "fixed",
    slug: "terms",
    url: "/terms",
    pageType: "site",
    presentation: { shell: "content", variant: "reading-full" },
    h1: "Terms of Use",
    seoTitle: `Terms of Use | ${site.name}`,
    metaDescription:
      "Terms of use for AION 2 Wiki: unofficial status disclaimer, informational scope, and acceptable use for US English search users.",
    summary:
      "A starter terms page for the unofficial AION 2 Wiki reference hub.",
    hero: {
      eyebrow: "Terms",
      subtitle:
        "Set clear expectations for unofficial status, informational use, and changes to AION 2 Wiki.",
      ctas: [{ label: "Privacy Policy", href: "/privacy-policy" }],
    },
    quickAnswer:
      "AION 2 Wiki is an unofficial fan reference hub. Content is informational only and may not match final official details for the AION 2 launch; rely on the AION 2 Steam store page (AppID 3393110), the NCWest publisher portal, and the PlayNC franchise portal for final purchase, platform, and release decisions.",
    keyFacts: [
      { label: "Use", value: "Informational reference content" },
      { label: "Official status", value: "Unofficial fan site" },
      { label: "Last reviewed", value: RESEARCH_DATE },
    ],
    modules: [
      {
        id: "terms-unofficial",
        type: "prose",
        heading: "Unofficial site",
        body:
          "AION 2 Wiki is not affiliated with the AION 2 publisher (NCWest), developer (NCSoft), Steam (Valve), platform holders, or trademark owners unless explicitly stated after launch. References to AION 2, AION, NCWest, NCSoft, and PlayNC are made for factual identification only and do not imply endorsement.",
      },
      {
        id: "terms-accuracy",
        type: "prose",
        heading: "Information accuracy",
        body:
          "Reference information on AION 2 Wiki may change as official details are updated. The research date at the top of each page tracks the last manual review. Use official sources for final purchase, platform, and release decisions; treat any item flagged as not confirmed as dated guidance rather than fact.",
      },
      {
        id: "terms-acceptable-use",
        type: "prose",
        heading: "Acceptable use",
        body:
          "Do not misuse the site, scrape aggressively, interfere with service availability, or submit harmful content through any contact channel. We may limit or block access that violates these terms.",
      },
      {
        id: "terms-changes",
        type: "prose",
        heading: "Changes to these terms",
        body:
          "We update these terms when analytics, hosting, contact methods, advertising providers, or editorial scope change. The research date above tracks the last manual review of this page.",
      },
    ],
    faqIds: [],
    relatedPageIds: ["about", "contact", "privacy-policy"],
    schemaTypes: ["Article", "BreadcrumbList"],
    sourceStatus: "internal",
    lastReviewed: RESEARCH_DATE,
  },
];