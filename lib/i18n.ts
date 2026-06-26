export type Lang = "de" | "en";

export type ProjectItem = {
  slug: string;
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

const stack = {
  selfstream: ["Python", "HTML"],
  selfarchiver: ["TypeScript", "CSS"],
  selfdashboard: ["TypeScript", "JavaScript"],
  selfmailer: ["TypeScript"],
  selfauthenticator: ["In Entwicklung"],
  selfstore: ["Kotlin", "HTML"],
  selfplayer: ["Kotlin", "Media3"],
  selfpooltracker: ["HTML", "JavaScript"],
};

export const translations: Record<Lang, Dict> = {
  de: {
    nav: { projects: "Projekte", philosophy: "Philosophie", contact: "Kontakt" },
    hero: {
      badge: "Self-hosted & Open Source",
      line1: "Selbst gebaut.",
      accent: "Selbst gehostet.",
      accentRest: "",
      subtitle:
        "Projekte aus echtem Bedarf. Self-hosted, für mich und meine Freunde.",
      ctaPrimary: "Projekte ansehen",
      ctaSecondary: "Philosophie",
    },
    stats: [
      { value: 8, suffix: "", label: "Projekte" },
      { value: 100, suffix: "%", label: "Self-hosted" },
      { value: 100, suffix: "%", label: "Open Source" },
      { value: 24, suffix: "/7", label: "Eigene Kontrolle" },
    ],
    projects: {
      tag: "Projekte",
      heading: "Eine Familie eigener Tools.",
      sub: "Jedes Projekt löst ein echtes Problem — self-hosted, quelloffen und ohne Abhängigkeit von fremden Clouds.",
      status: { live: "Live", beta: "Beta", wip: "In Arbeit" },
      items: [
        {
          slug: "selfdashboard",
          name: "SelfDashboard",
          tagline: "Dein Cockpit, deine Regeln",
          description:
            "Ein anpassbares Dashboard auf Forum-/IPS-Basis, das deine Dienste, Metriken und Tools an einem Ort bündelt — gehärtet und auf den eigenen Betrieb zugeschnitten.",
          stack: stack.selfdashboard,
          status: "beta",
          accent: "teal",
          metrics: [
            { label: "Plattform", value: "Docker" },
            { label: "Art", value: "Dashboard" },
          ],
        },
        {
          slug: "selfmailer",
          name: "SelfMailer",
          tagline: "Deine Mails, ohne eigenen Server",
          description:
            "Ein self-hosted Multi-User Mail-Client — kein Mailserver nötig: IMAP/POP3/SMTP plus CalDAV/CardDAV, WebUI und eigene App mit WireGuard. Konzept steht.",
          stack: stack.selfmailer,
          status: "wip",
          accent: "ice",
          metrics: [
            { label: "Plattform", value: "Docker" },
            { label: "Art", value: "Mail-Client" },
          ],
        },
        {
          slug: "selfarchiver",
          name: "SelfArchiver",
          tagline: "E-Mail-Archiv ohne Cloud-Zwang",
          description:
            "Ein eigener E-Mail-Archiver im Clean-Room-Ansatz: Ordnerauswahl, Filterregeln, Cron-Läufe und Löschen-nach-Archiv. Ein Container, SQLite, fertig — auf GHCR und Unraid.",
          stack: stack.selfarchiver,
          status: "wip",
          accent: "teal",
          metrics: [
            { label: "Plattform", value: "Docker" },
            { label: "Art", value: "Service" },
          ],
        },
        {
          slug: "selfauthenticator",
          name: "SelfAuthenticator",
          tagline: "Deine 2FA, in deiner Hand",
          description:
            "Ein self-hosted 2FA/TOTP-Authenticator — deine Einmal-Codes sicher selbst verwaltet, ohne fremde Cloud. In Entwicklung.",
          stack: stack.selfauthenticator,
          status: "wip",
          accent: "mixed",
          metrics: [
            { label: "Plattform", value: "Docker" },
            { label: "Art", value: "Auth / 2FA" },
          ],
        },
        {
          slug: "selfstream",
          name: "SelfStream",
          tagline: "IPTV-Proxy, der dir gehört",
          description:
            "Ein self-hosted IPTV-Proxy auf FastAPI-Basis, der Playlists bündelt, filtert und stabil ausliefert. Läuft headless auf Unraid.",
          stack: stack.selfstream,
          status: "live",
          accent: "teal",
          metrics: [
            { label: "Plattform", value: "Docker" },
            { label: "Art", value: "Proxy" },
          ],
        },
        {
          slug: "selfstore",
          name: "SelfStore",
          tagline: "Dein App-Store, ganz ohne Play Store",
          description:
            "Ein eigener Android- und TV-App-Store nur für die Self-Projekte: Katalog auf GitHub Pages, automatische Updates, armv7 + armv8. Apps installieren, ohne Google.",
          stack: stack.selfstore,
          status: "beta",
          accent: "mixed",
          metrics: [
            { label: "Plattform", value: "Android / TV" },
            { label: "Art", value: "App-Store" },
          ],
        },
        {
          slug: "selfplayer",
          name: "SelfPlayer",
          tagline: "Dein IPTV-Player, nativ für alle Geräte",
          description:
            "Ein nativer Live-TV-Player für Handy, Tablet und Android-TV — sauber neu gebaut. Lädt M3U-Playlists und spielt über Media3/ExoPlayer. Eine App für alle Geräte.",
          stack: stack.selfplayer,
          status: "beta",
          accent: "ice",
          metrics: [
            { label: "Plattform", value: "Android / TV" },
            { label: "Art", value: "Player" },
          ],
        },
        {
          slug: "selfpooltracker",
          name: "SelfPoolTracker",
          tagline: "Dein Pool, immer im grünen Bereich",
          description:
            "Ein browserbasierter Wasserwert-Tracker für deinen Pool: pH, Chlor, Redox und Temperatur mit Ampel-Status und Dosierempfehlung. Kein Server, keine Cloud — läuft im Browser und als App.",
          stack: stack.selfpooltracker,
          status: "live",
          accent: "teal",
          metrics: [
            { label: "Plattform", value: "Web / Android" },
            { label: "Art", value: "Tracker" },
          ],
        },
      ],
    },
    philosophy: {
      tag: "Philosophie",
      heading: "Als Technikbegeisterter macht's mir Spaß, eigene Lösungen zu bauen.",
      sub: "SelfCoder ist keine Firma und kein Auftrag, sondern mein Hobby. Als Technikbegeisterter schreibe ich in meiner Freizeit eigene Tools — erst für mich selbst, dann geteilt mit Familie und Freunden. Einfach aus Freude am Bauen.",
      principles: [
        { t: "Für mich gebaut", d: "Jedes Tool löst zuerst ein eigenes Problem. Was ich brauche, baue ich mir." },
        { t: "Mit den Liebsten geteilt", d: "Was bei mir gut läuft, gebe ich weiter — an Familie und Freunde." },
        { t: "Reines Hobby", d: "Kein Geld, kein Druck, keine Deadline. Ich baue, wann und was ich will." },
        { t: "Spaß an Technik", d: "Als Technikbegeisterter baue ich, weil mich das Tüfteln einfach packt." },
      ],
      terminal: [
        "$ docker run -d selfcoder/selfarchiver",
        "✔ archiver läuft auf :8088",
        "$ curl selfstream.local/health",
        '✔ {"status":"ok","self_hosted":true}',
      ],
    },
    footer: {
      tagline: "Eigene Tools, self-hosted und quelloffen. Gebaut, weil Software dir gehören sollte.",
      backToTop: "Nach oben ↑",
      built: "Built self-hosted with Next.js",
    },
  },

  en: {
    nav: { projects: "Projects", philosophy: "Philosophy", contact: "Contact" },
    hero: {
      badge: "Self-hosted & Open Source",
      line1: "Self-built.",
      accent: "Self-hosted.",
      accentRest: "",
      subtitle:
        "Projects born from real need. Self-hosted, for me and my friends.",
      ctaPrimary: "View projects",
      ctaSecondary: "Philosophy",
    },
    stats: [
      { value: 8, suffix: "", label: "Projects" },
      { value: 100, suffix: "%", label: "Self-hosted" },
      { value: 100, suffix: "%", label: "Open Source" },
      { value: 24, suffix: "/7", label: "Full control" },
    ],
    projects: {
      tag: "Projects",
      heading: "A family of your own tools.",
      sub: "Every project solves a real problem — self-hosted, open source and free of any reliance on someone else's cloud.",
      status: { live: "Live", beta: "Beta", wip: "In progress" },
      items: [
        {
          slug: "selfdashboard",
          name: "SelfDashboard",
          tagline: "Your cockpit, your rules",
          description:
            "A customizable dashboard on a forum/IPS base that brings your services, metrics and tools into one place — hardened and tailored to your own setup.",
          stack: stack.selfdashboard,
          status: "beta",
          accent: "teal",
          metrics: [
            { label: "Platform", value: "Docker" },
            { label: "Type", value: "Dashboard" },
          ],
        },
        {
          slug: "selfmailer",
          name: "SelfMailer",
          tagline: "Your mail, no server needed",
          description:
            "A self-hosted multi-user mail client — no mail server required: IMAP/POP3/SMTP plus CalDAV/CardDAV, a web UI and a dedicated app with WireGuard. Concept stage.",
          stack: stack.selfmailer,
          status: "wip",
          accent: "ice",
          metrics: [
            { label: "Platform", value: "Docker" },
            { label: "Type", value: "Mail-Client" },
          ],
        },
        {
          slug: "selfarchiver",
          name: "SelfArchiver",
          tagline: "Email archiving without the cloud",
          description:
            "Your own email archiver, built clean-room: folder selection, filter rules, cron runs and delete-after-archive. One container, SQLite, done — on GHCR and Unraid.",
          stack: stack.selfarchiver,
          status: "wip",
          accent: "teal",
          metrics: [
            { label: "Platform", value: "Docker" },
            { label: "Type", value: "Service" },
          ],
        },
        {
          slug: "selfauthenticator",
          name: "SelfAuthenticator",
          tagline: "Your 2FA, in your hands",
          description:
            "A self-hosted 2FA/TOTP authenticator — your one-time codes managed securely by yourself, no third-party cloud. In development.",
          stack: stack.selfauthenticator,
          status: "wip",
          accent: "mixed",
          metrics: [
            { label: "Platform", value: "Docker" },
            { label: "Type", value: "Auth / 2FA" },
          ],
        },
        {
          slug: "selfstream",
          name: "SelfStream",
          tagline: "An IPTV proxy that's yours",
          description:
            "A self-hosted IPTV proxy built on FastAPI that bundles, filters and reliably serves playlists. Runs headless on Unraid.",
          stack: stack.selfstream,
          status: "live",
          accent: "teal",
          metrics: [
            { label: "Platform", value: "Docker" },
            { label: "Type", value: "Proxy" },
          ],
        },
        {
          slug: "selfstore",
          name: "SelfStore",
          tagline: "Your app store, no Play Store",
          description:
            "Your own Android and TV app store, just for the Self projects: catalog hosted on GitHub Pages, automatic updates, armv7 + armv8. Install apps without Google.",
          stack: stack.selfstore,
          status: "beta",
          accent: "mixed",
          metrics: [
            { label: "Platform", value: "Android / TV" },
            { label: "Type", value: "App store" },
          ],
        },
        {
          slug: "selfplayer",
          name: "SelfPlayer",
          tagline: "Your IPTV player, native on every device",
          description:
            "A native live-TV player for phone, tablet and Android TV — built clean from scratch. Loads M3U playlists and plays via Media3/ExoPlayer. One app for every device.",
          stack: stack.selfplayer,
          status: "beta",
          accent: "ice",
          metrics: [
            { label: "Platform", value: "Android / TV" },
            { label: "Type", value: "Player" },
          ],
        },
        {
          slug: "selfpooltracker",
          name: "SelfPoolTracker",
          tagline: "Your pool, always in the green",
          description:
            "A browser-based water-quality tracker for your pool: pH, chlorine, redox and temperature with traffic-light status and dosing advice. No server, no cloud — runs in the browser and as an app.",
          stack: stack.selfpooltracker,
          status: "live",
          accent: "teal",
          metrics: [
            { label: "Platform", value: "Web / Android" },
            { label: "Type", value: "Tracker" },
          ],
        },
      ],
    },
    philosophy: {
      tag: "Philosophy",
      heading: "As a tech enthusiast, I simply enjoy building my own solutions.",
      sub: "SelfCoder isn't a company or a contract — it's my hobby. As a tech enthusiast I build my own tools in my spare time, first for myself, then shared with family and friends. Simply for the joy of building.",
      principles: [
        { t: "Built for myself", d: "Every tool solves a problem of my own first. What I need, I build." },
        { t: "Shared with loved ones", d: "What works well for me, I pass on — to family and friends." },
        { t: "Pure hobby", d: "No money, no pressure, no deadlines. I build what I want, when I want." },
        { t: "Love for tech", d: "As a tech enthusiast, I build because the tinkering simply excites me." },
      ],
      terminal: [
        "$ docker run -d selfcoder/selfarchiver",
        "✔ archiver running on :8088",
        "$ curl selfstream.local/health",
        '✔ {"status":"ok","self_hosted":true}',
      ],
    },
    footer: {
      tagline: "Your own tools, self-hosted and open source. Built because software should belong to you.",
      backToTop: "Back to top ↑",
      built: "Built self-hosted with Next.js",
    },
  },
};
