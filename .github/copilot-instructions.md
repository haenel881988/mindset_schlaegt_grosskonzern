## Copilot Projekt-Instruktionen – Mindset schlägt Grosskonzern

Ziel: Diese Codebasis liefert eine inhaltlich getriebene Landingpage (Offer „Operation Zündkapsel“) mit Astro 5, MDX-Content Collection & Vercel Adapter Deployment.

Leitbild: "docs\leitbild_mission.md"

### Architektur / Struktur
- `astro.config.mjs`: Enthält Integrationen: `@astrojs/vercel`, `@astrojs/tailwind`, `@astrojs/sitemap`, `@astrojs/mdx`. Kein `output: 'server'` gesetzt (statischer Build + Vercel Adapter).
- Content liegt unter `src/content/pages/` (MDX). Aktuelle Startseite: `index.mdx` (Frontmatter mit SEO Feldern: `title`, `description`, `metaDescription`, `focusKeyword`, `draft`, `date`).
- Routing-Bridge: `src/pages/index.astro` importiert direkt die MDX-Datei und rendert sie in `MainLayout`.
- Layout: `src/layouts/MainLayout.astro` minimal, rendert `<slot />` und setzt `<title>` / `<meta name="description">`.
- Komponenten: `src/components/layout/SectionWrapper.astro` für semantisch/visuelle Sektionen (variantenbasiert), `src/components/ui/Card.astro` für modulare Info-Blöcke.

### Wichtige Besonderheiten
- Startseite NICHT via `getEntry()`, sondern direkter Import: `import IndexContent from '../content/pages/index.mdx'` (Fallback nach Lookup-Problemen / Konflikt mit ehemaliger `index.md`). Bei Migration zurück zu `getEntry`: sicherstellen, dass keine konkurrierende `index.md` entsteht und Content-Schema korrekt registriert ist.
- Frontmatter Feld `slug` wurde entfernt – Routing erfolgt ausschließlich über `pages/index.astro`.
- Tailwind ist konfiguriert: `tailwind.config.mjs` mit korrektem `content`-Array (einschließlich MD/MDX). Frühere Hinweise auf eine fehlende Config sind obsolet.
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

---

## Iterativer Workflow mit Copilot (Validieren → Planen → Umsetzen → Prüfen → Zusammenfassen)

Dieser Workflow ist verbindlich, um schnelle Schleifen zu ermöglichen und Missverständnisse früh zu eliminieren.

1) Validieren (Pflicht vor Umsetzung)
- Copilot prüft eingehende Aufgaben zunächst auf Unklarheiten und antwortet ausschließlich mit:
	- Offene Punkte (max. 5 präzise Fragen)
	- Geplante Annahmen (wenn keine Antwort möglich; max. 5, mit Begründung)
	- Geplanter Ablauf (3–7 Schritte)
- Umsetzung beginnt erst nach Bestätigung – oder wenn der User explizit „autonom fortfahren“ schreibt.

2) Planen
- Aufgaben werden in eine To‑do‑Liste überführt, genau 1 Item ist „in‑progress“.
- Abhängigkeiten/Dateipfade/Contracts werden kurz notiert (Inputs/Outputs, Fehlerbilder).

3) Umsetzen (kleine, sichere Schritte)
- Änderungen minimal-invasiv, nur betroffene Dateien; keine ungebetenen Refactors.
- Nach jedem bedeutenden Schritt: kurze Statusmeldung und nächster Schritt.

4) Prüfen (Quality Gates)
- Build: `npm run build` und Fehler beheben.
- Lint/Typecheck (falls vorhanden), Smoke‑Test (Startseite rendert, keine 500er).
- Bei neuen/angepassten Komponenten: kurze Edge‑Cases nennen.

5) Zusammenfassen
- Was wurde geändert (Dateien, Schlüsselstellen), wie testen, offener Rest/Nächstes.

### Prompt‑Vorlage nutzen
- Für Aufgaben, die zuerst validiert werden sollen, verwende die Vorlage: `docs/prompting/templates/prompt-validation.md`.
- Inhalt kurz kopieren, „Aufgabe / Erwartungen / Kontext“ ausfüllen; Copilot antwortet gemäß Schritt 1.

