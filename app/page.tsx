"use client";

import Image from "next/image";
import akankshaImage from "../images/akanksha.jpeg";
import { useEffect, useMemo, useState } from "react";
import engineeringImage from "../images/engineering.png";
import kunalReddyImage from "../images/kunal Reddy.png";
import launchImage from "../images/launch.png";
import prototypeImage from "../images/prototype.png";
import sonamTripathiImage from "../images/Sonam Tripathi.png";
import strategyImage from "../images/strategy.png";
import siteContent from "./content/site-content.json";

function SvgIcon({
  name,
  className,
}: {
  name: string;
  className?: string;
}) {
  const sharedProps = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    "aria-hidden": true,
  } as const;

  switch (name) {
    case "badge-star":
      return (
        <svg {...sharedProps}>
          <path
            d="M12 3.5L14.2 8.3L19 10.5L14.2 12.7L12 17.5L9.8 12.7L5 10.5L9.8 8.3L12 3.5Z"
            fill="currentColor"
          />
        </svg>
      );
    case "gear":
      return (
        <svg {...sharedProps}>
          <path
            d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z"
            stroke="currentColor"
            strokeWidth="1.7"
          />
          <path
            d="M19 12A7 7 0 0 0 18.9 10.8L21 9.2L18.8 5.4L16.2 6.3A7.5 7.5 0 0 0 14.1 5.1L13.7 2.3H10.3L9.9 5.1A7.5 7.5 0 0 0 7.8 6.3L5.2 5.4L3 9.2L5.1 10.8A7 7 0 0 0 5 12C5 12.4 5 12.8 5.1 13.2L3 14.8L5.2 18.6L7.8 17.7C8.4 18.2 9.1 18.6 9.9 18.9L10.3 21.7H13.7L14.1 18.9C14.9 18.6 15.6 18.2 16.2 17.7L18.8 18.6L21 14.8L18.9 13.2C19 12.8 19 12.4 19 12Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "rocket":
      return (
        <svg {...sharedProps}>
          <path
            d="M14.5 4.5C17.8 5 19 7.8 19.5 11.1L14.2 16.4C10.9 15.9 8.1 14.7 7.6 11.4L14.5 4.5Z"
            fill="currentColor"
            opacity="0.9"
          />
          <path
            d="M14.5 4.5C17.8 5 19 7.8 19.5 11.1L14.2 16.4C10.9 15.9 8.1 14.7 7.6 11.4L14.5 4.5Z"
            stroke="currentColor"
            strokeWidth="1.4"
            strokeLinejoin="round"
          />
          <circle cx="15.3" cy="8.7" r="1.6" fill="#fff" />
          <path d="M7.8 12.2L4.6 13.2L6.1 9.9L9.1 10.7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M11.8 14.9L10.9 18L14.1 16.5L13.3 13.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "brain":
      return (
        <svg {...sharedProps}>
          <path
            d="M9 5.2A3.2 3.2 0 0 0 5.8 8.4C4.2 8.9 3.2 10.5 3.5 12.2C3.8 13.9 5.2 15.1 6.8 15.2C7.1 17.1 8.7 18.5 10.7 18.5C12.1 18.5 13.3 17.8 14 16.8C14.7 17.8 15.9 18.5 17.3 18.5C19.3 18.5 20.9 17.1 21.2 15.2C22.8 15.1 24.2 13.9 24.5 12.2C24.8 10.5 23.8 8.9 22.2 8.4A3.2 3.2 0 0 0 19 5.2C17.9 5.2 16.9 5.7 16.2 6.5C15.6 5.1 14.2 4 12.5 4C10.8 4 9.4 5.1 8.8 6.5C8.1 5.7 10.1 5.2 9 5.2Z"
            transform="translate(-2 -1)"
            fill="currentColor"
            opacity="0.92"
          />
          <path
            d="M9 8.3C10.4 8.3 11.5 9.4 11.5 10.8V17.3M15 8.3C13.6 8.3 12.5 9.4 12.5 10.8V17.3M8.2 11.8H12M12.5 8V6.6M16.1 11.8H12.5"
            stroke="#fff"
            strokeWidth="1.4"
            strokeLinecap="round"
          />
        </svg>
      );
    case "spark":
      return (
        <svg {...sharedProps}>
          <path d="M13.4 2L6.5 12H11L10.6 22L17.5 12H13L13.4 2Z" fill="currentColor" />
        </svg>
      );
    case "bot":
      return (
        <svg {...sharedProps}>
          <rect x="5" y="7" width="14" height="11" rx="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M12 4V7M8 12H8.01M16 12H16.01M9 15.5H15" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      );
    case "puzzle":
      return (
        <svg {...sharedProps}>
          <path
            d="M8 4.5H11.2C11.2 5.8 12.2 6.8 13.5 6.8C14.8 6.8 15.8 5.8 15.8 4.5H19.5V8.2C18.2 8.2 17.2 9.2 17.2 10.5C17.2 11.8 18.2 12.8 19.5 12.8V19.5H15.8C15.8 18.2 14.8 17.2 13.5 17.2C12.2 17.2 11.2 18.2 11.2 19.5H4.5V12.8C5.8 12.8 6.8 11.8 6.8 10.5C6.8 9.2 5.8 8.2 4.5 8.2V4.5H8Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "idea":
      return (
        <svg {...sharedProps}>
          <path d="M12 4.5A5.5 5.5 0 0 0 8.3 14.1C9 14.8 9.5 15.5 9.8 16.3H14.2C14.5 15.5 15 14.8 15.7 14.1A5.5 5.5 0 0 0 12 4.5Z" fill="currentColor" />
          <path d="M10 18.3H14M10.5 20.4H13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case "tools":
      return (
        <svg {...sharedProps}>
          <path d="M14.8 4.5L19.5 9.2L17.2 11.5L12.5 6.8L14.8 4.5Z" fill="currentColor" />
          <path d="M5 19L11 13M8.8 5.2A3.2 3.2 0 0 0 5.2 8.8L7.2 10.8L4.8 13.2L2.8 11.2A3.2 3.2 0 0 0 6.4 14.8L14.8 6.4A3.2 3.2 0 0 0 8.8 5.2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "code":
      return (
        <svg {...sharedProps}>
          <path d="M8.5 7L4 12L8.5 17M15.5 7L20 12L15.5 17M13.5 5L10.5 19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "automation":
      return (
        <svg {...sharedProps}>
          <path d="M7 7C8.7 5.3 11.4 5.3 13.1 7L14 7.9L15 7C16.7 5.3 19.4 5.3 21.1 7C22.8 8.7 22.8 11.4 21.1 13.1L20.2 14L21.1 15C22.8 16.7 22.8 19.4 21.1 21.1C19.4 22.8 16.7 22.8 15 21.1L14 20.2L13.1 21.1C11.4 22.8 8.7 22.8 7 21.1C5.3 19.4 5.3 16.7 7 15L7.9 14L7 13.1C5.3 11.4 5.3 8.7 7 7Z"
            transform="translate(-2 -2)"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "arrow-right":
      return (
        <svg {...sharedProps}>
          <path d="M5 12H19M13 6L19 12L13 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
}

const teamImages = {
  akanksha: akankshaImage,
  kunalReddy: kunalReddyImage,
  sonamTripathi: sonamTripathiImage,
} as const;

export default function Home() {
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [activeProductIndex, setActiveProductIndex] = useState(0);
  const [flippedSuccessIndex, setFlippedSuccessIndex] = useState<number | null>(null);
  const [headerOnLight, setHeaderOnLight] = useState(false);
  const [visibleSections, setVisibleSections] = useState<number[]>([]);

  const {
    brand,
    clientsSection,
    footer,
    hero,
    navigation,
    products,
    showcase,
    successSection,
    teamSection,
  } = siteContent;

  useEffect(() => {
    const interval = window.setInterval(() => {
      setActiveWordIndex((current) => (current + 1) % hero.words.length);
    }, 3000);

    return () => window.clearInterval(interval);
  }, [hero.words.length]);

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;

          const indexValue = entry.target.getAttribute("data-reveal");
          if (!indexValue) return;

          const index = Number(indexValue);
          setVisibleSections((current) =>
            current.includes(index) ? current : [...current, index],
          );
        });
      },
      { threshold: 0.12 },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateHeaderTheme = () => {
      const triggerSection = document.getElementById("company");
      if (!triggerSection) return;

      const switchPoint = triggerSection.offsetTop - 88;
      setHeaderOnLight(window.scrollY >= switchPoint);
    };

    updateHeaderTheme();
    window.addEventListener("scroll", updateHeaderTheme, { passive: true });
    window.addEventListener("resize", updateHeaderTheme);

    return () => {
      window.removeEventListener("scroll", updateHeaderTheme);
      window.removeEventListener("resize", updateHeaderTheme);
    };
  }, []);

  const activeProduct = useMemo(
    () => products.items[activeProductIndex],
    [activeProductIndex, products.items],
  );

  const isVisible = (index: number) =>
    visibleSections.includes(index) ? "reveal visible" : "reveal";

  return (
    <main>
      <nav className={headerOnLight ? "nav-on-light" : "nav-on-dark"}>
        <div className="nav-logo">
          <span className="dot" />
          {brand.name}
        </div>
        <div className="nav-links">
          {navigation.links.map((link) => (
            <a href={link.href} key={link.label}>
              {link.label}
            </a>
          ))}
        </div>
        <button className="nav-cta" type="button">
          {navigation.cta}
        </button>
      </nav>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grain" />

        <div className="hero-badge">
          <span className="hero-badge-dot">
            <SvgIcon name="badge-star" className="hero-badge-icon" />
          </span>
          {hero.badge}
        </div>

        <h1>
          {hero.titlePrefix}{" "}
          <span className="word-swap" key={hero.words[activeWordIndex]}>
            <span className="fade-word">{hero.words[activeWordIndex]}</span>
          </span>
          <br />
          {hero.titleSuffix}
        </h1>

        <p className="hero-sub">{hero.description}</p>

        <form
          className="hero-form"
          onSubmit={(event) => {
            event.preventDefault();
          }}
        >
          <input type="email" placeholder={hero.formPlaceholder} aria-label="Email address" />
          <button type="submit">{hero.formButton}</button>
        </form>

        <div className="hero-stats">
          {hero.stats.map((stat) => (
            <div className="stat-item" key={stat.label}>
              <div className="stat-num">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className={`showcase-section ${isVisible(1)}`} data-reveal="1" id="company">
        <div className="showcase-shell">
          <article className={`feature-panel ${isVisible(2)}`} data-reveal="2">
            <div className="feature-copy">
              <h2>{showcase.feature.title}</h2>
              <p>{showcase.feature.description}</p>
              <div className="feature-actions">
                <button className="feature-btn feature-btn-primary" type="button">
                  {showcase.feature.primaryButton}
                </button>
                <button className="feature-btn feature-btn-secondary" type="button">
                  {showcase.feature.secondaryButton}
                </button>
              </div>
            </div>
            <div className="feature-visual" aria-hidden="true">
              <div className="feature-glow" />
              <Image
                alt="Engineering illustration"
                className="feature-image"
                priority
                src={engineeringImage}
              />
            </div>
          </article>

        </div>
      </section>

      <section className={`success-section ${isVisible(3)}`} data-reveal="3" id="services">
        <div className="success-shell">
          <div className="success-ambient success-ambient-left" aria-hidden="true" />
          <div className="success-ambient success-ambient-right" aria-hidden="true" />
          <div className={`success-header ${isVisible(4)}`} data-reveal="4">
            <h2>{successSection.title}</h2>
            <p>{successSection.description}</p>
          </div>

          <div className="success-grid">
            {successSection.steps.map((step, index) => (
              <div className="success-card-wrap" key={step.title}>
                <button
                  className={`success-card success-card-button ${isVisible(index + 5)} ${
                    flippedSuccessIndex === index ? "is-flipped" : ""
                  }`}
                  data-reveal={index + 5}
                  onClick={() =>
                    setFlippedSuccessIndex((current) => (current === index ? null : index))
                  }
                  onMouseEnter={() => setFlippedSuccessIndex(index)}
                  onMouseLeave={() => setFlippedSuccessIndex((current) => (current === index ? null : current))}
                  onBlur={() => setFlippedSuccessIndex((current) => (current === index ? null : current))}
                  type="button"
                >
                  <div className="success-card-inner">
                    <div className="success-card-face success-card-front">
                      <div
                        className={`${step.iconClassName} ${
                          step.image ? "success-icon-plain" : ""
                        }`}
                      >
                        {step.image === "strategy" ? (
                          <Image alt="" className="success-image-icon" src={strategyImage} />
                        ) : step.image === "prototype" ? (
                          <Image alt="" className="success-image-icon" src={prototypeImage} />
                        ) : step.image === "launch" ? (
                          <Image alt="" className="success-image-icon" src={launchImage} />
                        ) : (
                          <SvgIcon name={step.icon} className="icon-svg success-svg" />
                        )}
                      </div>
                      <h3>{step.title}</h3>
                      <div className="success-card-line" aria-hidden="true" />
                      <span className="success-card-hint">View details</span>
                    </div>

                    <div className="success-card-face success-card-back">
                      <h3>{step.title}</h3>
                      <p>{step.description}</p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`clients-section ${isVisible(8)}`} data-reveal="8">
        <div className="clients-shell">
          <div className={`clients-header ${isVisible(9)}`} data-reveal="9">
            <h2>{clientsSection.title}</h2>
            <p>{clientsSection.description}</p>
          </div>

          <div className="clients-marquee-group">
            {clientsSection.rows.map((row, rowIndex) => (
              <div
                className={`clients-marquee-row ${
                  rowIndex % 2 === 0 ? "clients-marquee-left" : "clients-marquee-right"
                }`}
                key={`row-${rowIndex}`}
              >
                {[...row, ...row].map((client, clientIndex) => (
                  <div className="client-pill" key={`${client}-${clientIndex}`}>
                    <span className="client-mark" aria-hidden="true">
                      {client.charAt(0)}
                    </span>
                    <span>{client}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`team-section ${isVisible(10)}`} data-reveal="10">
        <div className="team-shell">
          <div className="team-heading">
            <div className={`team-heading-left ${isVisible(11)}`} data-reveal="11">
              <span className="team-kicker">{teamSection.label}</span>
              <h2>{teamSection.title}</h2>
            </div>
            <div className={`team-heading-right ${isVisible(12)}`} data-reveal="12">
              <p>{teamSection.description}</p>
            </div>
          </div>

          <div className="team-grid">
            {teamSection.members.map((member, index) => (
              <article
                className={`team-card ${isVisible(index + 13)}`}
                data-reveal={index + 13}
                key={member.name}
              >
                <div className={`team-portrait team-portrait-${member.variant}`}>
                  {member.image in teamImages ? (
                    <Image
                      alt={member.name}
                      className="team-portrait-image"
                      loading="lazy"
                      src={teamImages[member.image as keyof typeof teamImages]}
                    />
                  ) : (
                    <img
                      alt={member.name}
                      className="team-portrait-image"
                      loading="lazy"
                      src={member.image}
                    />
                  )}
                </div>
                <div className="team-copy">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        className={`products-section ${isVisible(17)}`}
        data-reveal="17"
        id="products"
      >
        <div className="products-inner">
          <div className="products-list" id="capabilities">
            {products.items.map((product, index) => (
              <button
                className={`product-item ${index === activeProductIndex ? "active" : ""}`}
                key={product.title}
                onClick={() => setActiveProductIndex(index)}
                type="button"
              >
                <h3>
                  <span className="product-item-icon">
                    <SvgIcon name={product.icon} className="icon-svg product-item-svg" />
                  </span>
                  {product.title}
                </h3>
                <ul>
                  {product.items.map((item) => (
                    <li key={item.label}>
                      <span>{item.label}:</span> {item.text}
                    </li>
                  ))}
                </ul>
              </button>
            ))}
          </div>

          <div className="product-visual">
            <div className="orbit-container" aria-hidden="true">
              <div className="orbit-ring" />
              <div className="orbit-ring" />
              <div className="orbit-ring" />
              <div className="orbit-center">
                <SvgIcon name={activeProduct.centerIcon} className="icon-svg orbit-center-svg" />
              </div>
            </div>
            <div className="nocode-badge">{activeProduct.badge}</div>
          </div>
        </div>
      </section>

      <footer className={isVisible(18)} data-reveal="18">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="nav-logo footer-logo">
              <span className="dot" />
              {brand.name}
            </div>
            <p>{footer.description}</p>
          </div>
          {footer.columns.map((column) => (
            <div className="footer-col" key={column.title}>
              <h4>{column.title}</h4>
              {column.links.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}
            </div>
          ))}
        </div>
        <div className="footer-bottom">
          <p>{footer.copyright}</p>
          <p>{footer.bottomTagline}</p>
        </div>
      </footer>
    </main>
  );
}
