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
      <div className="flex min-h-[300px] items-center justify-center rounded-[24px] border border-dashed border-slate-300 bg-white">
        <div className="text-center">
          <h3 className="text-xl font-semibold text-slate-800">
            No Images Found
          </h3>

          <p className="mt-2 text-slate-500">
            There are no images available in this category yet.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div
      className="
        mt-10
        grid
        grid-cols-1
        gap-4
        sm:grid-cols-2
        lg:grid-cols-5
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