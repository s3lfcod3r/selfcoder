import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Impressum — SelfCoder",
  description: "Anbieterkennzeichnung gemäß § 5 DDG für selfcoder.de.",
  robots: { index: false, follow: true },
};

/** Impressum (§ 5 DDG). Ladungsfähige Ersatz-Anschrift über Impressumsdienst. */
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

      <div className="dse mt-14 space-y-12">
        <section>
          <h2>Angaben gemäß § 5 DDG</h2>
          <p>
            Selfcoder — Sven Schmidt
            <br />
            c/o Online-Impressum 13327
            <br />
            Europaring 90
            <br />
            53757 Sankt Augustin
          </p>
        </section>

        <section>
          <h2>Kontakt</h2>
          <p>
            E-Mail: info(at)selfcoder.de
            <br />
            Zweiter Kontaktweg:{" "}
            <a
              href="https://mein.online-impressum.de/selfcoder/#zweiterkontaktweg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kontaktformular
            </a>
          </p>
        </section>

        <section>
          <h2>Zuständige Aufsichtsbehörde</h2>
          <p>Medienanstalt Hamburg/Schleswig-Holstein</p>
        </section>

        <section>
          <h2>Verbraucherstreitbeilegung</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer
            Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </section>

        <section>
          <h2>Hinweis zur Anschrift</h2>
          <p>
            Bei der angegebenen Anschrift handelt es sich um eine ladungsfähige Ersatz-Anschrift,
            bereitgestellt über einen Impressumsdienst. Sie gilt für alle Seiten der Self-Reihe
            (selfcoder.de und zugehörige Subdomains).
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
