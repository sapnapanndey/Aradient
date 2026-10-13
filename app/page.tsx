"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import akankshaImage from "../images/akanksha.jpeg";
import kunalReddyImage from "../images/kunal Reddy.png";
import sonamTripathiImage from "../images/Sonam Tripathi.png";
import { ArtTile } from "./components/art";
import { HeroScene } from "./components/hero-scene";
import { useLeadModal } from "./components/lead-modal";
import { SiteHeader } from "./components/site-header";
import { CtaBand, SiteFooter } from "./components/site-footer";
import { SvgIcon } from "./components/ui";
import siteContent from "./content/site-content.json";
import { productHref, productPages, serviceHref } from "./lib/catalog";

const teamImages = {
  akanksha: akankshaImage,
  kunalReddy: kunalReddyImage,
  sonamTripathi: sonamTripathiImage,
} as const;

// Scroll-snap carousel state: arrows scroll one card, the pager follows scroll.
function useCarousel(count: number) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [index, setIndex] = useState(0);

  const stepWidth = () => {
    const track = ref.current;
    const first = track?.firstElementChild as HTMLElement | null;
    if (!track || !first) return 0;
    return first.offsetWidth + (parseFloat(getComputedStyle(track).columnGap) || 0);
  };

  const goTo = (target: number) => {
    const track = ref.current;
    if (!track) return;
    const clamped = Math.max(0, Math.min(count - 1, target));
    track.scrollTo({ left: clamped * stepWidth(), behavior: "smooth" });
  };

  const onScroll = () => {
    const track = ref.current;
    const step = stepWidth();
    if (!track || !step) return;
    const isAtEnd = track.scrollLeft + track.clientWidth >= track.scrollWidth - 4;
    setIndex(isAtEnd ? count - 1 : Math.round(track.scrollLeft / step));
  };

  return {
    ref,
    index,
    count,
    onScroll,
    prev: () => goTo(index - 1),
    next: () => goTo(index + 1),
  };
}

function CarouselPager({
  carousel,
  label,
  tone = "light",
}: {
  carousel: ReturnType<typeof useCarousel>;
  label: string;
  tone?: "light" | "dark";
}) {
  return (
    <div className={`ix-pager ix-pager-${tone}`}>
      <button
        aria-label={`Previous ${label}`}
        disabled={carousel.index === 0}
        onClick={carousel.prev}
        type="button"
      >
        <SvgIcon className="icon-svg" name="arrow-left" />
      </button>
      <span>
        <strong>{carousel.index + 1}</strong> / {carousel.count}
      </span>
      <button
        aria-label={`Next ${label}`}
        disabled={carousel.index === carousel.count - 1}
        onClick={carousel.next}
        type="button"
      >
        <SvgIcon className="icon-svg" name="arrow-right" />
      </button>
    </div>
  );
}

