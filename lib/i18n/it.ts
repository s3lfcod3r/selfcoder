import type { Dict } from "./types";

export const it: Dict = {
  "nav": {
    "projects": "Progetti",
    "philosophy": "Filosofia",
    "contact": "Contatti"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Fatto da me.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Progetti nati da un'esigenza reale. Self-hosted, per me e i miei amici.",
    "ctaPrimary": "Guarda i progetti",
    "ctaSecondary": "Filosofia"
  },
  "stats": [
    {
      "value": 9,
      "suffix": "",
      "label": "Progetti"
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
      "label": "Controllo totale"
    }
  ],
  "projects": {
    "tag": "Progetti",
    "heading": "Una famiglia di strumenti tutti tuoi.",
    "sub": "Ogni progetto risolve un problema reale — self-hosted, open source e senza alcuna dipendenza dal cloud di qualcun altro.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "In corso"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "La tua cabina di comando, alle tue regole",
        "description": "Una dashboard personalizzabile su base forum/IPS che riunisce in un unico posto i tuoi servizi, le metriche e gli strumenti — irrobustita e cucita sul tuo setup.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Docker"
          },
          {
            "label": "Tipo",
            "value": "Dashboard"
          }
        ]
      },
      {
        "slug": "selfmailer",
        "name": "SelfMailer",
        "tagline": "La tua posta, senza bisogno di server",
        "description": "Un client di posta multi-utente self-hosted — senza server di posta: IMAP/POP3/SMTP più CalDAV/CardDAV, una web UI e un'app dedicata con WireGuard. Fase concettuale.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Docker"
          },
          {
            "label": "Tipo",
            "value": "Mail-Client"
          }
        ]
      },
      {
        "slug": "selfarchiver",
        "name": "SelfArchiver",
        "tagline": "Archiviazione email senza il cloud",
        "description": "Il tuo archiviatore di email, costruito in clean-room: selezione delle cartelle, regole di filtro, esecuzioni cron ed elimina-dopo-archiviazione. Un container, SQLite, fatto — su GHCR e Unraid.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Docker"
          },
          {
            "label": "Tipo",
            "value": "Service"
          }
        ]
      },
      {
        "slug": "selfauthenticator",
        "name": "SelfAuthenticator",
        "tagline": "La tua 2FA, nelle tue mani",
        "description": "Un authenticator 2FA/TOTP self-hosted — i tuoi codici monouso gestiti in sicurezza da te stesso, senza cloud di terze parti. In sviluppo.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Docker"
          },
          {
            "label": "Tipo",
            "value": "Auth / 2FA"
          }
        ]
      },
      {
        "slug": "selfstream",
        "name": "SelfStream",
        "tagline": "Un proxy IPTV che è tuo",
        "description": "Un proxy IPTV self-hosted costruito su FastAPI che raggruppa, filtra e serve in modo affidabile le playlist. Gira headless su Unraid.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Docker"
          },
          {
            "label": "Tipo",
            "value": "Proxy"
          }
        ]
      },
      {
        "slug": "selfstore",
        "name": "SelfStore",
        "tagline": "Il tuo app store, senza Play Store",
        "description": "Il tuo app store per Android e TV, solo per i progetti Self: catalogo ospitato su GitHub Pages, aggiornamenti automatici, armv7 + armv8. Installa app senza Google.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Android / TV"
          },
          {
            "label": "Tipo",
            "value": "App store"
          }
        ]
      },
      {
        "slug": "selfpooltracker",
        "name": "SelfPoolTracker",
        "tagline": "La tua piscina, sempre nel verde",
        "description": "Un tracker della qualità dell'acqua per la tua piscina, basato su browser: pH, cloro, redox e temperatura con stato a semaforo e consigli sul dosaggio. Niente server, niente cloud — gira nel browser e come app.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Web / Android"
          },
          {
            "label": "Tipo",
            "value": "Tracker"
          }
        ]
      },
      {
        "slug": "selfthreatmap",
        "name": "SelfThreatMap",
        "tagline": "Gli attacchi in diretta sulla mappa del mondo",
        "description": "Una mappa delle minacce in tempo reale per il tuo server: legge le decisioni di CrowdSec e mostra gli attacchi in tempo reale come archi su una mappa del mondo — con scenari principali, IP malevoli e origini. Self-hosted via Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Docker"
          },
          {
            "label": "Tipo",
            "value": "Security map"
          }
        ]
      },
      {
        "slug": "selfwg",
        "name": "SelfWG",
        "tagline": "Una VPN che sopravvive ai cambi di IP",
        "description": "Il tuo client Android per il protocollo WireGuard® con un watchdog di riconnessione automatica: rileva il cambio forzato quotidiano di IP della tua linea di casa e ricostruisce il tunnel con il nuovo IP del server. Tunnel multipli, split tunneling per app e blocco con impronta digitale.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Piattaforma",
            "value": "Android"
          },
          {
            "label": "Tipo",
            "value": "VPN client"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Filosofia",
    "heading": "Da appassionato di tecnologia, mi diverto semplicemente a costruire le mie soluzioni.",
    "sub": "SelfCoder non è un'azienda né un contratto — è il mio hobby. Da appassionato di tecnologia costruisco i miei strumenti nel tempo libero, prima per me, poi da condividere con la famiglia e gli amici. Semplicemente per il piacere di costruire.",
    "principles": [
      {
        "t": "Costruito per me",
        "d": "Ogni strumento risolve prima di tutto un mio problema. Ciò di cui ho bisogno, lo costruisco."
      },
      {
        "t": "Condiviso con le persone care",
        "d": "Ciò che funziona bene per me, lo passo agli altri — a famiglia e amici."
      },
      {
        "t": "Puro hobby",
        "d": "Niente soldi, niente pressione, niente scadenze. Costruisco ciò che voglio, quando voglio."
      },
      {
        "t": "Amore per la tecnologia",
        "d": "Da appassionato di tecnologia, costruisco perché lo smanettare mi entusiasma semplicemente."
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
    "tagline": "I tuoi strumenti, self-hosted e open source. Costruiti perché il software dovrebbe appartenere a te.",
    "backToTop": "Torna su ↑",
    "built": "Built self-hosted with Next.js"
  }
};
