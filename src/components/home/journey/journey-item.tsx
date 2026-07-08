"use client";

import { motion } from "framer-motion";

interface JourneyItemProps {
  year: string;
  title: string;
  description: string;
}

export default function JourneyItem({
  year,
  title,
  description,
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

      <div className="z-10 flex h-14 w-14 items-center justify-center rounded-full bg-[#0A5EB0] text-xl font-bold text-white shadow-lg">
        ✓
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