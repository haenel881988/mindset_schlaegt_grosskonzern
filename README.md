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

### GitHub Actions

Der Workflow `.github/workflows/visual-regression.yml` läuft bei Push & PR auf `main`:
- Installiert Abhängigkeiten und Playwright Chromium
- Build der Seite und Start eines statischen Servers (`dist` auf Port 4321)
- Erstellt Referenzen, falls keine vorhanden
- Führt `backstop test` aus und lädt den HTML‑Report als Artefakt hoch, wenn Diffs auftreten

## Astro Commands

```bash
npm install           # Dependencies installieren
npm run dev           # Lokaler Dev‑Server (http://127.0.0.1:4321)
npm run build         # Produktionsbuild unter ./dist/
npm run preview       # Build lokal ansehen
```
