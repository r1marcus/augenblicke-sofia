# Design-Referenz-Spezifikation

**Referenz-Quelle:** https://www.cocogonserphotography.com/ (Coco Gonser Photography, Hochzeits-/Portraitfotografin, München)
**Zweck:** Design-System-Blueprint zum Nachbau einer neuen Website (Projekt "Sofia") in derselben Design-Sprache — mit **anderen Inhalten, Fotos und Texten**. Dies dokumentiert ausschließlich Layout- und Stilmuster, keine zu übernehmenden Assets.
**Technischer Unterbau der Referenz:** Wix.com Website Builder (relevant, weil viele Werte unten direkt aus Wix-Theme-Variablen extrahiert wurden — beim Nachbau frei in HTML/CSS/Tailwind umsetzbar).
**Stand:** 2026-08-27

> Hinweis zur Verlässlichkeit: Font-Familien, Farb-Hex-Codes, Schriftgrößen-Skala, Letter-Spacing und Line-Heights sind **direkt aus dem gerenderten CSS/HTML extrahiert** (hohe Genauigkeit). Struktur/Sektionsreihenfolge stammt aus der gerenderten Seite. Einige Spacing-Werte und das Hover-/Animationsverhalten sind aus Konventionen abgeleitet und als "abgeleitet" markiert.

---

## 1. Gesamt-Charakter (Design-DNA)

Minimalistisch, editorial, hell und großzügig. Sehr viel Weißraum, ruhiges Schwarz/Weiß/Warmgrau-Grundgerüst, das die Fotos allein sprechen lässt. Eleganz entsteht durch die Kombination einer **Serifen-Display-Schrift (Playfair Display) für Headlines** mit einer **schlanken, weit laufenden Sans-Serif (DIN Next Light) für Fließtext, Navigation und Buttons**. Headlines sind auffällig oft **kleingeschrieben** (`weddings & real moments`, `kurze reportagen`) — das ist eine bewusste, wiederkehrende Stil-Signatur. Buttons/Labels dagegen sind **GROSSGESCHRIEBEN mit weitem Letter-Spacing**. Gefühl: hochwertig, emotional, unaufdringlich, "boutique".

---

## 2. Gesamt-Layout & Seitenstruktur

### Seiten (Navigation)
Horizontale Hauptnavigation mit zentriertem Logo. Menüpunkte:

| Nav-Label | Pfad | Charakter der Seite |
|-----------|------|---------------------|
| Weddings | `/weddings` | Portfolio + Leistungs-/Paketseite (Gallery + Preise) |
| Shootings | `/shootings` | Portfolio-/Leistungsseite |
| Studio Days | `/studiodays` | Portfolio-/Leistungsseite |
| About | `/about` | Über-mich / Portrait + Text |
| Kontakt | `/kontakt` | Kontaktformular |
| (Home) | `/` | Landingpage / Übersicht |
| Footer-Rechtliches | `/agb`, `/impressum`, `/datenschutz` | Textseiten |

### Navigationsleiste
- **Aufbau:** Logo/Wortmarke **zentriert**, Menülinks horizontal (klassisches Wix-Header-Muster: Links symmetrisch um das zentrierte Logo oder Logo mittig darüber, Menü darunter).
- **Sticky:** Header bleibt beim Scrollen fixiert/sichtbar (Standard-Wix-Verhalten; beim Nachbau als `position: sticky; top:0` umsetzen). *(abgeleitet)*
- **Menüstil:** reine Textlinks, Sans-Serif (DIN Next Light), **GROSSBUCHSTABEN oder Kapitälchen-Anmutung mit Letter-Spacing**, kein Button-Chrome. Hover: dezente Farb-/Opacity-Änderung oder Unterstreichung. *(Hover abgeleitet)*
- **Hamburger:** nur mobil (siehe §9).

### Grundraster / Grid
- Zentrierter Content-Container mit großzügigen seitlichen Rändern; breite Fotostrecken laufen teils **full-bleed** (randlos).
- Galerien: responsives **mehrspaltiges Grid (Desktop 3–4 Spalten)**, gleiche Zellgröße, kein Masonry.
- Textsektionen: einspaltig zentriert oder zweispaltig (Text / Bild alternierend).

### Typischer Seitenaufbau (Marketing-Funnel, konsistent über Unterseiten)
1. Hero (Bild(er) + kleingeschriebene Headline + Subline)
2. Intro / "Hey, ich bin …" (kurzer persönlicher Text + CTA-Textlink)
3. Portrait der Person
4. Fokus-/Philosophie-Statement (große Headline)
5. Leistungs-Blöcke (2–4 Stück), oft **nummeriert 01–04**, **alternierend Text-links/Bild-rechts**
6. Kundenstimme / Testimonial (Zitat + Bild + Name in Großbuchstaben)
7. Preise/Pakete (mehrere Karten, "ab €…")
8. Social-Feed-Einbindung (Instagram) + "Mehr laden"
9. CTA-Sektion ("… ANFRAGEN")
10. Footer

