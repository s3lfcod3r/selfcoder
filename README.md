<div align="center">

<img src="public/logo-wide.png" alt="SelfCoder" width="240" />

**Developer portfolio for SelfCoder — a family of self-hosted tools.**<br>
*Entwickler-Portfolio für SelfCoder — eine Familie selbst gehosteter Tools.*

[![Build](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml/badge.svg)](https://github.com/s3lfcod3r/selfcoder/actions/workflows/deploy.yml)
![Version](https://img.shields.io/badge/version-0.1.0-33A78C)
[![License](https://img.shields.io/badge/license-All%20rights%20reserved-8A9CAA)](LICENSE)
![Web](https://img.shields.io/badge/web-Next.js%2016%20%2B%20React%2019-43D3AD)
![Deploy](https://img.shields.io/badge/deploy-GitHub%20Pages-6F95AD)
[![Live](https://img.shields.io/badge/live-selfcoder.de-1F7763)](https://selfcoder.de)

**[🇬🇧 English](#-english) · [🇩🇪 Deutsch](#-deutsch)**

📰 **What's new / Neuigkeiten** → [CHANGELOG.md](CHANGELOG.md)

</div>

---

<a id="-english"></a>
## 🇬🇧 English

Source of the portfolio website [selfcoder.de](https://selfcoder.de) — a dark, animated one-page site that showcases the Self projects (SelfStream, SelfArchiver, SelfDashboard, and more). Built as a static export and hosted for free on GitHub Pages.

### 📑 Table of contents

[Features](#en-features) · [Architecture](#en-architecture) · [Quick start](#en-quick-start) · [Deployment](#en-deployment) · [Tech stack](#en-tech-stack) · [Development](#en-development) · [Roadmap](#en-roadmap) · [License](#en-license)

<a id="en-features"></a>
### ✨ Features

- Dark, animated one-page site
- 3D / WebGL scenes (three.js + React Three Fiber)
- Smooth scrolling (Lenis)
- Project overview of the Self family
- Bilingual site (German / English)
- Static export for GitHub Pages

<a id="en-architecture"></a>
### 🧭 Architecture

- `app/` — Next.js App Router pages
- `components/` — reusable UI components
- `lib/` — project data (`projects.ts`) and translations (`i18n/`)
- `public/` — static assets (logo, CNAME)
- Static export to `out/` via `next build --webpack`

<a id="en-quick-start"></a>
### 🚀 Quick start

1. Requires **Node.js 20** (same as CI)
2. `npm install`
3. `npm run dev` → runs on **http://localhost:3220**

<a id="en-deployment"></a>
### 🌐 Deployment (GitHub Pages)

Fully automated — **no local build required**:

1. A push to `main` triggers the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. The action builds the static export in the cloud and publishes the `out/` folder to **GitHub Pages**.
3. The custom domain is set via [`public/CNAME`](public/CNAME) (**selfcoder.de**); GitHub provisions HTTPS.

You can also trigger it manually from the Actions tab (`workflow_dispatch`).

<a id="en-tech-stack"></a>
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

<a id="en-development"></a>
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

<a id="en-roadmap"></a>
### 🗺️ Roadmap

- [ ] TBD

<a id="en-license"></a>
### 📄 License

**🇬🇧 All rights reserved.** © 2026 s3lfcod3r / SelfCoder

You may install and use the software **privately and non-commercially** (e.g. in your home lab, via Docker or Unraid).

**Not permitted without written permission:** commercial use · copying · modifying · redistributing · incorporating into other projects (including closed source) · selling.

Details: [LICENSE](LICENSE)

---

<a id="-deutsch"></a>
## 🇩🇪 Deutsch

Das ist die Quelle der Portfolio-Website [selfcoder.de](https://selfcoder.de) — eine dunkle, animierte One-Page-Seite, die die Self-Projekte (SelfStream, SelfArchiver, SelfDashboard u. a.) vorstellt. Statisch gebaut und kostenlos über GitHub Pages gehostet.

### 📑 Inhaltsverzeichnis

[Funktionen](#de-funktionen) · [Architektur](#de-architektur) · [Schnellstart](#de-schnellstart) · [Deployment](#de-deployment) · [Tech-Stack](#de-tech-stack) · [Entwicklung](#de-entwicklung) · [Roadmap](#de-roadmap) · [Lizenz](#de-lizenz)

<a id="de-funktionen"></a>
### ✨ Funktionen

- Dunkle, animierte One-Page-Seite
- 3D / WebGL-Szenen (three.js + React Three Fiber)
- Smooth Scrolling (Lenis)
- Projektübersicht der Self-Familie
- Zweisprachige Seite (Deutsch / Englisch)
- Statischer Export für GitHub Pages

<a id="de-architektur"></a>
### 🧭 Architektur

- `app/` — Seiten der Next.js App Router
- `components/` — wiederverwendbare UI-Komponenten
- `lib/` — Projektdaten (`projects.ts`) und Übersetzungen (`i18n/`)
- `public/` — statische Assets (Logo, CNAME)
- Statischer Export nach `out/` über `next build --webpack`

<a id="de-schnellstart"></a>
### 🚀 Schnellstart

1. Erfordert **Node.js 20** (wie in der CI)
2. `npm install`
3. `npm run dev` → läuft auf **http://localhost:3220**

<a id="de-deployment"></a>
### 🌐 Deployment (GitHub Pages)

Vollautomatisch — **kein lokaler Build nötig**:

1. Push auf `main` löst den GitHub-Actions-Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml) aus.
2. Die Action baut den statischen Export in der Cloud und veröffentlicht den Ordner `out/` auf **GitHub Pages**.
3. Die eigene Domain wird über [`public/CNAME`](public/CNAME) gesetzt (**selfcoder.de**), HTTPS stellt GitHub bereit.

Manuelles Auslösen ist über den Actions-Tab (`workflow_dispatch`) möglich.

<a id="de-tech-stack"></a>
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

<a id="de-entwicklung"></a>
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

<a id="de-roadmap"></a>
### 🗺️ Roadmap

- [ ] TBD

<a id="de-lizenz"></a>
### 📄 Lizenz

**🇩🇪 Alle Rechte vorbehalten.** © 2026 s3lfcod3r / SelfCoder

Du darfst die Software **privat und nicht-kommerziell** installieren und benutzen (z. B. im Homelab, über Docker oder Unraid).

**Ohne schriftliche Erlaubnis verboten:** kommerzielle Nutzung · Kopieren · Verändern · Weitergeben · Einbauen in eigene Projekte (auch Closed Source) · Verkaufen.

Details: [LICENSE](LICENSE)
