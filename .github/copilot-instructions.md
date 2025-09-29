## Copilot Projekt-Instruktionen – Mindset schlägt Grosskonzern



### Business Konzept

**Single Source of truth** ist folgendes Dokument:
***Pfad: "docs\business_konzept.md"***

**Social Proof**

Aktuell: Keine Kunden vorhanden
Proof of Concept dafür vorhanden.



# Generelles

Negative Konotionen sind strikt verboten! Lieber keine Sätze als ein negativ besetzte konotion.

***Negatives Beispiel:***
Du bekommst kein Mut-Mach-Coaching...

Stattdessen gar kein Satz einfügen, vor der eigentlichen Botschaft. Oder zumindest positiv formulieren:
Du bekommst nicht nur  ein Mut-Mach-Coaching - sondern auch eine strukturierte und logische Vorgehensweise.



Du = KI
Ich = Simon

Es kann vorkommen, dass die KI, Simon, mit der KI verwechselt. Daher muss zwingend und immer klar sein, dass wenn ich du schreibe, die KI gemeint ist.
Wenn ich ich schreibe, bin ich, Simon gemeint.

Darüber hinaus interessiert sich Simon für die technische Umsetzung nicht. Simon will eine moderne, schlichte, premium Website.
Generell soll die KI davon ausgehen, wenn Simon die KI um Feedback bittet, ist immer der Inhalt gemeint. Also Inhalt meint Simon damit, ist die Website visuell ansprechend? oder ist der Text z.B.: Landingpage, ideal, oder gibt es gewisse Anpassungen / Verbesserungen?

Simon will, dass die KI mit Simon zuerst über das Problem spricht, mit Simon Brainstormt. Die KI soll nicht einfach beginnen mit der Arbeit, sondern evaluieren, was eigentlich Simon hinter der Anweisung genau meint.

Wenn Simon nach unklarem Feedback fragt, muss die KI immer und solange nachfragen, bis die KI weiss, was Simon meint.


### Content- & Verkaufsstrategie (Funnel)

1.  **Lead-Magnet-Funnel**: Die primäre Strategie ist NICHT der Direktverkauf. Die Website nutzt einen Lead-Magnet-Funnel.
    *   **Schritt 1: Landingpage (`src/content/pages/index.mdx`)**: Das Ziel ist, Besucher durch eine authentische, emotionale Geschichte (basierend auf `docs/content/pages/index.md`) dazu zu bewegen, ihre E-Mail-Adresse im Austausch für eine kostenlose Fallstudie zu hinterlassen.
    *   **Schritt 2: E-Mail-Eintragung**: Der Nutzer trägt sich über das Formspree-Formular (`id="hero-form"`) ein.
    *   **Schritt 3: Danke-Seite & Auslieferung**: Nach der Eintragung wird der Nutzer auf eine Danke-Seite weitergeleitet. Die Fallstudie wird als versteckte, interaktive Webseite (`/fallstudie`) bereitgestellt, nicht als PDF.
    *   **Schritt 4: Fallstudien-Seite (`src/pages/fallstudie.astro`)**: Diese Seite liefert den versprochenen Mehrwert (die Fallstudie) und enthält am Ende den Pitch für das kostenpflichtige Mentoring-Programm "Operation Zündkapsel" mit einem Link zur Bewerbungsseite.

2.  **Strikte Trennung von Rechtsberatung**:
    *   Es darf unter keinen Umständen der Eindruck entstehen, es handle sich um eine Rechtsberatung.
    *   **Wording**: Formulierungen müssen immer aus der Perspektive einer geteilten Erfahrung stammen ("Ich teile meinen Weg", "Ich zeige meine Strategie"). Direkte Anweisungen oder Garantien ("Du wirst...", "So gewinnst du...") sind verboten.
    *   **Fokus**: Die Kommunikation muss auf die Stärkung der **Selbstverantwortung** und **Selbstwirksamkeit** des Nutzers abzielen.

3.  **Authentizität vor Copywriting**:
    *   Die emotionale und authentische Geschichte von Simon (siehe `docs/content/pages/index.md`) ist die "Source of Truth" für die Tonalität und das Wording. Generische Copywriting-Floskeln sind zu vermeiden. Die KI soll Simons Stil adaptieren und verstärken, nicht ersetzen.


