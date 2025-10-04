# todos - Ideen / Brainstorming von Simon

Hier werden alle Todos, Unsortierte Ideen von Simon aufgelistet.

- Landingpage finalisieren
- Newsletter umsetzen
- Blogserie starten --> mit welchem Blog / Thema beginnen?
- Evtl. gratis Handout / Fallbeispiel als Download --> im Gegenzug E-Mail-Adressen?
- Notionvorlage fertigstellen oder erstmal 1:1 Angebot für 999.-? 5 Plätze
- CSS / Styling, noch immer nicht optimal! Obwohl sicher schon 8 Verbesserungsdurchläufe mit KI!


Pitch immer auf die nächst höhere Stufe?

# Projekt-ToDo – Mindset schlägt Grosskonzern


> Single Source of Truth bleibt `docs/business_konzept.md`. Diese Liste priorisiert die Umsetzungsschritte.

## Fokus Oktober 2025 – SEO & Content Prioritäten
- [ ] **Google Business Profile vorbereiten:** Firmenprofil anlegen (Kategorie wählen, Adresse/Servicegebiet definieren, Beschreibung + Bilder vorbereiten, Verifizierungscode abwarten) und im Anschluss Google Analytics & Search Console mit der Domain verknüpfen.
- [ ] **Fünf Kern-Blogartikel briefe & erstellen:** je Artikel Thema, Ziel-Keyword, Outline (H1–H3), Wortanzahl und CTA definieren; anschließend mit KI ausarbeiten lassen und redigieren. Reihenfolge:
	1. Warum Eigenverantwortung der einzige Weg ist (`/blog/eigenverantwortung`)
	2. Die 3 Säulen der Beweisführung (`/blog/beweisfuehrung`)
	3. KI im Rechtsstreit: Mein Tool-Stack (`/blog/ki-tools-rechtsstreit`)
	4. Was du von mir bekommst (und was nicht) (`/blog/erwartungsmanagement`)
	5. Warum Erfahrung unbezahlbar ist (`/blog/wert-von-erfahrung`)
- [ ] **Checkbox-Sektion im Bewerbungsformular finalisieren:** Nachdem alle fünf Blogposts live sind, neue Verpflichtungs-Checkboxen mit kurzer Commitment-Formulierung einbauen und auf die jeweiligen Artikel verlinken; Formular anschließend testen (Responsives Layout, Pflichtfelder, Formspree-Flow).
- [ ] **Marketing-Kanäle neu ausrichten:** Facebook-Profil pausieren (Hinweispost + Link auf Website platzieren), neue Facebook-Seite erst nach SEO-Rollout aufsetzen, Fokus bis dahin auf Google (SEO, GBP-Posts, organische Rankings).
- [ ] **Content-Distribution planen:** Für jede Blogveröffentlichung Kurzfassung für GBP-Posts, LinkedIn/Facebook-Teaser (später) und Newsletter-Entwürfe vorbereiten, um nach dem SEO-Go-live wiederholbare Veröffentlichungsabläufe zu haben.

## Newsletter & Fallbeispiel vorbereiten
- [ ] **E-Mail-Infrastruktur evaluieren:** Vergleich von Anbietern (z. B. Brevo, MailerLite, Mailchimp) inkl. Kosten, Double-Opt-in-Workflow, DSGVO/CH-DSG-Konformität, Integration (Zapier/Formspree) und Datenhaltung (CSV/CRM).
- [ ] **Double-Opt-in-Prozess definieren:** Anmeldeformular, Bestätigungs-E-Mail, Dankeseite, Automatisierungsschritte dokumentieren und rechtliche Pflichtangaben prüfen (Impressum, Abmeldelink, Datenschutzhinweis).
- [ ] **Fallbeispiel/Lead-Magnet planen:** Inhaltliche Struktur (Story, Screenshots, Methodik), Format (PDF vs. versteckte Webseite), Zugangslogik nach Bestätigung, sowie spätere Aktualisierungsschritte festhalten.
- [ ] **Kontaktverwaltung/CRM entscheiden:** Festlegen, wo E-Mail-Adressen langfristig verwaltet werden (z. B. Notion, Airtable, dediziertes CRM), inkl. Backup- und Löschprozesse.

