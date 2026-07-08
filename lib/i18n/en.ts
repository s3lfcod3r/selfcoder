import type { Dict } from "./types";

export const en: Dict = {
  "nav": {
    "projects": "Projects",
    "philosophy": "Philosophy",
    "contact": "Contact"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Self-built.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projects born from real need. Self-hosted, for me and my friends.",
    "ctaPrimary": "View projects",
    "ctaSecondary": "Philosophy"
  },
  "stats": [
    {
      "value": 10,
      "suffix": "",
      "label": "Projects"
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
      "label": "Full control"
    }
  ],
  "projects": {
    "tag": "Projects",
    "heading": "A family of your own tools.",
    "sub": "Every project solves a real problem — self-hosted, open source and free of any reliance on someone else's cloud.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "In progress"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Your cockpit, your rules",
        "description": "A customizable dashboard on a forum/IPS base that brings your services, metrics and tools into one place — hardened and tailored to your own setup.",
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
        "tagline": "Your mail, no server needed",
        "description": "A self-hosted multi-user mail client — no mail server required: IMAP/POP3/SMTP plus CalDAV/CardDAV, a web UI and a dedicated app with WireGuard. Concept stage.",
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
        "tagline": "Email archiving without the cloud",
        "description": "Your own email archiver, built clean-room: folder selection, filter rules, cron runs and delete-after-archive. One container, SQLite, done — on GHCR and Unraid.",
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
        "tagline": "Your 2FA, in your hands",
        "description": "A self-hosted 2FA/TOTP authenticator — your one-time codes managed securely by yourself, no third-party cloud. In development.",
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
        "tagline": "An IPTV proxy that's yours",
        "description": "A self-hosted IPTV proxy built on FastAPI that bundles, filters and reliably serves playlists. Runs headless on Unraid.",
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
        "tagline": "Your app store, no Play Store",
        "description": "Your own Android and TV app store, just for the Self projects: catalog hosted on GitHub Pages, automatic updates, armv7 + armv8. Install apps without Google.",
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
        "tagline": "Your pool, always in the green",
        "description": "A browser-based water-quality tracker for your pool: pH, chlorine, redox and temperature with traffic-light status and dosing advice. No server, no cloud — runs in the browser and as an app.",
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
        "tagline": "Attacks live on the world map",
        "description": "A live threat map for your server: reads CrowdSec decisions and shows attacks in real time as arcs across a world map — with top scenarios, malicious IPs and origins. Self-hosted via Docker.",
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
        "tagline": "A VPN that survives IP changes",
        "description": "Your own Android client for the WireGuard® protocol with an auto-reconnect watchdog: it detects your home line's daily forced IP change and rebuilds the tunnel with the fresh server IP. Multiple tunnels, per-app split tunneling and fingerprint lock.",
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
        "tagline": "Your media library at a glance",
        "description": "A read-only analysis, monitoring and quality layer over your libraries (Emby, Jellyfin, Plex, local folders): completeness, technical quality, tags & rules, age ratings. Never a media server, never writes back.",
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
            "label": "Access",
            "value": "Read-only"
          },
          {
            "label": "Sources",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Philosophy",
    "heading": "As a tech enthusiast, I simply enjoy building my own solutions.",
    "sub": "SelfCoder isn't a company or a contract — it's my hobby. As a tech enthusiast I build my own tools in my spare time, first for myself, then shared with family and friends. Simply for the joy of building.",
    "principles": [
      {
        "t": "Built for myself",
        "d": "Every tool solves a problem of my own first. What I need, I build."
      },
      {
        "t": "Shared with loved ones",
        "d": "What works well for me, I pass on — to family and friends."
      },
      {
        "t": "Pure hobby",
        "d": "No money, no pressure, no deadlines. I build what I want, when I want."
      },
      {
        "t": "Love for tech",
        "d": "As a tech enthusiast, I build because the tinkering simply excites me."
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
    "tagline": "Your own tools, self-hosted and open source. Built because software should belong to you.",
    "backToTop": "Back to top ↑",
    "built": "Built self-hosted with Next.js"
  }
};
