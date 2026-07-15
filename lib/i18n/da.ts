import type { Dict } from "./types";

export const da: Dict = {
  "nav": {
    "projects": "Projekter",
    "philosophy": "Filosofi",
    "contact": "Kontakt"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Selvbygget.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projekter født af et reelt behov. Self-hosted, til mig og mine venner.",
    "ctaPrimary": "Se projekter",
    "ctaSecondary": "Filosofi"
  },
  "stats": [
    {
      "value": 11,
      "suffix": "",
      "label": "Projekter"
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
      "label": "Fuld kontrol"
    }
  ],
  "projects": {
    "tag": "Projekter",
    "heading": "En familie af dine egne værktøjer.",
    "sub": "Hvert projekt løser et reelt problem — self-hosted, open source og fri for enhver afhængighed af andres cloud.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "I gang"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Dit cockpit, dine regler",
        "description": "Et tilpasseligt dashboard på en forum/IPS-basis, der samler dine tjenester, målinger og værktøjer ét sted — hærdet og skræddersyet til dit eget setup.",
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
        "tagline": "Din mail, uden behov for en server",
        "description": "En self-hosted mailklient til flere brugere — ingen mailserver nødvendig: IMAP/POP3/SMTP plus CalDAV/CardDAV, en web-UI og en dedikeret app med WireGuard. Konceptstadie.",
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
        "tagline": "E-mailarkivering uden cloud",
        "description": "Din egen e-mailarkivar, bygget clean-room: mappevalg, filterregler, cron-kørsler og slet-efter-arkivering. Én container, SQLite, færdig — på GHCR og Unraid.",
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
        "tagline": "Din 2FA, i dine hænder",
        "description": "En self-hosted 2FA/TOTP-authenticator — dine engangskoder styres sikkert af dig selv, uden tredjeparts-cloud. Under udvikling.",
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
        "tagline": "En IPTV-proxy, der er din",
        "description": "En self-hosted IPTV-proxy bygget på FastAPI, der samler, filtrerer og pålideligt leverer afspilningslister. Kører headless på Unraid.",
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
        "tagline": "Din app-butik, uden Play Store",
        "description": "Din egen Android- og TV-app-butik, kun til Self-projekterne: katalog hostet på GitHub Pages, automatiske opdateringer, armv7 + armv8. Installér apps uden Google.",
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
        "name": "SelfPoolTracker",
        "tagline": "Din pool, altid i det grønne",
        "description": "En browserbaseret tracker for vandkvaliteten i din pool: pH, klor, redox og temperatur med trafiklysstatus og doseringsråd. Ingen server, ingen cloud — kører i browseren og som app.",
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
        "tagline": "Angreb live på verdenskortet",
        "description": "Et live threat-kort til din server: læser CrowdSec-beslutninger og viser angreb i realtid som buer på tværs af et verdenskort — med top-scenarier, ondsindede IP'er og oprindelser. Self-hosted via Docker.",
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
        "tagline": "En VPN, der overlever IP-skift",
        "description": "Din egen Android-klient til WireGuard®-protokollen med en auto-genforbind-vagthund: den registrerer din hjemmelinjes daglige tvungne IP-skift og genopbygger tunnelen med den friske server-IP. Flere tunneler, split-tunneling per app og fingeraftrykslås.",
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
        "tagline": "Dit mediebibliotek på et øjeblik",
        "description": "Et skrivebeskyttet analyse-, overvågnings- og kvalitetslag oven på dine biblioteker (Emby, Jellyfin, Plex, lokale mapper): fuldstændighed, teknisk kvalitet, tags og regler, aldersmærkninger. Aldrig en medieserver, skriver aldrig tilbage.",
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
            "label": "Adgang",
            "value": "Read-only"
          },
          {
            "label": "Kilder",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      },
      {
        "slug": "selfpanini-web",
        "name": "SelfPanini",
        "tagline": "Styr på dit klistermærkealbum",
        "description": "En simpel tracker til VM 2026-albummet: kryds klistermærker af, hold styr på manglende og dubletter, og byt med venner. Gratis, uden konto — i browseren.",
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
    "tag": "Filosofi",
    "heading": "Som teknikentusiast nyder jeg simpelthen at bygge mine egne løsninger.",
    "sub": "SelfCoder er hverken en virksomhed eller en kontrakt — det er min hobby. Som teknikentusiast bygger jeg mine egne værktøjer i min fritid, først til mig selv, derefter delt med familie og venner. Simpelthen for glæden ved at bygge.",
    "principles": [
      {
        "t": "Bygget til mig selv",
        "d": "Hvert værktøj løser først et af mine egne problemer. Det, jeg har brug for, bygger jeg."
      },
      {
        "t": "Delt med dem, jeg holder af",
        "d": "Det, der fungerer godt for mig, giver jeg videre — til familie og venner."
      },
      {
        "t": "Ren hobby",
        "d": "Ingen penge, intet pres, ingen deadlines. Jeg bygger, hvad jeg vil, når jeg vil."
      },
      {
        "t": "Kærlighed til teknik",
        "d": "Som teknikentusiast bygger jeg, fordi pusleriet simpelthen begejstrer mig."
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
    "tagline": "Dine egne værktøjer, self-hosted og open source. Bygget, fordi software bør tilhøre dig.",
    "backToTop": "Til toppen ↑",
    "built": "Built self-hosted with Next.js"
  }
};
