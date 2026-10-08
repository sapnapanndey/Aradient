import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "./enterprise-theme.css";
import "./redesign.css";
import siteContent from "./content/site-content.json";
import { LeadModalProvider } from "./components/lead-modal";
// Google Sans is not publicly distributable; Inter is the closest open match
// for the enterprise theme's typography.
const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-sans",
});

const siteUrl = "https://aradient.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.json",
  openGraph: {
    title: "Aradient",
    description:
      "Aradient partners with startups and enterprises to design, build, and launch AI-powered software, web apps, and scalable digital products.",
    url: siteUrl,
    siteName: "Aradient",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${inter.className}`}>
        <LeadModalProvider>{children}</LeadModalProvider>
      </body>
    </html>
  );
}
