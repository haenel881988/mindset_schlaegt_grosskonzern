Rolle: Du bist ein Elite-UI/UX-Architekt und Frontend-Entwickler. Deine Aufgabe ist die Erstellung einer präzisen, umfassenden und zukunftssicheren "Styling Governance" nach einem strengen, dokumentationsgetriebenen Protokoll.
Ziel: Erstelle die finale "Styling Governance"-Dokumentation (V3.0), die alle visuellen und interaktiven Aspekte des Projekts als atomares Design-System definiert, und protokolliere den Prozess gemäss dem "Simon Recht Operationsprotokoll V1.0".

PROTOKOLL V1.0: VOR DER AKTION
1. Arbeitsstand sichern und Mission definieren:
   Führe die folgenden Git-Befehle aus.
   git add .
   git commit -m "feat(docs): Initialisierung der finalen Styling Governance V3.0"
   git push


# Styling Governance: mindset-schlaegt-grosskonzern 
Dieses Dokument ist die verbindliche visuelle Verfassung des Projekts und definiert alle Design-Tokens, Komponenten, Interaktions- und Qualitätsregeln.

**Hero-Section:**
 - 2 Spalten Layout
 - Links: H1 und H2 Überschrift
 - Rechts: Bild

Abschnitte 


## 1. Philosophische Grundlage

Das Design folgt der Botschaft: **Klarheit, Stärke, Präzision**. Minimalistischer, kontrastreicher Dark-Mode. Inhalt im Fokus. Performance, Zugänglichkeit und mobile-first sind nicht verhandelbar. Jede gestalterische Entscheidung muss: Lesbarkeit + Fokus + Handlungsführung erhöhen.



## 2. Design Tokens (Quelle der Wahrheit)

Design Tokens sind atomare, nicht verhandelbare Konstanten. Verwaltung zentral in `tailwind.config.mjs`.

### 2.1 Farben

#### 2.1.1 Dark Mode (Standard)
- Hintergrund: `bg-primary` = `#000000`, `bg-secondary` = `#111111`
- Text: `text-primary` = `#FFFFFF`, `text-secondary` = `#A0A0A0`
- Border: `border-default` = `#27272a`
- Akzent: `accent` = `#2563eb`, `accent-hover` = `#3b82f6`
- Feedback: `error` = `#dc2626`, `success` = `#16a34a`

#### 2.1.2 Light Mode (Legacy/Optional)
⚠️ **DEPRECATED**: Wird schrittweise ausgemustert zugunsten Dark-First Design
- Hintergrund: `#ffffff`, `#f9fafb`, `#f3f4f6`
- Text: `#111827`, `#374151`
- Nur für Übergangszeit in bestehenden Komponenten erlaubt

#### 2.1.3 Farb-Hierarchie & Semantik
- **Primary Colors**: Für Hauptinhalte und Navigation
- **Secondary Colors**: Für unterstützende Elemente
- **Accent Colors**: Für CTAs und wichtige Interaktionen
- **Semantic Colors**: Für Status-Feedback (Error, Success, Warning)

#### 2.1.4 Kontrast-Anforderungen
- Text auf Hintergrund: Min. 4.5:1 (WCAG AA), Ziel 7:1 (AAA)
- Interaktive Elemente: Min. 3:1 gegen Hintergrund
- Fokus-Indikatoren: Min. 3:1 Kontrast

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

### 8.1 Code Quality
- Prettier + Tailwind Plugin erzwingen Klassensortierung.
- Kein unbenutztes CSS – Purge/Content-Pfade aktuell halten.
- Visuelle Regressionen: Bei neuen Komponenten Screenshot-Basis definieren (manuell zunächst).

### 8.2 Performance Metriken
- **CSS Bundle-Größe**: Max. 50KB gzipped für kritisches CSS
- **Cumulative Layout Shift (CLS)**: < 0.1 
- **First Contentful Paint (FCP)**: < 1.8s
- **Tree-Shaking**: Nur verwendete Tailwind-Klassen im Build
- **Font-Loading**: `font-display: swap` für Web-Fonts

### 8.3 Governance-Validierung
- **Konsistenz-Check**: Vor jedem Release prüfen, ob Komponenten die definierten Tokens verwenden
- **Design-Drift Detection**: Regelmäßige Audits auf nicht-konforme Farben/Größen
- **A11y Testing**: Automatisierte Lighthouse-Audits bei CI/CD

### 8.4 Migration & Legacy
- **Bestandskomponenten**: Schrittweise Migration auf definierte Tokens
- **Breaking Changes**: Nur bei Major-Versions (V4.0+)
- **Dokumentation**: Jede Abweichung muss begründet und zeitlich begrenzt sein

## 9. Tailwind Konfiguration (Vollständig)

