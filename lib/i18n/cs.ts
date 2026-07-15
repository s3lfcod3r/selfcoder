import type { Dict } from "./types";

export const cs: Dict = {
  "nav": {
    "projects": "Projekty",
    "philosophy": "Filozofie",
    "contact": "Kontakt"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Postavené sám.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projekty vzniklé ze skutečné potřeby. Self-hosted, pro mě a mé přátele.",
    "ctaPrimary": "Zobrazit projekty",
    "ctaSecondary": "Filozofie"
  },
  "stats": [
    {
      "value": 11,
      "suffix": "",
      "label": "Projekty"
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
      "label": "Plná kontrola"
    }
  ],
  "projects": {
    "tag": "Projekty",
    "heading": "Rodina vlastních nástrojů.",
    "sub": "Každý projekt řeší skutečný problém — self-hosted, open source a bez jakékoli závislosti na cizím cloudu.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "Probíhá"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Tvůj kokpit, tvá pravidla",
        "description": "Přizpůsobitelný dashboard na základě fóra/IPS, který sdružuje tvé služby, metriky a nástroje na jedno místo — zabezpečený a ušitý na míru tvému vlastnímu setupu.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "Tvá pošta, bez potřeby serveru",
        "description": "Self-hosted víceuživatelský mailový klient — bez potřeby mailového serveru: IMAP/POP3/SMTP plus CalDAV/CardDAV, webové rozhraní a vlastní aplikace s WireGuard. Ve fázi konceptu.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "Archivace e-mailů bez cloudu",
        "description": "Vlastní archivátor e-mailů, postavený clean-room: výběr složek, filtrovací pravidla, cron běhy a mazání po archivaci. Jeden kontejner, SQLite, hotovo — na GHCR a Unraidu.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "Tvá 2FA, ve tvých rukou",
        "description": "Self-hosted 2FA/TOTP autentikátor — své jednorázové kódy spravuješ bezpečně sám, žádný cloud třetí strany. Ve vývoji.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "IPTV proxy, která je tvá",
        "description": "Self-hosted IPTV proxy postavená na FastAPI, která sdružuje, filtruje a spolehlivě servíruje playlisty. Běží headless na Unraidu.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "Tvůj obchod s aplikacemi, bez Play Store",
        "description": "Vlastní obchod s aplikacemi pro Android a TV, jen pro projekty Self: katalog hostovaný na GitHub Pages, automatické aktualizace, armv7 + armv8. Instaluj aplikace bez Googlu.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "Tvůj bazén, vždy v zeleném",
        "description": "Sledování kvality vody tvého bazénu v prohlížeči: pH, chlor, redox a teplota se semaforovým stavem a doporučením dávkování. Žádný server, žádný cloud — běží v prohlížeči i jako aplikace.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "Útoky živě na mapě světa",
        "description": "Živá mapa hrozeb pro tvůj server: čte rozhodnutí CrowdSec a zobrazuje útoky v reálném čase jako oblouky napříč mapou světa — s nejčastějšími scénáři, škodlivými IP a původem. Self-hosted přes Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
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
        "tagline": "VPN, která přežije změnu IP",
        "description": "Vlastní klient pro Android pro protokol WireGuard® s hlídačem automatického obnovení připojení: rozpozná denní vynucenou změnu IP tvé domácí linky a znovu sestaví tunel s čerstvou IP serveru. Více tunelů, split tunneling pro jednotlivé aplikace a zámek otiskem prstu.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
            "value": "Android"
          },
          {
            "label": "Typ",
            "value": "VPN client"
          }
        ]
      },
      {
        "slug": "selfmediahub",
        "name": "SelfMediaHub",
        "tagline": "Tvoje mediotéka na první pohled",
        "description": "Analytická, monitorovací a kvalitativní vrstva pouze pro čtení nad tvými knihovnami (Emby, Jellyfin, Plex, místní složky): úplnost, technická kvalita, štítky a pravidla, věková hodnocení. Nikdy ne mediální server, nikdy nezapisuje zpět.",
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
            "label": "Přístup",
            "value": "Read-only"
          },
          {
            "label": "Zdroje",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      },
      {
        "slug": "selfpanini-web",
        "name": "SelfPanini",
        "tagline": "Tvé album pod kontrolou",
        "description": "Jednoduchý tracker pro album samolepek MS 2026: odškrtávej samolepky, hlídej si chybějící a duplicitní a vyměňuj si s přáteli. Zdarma, bez účtu — v prohlížeči.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Platforma",
            "value": "Web"
          },
          {
            "label": "Typ",
            "value": "Album"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Filozofie",
    "heading": "Jako technický nadšenec mě prostě baví stavět vlastní řešení.",
    "sub": "SelfCoder není firma ani zakázka — je to můj koníček. Jako technický nadšenec stavím ve volném čase vlastní nástroje, nejdřív pro sebe, pak je sdílím s rodinou a přáteli. Prostě z radosti ze stavění.",
    "principles": [
      {
        "t": "Postavené pro sebe",
        "d": "Každý nástroj nejdřív řeší nějaký můj vlastní problém. Co potřebuju, to postavím."
      },
      {
        "t": "Sdílené s blízkými",
        "d": "Co mi dobře funguje, předávám dál — rodině a přátelům."
      },
      {
        "t": "Čistý koníček",
        "d": "Žádné peníze, žádný tlak, žádné termíny. Stavím, co chci, kdy chci."
      },
      {
        "t": "Láska k technice",
        "d": "Jako technický nadšenec stavím, protože mě to bastlení prostě nadchne."
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
    "tagline": "Tvé vlastní nástroje, self-hosted a open source. Postavené, protože software by měl patřit tobě.",
    "backToTop": "Nahoru ↑",
    "built": "Built self-hosted with Next.js"
  }
};
