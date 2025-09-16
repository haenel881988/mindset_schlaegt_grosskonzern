Rolle: Du bist ein Elite-UI/UX-Architekt und Frontend-Entwickler. Deine Aufgabe ist die Erstellung einer präzisen, umfassenden und zukunftssicheren "Styling Governance" nach einem strengen, dokumentationsgetriebenen Protokoll.Ziel: Erstelle die finale "Styling Governance"-Dokumentation, die alle visuellen und interaktiven Aspekte des Projekts definiert, und protokolliere den Prozess gemäss dem "Simon Recht Operationsprotokoll V1.0".PROTOKOLL V1.0: VOR DER AKTION1. Arbeitsstand sichern und Mission definieren:Führe die folgenden Git-Befehle aus.git add .
git commit -m "feat(docs): Initialisierung der finalen Styling Governance"
git push
AKTION: FINALE STYLING GOVERNANCE ERSTELLENSchritt 1: Bestehende Governance-Datei löschen und neu anlegenLösche die alte Datei /docs/technical/styling-governance.md, falls sie existiert, und erstelle sie neu, um einen sauberen Start zu gewährleisten.Schritt 2: Inhalt der finalen Styling Governance definierenFüge den folgenden, detaillierten Inhalt in die Datei /docs/technical/styling-governance.md ein.# Styling Governance: mindset-schlaegt-grosskonzern (V3.0)

Dieses Dokument ist die verbindliche visuelle Verfassung des Projekts und definiert alle Design-Tokens, Komponenten und interaktiven Muster.

## 1. Philosophische Grundlage

Das Design folgt der Botschaft: **Klarheit, Stärke, Präzision**. Wir nutzen einen minimalistischen, kontrastreichen Dark-Mode, der Seriosität ausstrahlt und den Inhalt in den absoluten Fokus stellt. Jedes Element ist auf Lesbarkeit, Zugänglichkeit (Accessibility) und eine intuitive **Mobile-First User Experience** optimiert.

## 2. Design Tokens

Design Tokens sind die atomaren Bausteine des UI-Systems.

### 2.1. Farbpalette (Maximaler Kontrast)

- **Hintergrund (`bg`):**
  - `primary`: Reines Schwarz (`#000000`).
  - `secondary`: Ein sehr dunkles Grau für abgesetzte Sektionen (`#111111`).
- **Text (`text`):**
  - `primary`: Reines Weiss (`#FFFFFF`).
  - `secondary`: Helles Grau für Metadaten (`#A0A0A0`).
- **Borders & Trennlinien (`border`):**
  - `default`: Subtiles, dunkles Grau (`#27272a`).
- **Akzentfarbe (`accent`):**
  - `default`: Strategisches, vertrauensvolles Blau (`#2563eb`).
  - `hover`: Eine hellere Variante des Blaus für Interaktion (`#3b82f6`).
- **Feedback-Farben:**
  - `error`: Ein klares Rot für Fehlermeldungen (`#dc2626`).
  - `success`: Ein positives Grün für Erfolgsmeldungen (`#16a34a`).

### 2.2. Typografie

Die Typografie ist das zentrale Werkzeug der Kommunikation.

- **Schriftart:** "Inter", eine moderne Sans-Serif, geladen über Google Fonts.
- **Textschatten für Headlines:** Ein subtiler Schatten hebt Headlines vom Hintergrund ab und erzeugt Tiefe. Klasse: `[text-shadow:1px_1px_3px_rgba(0,0,0,0.5)]` (Wird als Tailwind-Plugin konfiguriert).

#### Schriftgrössen (Responsive)