---

## 3. Typografie

### Font-Familien (exakt aus CSS extrahiert)
| Rolle | Font-Family | Fallback | Einsatz |
|-------|-------------|----------|---------|
| **Headlines / Display** | **Playfair Display** (Serif) | `serif` | H1–H3, große Aussagen, elegante kleingeschriebene Headlines |
| **Body / UI / Nav / Buttons** | **DIN Next W01 Light** (schlanke Sans) | `sans-serif` | Fließtext, Navigation, Buttons, Labels, Preise |
| Sekundär-Sans | Helvetica Neue Light / Thin, Helvetica W01 Light | `sans-serif` | vereinzelt UI/Feintext |
| **Akzent / Signatur** | **Carentro Regular** (dekorative Script-/Signatur-Schrift, custom eingebunden) | — | dekorativer Akzent (z. B. Name/Signatur-Anmutung), sehr sparsam |

**Nachbau-Empfehlung (Google-Fonts-Äquivalente):**
- Playfair Display → identisch als Google Font verfügbar.
- DIN Next Light → freie Alternativen: **"PT Sans" nicht ideal**; besser **"Jost", "Questrial", "Poppins Light"** oder kommerziell "DIN Next". Für die schlanke, weit laufende Anmutung eignet sich **Jost** oder **Questrial** am besten.
- Carentro (Script) → freie Alternative: **"Sacramento", "Parisienne", "Great Vibes"** — nur als sparsamer Signatur-Akzent.

### Schriftgrößen-Skala (aus Wix-Theme `--font_n`, Basis-Line-Height 1.4em)
| Token | Größe / Line-Height | Wahrscheinliche Rolle |
|-------|--------------------|-----------------------|
| Hero-Headline (Inline-Override) | **70px** | größte Hero-Überschrift |
| `--font_3` | **60px** / 1.4em | XL-Display-Headline |
| `--font_0` / `--font_4` | **40px** / 1.4em | H1 |
| `--font_2` / `--font_5` | **25px** / 1.4em | H2 |
| `--font_6` | **22px** / 1.4em | H3 |
| `--font_7` | **17px** / 1.4em | großer Body / Intro-Lead |
| `--font_8` | **15px** / 1.4em | **Standard-Body** |
| `--font_9` | **14px** / 1.4em | kleiner Body / Nav |
| `--font_10` | **12px** / 1.4em | Feintext / Labels / Footer |

Häufigste real gesetzte `font-size`-Werte im Markup: **15px, 14px, 18px, 12px, 13px, 16px** (Body/UI), **70/60/40/32/30/26/25/22px** (Headlines).

### Letter-Spacing
- Fließtext: `0em` / normal.
- **Uppercase-Labels, Buttons, Nav, Namen:** weites Tracking — Werte im CSS: **`0.05em`, `0.1em`, `0.15em`, `0.2em`** sowie `1px`. Faustregel Nachbau: Uppercase-UI = `letter-spacing: 0.1em–0.2em`.
- Große Headlines teils leicht negativ: `-0.5px`.

### Line-Height
- Standard **1.4em** (Theme), Body-Absätze teils **1.5em**, Headlines **1.2em**. Für luftigen Fließtext `1.5`–`1.7em` verwendet.

### Groß-/Kleinschreibung (wichtige Signatur)
- **Headlines: klein geschrieben** (all-lowercase) für den weichen, editorialen Look — z. B. `weddings & real moments`, `kurze reportagen`, `lange reportagen`.
- **Buttons, CTA-Labels, Namen in Testimonials, Nav: GROSSBUCHSTABEN** mit Letter-Spacing — z. B. `MEHR ÜBER MICH`, `EURE HOCHZEIT ANFRAGEN`, `WEITERE HOCHZEITEN`, `LISA & ROMAN`.

---

## 4. Farbpalette

Warm-neutrales, fast monochromes Grundgerüst. Text ist **nicht reines Schwarz**, sondern weiches Warmgrau/Anthrazit — das erzeugt die weiche, hochwertige Anmutung.

