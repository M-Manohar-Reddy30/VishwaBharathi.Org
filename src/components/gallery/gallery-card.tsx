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
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.98 }}
      className="group relative w-52 overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:shadow-2xl"
    >
      <div className="relative h-52 w-52 overflow-hidden rounded-2xl">
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 transition-all duration-500 group-hover:opacity-100" />

        {/* Eye Icon */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
          <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/20 backdrop-blur-md">
            <Eye className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Bottom Title */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-5 p-5 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <h3 className="text-lg font-semibold text-white">
            {title}
          </h3>

          <p className="text-sm text-white/80">
            Click to view
          </p>
        </div>
      </div>
    </motion.button>
  );
}