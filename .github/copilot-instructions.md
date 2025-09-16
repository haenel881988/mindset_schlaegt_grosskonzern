## Copilot Projekt-Instruktionen – Mindset schlägt Grosskonzern

Ziel: Diese Codebasis liefert eine inhaltlich getriebene Landingpage (Offer „Operation Zündkapsel“) mit Astro 5, MDX-Content Collection & Vercel Adapter Deployment.

### Architektur / Struktur
- `astro.config.mjs`: Enthält Integrationen: `@astrojs/vercel`, `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/mdx`. Kein `output: 'server'` gesetzt (statischer Build + Vercel Adapter).
- Content liegt unter `src/content/pages/` (MDX). Aktuelle Startseite: `index.mdx` (Frontmatter mit SEO Feldern: `title`, `description`, `metaDescription`, `focusKeyword`, `draft`, `date`).
- Routing-Bridge: `src/pages/index.astro` importiert direkt die MDX-Datei und rendert sie in `MainLayout`.
- Layout: `src/layouts/MainLayout.astro` minimal, rendert `<slot />` und setzt `<title>` / `<meta name="description">`.
- Komponenten: `src/components/layout/SectionWrapper.astro` für semantisch/visuelle Sektionen (variantenbasiert), `src/components/ui/Card.astro` für modulare Info-Blöcke.

### Wichtige Besonderheiten
- Startseite NICHT via `getEntry()`, sondern direkter Import: `import IndexContent from '../content/pages/index.mdx'` (Fallback nach Lookup-Problemen / Konflikt mit ehemaliger `index.md`). Bei Migration zurück zu `getEntry`: sicherstellen, dass keine konkurrierende `index.md` entsteht und Content-Schema korrekt registriert ist.
- Frontmatter Feld `slug` wurde entfernt – Routing erfolgt ausschließlich über `pages/index.astro`.
- Tailwind ist installiert, aber es existiert (noch) KEINE `tailwind.config.js`; Warnungen im Build weisen auf fehlendes `content`-Array hin. Wenn Utility-Klassen ausgereizt werden sollen: Config anlegen.
- Content Collections: Ein Schema wurde (zeitweise) unter `src/content/config.ts` erstellt; Standardpfad wäre `src/content.config.ts`. Vor künftiger Nutzung von `getEntry` Schema-Datei korrekt verschieben.

### Konventionen / Patterns
- MDX importiert Astro-Komponenten direkt: `import SectionWrapper from "../../components/layout/SectionWrapper.astro"`.
- Hero-Struktur nutzt semantische Markdown Headings im MDX, aber innerhalb eines `<div>`-Wrappers – falls Umstrukturierung: H1 bleibt eindeutig nur einmal auf Seite.
- Abschnittsvarianten (`variant` Prop) dienen der thematischen Hervorhebung; neue Varianten in `variantClasses` (SectionWrapper) ergänzen.
- Cards: Optionales `title` Prop, Inhalt über `<slot />`, für Wiederverwendung minimal halten.

### Typische Aufgaben für Automatisierung
- Neue Landing- oder Offer-Varianten: Kopiere `index.mdx` Vorlage, passe Frontmatter & Sektionen an, sichere unique Dateiname (z.B. `offer-zundkapsel.mdx`).
- SEO Erweiterung: Ergänze Open Graph / Twitter Tags im `MainLayout.astro`.
- Konsistenz: Entferne veraltete Dubletten (`index.md`) bevor du Routing oder Collections anfasst.

### Build & Deployment
- Dev: `npm run dev` (Port Auto-Fallback, Standard 4321). Achte auf Warnungen zu Tailwind Content Scan.
- Build: `npm run build` → Statische Ausgabe + `.vercel/output` durch Adapter.
- Audit Vulnerability (path-to-regexp über @vercel/routing-utils): aktuell dokumentiert; kein automatischer `--force` Fix ohne Review.

### Do & Don't für AI Änderungen
**Do:**
- Prüfe vor Pfadanpassungen, ob relative Importe MDX ↔ Komponenten noch stimmen (../../ vs ../).
- Entferne doppelte Content-Dateien bei gleicher Route.
- Dokumentiere neue Props bei Erweiterung von `SectionWrapper` oder `Card` direkt im Komponenten-Header.

**Don't:**
- Kein unreflektiertes Reintroduzieren von `slug: "/"` in mehreren Dateien.
- Nicht gleichzeitig `getEntry` und direkten MDX-Import mischen ohne klaren Migrationsplan.
- Keine Blind-Anwendung von `npm audit fix --force` (Breaking Risks durch Adapter Downgrade).

### Erweiterungs-Backlog (nur falls beauftragt umsetzen)
1. Tailwind Config mit Content-Array hinzufügen.
2. SEO Meta (OG / Twitter) konsolidieren.
3. Collections Schema in `src/content.config.ts` finalisieren & zurück auf `getEntry` migrieren.
4. Tests (z.B. Playwright) für Render Smoke der Startseite.

Ende – Bei Unklarheiten zuerst diese Datei erweitern statt implizite Konventionen zu erfinden.
