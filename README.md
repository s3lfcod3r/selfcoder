<a id="-deutsch"></a>
## 🇩🇪 Deutsch

Das ist die Quelle der Portfolio-Website [selfcoder.de](https://selfcoder.de) — eine dunkle, animierte One-Page-Seite, die die Self-Projekte (SelfStream, SelfArchiver, SelfDashboard u. a.) vorstellt. Statisch gebaut und kostenlos über GitHub Pages gehostet.

### 📑 Inhaltsverzeichnis

- [Funktionen](#-funktionen-deutsch)
- [Architektur](#-architektur-deutsch)
- [Schnellstart](#-schnellstart-deutsch)
- [Deployment](#-deployment-deutsch)
- [Tech-Stack](#-tech-stack-deutsch)
- [Entwicklung](#-entwicklung-deutsch)
- [Lizenz](#-lizenz-deutsch)

### ✨ Funktionen

- Dunkle, animierte One-Page-Seite
- 3D / WebGL-Szenen (three.js + React Three Fiber)
- Smooth Scrolling (Lenis)
- Projektübersicht der Self-Familie
- Statischer Export für GitHub Pages

### 🧭 Architektur

- `app/` — Seiten der Next.js App Router
- `components/` — wiederverwendbare UI-Komponenten
- `lib/` — Helfer und Utilities
- `public/` — statische Assets (Logo, CNAME)
- Statischer Export nach `out/` über `next build --webpack`

### 🚀 Schnellstart

1. Erfordert **Node.js 20** (wie in der CI)
2. `npm install`
3. `npm run dev` → läuft auf **http://localhost:3220**

### 🌐 Deployment (GitHub Pages)

Vollautomatisch — **kein lokaler Build nötig**:

1. Ein Push auf `main` löst den GitHub-Actions-Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) aus.
2. Die Action baut den statischen Export in der Cloud und veröffentlicht den Ordner `out/` auf **GitHub Pages**.
3. Die eigene Domain wird über [`public/CNAME`](public/CNAME) gesetzt (**selfcoder.de**); GitHub stellt HTTPS bereit.

Manuelles Auslösen ist über den Actions-Tab (`workflow_dispatch`) möglich.

### 🧱 Tech-Stack

| Bereich       | Technologie |
|---------------|-------------|
| Framework     | **Next.js 16** (App Router, `output: "export"`) |
| UI-Bibliothek | **React 19** |
| Styling       | **Tailwind CSS 4** |
| Animation     | **Framer Motion 12** |
| 3D / WebGL    | **three.js** + **React Three Fiber** / **drei** |
| Smooth Scroll | **Lenis** |
| Sprache       | **TypeScript 5** |

### 🛠️ Entwicklung

```bash
npm run build
```

Erzeugt den statischen Export im Ordner **`out/`** (ebenfalls mit `--webpack`).
Lokales Vorschau-Hosting des Builds: `npm run start` (Port 3220).

> **Warum `--webpack`?**
> Die Skripte erzwingen den Webpack-Bundler (`next dev --webpack`, `next build --webpack`),
> weil der Standard-Bundler **Turbopack** auf einem **Netzlaufwerk** (hier ein gemapptes
> RAID-Laufwerk) nicht zuverlässig läuft — er bricht beim Datei-Watching/Caching ab.
> Webpack ist langsamer, funktioniert auf dem Netzlaufwerk aber stabil. Wer lokal von
> einer SSD aus arbeitet, kann das Flag in `package.json` entfernen.

### 🗺️ Roadmap

- [ ] TBD

### 📄 Lizenz

MIT — siehe [LICENSE](LICENSE).
