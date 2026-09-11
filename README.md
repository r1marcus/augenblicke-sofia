# Sofia — Fotografie

Fotografie-Portfolio-Website, gebaut mit [Next.js](https://nextjs.org/) (App Router) und TypeScript. Optimiert für Deployment auf [Vercel](https://vercel.com/).

## Status

Grundgerüst — Platzhalter-Startseite. Inhalte und Galerien folgen.

## Projektstruktur

```
app/                 # Next.js App Router (Layout, Seiten, Styles)
public/              # Statische Assets (Bilder etc.)
source-content/      # Arbeitsmaterial (Quell-Inhalte) — von anderen Beitragenden gepflegt
design-reference/    # Design-Referenzen — von anderen Beitragenden gepflegt
```

## Entwicklung

Voraussetzungen: Node.js 18+ (getestet mit Node 22) und npm.

```bash
npm install      # Abhängigkeiten installieren
npm run dev      # Dev-Server auf http://localhost:3000
npm run build    # Produktions-Build
npm run start    # Produktions-Server (nach build)
```

## Deployment auf Vercel

Next.js wird von Vercel automatisch erkannt — keine Zusatzkonfiguration nötig.

**Option A — Vercel CLI:**

```bash
npm i -g vercel
vercel login
vercel          # Vorschau-Deployment
vercel --prod   # Produktions-Deployment
```

**Option B — GitHub + Vercel-Import:**

1. Repository zu GitHub pushen.
2. Auf vercel.com "New Project" → GitHub-Repo importieren.
3. Framework-Preset "Next.js" bestätigen (auto-detected) → Deploy.

Bei künftigen Remote-Bildern die Hosts in `next.config.js` unter `images.remotePatterns` eintragen.
