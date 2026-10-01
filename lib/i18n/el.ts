import type { Dict } from "./types";

export const el: Dict = {
  "nav": {
    "projects": "Έργα",
    "philosophy": "Φιλοσοφία",
    "contact": "Επικοινωνία"
  },
  "hero": {
    "badge": "Self-hosted & Open Source",
    "line1": "Φτιαγμένα από μένα.",
    "accent": "Self-hosted.",
    "accentRest": "",
    "subtitle": "Έργα που γεννήθηκαν από πραγματική ανάγκη. Self-hosted, για μένα και τους φίλους μου.",
    "ctaPrimary": "Δες τα έργα",
    "ctaSecondary": "Φιλοσοφία"
  },
  "stats": [
    {
      "value": 11,
      "suffix": "",
      "label": "Έργα"
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
      "label": "Πλήρης έλεγχος"
    }
  ],
  "projects": {
    "tag": "Έργα",
    "heading": "Μια οικογένεια από δικά σου εργαλεία.",
    "sub": "Κάθε έργο λύνει ένα πραγματικό πρόβλημα — self-hosted, open source και χωρίς καμία εξάρτηση από το cloud κάποιου άλλου.",
    "status": {
      "live": "Live",
      "beta": "Beta",
      "wip": "Σε εξέλιξη"
    },
    "items": [
      {
        "slug": "selfdashboard",
        "name": "SelfDashboard",
        "tagline": "Το κόκπιτ σου, οι κανόνες σου",
        "description": "Ένα προσαρμόσιμο dashboard πάνω σε βάση forum/IPS που φέρνει τις υπηρεσίες, τις μετρήσεις και τα εργαλεία σου σε ένα μέρος — θωρακισμένο και ραμμένο στα μέτρα του δικού σου setup.",
        "stack": [
          "TypeScript",
          "JavaScript"
        ],
        "status": "beta",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Docker"
          },
          {
            "label": "Τύπος",
            "value": "Dashboard"
          }
        ]
      },
      {
        "slug": "selfmailer",
        "name": "SelfMailer",
        "tagline": "Το mail σου, χωρίς ανάγκη για server",
        "description": "Ένας self-hosted multi-user mail client — χωρίς να χρειάζεται mail server: IMAP/POP3/SMTP μαζί με CalDAV/CardDAV, ένα web UI και μια ειδική εφαρμογή με WireGuard. Σε στάδιο concept.",
        "stack": [
          "TypeScript"
        ],
        "status": "wip",
        "accent": "ice",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Docker"
          },
          {
            "label": "Τύπος",
            "value": "Mail-Client"
          }
        ]
      },
      {
        "slug": "selfarchiver",
        "name": "SelfArchiver",
        "tagline": "Αρχειοθέτηση email χωρίς το cloud",
        "description": "Ο δικός σου archiver email, χτισμένος clean-room: επιλογή φακέλων, κανόνες φίλτρων, εκτελέσεις cron και διαγραφή-μετά-την-αρχειοθέτηση. Ένα container, SQLite, τελείωσε — σε GHCR και Unraid.",
        "stack": [
          "TypeScript",
          "CSS"
        ],
        "status": "wip",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Docker"
          },
          {
            "label": "Τύπος",
            "value": "Service"
          }
        ]
      },
      {
        "slug": "selfauthenticator",
        "name": "SelfAuthenticator",
        "tagline": "Το 2FA σου, στα χέρια σου",
        "description": "Ένας self-hosted 2FA/TOTP authenticator — οι κωδικοί μιας χρήσης διαχειρίζονται με ασφάλεια από εσένα τον ίδιο, χωρίς cloud τρίτων. Υπό ανάπτυξη.",
        "stack": [
          "In Entwicklung"
        ],
        "status": "wip",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Docker"
          },
          {
            "label": "Τύπος",
            "value": "Auth / 2FA"
          }
        ]
      },
      {
        "slug": "selfstream",
        "name": "SelfStream",
        "tagline": "Ένα IPTV proxy που είναι δικό σου",
        "description": "Ένα self-hosted IPTV proxy χτισμένο πάνω σε FastAPI που ομαδοποιεί, φιλτράρει και σερβίρει αξιόπιστα playlists. Τρέχει headless σε Unraid.",
        "stack": [
          "Python",
          "HTML"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Docker"
          },
          {
            "label": "Τύπος",
            "value": "Proxy"
          }
        ]
      },
      {
        "slug": "selfstore",
        "name": "SelfStore",
        "tagline": "Το app store σου, χωρίς Play Store",
        "description": "Το δικό σου app store για Android και TV, μόνο για τα έργα Self: κατάλογος φιλοξενούμενος σε GitHub Pages, αυτόματες ενημερώσεις, armv7 + armv8. Εγκατάστησε εφαρμογές χωρίς Google.",
        "stack": [
          "Kotlin",
          "HTML"
        ],
        "status": "live",
        "accent": "mixed",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Android / TV"
          },
          {
            "label": "Τύπος",
            "value": "App store"
          }
        ]
      },
      {
        "slug": "selfpooltracker",
        "url": "https://pool.selfcoder.de",
        "name": "SelfPoolTracker",
        "tagline": "Η πισίνα σου, πάντα στο πράσινο",
        "description": "Ένας tracker ποιότητας νερού μέσα στον browser για την πισίνα σου: pH, χλώριο, redox και θερμοκρασία με ένδειξη φαναριού και συμβουλές δοσολογίας. Χωρίς server, χωρίς cloud — τρέχει στον browser και ως εφαρμογή.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Web / Android"
          },
          {
            "label": "Τύπος",
            "value": "Tracker"
          }
        ]
      },
      {
        "slug": "selfthreatmap",
        "name": "SelfThreatMap",
        "tagline": "Οι επιθέσεις live στον παγκόσμιο χάρτη",
        "description": "Ένας live χάρτης απειλών για τον server σου: διαβάζει τις αποφάσεις του CrowdSec και δείχνει τις επιθέσεις σε πραγματικό χρόνο ως τόξα πάνω σε έναν παγκόσμιο χάρτη — με τα κορυφαία σενάρια, κακόβουλες IP και προελεύσεις. Self-hosted μέσω Docker.",
        "stack": [
          "JavaScript",
          "Python"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Docker"
          },
          {
            "label": "Τύπος",
            "value": "Security map"
          }
        ]
      },
      {
        "slug": "selfwg",
        "name": "SelfWG",
        "tagline": "Ένα VPN που επιβιώνει σε αλλαγές IP",
        "description": "Ο δικός σου Android client για το πρωτόκολλο WireGuard® με έναν watchdog αυτόματης επανασύνδεσης: εντοπίζει την καθημερινή αναγκαστική αλλαγή IP της οικιακής σου γραμμής και ξαναχτίζει το τούνελ με τη φρέσκια IP του server. Πολλαπλά τούνελ, split tunneling ανά εφαρμογή και κλείδωμα με δακτυλικό αποτύπωμα.",
        "stack": [
          "Kotlin",
          "Android"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Android"
          },
          {
            "label": "Τύπος",
            "value": "VPN client"
          }
        ]
      },
      {
        "slug": "selfmediahub",
        "name": "SelfMediaHub",
        "tagline": "Η βιβλιοθήκη πολυμέσων σου με μια ματιά",
        "description": "Ένα επίπεδο ανάλυσης, παρακολούθησης και ποιότητας μόνο για ανάγνωση πάνω από τις βιβλιοθήκες σου (Emby, Jellyfin, Plex, τοπικοί φάκελοι): πληρότητα, τεχνική ποιότητα, ετικέτες & κανόνες, ηλικιακές διαβαθμίσεις. Ποτέ διακομιστής πολυμέσων, δεν γράφει ποτέ πίσω.",
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
            "label": "Πρόσβαση",
            "value": "Read-only"
          },
          {
            "label": "Πηγές",
            "value": "Emby/Jellyfin/Plex"
          }
        ]
      },
      {
        "slug": "selfpanini-web",
        "url": "https://panini.selfcoder.de",
        "name": "SelfPanini",
        "tagline": "Το άλμπουμ σου, υπό έλεγχο",
        "description": "Ένα απλό εργαλείο για το άλμπουμ αυτοκόλλητων του Μουντιάλ 2026: τσέκαρε αυτοκόλλητα, παρακολούθησε όσα λείπουν και τα διπλά, και κάνε ανταλλαγές με φίλους. Δωρεάν, χωρίς λογαριασμό — στον browser.",
        "stack": [
          "HTML",
          "JavaScript"
        ],
        "status": "live",
        "accent": "teal",
        "metrics": [
          {
            "label": "Πλατφόρμα",
            "value": "Web"
          },
          {
            "label": "Τύπος",
            "value": "Album"
          }
        ]
      }
    ]
  },
  "philosophy": {
    "tag": "Φιλοσοφία",
    "heading": "Ως λάτρης της τεχνολογίας, απλά απολαμβάνω να φτιάχνω τις δικές μου λύσεις.",
    "sub": "Το SelfCoder δεν είναι εταιρεία ούτε συμβόλαιο — είναι το χόμπι μου. Ως λάτρης της τεχνολογίας φτιάχνω τα δικά μου εργαλεία στον ελεύθερο χρόνο μου, πρώτα για μένα και μετά τα μοιράζομαι με οικογένεια και φίλους. Απλά για τη χαρά της δημιουργίας.",
    "principles": [
      {
        "t": "Φτιαγμένο για μένα",
        "d": "Κάθε εργαλείο λύνει πρώτα ένα δικό μου πρόβλημα. Ό,τι χρειάζομαι, το φτιάχνω."
      },
      {
        "t": "Μοιρασμένο με τους αγαπημένους",
        "d": "Ό,τι δουλεύει καλά για μένα, το περνάω παρακάτω — σε οικογένεια και φίλους."
      },
      {
        "t": "Καθαρό χόμπι",
        "d": "Χωρίς χρήματα, χωρίς πίεση, χωρίς προθεσμίες. Φτιάχνω ό,τι θέλω, όποτε θέλω."
      },
      {
        "t": "Αγάπη για την τεχνολογία",
        "d": "Ως λάτρης της τεχνολογίας, φτιάχνω επειδή το μαστόρεμα απλά με ενθουσιάζει."
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
    "tagline": "Τα δικά σου εργαλεία, self-hosted και open source. Φτιαγμένα επειδή το λογισμικό πρέπει να ανήκει σε σένα.",
    "backToTop": "Πάνω πάνω ↑",
    "built": "Built self-hosted with Next.js"
  }
};
