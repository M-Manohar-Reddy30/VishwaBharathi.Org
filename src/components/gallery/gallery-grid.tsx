"use client";

import GalleryCard from "./gallery-card";
import { GalleryImage } from "@/data/gallery";

interface GalleryGridProps {
  images: GalleryImage[];
  onImageClick: (imageId: number) => void;
}

export default function GalleryGrid({
  images,
  onImageClick,
}: GalleryGridProps) {
  if (images.length === 0) {
    return (
      <div className="flex min-h-[350px] items-center justify-center rounded-[32px] border border-dashed border-slate-300 bg-white">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-slate-900">
            No Images Found
          </h3>

          <p className="mt-3 text-slate-500">
            Images for this category will appear here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        mt-12
        grid
        grid-cols-1
        gap-8
        sm:grid-cols-6
        xl:grid-cols-3
      "
    >
      {images.map((image) => (
        <GalleryCard
          key={image.id}
          image={image.image}
          title={image.title}
          onClick={() => onImageClick(image.id)}
        />
      ))}
    </div>
  );
}