"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface JourneyItemProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export default function JourneyItem({
  year,
  title,
  description,
  icon: Icon,
}: JourneyItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="relative flex flex-col items-center text-center"
    >
      {/* Circle */}

      <div className="z-10 flex h-16 w-16 items-center justify-center rounded-full bg-[#0A5EB0] text-white shadow-xl transition-all duration-300 group-hover:scale-110">
        <Icon className="h-8 w-8" />
      </div>

      <h3 className="mt-6 text-3xl font-bold text-[#0A5EB0]">
        {year}
      </h3>

      <h4 className="mt-2 text-xl font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-4 max-w-xs leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}