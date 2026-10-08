import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DetailFeatures,
  DetailHero,
  DetailOverview,
  DetailProcess,
  DetailRelated,
  DetailStack,
  RelatedCard,
} from "../../components/detail";
import { SiteHeader } from "../../components/site-header";
import { CtaBand, SiteFooter } from "../../components/site-footer";
import { servicePages } from "../../lib/catalog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages.find((entry) => entry.slug === slug);
  if (!service) return {};

  return {
    title: `${service.title} | Aradient Technology`,
    description: service.intro,
  };
}

export default async function ServicePage({ params }: Params) {
  const { slug } = await params;
  const index = servicePages.findIndex((entry) => entry.slug === slug);
  if (index < 0) notFound();

  const service = servicePages[index];
  // The next three services in order, wrapping around, so every page links onward.
  const related = [1, 2, 3].map((offset) => servicePages[(index + offset) % servicePages.length]);

  return (
    <main className="ix-page">
      <SiteHeader solidAfter={0.35} />

      <DetailHero
        art={service.art}
        crumbs={[{ label: "Home", href: "/" }, { label: "Services", href: "/#services" }, { label: service.title }]}
        description={service.description}
        requirement={`I'm interested in ${service.title}.`}
        title={service.headline}
      />

      <DetailOverview
        heading="What we deliver"
        kicker="Overview"
        listTitle="Included"
        paragraphs={[service.intro]}
        points={service.deliverables}
      />

      <DetailFeatures
        section={{ kicker: "Use cases", title: "What you can build with us", items: service.useCases }}
        tone="tint"
      />

      <DetailStack names={service.stack} />

      <DetailProcess />

      <DetailRelated allHref="/#services" title="Explore more services">
        {related.map((entry) => (
          <RelatedCard
            art={entry.art}
            description={entry.description}
            href={`/services/${entry.slug}`}
            key={entry.slug}
            kicker="Service"
            title={entry.title}
          />
        ))}
      </DetailRelated>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
