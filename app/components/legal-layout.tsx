import Link from "next/link";
import type { ReactNode } from "react";
import { SiteHeader } from "./site-header";
import { SiteFooter } from "./site-footer";

// Shared shell for the legal pages: dark banner with the title, then the
// policy text in a readable single column.
export function LegalLayout({
  children,
  intro,
  title,
}: {
  children: ReactNode;
  intro: ReactNode;
  title: string;
}) {
  return (
    <main className="ix-page">
      <SiteHeader solidAfter={0.15} />

      <section className="ix-hero ix-banner">
        <div className="ix-banner-frame">
          <div className="ix-container">
            <ol aria-label="Breadcrumb" className="ix-crumbs">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <span>{title}</span>
              </li>
            </ol>
            <h1>{title}</h1>
            <p>{intro}</p>
          </div>
        </div>
      </section>

      <article className="ix-legal">{children}</article>

      <SiteFooter />
    </main>
  );
}
