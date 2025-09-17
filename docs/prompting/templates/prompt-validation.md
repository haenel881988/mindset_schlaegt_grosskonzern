# Prompt-Vorlage: Validieren & Verifizieren (Copy-Paste)

Ziel: Die KI soll vor der Umsetzung den Prompt prüfen, Unklarheiten benennen, Annahmen transparent machen und erst nach Bestätigung starten – oder (falls explizit gewünscht) selbstständig mit dokumentierten Annahmen fortfahren.

---

## 1) Auftrag

Beschreibe kurz, was erreicht werden soll – in 1–3 Sätzen.

> Beispiel: „Erstelle eine Landingpage-Sektion in `src/content/pages/index.mdx` mit Hero (H1/H2), Bild rechts, drei Cards darunter.“

## 2) Erwartungen / Abnahmekriterien

- [ ] Konkrete Outputformate (Dateien, Codeblöcke, Pfade)
- [ ] Qualitätskriterien (Build/Lint ok, keine Breaking Changes)
- [ ] Test-/Prüfschritte (z. B. Build-Befehl, Screenshot, Snippet)

## 3) Kontext (nur Relevantes!)

- Tech-Stack (z. B. Astro 5, Tailwind, MDX)
- Projektbesonderheiten (z. B. Startseite rendert `src/content/pages/index.mdx` via `src/pages/index.astro`)
- Regeln/Policies (z. B. keine `slug`-Felder, Varianten in `SectionWrapper`)
- Links/Dateipfade (z. B. `src/components/ui/Card.astro`)

## 4) Annahmen der KI vorab prüfen lassen

Bitte prüfe meinen Prompt auf Lücken/Mehrdeutigkeiten und liste deine Annahmen. Antworte zuerst nur mit:

- „Offene Punkte:“ (max. 5, präzise Fragen)
- „Geplante Annahmen (falls keine Antwort):“ (max. 5, mit kurzer Begründung)
- „Geplanter Ablauf:“ (3–7 Schritte, knapp)

Starte erst nach meiner Bestätigung mit der Umsetzung. Falls ich „autonom fortfahren“ schreibe, darfst du mit deinen dokumentierten Annahmen starten und sie im Ergebnis kenntlich machen.

## 5) Output-Form

- Nutze die im Projekt üblichen Tools (Dateiedits, keine unnötigen Codeblöcke)
- Fasse am Ende kurz zusammen: Was geändert wurde, wo, wie zu testen
- Bei Änderungen: Mache eine Mini-Checkliste (Build, Lint, Smoke-Test)

---

### Beispiel-Prompt (Copy/Paste)

> Aufgabe: Implementiere eine neue Section in `src/content/pages/index.mdx` unterhalb der „proof“-Section mit drei Cards. Verwende `Card.astro` und das vorhandene Grid (`.card-grid`).
>
> Erwartungen / Abnahmekriterien:
> - [ ] Nur Änderungen in `index.mdx`
> - [ ] Keine Breaking Changes
> - [ ] Nachher: Build ohne Fehler
>
> Kontext:
> - Astro 5, Tailwind 3, MDX aktiv
> - `SectionWrapper` Varianten: `hero`, `light`, `proof`, `story`, `accent`
> - Card-Komponente: `src/components/ui/Card.astro`
>
> Bitte zuerst validieren & verifizieren und mit folgendem Schema antworten:
> 1) Offene Punkte (max. 5)
> 2) Geplante Annahmen
> 3) Geplanter Ablauf (3–7 Schritte)
> Starte erst nach Bestätigung. Wenn ich „autonom fortfahren“ schreibe, darfst du beginnen.
