# Design Token System - Implementierungsguide

## Übersicht

Das neue Design Token System für `mindset-schlaegt-grosskonzern` implementiert eine zentrale, skalierbare Lösung für alle Design-relevanten Konstanten. Dieses System löst die Inkonsistenzen zwischen der CSS Governance-Dokumentation und der Tailwind-Konfiguration.

## Architektur

### 1. Zentrale Token-Datei (`src/tokens.js`)

Die **Single Source of Truth** für alle Design-Tokens:

```javascript
import { designTokens } from './src/tokens.js';
```

**Vorteile:**
- Konsistente Farben zwischen Dokumentation und Implementation
- Einfache Theme-Erweiterung (Light-Mode vorbereitet)
- Wartbarkeit durch zentrale Pflege
- Cross-System-Kompatibilität (Tailwind + CSS Custom Properties)

### 2. Modularisierte Tailwind-Plugins

Das monolithische Plugin wurde in spezialisierte Module aufgeteilt:

```
src/tailwind-plugins/
├── utilities.js    # Utility-Klassen (.sr-only, .text-shadow-headline)
├── buttons.js      # Button-Varianten (.btn-primary, .btn-secondary)
├── cards.js        # Card-Komponenten (.card-base, .card-interactive)
├── forms.js        # Formular-Elemente (.form-input, .form-label)
└── layout.js       # Layout-Helfer (.content-prose, .section-spacing)
```

**Vorteile:**
- Bessere Wartbarkeit und Testbarkeit
- Modulare Erweiterungen möglich
- Klare Verantwortlichkeiten
- Einfachere Code-Reviews

### 3. CSS Custom Properties Integration

In `src/styles/global.css` sind CSS-Variablen definiert, die:
- Theme-Switching ermöglichen
- Fallback für Nicht-Tailwind-Code bieten
- Performance durch Browser-Caching verbessern

## Wichtige Verbesserungen

### Token-Konsistenz (BEHOBEN)
- **Vorher:** Governance: `accent: #2563eb`, Tailwind: `accent: #3b82f6`
- **Nachher:** Einheitlich `accent: #2563eb` aus zentraler Token-Datei

### Lesbarkeit-Optimierungen
- Neue `.content-prose` Klasse mit max-width von 65ch
- Verbesserte Typografie mit optimalen Zeilenlängen
- `.prose-improved` Klasse für besseren Fließtext-Rhythmus

### Card-Animationen
- Subtile Y-Translation bei Hover (`-translate-y-1`)
- Verbesserte Shadow-Übergänge
- Accessibility-freundliche Fokus-States

### Barrierefreiheit
- Erweiterte `.card-interactive` für fokussierbare Cards
- Verbesserte Formular-Accessibility in `.form-input`
- Konsistente `:focus-visible` States mit CSS Custom Properties

## Verwendung

### Neue SectionWrapper Props

```astro
<SectionWrapper variant="content" spacing="compact" prose={true}>
  <!-- Inhalt -->
</SectionWrapper>
```

**Spacing-Optionen:**
- `compact`: Engere Abstände für dichtere Layouts
- `normal`: Standard-Abstände (default)  
- `spacious`: Großzügigere Abstände für Hero-Bereiche

### Erweiterte Card-Komponente

```astro
<Card 
  title="Modul A"
  interactive={true}
  aria-label="Klicken Sie hier für Details zu Modul A"
  id="module-a-card"
>
  Inhalt der Card
</Card>
```

### Neue Layout-Utilities

```html
<div class="content-prose">        <!-- Optimale Lesbreite -->
<div class="section-spacing">     <!-- Konsistentes Section-Padding -->
<div class="container-responsive"><!-- Responsive Container mit Padding -->
<div class="text-readable">       <!-- 65ch max-width für Text -->
```

## Migration Guide

### Für neue Komponenten
1. Importiere `designTokens` aus `src/tokens.js`
2. Verwende die modularen Plugin-Klassen
3. Nutze CSS Custom Properties für dynamische Styles

### Für bestehende Komponenten
- Bestehende Klassen funktionieren weiterhin
- Schrittweise Migration auf neue Token-basierte Klassen empfohlen
- `.content-narrow` kann durch `.content-prose` ersetzt werden für bessere Lesbarkeit

## Maintenance

### Token-Änderungen
Alle Änderungen erfolgen in `src/tokens.js`. Die Tokens propagieren automatisch in:
- Tailwind-Konfiguration
- CSS Custom Properties  
- Alle abgeleiteten Plugin-Klassen

### Plugin-Erweiterungen
Neue Plugin-Module können einfach in `src/tailwind-plugins/` erstellt und in `tailwind.config.mjs` eingebunden werden.

## Performance Impact

- **Build-Zeit:** Minimal erhöht durch modulare Imports
- **Bundle-Größe:** Unverändert (nur Umstrukturierung)
- **Runtime:** Verbessert durch optimierte CSS Custom Properties
- **Caching:** Besser durch zentrale Token-Datei

## Nächste Schritte

1. **Light-Mode Implementation:** Token-System ist bereit für Theme-Switching
2. **Component Library:** Weitere spezialisierte Komponenten basierend auf den Tokens
3. **Design System Documentation:** Automatische Generierung aus Token-Datei
4. **A11y Audits:** Regelmäßige Accessibility-Tests mit Lighthouse

---

**Wichtiger Hinweis:** Alle Änderungen sind rückwärtskompatibel. Bestehender Code funktioniert unverändert, neue Features erweitern das System ohne Breaking Changes.