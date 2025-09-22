# Visuelle Regression – nur lokal (kein CI)

Dieser Leitfaden beschreibt, wie du die visuellen Regressionstests ausschließlich lokal ausführst. Es gibt KEINEN GitHub Actions Workflow mehr für diesen Zweck.

## Voraussetzungen
- Node.js 20
- Abhängigkeiten installiert: `npm ci`
- Playwright Chromium installiert: `npx playwright install chromium`

## Standardlauf (PowerShell)
```powershell
npm run build
npx http-server ./dist -p 4321 -a 127.0.0.1
npx backstop test --configPath=backstop.json
```

- HTML-Report: `backstop_data/html_report/index.html`
- Testbilder/Diffs: `backstop_data/bitmaps_test/<timestamp>/`

## Referenzen aktualisieren (nur wenn Änderungen beabsichtigt sind)
```powershell
npx backstop reference --configPath=backstop.json
```

## Hinweise & Troubleshooting
- Stelle sicher, dass Port `4321` frei ist.
- Wenn der Server schon läuft, kannst du den Test direkt ausführen.
- `backstop.json` ist so konfiguriert, dass `selectors: ["document"]` verwendet wird – das passt zu den existierenden Referenz-Dateinamen.
- Captcha-/dynamische Elemente werden in `backstop_data/engine_scripts/onReady.cjs` ausgeblendet.

## Was ausdrücklich NICHT passiert
- Kein Ausführen in GitHub Actions oder bei PRs.
- Kein Einfluss auf `npm run build`, Vercel oder Deployments.
