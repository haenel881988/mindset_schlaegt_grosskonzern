Rolle: Du bist ein Elite-UI/UX-Architekt und Frontend-Entwickler. Deine Aufgabe ist die Erstellung einer präzisen, umfassenden und zukunftssicheren "Styling Governance" nach einem strengen, dokumentationsgetriebenen Protokoll.
Ziel: Erstelle die finale "Styling Governance"-Dokumentation (V3.0), die alle visuellen und interaktiven Aspekte des Projekts als atomares Design-System definiert, und protokolliere den Prozess gemäss dem "Simon Recht Operationsprotokoll V1.0".

PROTOKOLL V1.0: VOR DER AKTION
1. Arbeitsstand sichern und Mission definieren:
   Führe die folgenden Git-Befehle aus.
   git add .
   git commit -m "feat(docs): Initialisierung der finalen Styling Governance V3.0"
   git push

AKTION: FINALE STYLING GOVERNANCE V3.0 ERSTELLEN
Schritt 1: Bestehende Governance-Datei löschen und neu anlegen – lösche die alte Datei `/docs/technical/styling-governance.md`, falls sie existiert, und lege sie neu an.
Schritt 2: Inhalt der finalen Styling Governance definieren – füge den folgenden Inhalt exakt ein.

# Styling Governance: mindset-schlaegt-grosskonzern (V3.0)

Dieses Dokument ist die verbindliche visuelle Verfassung des Projekts und definiert alle Design-Tokens, Komponenten, Interaktions- und Qualitätsregeln.

## 1. Philosophische Grundlage

Das Design folgt der Botschaft: **Klarheit, Stärke, Präzision**. Minimalistischer, kontrastreicher Dark-Mode. Inhalt im Fokus. Performance, Zugänglichkeit und mobile-first sind nicht verhandelbar. Jede gestalterische Entscheidung muss: Lesbarkeit + Fokus + Handlungsführung erhöhen.

## 2. Design Tokens (Quelle der Wahrheit)

Design Tokens sind atomare, nicht verhandelbare Konstanten. Verwaltung zentral in `tailwind.config.mjs`.

### 2.1 Farben
- Hintergrund: `bg-primary` = `#000000`, `bg-secondary` = `#111111`
- Text: `text-primary` = `#FFFFFF`, `text-secondary` = `#A0A0A0`
- Border: `border-default` = `#27272a`
- Akzent: `accent` = `#2563eb`, `accent-hover` = `#3b82f6`
- Feedback: `error` = `#dc2626`, `success` = `#16a34a`

### 2.2 Typografie
- Font: "Inter" (Google Fonts). Fallback: system-ui, sans-serif
- Font-Smoothing: `antialiased`
- Shadow (Headlines): `[text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]`

#### 2.2.1 Größen (mobile first)
| Element | Mobile | Desktop (`lg:`) | Zweck |
|---|---|---|---|
| H1 | `text-4xl` (36px) | `text-6xl` (60px) | Hero / Primärbotschaft |
| H2 | `text-3xl` (30px) | `text-4xl` (36px) | Abschnitt |
| H3 | `text-xl` (20px) | `text-2xl` (24px) | Subheading / Card |
| Body | `text-lg` (18px) | `text-lg` | Lesefluss |
| Lead | `text-xl` | `text-xl` | Intro / Aufmerksamkeitsanker |
| Small | `text-base` (16px) | `text-base` | Meta / Label |

- Line Heights: Headlines `leading-tight`, Body `leading-relaxed`

### 2.3 Spacing
Skala basiert auf Tailwind (4px-Basis). Design-Referenzen nutzen 8px-Gitter.
- Vertikale Sektion: `py-20 sm:py-28`
- Container: `max-w-5xl mx-auto px-4 sm:px-6`
- Grid Gap Standard: `gap-8`

### 2.4 Radius, Shadow, Opacity
- Corner default: `rounded-lg`, Card: `rounded-xl`
- Shadow Base: Keine Standard-Schatten im Idle; Fokus auf Text.
- Hover Depth (Card): `hover:shadow-2xl hover:shadow-blue-500/10`

### 2.5 Motion Tokens
| Token | Dauer | Verwendung |
|-------|-------|------------|
| `motion-fast` | 150ms | Mikro-Interaktion (Buttons) |
| `motion-base` | 250ms | Standard-State-Wechsel |
| `motion-slow` | 400ms | Overlays / Modale |
Easing: `ease-out` (Einstieg), `ease-in-out` (Wechsel), niemals `linear` bei UI-Interaktionen.

## 3. Komponenten-Bibliothek

### 3.1 Button Variants
| Variant | Klassen (Basis + Variant) |
|---------|---------------------------|
| Primary | `inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-accent text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover` |
| Secondary | `px-6 py-3 font-semibold rounded-lg bg-gray-800 text-white hover:bg-gray-700 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-accent` |
| Outline | `px-6 py-3 font-semibold rounded-lg border border-current text-white bg-transparent hover:bg-white/10 transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent disabled:opacity-50 disabled:cursor-not-allowed` |

