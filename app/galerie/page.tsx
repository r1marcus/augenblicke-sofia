import type { Metadata } from "next";
import { galleries } from "@/lib/galleries";
import GalleryCards from "@/components/GalleryCards";
import FadeIn from "@/components/FadeIn";

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "Ausgewählte Hochzeiten, Paar- und Familienshootings von Sofia Rüb — augenblicke Fotografie aus dem Schwarzwald.",
};

export default function GalleryOverviewPage() {
  return (
    <section className="section container">
      <FadeIn className="center" >
        <p className="eyebrow">Portfolio</p>
        <h1 style={{ marginTop: "0.75rem", marginBottom: "1.25rem" }}>Galerie</h1>
        <p className="lead measure" style={{ marginBottom: "3rem" }}>
          Eine Auswahl an Geschichten, die ich festhalten durfte — von Hochzeiten
          über Paare bis zu Familien. Klick dich hinein.
        </p>
      </FadeIn>
      <GalleryCards galleries={galleries} />
    </section>
  );
}
