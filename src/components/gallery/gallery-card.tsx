"use client";

import Image from "next/image";
import { Eye } from "lucide-react";
import { motion } from "framer-motion";

interface GalleryCardProps {
  image: string;
  title: string;
  onClick: () => void;
}

export default function GalleryCard({
  image,
  title,
  onClick,
}: GalleryCardProps) {
  return (
    <motion.button
      type="button"
      onClick={onClick}
      whileHover={{ y: -8 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-50 overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
    >
      {/* Image */}

      <div className="relative h-50 w-50  overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw,
                 (max-width:1200px) 50vw,
                 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Gradient */}

        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

        {/* View Icon */}

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition duration-500 group-hover:opacity-100">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
            <Eye className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Bottom Content */}

        <div className="absolute bottom-0 left-0 right-0 translate-y-6 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">

          <span className="inline-block rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md">
            Gallery
          </span>

          <h3 className="mt-4 text-xl font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-white/80">
            Click to view full image
          </p>

        </div>
      </div>
    </motion.button>
  );
}