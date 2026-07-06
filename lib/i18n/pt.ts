import type { Dict } from "./types";

export const pt: Dict = {
  "nav": {
    "projects": "Projetos",
    "philosophy": "Filosofia",
    "contact": "Contacto"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Feito por mim.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Projetos que nasceram de uma necessidade real. Self-hosted, para mim e para os meus amigos.",
    "ctaPrimary": "Ver projetos",
    "ctaSecondary": "Filosofia"
  },
  "stats": [
    {
      "value": 9,
      "suffix": "",
      "label": "Projetos"
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
      "label": "Controlo total"
    }
  ],
  "projects": {
    "tag": "Projetos",
    "heading": "Uma família de ferramentas só minhas.",
    "sub": "Cada projeto resolve um problema real — self-hosted, open source e livre de qualquer dependência da cloud de outra pessoa.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "Em curso"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "O teu cockpit, as tuas regras",
        "description": "Um painel personalizável assente numa base de fórum/IPS que reúne os teus serviços, métricas e ferramentas num só lugar — reforçado e adaptado à tua própria configuração.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "O teu correio, sem precisar de servidor",
        "description": "Um cliente de correio multiutilizador self-hosted — sem servidor de correio: IMAP/POP3/SMTP mais CalDAV/CardDAV, uma interface web e uma app dedicada com WireGuard. Em fase de conceito.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "Arquivo de e-mail sem cloud",
        "description": "O teu próprio arquivador de e-mail, feito em clean-room: seleção de pastas, regras de filtro, execuções cron e eliminar-após-arquivar. Um contentor, SQLite, pronto — no GHCR e no Unraid.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "O teu 2FA, nas tuas mãos",
        "description": "Um autenticador 2FA/TOTP self-hosted — os teus códigos de utilização única geridos com segurança por ti mesmo, sem cloud de terceiros. Em desenvolvimento.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "Um proxy IPTV que é teu",
        "description": "Um proxy IPTV self-hosted assente em FastAPI que agrupa, filtra e serve playlists de forma fiável. Corre headless no Unraid.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "A tua loja de apps, sem Play Store",
        "description": "A tua própria loja de apps Android e TV, só para os projetos Self: catálogo alojado no GitHub Pages, atualizações automáticas, armv7 + armv8. Instala apps sem a Google.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "A tua piscina, sempre no verde",
        "description": "Um monitor de qualidade da água para a tua piscina, no browser: pH, cloro, redox e temperatura com estado tipo semáforo e conselhos de doseamento. Sem servidor, sem cloud — corre no browser e como app.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "Ataques ao vivo no mapa-múndi",
        "description": "Um mapa de ameaças ao vivo para o teu servidor: lê as decisões do CrowdSec e mostra os ataques em tempo real como arcos sobre um mapa-múndi — com os principais cenários, IPs maliciosos e origens. Self-hosted via Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
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
        "tagline": "Uma VPN que sobrevive às mudanças de IP",
        "description": "O teu próprio cliente Android para o protocolo WireGuard® com um watchdog de reconexão automática: deteta a mudança forçada diária de IP da tua linha doméstica e reconstrói o túnel com o novo IP do servidor. Vários túneis, split tunneling por app e bloqueio por impressão digital.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
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
    "heading": "Como entusiasta de tecnologia, gosto simplesmente de construir as minhas próprias soluções.",
    "sub": "O SelfCoder não é uma empresa nem um contrato — é o meu hobby. Como entusiasta de tecnologia, construo as minhas próprias ferramentas nos tempos livres, primeiro para mim, depois partilho-as com a família e os amigos. Simplesmente pelo prazer de construir.",
    "principles": [
      {
        "t": "Feito para mim",
        "d": "Cada ferramenta resolve primeiro um problema meu. O que preciso, construo."
      },
      {
        "t": "Partilhado com quem gosto",
        "d": "O que funciona bem para mim, passo adiante — à família e aos amigos."
      },
      {
        "t": "Puro hobby",
        "d": "Sem dinheiro, sem pressão, sem prazos. Construo o que quero, quando quero."
      },
      {
        "t": "Paixão por tecnologia",
        "d": "Como entusiasta de tecnologia, construo porque a bricolagem simplesmente me entusiasma."
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
    "tagline": "As tuas próprias ferramentas, self-hosted e open source. Feito porque o software deve pertencer-te.",
    "backToTop": "Voltar ao topo ↑",
    "built": "Built self-hosted with Next.js"
  }
};
