# todos - Ideen / Brainstorming von Simon

Hier werden alle Todos, Unsortierte Ideen von Simon aufgelistet.

**ALTE TODOS (Archiviert, nicht mehr aktuell):**
- ~~Landingpage finalisieren~~ → Erledigt (index.mdx auf Direct-Response umgestellt)
- ~~Newsletter umsetzen~~ → Zurückgestellt (erst nach Blogs)
- ~~Blogserie starten~~ → Siehe unten: Phase 1 (5 Kern-Blogs)
- ~~Evtl. gratis Handout~~ → Zurückgestellt (kein Lead-Magnet, direkter CTA)
- ~~1:1 Angebot für 999.-?~~ → Beta-Programm 497 CHF (3 Plätze)
- ~~CSS / Styling~~ → Wird in Phase 2 überarbeitet

---

# 🎯 AKTUELLE STRATEGIE: GOOGLE SEO FIRST

**Entscheidung vom 4. Oktober 2025:**
- ✅ **100% Fokus auf Google SEO** (nicht Facebook)
- ✅ **Google Business Profile (GBP)** einrichten
- ✅ **5 Kern-Blogs** schreiben (für Checkbox-Verlinkung)
- ✅ **Checkboxen** im Bewerbungsformular implementieren
- ⏸️ **Facebook** pausieren (nicht löschen, archivieren)

---

# 📋 PROJEKT-TODO – STRUKTURIERTER AKTIONSPLAN

> **Single Source of Truth:** `docs/business_konzept.md`
> **Arbeitsweise:** Immer 1 Schritt nach dem anderen (kein Multitasking!)

---

## 🚀 PHASE 0 – GOOGLE FOUNDATION (WOCHE 1) 
**Zeitaufwand:** 4-6 Stunden | **Status:** 🔴 Offen

