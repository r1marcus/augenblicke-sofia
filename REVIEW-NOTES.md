# REVIEW-NOTES — augenblicke (Sofia Rüb)

Offene Content-, Rechts- und Konfigurations-Entscheidungen, die vor einem
Go-Live von Sofia bzw. Marcus geklärt werden müssen. Die Website ist technisch
fertig gebaut (`npm run build` läuft fehlerfrei), diese Punkte sind
inhaltlich/rechtlich zu beantworten.

## (a) Glaubensbezug (christlich) übernehmen?
- Der christliche Glaubensbezug aus dem Original-About-Text steht in einer
  eigenen, **leicht entfernbaren** Komponente: `components/FaithSection.tsx`
  (markiert mit `REVIEW: Glaubensbezug – von Sofia freigeben`).
- Soll er **nicht** erscheinen: den `<FaithSection />`-Aufruf in
  `app/ueber-mich/page.tsx` entfernen (dort ebenfalls mit REVIEW-Kommentar
  markiert) — der Rest der Seite bleibt unverändert.
- **Entscheidung nötig:** übernehmen / streichen / umformulieren.

## (b) Echte Paar- und Familiennamen öffentlich zeigen?
- Die Galerien tragen aktuell Klarnamen: Fabian & Alina, Lio & Lea,
  Joshi & Clara, Evan & Ariane, Jonas & Debora, Familie A., Familie F.
  (Quelle: SITEMAP; Familien bereits anonymisiert als „A."/„F.").
- **Datenschutz/Persönlichkeitsrecht:** Liegt das Einverständnis der
  abgebildeten Personen für die öffentliche Anzeige von Fotos **und** Namen
  vor? Falls nicht, Titel in `lib/galleries.ts` anonymisieren
  (z. B. „Hochzeit im Schwarzwald", „Paarshooting") — nur das Feld `title`
  ändern, sonst nichts.

## (c) Impressum & Datenschutz rechtlich ausfüllen
- `app/impressum/page.tsx` und `app/datenschutz/page.tsx` sind Gerüste mit
  `[Platzhaltern]` und `TODO`-Kommentaren. In Deutschland **Pflicht**.
- Auszufüllen: vollständiger Name, Anschrift, ggf. Telefon, USt-ID (falls
  vorhanden), verantwortliche Person (§ 18 MStV).
- Datenschutzerklärung an die **tatsächliche** Verarbeitung anpassen:
  gewähltes Hosting, Kontaktformular-Backend (siehe d), Font-Auslieferung,
  Instagram-Verlinkung. Bekannt & eingesetzt: E-Mail `sofia.schelly@outlook.de`.
- Empfehlung: rechtlich prüfen lassen (generierter Text ersetzt keine Beratung).
- Hinweis: Fonts werden via `next/font/google` gebaut und beim Build **lokal
  selbst gehostet** (kein Laufzeit-Request an Google) — im Datenschutztext
  entsprechend korrekt formulieren.

## (d) Kontaktformular-Backend wählen
- `components/ContactForm.tsx` läuft standardmäßig über einen **mailto:-Fallback**
  (öffnet das E-Mail-Programm der Besucher:innen an `sofia.schelly@outlook.de`).
- Für echten serverlosen Versand ist ein **Formspree**-Pfad vorbereitet:
  `USE_FORMSPREE = true` setzen und `FORMSPREE_ENDPOINT` mit der echten Form-ID
  ersetzen (beides mit `TODO` markiert). Alternativ eigenes Backend/Route-Handler.
- **Entscheidung nötig:** mailto belassen oder Formspree/anderes Backend.

## (e) Domain / Branding
- Wortmarke „augenblicke" ist als Text (Playfair) umgesetzt; das mitgelieferte
  `public/images/logo.png` wird derzeit **nicht** verwendet — bei Bedarf im
  Header einbinden.
- `metadataBase` in `app/layout.tsx` steht auf `https://augenblicke-rueb.de`
  (aus der Quelle abgeleitet) — auf die tatsächliche Zieldomain anpassen.
- Marken-/Handle-Konsistenz prüfen: Instagram `@augenblicke___`,
  E-Mail-Absender historisch „Sofia Schelly" vs. Marke „Sofia Rüb".

## Weitere Hinweise
- **Bilder:** 342 Original-Dateien wurden nach `public/images/` kopiert
  (Ordnerstruktur erhalten). Scraping-Artefakte mit `&quot;` im Namen wurden
  bewusst übersprungen. Die Datei-Zuordnung Cover→Galerie ist in
  `lib/galleries.ts` fixiert; `lio-lea` nutzt das einzige nicht eindeutig
  zuordenbare Cover (`Augenblicke-3150.jpg`) — bei Bedarf Cover tauschen.
- **Bild-Optimierung:** `next.config.js` nutzt `images.unoptimized: true`
  (342 lokale Bilder). Für Produktion optional wieder Optimizer aktivieren,
  wenn Build-Ressourcen es zulassen.
- **SEO:** Meta-Titles/Descriptions je Seite gesetzt; Legal-Seiten auf
  `noindex`. OG-Image könnte noch ergänzt werden.