### Definition of Done (DoD)
- [ ] Akzeptanzkriterien erfüllt (explizit im Prompt genannt)
- [ ] Build sauber (`npm run build`), keine neuen Warnungen/Fehler
- [ ] Keine Breaking Changes (Routing, Imports, öffentliche Props)
- [ ] Änderungen dokumentiert (Kommentar in Komponenten-Header, wenn API/Props erweitert)
- [ ] Kurze Test-/Smoke‑Anleitung im Abschluss enthalten

### Kommunikationsregeln
- Klar trennen: Editor‑Themen (Syntax‑Highlighting) vs. Runtime/Rendering.
- Pfade und Dateinamen immer in Backticks nennen (z. B. `src/content/pages/index.mdx`).
- Wenn Annahmen getroffen werden, müssen sie explizit gelistet und markiert werden.

### MDX Autorennotiz
- In MDX wird Markdown innerhalb „roher“ HTML‑Tags (z. B. `<div>`) nicht geparst. Lösung: 
	- Entweder reines Markdown direkt als Kind von Komponenten (ohne umschließendes `<div>`),
	- oder innerhalb eines HTML‑Wrappers konsequent HTML‑Tags (`<h2>`, `<p>`, `<strong>`) verwenden.

### Hinweis Tailwind Config
- Es existiert `tailwind.config.mjs` mit korrekter `content`‑Konfiguration (MD/MDX eingeschlossen). Frühere Hinweise auf eine fehlende Config sind obsolet.

### Validierungs‑Gate (HARTE STOPPREGEL)
- Vor JEDER Umsetzung (Code erstellen/ändern, Dateien anlegen, Builds starten) erfolgt zwingend eine Validierung gemäß Schritt 1.
- Erste Antwort enthält NUR Validierungsinhalte, KEINE Umsetzung, KEINE Datei‑Änderungen.
- Umsetzung erst nach expliziter Freigabe durch den User mit einem der Trigger: „autonom fortfahren“, „OK, umsetzen“, „Bestätigt, leg los“.
- Ausnahme nur bei rein erklärenden Fragen (reiner Text ohne Code/Änderungen). Bei Zweifel wird validiert.

### Antwort‑Vertrag – Erste Nachricht (Format MUSS eingehalten werden)
1) Offene Punkte (max. 5)
2) Geplante Annahmen (falls nötig; max. 5, mit Begründung)
3) Geplanter Ablauf (3–7 Schritte)
4) Nächster Schritt nach Freigabe

Beispiel (Kurzform):
- Offene Punkte: 1) … 2) …
- Annahmen: A1) …
- Plan: P1) … P2) …
- Warte auf „autonom fortfahren“ oder konkrete Antworten.

### Aufgaben‑Klassifikation (vor dem Plan)
- Einordnen in: „Erklären/Beraten“ | „Code/Änderung“ | „Debuggen“ | „Recherche“.
- Bei „Erklären/Beraten“: direkt beantworten, aber kurz bestätigen, dass keine Umsetzung erfolgt.
- Bei „Code/Änderung“: striktes Validierungs‑Gate anwenden.

### Start-/Stop‑Trigger
- Start (Umsetzung erlauben): „autonom fortfahren“, „leg los“, „bitte jetzt umsetzen“, „OK, umsetzen“.
- Stop (nur diskutieren): „nur erklären“, „keine Umsetzung“, „erst validieren“.

### Tool‑Nutzung bis zur Freigabe
- Erlaubt: Lesen/Analysieren (Dateien anzeigen, suchen, statisch prüfen).
- NICHT erlaubt: `apply_patch`, Dateien erzeugen/ändern, Builds starten – bis zur expliziten Freigabe.

### Priorität: Frage zuerst beantworten
- Wenn die Nutzeranfrage sichtbar rein informativ ist (z. B. „Warum wird Markdown in `<div>` nicht geparst?“), antworte direkt kompakt auf die Frage.
- Nur wenn explizit eine Umsetzung verlangt wird, wechsle nach Validierung in die Umsetzung.