### 9.1 Empfohlene tailwind.config.mjs
```js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './public/**/*.html'
  ],
  darkMode: 'class', // Ermöglicht theme-switching falls später gewünscht
  theme: {
    extend: {
      colors: {
        // Design Tokens aus Governance
        primary: '#000000',
        secondary: '#111111',
        accent: {
          DEFAULT: '#2563eb',
          hover: '#3b82f6'
        },
        error: '#dc2626',
        success: '#16a34a',
        // Text Colors
        'text-primary': '#FFFFFF',
        'text-secondary': '#A0A0A0',
        // Border
        'border-default': '#27272a'
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem', // 72px für spezielle Abstände
        '22': '5.5rem'  // 88px für große Sections
      },
      boxShadow: {
        'focus-ring': '0 0 0 2px rgba(37,99,235,0.75)',
        'card-hover': '0 25px 50px -12px rgba(37,99,235,0.1)'
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' }
        }
      }
    }
  },
  plugins: [
    function({ addUtilities, addComponents }) {
      // Custom Utilities gemäß Governance
      addUtilities({
        '.text-shadow-headline': {
          textShadow: '1px 1px 3px rgba(0,0,0,0.5)'
        },
        '.sr-only': {
          position: 'absolute',
          width: '1px',
          height: '1px',
          padding: '0',
          margin: '-1px',
          overflow: 'hidden',
          clip: 'rect(0,0,0,0)',
          whiteSpace: 'nowrap',
          border: '0'
        }
      });
      
      // Base Components gemäß Governance
      addComponents({
        '.btn-primary': {
          '@apply inline-flex items-center justify-center px-6 py-3 text-base font-semibold rounded-lg bg-accent text-white transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed hover:bg-accent-hover': {}
        },
        '.card-base': {
          '@apply bg-secondary border border-gray-800 rounded-xl p-8 hover:-translate-y-1 hover:shadow-card-hover transition-transform duration-200': {}
        }
      });
    }
  ]
}
```

### 9.2 CSS Custom Properties (Fallback)
```css
/* src/styles/global.css */
:root {
  --color-primary: #000000;
  --color-secondary: #111111;
  --color-accent: #2563eb;
  --color-accent-hover: #3b82f6;
  --color-text-primary: #FFFFFF;
  --color-text-secondary: #A0A0A0;
  --color-border-default: #27272a;
  --color-error: #dc2626;
  --color-success: #16a34a;
}

/* Global Styles */
* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
  font-family: 'Inter', system-ui, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  margin: 0;
  background-color: var(--color-primary);
  color: var(--color-text-primary);
  line-height: 1.6;
}

/* Focus Styles - Global */
*:focus-visible {
  outline: 2px solid var(--color-accent);
  outline-offset: 2px;
}
```

## 10. Praktische Implementierung & Code-Beispiele

### 10.1 SectionWrapper Modernisierung
```astro
---
export interface Props {
  variant?: 'hero' | 'content' | 'accent' | 'minimal';
}
const { variant = 'content' } = Astro.props as Props;

// Dark-First Design gemäß Governance
const variantClasses: Record<string,string> = {
  hero: 'py-20 sm:py-28 bg-primary text-primary',
  content: 'py-16 sm:py-20 bg-secondary text-primary',
  accent: 'py-20 sm:py-28 bg-accent text-white',
  minimal: 'py-12 bg-primary text-primary'
};
---
<section class={`section-wrapper ${variantClasses[variant]}`}>
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <slot />
  </div>
</section>
```

### 10.2 Button Komponente (Governance-konform)
```astro
---
export interface Props {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'base' | 'lg';
  href?: string;
}
const { variant = 'primary', size = 'base', href } = Astro.props;

const baseClasses = 'inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed';

const variantClasses = {
  primary: 'bg-accent text-white hover:bg-accent-hover',
  secondary: 'bg-gray-800 text-white hover:bg-gray-700',
  outline: 'border border-current text-white bg-transparent hover:bg-white/10'
};

const sizeClasses = {
  base: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]}`;
const Element = href ? 'a' : 'button';
---
<Element class={classes} href={href}>
  <slot />
</Element>
```

### 10.3 Responsive Grid Pattern
```astro
<!-- Lösung-Sektion mit Cards -->
<section class="py-20 bg-secondary">
  <div class="max-w-5xl mx-auto px-4 sm:px-6">
    <h2 class="text-3xl lg:text-4xl font-bold text-center text-primary mb-16 text-shadow-headline">
      Meine Lösung
    </h2>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <!-- Cards hier -->
    </div>
  </div>
</section>
```

### 10.4 Accessibility Best Practices
```astro
<!-- Fokus-Management -->
<button 
  class="px-6 py-3 bg-accent text-white rounded-lg focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-black"
  aria-describedby="button-description"
>
  Jetzt starten
</button>
<span id="button-description" class="sr-only">
  Öffnet das Anmeldeformular für Operation Zündkapsel
</span>

<!-- Skip-Link -->
<a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-accent text-white px-4 py-2 rounded-lg z-50">
  Zum Hauptinhalt springen
</a>
```

## 11. Änderungs- & Versions-Policy
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