### Kern-Palette (aus Wix `--color_n` Theme-Variablen)
| Rolle | Hex | RGB | Quelle |
|-------|-----|-----|--------|
| **Haupt-Hintergrund** | `#ffffff` | 255,255,255 | `--color_0/1/11/36` |
| **Body-Text (weich)** | `#605e5e` | 96,94,94 | `--color_14/45` (Text-Default) |
| **Dunkler Text / Headlines** | `#2f2e2e` | 47,46,46 | `--color_15/37` (häufigster Textwert im Markup) |
| **Reines Schwarz** (sparsam) | `#000000` | 0,0,0 | `--color_2` |
| **Fast-Schwarz** | `#080808` | 8,8,8 | vereinzelt |
| **Mittelgrau** | `#a0a09f` | 160,160,159 | `--color_13/54` (Sekundär/Trenner) |
| **Hellgrau** | `#b0b0b0` | 176,176,176 | `--color_10` |
| **Rahmen-/Divider-Grau** | `#cccccc` | 204,204,204 | `--color_12` |
| **Sehr helles Grau** | `#f1f1f1` / `#f8f8f8` | — | Flächen/Backgrounds |

### Warm-Beige/Creme-Akzente (im Theme angelegt, sparsam als Flächen)
`#fef6ed`, `#fef3e5`, `#fdf1ec`, `#fdead2`, `#fbe3d9` — sehr helle warme Creme-/Nude-Töne für dezente Section-Backgrounds. **Diese warme Creme-Familie ist die "Farbe" der Seite** neben Schwarz/Weiß.

### Warme Akzent-/Terrakotta-Skala (Theme-Palette, für Hover/Highlights nutzbar)
`#f4c0af` (244,192,175) → `#e99f86` → `#de5021` (222,80,33, kräftiges Terrakotta/Coral) → `#94361a` → `#4a1b0b`. Sanfter warmer Akzent-Verlauf; die kräftigen Blau-/Cyan-Werte (`#116dff`, `#30bdff`, `#2b5672`) im Markup sind **Wix-Editor-/Default-Link-Farben und gehören NICHT zum Brand** — beim Nachbau ignorieren.

### Empfohlene Nachbau-Palette (bereinigt)
```
--bg:            #ffffff   /* Seite */
--bg-warm:       #fdf1ec   /* warme Creme-Section (sparsam) */
--text:          #2f2e2e   /* Headlines / starker Text */
--text-soft:     #605e5e   /* Body */
--text-muted:    #a0a09f   /* Sekundär / Captions */
--line:          #cccccc   /* Divider / Rahmen */
--black:         #000000   /* Kontrast, sparsam */
--accent:        #de5021   /* warmes Terrakotta, optional für Hover/Links */
```

---

## 5. Galerie- & Bild-Layouts

- **Grid:** responsives **mehrspaltiges Raster**, Desktop **3–4 Spalten**, gleichmäßige Zellen, **kein Masonry** (konsistente Reihenhöhe).
- **Bild-Ausrichtung:** überwiegend **Portrait (Hochformat)**. Gemessene Rendergrößen: Hero-Karussell ~**550×734px** (≈ 3:4), Portfolio-Grid ~**368×552px** (**2:3**). Nachbau: Grid-Bilder auf `aspect-ratio: 2/3` normieren.
- **Abstände:** **minimale bis keine Gaps** ("edge-to-edge"), Bilder dicht gesetzt; Fotostrecken teils full-bleed über die volle Breite.
- **Präsentationsformen:**
  - **Hero:** Fullscreen-/breites Bildkarussell (mehrere Hochformat-Fotos nebeneinander, slidebar).
  - **Portfolio:** dichtes Grid.
  - **Story-Cards:** einzelne repräsentative Bilder als klickbare Karten mit Ort + Namen darunter.
  - **Instagram-Feed:** eingebettetes Raster mit "Mehr laden"-Button.
- **Hover-Effekt auf Bildern:** dezenter Zoom/Scale (~1.03–1.05) und/oder leichtes Abdunkeln mit eingeblendetem Label; sanfte `transition` ~300–500ms. *(abgeleitet — typisches Muster dieser Site-Klasse)*
- **Lightbox:** Klick öffnet Vollbild-Ansicht/Slider. *(abgeleitet)*

---

## 6. Interaktionen & Animationen

- **Scroll-Reveal:** Sektionen/Bilder **faden beim Scrollen sanft ein** (fade + leichtes Up-Translate), gestaffelt. Sehr charakteristisch für dieses ruhige, editoriale Gefühl. *(abgeleitet, Wix-Standard-Reveal)*
- **Hero-Karussell:** automatisches/manuelles Sliden der Hochformat-Bilder.
- **Hover:** Bilder → sanfter Zoom/Overlay; Textlinks/Buttons → Farb-/Opacity-Wechsel oder Unterstreichung.
- **Übergänge:** durchgehend weich (`ease`, 300–500ms), nichts Hartes/Sprunghaftes.
- **Gefühl:** langsam, ruhig, "atmend"; der Weißraum + sanftes Einblenden erzeugen einen Galerie-/Editorial-Rhythmus. Keine aggressiven Parallax- oder Cursor-Gimmicks.

---