export default function Home() {
  const openLeadModal = useLeadModal();
  const [activeWordIndex, setActiveWordIndex] = useState(0);
  const [heroPrompt, setHeroPrompt] = useState("");
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const [hasAutoOpenedLeadModal, setHasAutoOpenedLeadModal] = useState(false);

  const {
    clientsSection,
    crafting,
    hero,
    inAction,
    servicesSection,
    spotlight,
    successSection,
  } = siteContent;

  // Only spotlight products that currently have a page in the catalog.
  const spotlightItems = spotlight.items.filter((item) => productPages.some((page) => page.slug === item.slug));
  const spotlightCarousel = useCarousel(spotlightItems.length);
  const inActionCarousel = useCarousel(inAction.items.length);

  const findService = (title: string) =>
    servicesSection.items.find((service) => service.title === title);

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

          const id = entry.target.getAttribute("data-reveal");
          if (!id) return;

          setVisibleSections((current) => (current.includes(id) ? current : [...current, id]));
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (hasAutoOpenedLeadModal) return;

    const handleScroll = () => {
      const scrollableHeight =
        document.documentElement.scrollHeight - window.innerHeight;

      if (scrollableHeight <= 0) return;

      const scrollProgress = window.scrollY / scrollableHeight;
      if (scrollProgress < 0.5) return;

      setHasAutoOpenedLeadModal(true);
      openLeadModal();
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasAutoOpenedLeadModal, openLeadModal]);

  const isRevealed = (id: string) => visibleSections.includes(id);
  const reveal = (id: string, extraClassName = "") => ({
    className: `${extraClassName} reveal${isRevealed(id) ? " visible" : ""}`.trim(),
    "data-reveal": id,
  });

  const techStack = clientsSection.rows.flat();

  return (
    <main className="ix-page">
      <SiteHeader />

      <section className="ix-hero" id="top">
        <div className="ix-hero-frame">
          <HeroScene />
          <div className="ix-hero-shade" aria-hidden="true" />

          <div className="ix-hero-center">
            <h1>
              {hero.titlePrefix}{" "}
              {/* Every word shares one grid cell, so the slot is always as wide as
                  the longest word and the headline never shifts as they rotate. */}
              <span className="ix-word-slot">
                {hero.words.map((word, index) => (
                  <span
                    aria-hidden={index !== activeWordIndex}
                    className={`ix-word ${index === activeWordIndex ? "is-active" : ""}`}
                    key={word}
                  >
                    {word}
                  </span>
                ))}
              </span>
              <br />
              {hero.titleSuffix}
            </h1>

            <form
              className="ix-prompt"
              onSubmit={(event) => {
                event.preventDefault();
                openLeadModal({ requirement: heroPrompt.trim() });
              }}
            >
              <input
                aria-label="What do you want to build?"
                onChange={(event) => setHeroPrompt(event.target.value)}
                placeholder={hero.promptPlaceholder}
                type="text"
                value={heroPrompt}
              />
              <button aria-label="Send" className="ix-prompt-send" type="submit">
                <SvgIcon className="icon-svg" name="arrow-right" />
              </button>
            </form>
          </div>

          <div className="ix-hero-cards">
            {hero.cards.map((card) => (
              <Link className="ix-hero-card" href={card.href} key={card.title}>
                <span className="ix-hero-card-label">{card.label}</span>
                <strong>{card.title}</strong>
                <span className="ix-hero-card-arrow" aria-hidden="true">
                  <SvgIcon className="icon-svg" name="arrow-up-right" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="ix-spotlight" id="spotlight">
        <div className="ix-container">
          <div className="ix-spotlight-head">
            <span className="ix-eyebrow">{spotlight.kicker}</span>
            <CarouselPager carousel={spotlightCarousel} label="product" />
          </div>
        </div>

        <div
          className="ix-track ix-spotlight-track"
          onScroll={spotlightCarousel.onScroll}
          ref={spotlightCarousel.ref}
        >
          {spotlightItems.map((item, index) => (
            <article key={item.name} {...reveal(`spot-${index}`, "ix-story")}>
              <ArtTile className="ix-story-art" variant={item.art} />
              <div className="ix-story-body">
                <h3>{item.name}</h3>
                <p className="ix-story-tagline">{item.tagline}</p>
                <p>{item.description}</p>
                <Link className="ix-link ix-link-button" href={productHref(item.slug)}>
                  Read More
                  <SvgIcon className="icon-svg" name="arrow-up-right" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="ix-section ix-crafting" id="services">
        <div className="ix-container">
          <header {...reveal("crafting-head", "ix-head")}>
            <h2>
              {crafting.titleBefore} <span className="ix-accent">{crafting.titleAccent}</span>{" "}
              {crafting.titleAfter}
            </h2>
            <p>{crafting.description}</p>
            <button className="ix-dark-button" onClick={() => openLeadModal()} type="button">
              {crafting.button}
              <SvgIcon className="icon-svg" name="arrow-up-right" />
            </button>
          </header>

          <div className="ix-offer-grid">
            {crafting.items.map((item, index) => {
              const service = findService(item.service);
              if (!service) return null;

              return (
                <article key={item.service} {...reveal(`offer-${index}`, "ix-offer")}>
                  <ArtTile className="ix-offer-art" variant={item.art} />
                  <div className="ix-offer-body">
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                    <Link className="ix-link ix-link-button" href={serviceHref(service.title)}>
                      Learn More
                      <SvgIcon className="icon-svg" name="arrow-up-right" />
                    </Link>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="ix-section ix-action" id="capabilities">
        <div className="ix-container">
          <header {...reveal("action-head", "ix-head ix-head-dark")}>
            <h2>{inAction.title}</h2>
            <p>{inAction.description}</p>
          </header>
        </div>

        <div className="ix-track ix-action-track" onScroll={inActionCarousel.onScroll} ref={inActionCarousel.ref}>
          {inAction.items.map((item) => {
            const service = findService(item.service);
            if (!service) return null;

            return (
              <article className="ix-case" key={item.service}>
                <ArtTile className="ix-case-art" variant={item.art} />
                <div className="ix-case-body">
                  <span className="ix-tag">{inAction.tag}</span>
                  <h3>{service.title}</h3>
                  <p>{service.description}</p>
                  <Link className="ix-dark-button ix-dark-button-sm" href={serviceHref(service.title)}>
                    {inAction.button}
                    <SvgIcon className="icon-svg" name="arrow-up-right" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>

        <div className="ix-container ix-action-pager">
          <CarouselPager carousel={inActionCarousel} label="capability" tone="dark" />
        </div>
      </section>

      <section className="ix-logos" aria-label={clientsSection.title} id="stack">
        <div className="ix-container">
          <span className="ix-eyebrow">{clientsSection.title}</span>
          <ul>
            {techStack.map((tech) => (
              <li key={tech.name}>
                <img alt="" loading="lazy" src={tech.logoUrl} />
                {tech.name}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="ix-section ix-process" id="process">
        <div className="ix-container">
          <header {...reveal("process-head", "ix-head")}>
            <h2>{successSection.title}</h2>
            <p>{successSection.description}</p>
          </header>

          <div className="ix-process-grid">
            {successSection.steps.map((step, index) => (
              <article key={step.title} {...reveal(`process-${index}`, "ix-insight")}>
                <ArtTile className="ix-insight-art" variant={successSection.arts[index]} />
                <div className="ix-insight-body">
                  <span className="ix-tag">Step {String(index + 1).padStart(2, "0")}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />

      {/*
      <section className={`team-section ${isVisible(10)}`} data-reveal="10" id="team">
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
      */}

      <SiteFooter />
    </main>
  );
}
