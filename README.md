<div align="center">

<img src="public/logo-wide.png" alt="SelfCoder logo" width="240" />

**Developer portfolio for SelfCoder — a family of self-hosted tools.**<br>
*Entwickler-Portfolio für SelfCoder — eine Familie selbstgehosteter Tools.*

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

Source of the portfolio website [selfcoder.de](https://selfcoder.de) — a dark, animated one-page site that showcases the Self projects (SelfStream, SelfArchiver, SelfDashboard, and more). Built as a static export and hosted for free on GitHub Pages. It is a showcase, not an app: no backend, no login, no data storage.

Part of the **Self** family (SelfMailer, SelfStream, SelfArchiver, SelfDashboard …) — same design system, same style.

> **TL;DR** — Next.js static export · 12 languages · 3D / WebGL · GitHub Pages · selfcoder.de

### 📑 Table of contents

[Features](#en-features) · [Architecture](#en-architecture) · [Quick start](#en-quick-start) · [Deployment](#en-deployment) · [Security](#en-security) · [Tech stack](#en-tech-stack) · [Development](#en-development) · [Roadmap](#en-roadmap)

<a id="en-features"></a>

### ✨ Features

**🎨 Site**
- Dark, **animated one-page site**
- **3D / WebGL scenes** (three.js + React Three Fiber)
- **Smooth scrolling** (Lenis)
- **Project overview** of the Self family

**🌍 Platform**
- **12 languages** (de, en, fr, es, it, nl, pl, pt, sv, da, cs, el)
- **Static export** for GitHub Pages
- Privacy page (`/datenschutz`)

<a id="en-architecture"></a>

### 🧭 Architecture

```text
app/          Next.js App Router pages (incl. /datenschutz)
components/   reusable UI components (Hero, Projects, Nav, ...)
lib/          project data (projects.ts) and translations (i18n/)
public/       static assets (logo, OG image, CNAME)
      │
      ▼  next build --webpack
out/          static export → GitHub Pages → selfcoder.de
```

<a id="en-quick-start"></a>

### 🚀 Quick start

Requires **Node.js 20** (same as CI).

```bash
npm install
npm run dev
```

Open `http://localhost:3220` → the site runs locally.

<a id="en-deployment"></a>

### 🌐 Deployment (GitHub Pages)

Fully automated — **no local build required**:

1. A push to `main` triggers the GitHub Actions workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. The action builds the static export in the cloud and publishes the `out/` folder to **GitHub Pages**.
3. The custom domain is set via [`public/CNAME`](public/CNAME) (**selfcoder.de**); GitHub provisions HTTPS.

You can also trigger it manually from the Actions tab (`workflow_dispatch`).

<a id="en-security"></a>

### 🛡️ Security

- **Static site only** — no server code, no database, no login, no forms that send data
- **Content Security Policy** as a meta tag: only own resources (`default-src 'self'`), no framing (`frame-ancestors 'none'`), `upgrade-insecure-requests`
- **Fonts are bundled at build time** (`next/font`) — no requests to external font servers at runtime
- **No tracking or advertising cookies**; hosting details (GitHub Pages, server logs) are explained on the privacy page
- **HTTPS** is provided by GitHub Pages for the custom domain
- **Deliberate trade-offs** (documented): `script-src` / `style-src` allow `'unsafe-inline'`, because a static export cannot set nonces

Security update history → [CHANGELOG.md](CHANGELOG.md) (entries marked 🔒).

<a id="en-tech-stack"></a>

### 🧱 Tech stack

| Part | Tech |
|---|---|
| Framework | **Next.js 16** (App Router, `output: "export"`) · **React 19** · **TypeScript 5** |
| Styling & motion | **Tailwind CSS 4** · **Framer Motion 12** · **Lenis** |
| 3D / WebGL | **three.js** · **React Three Fiber** · **drei** |
| Deploy | GitHub Actions · GitHub Pages |

<a id="en-development"></a>

### 🛠️ Development

```bash
npm run build
npm run start
```

`npm run build` produces the static export in the **`out/`** folder (also with `--webpack`); `npm run start` previews it locally on port 3220.

**Lint:**

```bash
npm run lint
```

> **💡 Why `--webpack`?**
> The scripts force the Webpack bundler (`next dev --webpack`, `next build --webpack`)
> because the default bundler **Turbopack** does not run reliably from a **network drive**
> (a mapped RAID volume here) — its file watching/caching breaks. Webpack is slower but
> stable on the network drive. If you work from a local SSD you can drop the flag in
> `package.json`.

<a id="en-roadmap"></a>

### 🗺️ Roadmap

- [x] Static export + automatic deploy to GitHub Pages
- [x] 12 languages
- [x] Content Security Policy, privacy page
- [x] README in Self standard

<p align="right"><a href="#-english">⬆ back to top</a></p>

---

<a id="-deutsch"></a>

## 🇩🇪 Deutsch

Das ist die Quelle der Portfolio-Website [selfcoder.de](https://selfcoder.de) — eine dunkle, animierte One-Page-Seite, die die Self-Projekte (SelfStream, SelfArchiver, SelfDashboard u. a.) vorstellt. Statisch gebaut und kostenlos über GitHub Pages gehostet. Sie ist ein Schaufenster, keine App: kein Backend, keine Anmeldung, keine Datenspeicherung.

Teil der **Self**-Familie (SelfMailer, SelfStream, SelfArchiver, SelfDashboard …) — gleiches Design-System, gleicher Stil.

> **Kurz** — statischer Next.js-Export · 12 Sprachen · 3D / WebGL · GitHub Pages · selfcoder.de

### 📑 Inhaltsverzeichnis

[Funktionen](#de-funktionen) · [Architektur](#de-architektur) · [Schnellstart](#de-schnellstart) · [Deployment](#de-deployment) · [Sicherheit](#de-sicherheit) · [Tech-Stack](#de-tech-stack) · [Entwicklung](#de-entwicklung) · [Roadmap](#de-roadmap)

<a id="de-funktionen"></a>

### ✨ Funktionen

**🎨 Seite**
- Dunkle, **animierte One-Page-Seite**
- **3D-/WebGL-Szenen** (three.js + React Three Fiber)
- **Weiches Scrollen** (Lenis)
- **Projektübersicht** der Self-Familie

**🌍 Plattform**
- **12 Sprachen** (de, en, fr, es, it, nl, pl, pt, sv, da, cs, el)
- **Statischer Export** für GitHub Pages
- Datenschutzseite (`/datenschutz`)

<a id="de-architektur"></a>

### 🧭 Architektur

```text
app/          Seiten des Next.js App Routers (inkl. /datenschutz)
components/   wiederverwendbare UI-Bausteine (Hero, Projects, Nav, ...)
lib/          Projektdaten (projects.ts) und Übersetzungen (i18n/)
public/       statische Dateien (Logo, OG-Bild, CNAME)
      │
      ▼  next build --webpack
out/          statischer Export → GitHub Pages → selfcoder.de
```

<a id="de-schnellstart"></a>

### 🚀 Schnellstart

Erfordert **Node.js 20** (wie in der CI).

```bash
npm install
npm run dev
```

`http://localhost:3220` öffnen → die Seite läuft lokal.

<a id="de-deployment"></a>

### 🌐 Deployment (GitHub Pages)

Vollautomatisch — **kein lokaler Build nötig**:

1. Ein Push auf `main` startet den GitHub-Actions-Workflow [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml).
2. Die Action baut den statischen Export in der Cloud und veröffentlicht den Ordner `out/` auf **GitHub Pages**.
3. Die eigene Domain wird über [`public/CNAME`](public/CNAME) gesetzt (**selfcoder.de**), HTTPS stellt GitHub bereit.

Manuell auslösen geht über den Actions-Tab (`workflow_dispatch`).

<a id="de-sicherheit"></a>

### 🛡️ Sicherheit

- **Nur eine statische Seite** — kein Server-Code, keine Datenbank, keine Anmeldung, keine Formulare, die Daten senden
- **Content Security Policy** als Meta-Tag: nur eigene Ressourcen (`default-src 'self'`), kein Einbetten in fremde Seiten (`frame-ancestors 'none'`), `upgrade-insecure-requests`
- **Schriften werden beim Bauen mitgeliefert** (`next/font`) — zur Laufzeit keine Anfragen an fremde Schrift-Server
- **Keine Tracking- oder Werbe-Cookies**; Hosting-Details (GitHub Pages, Server-Logs) erklärt die Datenschutzseite
- **HTTPS** stellt GitHub Pages für die eigene Domain bereit
- **Bewusste Kompromisse** (dokumentiert): `script-src` / `style-src` erlauben `'unsafe-inline'`, weil ein statischer Export keine Nonces setzen kann

Verlauf der Sicherheitsupdates → [CHANGELOG.md](CHANGELOG.md) (Einträge mit 🔒).

<a id="de-tech-stack"></a>

### 🧱 Tech-Stack

| Teil | Technik |
|---|---|
| Framework | **Next.js 16** (App Router, `output: "export"`) · **React 19** · **TypeScript 5** |
| Styling & Animation | **Tailwind CSS 4** · **Framer Motion 12** · **Lenis** |
| 3D / WebGL | **three.js** · **React Three Fiber** · **drei** |
| Deploy | GitHub Actions · GitHub Pages |

<a id="de-entwicklung"></a>

### 🛠️ Entwicklung

```bash
npm run build
npm run start
```

`npm run build` erzeugt den statischen Export im Ordner **`out/`** (ebenfalls mit `--webpack`); `npm run start` zeigt ihn lokal auf Port 3220 an.

**Lint:**

```bash
npm run lint
```

> **💡 Warum `--webpack`?**
> Die Skripte erzwingen den Webpack-Bundler (`next dev --webpack`, `next build --webpack`),
> weil der Standard-Bundler **Turbopack** auf einem **Netzlaufwerk** (hier ein gemapptes
> RAID-Laufwerk) nicht zuverlässig läuft — er bricht beim Datei-Watching/Caching ab.
> Webpack ist langsamer, funktioniert auf dem Netzlaufwerk aber stabil. Wer lokal von
> einer SSD aus arbeitet, kann das Flag in `package.json` entfernen.

<a id="de-roadmap"></a>

### 🗺️ Roadmap

- [x] Statischer Export + automatisches Deployment auf GitHub Pages
- [x] 12 Sprachen
- [x] Content Security Policy, Datenschutzseite
- [x] README nach Self-Standard

<p align="right"><a href="#-deutsch">⬆ nach oben</a></p>

---

## ⚖️ Lizenz / License

**🇩🇪 Alle Rechte vorbehalten.** © 2026 s3lfcod3r / SelfCoder

Du darfst die Software **privat und nicht-kommerziell** installieren und benutzen (z. B. im Homelab, über Docker oder Unraid).

**Ohne schriftliche Erlaubnis verboten:** kommerzielle Nutzung · Kopieren · Verändern · Weitergeben · Einbauen in eigene Projekte (auch Closed Source) · Verkaufen.

Details: [LICENSE](LICENSE)

**🇬🇧 All rights reserved.** © 2026 s3lfcod3r / SelfCoder

You may install and use the software **privately and non-commercially** (e.g. in your home lab, via Docker or Unraid).

**Not permitted without written permission:** commercial use · copying · modifying · redistributing · incorporating into other projects (including closed source) · selling.

Details: [LICENSE](LICENSE)

---

---

<div align="center">

**SelfCoder** · part of the Self family · Teil der Self-Familie<br>
made with 💻 for self-hosting

</div>
