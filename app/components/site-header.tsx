"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import siteContent from "../content/site-content.json";
import logoBlackImage from "../../images/logo_black.svg";
import logoWhiteImage from "../../images/logo_white.svg";
import { useLeadModal } from "./lead-modal";
import { AppButton, SvgIcon } from "./ui";

// Fixed header that sits transparently over a dark hero, then turns into a
// solid glass bar once `solidAfter` (a fraction of the viewport) is scrolled.
export function SiteHeader({ solidAfter = 0.55 }: { solidAfter?: number }) {
  const openLeadModal = useLeadModal();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { brand, footer, navigation } = siteContent;

  useEffect(() => {
    const updateHeader = () => setIsScrolled(window.scrollY > window.innerHeight * solidAfter);

    updateHeader();
    window.addEventListener("scroll", updateHeader, { passive: true });
    window.addEventListener("resize", updateHeader);

    return () => {
      window.removeEventListener("scroll", updateHeader);
      window.removeEventListener("resize", updateHeader);
    };
  }, [solidAfter]);

  useEffect(() => {
    if (!isMenuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isMenuOpen]);

  const openContact = () => {
    setIsMenuOpen(false);
    openLeadModal();
  };

  return (
    <>
      <header className={`ix-header ${isScrolled ? "is-scrolled" : ""}`}>
        <button
          aria-controls="ix-menu"
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className={`ix-burger ${isMenuOpen ? "is-open" : ""}`}
          onClick={() => setIsMenuOpen((current) => !current)}
          type="button"
        >
          <span />
          <span />
          <span />
        </button>

        <Link aria-label={`${brand.name} home`} className="ix-logo" href="/">
          {/* Both versions load up front; CSS shows the one that suits the header
              state, so the swap on scroll never flashes an unloaded image. */}
          <Image
            alt={`${brand.name} logo`}
            className="ix-logo-image ix-logo-light"
            priority
            src={logoWhiteImage}
          />
          <Image alt="" aria-hidden="true" className="ix-logo-image ix-logo-dark" priority src={logoBlackImage} />
        </Link>

        {/* Keep header navigation content-managed so copy updates do not require layout edits. */}
        <div aria-label="Primary" className="ix-pill-nav" role="navigation">
          {navigation.links.map((link) => (
            <Link href={link.href} key={link.label}>
              {link.label}
            </Link>
          ))}
        </div>

        <button className="ix-header-cta" onClick={openContact} type="button">
          <SvgIcon className="icon-svg" name="chat" />
          {navigation.cta}
        </button>
      </header>

      <div
        aria-hidden={!isMenuOpen}
        className={`ix-menu ${isMenuOpen ? "is-open" : ""}`}
        id="ix-menu"
        onClick={() => setIsMenuOpen(false)}
      >
        <div className="ix-menu-panel" onClick={(event) => event.stopPropagation()}>
          <div aria-label="Menu" className="ix-menu-links" role="navigation">
            {navigation.links.map((link) => (
              <Link href={link.href} key={link.label} onClick={() => setIsMenuOpen(false)}>
                {link.label}
                <SvgIcon className="icon-svg" name="arrow-right" />
              </Link>
            ))}
          </div>
          <div className="ix-menu-contact">
            {footer.contacts.slice(0, 2).map((item) => (
              <a href={item.href} key={item.label}>
                <SvgIcon className="icon-svg" name={item.icon} />
                {item.label}
              </a>
            ))}
          </div>
          <AppButton fullWidth onClick={openContact} type="button">
            {navigation.cta}
          </AppButton>
        </div>
      </div>
    </>
  );
}
