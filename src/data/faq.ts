import type { FAQItem } from "@/types/content";

export const faqItems: FAQItem[] = [
  // Home / Overview cross-page FAQs
  {
    id: "what-is-aion-2",
    question: "What is AION 2?",
    answer:
      "AION 2 is the sequel MMORPG from developer and publisher NCWest, releasing on Steam (AppID 3393110) on October 5, 2026 with English as the primary supported locale. The game continues the AION franchise with class-based combat, open-world PvP, and the contested Abyss faction war.",
    pageIds: ["home", "about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-official",
    question: "Is AION 2 Wiki an official AION 2 site?",
    answer:
      "No. AION 2 Wiki is an unofficial fan reference hub built from the AION 2 Steam store page (AppID 3393110), SteamDB metadata, the NCWest publisher portal, the PlayNC franchise portal, the Steam Community hub, and r/aion community discussion. It is not affiliated with NCWest, NCSoft, or Valve.",
    pageIds: ["about"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "internal",
  },
  {
    id: "when-is-aion-2-release",
    question: "When is the AION 2 release date?",
    answer:
      "The AION 2 release date is October 5, 2026 on Steam, confirmed by the Steam store page and SteamDB listing for AppID 3393110 as of 2026-09-20. No pre-launch beta unlock times or head-start windows have been announced.",
    pageIds: ["home", "fixed-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "which-founders-pack-tier",
    question: "Which AION 2 Founder's Pack tier should US players buy?",
    answer:
      "Pick the Standard tier for launch-day access plus the base cosmetic bundle. Pick Deluxe for more early-access days and an expanded cosmetic bundle. Pick Ultimate for the longest non-Global early-access window plus the largest cosmetic bundle. Pick Global for the regional extras and the longest non-Ultimate early-access window. Exact per-tier prices carry the 2026-09-20 research date.",
    pageIds: ["home", "fixed-founders-packs-en-US"],
    category: "site",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "how-many-aion-2-classes",
    question: "How many AION 2 classes are confirmed?",
    answer:
      "Seven AION 2 classes are confirmed by Steam Community hub and r/aion discussion: assassin, gladiator, cleric, templar, chanter, ranger, and sorceress. Per-class skill trees and gender-lock status require dated media as of 2026-09-20.",
    pageIds: ["home", "fixed-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "is-aion-2-global-on-steam",
    question: "Is AION 2 launching globally on Steam?",
    answer:
      "Yes. The AION 2 global release date of October 5, 2026 is published on the Steam store page for AppID 3393110 and covers all Steam regions worldwide. Per-console storefront availability beyond Steam is not announced as of 2026-09-20.",
    pageIds: ["home", "fixed-global-release-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // release-date
  {
    id: "aion-2-release-date-delayed",
    question: "Has the AION 2 release date been delayed?",
    answer:
      "No. As of 2026-09-20, the Steam store still shows October 5, 2026 and there is no slip announcement from NCWest.",
    pageIds: ["fixed-release-date-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-early-access",
    question: "Will there be early access before the AION 2 release date?",
    answer:
      "Early-access days are sold inside Founder's Pack tiers, but the exact number of days per tier carries the 2026-09-20 research date. Head-start windows and beta unlock times have not been announced.",
    pageIds: ["fixed-release-date-en-US", "fixed-founders-packs-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-steam-deck",
    question: "Is AION 2 on Steam Deck?",
    answer:
      "Steam Deck verification status was not announced as of 2026-09-20. Check the system requirements page closer to launch for any update.",
    pageIds: ["fixed-release-date-en-US", "fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // global-release
  {
    id: "aion-2-global-same-date",
    question: "Is the AION 2 global release date the same in every region?",
    answer:
      "Yes, the AION 2 global release date of October 5, 2026 is the single published date on the Steam store page for AppID 3393110, which serves all Steam regions globally. Per-console storefront regional ordering is not announced as of 2026-09-20.",
    pageIds: ["fixed-global-release-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-korea-first",
    question: "Is AION 2 launching in Korea first?",
    answer:
      "The Steam global release handles worldwide regions simultaneously. The PlayNC franchise portal carries the original 2009 AION Korean franchise history as legacy reference; it does not define the AION 2 launch ordering.",
    pageIds: ["fixed-global-release-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-regional-founders-pack",
    question: "Will AION 2 have regional Founder's Pack differences?",
    answer:
      "Founder's Pack tier availability is confirmed on the Steam store page and the NCWest publisher portal. Per-region pricing and currency differences should be checked on the Founder's Packs page directly, because exact prices carry the 2026-09-20 research date.",
    pageIds: ["fixed-global-release-en-US", "fixed-founders-packs-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-console-launch",
    question: "Does AION 2 launch globally on consoles?",
    answer:
      "Steam global availability is confirmed. Per-console storefront availability (PS5, Xbox) for the AION 2 global release date requires dated source and is not announced as of 2026-09-20.",
    pageIds: ["fixed-global-release-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // classes
  {
    id: "aion-2-classes-count",
    question: "How many AION 2 classes are there?",
    answer:
      "Seven AION 2 classes are confirmed by Steam Community hub and r/aion discussion: assassin, gladiator, cleric, templar, chanter, ranger, and sorceress. Per-class skill trees require dated media as of 2026-09-20.",
    pageIds: ["fixed-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-classes-gender-lock",
    question: "Are AION 2 classes gender-locked?",
    answer:
      "Gender-lock status is not confirmed as of 2026-09-20. The original 2009 AION class system used a stricter gender-lock model (legacy reference), but AION 2 has not published per-class gender rules yet.",
    pageIds: ["fixed-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-class-solo",
    question: "What is the best AION 2 class for solo play?",
    answer:
      "The best AION 2 class for solo play is community opinion, not an official ranking. Ranger and sorceress are commonly cited on r/aion for solo leveling; assassin is cited for solo PvP. Treat these as community guidance, not as an official tier list.",
    pageIds: ["fixed-classes-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-class-abyss-pvp",
    question: "Which AION 2 class fits Abyss faction PvP?",
    answer:
      "The original 2009 AION Abyss (legacy reference) treated tank and support classes (gladiator, templar, cleric, chanter) as siege anchors, with DPS classes (assassin, ranger, sorceress) as frontline damage. AION 2 inheritance of that pattern is reasonable but not officially confirmed as of 2026-09-20.",
    pageIds: ["fixed-classes-en-US", "fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // founders-packs
  {
    id: "aion-2-founders-packs-tiers",
    question: "What are the AION 2 Founder's Packs tiers?",
    answer:
      "The four AION 2 Founder's Packs tiers are Standard, Deluxe, Ultimate, and Global. Tier availability is confirmed by the Steam store page and the NCWest publisher portal as of 2026-09-20.",
    pageIds: ["fixed-founders-packs-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-founders-packs-price",
    question: "How much do AION 2 Founder's Packs cost?",
    answer:
      "Exact per-tier pricing carries the 2026-09-20 research date. Open the Steam store page for AppID 3393110 in the US region for the live price on each tier.",
    pageIds: ["fixed-founders-packs-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-founders-packs-early-access",
    question: "Do all AION 2 Founder's Packs include early access?",
    answer:
      "Yes. Each of the four tiers includes an early-access window, with Standard at the shortest and Ultimate at the longest among the non-Global tiers. The Global tier matches the highest non-Global early-access window. Per-tier day counts carry the 2026-09-20 research date.",
    pageIds: ["fixed-founders-packs-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-global-vs-ultimate",
    question: "Is the AION 2 Global Founder's Pack different from Ultimate?",
    answer:
      "Yes. The Global tier is the region-specific edition with its own cosmetic bundle plus the base items, while Ultimate carries the largest non-region-specific cosmetic bundle plus exclusive items. Both include early access.",
    pageIds: ["fixed-founders-packs-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // system-requirements
  {
    id: "aion-2-steam-deck-verified",
    question: "Does AION 2 have a Steam Deck verified rating?",
    answer:
      "Steam Deck verification status has not been announced by NCWest or Valve as of 2026-09-20. Recheck the Steam store Deck Verified badge after launch day for an official rating.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-integrated-graphics",
    question: "Will AION 2 run on a laptop with integrated graphics?",
    answer:
      "The Steam store minimum specification does not list a specific integrated GPU tier as of 2026-09-20. Treat any claim about specific integrated graphics performance as unconfirmed until NCWest publishes the recommended tier.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-mobile-cross-play",
    question: "Is AION 2 mobile cross-play supported?",
    answer:
      "AION 2 mobile cross-play status has not been announced by NCWest as of 2026-09-20. No Android, iOS, or shared-progression mobile client has been confirmed.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-internet-required",
    question: "Does AION 2 require a constant Internet connection?",
    answer:
      "Yes. The Steam store page lists broadband Internet as required, which matches the Abyss open-world PvP design and faction siege systems confirmed by NCWest.",
    pageIds: ["fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // preorder-bonus
  {
    id: "aion-2-preorder-with-founders",
    question: "Do I get the bonus if I buy a Founder's Pack instead of a standard pre-order?",
    answer:
      "Yes. Founder's Pack buyers receive both the pre-order bonus bundle and the Founder's Pack tier-specific items. The two entitlement sets stack on the same account.",
    pageIds: ["fixed-preorder-bonus-en-US", "fixed-founders-packs-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-preorder-unlock-when",
    question: "When does the AION 2 preorder bonus unlock?",
    answer:
      "The digital bonus unlocks at the global Steam release date confirmed for October 5, 2026. Founder's Pack early-access days begin earlier according to the tier purchased.",
    pageIds: ["fixed-preorder-bonus-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-preorder-refund",
    question: "Can I refund the AION 2 preorder if I change my mind?",
    answer:
      "Refund eligibility follows the standard Steam refund policy. Pre-orders can typically be refunded before release as long as playtime is minimal; check Steam's current refund terms at the time of purchase.",
    pageIds: ["fixed-preorder-bonus-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-physical-preorder-bonus",
    question: "Are there physical AION 2 preorder bonuses?",
    answer:
      "Physical collectibles have not been announced as of 2026-09-20. The bonus is digital-only based on current NCWest and Steam store information.",
    pageIds: ["fixed-preorder-bonus-en-US"],
    category: "release",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // guides-hub
  {
    id: "aion-2-guides-where-start",
    question: "Where should I start with AION 2 guides?",
    answer:
      "Start with the classes hub to pick a class, then open the leveling guide for the quest and dungeon priority. The beginner dungeons guide follows once group play unlocks.",
    pageIds: ["fixed-guides-hub-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-endgame-unlock",
    question: "When does the AION 2 endgame unlock?",
    answer:
      "The endgame (Abyss open-world PvP and faction sieges) unlocks at the level milestone confirmed on the Steam store page. The exact level number is addressed on the leveling guide page with the research date 2026-09-20.",
    pageIds: ["fixed-guides-hub-en-US", "fixed-leveling-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-pvp-tier-list",
    question: "Do the AION 2 guides cover PvP class tier lists?",
    answer:
      "Pre-launch PvP class tier lists are community speculation and not officially confirmed. The PvP basics guide explains the open-world PvP system and class suitability without locking in a definitive ranking.",
    pageIds: ["fixed-guides-hub-en-US", "fixed-pvp-basics-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-system-requirements-location",
    question: "Where can I find AION 2 system requirements?",
    answer:
      "System requirements live on the dedicated system requirements reference page, not in this hub, since it is a pre-launch setup task rather than a gameplay guide.",
    pageIds: ["fixed-guides-hub-en-US", "fixed-system-requirements-en-US"],
    category: "platform",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // leveling-guide
  {
    id: "aion-2-level-cap",
    question: "What is the AION 2 level cap?",
    answer:
      "NCWest has not published an official level cap in the Steam store materials reviewed on 2026-09-20. Community discussions reference level 45 as the milestone that unlocks the Abyss zone, but treat that number as a community-discussed milestone rather than an officially confirmed cap.",
    pageIds: ["fixed-leveling-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-fastest-leveling",
    question: "What is the fastest AION 2 leveling method?",
    answer:
      "The fastest confirmed AION 2 leveling method is main story quest priority supplemented by zone completion objectives, with dungeon runs reserved for level-appropriate brackets. Specific XP-per-hour claims require dated source confirmation.",
    pageIds: ["fixed-leveling-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-solo-or-group-leveling",
    question: "Should I solo or group level in AION 2?",
    answer:
      "Solo leveling works for assassin, gladiator, templar, and ranger players who can handle elite pulls. Cleric, chanter, and sorceress players level faster in groups because their archetypes depend on group buffs or healer support.",
    pageIds: ["fixed-leveling-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-faction-choice-level",
    question: "When does faction choice happen in AION 2?",
    answer:
      "Faction choice (Elyos or Asmodians) is tied to the level milestone that unlocks the Abyss zone, which community discussions place at level 45. NCWest has not published the exact unlock level in official materials as of 2026-09-20.",
    pageIds: ["fixed-leveling-guide-en-US", "fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // dungeons-beginner
  {
    id: "aion-2-beginner-dungeon-time",
    question: "How long does an AION 2 beginner dungeon take?",
    answer:
      "A typical first clear of an AION 2 beginner dungeon runs between fifteen and thirty minutes for an inexperienced party. Experienced groups can finish the same content in under ten minutes once they learn the boss scripts.",
    pageIds: ["fixed-dungeons-beginner-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-beginner-dungeon-solo",
    question: "Can you solo AION 2 beginner dungeons?",
    answer:
      "AION 2 beginner dungeons are designed for a group, and the Steam Community hub treats them as group content. Solo attempts are technically possible at higher gear levels once a player outgears the dungeon, but a balanced party is the intended path for new players.",
    pageIds: ["fixed-dungeons-beginner-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-beginner-dungeon-level",
    question: "What level should you be to start AION 2 beginner dungeons?",
    answer:
      "You should reach the level gate printed on each dungeon entrance before queuing. The exact level numbers for the first-dungeon roster are not confirmed as of 2026-09-20, so check the in-game dungeon finder or the Steam Community hub for the latest level requirement.",
    pageIds: ["fixed-dungeons-beginner-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-beginner-dungeon-lockout",
    question: "Do AION 2 beginner dungeons lock you out of other content?",
    answer:
      "Most beginner dungeons do not lock you out of other content on a single clear, but daily and weekly reward limits may apply. Treat any specific lockout rule as unconfirmed until NCWest publishes the official dungeon rules.",
    pageIds: ["fixed-dungeons-beginner-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // pvp-basics
  {
    id: "aion-2-pvp-open-world",
    question: "Is AION 2 PvP open world?",
    answer:
      "AION 2 PvP is centered on open-world combat in the Abyss setting. The Steam store description explicitly names open-world PvP as a core feature, and the faction war plays out in shared zones rather than only in instanced battlegrounds.",
    pageIds: ["fixed-pvp-basics-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-switch-faction",
    question: "Can you switch factions in AION 2 PvP?",
    answer:
      "The Steam store description and r/aion discussions treat faction choice as a character-creation decision. As of 2026-09-20, NCWest has not confirmed a faction transfer path, so plan to commit to Elyos or Asmodian at the start.",
    pageIds: ["fixed-pvp-basics-en-US", "fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-pvp-level",
    question: "What level should you be for AION 2 PvP?",
    answer:
      "You should finish the PvE leveling curve and unlock the Abyss zone before queuing for contested PvP objectives. The exact Abyss unlock level is not confirmed as of 2026-09-20, so check the in-game zone requirement when the game launches.",
    pageIds: ["fixed-pvp-basics-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-pvp-sieges",
    question: "Does AION 2 PvP have sieges?",
    answer:
      "AION 2 PvP includes fortress sieges as the large-scale endpoint of the Abyss faction war. The specific fortress list, siege schedule, and reward pool are not confirmed by NCWest as of 2026-09-20.",
    pageIds: ["fixed-pvp-basics-en-US", "fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // abyss-factions
  {
    id: "aion-2-abyss-factions-list",
    question: "What are AION 2 Abyss factions?",
    answer:
      "AION 2 Abyss factions are the two opposing sides, Elyos and Asmodians, that fight for control of the contested Abyss zone. The Steam store description confirms the Abyss setting as a core feature, and the faction split is what turns that zone into a real PvP destination.",
    pageIds: ["fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-switch-abyss-faction",
    question: "Can you switch AION 2 Abyss factions?",
    answer:
      "As of 2026-09-20, NCWest has not confirmed a standard faction transfer path. Treat faction choice as a long-term commitment, and plan your side based on the friends and playstyle that fit you.",
    pageIds: ["fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-abyss-legacy-2009",
    question: "What is the legacy reference to the original 2009 AION Abyss?",
    answer:
      "The Elyos versus Asmodians conflict in AION 2 is a reworked version of the 2009 AION Abyss faction war. The legacy framing is used only to explain why the two factions exist; current-game rules and progression are AION 2 specific.",
    pageIds: ["fixed-abyss-factions-en-US"],
    category: "wiki",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-abyss-endgame",
    question: "What endgame does the AION 2 Abyss unlock?",
    answer:
      "AION 2 Abyss endgame typically includes sieges, fortress control, faction standing, and endgame gear progression. The specific unlock requirements and reward tables are not confirmed by NCWest as of 2026-09-20.",
    pageIds: ["fixed-abyss-factions-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  // world-zones
  {
    id: "aion-2-starting-zones",
    question: "What are the starting zones in AION 2 world zones?",
    answer:
      "AION 2 world zones start with a faction-specific region for Elyos and a separate faction-specific region for Asmodians. Each starting zone introduces the core PvE loop and the local story before players push into the level-gated mid-game regions.",
    pageIds: ["fixed-world-zones-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-abyss-unlock-level",
    question: "What level unlocks the Abyss zone?",
    answer:
      "The exact Abyss unlock level is not confirmed by NCWest as of 2026-09-20. Expect the Abyss to open near the level cap, after the mid-game leveling chain is complete, with the unlock tied to a quest or zone requirement.",
    pageIds: ["fixed-world-zones-en-US", "fixed-leveling-guide-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-flight-unlock",
    question: "When can you fly in AION 2?",
    answer:
      "AION 2 flight is widely expected to unlock partway through the leveling curve, after a wings tutorial. The exact unlock level is not confirmed by NCWest as of 2026-09-20, so check the in-game tutorial when the game launches.",
    pageIds: ["fixed-world-zones-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
  {
    id: "aion-2-level-gates",
    question: "Are there level gates between AION 2 world zones?",
    answer:
      "AION 2 world zones use level gates between mid-game regions, which means each new zone opens at a specific character level. The exact level numbers are not confirmed by NCWest as of 2026-09-20 and should be treated as community estimates.",
    pageIds: ["fixed-world-zones-en-US"],
    category: "gameplay",
    schemaEligible: true,
    sourceStatus: "official",
  },
];