## 7. Spacing & Whitespace

- **Sehr großzügig.** Breite vertikale Abstände zwischen Sektionen (Faustregel Nachbau: `padding-block: 80–140px` auf Desktop je Sektion).
- Headlines mit deutlichem Luftraum darüber/darunter.
- Zentrierte Textsektionen mit begrenzter Zeilenbreite (angenehme Lesebreite ~600–720px).
- Kontrast im Rhythmus: full-bleed Bildstrecken (dicht) ↔ luftige, zentrierte Textblöcke.
- Nachbau-Tokens: Section-Padding groß, Content-Max-Width ~1200–1280px, Text-Max-Width ~680px.

---

## 8. Header / Hero (erster Bildschirm)

- **Aufbau:** breite/fullscreen **Bild-Präsentation zuerst** (Karussell mehrerer Hochformat-Fotos), **darunter** die textliche Begrüßung.
- **Name/Titel-Position:** persönlicher Opener direkt unter der Bildstrecke, z. B. Headline `Hey, ich bin …` (Playfair, groß) + Subline/Tagline (DIN Next Light). Kein Text-Overlay mitten im Bild — Text sitzt **unter** bzw. neben den Bildern, nicht darüber.
- **Tagline-Stil:** ein bis zwei Zeilen, emotional, kleingeschriebene/gemischte Headline + ruhiger Sans-Subtext.
- **Nachbau:** Hero = Vollbreiten-Bild(er) oben, darunter zentrierter Intro-Block (H1 Playfair + Lead DIN Next), viel Weißraum, kein dunkles Overlay nötig.

---

## 9. Footer

- **Aufbau:** schlicht, textbasiert, hell (weißer Hintergrund), zentriert.
- **Link-Reihe:** `Home · AGB · Impressum · Datenschutz · Kontakt` — kleine Sans-Serif-Textlinks (DIN Next Light, ~12–14px), evtl. Uppercase mit Letter-Spacing.
- **Social-Links:** als **Text-Handles**, nicht nur Icons — Stil: `INSTAGRAM @…`, `FACEBOOK …`, `PINTEREST …` (Großbuchstaben, gespreizt). Icons optional dezent.
- **Copyright/Kontakt-Zeile:** `© {Jahr} by {Name} | {email} | {Ort}` in kleiner, gedämpfter Schrift (`#605e5e`/`#a0a09f`).
- Reichlich Padding, keine kräftigen Farbflächen.

---

## 10. Responsive / Mobile

- **Navigation:** kollabiert zu **Hamburger-Menü** (Overlay/Slide-in) auf Mobil; Logo bleibt zentriert.
- **Galerie-Grid:** reduziert von 3–4 Spalten (Desktop) auf **1–2 Spalten** (Mobil), Bilder werden gestapelt, weiter Hochformat.
- **Alternierende Text/Bild-Blöcke:** stapeln vertikal (Bild über Text).
- **Schrift:** Headlines skalieren herunter (Hero 70px → deutlich kleiner auf Mobil), Body bleibt ~15–16px.
- **Spacing:** vertikale Section-Paddings reduziert, aber weiterhin luftig.
- Wix liefert Breakpoints automatisch; beim Nachbau typische Breakpoints ~768px (Tablet) / ~480px (Phone) verwenden.

---

## 11. Nachbau-Checkliste (Kurzform)

- [ ] Fonts einbinden: **Playfair Display** (Headlines) + schlanke Sans (**Jost/Questrial** als DIN-Next-Ersatz) + optional Script-Signatur (**Sacramento/Parisienne**).
- [ ] Farb-Tokens setzen (§4 bereinigte Palette): Weiß-Grund, `#2f2e2e`/`#605e5e` Text, warme Creme `#fdf1ec` als Section-BG, Terrakotta `#de5021` als Akzent.
- [ ] Headlines **kleingeschrieben** in Playfair; Buttons/Nav/Labels **GROSS + `letter-spacing:0.1–0.2em`** in Sans.
- [ ] Zentrierter, sticky Header mit zentriertem Logo; mobil Hamburger.
- [ ] Portfolio-Grid 3–4 Spalten, `aspect-ratio:2/3`, minimale Gaps, Hover-Zoom.
- [ ] Große vertikale Section-Paddings (80–140px), begrenzte Textbreite.
- [ ] Scroll-Fade-in-Reveals, weiche 300–500ms Transitions.
- [ ] Funnel-Seitenaufbau (Hero → Intro → Portrait → Statement → nummerierte Leistungen alternierend → Testimonial → Preise → CTA → Footer).
- [ ] Schlichter, textbasierter Footer mit Rechts-Links + Social-Handles als Text.
- [ ] **Keine** Original-Fotos/-Texte/-Logos übernehmen — nur das Muster.
