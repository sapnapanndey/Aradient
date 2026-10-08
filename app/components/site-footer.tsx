import Image from "next/image";
import Link from "next/link";
import siteContent from "../content/site-content.json";
import logoBlackImage from "../../images/logo_black.svg";
import { ArtTile } from "./art";
import { ContactButton } from "./lead-modal";
import { SvgIcon } from "./ui";

// "Build your next product" band shown above the footer on every page.
export function CtaBand() {
  const { ctaBand } = siteContent;

  return (
    <section className="ix-band" id="company">
      <div className="ix-container ix-band-inner">
        <div className="ix-band-copy">
          <span className="ix-tag ix-tag-light">{ctaBand.kicker}</span>
          <h2>{ctaBand.title}</h2>
          <p>{ctaBand.description}</p>
          <ContactButton className="ix-light-button">
            {ctaBand.button}
            <SvgIcon className="icon-svg" name="arrow-up-right" />
          </ContactButton>
        </div>
        <ArtTile className="ix-band-art" sizes="(max-width: 760px) 100vw, 640px" variant={ctaBand.art} />
      </div>
    </section>
  );
}

export function SiteFooter() {
  const { brand, footer } = siteContent;

  return (
    <footer className="ix-footer">
      <div className="ix-container">
        <div className="ix-footer-grid">
          <div className="ix-footer-brand">
            <Image alt={`${brand.name} logo`} className="ix-footer-logo" src={logoBlackImage} />
            <p>{footer.description}</p>
          </div>
          {footer.columns.map((column) => (
            <div className="ix-footer-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <Link href={link.href} key={link.label}>
                  {link.label}
                </Link>
              ))}
            </div>
          ))}
          <div className="ix-footer-col">
            <h4>Contact</h4>
            {footer.contacts.map((item) => (
              <a href={item.href} key={item.label}>
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="ix-footer-bottom">
          <span className="ix-location">
            <SvgIcon className="icon-svg" name="globe" />
            {footer.locationLabel}
          </span>
          <div className="ix-socials">
            {footer.socials.map((social) => (
              <a
                aria-label={social.label}
                href={social.href}
                key={social.label}
                rel="noreferrer"
                target="_blank"
              >
                <SvgIcon className="icon-svg" name={social.icon} />
              </a>
            ))}
          </div>
          <div className="ix-footer-legal">
            <span>{footer.copyright}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
