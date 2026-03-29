import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cookie Policy | Aradient",
  description: "Understand how Aradient uses cookies and similar technologies on its website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="legal-eyebrow">Cookie Policy</p>
        <h1>Cookie Policy</h1>
        <p className="legal-intro">
          This Cookie Policy explains how Aradient may use cookies and similar
          technologies to improve website performance, understand visitor behavior,
          and support a better browsing experience.
        </p>

        <section className="legal-section">
          <h2>What Are Cookies</h2>
          <p>
            Cookies are small text files stored on your device when you visit a
            website. They help websites remember preferences and understand how users
            interact with pages and features.
          </p>
        </section>

        <section className="legal-section">
          <h2>How We Use Cookies</h2>
          <p>
            We may use cookies to support site functionality, analyze traffic,
            improve user experience, and measure the effectiveness of content or
            campaigns.
          </p>
        </section>

        <section className="legal-section">
          <h2>Third-Party Tools</h2>
          <p>
            Some cookies may be placed by third-party tools or embedded services used
            for analytics, forms, media, or performance monitoring.
          </p>
        </section>

        <section className="legal-section">
          <h2>Managing Cookies</h2>
          <p>
            Most browsers let you control or disable cookies through their settings.
            Disabling cookies may affect the availability or functionality of some
            parts of the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>Updates</h2>
          <p>
            We may revise this Cookie Policy as our website or tools evolve. Any
            updates will be posted on this page.
          </p>
        </section>

        <div className="legal-actions">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
