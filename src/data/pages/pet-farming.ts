import type { PageContent } from "@/types/content";

export const petFarmingPage: PageContent = {
  id: "fixed-pet-farming-en-US",
  translationKey: "pet-farming",
  locale: "en-US",
  routeKind: "fixed",
  slug: "guides/pet-farming",
  url: "/guides/pet-farming",
  pageType: "guides",
  presentation: { shell: "content", variant: "reading-right-rail" },
  h1: "AION 2 pet farming guide",
  seoTitle: "AION 2 pet farming: soul routes, unlocks and Genus",
  metaDescription:
    "Farm AION 2 pet souls with a repeatable route: find a pet's monster in Pets → Source, check Elyos and Asmodian starter examples, then plan unlocks and Genus progress.",
  summary:
    "A practical route for collecting AION 2 pet souls, choosing an accessible monster, and deciding when to switch from a new unlock to Pet Insight or Genus Insight.",
  hero: {
    eyebrow: "Pet collection",
    subtitle:
      "Choose a pet, check its in-game Source entry, and farm the listed monster for souls. Starter examples are split by faction.",
    ctas: [
      { label: "Browse all guides", href: "/guides" },
      { label: "Leveling guide", href: "/guides/leveling" },
    ],
  },
  quickAnswer:
    "To farm a pet in AION 2, open **Pets → select a pet → Source**, find a listed monster in a zone your faction can reach, and defeat it repeatedly for pet souls. Community guides for the Global version list **5 souls to register** an ordinary pet, **25 more for level 2**, and **75 more for level 3**. These are soul requirements, not guaranteed kill counts. Check your current game screen before committing to a long farm.",
  keyFacts: [
    { label: "First check", value: "Pets → pet → Source" },
    { label: "First unlock", value: "5 souls (Global community reference)" },
    { label: "Full ordinary pet", value: "105 souls total (Global community reference)" },
    { label: "Last reviewed", value: "2026-10-21" },
  ],
  modules: [
    {
      id: "pet-farm-steps",
      type: "steps",
      heading: "Farm one pet without wasting a route",
      items: [
        {
          title: "Pick the soul before the zone",
          body: "Open Pets and select an unowned pet. Read its Source entry for the actual monster and spawn area; the monster name can differ from the pet name. If your Pets menu is still locked, continue the main story until it opens.",
          doneCondition: "The target monster and your reachable zone are identified in game.",
        },
        {
          title: "Test a short loop around that monster",
          body: "Kill the listed monster, confirm the pet soul appears, and repeat a compact route between nearby spawns. If you get no progress, recheck Source and the monster variant rather than assuming every creature with a similar name works.",
          doneCondition: "Your soul counter increases for the chosen pet.",
        },
        {
          title: "Stop at a useful milestone",
          body: "Register the pet first. Compare its next Pet Insight reward with an easy new pet nearby. Continue to levels 2 or 3 when that effect or the matching Genus progress is worth the extra souls.",
          doneCondition: "The pet is registered or the next level is unlocked, and you have chosen the next target.",
        },
      ],
    },
    {
      id: "pet-farm-starters",
      type: "data-table",
      heading: "Starter soul targets by faction",
      columns: [
        { key: "faction", label: "Faction" },
        { key: "pet", label: "Pet → monster" },
        { key: "zone", label: "Community-listed area" },
      ],
      rows: [
        { faction: "Elyos", pet: "Papis → Gentle Papis", zone: "Eastern / Western Cantas Valley" },
        { faction: "Elyos", pet: "Fungen → Red Cap Fungen", zone: "Eastern Cantas Valley" },
        { faction: "Asmodian", pet: "Papis → Faded Papis", zone: "Nameless Cemetery / Safe Haven" },
        { faction: "Asmodian", pet: "Drana Mutant → Twisted Mutant", zone: "Dredgion Crash Site" },
      ],
    },
    {
      id: "pet-farm-location-check",
      type: "callout",
      tone: "caution",
      title: "Check the in-game source before travelling",
      body: "The starter locations above come from community spawn maps, reviewed October 21, 2026. Spawn points, monster variants and rewards can change. The current Pets → Source entry is the check for your region and game version; a soul threshold is not a promised number of kills.",
    },
    {
      id: "pet-farm-milestones",
      type: "data-table",
      heading: "How many souls to collect",
      columns: [
        { key: "goal", label: "Goal" },
        { key: "more", label: "Additional souls" },
        { key: "total", label: "Total from unowned" },
      ],
      rows: [
        { goal: "Register / level 1", more: "5", total: "5" },
        { goal: "Pet Insight level 2", more: "25", total: "30" },
        { goal: "Pet Insight level 3", more: "75", total: "105" },
      ],
    },
    {
      id: "pet-farm-genus",
      type: "prose",
      heading: "Pet Insight versus Genus Insight",
      body: "Souls of one pet raise that pet's **Pet Insight** and its owned effects. **Genus Insight** is a separate board shared by pets in the same family; pet level-ups and Genus analysis advance it. Once a pet is fully raised, surplus souls can become crystals for that genus. If your goal is collection breadth, register accessible new pets first; if you want a particular owned effect or genus progress, return to the relevant monster. Special pets may have shop or event sources instead of a monster farm, so check Source before planning any grind.",
      links: [{ label: "Leveling and zone progression", href: "/guides/leveling" }],
    },
    {
      id: "pet-farm-sources",
      type: "prose",
      heading: "Sources and scope",
      body: "This guide uses Global community references reviewed October 21, 2026: [Corpus pet systems](https://corpus.gg/blog/aion-2/pet-guide) for the distinction between collection, Pet Insight and Genus Insight; [AION 2 Builder's soul farm map](https://aion2builder.com/guides/pets/) for the faction-specific monster examples and soul thresholds; and [AION2 Codex's pet guide](https://aion2codex.com/guides/game-systems/pets-and-genus) for the in-game Source workflow. Named spawn areas and soul requirements are community-reported, so verify them in your current client.",
    },
  ],
  faqIds: [],
  relatedPageIds: ["fixed-guides-hub-en-US", "fixed-leveling-guide-en-US", "fixed-world-zones-en-US"],
  schemaTypes: ["Article", "BreadcrumbList"],
  sourceStatus: "internal",
  lastReviewed: "2026-10-21",
};
