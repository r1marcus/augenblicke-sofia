import Image from "next/image";
import Link from "next/link";
import { galleries } from "@/lib/galleries";
import GalleryCards from "@/components/GalleryCards";
import FadeIn from "@/components/FadeIn";
import { site } from "@/lib/site";
import styles from "./home.module.css";

// Three portrait frames for the hero triptych.
const heroImages = [
  "/images/covers/Augenblicke-1571.jpg",
  "/images/covers/Augenblicke-4271.jpg",
  "/images/covers/DSC03939.jpg",
];

export default function HomePage() {
  return (
    <>
      {/* Hero — three-up portrait triptych (cocogonser signature) */}
      <section className={styles.hero} aria-label="Ausgewählte Aufnahmen">
        {heroImages.map((src, i) => (
          <Link
            key={src}
            href="/galerie"
            className={styles.heroSlide}
            aria-label="Zur Galerie"
          >
            <Image
              src={src}
              alt="Augenblicke — Fotografie von Sofia Rüb"
              fill
              priority={i === 0}
              sizes="(max-width: 900px) 86vw, 33vw"
              className={styles.heroImg}
            />
          </Link>
        ))}
      </section>

      {/* Intro */}
      <section className="section container">
        <FadeIn className="measure center">
          <p className="script" style={{ fontSize: "2.4rem", marginBottom: "0.5rem" }}>
            Hallo, ich bin Sofia
          </p>
          <h2 style={{ marginBottom: "1.5rem" }}>
            Fotografin im wunderschönen Schwarzwald
          </h2>
          <p className="lead">
            Ich halte die schönsten Augenblicke in eurem Leben fest — Hochzeiten,
            Paare und Familien. Zuhause bin ich in Villingen im Schwarzwald,
            unterwegs bin ich deutschlandweit. Bilder, die geprägt sind von
            Emotionen und Geschichten, die für immer in Erinnerung bleiben.
          </p>
          <div style={{ marginTop: "2rem" }}>
            <Link href="/ueber-mich" className="btn">
              Mehr über mich
            </Link>
          </div>
        </FadeIn>
      </section>

      {/* Gallery covers */}
      <section className="section section--warm">
        <div className="container">
          <FadeIn className="center" >
            <p className="eyebrow">Portfolio</p>
            <h2 style={{ marginTop: "0.75rem", marginBottom: "2.5rem" }}>
              Ausgewählte Geschichten
            </h2>
          </FadeIn>
          <GalleryCards galleries={galleries} />
        </div>
      </section>

      {/* CTA */}
      <section className="section container">
        <FadeIn className="measure center">
          <h2 style={{ marginBottom: "1.25rem" }}>
            Lasst uns eure Augenblicke festhalten
          </h2>
          <p className="lead" style={{ marginBottom: "2rem" }}>
            Ich kann es kaum erwarten, von euch zu hören. Erzählt mir von eurem
            großen Tag oder eurer Familie — ich freue mich darauf.
          </p>
          <Link href="/kontakt" className="btn btn--accent">
            Kontakt aufnehmen
          </Link>
          <p style={{ marginTop: "2rem", fontSize: "0.8rem", letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)" }}>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram {site.instagramHandle}
            </a>
          </p>
        </FadeIn>
      </section>
    </>
  );
}
