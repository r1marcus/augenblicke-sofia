"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { site, navLinks } from "@/lib/site";
import styles from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  // Close the mobile drawer on route change.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Lock body scroll while the drawer is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <button
          className={styles.burger}
          aria-label="Menü öffnen"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <nav className={`${styles.nav} ${styles.navLeft}`} aria-label="Hauptnavigation">
          {navLinks.slice(0, 2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${isActive(l.href) ? styles.active : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link href="/" className={styles.brand}>
          <span className={styles.brandName}>{site.brand}</span>
          <span className={styles.brandSub}>{site.brandSub}</span>
        </Link>

        <nav className={`${styles.nav} ${styles.navRight}`} aria-label="Hauptnavigation">
          {navLinks.slice(2).map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.link} ${isActive(l.href) ? styles.active : ""}`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Mobile off-canvas */}
      <div
        className={`${styles.overlay} ${open ? styles.overlayOpen : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />
      <aside
        className={`${styles.drawer} ${open ? styles.drawerOpen : ""}`}
        aria-hidden={!open}
      >
        <button
          className={styles.close}
          aria-label="Menü schließen"
          onClick={() => setOpen(false)}
        >
          ×
        </button>
        <nav className={styles.drawerNav}>
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={`${styles.drawerLink} ${
                isActive(l.href) ? styles.active : ""
              }`}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <a
          className={styles.drawerSocial}
          href={site.instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
        >
          Instagram {site.instagramHandle}
        </a>
      </aside>
    </header>
  );
}
