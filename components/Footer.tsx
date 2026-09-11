import Link from "next/link";
import { site } from "@/lib/site";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <Link href="/" className={styles.brand}>
          {site.brand}
        </Link>

        <nav className={styles.links} aria-label="Footer-Navigation">
          <Link href="/galerie">Galerie</Link>
          <Link href="/ueber-mich">Über mich</Link>
          <Link href="/kontakt">Kontakt</Link>
          <Link href="/impressum">Impressum</Link>
          <Link href="/datenschutz">Datenschutz</Link>
        </nav>

        <div className={styles.social}>
          <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
            Instagram {site.instagramHandle}
          </a>
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </div>

        <p className={styles.copy}>
          © {year} {site.photographer} · Villingen im Schwarzwald
        </p>
      </div>
    </footer>
  );
}
