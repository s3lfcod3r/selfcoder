import type { Dict } from "./types";

export const nl: Dict = {
  "nav": {
    "projects": "Projecten",
    "philosophy": "Filosofie",
    "contact": "Contact"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Zelfgebouwd.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projecten die uit een echte behoefte zijn ontstaan. Self-hosted, voor mij en mijn vrienden.",
    "ctaPrimary": "Bekijk projecten",
    "ctaSecondary": "Filosofie"
  },
  "stats": [
    {
      "value": 11,
      "suffix": "",
      "label": "Projecten"
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
      "label": "Volledige controle"
    }
  ],
  "projects": {
    "tag": "Projecten",
    "heading": "Een familie van je eigen tools.",
    "sub": "Elk project lost een echt probleem op — self-hosted, open source en zonder enige afhankelijkheid van andermans cloud.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "In uitvoering"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Jouw cockpit, jouw regels",
        "description": "Een aanpasbaar dashboard op een forum/IPS-basis dat je diensten, metrics en tools op één plek samenbrengt — gehard en afgestemd op je eigen opzet.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Docker"
          },
          {
            "label": "Type",
            "value": "Dashboard"
          }
        ]
      },
      {
        "slug": "selfmailer",
        "name": "SelfMailer",
        "tagline": "Jouw mail, geen server nodig",
        "description": "Een self-hosted multi-user mailclient — geen mailserver vereist: IMAP/POP3/SMTP plus CalDAV/CardDAV, een web-UI en een eigen app met WireGuard. Conceptfase.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Platform",
            "value": "Docker"
          },
          {
            "label": "Type",
            "value": "Mail-Client"
          }
        ]
      },
      {
        "slug": "selfarchiver",
        "name": "SelfArchiver",
        "tagline": "E-mailarchivering zonder de cloud",
        "description": "Je eigen e-mailarchiver, clean-room gebouwd: mapselectie, filterregels, cron-runs en verwijderen-na-archiveren. Eén container, SQLite, klaar — op GHCR en Unraid.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Docker"
          },
          {
            "label": "Type",
            "value": "Service"
          }
        ]
      },
      {
        "slug": "selfauthenticator",
        "name": "SelfAuthenticator",
        "tagline": "Jouw 2FA, in jouw handen",
        "description": "Een self-hosted 2FA/TOTP-authenticator — je eenmalige codes veilig door jezelf beheerd, geen cloud van derden. In ontwikkeling.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Platform",
            "value": "Docker"
          },
          {
            "label": "Type",
            "value": "Auth / 2FA"
          }
        ]
      },
      {
        "slug": "selfstream",
        "name": "SelfStream",
        "tagline": "Een IPTV-proxy die van jou is",
        "description": "Een self-hosted IPTV-proxy gebouwd op FastAPI die playlists bundelt, filtert en betrouwbaar serveert. Draait headless op Unraid.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Docker"
          },
          {
            "label": "Type",
            "value": "Proxy"
          }
        ]
      },
      {
        "slug": "selfstore",
        "name": "SelfStore",
        "tagline": "Jouw app store, geen Play Store",
        "description": "Je eigen Android- en TV-app store, alleen voor de Self-projecten: catalogus gehost op GitHub Pages, automatische updates, armv7 + armv8. Installeer apps zonder Google.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Platform",
            "value": "Android / TV"
          },
          {
            "label": "Type",
            "value": "App store"
          }
        ]
      },
      {
        "slug": "selfpooltracker",
        "url": "https://pool.selfcoder.de",
        "name": "SelfPoolTracker",
        "tagline": "Jouw zwembad, altijd in het groen",
        "description": "Een browsergebaseerde waterkwaliteitstracker voor je zwembad: pH, chloor, redox en temperatuur met stoplichtstatus en doseringsadvies. Geen server, geen cloud — draait in de browser en als app.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Web / Android"
          },
          {
            "label": "Type",
            "value": "Tracker"
          }
        ]
      },
      {
        "slug": "selfthreatmap",
        "name": "SelfThreatMap",
        "tagline": "Aanvallen live op de wereldkaart",
        "description": "Een live threat map voor je server: leest CrowdSec-beslissingen en toont aanvallen in realtime als bogen over een wereldkaart — met topscenario's, kwaadaardige IP's en herkomsten. Self-hosted via Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Docker"
          },
          {
            "label": "Type",
            "value": "Security map"
          }
        ]
      },
      {
        "slug": "selfwg",
        "name": "SelfWG",
        "tagline": "Een VPN die IP-wijzigingen overleeft",
        "description": "Je eigen Android-client voor het WireGuard®-protocol met een auto-reconnect-waakhond: hij detecteert de dagelijkse gedwongen IP-wijziging van je thuisaansluiting en bouwt de tunnel opnieuw op met het nieuwe server-IP. Meerdere tunnels, per-app split tunneling en vingerafdrukvergrendeling.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Android"
          },
          {
            "label": "Type",
            "value": "VPN client"
          }
        ]
      },
      {
        "slug": "selfmediahub",
        "name": "SelfMediaHub",
        "tagline": "Je mediatheek in één oogopslag",
        "description": "Een alleen-lezen analyse-, monitoring- en kwaliteitslaag over je bibliotheken (Emby, Jellyfin, Plex, lokale mappen): volledigheid, technische kwaliteit, tags en regels, leeftijdsclassificaties. Nooit een mediaserver, schrijft nooit terug.",
        "stack": [
          "FastAPI",
          "Python",
          "SQLite",
          "Docker"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Toegang",
            "value": "Read-only"
          },
          {
            "label": "Bronnen",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      },
      {
        "slug": "selfpanini-web",
        "url": "https://panini.selfcoder.de",
        "name": "SelfPanini",
        "tagline": "Je stickeralbum onder controle",
        "description": "Een eenvoudige tracker voor het WK 2026-stickeralbum: vink stickers af, houd ontbrekende en dubbele in de gaten en ruil met vrienden. Gratis, zonder account — in de browser.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platform",
            "value": "Web"
          },
          {
            "label": "Type",
            "value": "Album"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Filosofie",
    "heading": "Als technologieliefhebber vind ik het gewoon leuk om mijn eigen oplossingen te bouwen.",
    "sub": "SelfCoder is geen bedrijf of contract — het is mijn hobby. Als technologieliefhebber bouw ik in mijn vrije tijd mijn eigen tools, eerst voor mezelf, daarna gedeeld met familie en vrienden. Puur uit plezier van het bouwen.",
    "principles": [
      {
        "t": "Voor mezelf gebouwd",
        "d": "Elke tool lost eerst een probleem van mezelf op. Wat ik nodig heb, bouw ik."
      },
      {
        "t": "Gedeeld met dierbaren",
        "d": "Wat voor mij goed werkt, geef ik door — aan familie en vrienden."
      },
      {
        "t": "Pure hobby",
        "d": "Geen geld, geen druk, geen deadlines. Ik bouw wat ik wil, wanneer ik wil."
      },
      {
        "t": "Liefde voor techniek",
        "d": "Als technologieliefhebber bouw ik omdat het knutselen me gewoon enthousiast maakt."
      }
    ],
    "terminal": [
      "$ docker run -d selfcoder/selfarchiver",
      "✔ archiver running on :8088",
      "$ curl selfstream.local/health",
      "✔ {\"status\":\"ok\",\"self_hosted\":true}"
    ]
  },
  "footer": {
    "tagline": "Je eigen tools, self-hosted en open source. Gebouwd omdat software van jou hoort te zijn.",
    "backToTop": "Terug naar boven ↑",
    "built": "Built self-hosted with Next.js"
  }
};
