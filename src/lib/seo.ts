import type { Metadata } from "next";

export function createServiceMetadata(
  title: string,
  description: string,
  image: string,
  keywords: string[]
): Metadata {
  return {
    title: `${title} | Vishwa Bharathi`,
    description,
    keywords,
    openGraph: {
      title: `${title} | Vishwa Bharathi`,
      description,
      images: [{ url: image }],
    },
  };
}