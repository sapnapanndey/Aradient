import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  DetailFeatureShowcase,
  DetailFeatures,
  DetailGallery,
  DetailHero,
  DetailOverview,
  DetailRelated,
  RelatedCard,
} from "../../components/detail";
import { SiteHeader } from "../../components/site-header";
import { CtaBand, SiteFooter } from "../../components/site-footer";
import { productHref, productPages } from "../../lib/catalog";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return productPages.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const product = productPages.find((entry) => entry.slug === slug);
  if (!product) return {};

  return {
    title: `${product.name} | Aradient Technology`,
    description: product.summary,
  };
}

export default async function ProductPage({ params }: Params) {
  const { slug } = await params;
  const product = productPages.find((entry) => entry.slug === slug);
  if (!product) notFound();

  const others = productPages.filter((entry) => entry.slug !== product.slug);

  return (
    <main className="ix-page">
      <SiteHeader solidAfter={0.35} />

      <DetailHero
        art={product.heroArt ?? product.art}
        crumbs={[{ label: "Home", href: "/" }, { label: "Products", href: "/#spotlight" }, { label: product.name }]}
        description={product.description}
        liveUrl={product.liveUrl}
        requirement={`I'd like to know more about ${product.name}.`}
        title={product.title}
      />

      <DetailOverview
        heading={product.overviewHeading}
        kicker="Overview"
        listTitle="Highlights"
        paragraphs={product.overview}
        points={product.points}
      />

      <DetailGallery kind={product.screenKind} name={product.name} screens={product.screens} />
      <DetailFeatureShowcase features={product.features} />

      {product.sections.map((section, index) => (
        <DetailFeatures key={section.title} section={section} tone={index % 2 === 0 ? "white" : "tint"} />
      ))}

      <DetailRelated allHref="/#spotlight" title="Explore more products">
        {others.map((entry) => (
          <RelatedCard
            art={entry.art}
            description={entry.summary}
            href={productHref(entry.slug)}
            key={entry.slug}
            kicker={entry.tagline}
            title={entry.name}
          />
        ))}
      </DetailRelated>

      <CtaBand />
      <SiteFooter />
    </main>
  );
}
