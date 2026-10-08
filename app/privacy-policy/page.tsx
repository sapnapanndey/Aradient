import type { Metadata } from "next";
import { LegalLayout } from "../components/legal-layout";

export const metadata: Metadata = {
  title: "Privacy Policy | Aradient",
  description: "Learn how Aradient collects, uses, and protects your information.",
};

export default function PrivacyPolicyPage() {
  return (
    <LegalLayout
      intro="This Privacy Policy explains how Aradient may collect, use, store, and safeguard information when you visit our website, submit an inquiry, or engage with our services."
      title="Privacy Policy"
    >
      <section className="legal-section">
        <h2>Information We Collect</h2>
        <p>
          We may collect personal details you voluntarily provide, including your
          name, email address, phone number, company information, and any project
          details shared through forms, calls, or email.
        </p>
      </section>

      <section className="legal-section">
        <h2>How We Use Information</h2>
        <p>
          We use the information we collect to respond to inquiries, deliver
          services, improve our website, communicate about projects, and maintain
          internal business records.
        </p>
      </section>

      <section className="legal-section">
        <h2>Data Sharing</h2>
        <p>
          We do not sell personal information. We may share data with trusted
          service providers or professional partners who help us operate our
          business, subject to appropriate confidentiality and security measures.
        </p>
      </section>

      <section className="legal-section">
        <h2>Security</h2>
        <p>
          We take reasonable administrative and technical steps to protect
          information from unauthorized access, loss, misuse, or disclosure.
          However, no internet-based system can be guaranteed to be fully secure.
        </p>
      </section>

      <section className="legal-section">
        <h2>Your Choices</h2>
        <p>
          You may contact us to request updates or deletion of information you
          previously shared, subject to any legal or operational obligations that
          require us to retain certain records.
        </p>
      </section>

      <section className="legal-section">
        <h2>Contact</h2>
        <p>
          For privacy-related questions, please reach out through our contact
          channels listed on the website.
        </p>
      </section>
    </LegalLayout>
  );
}
