"use client";

import { motion } from "framer-motion";
import {
  GalleryCategory,
  galleryCategories,
} from "@/data/gallery";

interface GalleryFilterProps {
  activeCategory: GalleryCategory;
  onCategoryChange: (category: GalleryCategory) => void;
}

export default function GalleryFilter({
  activeCategory,
  onCategoryChange,
}: GalleryFilterProps) {
  return (
    <div className="mt-10 mb-10">
      <div className="flex items-center gap-3 overflow-x-auto pb-2 md:justify-center scrollbar-hide">
        {galleryCategories.map((category) => {
          const active = activeCategory === category.value;

          return (
            <motion.button
              key={category.id}
              whileTap={{ scale: 0.96 }}
              onClick={() => onCategoryChange(category.value)}
              className={`relative whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "bg-[#0A5EB0] text-white shadow-lg"
                  : "bg-white text-slate-700 shadow-sm hover:bg-blue-50 hover:text-[#0A5EB0]"
              }`}
            >
              {category.label}

              {active && (
                <motion.div
                  layoutId="gallery-filter"
                  className="absolute inset-0 -z-10 rounded-full bg-[#0A5EB0]"
                  transition={{
                    type: "spring",
                    stiffness: 350,
                    damping: 28,
                  }}
                />
              )}
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}