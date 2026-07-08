import type { Dict } from "./types";

export const pl: Dict = {
  "nav": {
    "projects": "Projekty",
    "philosophy": "Filozofia",
    "contact": "Kontakt"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Zbudowane samodzielnie.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projekty zrodzone z realnej potrzeby. Self-hosted, dla mnie i moich znajomych.",
    "ctaPrimary": "Zobacz projekty",
    "ctaSecondary": "Filozofia"
  },
  "stats": [
    {
      "value": 10,
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
      "label": "Pełna kontrola"
    }
  ],
  "projects": {
    "tag": "Projekty",
    "heading": "Rodzina moich własnych narzędzi.",
    "sub": "Każdy projekt rozwiązuje realny problem — self-hosted, open source i wolny od zależności od cudzej chmury.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "W toku"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Twój kokpit, twoje zasady",
        "description": "Konfigurowalny pulpit oparty na bazie forum/IPS, który zbiera twoje usługi, metryki i narzędzia w jednym miejscu — wzmocniony i dopasowany do twojej własnej konfiguracji.",
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
        "tagline": "Twoja poczta, bez potrzeby serwera",
        "description": "Self-hosted, wieloużytkownikowy klient poczty — bez własnego serwera pocztowego: IMAP/POP3/SMTP oraz CalDAV/CardDAV, interfejs webowy i dedykowana aplikacja z WireGuard. Etap koncepcyjny.",
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
        "tagline": "Archiwizacja e-maili bez chmury",
        "description": "Mój własny archiwizator e-maili, zbudowany metodą clean-room: wybór folderów, reguły filtrowania, uruchomienia cron i usuwanie po zarchiwizowaniu. Jeden kontener, SQLite, gotowe — na GHCR i Unraid.",
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
        "tagline": "Twoje 2FA, w twoich rękach",
        "description": "Self-hosted uwierzytelniacz 2FA/TOTP — twoje kody jednorazowe zarządzane bezpiecznie przez ciebie samego, bez chmury zewnętrznej firmy. W trakcie tworzenia.",
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
        "tagline": "Proxy IPTV, które jest twoje",
        "description": "Self-hosted proxy IPTV zbudowane na FastAPI, które łączy, filtruje i niezawodnie dostarcza playlisty. Działa headless na Unraid.",
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
        "tagline": "Twój sklep z aplikacjami, bez Play Store",
        "description": "Twój własny sklep z aplikacjami na Android i TV, tylko dla projektów Self: katalog hostowany na GitHub Pages, automatyczne aktualizacje, armv7 + armv8. Instaluj aplikacje bez Google.",
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
        "tagline": "Twój basen, zawsze na zielono",
        "description": "Działający w przeglądarce tracker jakości wody dla twojego basenu: pH, chlor, redoks i temperatura ze statusem sygnalizacji świetlnej i poradami dozowania. Bez serwera, bez chmury — działa w przeglądarce i jako aplikacja.",
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
        "tagline": "Ataki na żywo na mapie świata",
        "description": "Mapa zagrożeń na żywo dla twojego serwera: odczytuje decyzje CrowdSec i pokazuje ataki w czasie rzeczywistym jako łuki na mapie świata — z najczęstszymi scenariuszami, złośliwymi adresami IP i pochodzeniem. Self-hosted przez Docker.",
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
        "tagline": "VPN, który przetrwa zmiany IP",
        "description": "Twój własny klient Android dla protokołu WireGuard® z watchdogiem automatycznego ponownego łączenia: wykrywa codzienną wymuszoną zmianę IP twojego łącza domowego i odbudowuje tunel ze świeżym IP serwera. Wiele tuneli, split tunneling per aplikacja i blokada odciskiem palca.",
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
        "tagline": "Twoja biblioteka multimediów w skrócie",
        "description": "Warstwa analizy, monitorowania i jakości tylko do odczytu nad Twoimi bibliotekami (Emby, Jellyfin, Plex, foldery lokalne): kompletność, jakość techniczna, tagi i reguły, klasyfikacje wiekowe. Nigdy nie jest serwerem multimediów i nie zapisuje zwrotnie.",
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
            "label": "Dostęp",
            "value": "Read-only"
          },
          {
            "label": "Źródła",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Filozofia",
    "heading": "Jako entuzjasta technologii po prostu lubię budować własne rozwiązania.",
    "sub": "SelfCoder to nie firma ani zlecenie — to moje hobby. Jako entuzjasta technologii buduję własne narzędzia w wolnym czasie, najpierw dla siebie, potem dzielę się nimi z rodziną i znajomymi. Po prostu dla radości tworzenia.",
    "principles": [
      {
        "t": "Zbudowane dla siebie",
        "d": "Każde narzędzie rozwiązuje najpierw mój własny problem. Czego potrzebuję, to buduję."
      },
      {
        "t": "Dzielone z bliskimi",
        "d": "To, co u mnie dobrze działa, przekazuję dalej — rodzinie i znajomym."
      },
      {
        "t": "Czyste hobby",
        "d": "Bez pieniędzy, bez presji, bez terminów. Buduję to, co chcę, kiedy chcę."
      },
      {
        "t": "Miłość do technologii",
        "d": "Jako entuzjasta technologii buduję, bo majsterkowanie po prostu mnie ekscytuje."
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
    "tagline": "Twoje własne narzędzia, self-hosted i open source. Zbudowane, bo oprogramowanie powinno należeć do ciebie.",
    "backToTop": "Powrót na górę ↑",
    "built": "Built self-hosted with Next.js"
  }
};