### A) Google Business Profile (GBP) einrichten
- [ ] GBP-Konto erstellen (https://business.google.com)
- [ ] Kategorie wählen: "Unternehmensberater" oder "Bildungseinrichtung"
- [ ] Adresse eintragen (Home-Office oder Postfach)
- [ ] Beschreibung schreiben (750 Zeichen, SEO-optimiert)
- [ ] Bilder hochladen (Profilbild, Titelbild, 5-10 weitere)
- [ ] Website verlinken (https://mindset-schlaegt-grosskonzern.ch)
- [ ] Services hinzufügen ("Mentoring", "Coaching", "KI-Training")
- [ ] Verifizierung abwarten (Postkarte, 5-7 Tage)

### B) Google Analytics & Search Console
- [ ] Google Analytics 4 (GA4) einrichten
- [ ] Google Search Console verbinden
- [ ] Sitemap erstellen & einreichen (`/sitemap.xml`)
- [ ] Tracking testen (PageViews, Events)

### C) Website SEO-Check
- [ ] Meta-Tags prüfen (Title, Description auf allen Seiten)
- [ ] robots.txt überprüfen
- [ ] Sitemap-Struktur optimieren
- [ ] Mobile Responsiveness testen

---

## 📝 PHASE 1 – 5 KERN-BLOGS SCHREIBEN (WOCHE 1-2)
**Zeitaufwand:** 8-12 Stunden (KI schreibt!) | **Status:** 🔴 Offen

> **WICHTIG:** Diese Blogs sind für die Checkboxen im Bewerbungsformular!

### Blog 1: "Warum Eigenverantwortung der einzige Weg ist"
- [ ] Outline erstellen (KI)
- [ ] Blog schreiben lassen (KI, 1'500 Wörter)
- [ ] SEO optimieren (Keyword: "Eigenverantwortung Rechtsstreit")
- [ ] Bilder/Grafiken hinzufügen
- [ ] Veröffentlichen unter `/blog/eigenverantwortung`

### Blog 2: "Die 3 Säulen der Beweisführung"
- [ ] Outline erstellen (KI)
- [ ] Blog schreiben lassen (KI, 2'000 Wörter)
- [ ] SEO optimieren (Keyword: "Beweise sammeln ohne Anwalt")
- [ ] Bilder/Grafiken hinzufügen
- [ ] Veröffentlichen unter `/blog/beweisfuehrung`

### Blog 3: "KI im Rechtsstreit: Mein Tool-Stack"
- [ ] Outline erstellen (KI)
- [ ] Blog schreiben lassen (KI, 2'500 Wörter)
- [ ] SEO optimieren (Keyword: "KI Tools Rechtsstreit")
- [ ] Screenshots von Tools hinzufügen
- [ ] Veröffentlichen unter `/blog/ki-tools-rechtsstreit`

### Blog 4: "Was du von mir bekommst (und was nicht)"
- [ ] Outline erstellen (KI)
- [ ] Blog schreiben lassen (KI, 1'500 Wörter)
- [ ] SEO optimieren (Keyword: "Rechtsstreit Coaching")
- [ ] Erwartungsmanagement klar formulieren
- [ ] Veröffentlichen unter `/blog/erwartungsmanagement`

### Blog 5: "Warum Erfahrung unbezahlbar ist"
- [ ] Outline erstellen (KI)
- [ ] Blog schreiben lassen (KI, 1'200 Wörter)
- [ ] SEO optimieren (Keyword: "Mentoring statt Anwalt")
- [ ] Investment rechtfertigen
- [ ] Veröffentlichen unter `/blog/wert-von-erfahrung`

---

## ✅ PHASE 2 – CHECKBOXEN IMPLEMENTIEREN (WOCHE 2)
**Zeitaufwand:** 2-3 Stunden | **Status:** 🔴 Offen

### Bewerbungsformular (`src/pages/bewerbung.astro`)
- [ ] Neue Checkbox-Sektion einfügen (vor bestehenden Checkboxen)
- [ ] 5 Checkboxen mit Links zu Blogs verlinken
- [ ] Styling anpassen (Tailwind)
- [ ] Formular testen (alle Links funktionieren?)
- [ ] Mobile Ansicht prüfen
- [ ] Git commit + push

**Checkbox-Texte:**
1. ☐ Eigenverantwortung übernehmen → [Blog 1]
2. ☐ Akribische Dokumentation → [Blog 2]
3. ☐ Technische Grundlagen lernen → [Blog 3]
4. ☐ Realistische Erwartungen → [Blog 4]
5. ☐ Investition verstehen → [Blog 5]

---

## 🎨 PHASE 3 – STARTSEITE FINALISIEREN (WOCHE 3)
**Zeitaufwand:** 4-6 Stunden | **Status:** 🟡 Teilweise erledigt

### Content-Optimierung
- [x] Hero-Text: CTA auf "Jetzt bewerben" umgestellt ✅
- [x] Lead-Magnet-Formular entfernt ✅
- [ ] Hero-Text: H1/H2 an Leitbild anpassen (siehe Analyse oben)
- [ ] Proof-Section: Timeline hinzufügen ("25. Okt 2024 - 2. Juli 2025")
- [ ] Proof-Section: Screenshot von Gerichtsurteil einfügen
- [ ] 3-Säulen-Cards: Exakte Begriffe aus Leitbild verwenden
- [ ] Story-Element: "Sieger-Kodex" wieder einfügen
- [ ] FAQ: Direkter formulieren (Anti-Selling verstärken)

### SEO-Optimierung
- [ ] Meta-Title optimieren
- [ ] Meta-Description optimieren
- [ ] Focus-Keyword: "ungerecht behandelt firma" → validieren
- [ ] Open Graph Tags hinzufügen (für Social Sharing)
- [ ] Schema.org Markup (Person, Organization)

---

## 🔄 PHASE 4 – CONTENT-STRATEGIE ERWEITERN (AB WOCHE 4)
**Status:** ⏸️ Zurückgestellt (erst nach Phase 1-3)

### Weitere SEO-Blogs (10-20 Artikel)
- [ ] Keyword-Research durchführen
- [ ] Content-Kalender erstellen (6 Monate)
- [ ] Blogs schreiben lassen (KI)
- [ ] Interne Verlinkung aufbauen

---

## 🎨 PHASE 5 – UX & STYLING (WOCHE 4-5)
**Status:** ⏸️ Zurückgestellt
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
