import type { Metadata } from "next";
import { site } from "@/lib/site";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung — augenblicke, Sofia Rüb.",
  robots: { index: false },
};

/*
  TODO: von Sofia/Marcus rechtlich ausfüllen lassen.
  Diese Datenschutzerklärung ist ein STRUKTUR-GERÜST mit Platzhaltern und
  ersetzt keine Rechtsberatung. Vor Veröffentlichung durch eine geprüfte,
  auf die tatsächliche Datenverarbeitung (Hosting, Kontaktformular-Backend,
  ggf. Fonts, Instagram-Einbindung) zugeschnittene Fassung ersetzen
  (DSGVO / BDSG). NICHTS frei erfinden.
*/
export default function DatenschutzPage() {
  return (
    <section className="section container">
      <div className={styles.doc}>
        <h1>datenschutz</h1>
        <p className={styles.todo}>
          Hinweis (interner Platzhalter): Diese Datenschutzerklärung ist ein
          Gerüst mit Platzhaltern und muss vor Veröffentlichung rechtlich
          geprüft und an die tatsächliche Datenverarbeitung angepasst werden.
        </p>

        <h2>1. Verantwortliche Stelle</h2>
        <p>
          [Vollständiger Name]
          <br />
          [Straße und Hausnummer]
          <br />
          [PLZ Ort]
          <br />
          E-Mail: {site.email}
        </p>

        <h2>2. Allgemeines zur Datenverarbeitung</h2>
        <p>
          Wir verarbeiten personenbezogene Daten unserer Nutzer grundsätzlich nur,
          soweit dies zur Bereitstellung einer funktionsfähigen Website sowie
          unserer Inhalte und Leistungen erforderlich ist. [Umfang je nach
          eingesetztem Hosting/Tooling präzisieren.]
        </p>

        <h2>3. Hosting</h2>
        <p>
          Diese Website wird bei [Hosting-Anbieter, Anschrift] gehostet. Der
          Anbieter verarbeitet in unserem Auftrag u. a. Server-Logfiles (IP-Adresse,
          Datum/Uhrzeit, abgerufene Seite). Rechtsgrundlage: Art. 6 Abs. 1 lit. f
          DSGVO. [Auftragsverarbeitungsvertrag prüfen.]
        </p>

        <h2>4. Kontaktformular und E-Mail-Kontakt</h2>
        <p>
          Wenn du uns über das Kontaktformular oder per E-Mail kontaktierst,
          werden die von dir gemachten Angaben (Name, E-Mail-Adresse, Betreff,
          Nachricht) zum Zweck der Bearbeitung deiner Anfrage gespeichert.
          Rechtsgrundlage: Art. 6 Abs. 1 lit. b und lit. f DSGVO. [Falls ein
          Formular-Dienstleister (z. B. Formspree) eingesetzt wird, hier Anbieter,
          Datenfluss und Rechtsgrundlage ergänzen.]
        </p>

        <h2>5. Schriftarten (Fonts)</h2>
        <p>
          [Diese Website bindet Schriftarten ein. Sofern Fonts lokal
          ausgeliefert werden, werden dabei keine Daten an Dritte übertragen.
          Bei externer Einbindung (z. B. Google Fonts) ist der Datenfluss hier zu
          beschreiben — vor Veröffentlichung technisch verifizieren.]
        </p>

        <h2>6. Social Media / Instagram</h2>
        <p>
          Auf dieser Website verlinken wir auf unser Instagram-Profil (
          {site.instagramHandle}). Beim bloßen Klick auf den Link gelangst du zu
          Instagram; es gelten die Datenschutzbestimmungen von Instagram/Meta.
        </p>

        <h2>7. Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung
          der Verarbeitung, Datenübertragbarkeit sowie Widerspruch. Zudem besteht
          ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde. [Zuständige
          Aufsichtsbehörde ergänzen.]
        </p>

        <p className={styles.stand}>Stand: [Datum eintragen]</p>
      </div>
    </section>
  );
}
