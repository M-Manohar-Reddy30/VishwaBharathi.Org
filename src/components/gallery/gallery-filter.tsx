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
    <div className="my-6 flex justify-center">
      <div className="flex w-fit items-center gap-1 overflow-x-auto rounded-full border border-slate-200 bg-white p-2 shadow-lg scrollbar-hide">

        {galleryCategories.map((category) => {
          const active = activeCategory === category.value;

          return (
            <motion.button
              key={category.id}
              type="button"
              whileHover={{
                y: -2,
              }}
              whileTap={{
                scale: 0.96,
              }}
              onClick={() =>
                onCategoryChange(category.value)
              }
              className={`relative whitespace-nowrap rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                active
                  ? "bg-[#0A5EB0] text-white shadow-lg"
                  : "text-slate-700 hover:bg-slate-100 hover:text-[#0A5EB0]"
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