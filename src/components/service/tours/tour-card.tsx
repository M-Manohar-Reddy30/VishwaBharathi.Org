"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface TourCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function TourCard({
  icon: Icon,
  title,
  description,
}: TourCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4 }}
      className="group rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-[#0A5EB0]/20 hover:shadow-xl"
    >
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100 transition-all group-hover:bg-[#0A5EB0]">
        <Icon className="h-8 w-8 text-[#0A5EB0] transition-all group-hover:text-white" />
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-7 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}