export type Project = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  status: "live" | "wip" | "beta";
  accent: "teal" | "ice" | "mixed";
  href?: string;
  metrics?: { label: string; value: string }[];
};

export const projects: Project[] = [
  {
    slug: "selfstream",
    name: "SelfStream",
    tagline: "IPTV-Proxy, der dir gehört",
    description:
      "Ein self-hosted IPTV-Proxy auf FastAPI-Basis, der Playlists bündelt, filtert und stabil ausliefert — inklusive rebrandetem Android-Player. Läuft headless auf Unraid.",
    stack: ["FastAPI", "Python", "Docker", "Unraid"],
    status: "live",
    accent: "teal",
    metrics: [
      { label: "Plattform", value: "Unraid" },
      { label: "Player", value: "Android APK" },
    ],
  },
  {
    slug: "selfarchiver",
    name: "SelfArchiver",
    tagline: "E-Mail-Archiv ohne Cloud-Zwang",
    description:
      "Ein eigener E-Mail-Archiver im Clean-Room-Ansatz: Ordnerauswahl, Filterregeln, Cron-Läufe und Löschen-nach-Archiv. Ein Container, SQLite, fertig — auf GHCR und Unraid.",
    stack: ["Node.js", "SQLite", "IMAP", "Docker"],
    status: "wip",
    accent: "ice",
    metrics: [
      { label: "Storage", value: "SQLite" },
      { label: "Deploy", value: "Single-Container" },
    ],
  },
  {
    slug: "selfdashboard",
    name: "SelfDashboard",
    tagline: "Dein Cockpit, deine Regeln",
    description:
      "Ein anpassbares Dashboard auf Forum-/IPS-Basis, das deine Dienste, Metriken und Tools an einem Ort bündelt — gehärtet und auf den eigenen Betrieb zugeschnitten.",
    stack: ["PHP", "IPS", "MySQL"],
    status: "beta",
    accent: "mixed",
    metrics: [
      { label: "Basis", value: "Invision" },
      { label: "Fokus", value: "Self-hosted" },
    ],
  },
];

export const stats = [
  { value: 3, suffix: "", label: "Live-Projekte" },
  { value: 100, suffix: "%", label: "Self-hosted" },
  { value: 0, suffix: "", label: "Vendor Lock-in" },
  { value: 24, suffix: "/7", label: "Eigene Kontrolle" },
];

export const techStack = [
  "FastAPI",
  "Next.js",
  "Docker",
  "Python",
  "TypeScript",
  "SQLite",
  "Unraid",
  "PHP",
  "Node.js",
  "MySQL",
  "GHCR",
  "Tailwind",
];
