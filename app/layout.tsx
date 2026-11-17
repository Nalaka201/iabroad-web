import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { TopBar } from "@/components/layout/TopBar";
import { Footer } from "@/components/layout/Footer";
import { settings } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${settings.name} — ${settings.tagline}`,
    template: `%s — ${settings.name}`,
  },
  description:
    "Ibroad Education helps students study abroad across the UK, USA, Canada, Australia, Germany and New Zealand. University selection, application support, visa guidance and pre-departure services.",
};

export const viewport: Viewport = {
  themeColor: "#1F3A5F",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable} data-scroll-behavior="smooth">
      <body className="bg-page text-ink font-sans antialiased">
        <TopBar />
        <Navbar />
        <main id="app">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