## Phase 1 – Startseite textlich schärfen (Content & Klarheit)
- [ ] Hero-Text finalisieren (Headline/Subline präzisieren, Claim = zentrale Nutzenbotschaft, CTA bei Bewerbung belassen)
- [ ] Proof-Section ergänzen (Zeitleiste "Oktober 2024 – Juli 2025" ausschreiben, Urteil als voller Sieg formulieren, Gerichtskontakt nur verlinken)
- [ ] Angebot "Operation Zündkapsel" konsolidieren (Betreuungsdauer klar benennen, Leistungen & Testimonial-Anforderung konkretisieren)
- [ ] FAQ mit konsistenten Antworten zu Dauer, Leistungsumfang und Abgrenzung zu Rechtsberatung vervollständigen
- [ ] SEO-Frontmatter aktualisieren (Title, Meta-Description, Fokus-Keyword gemäss neuer Positionierung)
- [ ] Interne Verlinkung zur geplanten "Über mich"-Seite vorbereiten (Platzhalter-Link)

## Phase 2 – UX, Layout & Visuals stärken
- [ ] Tailwind-Styling für `SectionWrapper` und `Card` überprüfen (Spacing, Typografie, mobile Breakpoints)
- [ ] Bild- & Asset-Komprimierung prüfen, `class="img-frame"` verifizieren
- [ ] Scroll-/Reveal-Effekte für wichtige Abschnitte evaluieren (sanft, performant)
- [ ] CTA-Buttons (Primary/Secondary) konsistent stylen inkl. Hover/Focus-State
- [ ] Farb- und Kontrast-Check (WCAG 2.1) durchführen

## Phase 3 – Kernseiten ausbauen
- [ ] "Über mich"-Seite mit anonymisierter Chronologie erstellen (Lebenslauf-Abschnitte, elegante Vertical-Timeline-Animation)
- [ ] Eigener Bereich (Unterseite oder Abschnitt) für Gerichtskontakt & Nachweise vorbereiten, ohne Startseite zu überladen
- [ ] Komponenten für Timeline/Animation bauen (z. B. `Timeline.astro` mit Intersection Observer oder CSS-Animation)
- [ ] Navigation & Sitemap so anpassen, dass "Über mich" und ggf. weitere Kernseiten klar erreichbar sind

## Phase 4 – Content- & Produkt-Ökosystem vorbereiten
- [ ] Notion-Template für Klienten strukturieren (Dokumentation, Prompt-Bibliothek, Checklisten)
- [ ] Content-Strategie (Themen-Cluster, Keyword-Zuordnung, Veröffentlichungsplan) dokumentieren
- [ ] Blog-Transformation planen (alte Artikel auditieren, Redirect-Map, Kategorien neu zuweisen)
- [ ] Newsletter-Setup definieren (Tool-Auswahl, Opt-in Flow, Onboarding-Sequenz, Inhalte der ersten Ausgaben)
- [ ] Lead-Magnet(e) optional für spätere Phase vormerken (nicht Teil der aktuellen Startseite)

## Phase 5 – SEO, Trust & Ops verankern
- [ ] Technische SEO-Checks (robots.txt, Sitemap-Splitting, Meta-Tags, Canonicals)
- [ ] Strukturierte Daten/Schema.org für Case Study & Person integrieren
- [ ] Analytics & Tracking überprüfen (Privacy-Konformität, Consent Banner)
- [ ] PR & Social Proof Pipeline aufsetzen (Urteilsnachweise, Testimonials, Medien-Kit)
- [ ] Rechtliche Dokumente aktualisieren lassen (AGB, Datenschutz, Community-Richtlinien)
- [ ] Separate Disclaimer-/Hinweis-Seite erstellen und im Footer verlinken (statt Startseite überladen)

## Phase 6 – Launch-Vorbereitung & Monitoring
- [ ] QA & Visual Regression Tests (Backstop aktualisieren)
- [ ] Staging/Preview-Review (Freunde/Partner Feedback einholen)
- [ ] Go-Live-Kommunikation planen (Newsletter, Social Media, PR)
- [ ] Monitoring nach Launch (404-Tracking, Performance, Feedback sammeln)
