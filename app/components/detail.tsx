import fs from "node:fs";
import path from "node:path";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import siteContent from "../content/site-content.json";
import type { DetailSection, FeatureShowcase } from "../lib/catalog";
import { ArtTile } from "./art";
import { ContactButton } from "./lead-modal";
import { SvgIcon } from "./ui";

// Building blocks shared by the product and service detail pages.

export function DetailHero({
  art,
  crumbs,
  description,
  liveUrl,
  requirement,
  title,
}: {
  art: string;
  crumbs: { label: string; href?: string }[];
  description: string;
  liveUrl?: string;
  requirement: string;
  title: string;
}) {
  return (
    <section className="ix-hero ix-detail-hero">
      <div className="ix-detail-frame">
        <ArtTile className="ix-detail-bg" priority sizes="100vw" variant={art} />
        <div className="ix-detail-shade" aria-hidden="true" />

        <div className="ix-container ix-detail-inner">
          <ol aria-label="Breadcrumb" className="ix-crumbs">
            {crumbs.map((crumb) => (
              <li key={crumb.label}>
                {crumb.href ? <Link href={crumb.href}>{crumb.label}</Link> : <span>{crumb.label}</span>}
              </li>
            ))}
          </ol>

          <h1>{title}</h1>
          <p>{description}</p>

          <div className="ix-detail-actions">
            <ContactButton className="ix-light-button" requirement={requirement}>
              Talk to us
              <SvgIcon className="icon-svg" name="arrow-up-right" />
            </ContactButton>
            {liveUrl ? (
              <a className="ix-ghost-link" href={liveUrl} rel="noreferrer" target="_blank">
                Visit live site
                <SvgIcon className="icon-svg" name="arrow-up-right" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}

export function DetailOverview({
  heading,
  kicker,
  listTitle,
  paragraphs,
  points,
}: {
  heading: string;
  kicker: string;
  listTitle: string;
  paragraphs: string[];
  points: string[];
}) {
  return (
    <section className="ix-section ix-overview">
      <div className={`ix-container ix-overview-grid ${points.length ? "" : "is-single"}`}>
        <div className="ix-overview-copy">
          <span className="ix-eyebrow">{kicker}</span>
          <h2>{heading}</h2>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>

        {points.length > 0 ? (
          <div className="ix-checklist">
            <h3>{listTitle}</h3>
            <ul>
              {points.map((point) => (
                <li key={point}>
                  <SvgIcon className="icon-svg" name="check" />
                  {point}
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
}

export function DetailGallery({
  kind,
  name,
  screens,
}: {
  kind: "phone" | "browser";
  name: string;
  screens: { image: StaticImageData; alt: string }[];
}) {
  if (screens.length === 0) return null;

  return (
    <section className="ix-section ix-gallery">
      <div className="ix-container">
        <header className="ix-head ix-head-dark">
          <h2>Inside {name}</h2>
          <p>Real screens from the product we designed and built.</p>
        </header>

        {kind === "browser" ? (
          <div className="ix-browsers">
            {screens.map((screen) => (
              <figure className="ix-browser" key={screen.alt}>
                <div className="ix-browser-bar" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </div>
                <Image
                  alt={screen.alt}
                  placeholder="blur"
                  sizes="(max-width: 760px) 100vw, 600px"
                  src={screen.image}
                />
              </figure>
            ))}
          </div>
        ) : (
          <div className="ix-phones" style={{ "--count": screens.length } as CSSProperties}>
            {screens.map((screen) => (
              <figure className="ix-phone" key={screen.alt}>
                <Image alt={screen.alt} placeholder="blur" sizes="260px" src={screen.image} />
              </figure>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

const featureImageDir = path.join(process.cwd(), "public", "images", "features");

// Feature cards in the dark band. A card shows its image from
// public/images/features/ when that file exists; otherwise an icon panel of
// the same size stands in, so a partial set of images still lines up.
export function DetailFeatureShowcase({ features }: { features?: FeatureShowcase }) {
  if (!features) return null;

  return (
    <section className="ix-section ix-gallery">
      <div className="ix-container">
        <header className="ix-head ix-head-dark">
          <h2>{features.title}</h2>
          <p>{features.description}</p>
        </header>

        <div className="ix-tiles">
          {features.tiles.map((tile) => (
            <article className="ix-tile" key={tile.title}>
              {fs.existsSync(path.join(featureImageDir, tile.imageFile)) ? (
                <span className="ix-tile-media">
                  <Image
                    alt=""
                    fill
                    sizes="(max-width: 760px) 100vw, (max-width: 1080px) 50vw, 300px"
                    src={`/images/features/${tile.imageFile}`}
                  />
                </span>
              ) : (
                <span className="ix-tile-media ix-tile-media-icon" aria-hidden="true">
                  <span className="ix-tile-icon">
                    <SvgIcon className="icon-svg" name={tile.icon} />
                  </span>
                </span>
              )}
              <div className="ix-tile-body">
                <span className="ix-tile-module">{tile.module}</span>
                <h3>{tile.title}</h3>
                <p>{tile.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailFeatures({ section, tone }: { section: DetailSection; tone: "white" | "tint" }) {
  return (
    <section className={`ix-section ix-features ix-features-${tone}`}>
      <div className="ix-container">
        <header className="ix-head">
          <span className="ix-eyebrow">{section.kicker}</span>
          <h2>{section.title}</h2>
          {section.description ? <p>{section.description}</p> : null}
        </header>

        <div className={`ix-feature-grid ix-feature-grid-${Math.min(section.items.length, 4)}`}>
          {section.items.map((item, index) => (
            <article className="ix-feature" key={item.title}>
              <span className="ix-feature-num">{String(index + 1).padStart(2, "0")}</span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailProcess() {
  const { successSection } = siteContent;

  return (
    <section className="ix-section ix-features ix-features-tint">
      <div className="ix-container">
        <header className="ix-head">
          <span className="ix-eyebrow">How we work</span>
          <h2>From first call to launch</h2>
        </header>

        <div className="ix-steps-row">
          {successSection.steps.map((step, index) => (
            <article className="ix-step-item" key={step.title}>
              <ArtTile className="ix-step-art" variant={successSection.arts[index]} />
              <span className="ix-tag">Step {String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DetailStack({ names }: { names: string[] }) {
  const stack = siteContent.clientsSection.rows.flat().filter((tech) => names.includes(tech.name));

  return (
    <section className="ix-logos">
      <div className="ix-container">
        <span className="ix-eyebrow">Technologies we use</span>
        <ul>
          {stack.map((tech) => (
            <li key={tech.name}>
              <img alt="" loading="lazy" src={tech.logoUrl} />
              {tech.name}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function DetailRelated({
  allHref,
  children,
  title,
}: {
  allHref: string;
  children: ReactNode;
  title: string;
}) {
  return (
    <section className="ix-section ix-related">
      <div className="ix-container">
        <div className="ix-related-head">
          <h2>{title}</h2>
          <Link className="ix-link" href={allHref}>
            View all
            <SvgIcon className="icon-svg" name="arrow-up-right" />
          </Link>
        </div>
        <div className="ix-related-grid">{children}</div>
      </div>
    </section>
  );
}

export function RelatedCard({
  art,
  description,
  href,
  kicker,
  title,
}: {
  art: string;
  description: string;
  href: string;
  kicker: string;
  title: string;
}) {
  return (
    <Link className="ix-related-card" href={href}>
      <ArtTile className="ix-related-art" variant={art} />
      <div className="ix-related-body">
        <span className="ix-related-kicker">{kicker}</span>
        <h3>{title}</h3>
        <p>{description}</p>
        <span className="ix-link">
          View more
          <SvgIcon className="icon-svg" name="arrow-up-right" />
        </span>
      </div>
    </Link>
  );
}