| Element         | Mobile (`text-`) | Desktop (`lg:text-`) | Beschreibung          |
| --------------- | ---------------- | -------------------- | --------------------- |
| **H1**          | `4xl` (36px)     | `6xl` (60px)         | Haupt-Headline        |
| **H2**          | `3xl` (30px)     | `4xl` (36px)         | Sektions-Titel        |
| **H3**          | `xl` (20px)      | `2xl` (24px)         | Unter-Titel           |
| **Body**        | `lg` (18px)      | `lg` (18px)          | Fliesstext, Absätze   |
| **Lead**        | `xl` (20px)      | `xl` (20px)          | Einleitender, fette Text |
| **Small / Meta**| `base` (16px)    | `base` (16px)        | Bildunterschriften, Daten |

- **Zeilenabstand:**
  - Headlines: `leading-tight`
  - Body: `leading-relaxed`

### 2.3. Spacing & Sizing

Ein konsistentes Spacing basiert auf einem **8px-Grid**. Tailwind's default spacing scale wird verwendet (`1` = 4px, `2` = 8px, etc.).

- **Container:** `max-w-5xl mx-auto px-4 sm:px-6`
- **Sektionsabstand (vertikal):** `py-20 sm:py-28`
- **Grid-Abstand:** `gap-8`

## 3. Komponenten-Bibliothek

### 3.1. Buttons

Buttons sind das primäre interaktive Element für Aktionen.

| Style     | Hintergrund      | Text      | Border                 | Hover-Hintergrund | Anmerkung                               |
| --------- | ---------------- | --------- | ---------------------- | ----------------- | --------------------------------------- |
| **Primary** | `bg-accent`      | `text-white` | `border-transparent`   | `bg-accent-hover` | Für die wichtigste Aktion (CTA)         |
| **Secondary**| `bg-gray-800`    | `text-white` | `border-transparent`   | `bg-gray-700`     | Für sekundäre Aktionen                  |
| **Outline** | `bg-transparent` | `text-white` | `border-current`       | `bg-white/10`     | Weniger dominante Aktionen              |

- **Allgemeines Button-Styling:**
  - **Padding:** `px-6 py-3`
  - **Schriftgrösse:** `text-base font-semibold`
  - **Abrundung:** `rounded-lg`
  - **Transition:** `transition-all duration-200 ease-in-out`
- **States:**
  - **Focus:** `focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent focus-visible:ring-offset-black`
  - **Disabled:** `disabled:opacity-50 disabled:cursor-not-allowed`

### 3.2. Cards

Cards gruppieren zusammengehörige Inhalte visuell.

- **Basis:** `bg-secondary rounded-xl overflow-hidden`
- **Padding:** `p-8`
- **Border:** `border border-gray-800`
- **Schatten (optional für Hover):** `hover:shadow-2xl hover:shadow-blue-500/10`

### 3.3. Formular-Elemente

- **Input & Textarea:**
  - **Basis:** `bg-black border-2 border-gray-800 rounded-lg w-full`
  - **Padding:** `px-4 py-3`
  - **Text:** `text-white`
  - **Focus:** `focus:border-accent focus:ring-0`
- **Label:** `block text-sm font-medium text-gray-400 mb-2`

## 4. Layout & Sektionen (AIDA-Struktur)

- **Allgemein:** Siehe `2.3. Spacing & Sizing`.
- **`<!-- AIDA: Attention (Hero) -->`:** Maximaler visueller Fokus. Grosse H1, minimaler Text.
- **`<!-- AIDA: Interest (Story/Problem) -->`:** Optimiert für Lesefluss. Grosszügige Abstände.
- **`<!-- AIDA: Desire (Lösung/Cards) -->`:** Visuelle Struktur durch Cards im Grid (`grid grid-cols-1 md:grid-cols-3 gap-8`).
- **`<!-- AIDA: Action (CTA) -->`:** Visuell hervorgehobene Sektion, oft mit `bg-secondary`. Der Primary Button ist das dominanteste Element.

## 5. Globale Elemente & Animation

### 5.1. Header & Footer

- **Header:** `bg-black/80 backdrop-blur-sm sticky top-0 z-50 border-b border-gray-900`.
- **Footer:** Minimalistisch. `border-t border-gray-800 mt-24 py-8`.

