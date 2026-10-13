import type { StaticImageData } from "next/image";
import siteContent from "../content/site-content.json";
import fixAiImageOne from "../../images/apps/fixai/cropped/1.webp";
import fixAiImageTwo from "../../images/apps/fixai/cropped/2.webp";
import fixAiImageThree from "../../images/apps/fixai/cropped/3.webp";
import samagraImageOne from "../../images/apps/samagraenterprises/cropped/1.jpeg";
import samagraImageTwo from "../../images/apps/samagraenterprises/cropped/2.jpeg";
import samagraImageThree from "../../images/apps/samagraenterprises/cropped/3.jpeg";
import samagraImageFour from "../../images/apps/samagraenterprises/cropped/4.jpeg";
import samagraImageFive from "../../images/apps/samagraenterprises/cropped/5.jpeg";
import eyHomeImage from "../../images/apps/eyconstruction/home.jpg";
import eyAboutImage from "../../images/apps/eyconstruction/about.jpg";
import eyServicesImage from "../../images/apps/eyconstruction/services.jpg";
import eyQuoteImage from "../../images/apps/eyconstruction/quote.jpg";
import billingPointImageOne from "../../images/apps/billingpoint/cropped/1.jpg";
import billingPointImageTwo from "../../images/apps/billingpoint/cropped/2.jpg";
import billingPointImageThree from "../../images/apps/billingpoint/cropped/3.jpg";

export type DetailItem = { title: string; description: string };
export type DetailSection = { kicker: string; title: string; description?: string; items: DetailItem[] };

// A product feature card. `imageFile` is looked up in public/images/features/
// at build time; the card falls back to its icon until that file exists.
export type FeatureTile = DetailItem & { module: string; icon: string; imageFile: string };
export type FeatureShowcase = { title: string; description: string; tiles: FeatureTile[] };

export type ProductPage = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  art: string;
  // Banner image when it should differ from the card image (e.g. subject off-centre).
  heroArt?: string;
  title: string;
  description: string;
  overviewHeading: string;
  overview: string[];
  points: string[];
  sections: DetailSection[];
  screens: { image: StaticImageData; alt: string }[];
  // Mobile app screens sit in phone frames, website screens in browser frames.
  screenKind: "phone" | "browser";
  liveUrl?: string;
  features?: FeatureShowcase;
};

const toFileName = (prefix: string, title: string) =>
  `${prefix}-${title.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "")}.jpg`;

export type ServicePage = (typeof siteContent.serviceDetails)[number] & { description: string };

const {
  billingPointProduct,
  eyProduct,
  products,
  samagraProduct,
  // schoolProduct,
  spotlight,
  servicesSection,
  serviceDetails,
} = siteContent;

const spotlightFor = (slug: string) => {
  const item = spotlight.items.find((entry) => entry.slug === slug);
  if (!item) throw new Error(`Missing spotlight entry for ${slug}`);
  return item;
};

