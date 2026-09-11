import type { Metadata } from "next";
import { Playfair_Display, Jost } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

// Elegant high-contrast Didone (tinaszabo display style) — headlines + accents.
const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-playfair",
  display: "swap",
});

// Clean thin letter-spaced sans — nav, labels, buttons, body.
const jost = Jost({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://augenblicke-rueb.de"),
  title: {
    default: "augenblicke — Fotografie im Schwarzwald",
    template: "%s — augenblicke",
  },
  description:
    "Augenblicke — Hochzeits-, Paar- und Familienfotografie von Sofia Rüb aus Villingen im Schwarzwald, deutschlandweit im Einsatz.",
  openGraph: {
    title: "augenblicke",
    description:
      "Hochzeits-, Paar- und Familienfotografie von Sofia Rüb aus dem Schwarzwald.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="de"
      className={`${playfair.variable} ${jost.variable}`}
    >
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
