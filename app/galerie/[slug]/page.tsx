import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { galleries, getGallery } from "@/lib/galleries";
import PhotoGrid from "@/components/PhotoGrid";
import FadeIn from "@/components/FadeIn";

export function generateStaticParams() {
  return galleries.map((g) => ({ slug: g.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const gallery = getGallery(params.slug);
  if (!gallery) return { title: "Galerie" };
  return {
    title: gallery.title,
    description: `${gallery.category} — Fotostrecke „${gallery.title}“ von Sofia Rüb, augenblicke Fotografie.`,
  };
}

export default function GalleryDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const gallery = getGallery(params.slug);
  if (!gallery) notFound();

  return (
    <>
      <section className="container" style={{ paddingBlock: "clamp(2.5rem, 6vw, 5rem)" }}>
        <FadeIn className="center">
          <p className="eyebrow">{gallery.category}</p>
          <h1 style={{ marginTop: "0.75rem" }}>{gallery.title}</h1>
          <p
            style={{
              marginTop: "0.75rem",
              fontSize: "0.75rem",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--text-muted)",
            }}
          >
            {gallery.images.length} Bilder
          </p>
        </FadeIn>
      </section>

      <PhotoGrid images={gallery.images} alt={gallery.title} />

      <section className="section container center">
        <Link href="/galerie" className="link-underline">
          Zurück zur Galerie
        </Link>
      </section>
    </>
  );
}
