# UX-/UI-Brainstorming – Landingpage "Mindset schlägt Grosskonzern"

## Annahmen
- Die Landingpage bleibt Single-Page mit Lead-Magnet-Funnel; Fokus liegt auf Lesbarkeit, Emotion und klarer CTA-Führung.
- Dark-Mode-Governance ist verbindlich (rein schwarzer Hintergrund, White Cards nur für fokussierte Inhalte).
- Bestehender Inhalt (Copy) bleibt unverändert, Anpassungen erfolgen nur an Layout, Rhythmus und Interaktion.
- Formspree-Formular bleibt funktional unverändert; nur visuelle Optimierung vorgesehen.

## Card-Gestaltung – Varianten

### Variante A: Gleich hohe Feature-Cards
- `grid grid-cols-1 md:grid-cols-3` mit `gap-8`, `items-stretch`.
- Card-Inhalt über `flex flex-col h-full justify-between` strukturieren.
- `min-h-[360px]` für Desktop, `min-h-[320px]` für Mobile.
- Hover: `hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10` (gemäß Tokens).
- Vorteil: Ruhige, ausgeglichene Höhe, reduziert Scrolltiefe.

### Variante B: Storytelling-Stack
- Column-Layout bleibt, aber Cards erhalten `grid`-Layout für Icon/Badge + Text.
- Nutzt Step-Badge (`span` mit `bg-accent text-white rounded-full px-3 py-1`), erzeugt Mentoring-Stufen.
- Hover: leichter Border-Shift (`hover:border-accent/60`) plus `hover:bg-surface/95`.
- Vorteil: Visuelle Abfolge, die Fortschritt vermittelt.

### Variante C: Split-Surface
- Jede Card bleibt dunkel (`bg-background-secondary`) mit `border border-border-default`, inside `inner-card` mit White-Surface für Key Points.
- Hover: Weicher Glanz (`hover:shadow-[0_0_30px_rgba(37,99,235,0.25)]`).
- Vorteil: Bleibt im Dark-Mode, schafft dennoch Hierarchie ohne große helle Flächen.

## FAQ-Interaktion – Varianten

### Variante 1: Native `<details>/<summary>`
- Jeder Eintrag als `<details>` mit `summary` (Frage) + `div` (Antwort).
- Tailwind Utilities für Fokus-State (`focus-visible:ring-2 focus-visible:ring-accent`).
- Vorteil: Browser-nativ, minimaler JS-Bedarf, gute A11y.

### Variante 2: Eigene Accordion-Komponente
- Astro-Komponente `FaqAccordion.astro` mit Keyboard-Steuerung (Arrow-Up/Down).
- Nutzt `role="button"`, `aria-expanded`, `aria-controls`.
- Vorteil: Mehr Kontrolle (Animation, Icon-Rotation), kann wiederverwendet werden.

### Variante 3: Timeline-FAQ
- FAQ als vertikale Timeline (`border-l-2 border-accent/30`) mit klickbaren Items.
- Antworten erscheinen innerhalb eines expandierenden Panels (CSS-Transition `max-height`).
- Vorteil: Storytelling-Effekt, passend zum "Operationsplan"-Narrativ; komplexer in Umsetzung.

## Akzentfarben / Hover – Varianten

### Option Alpha: Dunkler Hover
- `accent-hover` zu `#1d4ed8` (ca. 15% dunkler) ändern.
- Buttons bleiben konsistent, Hover wirkt kräftiger.
- Fokus-Ring bleibt `#2563eb` oder erhält eigene Variable `accent-ring`.

### Option Beta: Heller Hover
- `accent-hover` zu `#60a5fa` (heller).
- Hover vermittelt Aufhellung, aber Vorsicht bei Kontrast zu weißem Text.

### Option Gamma: Zweiter Akzent (Gradient)
- Sekundärer Akzent `accent-secondary` (`#9333ea`) für Hover-Overlay.
- Button-Hover: Hintergrund bleibt blau, border/inner glow wechselt zu lila.
- Risiko: Weicht vom klaren Blau-Fokus ab; nur nutzen, wenn Story es rechtfertigt.

## Formular & Rhythmus – Quick Wins
- `max-w-md` Wrapper für Input + Button, mittig ausrichten (Mobile `w-full`).
- `gap-3` im Formular, `sm:flex-row` mit `flex-wrap` fallback.
- Sektionen nach Governance angleichen (`py-20 md:py-28`), `space-y-16 md:space-y-20` für inhaltliche Blöcke.

## Empfehlung (Kurzfassung)
- Cards: Variante A als Basis, Badge aus Variante B optional für zusätzliche Struktur.
- FAQ: Start mit `<details>/<summary>`, planbar späterer Wechsel zu Komponente.
- Accent-Hover: Option Alpha (dunkler) für klareres Feedback.
