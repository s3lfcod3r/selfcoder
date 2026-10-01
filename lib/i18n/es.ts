import type { Dict } from "./types";

export const es: Dict = {
  "nav": {
    "projects": "Proyectos",
    "philosophy": "Filosofía",
    "contact": "Contacto"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Hecho por mí.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Proyectos nacidos de una necesidad real. Self-hosted, para mí y mis amigos.",
    "ctaPrimary": "Ver proyectos",
    "ctaSecondary": "Filosofía"
  },
  "stats": [
    {
      "value": 11,
      "suffix": "",
      "label": "Proyectos"
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
      "label": "Control total"
    }
  ],
  "projects": {
    "tag": "Proyectos",
    "heading": "Una familia de tus propias herramientas.",
    "sub": "Cada proyecto resuelve un problema real: self-hosted, open source y libre de cualquier dependencia de la nube de otro.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "En curso"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Tu cabina, tus reglas",
        "description": "Un panel personalizable sobre una base de foro/IPS que reúne tus servicios, métricas y herramientas en un solo lugar: reforzado y adaptado a tu propia configuración.",
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
        "tagline": "Tu correo, sin necesidad de servidor",
        "description": "Un cliente de correo multiusuario self-hosted, sin necesidad de servidor de correo: IMAP/POP3/SMTP más CalDAV/CardDAV, una interfaz web y una app propia con WireGuard. En fase de concepto.",
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
        "tagline": "Archivado de correo sin la nube",
        "description": "Tu propio archivador de correo, construido en clean-room: selección de carpetas, reglas de filtrado, ejecuciones por cron y borrado tras archivar. Un contenedor, SQLite, listo, en GHCR y Unraid.",
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
        "tagline": "Tu 2FA, en tus manos",
        "description": "Un autenticador 2FA/TOTP self-hosted: tus códigos de un solo uso gestionados de forma segura por ti mismo, sin nube de terceros. En desarrollo.",
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
        "tagline": "Un proxy IPTV que es tuyo",
        "description": "Un proxy IPTV self-hosted construido sobre FastAPI que agrupa, filtra y sirve listas de reproducción de forma fiable. Funciona headless en Unraid.",
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
        "tagline": "Tu tienda de apps, sin Play Store",
        "description": "Tu propia tienda de apps para Android y TV, solo para los proyectos Self: catálogo alojado en GitHub Pages, actualizaciones automáticas, armv7 + armv8. Instala apps sin Google.",
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
        "url": "https://pool.selfcoder.de",
        "name": "SelfPoolTracker",
        "tagline": "Tu piscina, siempre en verde",
        "description": "Un rastreador de calidad del agua para tu piscina, basado en navegador: pH, cloro, redox y temperatura con estado tipo semáforo y consejos de dosificación. Sin servidor, sin nube: funciona en el navegador y como app.",
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
        "tagline": "Ataques en vivo en el mapa mundial",
        "description": "Un mapa de amenazas en vivo para tu servidor: lee las decisiones de CrowdSec y muestra los ataques en tiempo real como arcos sobre un mapa del mundo, con los principales escenarios, IP maliciosas y orígenes. Self-hosted mediante Docker.",
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
        "tagline": "Una VPN que sobrevive a los cambios de IP",
        "description": "Tu propio cliente de Android para el protocolo WireGuard® con un vigilante de reconexión automática: detecta el cambio forzoso diario de IP de tu línea doméstica y reconstruye el túnel con la IP nueva del servidor. Múltiples túneles, split tunneling por app y bloqueo por huella dactilar.",
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
      },
      {
        "slug": "selfmediahub",
        "name": "SelfMediaHub",
        "tagline": "Tu mediateca de un vistazo",
        "description": "Una capa de análisis, monitorización y calidad de solo lectura sobre tus bibliotecas (Emby, Jellyfin, Plex, carpetas locales): integridad, calidad técnica, etiquetas y reglas, clasificaciones por edad. Nunca un servidor multimedia, nunca escribe de vuelta.",
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
            "label": "Acceso",
            "value": "Read-only"
          },
          {
            "label": "Fuentes",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      },
      {
        "slug": "selfpanini-web",
        "url": "https://panini.selfcoder.de",
        "name": "SelfPanini",
        "tagline": "Tu álbum de cromos, controlado",
        "description": "Un tracker sencillo para el álbum del Mundial 2026: marca tus cromos, controla los que faltan y los repes, e intercambia con amigos. Gratis, sin cuenta — en el navegador.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Plataforma",
            "value": "Web"
          },
          {
            "label": "Tipo",
            "value": "Album"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Filosofía",
    "heading": "Como entusiasta de la tecnología, simplemente disfruto construyendo mis propias soluciones.",
    "sub": "SelfCoder no es una empresa ni un contrato: es mi hobby. Como entusiasta de la tecnología construyo mis propias herramientas en mi tiempo libre, primero para mí y luego las comparto con mi familia y amigos. Simplemente por el placer de construir.",
    "principles": [
      {
        "t": "Hecho para mí",
        "d": "Cada herramienta resuelve primero un problema mío. Lo que necesito, lo construyo."
      },
      {
        "t": "Compartido con los míos",
        "d": "Lo que me funciona bien, lo transmito: a mi familia y amigos."
      },
      {
        "t": "Puro hobby",
        "d": "Sin dinero, sin presión, sin plazos. Construyo lo que quiero, cuando quiero."
      },
      {
        "t": "Amor por la tecnología",
        "d": "Como entusiasta de la tecnología, construyo porque trastear simplemente me emociona."
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
    "tagline": "Tus propias herramientas, self-hosted y open source. Construidas porque el software debería ser tuyo.",
    "backToTop": "Volver arriba ↑",
    "built": "Built self-hosted with Next.js"
  }
};