Ziel: Diese Codebasis liefert eine inhaltlich getriebene Landingpage (Offer „Operation Zündkapsel“) mit Astro 5, MDX-Content Collection & Vercel Adapter Deployment.

Business Konzept: "docs\business_konzept.md"

Das Leitbild muss zwingend dem Business Konzept entsprechen. Das Business Konzept ist die single source of truth.

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
- Copilot prüft eingehende Aufgaben zunächst auf Unklarheiten. Weun Unklarheiten vorhanden, dann fahre mit 1) a) fort.
Wenn die KI absolut 100% sicher ist, soll die KI mit Punkt 2) weitermachen.

1) a) Antwortet ausschließlich mit:
	- Offene Punkte (max. 5 präzise Fragen)
	- Geplante Annahmen (wenn keine Antwort möglich; max. 5, mit Begründung)
	- Geplanter Ablauf (3–7 Schritte)3


2) Planen
- Aufgaben werden in eine To‑do‑Liste überführt, genau 1 Item ist „in‑progress“.
- Abhängigkeiten/Dateipfade/Contracts werden kurz notiert (Inputs/Outputs, Fehlerbilder).

2) a: git befehle ausführen - git add .; git commit -m "Die konkreten Todos, Probleme issues, etc. hier als zu ändernde Elemente einfügen"; git push

3) Umsetzen (kleine, sichere Schritte)
- Änderungen minimal-invasiv, nur betroffene Dateien; keine ungebetenen Refactors.
- Nach jedem bedeutenden Schritt: kurze Statusmeldung und nächster Schritt.

4) Prüfen (Quality Gates)
- Build: `npm run build` und Fehler beheben.
- Lint/Typecheck (falls vorhanden), Smoke‑Test (Startseite rendert, keine 500er).
- Bei neuen/angepassten Komponenten: kurze Edge‑Cases nennen.

5) Zusammenfassen
- Was wurde geändert (Dateien, Schlüsselstellen), wie testen, offener Rest/Nächstes.

5) a) Wieder Git befehle durchführen und Dokumentieren, was alles  geändert wurde und offene Todos / Issues / Erkenntnisse ebenfalls in die commit nachricht schreiben damit diese Infos, für Simon, als Zusammenfassung / nächste Schritte dargelegt werden können.
Einfache Sprache verwenden und konkrete Handlungsvorschläge geben.


### Definition of Done (DoD)
- [ ] Akzeptanzkriterien erfüllt (explizit im Prompt genannt)
- [ ] Build sauber (`npm run build`), keine neuen Warnungen/Fehler
- [ ] Keine Breaking Changes (Routing, Imports, öffentliche Props)
- [ ] Änderungen dokumentiert (Kommentar in Komponenten-Header, wenn API/Props erweitert)
- [ ] Kurze Test-/Smoke‑Anleitung im Abschluss enthalten

### Kommunikationsregeln
- Pfade und Dateinamen immer in Backticks nennen (z. B. `src/content/pages/index.mdx`).
- Wenn Annahmen getroffen werden, müssen sie explizit gelistet und markiert werden.


### Hinweis Tailwind Config
- Es existiert `tailwind.config.mjs` mit korrekter `content`‑Konfiguration (MD/MDX eingeschlossen). Frühere Hinweise auf eine fehlende Config sind obsolet.

### Aufgaben‑Klassifikation (vor dem Plan)
- Einordnen in: „Erklären/Beraten“ | „Code/Änderung“ | „Debuggen“ | „Recherche“.
- Bei „Erklären/Beraten“: direkt beantworten, aber kurz bestätigen, dass keine Umsetzung erfolgt.
- Bei „Code/Änderung“: striktes Validierungs‑Gate anwenden.



### Tool‑Nutzung bis zur Freigabe
- Erlaubt: Lesen/Analysieren (Dateien anzeigen, suchen, statisch prüfen).
- NICHT erlaubt: `apply_patch`, Dateien erzeugen/ändern, Builds starten – bis zur expliziten Freigabe.

### Priorität: Frage zuerst beantworten
- Wenn die Nutzeranfrage sichtbar rein informativ ist (z. B. „Warum wird Markdown in `<div>` nicht geparst?“), antworte direkt kompakt auf die Frage.
- Nur wenn explizit eine Umsetzung verlangt wird, wechsle nach Validierung in die Umsetzung.
