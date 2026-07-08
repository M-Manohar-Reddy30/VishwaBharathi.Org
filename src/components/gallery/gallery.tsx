"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Container from "@/components/common/container";

import GalleryHeader from "./gallery-header";
import GalleryFilter from "./gallery-filter";
import GalleryGrid from "./gallery-grid";
import GalleryLightbox from "./gallery-lightbox";

import {
  galleryImages,
  GalleryCategory,
} from "@/data/gallery";

interface GalleryProps {
  mode?: "preview" | "full";
  category?: GalleryCategory;
}

export default function Gallery({
  mode = "preview",
  category,
}: GalleryProps) {
  const [activeCategory, setActiveCategory] =
    useState<GalleryCategory>("all");

  const [selectedImageId, setSelectedImageId] =
    useState<number | null>(null);

  /**
   * Filter Images
   */

  const filteredImages = useMemo(() => {
    let images = galleryImages;

    // Service Page Category Lock

    if (category) {
      images = images.filter(
        (image) => image.category === category
      );
    }

    // Homepage / Gallery Page Filter

    if (activeCategory !== "all") {
      images = images.filter(
        (image) => image.category === activeCategory
      );
    }

    return images;
  }, [activeCategory, category]);

  /**
   * Homepage → Latest 9
   * Gallery Page → All Images
   */

  const displayedImages =
    mode === "preview"
      ? filteredImages.slice(0, 9)
      : filteredImages;

  return (
    <section
      id="gallery"
      className="bg-slate-50 py-10"
    >
      <Container>

        <GalleryHeader
          preview={mode === "preview"}
        />

        {!category && (
          <GalleryFilter
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        )}

        <GalleryGrid
          images={displayedImages}
          onImageClick={setSelectedImageId}
        />

        {mode === "preview" && (
          <div className="mt-16 text-center">

            <Link
              href="/gallery"
              className="group inline-flex items-center gap-3 rounded-full bg-[#0A5EB0] px-8 py-4 font-semibold text-white transition-all duration-300 hover:shadow-xl"
            >
              View Complete Gallery

              <ArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />

            </Link>

          </div>
        )}

      </Container>

      <GalleryLightbox
        images={displayedImages}
        selectedImageId={selectedImageId}
        onClose={() => setSelectedImageId(null)}
      />

    </section>
  );
}