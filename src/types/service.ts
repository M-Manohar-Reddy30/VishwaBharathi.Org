import { GalleryCategory } from "@/data/gallery";

export interface ServiceFeature {
  title: string;
  description: string;
  image: string;
}

export interface ServicePageData {
  slug: string;

  hero: {
    title: string;
    tagline: string;
    description: string;
    image: string;
  };

  overview: {
    title: string;
    description: string;
    image: string;
    highlights: string[];
  };

  features: {
    heading: string;
    description: string;
    items: ServiceFeature[];
  };

  gallery: {
    category: GalleryCategory;
  };

  cta: {
    title: string;
    description: string;
  };
}