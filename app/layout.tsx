import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import siteContent from "./content/site-content.json";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-poppins",
});

const siteUrl = "https://aradient.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  openGraph: {
    title: "Aradient",
    description:
      "Aradient partners with startups and enterprises to design, build, and launch AI-powered software, web apps, and scalable digital products.",
    url: siteUrl,
    siteName: "Aradient",
    // File is public/brandImage.png → served at /brandImage.png (not /images/...)
    images: [
      {
        url: "/brandImage.png",
        width: 2872,
        height: 1238,
        alt: "Aradient",
      },
    ],
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
      <body className={`${poppins.variable} ${poppins.className}`}>{children}</body>
    </html>
  );
}
