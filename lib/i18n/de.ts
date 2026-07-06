import type { Dict } from "./types";

export const de: Dict = {
  "nav": {
    "projects": "Projekte",
    "philosophy": "Philosophie",
    "contact": "Kontakt"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Selbst gebaut.",
    "accent": "Selbst gehostet.",
    "accentRest": "",
    "subtitle": "Projekte aus echtem Bedarf. Self-hosted, für mich und meine Freunde.",
    "ctaPrimary": "Projekte ansehen",
    "ctaSecondary": "Philosophie"
  },
  "stats": [
    {
      "value": 9,
      "suffix": "",
      "label": "Projekte"
    },
    {
      "value": 100,
      "suffix": "%",
      "label": "Self-hosted"
    },
    {
      "value": 100,
      "suffix": "%",
      "label": "Open Source"
    },
    {
      "value": 24,
      "suffix": "/7",
      "label": "Eigene Kontrolle"
    }
  ],
  "projects": {
    "tag": "Projekte",
    "heading": "Eine Familie eigener Tools.",
    "sub": "Jedes Projekt löst ein echtes Problem — self-hosted, quelloffen und ohne Abhängigkeit von fremden Clouds.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "In Arbeit"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Dein Cockpit, deine Regeln",
        "description": "Ein anpassbares Dashboard auf Forum-/IPS-Basis, das deine Dienste, Metriken und Tools an einem Ort bündelt — gehärtet und auf den eigenen Betrieb zugeschnitten.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Docker"
          },
          {
            "label": "Art",
            "value": "Dashboard"
          }
        ]
      },
      {
        "slug": "selfmailer",
        "name": "SelfMailer",
        "tagline": "Deine Mails, ohne eigenen Server",
        "description": "Ein self-hosted Multi-User Mail-Client — kein Mailserver nötig: IMAP/POP3/SMTP plus CalDAV/CardDAV, WebUI und eigene App mit WireGuard. Konzept steht.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Docker"
          },
          {
            "label": "Art",
            "value": "Mail-Client"
          }
        ]
      },
      {
        "slug": "selfarchiver",
        "name": "SelfArchiver",
        "tagline": "E-Mail-Archiv ohne Cloud-Zwang",
        "description": "Ein eigener E-Mail-Archiver im Clean-Room-Ansatz: Ordnerauswahl, Filterregeln, Cron-Läufe und Löschen-nach-Archiv. Ein Container, SQLite, fertig — auf GHCR und Unraid.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Docker"
          },
          {
            "label": "Art",
            "value": "Service"
          }
        ]
      },
      {
        "slug": "selfauthenticator",
        "name": "SelfAuthenticator",
        "tagline": "Deine 2FA, in deiner Hand",
        "description": "Ein self-hosted 2FA/TOTP-Authenticator — deine Einmal-Codes sicher selbst verwaltet, ohne fremde Cloud. In Entwicklung.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Docker"
          },
          {
            "label": "Art",
            "value": "Auth / 2FA"
          }
        ]
      },
      {
        "slug": "selfstream",
        "name": "SelfStream",
        "tagline": "IPTV-Proxy, der dir gehört",
        "description": "Ein self-hosted IPTV-Proxy auf FastAPI-Basis, der Playlists bündelt, filtert und stabil ausliefert. Läuft headless auf Unraid.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Docker"
          },
          {
            "label": "Art",
            "value": "Proxy"
          }
        ]
      },
      {
        "slug": "selfstore",
        "name": "SelfStore",
        "tagline": "Dein App-Store, ganz ohne Play Store",
        "description": "Ein eigener Android- und TV-App-Store nur für die Self-Projekte: Katalog auf GitHub Pages, automatische Updates, armv7 + armv8. Apps installieren, ohne Google.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Android / TV"
          },
          {
            "label": "Art",
            "value": "App-Store"
          }
        ]
      },
      {
        "slug": "selfpooltracker",
        "name": "SelfPoolTracker",
        "tagline": "Dein Pool, immer im grünen Bereich",
        "description": "Ein browserbasierter Wasserwert-Tracker für deinen Pool: pH, Chlor, Redox und Temperatur mit Ampel-Status und Dosierempfehlung. Kein Server, keine Cloud — läuft im Browser und als App.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Web / Android"
          },
          {
            "label": "Art",
            "value": "Tracker"
          }
        ]
      },
      {
        "slug": "selfthreatmap",
        "name": "SelfThreatMap",
        "tagline": "Angriffe live auf der Weltkarte",
        "description": "Eine Live-Angriffskarte für deinen Server: liest CrowdSec-Entscheidungen und zeigt Angriffe in Echtzeit als Bögen auf einer Weltkarte — mit Top-Szenarien, böswilligen IPs und Herkünften. Self-gehostet via Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Docker"
          },
          {
            "label": "Art",
            "value": "Security-Karte"
          }
        ]
      },
      {
        "slug": "selfwg",
        "name": "SelfWG",
        "tagline": "VPN, das nach dem IP-Wechsel weiterläuft",
        "description": "Ein eigener Android-Client fürs WireGuard®-Protokoll mit Auto-Reconnect-Wächter: erkennt den täglichen Zwangs-IP-Wechsel des Heimanschlusses und baut den Tunnel mit frischer Server-IP neu auf. Mehrere Tunnel, Split-Tunnel nach App, Fingerabdruck-Schutz.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plattform",
            "value": "Android"
          },
          {
            "label": "Art",
            "value": "VPN-Client"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Philosophie",
    "heading": "Als Technikbegeisterter macht's mir Spaß, eigene Lösungen zu bauen.",
    "sub": "SelfCoder ist keine Firma und kein Auftrag, sondern mein Hobby. Als Technikbegeisterter schreibe ich in meiner Freizeit eigene Tools — erst für mich selbst, dann geteilt mit Familie und Freunden. Einfach aus Freude am Bauen.",
    "principles": [
      {
        "t": "Für mich gebaut",
        "d": "Jedes Tool löst zuerst ein eigenes Problem. Was ich brauche, baue ich mir."
      },
      {
        "t": "Mit den Liebsten geteilt",
        "d": "Was bei mir gut läuft, gebe ich weiter — an Familie und Freunde."
      },
      {
        "t": "Reines Hobby",
        "d": "Kein Geld, kein Druck, keine Deadline. Ich baue, wann und was ich will."
      },
      {
        "t": "Spaß an Technik",
        "d": "Als Technikbegeisterter baue ich, weil mich das Tüfteln einfach packt."
      }
    ],
    "terminal": [
      "$ docker run -d selfcoder/selfarchiver",
      "✔ archiver läuft auf :8088",
      "$ curl selfstream.local/health",
      "✔ {\"status\":\"ok\",\"self_hosted\":true}"
    ]
  },
  "footer": {
    "tagline": "Eigene Tools, self-hosted und quelloffen. Gebaut, weil Software dir gehören sollte.",
    "backToTop": "Nach oben ↑",
    "built": "Built self-hosted with Next.js"
  }
};
