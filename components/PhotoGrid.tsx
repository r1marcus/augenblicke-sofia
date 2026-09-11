"use client";

import Image from "next/image";
import { useState, useCallback, useEffect } from "react";
import FadeIn from "./FadeIn";
import styles from "./PhotoGrid.module.css";

/**
 * Edge-to-edge 3–4 column portrait (2:3) grid with a gentle hover-zoom.
 * Clicking a photo opens a minimal lightbox with prev/next navigation.
 */
export default function PhotoGrid({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [index, setIndex] = useState<number | null>(null);

  const close = useCallback(() => setIndex(null), []);
  const prev = useCallback(
    () => setIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length)),
    [images.length]
  );
  const next = useCallback(
    () => setIndex((i) => (i === null ? i : (i + 1) % images.length)),
    [images.length]
  );

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index, close, prev, next]);

  return (
    <>
      <div className={styles.grid}>
        {images.map((src, i) => (
          <FadeIn key={src} delay={(i % 4) * 60} className={styles.cell}>
            <button
              className={styles.tile}
              onClick={() => setIndex(i)}
              aria-label={`${alt} — Bild ${i + 1} öffnen`}
            >
              <Image
                src={src}
                alt={`${alt} — ${i + 1}`}
                fill
                sizes="(max-width: 480px) 100vw, (max-width: 768px) 50vw, 25vw"
                className={styles.img}
              />
            </button>
          </FadeIn>
        ))}
      </div>

      {index !== null && (
        <div className={styles.lightbox} onClick={close} role="dialog" aria-modal="true">
          <button className={styles.lbClose} aria-label="Schließen" onClick={close}>
            ×
          </button>
          <button
            className={`${styles.lbNav} ${styles.lbPrev}`}
            aria-label="Vorheriges Bild"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
          >
            ‹
          </button>
          <div className={styles.lbStage} onClick={(e) => e.stopPropagation()}>
            <Image
              src={images[index]}
              alt={`${alt} — ${index + 1}`}
              fill
              sizes="90vw"
              className={styles.lbImg}
              priority
            />
          </div>
          <button
            className={`${styles.lbNav} ${styles.lbNext}`}
            aria-label="Nächstes Bild"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
          >
            ›
          </button>
          <span className={styles.lbCount}>
            {index + 1} / {images.length}
          </span>
        </div>
      )}
    </>
  );
}
