<div align="center">

<img src="public/logo-wide.png" alt="SelfCoder" width="320" />

# selfcoder.de

**Developer portfolio for SelfCoder — a family of self-hosted, open-source tools.**
*Entwickler-Portfolio für SelfCoder — eine Familie self-hosted, quelloffener Tools.*

[![Deploy to GitHub Pages](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml/badge.svg)](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-22d3ee.svg)](LICENSE)
[![Live](https://img.shields.io/badge/live-selfcoder.de-0ea5e9.svg)](https://selfcoder.de)

</div>

---

## 🇩🇪 Deutsch

Das ist die Quelle der Portfolio-Website **[selfcoder.de](https://selfcoder.de)** — eine dunkle, animierte One-Page-Seite, die die Self-Projekte (SelfStream, SelfArchiver, SelfDashboard u. a.) vorstellt. Statisch gebaut und kostenlos über GitHub Pages gehostet.

### Tech-Stack

| Bereich        | Technologie |
|----------------|-------------|
| Framework      | **Next.js 16** (App Router, `output: "export"`) |
| UI-Library     | **React 19** |
| Styling        | **Tailwind CSS 4** |
| Animation      | **Framer Motion 12** |
| 3D / WebGL     | **three.js** + **React Three Fiber** / **drei** |
| Smooth-Scroll  | **Lenis** |
| Sprache        | **TypeScript 5** |

### Voraussetzungen

- **Node.js 20** (gleiche Version wie die CI)
- npm (liegt Node bei)

### Einrichtung

```bash
npm install
```

### Entwicklung

```bash
npm run dev
```

Läuft dann auf **http://localhost:3220**.

> **Warum `--webpack`?**
> Die Skripte erzwingen den Webpack-Bundler (`next dev --webpack`, `next build --webpack`),
> weil der Standard-Bundler **Turbopack** auf einem **Netzlaufwerk** (hier ein gemapptes
> RAID-Laufwerk) nicht zuverlässig läuft — er bricht beim Datei-Watching/Caching ab.
> Webpack ist langsamer, funktioniert auf dem Netzlaufwerk aber stabil. Wer lokal von
> einer SSD aus arbeitet, kann das Flag in `package.json` entfernen.

### Build (statischer Export)

```bash
npm run build
```

Erzeugt den statischen Export im Ordner **`out/`** (ebenfalls mit `--webpack`).
Lokales Vorschau-Hosting des Builds: `npm run start` (Port 3220).

### Deployment

Vollautomatisch — **kein lokaler Build nötig**:

1. Push auf `main` löst den GitHub-Actions-Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) aus.
2. Die Action baut den statischen Export in der Cloud und veröffentlicht den Ordner `out/` auf **GitHub Pages**.
3. Die eigene Domain wird über [`public/CNAME`](public/CNAME) gesetzt (**selfcoder.de**), HTTPS stellt GitHub bereit.

Manuelles Auslösen ist über den Actions-Tab (`workflow_dispatch`) möglich.

### Lizenz

MIT — siehe [LICENSE](LICENSE).

---

## 🇬🇧 English

Source of the portfolio website **[selfcoder.de](https://selfcoder.de)** — a dark, animated one-page site that showcases the Self projects (SelfStream, SelfArchiver, SelfDashboard, and more). Built as a static export and hosted for free on GitHub Pages.

### Tech stack

| Area        | Technology |
|-------------|------------|
| Framework   | **Next.js 16** (App Router, `output: "export"`) |
| UI library  | **React 19** |
| Styling     | **Tailwind CSS 4** |
| Animation   | **Framer Motion 12** |
| 3D / WebGL  | **three.js** + **React Three Fiber** / **drei** |
| Smooth scroll | **Lenis** |
| Language    | **TypeScript 5** |

### Prerequisites

- **Node.js 20** (matches the CI)
- npm (ships with Node)

### Setup

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs on **http://localhost:3220**.

> **Why `--webpack`?**
> The scripts force the Webpack bundler (`next dev --webpack`, `next build --webpack`)
> because the default bundler **Turbopack** does not run reliably from a **network drive**
> (a mapped RAID volume here) — its file watching/caching breaks. Webpack is slower but
> stable on the network drive. If you work from a local SSD you can drop the flag in
> `package.json`.

### Build (static export)

```bash
npm run build
```

Produces the static export in the **`out/`** folder (also with `--webpack`).
Preview the build locally with `npm run start` (port 3220).

### Deployment

Fully automated — **no local build required**:

1. A push to `main` triggers the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. The action builds the static export in the cloud and publishes the `out/` folder to **GitHub Pages**.
3. The custom domain is set via [`public/CNAME`](public/CNAME) (**selfcoder.de**); GitHub provisions HTTPS.

You can also trigger it manually from the Actions tab (`workflow_dispatch`).

### License

MIT — see [LICENSE](LICENSE).
