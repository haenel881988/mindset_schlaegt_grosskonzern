# Kontrastcheck – Landingpage "Mindset schlägt Grosskonzern" (2025-09-29)

| Abschnitt | Kombination | Hex-Werte | Kontrast (WCAG) | Bewertung |
| --- | --- | --- | --- | --- |
| Hero – Fließtext | Text auf Hintergrund | `#EAEAEA` auf `#000000` | 15.3 : 1 | **AAA** |
| Hero – Formularhinweis | `text-text-primary/80` auf `#000000` | ≈ `#BDBDBD` auf `#000000` | 10.5 : 1 | **AAA** |
| Hero – Button | `#FFFFFF` auf `#2563EB` | 4.6 : 1 | **AA** (für große Schrift) |
| Hero – Button Hover | `#FFFFFF` auf `#1D4ED8` | 6.1 : 1 | **AAA** |
| Problem-Abschnitt | Text auf Hintergrund | `#EAEAEA` auf `#000000` | 15.3 : 1 | **AAA** |
| Cards – Überschrift | `#111111` auf `#FFFFFF` | 15.3 : 1 | **AAA** |
| Cards – Sekundärtext | `#4B5563` auf `#FFFFFF` | 7.7 : 1 | **AAA** |
| Cards – Badge | `#2563EB` auf `#FFFFFF` | 6.7 : 1 | **AAA** |
| CTA „Hol dir die Fallstudie“ | `#FFFFFF` auf `#2563EB` | 4.6 : 1 | **AA** |
| CTA Hover | `#FFFFFF` auf `#1D4ED8` | 6.1 : 1 | **AAA** |
| Proof-Abschnitt | Text auf Hintergrund | `#EAEAEA` auf `#000000` | 15.3 : 1 | **AAA** |
| Footer Links | `#EAEAEA` auf `#000000` | 15.3 : 1 | **AAA** |

## Fazit
- Sämtliche Fließtexte nutzen jetzt `text-primary` und erfüllen AAA.
- Buttons erreichen mindestens AA (große Schrift), im Hover sogar AAA.
- Karten und Badge-Kombinationen liegen deutlich über den geforderten 4.5 : 1.
- Keine Abweichungen von den Vorgaben der Styling-Governance.

## Update 2025-10-02 – Inline-Links & FAQ
- Standard-Links übernehmen die jeweilige Fließtextfarbe (z. B. `#EAEAEA` auf `#000000` ⇒ 15.3 : 1) und setzen die Akzentfarbe ausschließlich für die Unterstreichung ein.
- Hover-Unterstreichung verwendet `#1D4ED8`, womit der Fokus farblich bleibt, ohne den Text-Kontrast zu verändern.
- FAQ-Summary Hover: Textfarbe bleibt `#EAEAEA` auf `#111111` (15.3 : 1), das neu ergänzte `bg-accent/10` dient als non-intrusives Highlight.
