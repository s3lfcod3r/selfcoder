import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Datenschutzerklärung — SelfCoder",
  description: "Informationen zur Verarbeitung personenbezogener Daten auf selfcoder.de.",
  robots: { index: false, follow: true },
};

/** Datenschutzerklärung (DSGVO Art. 13). Hosting via GitHub Pages (GitHub Inc., USA). */
const VERANTWORTLICHER_NAME = "S. Schmidt";

export default function Datenschutz() {
  return (
    <main className="relative z-[2] mx-auto max-w-3xl px-6 py-20">
      <header className="mb-14 flex items-center justify-between">
        <Link href="/" className="inline-flex items-center gap-3">
          <Image src="/logo-wide.png" alt="SelfCoder" width={160} height={46} className="h-8 w-auto" />
        </Link>
        <Link
          href="/"
          className="text-sm text-[var(--color-muted)] transition-colors hover:text-ink"
        >
          ← Zurück
        </Link>
      </header>

      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">
        Datenschutz&shy;erklärung
      </h1>
      <p className="mt-4 text-[var(--color-muted)]">Stand: Juni 2026</p>

      <div className="dse mt-14 space-y-12">
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>Verantwortlich für die Datenverarbeitung auf dieser Website ist:</p>
          <p>
            {VERANTWORTLICHER_NAME}
            <br />
            E-Mail: info(at)selfcoder.de
          </p>
        </section>

        <section>
          <h2>2. Hosting / Betrieb</h2>
          <p>
            Diese Website wird bei <strong>GitHub&nbsp;Pages</strong> gehostet, einem Dienst der{" "}
            <strong>GitHub,&nbsp;Inc.</strong> (88 Colin P. Kelly Jr. Street, San&nbsp;Francisco,
            CA&nbsp;94107, USA), einem Unternehmen der Microsoft&nbsp;Corporation. Beim Aufruf der
            Website werden technisch notwendige Verbindungsdaten – insbesondere Ihre IP-Adresse –
            an Server von GitHub übertragen und dort verarbeitet. Dabei kann eine Übermittlung in
            die USA stattfinden.
          </p>
          <p>
            GitHub,&nbsp;Inc. ist unter dem <em>EU-US Data Privacy Framework</em> zertifiziert;
            für die Übermittlung personenbezogener Daten in die USA besteht damit ein von der
            EU-Kommission anerkanntes angemessenes Datenschutzniveau. Ergänzend stützt GitHub
            Datenübermittlungen auf die <em>Standardvertragsklauseln</em> der EU-Kommission
            (Durchführungsbeschluss&nbsp;2021/914). Rechtsgrundlage für die Nutzung des Hosters ist
            Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO; es besteht ein berechtigtes Interesse an
            einer sicheren, stabilen und kostengünstigen Bereitstellung des Angebots. Einzelheiten
            finden Sie in der{" "}
            <a
              href="https://docs.github.com/en/site-policy/privacy-policies/github-privacy-statement"
              target="_blank"
              rel="noopener noreferrer"
            >
              Datenschutzerklärung von GitHub
            </a>
            .
          </p>
        </section>

        <section>
          <h2>3. Server-Logfiles</h2>
          <p>
            Beim Aufruf dieser Website werden durch den Hosting-Anbieter (GitHub) automatisch
            technische Zugriffsdaten verarbeitet, die Ihr Browser übermittelt. Dazu können gehören:
          </p>
          <ul>
            <li>Browsertyp und Browserversion</li>
            <li>verwendetes Betriebssystem</li>
            <li>Referrer-URL</li>
            <li>Datum und Uhrzeit der Serveranfrage</li>
            <li>IP-Adresse</li>
          </ul>
          <p>
            Auf den genauen Umfang und die Speicherdauer dieser serverseitigen Protokollierung hat
            der Betreiber keinen Einfluss; sie richten sich nach den Vorgaben von GitHub. Der
            Betreiber selbst erhebt und speichert keine eigenen Server-Logfiles und führt diese
            Daten nicht mit anderen Datenquellen zusammen. Die Verarbeitung erfolgt auf Grundlage
            von Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f DSGVO; es besteht ein berechtigtes Interesse an
            einer technisch fehlerfreien und sicheren Bereitstellung der Website.
          </p>
        </section>

        <section>
          <h2>4. Schriftarten (Fonts)</h2>
          <p>
            Diese Website verwendet zur einheitlichen Darstellung Schriftarten, die{" "}
            <strong>direkt mit der Website ausgeliefert</strong> werden (self-hosted, zur Build-Zeit
            eingebunden). Eine Verbindung zu Servern Dritter (z.&nbsp;B. Google&nbsp;Fonts) findet zur
            Laufzeit <strong>nicht</strong> statt; es werden hierfür keine Daten an Google übertragen.
          </p>
        </section>

        <section>
          <h2>5. Lokale Speicherung (Spracheinstellung)</h2>
          <p>
            Zur Speicherung Ihrer gewählten Anzeigesprache (Deutsch/Englisch) wird der lokale
            Speicher Ihres Browsers (<em>localStorage</em>) genutzt. Diese Information verbleibt
            ausschließlich auf Ihrem Gerät, wird nicht an einen Server übertragen und dient allein
            der Funktionalität der Website. Ein Cookie zu Tracking- oder Werbezwecken wird nicht
            gesetzt.
          </p>
        </section>

        <section>
          <h2>6. Kontaktaufnahme per E-Mail</h2>
          <p>
            Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben inklusive der von Ihnen
            angegebenen Kontaktdaten zur Bearbeitung Ihrer Anfrage und für den Fall von
            Anschlussfragen gespeichert. Rechtsgrundlage ist Art.&nbsp;6 Abs.&nbsp;1 lit.&nbsp;f
            DSGVO (berechtigtes Interesse an der Beantwortung) bzw. Art.&nbsp;6 Abs.&nbsp;1
            lit.&nbsp;b DSGVO, sofern die Anfrage auf einen Vertrag abzielt. Die Daten werden
            gelöscht, sobald sie für die Zweckerreichung nicht mehr erforderlich sind.
          </p>
        </section>

        <section>
          <h2>7. Externe Links</h2>
          <p>
            Diese Website enthält Verlinkungen zu externen Websites Dritter (z.&nbsp;B. GitHub). Auf
            deren Inhalte und Datenverarbeitung haben wir keinen Einfluss; es gelten die
            Datenschutzbestimmungen des jeweiligen Anbieters.
          </p>
        </section>

        <section>
          <h2>8. Ihre Rechte</h2>
          <p>Sie haben jederzeit das Recht auf:</p>
          <ul>
            <li>Auskunft über Ihre gespeicherten Daten (Art.&nbsp;15 DSGVO)</li>
            <li>Berichtigung unrichtiger Daten (Art.&nbsp;16 DSGVO)</li>
            <li>Löschung (Art.&nbsp;17 DSGVO)</li>
            <li>Einschränkung der Verarbeitung (Art.&nbsp;18 DSGVO)</li>
            <li>Datenübertragbarkeit (Art.&nbsp;20 DSGVO)</li>
            <li>Widerspruch gegen die Verarbeitung (Art.&nbsp;21 DSGVO)</li>
          </ul>
          <p>
            Zur Ausübung genügt eine formlose Nachricht an die oben genannte E-Mail-Adresse. Zudem
            steht Ihnen ein Beschwerderecht bei einer Datenschutz-Aufsichtsbehörde zu.
          </p>
        </section>
      </div>

      <footer className="mt-20 border-t border-[var(--color-line)] pt-8 text-sm text-[var(--color-faint)]">
        <Link href="/" className="transition-colors hover:text-ink">
          ← Zurück zur Startseite
        </Link>
      </footer>
    </main>
  );
}
