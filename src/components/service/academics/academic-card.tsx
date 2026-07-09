"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface AcademicCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function AcademicCard({
  icon: Icon,
  title,
  description,
}: AcademicCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:shadow-xl"
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100">
        <Icon className="h-7 w-7 text-[#0A5EB0]" />
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