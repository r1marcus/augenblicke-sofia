import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import FadeIn from "@/components/FadeIn";
import { site } from "@/lib/site";
import styles from "./contact.module.css";

export const metadata: Metadata = {
  title: "Kontakt",
  description:
    "Nimm Kontakt zu Sofia Rüb auf — augenblicke Fotografie aus Villingen im Schwarzwald.",
};

export default function ContactPage() {
  return (
    <section className="section container">
      <div className={styles.split}>
        <FadeIn className={styles.intro}>
          <p className="eyebrow">Kontakt</p>
          <h1 style={{ margin: "0.75rem 0 1.5rem" }}>Kontakt</h1>
          <p className="lead" style={{ marginBottom: "1.5rem" }}>
            Ich kann es kaum erwarten, von euch zu hören! Füllt dazu einfach das
            Kontaktformular aus. Ich werde innerhalb von 48 Stunden
            zurückschreiben. Dann können wir uns gemütlich in Verbindung setzen
            und eure Vorstellungen und Wünsche besprechen. Ich freue mich echt
            darauf, gemeinsam mit euch eure besonderen Augenblicke festzuhalten.
          </p>
          <div className={styles.direct}>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <a href={site.instagramUrl} target="_blank" rel="noopener noreferrer">
              Instagram {site.instagramHandle}
            </a>
            <span>{site.region}</span>
          </div>
          <div className={styles.photo}>
            <Image
              src="/images/IMG_2626.jpeg"
              alt="augenblicke — Sofia Rüb"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className={styles.photoImg}
            />
          </div>
        </FadeIn>

        <FadeIn className={styles.formWrap} delay={120}>
          <ContactForm />
        </FadeIn>
      </div>
    </section>
  );
}
