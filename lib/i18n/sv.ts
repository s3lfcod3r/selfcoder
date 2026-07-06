import type { Dict } from "./types";

export const sv: Dict = {
  "nav": {
    "projects": "Projekt",
    "philosophy": "Filosofi",
    "contact": "Kontakt"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Självbyggt.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projekt födda ur verkligt behov. Self-hosted, för mig och mina vänner.",
    "ctaPrimary": "Visa projekt",
    "ctaSecondary": "Filosofi"
  },
  "stats": [
    {
      "value": 9,
      "suffix": "",
      "label": "Projekt"
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
      "label": "Full kontroll"
    }
  ],
  "projects": {
    "tag": "Projekt",
    "heading": "En familj av dina egna verktyg.",
    "sub": "Varje projekt löser ett verkligt problem — self-hosted, open source och fritt från allt beroende av någon annans moln.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "Pågår"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Din cockpit, dina regler",
        "description": "En anpassningsbar dashboard på forum/IPS-bas som samlar dina tjänster, mätvärden och verktyg på ett ställe — härdad och skräddarsydd efter din egen uppsättning.",
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
            "label": "Typ",
            "value": "Dashboard"
          }
        ]
      },
      {
        "slug": "selfmailer",
        "name": "SelfMailer",
        "tagline": "Din e-post, utan server",
        "description": "En self-hosted e-postklient för flera användare — ingen e-postserver krävs: IMAP/POP3/SMTP plus CalDAV/CardDAV, ett webbgränssnitt och en egen app med WireGuard. Konceptstadiet.",
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
            "label": "Typ",
            "value": "Mail-Client"
          }
        ]
      },
      {
        "slug": "selfarchiver",
        "name": "SelfArchiver",
        "tagline": "E-postarkivering utan molnet",
        "description": "Din egen e-postarkiverare, byggd clean-room: mappval, filterregler, cron-körningar och radera-efter-arkivering. En container, SQLite, klart — på GHCR och Unraid.",
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
            "label": "Typ",
            "value": "Service"
          }
        ]
      },
      {
        "slug": "selfauthenticator",
        "name": "SelfAuthenticator",
        "tagline": "Din 2FA, i dina händer",
        "description": "En self-hosted 2FA/TOTP-autentiserare — dina engångskoder som du själv hanterar säkert, utan något tredjepartsmoln. Under utveckling.",
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
            "label": "Typ",
            "value": "Auth / 2FA"
          }
        ]
      },
      {
        "slug": "selfstream",
        "name": "SelfStream",
        "tagline": "En IPTV-proxy som är din",
        "description": "En self-hosted IPTV-proxy byggd på FastAPI som samlar, filtrerar och pålitligt levererar spellistor. Körs headless på Unraid.",
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
            "label": "Typ",
            "value": "Proxy"
          }
        ]
      },
      {
        "slug": "selfstore",
        "name": "SelfStore",
        "tagline": "Din app-butik, utan Play Store",
        "description": "Din egen app-butik för Android och TV, bara för Self-projekten: katalog hostad på GitHub Pages, automatiska uppdateringar, armv7 + armv8. Installera appar utan Google.",
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
            "label": "Typ",
            "value": "App store"
          }
        ]
      },
      {
        "slug": "selfpooltracker",
        "name": "SelfPoolTracker",
        "tagline": "Din pool, alltid i det gröna",
        "description": "En webbläsarbaserad tracker för vattenkvalitet i din pool: pH, klor, redox och temperatur med trafikljusstatus och doseringsråd. Ingen server, inget moln — körs i webbläsaren och som app.",
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
            "label": "Typ",
            "value": "Tracker"
          }
        ]
      },
      {
        "slug": "selfthreatmap",
        "name": "SelfThreatMap",
        "tagline": "Attacker live på världskartan",
        "description": "En live hotkarta för din server: läser CrowdSec-beslut och visar attacker i realtid som bågar över en världskarta — med toppscenarier, skadliga IP:n och ursprung. Self-hosted via Docker.",
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
            "label": "Typ",
            "value": "Security map"
          }
        ]
      },
      {
        "slug": "selfwg",
        "name": "SelfWG",
        "tagline": "Ett VPN som överlever IP-byten",
        "description": "Din egen Android-klient för WireGuard®-protokollet med en vakthund för automatisk återanslutning: den upptäcker din hemförbindelses dagliga tvingade IP-byte och bygger upp tunneln på nytt med den nya server-IP:n. Flera tunnlar, per-app split tunneling och fingeravtryckslås.",
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
            "label": "Typ",
            "value": "VPN client"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Filosofi",
    "heading": "Som teknikentusiast tycker jag helt enkelt om att bygga mina egna lösningar.",
    "sub": "SelfCoder är inget företag och inget uppdrag — det är min hobby. Som teknikentusiast bygger jag mina egna verktyg på fritiden, först för mig själv, sedan delade med familj och vänner. Helt enkelt för glädjen att bygga.",
    "principles": [
      {
        "t": "Byggt för mig själv",
        "d": "Varje verktyg löser först ett problem av mitt eget. Det jag behöver bygger jag."
      },
      {
        "t": "Delat med nära och kära",
        "d": "Det som fungerar bra för mig för jag vidare — till familj och vänner."
      },
      {
        "t": "Ren hobby",
        "d": "Inga pengar, ingen press, inga deadlines. Jag bygger det jag vill, när jag vill."
      },
      {
        "t": "Kärlek till tekniken",
        "d": "Som teknikentusiast bygger jag för att pysslandet helt enkelt sporrar mig."
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
    "tagline": "Dina egna verktyg, self-hosted och open source. Byggt för att mjukvara ska tillhöra dig.",
    "backToTop": "Tillbaka till toppen ↑",
    "built": "Built self-hosted with Next.js"
  }
};
