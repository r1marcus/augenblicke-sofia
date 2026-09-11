"use client";

import { useState } from "react";
import { site } from "@/lib/site";
import styles from "./ContactForm.module.css";

/**
 * Kontaktformular ohne Backend.
 *
 * Standard: baut aus den Feldern eine mailto:-Nachricht an Sofia und öffnet
 * das E-Mail-Programm der Besucher:innen.
 *
 * TODO (Backend wählen): Für echten Versand ohne Mail-Client einen
 * Formspree-Endpoint eintragen und USE_FORMSPREE = true setzen.
 * Endpoint anlegen unter https://formspree.io und ID unten ersetzen.
 */
const USE_FORMSPREE = false;
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_FORM_ID"; // TODO: echte ID eintragen

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") || "");
    const email = String(data.get("email") || "");
    const subject = String(data.get("subject") || "");
    const message = String(data.get("message") || "");

    if (USE_FORMSPREE) {
      try {
        setStatus("sending");
        const res = await fetch(FORMSPREE_ENDPOINT, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
        setStatus(res.ok ? "sent" : "error");
        if (res.ok) form.reset();
      } catch {
        setStatus("error");
      }
      return;
    }

    // mailto-Fallback
    const body = `Name: ${name}%0D%0AE-Mail: ${email}%0D%0A%0D%0A${encodeURIComponent(
      message
    )}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(
      subject || `Anfrage von ${name}`
    )}&body=${body}`;
    setStatus("sent");
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.row}>
        <label className={styles.field}>
          <span>Name</span>
          <input type="text" name="name" required autoComplete="name" />
        </label>
        <label className={styles.field}>
          <span>E-Mail</span>
          <input type="email" name="email" required autoComplete="email" />
        </label>
      </div>

      <label className={styles.field}>
        <span>Betreff</span>
        <input type="text" name="subject" />
      </label>

      <label className={styles.field}>
        <span>Nachricht</span>
        <textarea name="message" rows={6} required />
      </label>

      <button type="submit" className="btn" disabled={status === "sending"}>
        {status === "sending" ? "senden …" : "Senden"}
      </button>

      {status === "sent" && (
        <p className={styles.note}>
          Danke! Dein E-Mail-Programm sollte sich geöffnet haben. Falls nicht,
          schreib mir direkt an {site.email}.
        </p>
      )}
      {status === "error" && (
        <p className={styles.error}>
          Etwas ist schiefgelaufen. Bitte schreib mir direkt an {site.email}.
        </p>
      )}
    </form>
  );
}
