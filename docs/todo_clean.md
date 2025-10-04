# 📋 TODO – Mindset schlägt Grosskonzern

> **Single Source of Truth:** `docs/business_konzept.md`  
> **Arbeitsweise:** Immer 1 Schritt nach dem anderen (kein Multitasking!)  
> **Letzte Aktualisierung:** 4. Oktober 2025

---

## 🎯 AKTUELLE STRATEGIE: GOOGLE SEO FIRST

**Entscheidung vom 4. Oktober 2025:**
- ✅ **100% Fokus auf Google SEO** (nicht Facebook)
- ✅ **Google Business Profile (GBP)** einrichten
- ✅ **5 Kern-Blogs** schreiben (KI schreibt, nicht manuell!)
- ✅ **Checkboxen** im Bewerbungsformular implementieren
- ⏸️ **Facebook** pausieren (nicht löschen, archivieren)

**Fokus-Verteilung:**
- 🥇 70% → Google SEO (Blogs schreiben)
- 🥈 20% → GBP (lokale Suche)
- 🥉 10% → Facebook (nur Retargeting, später)

---

# 🚀 PHASE 0 – GOOGLE FOUNDATION (WOCHE 1)
**Zeitaufwand:** 4-6 Stunden | **Status:** 🔴 Offen

## A) Google Business Profile (GBP) einrichten ⭐ **NÄCHSTER SCHRITT**
- [ ] GBP-Konto erstellen (https://business.google.com)
- [ ] Kategorie wählen: "Unternehmensberater" oder "Bildungseinrichtung"
- [ ] Adresse eintragen (Home-Office oder Postfach)
- [ ] Beschreibung schreiben (750 Zeichen, SEO-optimiert)
- [ ] Bilder hochladen (Profilbild, Titelbild, 5-10 weitere)
- [ ] Website verlinken (https://mindset-schlaegt-grosskonzern.ch)
- [ ] Services hinzufügen ("Mentoring", "Coaching", "KI-Training")
- [ ] Verifizierung abwarten (Postkarte, 5-7 Tage)

**GBP-Beschreibung (SEO-optimiert):**
```
Mindset schlägt Grosskonzern – Juristische Selbsthilfe mit KI

Ich helfe Menschen in der Schweiz, die sich von Pensionskassen, Versicherungen 
oder Behörden ungerecht behandelt fühlen. Als Laie habe ich 2024 einen 
Grosskonzern vor Gericht besiegt (Urteil BV.2024.00062) – ohne Anwalt, 
mit KI und einem klaren System.

Angebot:
• 1:1 Strategic Mentoring (90 Tage)
• KI-gestützte Dokumentation & Analyse
• Fokus: Eigenverantwortung + Struktur

WICHTIG: Dies ist KEINE Rechtsberatung. Ich zeige dir meine Methode, 
die Umsetzung liegt bei dir.

Kontakt: [Website-URL]
```

## B) Google Analytics & Search Console
- [ ] Google Analytics 4 (GA4) einrichten
- [ ] Google Search Console verbinden
- [ ] Sitemap erstellen & einreichen (`/sitemap.xml`)
- [ ] Tracking testen (PageViews, Events)

## C) Website SEO-Check
- [ ] Meta-Tags prüfen (Title, Description auf allen Seiten)
- [ ] robots.txt überprüfen
- [ ] Sitemap-Struktur optimieren
- [ ] Mobile Responsiveness testen

---

# 📝 PHASE 1 – 5 KERN-BLOGS SCHREIBEN (WOCHE 1-2)
**Zeitaufwand:** 8-12 Stunden (KI schreibt!) | **Status:** 🔴 Offen

> **WICHTIG:** Diese Blogs sind für die Checkboxen im Bewerbungsformular!  
> **KI schreibt!** Simon gibt nur Thema, Länge, Keywords vor.

## Blog 1: "Warum Eigenverantwortung der einzige Weg ist"
- [ ] Outline erstellen lassen (KI)
- [ ] Blog schreiben lassen (KI, 1'500 Wörter)
- [ ] SEO optimieren (Keyword: "Eigenverantwortung Rechtsstreit")
- [ ] Bilder/Grafiken hinzufügen
- [ ] Veröffentlichen unter `/blog/eigenverantwortung`

**Ziel:** Mindset stärken, Opfermentalität durchbrechen

## Blog 2: "Die 3 Säulen der Beweisführung"
- [ ] Outline erstellen lassen (KI)
- [ ] Blog schreiben lassen (KI, 2'000 Wörter)
- [ ] SEO optimieren (Keyword: "Beweise sammeln ohne Anwalt")
- [ ] Bilder/Grafiken hinzufügen
- [ ] Veröffentlichen unter `/blog/beweisfuehrung`

**Ziel:** Dokumentation erklären, akribische Arbeit betonen

## Blog 3: "KI im Rechtsstreit: Mein Tool-Stack"
- [ ] Outline erstellen lassen (KI)
- [ ] Blog schreiben lassen (KI, 2'500 Wörter)
- [ ] SEO optimieren (Keyword: "KI Tools Rechtsstreit")
- [ ] Screenshots von Tools hinzufügen (ChatGPT, Notion, etc.)
- [ ] Veröffentlichen unter `/blog/ki-tools-rechtsstreit`

**Ziel:** Technische Basics erklären, Einstiegshürde senken

## Blog 4: "Was du von mir bekommst (und was nicht)"
- [ ] Outline erstellen lassen (KI)
- [ ] Blog schreiben lassen (KI, 1'500 Wörter)
- [ ] SEO optimieren (Keyword: "Rechtsstreit Coaching")
- [ ] Erwartungsmanagement klar formulieren
- [ ] Veröffentlichen unter `/blog/erwartungsmanagement`

**Ziel:** Unrealistische Erwartungen killen, Disqualifizierung

## Blog 5: "Warum Erfahrung unbezahlbar ist"
- [ ] Outline erstellen lassen (KI)
- [ ] Blog schreiben lassen (KI, 1'200 Wörter)
- [ ] SEO optimieren (Keyword: "Mentoring statt Anwalt")
- [ ] Investment rechtfertigen (497 CHF → warum?)
- [ ] Veröffentlichen unter `/blog/wert-von-erfahrung`

**Ziel:** Preis rechtfertigen, Wert kommunizieren

---

# ✅ PHASE 2 – CHECKBOXEN IMPLEMENTIEREN (WOCHE 2)
**Zeitaufwand:** 2-3 Stunden | **Status:** 🔴 Offen

## Bewerbungsformular (`src/pages/bewerbung.astro`)
- [ ] Neue Checkbox-Sektion einfügen (vor bestehenden Checkboxen)
- [ ] 5 Checkboxen mit Links zu Blogs verlinken
- [ ] Styling anpassen (Tailwind)
- [ ] Formular testen (alle Links funktionieren?)
- [ ] Mobile Ansicht prüfen
- [ ] Git commit + push

**Checkbox-Texte (Vorschlag):**
1. ☐ Ich übernehme 100% Eigenverantwortung → [Blog 1: Eigenverantwortung]
2. ☐ Ich verpflichte mich zu akribischer Dokumentation → [Blog 2: Beweisführung]
3. ☐ Ich bin bereit, technische Grundlagen zu lernen → [Blog 3: KI-Tools]
4. ☐ Ich verstehe, was ich bekomme (und was nicht) → [Blog 4: Erwartungsmanagement]
5. ☐ Ich verstehe, wofür ich zahle → [Blog 5: Wert von Erfahrung]

---

# 🎨 PHASE 3 – STARTSEITE FINALISIEREN (WOCHE 3)
**Zeitaufwand:** 4-6 Stunden | **Status:** 🟡 Teilweise erledigt

## Content-Optimierung
- [x] Hero-Text: CTA auf "Jetzt bewerben" umgestellt ✅
- [x] Lead-Magnet-Formular entfernt ✅
- [ ] Hero-Text: H1/H2 an Leitbild anpassen:
  - H1: "Mindset schlägt Grosskonzern" (nicht "Pensionskasse")
  - H2: "Hast du juristische Probleme? Vom Sektenkind mit ADHS zum Gerichtssieg..."
- [ ] Proof-Section: Timeline hinzufügen ("25. Okt 2024 - 2. Juli 2025, 8 Monate Kampf")
- [ ] Proof-Section: Screenshot von Gerichtsurteil einfügen (anonymisiert)
- [ ] 3-Säulen-Cards: Exakte Begriffe aus Leitbild verwenden:
  - Analytische Überlegenheit
  - Radikale Selbstverantwortung
  - Strategische Resilienz
- [ ] Story-Element: "Sieger-Kodex" wieder einfügen (aus alter Version)
- [ ] FAQ: Direkter formulieren (Anti-Selling verstärken)

## SEO-Optimierung
- [ ] Meta-Title optimieren
- [ ] Meta-Description optimieren
- [ ] Focus-Keyword: "ungerecht behandelt firma" → validieren
- [ ] Open Graph Tags hinzufügen (für Social Sharing)
- [ ] Schema.org Markup (Person, Organization)

---

# 🔄 PHASE 4 – CONTENT-STRATEGIE ERWEITERN (AB WOCHE 4)
**Status:** ⏸️ Zurückgestellt (erst nach Phase 1-3)

## Weitere SEO-Blogs (10-20 Artikel)
- [ ] Keyword-Research durchführen (Perplexity, Google Search Console)
- [ ] Content-Kalender erstellen (6 Monate)
- [ ] Blogs schreiben lassen (KI)
- [ ] Interne Verlinkung aufbauen

**Themen-Ideen:**
- "3 Fehler, die ich vor Gericht gemacht habe"
- "Wie du mit KI juristische Schreiben analysierst"
- "Warum Pensionskassen auf deine Hilflosigkeit setzen"
- "Schriftliche vs. mündliche Korrespondenz: Warum Schriftlichkeit siegt"
- "Aktenverzeichnis aufbauen: Die Basis für jeden Rechtsstreit"

---

# 🎨 PHASE 5 – UX & STYLING (WOCHE 4-5)
**Status:** ⏸️ Zurückgestellt

- [ ] Tailwind-Styling für `SectionWrapper` und `Card` überprüfen
- [ ] CTA-Buttons konsistent stylen (Hover/Focus-State)
- [ ] Mobile Responsiveness testen
- [ ] Bild-Komprimierung prüfen
- [ ] Farb- und Kontrast-Check (WCAG 2.1)
- [ ] Scroll-/Reveal-Effekte evaluieren

---

# 📄 PHASE 6 – WEITERE SEITEN (AB WOCHE 6)
**Status:** ⏸️ Zurückgestellt

- [ ] "Über mich"-Seite erstellen (Timeline mit Meilensteinen)
- [ ] Timeline-Komponente bauen (Astro)
- [ ] Gerichtsurteil-Seite (mit anonymisiertem PDF)
- [ ] Navigation erweitern (Hauptmenü)

---

# 🔧 PHASE 7 – PRODUKT-ÖKOSYSTEM (AB WOCHE 8)
**Status:** ⏸️ Zurückgestellt

- [ ] Notion-Template für Klienten erstellen
- [ ] Prompt-Bibliothek strukturieren
- [ ] Checklisten & Workflows dokumentieren
- [ ] Beta-Programm-Materialien finalisieren

---

# 🚀 PHASE 8 – MARKETING & PR (AB WOCHE 10)
**Status:** ⏸️ Zurückgestellt

## Google Marketing
- [ ] GBP-Posts veröffentlichen (1× pro Woche)
- [ ] Google Rankings überwachen (Search Console)
- [ ] Local SEO optimieren

## Facebook (Optional, später)
- [ ] Facebook-Seite erstellen (falls später gewünscht)
- [ ] Meta Pixel installieren
- [ ] Retargeting-Kampagne planen

## PR & Social Proof
- [ ] Testimonials sammeln (Video + Text)
- [ ] Case Studies erstellen
- [ ] Medien-Kit vorbereiten

---

# 📊 PHASE 9 – ANALYTICS & OPTIMIERUNG (LAUFEND)
**Status:** ⏸️ Zurückgestellt

- [ ] Google Analytics auswerten
- [ ] Conversion-Rate optimieren
- [ ] A/B-Tests durchführen
- [ ] User-Feedback sammeln

---

# 🔒 PHASE 10 – RECHTLICHES & COMPLIANCE (LAUFEND)
**Status:** ⏸️ Zurückgestellt

- [ ] AGB aktualisieren
- [ ] Datenschutzerklärung anpassen
- [ ] Disclaimer-Seite erstellen
- [ ] Cookie-Banner implementieren

---

# 📌 NÄCHSTER SCHRITT (JETZT STARTEN):

## ⭐ PHASE 0, TASK A: Google Business Profile (GBP) einrichten

**Was brauche ich von dir?**
1. Soll ich dir eine **Schritt-für-Schritt-Anleitung** für GBP geben?
2. Oder sollen wir direkt mit den **5 Blog-Outlines** starten?
3. Oder willst du beides parallel? (GBP einrichten + Blogs vorbereiten)

**Meine Empfehlung:** 
1. **Heute**: GBP einrichten (30 Minuten)
2. **Diese Woche**: 5 Blog-Outlines erstellen (ich mache das)
3. **Nächste Woche**: Blogs schreiben lassen (KI) + Checkboxen implementieren

Was denkst du?
