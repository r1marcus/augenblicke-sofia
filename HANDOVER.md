# Übergabe — augenblicke (Fotografie-Website Sofia Rüb)

Stand: 2026-09-14

Portfolio-Website für die Fotografin **Sofia Rüb** (Marke „augenblicke").
Live: **https://augenblicke-sofia.vercel.app**

---

## 1. Wo liegt was

| | |
|---|---|
| **Projektordner (lokal)** | `~/Ruebstudio/Sofia` |
| **GitHub-Repo** | `github.com/r1marcus/augenblicke-sofia` (Branch `main`, aktuell **public**) |
| **Vercel-Projekt** | `augenblicke-sofia`, Team/Owner `mrueb-8674` (m.rueb@foresthub.ai), Plan **Hobby** |
| **Live-URL** | https://augenblicke-sofia.vercel.app |
| **Bild-Originale (Vollauflösung)** | im ZIP `~/Downloads/Websit.zip` bzw. Lightroom-Share — NICHT im Repo |

---

## 2. Technik

- **Next.js 14** (App Router) + **TypeScript**, Node 22.
- Styling: **CSS Modules** pro Komponente + globale `app/globals.css` (Design-Tokens als CSS-Variablen).
- Bilder: `next/image` mit `images: { unoptimized: true }` (in `next.config.js`) — Bilder werden direkt aus `public/images/` ausgeliefert.
- **Schriften** (via `next/font/google`): **Playfair Display** (Überschriften/Marke/elegante Akzente) + **Jost** (Nav, Labels, Buttons, Fließtext). Genau zwei Schriften.
- **Farbschema** (Vorlage: tinaszabo.at): warmes Beige `#f1ece3` / Taupe-Greige `#d9d1c1` / Nahezu-Schwarz `#23262a` + Khaki-Grün-Akzent `#6e7248`.

### Projektstruktur (Kern)
```
app/
  page.tsx              Startseite (Hero-Triptychon, Intro, Galerie-Grid, CTA)
  galerie/page.tsx      Galerie-Übersicht
  galerie/[slug]/page.tsx  einzelne Galerie (Grid + Lightbox)
  ueber-mich/page.tsx   Über mich (2 Porträts + Text, Familienfoto, FaithSection)
  kontakt/page.tsx      Kontakt (Text + Formular + Direktkontakt)
  impressum/ datenschutz/  Pflichtseiten (PLATZHALTER!)
  globals.css           Design-System
components/             Header, Footer, GalleryCards, PhotoGrid, ContactForm, FaithSection, FadeIn
lib/
  galleries.ts          zentrale Galerie-Daten (slug, title, category, cover, images[])
  site.ts               Marke, Kontaktdaten, Navigation
public/images/          alle Bilder (web-optimiert, max 2000px)
```

---

## 3. DEPLOYEN (wichtig!)

Ab jetzt ganz normal über Git:
```bash
cd ~/Ruebstudio/Sofia
git add -A && git commit -m "…"
git push origin main       # löst automatisch den Vercel-Deploy aus
```
Commit-Autor muss `Marcus Rüb <39944805+r1marcus@users.noreply.github.com>` sein (ist so konfiguriert).

### ⚠️ Deploy-Falle, die uns lange aufgehalten hat
Das Vercel-Konto läuft unter **`mrueb`**, das Repo/die Commits unter GitHub **`r1marcus`** — zwei Identitäten. Auf dem **Hobby-Plan** blockt Vercel Deploys von **privaten** Repos, deren Commit-Autor nicht der Konto-Owner ist (Fehler: „commit author did not have contributing access … Hobby does not support collaboration for private repositories"; Deploys stehen dann in `vercel ls` auf **UNKNOWN** und die Live-Seite friert ein).
**Deshalb ist das Repo aktuell `public`** → dann deployen private-Autor-Commits problemlos.
Es liegt NICHT an Commit-Mail, Autor-Name, History oder Repo-Größe — daran nicht rumdoktern.

**Wenn Deploys wieder blocken:**
- prüfen: `git push` gelaufen? Repo noch public? (`gh repo view r1marcus/augenblicke-sofia --json visibility`)
- Notfalls Repo public halten oder Vercel-Team auf **Pro** upgraden (dann geht auch privat).
- (Die Konto-Verknüpfung wurde inzwischen von Vercel repariert; privat sollte theoretisch wieder gehen — vor Umstellung testen.)

---

## 4. Bilder hinzufügen / ändern

1. **Immer web-optimieren** bevor sie ins Repo kommen (Originale sind riesig, 6000px/6MB):
   ```bash
   sips -Z 2000 -s format jpeg -s formatOptions 80 <datei> --out <datei>
   ```
2. Bilder nach `public/images/<galerie-slug>/` kopieren.
3. In `lib/galleries.ts` die Pfade zur `images`-Liste der Galerie hinzufügen (und ggf. `cover` setzen).
4. `npm run build` lokal testen → committen → pushen.

Neue Galerie = neues Objekt in `lib/galleries.ts` mit `slug`, `title`, `category`, `cover`, `images[]` + Ordner `public/images/<slug>/`.

---

## 5. Aktuelle Galerien

| Galerie | Kategorie | Bilder |
|---|---|---|
| Salome & Marco | Paar | 19 |
| Emilie & Erik | Hochzeit | 107 |
| Fabian & Alina | Hochzeit | 58 |
| Joshi & Clara | — | 105 |
| Lio & Lea | — | 56 |
| Evan & Ariane | — | 48 |
| Jonas & Debora | — | 36 |
| Familie A. | Familie | 34 (inkl. 3. Lightroom-Shooting) |

Hinweis: Die Lightroom-Share-Downloads hatten **kein EXIF** mehr (Datum/Kamera entfernt) → Zuordnung/Sortierung war nur nach Bildinhalt möglich.

---

## 6. OFFENE PUNKTE (vor öffentlichem Bewerben erledigen)

1. **Impressum & Datenschutz** — aktuell nur Platzhalter (`app/impressum/`, `app/datenschutz/`). In Deutschland **Pflicht**. Echte Angaben (voller Name, Anschrift, verantwortliche Person, tatsächliche Datenverarbeitung) einsetzen.
2. **Kontaktformular-Backend** — läuft aktuell nur als `mailto:`-Fallback an `sofia.schelly@outlook.de` (öffnet das Mailprogramm des Besuchers, versendet nichts automatisch). Für echten Versand: Formspree/Web3Forms/FormSubmit-Endpoint eintragen (`components/ContactForm.tsx`, `USE_FORMSPREE`).
3. **Repo wieder auf `private`?** — besser für die Kundenfotos; vor Umstellung Deploy gegentesten (siehe Deploy-Falle).
4. **Eigene Domain** — z.B. `augenblicke-rueb.de` in Vercel unter Settings → Domains verbinden; danach `metadataBase` in `app/layout.tsx` anpassen.
5. **Glaubensbezug** auf „Über mich" (`components/FaithSection.tsx`) — bewusst als eigene, leicht entfernbare Komponente; bleibt drin, bis Sofia anders entscheidet.
6. **Bildrechte** — echte Paare/Familien sind erkennbar; Einverständnis zur öffentlichen Nutzung sollte vorliegen.

---

## 7. Kontaktdaten (Sofia)

- E-Mail: sofia.schelly@outlook.de
- Instagram: @augenblicke___
- Standort: Villingen im Schwarzwald, deutschlandweit im Einsatz

---

## 8. Design-Referenzen

- Layout/Struktur: cocogonserphotography.com (Nachbau, eigene Inhalte)
- Schrift + Farbschema: tinaszabo.at (Playfair-Ersatz für deren „FiftyFifty"; „FiftyFifty" ist kommerziell — bei Bedarf Lizenz kaufen und lokal einbinden)
- Design-Spec-Notizen: `design-reference/` im Repo
