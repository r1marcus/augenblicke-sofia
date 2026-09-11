import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/FadeIn";
import FaithSection from "@/components/FaithSection";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "Über mich",
  description:
    "Sofia Rüb — Fotografin aus Villingen im Schwarzwald, spezialisiert auf Hochzeiten, Paare und Familien.",
};

export default function AboutPage() {
  return (
    <>
      <section className="section container">
        <div className={styles.split}>
          <FadeIn className={styles.portraitPair}>
            <div className={styles.portrait}>
              <Image
                src="/images/IMG_1009.jpg"
                alt="Sofia Rüb mit Kamera"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className={styles.portraitImg}
              />
            </div>
            <div className={styles.portrait}>
              <Image
                src="/images/IMG_1018.jpg"
                alt="Sofia Rüb bei der Arbeit"
                fill
                sizes="(max-width: 900px) 50vw, 25vw"
                className={styles.portraitImg}
              />
            </div>
          </FadeIn>
          <FadeIn className={styles.text} delay={120}>
            <p className="eyebrow">Über mich</p>
            <h1 style={{ margin: "0.75rem 0 1.5rem" }}>Das bin ich – Sofia.</h1>
            <p style={{ marginBottom: "1.25rem" }}>
              Leidenschaftliche Fotografin, die sich auf Hochzeiten, Paare und
              Familien spezialisiert hat. Ich bin in Villingen im schönen
              Schwarzwald zuhause, stehe aber deutschlandweit zur Verfügung.
            </p>
            <p style={{ marginBottom: "1.25rem" }}>
              Als junge, glückliche Ehefrau und Mutter verstehe ich die Bedeutung
              von Familie und weiß, dass die Ehe eines der schönsten Geschenke auf
              der Welt ist. Daher setze ich mich dafür ein, die schönsten Momente
              in eurem Leben festzuhalten.
            </p>
            <p>
              Bilder, die geprägt sind von Emotionen und Geschichten, die für
              immer in Erinnerung bleiben.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Familienfoto — einzelnes, zentriertes Bild (nicht seitenbreit) */}
      <section className="section container">
        <FadeIn className={styles.single}>
          <Image
            src="/images/IMG_0915.jpg"
            alt="Familienmoment — Sofia Rüb"
            fill
            sizes="(max-width: 900px) 90vw, 520px"
            className={styles.singleImg}
          />
        </FadeIn>
      </section>

      {/* REVIEW: Glaubensbezug – von Sofia freigeben (eigene, leicht entfernbare Sektion) */}
      <FaithSection />

      <section className="section container center">
        <FadeIn>
          <h2 style={{ marginBottom: "1.5rem" }}>Lernen wir uns kennen</h2>
          <Link href="/kontakt" className="btn btn--accent">
            Kontakt aufnehmen
          </Link>
        </FadeIn>
      </section>
    </>
  );
}
