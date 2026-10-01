import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impressum — SelfCoder",
  description: "Impressum der Website selfcoder.de.",
  robots: { index: true, follow: true },
};

/** Impressum (§ 5 TDDG / § 7 UWG). */
const VERANTWORTLICHER = "S. Schmidt";
const EMAIL = "info@selfcoder.de";
// Straße, Hausnummer, PLZ, Ort: vom Betreiber eintragen — nicht im Repo vorhanden.
const ADRESS_PLACEHOLDER = "[Straße und Hausnummer eintragen]";
const PLZ_ORT_PLACEHOLDER = "[PLZ und Ort eintragen]";

export default function Impressum() {
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

      <h1 className="font-display text-4xl font-semibold tracking-tight sm:text-5xl">Impressum</h1>
      <p className="mt-4 text-[var(--color-muted)]">
        Angaben gemäß § 5 TDG, § 7 UWG.
      </p>

      <div className="dse mt-14 space-y-12">
        <section>
          <h2>1. Verantwortlicher</h2>
          <p>
            {VERANTWORTLICHER}
            <br />
            {ADRESS_PLACEHOLDER}
            <br />
            {PLZ_ORT_PLACEHOLDER}
          </p>
        </section>

        <section>
          <h2>2. Kontakt</h2>
          <ul>
            <li>
              <strong>E-Mail:</strong> {EMAIL}
            </li>
          </ul>
        </section>

        <section>
          <h2>3. Hosting / Betrieb</h2>
          <p>
            Diese Website wird bei <strong>GitHub&nbsp;Pages</strong> gehostet, einem Dienst der{" "}
            <strong>GitHub,&nbsp;Inc.</strong>. Einzelheiten zur Datenverarbeitung siehe{" "}
            <Link
              href="/datenschutz"
              className="underline"
            >
              Datenschutzerklärung
            </Link>.
          </p>
        </section>

        <section>
          <h2>4. Haftungsausschluss</h2>
          <p>
            Alle Angaben sind so vollständig und richtig wie mir bekannt. Für den Inhalt, der
            über Links zu externen Seiten verlinkt ist, bin ich als Betreiber dieser Website
            nicht verantwortlich.
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
