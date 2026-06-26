import type { Metadata } from "next";
import { Space_Grotesk, Inter, JetBrains_Mono, Orbitron } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  variable: "--font-display-src",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
import SmoothScroll from "@/components/SmoothScroll";
import { LanguageProvider } from "@/components/LanguageProvider";

const body = Inter({ variable: "--font-body-src", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono-src", subsets: ["latin"] });
const wordmark = Orbitron({ variable: "--font-wordmark-src", subsets: ["latin"], weight: ["800"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://selfcoder.de"),
  title: "SelfCoder — Selbst gebaut. Selbst gehostet.",
  description:
    "Self-hosted, quelloffene Tools: IPTV-Proxy, Mail-Archiver, Dashboards. Gebaut, gehostet und kontrolliert von dir.",
  keywords: ["self-hosted", "open source", "SelfStream", "SelfArchiver", "SelfDashboard", "Homelab"],
  openGraph: {
    title: "SelfCoder — Selbst gebaut. Selbst gehostet.",
    description: "Eine Familie eigener self-hosted Tools. Open Source, ohne Vendor Lock-in.",
    url: "https://selfcoder.de",
    siteName: "SelfCoder",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "SelfCoder" }],
    locale: "de_DE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SelfCoder — Selbst gebaut. Selbst gehostet.",
    description: "Software, die sich selbst gehört.",
    images: ["/og.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${display.variable} ${body.variable} ${mono.variable} ${wordmark.variable}`}>
      <body className="antialiased">
        <LanguageProvider>
          <SmoothScroll>{children}</SmoothScroll>
        </LanguageProvider>
      </body>
    </html>
  );
}
