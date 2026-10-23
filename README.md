<div align="center">

<img src="public/logo-wide.png" alt="SelfCoder" width="240" />

**Developer portfolio for SelfCoder — a family of self-hosted, open-source tools.**<br>
*Entwickler-Portfolio für SelfCoder — eine Familie self-hosted, quelloffener Tools.*

[![Build](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml/badge.svg)](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml)
[![Version 0.1.0](https://img.shields.io/badge/Version-0.1.0-33A78C.svg)](package.json)
[![License: MIT](https://img.shields.io/badge/License-MIT-8A9CAA.svg)](LICENSE)
[![Web](https://img.shields.io/badge/Web-Next.js%2016%20+%20React%2019-43D3AD.svg)](README.md)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-6F95AD.svg)](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml)
[![Live](https://img.shields.io/badge/live-selfcoder.de-0ea5e9.svg)](https://selfcoder.de)

**[🇬🇧 English](#-english) · [🇩🇪 Deutsch](#-deutsch)**

📰 **What's new / Neuigkeiten** → [CHANGELOG.md](CHANGELOG.md)

</div>

---
<a id="-english"></a>
## 🇬🇧 English

Source of the portfolio website [selfcoder.de](https://selfcoder.de) — a dark, animated one-page site that showcases the Self projects (SelfStream, SelfArchiver, SelfDashboard, and more). Built as a static export and hosted for free on GitHub Pages.

### 📑 Table of contents

- [Features](#-features)
- [Architecture](#-architecture)
- [Quick start](#-quick-start)
- [Deployment](#-deployment)
- [Tech stack](#-tech-stack)
- [Development](#-development)
- [License](#-license)

### ✨ Features

- Dark, animated one-page site
- 3D / WebGL scenes (three.js + React Three Fiber)
- Smooth scrolling (Lenis)
- Project overview of the Self family
- Static export for GitHub Pages

### 🧭 Architecture

- `app/` — Next.js App Router pages
- `components/` — reusable UI components
- `lib/` — helpers and utilities
- `public/` — static assets (logo, CNAME)
- Static export to `out/` via `next build --webpack`

### 🚀 Quick start

1. Requires **Node.js 20** (same as CI)
2. `npm install`
3. `npm run dev` → runs on **http://localhost:3220**

### 🌐 Deployment (GitHub Pages)

Fully automated — **no local build required**:

1. A push to `main` triggers the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. The action builds the static export in the cloud and publishes the `out/` folder to **GitHub Pages**.
3. The custom domain is set via [`public/CNAME`](public/CNAME) (**selfcoder.de**); GitHub provisions HTTPS.

You can also trigger it manually from the Actions tab (`workflow_dispatch`).

### 🧱 Tech stack

| Area        | Technology |
|-------------|------------|
| Framework   | **Next.js 16** (App Router, `output: "export"`) |
| UI library  | **React 19** |
| Styling     | **Tailwind CSS 4** |
| Animation   | **Framer Motion 12** |
| 3D / WebGL  | **three.js** + **React Three Fiber** / **drei** |
| Smooth scroll | **Lenis** |
| Language    | **TypeScript 5** |

### 🛠️ Development

```bash
npm run build
```

Produces the static export in the **`out/`** folder (also with `--webpack`).
Preview the build locally with `npm run start` (port 3220).

> **Why `--webpack`?**
> The scripts force the Webpack bundler (`next dev --webpack`, `next build --webpack`)
> because the default bundler **Turbopack** does not run reliably from a **network drive**
> (a mapped RAID volume here) — its file watching/caching breaks. Webpack is slower but
> stable on the network drive. If you work from a local SSD you can drop the flag in
> `package.json`.

### 🗺️ Roadmap

- [ ] TBD

### 📄 License

MIT — see [LICENSE](LICENSE).

---

<a id="-deutsch"></a>
## 🇩🇪 Deutsch

Das ist die Quelle der Portfolio-Website [selfcoder.de](https://selfcoder.de) — eine dunkle, animierte One-Page-Seite, die die Self-Projekte (SelfStream, SelfArchiver, SelfDashboard u. a.) vorstellt. Statisch gebaut und kostenlos über GitHub Pages gehostet.

### 📑 Inhaltsverzeichnis

- [Features](#-features-deutsch)
- [Architektur](#-architektur-deutsch)
- [Schnellstart](#-schnellstart-deutsch)
- [Deployment](#-deployment-deutsch)
- [Tech-Stack](#-tech-stack-deutsch)
- [Entwicklung](#-entwicklung-deutsch)
- [Lizenz](#-lizenz-deutsch)

### ✨ Features

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

1. Push auf `main` löst den GitHub-Actions-Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) aus.
2. Die Action baut den statischen Export in der Cloud und veröffentlicht den Ordner `out/` auf **GitHub Pages**.
3. Die eigene Domain wird über [`public/CNAME`](public/CNAME) gesetzt (**selfcoder.de**), HTTPS stellt GitHub bereit.

Manuelles Auslösen ist über den Actions-Tab (`workflow_dispatch`) möglich.

### 🧱 Tech-Stack

| Bereich        | Technologie |
|----------------|-------------|
| Framework      | **Next.js 16** (App Router, `output: "export"`) |
| UI-Library     | **React 19** |
| Styling        | **Tailwind CSS 4** |
| Animation      | **Framer Motion 12** |
| 3D / WebGL     | **three.js** + **React Three Fiber** / **drei** |
| Smooth-Scroll  | **Lenis** |
| Sprache        | **TypeScript 5** |

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

### 🌐 Deployment (GitHub Pages)

Fully automated — **no local build required**:

1. A push to `main` triggers the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. The action builds the static export in the cloud and publishes the `out/` folder to **GitHub Pages**.
3. The custom domain is set via [`public/CNAME`](public/CNAME) (**selfcoder.de**); GitHub provisions HTTPS.

You can also trigger it manually from the Actions tab (`workflow_dispatch`).

### 🧱 Tech stack

| Area        | Technology |
|-------------|------------|
| Framework   | **Next.js 16** (App Router, `output: "export"`) |
| UI library  | **React 19** |
| Styling     | **Tailwind CSS 4** |
| Animation   | **Framer Motion 12** |
| 3D / WebGL  | **three.js** + **React Three Fiber** / **drei** |
| Smooth scroll | **Lenis** |
| Language    | **TypeScript 5** |

### 🛠️ Development

```bash
npm run build
```

Produces the static export in the **`out/`** folder (also with `--webpack`).
Preview the build locally with `npm run start` (port 3220).

> **Why `--webpack`?**
> The scripts force the Webpack bundler (`next dev --webpack`, `next build --webpack`)
> because the default bundler **Turbopack** does not run reliably from a **network drive**
> (a mapped RAID volume here) — its file watching/caching breaks. Webpack is slower but
> stable on the network drive. If you work from a local SSD you can drop the flag in
> `package.json`.

### 🗺️ Roadmap

- [ ] TBD

### 📄 License

MIT — see [LICENSE](LICENSE).

---
