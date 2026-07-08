"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { GalleryImage } from "@/data/gallery";

interface GalleryLightboxProps {
  images: GalleryImage[];
  selectedImageId: number | null;
  onClose: () => void;
}

export default function GalleryLightbox({
  images,
  selectedImageId,
  onClose,
}: GalleryLightboxProps) {
  const slides = images.map((image) => ({
    src: image.image,
  }));

  const currentIndex = images.findIndex(
    (image) => image.id === selectedImageId
  );

  return (
    <Lightbox
      open={selectedImageId !== null}
      close={onClose}
      slides={slides}
      index={currentIndex < 0 ? 0 : currentIndex}
      carousel={{
        finite: false,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      animation={{
        fade: 300,
        swipe: 400,
      }}
      render={{
        buttonPrev:
          slides.length <= 1 ? () => null : undefined,
        buttonNext:
          slides.length <= 1 ? () => null : undefined,
      }}
    />
  );
}