### 5.2. Interaktivität & Motion

- **Transitions:** Alle interaktiven Elemente erhalten eine sanfte `transition-colors duration-200`.
- **Hover-Effekte:** Elemente heben sich dezent ab (z.B. `transform hover:-translate-y-1`).
- **Focus States:** Alle klickbaren Elemente MÜSSEN einen klaren `focus-visible`-State haben (siehe Buttons). Dies ist entscheidend für die Barrierefreiheit.

## 6. Accessibility (A11y)

- **`sr-only`:** Eine Klasse, um Elemente nur für Screenreader sichtbar zu machen, ist zu implementieren.
- **Kontraste:** Die gewählten Farben stellen sicher, dass die WCAG AA-Anforderungen erfüllt sind.
- **Landmarks:** Semantisches HTML (`<header>`, `<main>`, `<footer>`, `<nav>`) ist Pflicht.
- **Icons:** Alle rein dekorativen Icons erhalten `aria-hidden="true"`. Icons mit Funktion benötigen einen `sr-only`-Text.
PROTOKOLL V1.0: NACH DER AKTION (AFTER ACTION REVIEW)1. After Action Review (AAR) & Changelog erstellen:Erstelle eine neue Datei unter /docs/changelog/ (erstelle den Ordner, falls nicht vorhanden) mit dem Namen YYYY-MM-DD_styling-governance-v3.md (ersetze YYYY-MM-DD mit dem heutigen Datum) und füge den folgenden AAR-Inhalt ein.# After Action Review: Finale Styling Governance V3.0

- **Datum:** 2025-09-16
- **Ticket/Issue:** N/A

### 1. Was war das geplante Ziel (Intent)?
Ziel war die massive Erweiterung der Styling Governance (V2.0) zu einer umfassenden, atomaren Design-System-Dokumentation (V3.0). Es sollten spezifische Lücken bei Komponenten (Buttons, Forms), Spacing und Accessibility geschlossen werden, um eine lückenlose visuelle Verfassung zu schaffen.

### 2. Was ist tatsächlich passiert (Result)?
- Die Datei `/docs/css/css_governance.md` wurde mit der Version 3.0 überschrieben.
- **Design Tokens** wurden als primäre Struktur eingeführt (Farben, Typo, Spacing).
- Eine detaillierte **Komponenten-Bibliothek** wurde definiert, inklusive Spezifikationen für **Buttons** (mit Varianten und States), **Cards** und **Formular-Elemente**.
- Die **Accessibility-Richtlinien** wurden präzisiert (`focus-visible`, `sr-only`).
- Das Protokoll wurde auf V3.0 aktualisiert, um den neuen Detaillierungsgrad widerzuspiegeln.

### 3. Was lief gut und warum?
Die Umstellung auf eine Token-basierte Struktur (`Farben`, `Spacing`) und eine explizite Komponenten-Bibliothek macht die Governance extrem praxistauglich. Anstatt nur abstrakte Regeln vorzugeben, liefert sie jetzt eine konkrete "Speisekarte" an UI-Elementen. Das ist für die Entwicklung direkt umsetzbar.

### 4. Reverse Engineering der Änderungen & Learnings
- **Diff:** Ersetzung einer allgemeinen Governance durch ein detailliertes Design-System-Dokument.
- **Erkenntnis:** Eine wirklich gute Governance muss auf der Ebene von **Design Tokens** und **Komponenten-States** operieren. Die Definition von `focus-visible` anstelle von `focus` ist eine wichtige technische Nuance für bessere A11y. Die explizite Definition von Button-Varianten (Primary, Secondary) verhindert zukünftige Inkonsistenzen.
2. AAR sichern und Mission abschliessen:Führe die folgenden Git-Befehle aus.git add .
git commit -m "docs(governance): Upgrade auf Styling Governance V3.0"
git push
