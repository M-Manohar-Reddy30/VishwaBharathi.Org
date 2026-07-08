"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface WhyCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function WhyCard({
  icon: Icon,
  title,
  description,
}: WhyCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25 }}
      className="group rounded-3xl border border-slate-200 bg-white p-4 shadow-sm transition-all hover:border-[#0A5EB0]/20 hover:shadow-xl"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 transition group-hover:bg-[#0A5EB0]">
        <Icon className="h-8 w-8 text-[#0A5EB0] transition group-hover:text-white" />
      </div>

      <h3 className="mt-4 text-2xl font-bold text-slate-900">
        {title}
      </h3>

      <p className="mt-4 leading-6 text-slate-600">
        {description}
      </p>
    </motion.div>
  );
}