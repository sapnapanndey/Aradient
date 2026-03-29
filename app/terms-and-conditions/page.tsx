import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions | Aradient",
  description: "Review the terms and conditions for using the Aradient website and services.",
};

export default function TermsAndConditionsPage() {
  return (
    <main className="legal-page">
      <div className="legal-shell">
        <p className="legal-eyebrow">Terms & Conditions</p>
        <h1>Terms & Conditions</h1>
        <p className="legal-intro">
          These Terms & Conditions govern access to and use of the Aradient website
          and any related communications, proposals, or service interactions.
        </p>

        <section className="legal-section">
          <h2>Use of Website</h2>
          <p>
            You agree to use this website only for lawful purposes and in a way that
            does not infringe the rights of, restrict, or inhibit anyone else&apos;s use
            of the website.
          </p>
        </section>

        <section className="legal-section">
          <h2>Intellectual Property</h2>
          <p>
            Unless otherwise stated, the content, branding, visuals, copy, and
            materials on this website are owned by or licensed to Aradient and may
            not be copied, reused, or redistributed without permission.
          </p>
        </section>

        <section className="legal-section">
          <h2>Service Information</h2>
          <p>
            Any descriptions of services, capabilities, timelines, or pricing on the
            website are provided for general information and may change without
            notice. Final terms are governed by project-specific agreements.
          </p>
        </section>

        <section className="legal-section">
          <h2>Limitation of Liability</h2>
          <p>
            Aradient is not liable for any indirect, incidental, or consequential
            damages arising from the use of this website, to the fullest extent
            permitted by applicable law.
          </p>
        </section>

        <section className="legal-section">
          <h2>Changes to Terms</h2>
          <p>
            We may update these Terms & Conditions from time to time. Continued use
            of the website after changes are posted indicates acceptance of the
            revised terms.
          </p>
        </section>

        <section className="legal-section">
          <h2>Contact</h2>
          <p>
            If you have any questions about these terms, please contact Aradient
            through the website&apos;s listed contact details.
          </p>
        </section>

        <div className="legal-actions">
          <Link href="/">Back to Home</Link>
        </div>
      </div>
    </main>
  );
}
