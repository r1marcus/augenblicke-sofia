import Link from "next/link";
import Image from "next/image";
import FadeIn from "./FadeIn";
import type { Gallery } from "@/lib/galleries";
import styles from "./GalleryCards.module.css";

export default function GalleryCards({ galleries }: { galleries: Gallery[] }) {
  return (
    <div className={styles.grid}>
      {galleries.map((g, i) => (
        <FadeIn key={g.slug} delay={(i % 3) * 80} as="article" className={styles.cell}>
          <Link href={`/galerie/${g.slug}`} className={styles.card}>
            <div className={styles.frame}>
              <Image
                src={g.cover}
                alt={g.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className={styles.img}
              />
            </div>
            <div className={styles.meta}>
              <span className={styles.category}>{g.category}</span>
              <h3 className={styles.title}>{g.title}</h3>
            </div>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
