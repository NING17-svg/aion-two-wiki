import { site } from "@/data/site";

export interface LocalizedNavigationItem {
  href: string;
  labels: Record<string, string>;
}

export const primaryNavigation: LocalizedNavigationItem[] = [
  // Launch & Status cluster
  { href: "/release-date", labels: { "en-US": "Release Date" } },
  { href: "/global-release", labels: { "en-US": "Global Release" } },
  { href: "/founders-packs", labels: { "en-US": "Founder's Packs" } },
  { href: "/preorder-bonus", labels: { "en-US": "Preorder Bonus" } },
  { href: "/system-requirements", labels: { "en-US": "System Requirements" } },
  // Classes & Roles cluster
  { href: "/classes", labels: { "en-US": "Classes" } },
  { href: "/guides", labels: { "en-US": "Guides" } },
  // Endgame & PvP cluster
  { href: "/guides/abyss-factions", labels: { "en-US": "Abyss Factions" } },
];

export const footerNavigation: LocalizedNavigationItem[] = [
  { href: "/about", labels: { "en-US": "About" } },
  { href: "/contact", labels: { "en-US": "Contact" } },
  { href: "/privacy-policy", labels: { "en-US": "Privacy" } },
  { href: "/terms", labels: { "en-US": "Terms" } },
];

export function navigationLabel(
  item: LocalizedNavigationItem,
  locale: string,
): string {
  return (
    item.labels[locale] ||
    item.labels[site.primaryLocale] ||
    Object.values(item.labels)[0]
  );
}