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

export const metadata: Metadata = {
  title: siteContent.metadata.title,
  description: siteContent.metadata.description,
  openGraph:{
    title:"Aradient",
    description:"Aradient partners with startups and enterprises to design, build, and launch AI-powered software, web apps, and scalable digital products.",
    url:"https://aradient.com",
    siteName:"Aradient",
    images:["https://aradient.com/images/brandImage.png"] ,
    type:"website"
  }
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
