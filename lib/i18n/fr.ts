import type { Dict } from "./types";

export const fr: Dict = {
  "nav": {
    "projects": "Projets",
    "philosophy": "Philosophie",
    "contact": "Contact"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Fait maison.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Des projets nés d'un vrai besoin. Self-hosted, pour moi et mes amis.",
    "ctaPrimary": "Voir les projets",
    "ctaSecondary": "Philosophie"
  },
  "stats": [
    {
      "value": 11,
      "suffix": "",
      "label": "Projets"
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
      "label": "Contrôle total"
    }
  ],
  "projects": {
    "tag": "Projets",
    "heading": "Une famille d'outils bien à moi.",
    "sub": "Chaque projet résout un vrai problème — self-hosted, open source et sans aucune dépendance au cloud de quelqu'un d'autre.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "En cours"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Ton cockpit, tes règles",
        "description": "Un tableau de bord personnalisable sur base forum/IPS qui réunit tes services, tes métriques et tes outils au même endroit — durci et taillé pour ta propre installation.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Ton courrier, sans serveur",
        "description": "Un client mail multi-utilisateurs self-hosted — sans serveur de messagerie requis : IMAP/POP3/SMTP plus CalDAV/CardDAV, une interface web et une application dédiée avec WireGuard. Au stade du concept.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "L'archivage des e-mails sans le cloud",
        "description": "Ton propre archiveur d'e-mails, conçu en clean-room : sélection des dossiers, règles de filtrage, exécutions cron et suppression après archivage. Un seul conteneur, SQLite, et c'est réglé — sur GHCR et Unraid.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Ton 2FA, entre tes mains",
        "description": "Un authentificateur 2FA/TOTP self-hosted — tes codes à usage unique gérés en toute sécurité par toi-même, sans cloud tiers. En développement.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Un proxy IPTV qui est le tien",
        "description": "Un proxy IPTV self-hosted bâti sur FastAPI qui regroupe, filtre et sert de façon fiable les playlists. Tourne en headless sur Unraid.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Ton app store, sans Play Store",
        "description": "Ton propre app store Android et TV, rien que pour les projets Self : catalogue hébergé sur GitHub Pages, mises à jour automatiques, armv7 + armv8. Installe des applis sans Google.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Ta piscine, toujours au vert",
        "description": "Un suivi de la qualité de l'eau de ta piscine dans le navigateur : pH, chlore, redox et température avec statut en feux tricolores et conseils de dosage. Sans serveur, sans cloud — tourne dans le navigateur et en application.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Les attaques en direct sur la carte du monde",
        "description": "Une carte des menaces en temps réel pour ton serveur : elle lit les décisions CrowdSec et affiche les attaques en direct sous forme d'arcs sur une carte du monde — avec les principaux scénarios, les IP malveillantes et leurs origines. Self-hosted via Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Un VPN qui survit aux changements d'IP",
        "description": "Ton propre client Android pour le protocole WireGuard® avec un chien de garde de reconnexion automatique : il détecte le changement d'IP forcé quotidien de ta ligne domestique et reconstruit le tunnel avec la nouvelle IP du serveur. Plusieurs tunnels, split tunneling par application et verrouillage par empreinte digitale.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
        "tagline": "Ta médiathèque en un coup d'œil",
        "description": "Une couche d'analyse, de supervision et de qualité en lecture seule pour tes bibliothèques (Emby, Jellyfin, Plex, dossiers locaux) : complétude, qualité technique, tags & règles, classifications d'âge. Jamais un serveur multimédia, n'écrit jamais en retour.",
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
            "label": "Accès",
            "value": "Read-only"
          },
          {
            "label": "Sources",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      },
      {
        "slug": "selfpanini-web",
        "name": "SelfPanini",
        "tagline": "Ton album, bien en main",
        "description": "Un tracker simple pour l'album d'autocollants de la Coupe du monde 2026 : coche tes autocollants, garde un œil sur les manquants et les doubles, et échange avec tes amis. Gratuit, sans compte — dans le navigateur.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plateforme",
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
    "tag": "Philosophie",
    "heading": "En passionné de tech, j'aime tout simplement construire mes propres solutions.",
    "sub": "SelfCoder n'est ni une entreprise ni un contrat — c'est mon loisir. En passionné de tech, je construis mes propres outils pendant mon temps libre, d'abord pour moi, puis partagés avec ma famille et mes amis. Simplement pour le plaisir de créer.",
    "principles": [
      {
        "t": "Construit pour moi",
        "d": "Chaque outil résout d'abord un de mes propres problèmes. Ce dont j'ai besoin, je le construis."
      },
      {
        "t": "Partagé avec mes proches",
        "d": "Ce qui marche bien pour moi, je le transmets — à ma famille et à mes amis."
      },
      {
        "t": "Pur loisir",
        "d": "Pas d'argent, pas de pression, pas de délais. Je construis ce que je veux, quand je veux."
      },
      {
        "t": "L'amour de la tech",
        "d": "En passionné de tech, je construis parce que le bricolage m'enthousiasme tout simplement."
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
    "tagline": "Tes propres outils, self-hosted et open source. Construits parce que le logiciel devrait t'appartenir.",
    "backToTop": "Retour en haut ↑",
    "built": "Built self-hosted with Next.js"
  }
};