Responsives Verhalten: Keine Größenmodifikation außer explizit (z.B. `sm:px-8`). Keine Icon-only Buttons vorsehen ohne Klartext oder `sr-only`.

### 3.2 Cards
Basis: `bg-secondary border border-gray-800 rounded-xl p-8` + optional `hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 transition-transform duration-200`.
Header (optional): H3 oder Label; Body: Fließtext; Footer: CTA oder Meta.

### 3.3 Formular-Elemente
Input & Textarea: `w-full bg-black border-2 border-gray-800 rounded-lg px-4 py-3 text-white placeholder:text-gray-500 focus:border-accent focus:ring-0 transition-colors`.
Label: `block text-sm font-medium text-secondary mb-2`.
Fehlerhinweis: `mt-2 text-sm text-error`.

### 3.4 zukünftige Komponenten (Platzhalter)
Modal, Toast, Navigation (Mobile Overlay) – werden erst spezifiziert wenn erforderlich; dürfen bis dahin NICHT ad-hoc gebaut werden.

## 4. Layout & Sektionen (AIDA)
Hero (Attention), Problem (Interest), Lösung (Desire), Angebot / CTA (Action). Siehe Spacing Tokens. Grid für Lösung: `grid grid-cols-1 md:grid-cols-3 gap-8`.

## 5. Globale Elemente & Interaktion
- Header: `bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-900`
- Footer: `border-t border-gray-800 mt-24 py-8`
- Scroll Verhalten: Sanft (`scroll-behavior: smooth;` optional global)
- Transitions global: `transition-colors duration-200` auf Links & Buttons

## 6. Struktur & Namenskonventionen
- Keine globalen semantischen CSS-Klassen außer Utilities.
- Komponenten wohnen in `/src/components` (Astro/Islands). Styling rein Utility-basiert.
- Kein BEM, kein SCSS-Nesting. Keine Inline-Style-Ausnahmen außer dynamischen Berechnungen.

## 7. Accessibility (A11y) – Nicht verhandelbar
- Fokus: Nur `:focus-visible` verwenden; niemals Fokusstates entfernen.
- Screenreader Support: `sr-only` Klasse definieren:
  `.sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }`
- Icons: dekorativ => `aria-hidden="true"`; funktional => begleitender Text oder `sr-only`.
- Kontrast: Mindestens AA, Ziel AAA für primären Text.
- Semantik Pflicht: Keine generischen `<div>` für Landmark-Struktur.

## 8. Qualitätssicherung & Tooling
- Prettier + Tailwind Plugin erzwingen Klassensortierung.
- Kein unbenutztes CSS – Purge/Content-Pfade aktuell halten.
- Visuelle Regressionen: Bei neuen Komponenten Screenshot-Basis definieren (manuell zunächst).

## 9. Tailwind Konfiguration (Ausschnitt / Beispiel)
```js
// tailwind.config.mjs (Auszug)
export default {
  content: [
    './src/**/*.{astro,js,ts,jsx,tsx,mdx}',
    './public/**/*.html'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#111111',
        accent: '#2563eb',
        'accent-hover': '#3b82f6',
        error: '#dc2626',
        success: '#16a34a'
      },
      boxShadow: {
        'focus-ring': '0 0 0 2px rgba(37,99,235,0.75)'
      }
    }
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.text-shadow-headline': {
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        }
      })
    }
  ]
}
```

## 10. Änderungs- & Versions-Policy
- Versionierung: Semantisch auf Governance-Ebene (V3.x => nur Erweiterungen, V4.0 => fundamentaler Bruch).
- Jede Änderung benötigt AAR-Eintrag unter `/docs/changelog/`.

---
PROTOKOLL V1.0: NACH DER AKTION (AFTER ACTION REVIEW)
1. After Action Review (AAR) & Changelog erstellen: Neue Datei unter `/docs/changelog/` mit Namen `YYYY-MM-DD_styling-governance-v3.md`.

# After Action Review: Finale Styling Governance V3.0

- **Datum:** 2025-09-16

### 1. Intent
Erweiterung zur atomaren, lückenlosen Design-System-Definition (V3.0), Schließen bisheriger Abstraktheits-Lücken (Komponenten, Struktur, Token-Verbindlichkeit, A11y-Verschärfung).

### 2. Result
- Datei aktualisiert (Tokens, Komponenten, Struktur, A11y, Tooling, Tailwind-Auszug).
- Konsistente Nummerierung & Trennung von Governance vs. Protokoll.

### 3. Was lief gut
Direkte Operationalisierbarkeit; kein Interpretationsraum bei Buttons, Layout, Fokuszuständen.

### 4. Learnings
- Token-first + klare Nicht-Verhandelbarkeiten reduzieren spätere Rework-Kosten.
- `focus-visible` erhöht Nutzbarkeit ohne visuelles Rauschen.

2. AAR sichern und Mission abschließen:
   git add .
   git commit -m "docs(governance): Finalisierung Styling Governance V3.0 (Design Tokens & Struktur erweitert)"
   git push
