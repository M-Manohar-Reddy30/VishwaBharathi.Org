"use client";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";

import "yet-another-react-lightbox/plugins/thumbnails.css";

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
    title: image.title,
    description: image.category.replace("-", " "),
  }));

  const currentIndex = images.findIndex(
    (image) => image.id === selectedImageId
  );

  return (
    <Lightbox
      open={selectedImageId !== null}
      close={onClose}
      index={currentIndex < 0 ? 0 : currentIndex}
      slides={slides}
      plugins={[
        Zoom,
        Fullscreen,
        Captions,
        Thumbnails,
      ]}
      carousel={{
        finite: false,
      }}
      controller={{
        closeOnBackdropClick: true,
      }}
      animation={{
        fade: 350,
        swipe: 400,
      }}
      zoom={{
        maxZoomPixelRatio: 3,
      }}
      render={{
        buttonPrev:
          slides.length <= 1
            ? () => null
            : undefined,
        buttonNext:
          slides.length <= 1
            ? () => null
            : undefined,
      }}
    />
  );
}