import Gallery from "@/components/gallery/gallery";
import { GalleryCategory } from "@/data/gallery";

interface ServiceGalleryProps {
  category: GalleryCategory;
}

export default function ServiceGallery({
  category,
}: ServiceGalleryProps) {
  return (
    <Gallery
      mode="preview"
      category={category}
    />
  );
}