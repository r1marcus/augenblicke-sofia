import type { Metadata } from "next";
import { site } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum — augenblicke, Sofia Rüb.",
  robots: { index: false },
};

/*
  TODO: von Sofia/Marcus rechtlich ausfüllen lassen.
  Alle [Platzhalter] müssen vor Veröffentlichung durch die echten,
  vollständigen und korrekten Angaben ersetzt werden (Impressumspflicht
  nach § 5 DDG / § 18 MStV in Deutschland). Bekannte Daten (E-Mail) sind
  bereits eingesetzt; NICHTS frei erfinden.
*/
export default function ImpressumPage() {
  return (
    <section className="section container">
      <div className={styles.doc}>
        <h1>impressum</h1>
        <p className={styles.todo}>
          Hinweis (interner Platzhalter): Dieses Impressum ist noch unvollständig
          und muss vor Veröffentlichung rechtlich geprüft und ausgefüllt werden.
        </p>

        <h2>Angaben gemäß § 5 DDG</h2>
        <p>
          [Vollständiger Name]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ Ort]
          <br />
          Deutschland
        </p>

        <h2>Kontakt</h2>
        <p>
          E-Mail: {site.email}
          <br />
          Telefon: [optional: Telefonnummer]
        </p>

        <h2>Umsatzsteuer-ID</h2>
        <p>
          [Umsatzsteuer-Identifikationsnummer gemäß § 27 a UStG, falls vorhanden
          — sonst diesen Abschnitt entfernen]
        </p>

        <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
        <p>
          [Vollständiger Name]
          <br />
          [Anschrift wie oben]
        </p>

        <h2>Bildnachweise</h2>
        <p>
          Alle Fotografien © {site.photographer}. Eine Verwendung nur mit
          ausdrücklicher Genehmigung.
        </p>

        <h2>Streitschlichtung</h2>
        <p>
          Die Europäische Kommission stellt eine Plattform zur
          Online-Streitbeilegung (OS) bereit:{" "}
          <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer">
            https://ec.europa.eu/consumers/odr/
          </a>
          . Wir sind nicht verpflichtet und nicht bereit, an einem
          Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle
          teilzunehmen. [Formulierung ggf. rechtlich prüfen.]
        </p>
      </div>
    </section>
  );
}
