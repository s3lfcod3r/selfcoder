export type Lang =
  | "de"
  | "en"
  | "fr"
  | "es"
  | "it"
  | "nl"
  | "pl"
  | "pt"
  | "sv"
  | "da"
  | "cs"
  | "el";

export type ProjectItem = {
  slug: string;
  url?: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "live" | "beta" | "wip";
  accent: "teal" | "ice" | "mixed";
  metrics: { label: string; value: string }[];
};

export type Dict = {
  nav: { projects: string; philosophy: string; contact: string };
  hero: {
    badge: string;
    line1: string;
    accent: string;
    accentRest: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  stats: { value: number; suffix: string; label: string }[];
  projects: {
    tag: string;
    heading: string;
    sub: string;
    status: { live: string; beta: string; wip: string };
    items: ProjectItem[];
  };
  philosophy: {
    tag: string;
    heading: string;
    sub: string;
    principles: { t: string; d: string }[];
    terminal: string[];
  };
  footer: { tagline: string; backToTop: string; built: string };
};

// Anzeige-Reihenfolge im Sprachwähler; label = nativer Sprachname.
export const LANGS: { code: Lang; label: string }[] = [
  { code: "de", label: "Deutsch" },
  { code: "en", label: "English" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "it", label: "Italiano" },
  { code: "nl", label: "Nederlands" },
  { code: "pl", label: "Polski" },
  { code: "pt", label: "Português" },
  { code: "sv", label: "Svenska" },
  { code: "da", label: "Dansk" },
  { code: "cs", label: "Čeština" },
  { code: "el", label: "Ελληνικά" },
];