export const productPages: ProductPage[] = [
  {
    slug: "fixai",
    name: products.name,
    tagline: spotlightFor("fixai").tagline,
    summary: spotlightFor("fixai").description,
    art: spotlightFor("fixai").art,
    title: products.heroTitle,
    description: products.heroDescription,
    overviewHeading: products.problemTitle,
    overview: products.problemParagraphs,
    points: products.heroPoints,
    sections: [
      {
        kicker: products.platformKicker,
        title: products.platformTitle,
        description: products.platformDescription,
        items: products.capabilities,
      },
      {
        kicker: products.stepsKicker,
        title: products.stepsTitle,
        items: products.steps,
      },
      {
        kicker: products.aiKicker,
        title: products.aiTitle,
        description: products.aiDescription,
        items: products.aiFeatures,
      },
    ],
    screens: [
      { image: fixAiImageOne, alt: products.images.heroAlt },
      { image: fixAiImageTwo, alt: products.images.overviewAlt },
      { image: fixAiImageThree, alt: products.images.stepsAlt },
    ],
    screenKind: "phone",
  },
  {
    slug: "samagra-enterprises",
    name: samagraProduct.name,
    tagline: spotlightFor("samagra-enterprises").tagline,
    summary: spotlightFor("samagra-enterprises").description,
    art: spotlightFor("samagra-enterprises").art,
    title: samagraProduct.heroTitle,
    description: samagraProduct.heroDescription,
    overviewHeading: spotlightFor("samagra-enterprises").tagline,
    overview: [samagraProduct.platformDescription],
    points: samagraProduct.heroPoints,
    sections: [
      {
        kicker: "Services",
        title: samagraProduct.platformTitle,
        items: samagraProduct.capabilities,
      },
      {
        kicker: "Products",
        title: samagraProduct.aiTitle,
        description: samagraProduct.aiDescription,
        items: samagraProduct.aiFeatures,
      },
    ],
    screens: [
      { image: samagraImageOne, alt: samagraProduct.images.heroAlt },
      { image: samagraImageTwo, alt: samagraProduct.images.overviewAlt },
      { image: samagraImageThree, alt: samagraProduct.images.stepsAlt },
      { image: samagraImageFour, alt: samagraProduct.images.extraAltOne },
      { image: samagraImageFive, alt: samagraProduct.images.extraAltTwo },
    ],
    screenKind: "phone",
  },
  // School Management Software is hidden for now; uncomment to bring it back.
  // {
  //   slug: "school-management-software",
  //   name: schoolProduct.name,
  //   tagline: spotlightFor("school-management-software").tagline,
  //   summary: spotlightFor("school-management-software").description,
  //   art: spotlightFor("school-management-software").art,
  //   title: schoolProduct.heroTitle,
  //   description: schoolProduct.heroDescription,
  //   overviewHeading: spotlightFor("school-management-software").tagline,
  //   overview: [spotlightFor("school-management-software").description],
  //   points: [],
  //   sections: [],
  //   screens: [],
  //   screenKind: "phone",
  //   features: {
  //     title: schoolProduct.featuresTitle,
  //     description: schoolProduct.featuresDescription,
  //     tiles: schoolProduct.features.map((feature) => ({
  //       ...feature,
  //       imageFile: toFileName("school", feature.title),
  //     })),
  //   },
  // },
  {
    slug: "ey-construction",
    name: eyProduct.name,
    tagline: spotlightFor("ey-construction").tagline,
    summary: spotlightFor("ey-construction").description,
    art: spotlightFor("ey-construction").art,
    heroArt: "hero-ey-construction",
    title: eyProduct.heroTitle,
    description: eyProduct.heroDescription,
    overviewHeading: eyProduct.overviewTitle,
    overview: eyProduct.overview,
    points: eyProduct.points,
    sections: [
      {
        kicker: "Civil services",
        title: eyProduct.civilTitle,
        description: eyProduct.civilDescription,
        items: eyProduct.civilServices,
      },
      {
        kicker: "Building services",
        title: eyProduct.buildingTitle,
        description: eyProduct.buildingDescription,
        items: eyProduct.buildingServices,
      },
    ],
    screens: [
      { image: eyHomeImage, alt: eyProduct.images.homeAlt },
      { image: eyAboutImage, alt: eyProduct.images.aboutAlt },
      { image: eyServicesImage, alt: eyProduct.images.servicesAlt },
      { image: eyQuoteImage, alt: eyProduct.images.quoteAlt },
    ],
    screenKind: "browser",
    liveUrl: eyProduct.url,
  },
  {
    slug: "billingpoint",
    name: billingPointProduct.name,
    tagline: spotlightFor("billingpoint").tagline,
    summary: spotlightFor("billingpoint").description,
    art: spotlightFor("billingpoint").art,
    title: billingPointProduct.heroTitle,
    description: billingPointProduct.heroDescription,
    overviewHeading: billingPointProduct.overviewTitle,
    overview: billingPointProduct.overview,
    points: billingPointProduct.points,
    sections: [
      {
        kicker: "Billing",
        title: billingPointProduct.billingTitle,
        description: billingPointProduct.billingDescription,
        items: billingPointProduct.billingFeatures,
      },
      {
        kicker: "Operations",
        title: billingPointProduct.operationsTitle,
        description: billingPointProduct.operationsDescription,
        items: billingPointProduct.operationsFeatures,
      },
    ],
    screens: [
      { image: billingPointImageOne, alt: billingPointProduct.images.dashboardAlt },
      { image: billingPointImageTwo, alt: billingPointProduct.images.paymentAlt },
      { image: billingPointImageThree, alt: billingPointProduct.images.expenseAlt },
    ],
    screenKind: "phone",
    liveUrl: billingPointProduct.url,
  },
];

export const servicePages: ServicePage[] = serviceDetails.map((detail) => ({
  ...detail,
  description:
    servicesSection.items.find((service) => service.title === detail.title)?.description ?? "",
}));

export const productHref = (slug: string) => `/products/${slug}`;

export const serviceHref = (title: string) => {
  const page = servicePages.find((service) => service.title === title);
  return page ? `/services/${page.slug}` : "/#services";
};
