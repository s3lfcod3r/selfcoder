# AGENTS.md — selfcoder

Kurze Orientierung fuer KI-Assistenten (Bonsai/Claude). **Diese Datei zuerst lesen, nicht die grosse README.**
Zum Finden: `rg -n "BEGRIFF"`. Fuer Symbole: Serena `get_symbols_overview`/`find_symbol`. Grosse Dateien nur zeilenweise (`sed -n`).

## Typ & Stack

- Node/JS-TS: `package.json` (react, next)

## Bauen / Testen / Starten

```bash
npm run dev   # next dev --webpack --port 3220
npm run build   # next build --webpack
npm run lint   # eslint
npm run start   # next start --port 3220
```

## Struktur (oberste Ebenen)

- `.github/` — CI/Workflows
- `Logo/`
- `app/` — App-Code
- `components/`
- `lib/`
- `public/` — statische Dateien

---
*Automatisch erzeugt als Navigationshilfe. Bei Bedarf von Hand praeziser machen.*
