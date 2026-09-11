import FadeIn from "./FadeIn";
import styles from "./FaithSection.module.css";

/**
 * REVIEW: Glaubensbezug – von Sofia freigeben
 * ------------------------------------------------------------
 * Diese Komponente enthält den christlichen Glaubensbezug aus dem
 * Originaltext der Über-mich-Seite. Sie ist bewusst als eigene,
 * leicht entfernbare Sektion ausgelagert: Soll der Bezug NICHT
 * erscheinen, einfach den <FaithSection /> Aufruf in
 * app/ueber-mich/page.tsx entfernen (oder diese Datei löschen).
 * ------------------------------------------------------------
 */
export default function FaithSection() {
  return (
    <section className="section section--warm">
      <div className="container">
        <FadeIn className="measure center">
          <p className="script" style={{ fontSize: "2.2rem", marginBottom: "0.75rem" }}>
            Mein Anker
          </p>
          <h2 className={styles.heading}>
            Augenblicke festhalten, die man nicht in Worte fassen kann
          </h2>
          <p className="lead">
            Ich glaube an Jesus Christus, der mich auf allen meinen Wegen
            begleitet. Seine Gegenwart gibt mir die Fähigkeit, die Emotionen,
            Farben und Details einzufangen, die oft unbemerkt bleiben. Ich
            vertraue darauf, dass er mich leitet und mein Handwerk segnet, um mit
            meinen Fotos andere Menschen zu berühren.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
