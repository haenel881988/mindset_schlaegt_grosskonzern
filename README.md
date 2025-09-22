# Mindset schlägt Grosskonzern – Projekt

Dieses Repo enthält die Astro‑Site und ein Setup für visuelle Regressionstests mit BackstopJS (Playwright/Chromium).

## Visual Regression Tests (BackstopJS)

- Basis‑URL lokal: `http://127.0.0.1:4321`
- Engine: Playwright (Chromium)
- Viewports: Desktop 1440×900, Mobile 375×667
- Szenarien: `/`, `/ueber-mich`, `/bewerbung`, `/impressum`, `/datenschutz`, `/bewerbung/danke`
- Konfiguration: `backstop.json`

### Lokal ausführen

1) Dev‑Server starten (neues Terminal):

```bash
npm run dev
```

2) Referenz‑Screenshots erzeugen (erstmalig oder nach UI‑Änderungen):

```bash
npx backstop reference
```

3) Tests ausführen:

```bash
npm run test:visual
```

4) Änderungen akzeptieren (falls visuelle Änderungen gewollt sind):

```bash
npm run test:visual:approve
```

Backstop‑Berichte liegen unter `backstop_data/html_report` (lokal per Browser öffnen).

### Hinweis: Nur lokal, kein CI

Es gibt keinen GitHub‑Actions‑Workflow mehr für visuelle Regression. Tests werden ausschließlich lokal ausgeführt. Details siehe `docs/technisches/visuelle-regression-lokal.md`.

## Astro Commands

```bash
npm install           # Dependencies installieren
npm run dev           # Lokaler Dev‑Server (http://127.0.0.1:4321)
npm run build         # Produktionsbuild unter ./dist/
npm run preview       # Build lokal ansehen
```
