"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  shortDescription: string;
  image: string;
  href: string;
  index: number;
}

export default function ServiceCard({
  title,
  shortDescription,
  image,
  href,
  index,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 35 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
      }}
      whileHover={{ y: -10 }}
    >
      <Link
        href={href}
        className="group block overflow-hidden rounded-[32px] bg-slate-50 shadow-md transition-all duration-500 hover:shadow-2xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
        </div>

        <div className="p-4">

          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-2 leading-6 text-slate-600">
            {shortDescription}
          </p>

          <div className="mt-2 flex items-center gap-2 font-semibold text-[#0A5EB0] transition-all duration-300 group-hover:gap-4">
            Learn More

            <ArrowRight className="h-5 w-5" />
          </div>

          <div className="mt-1 h-1 w-0 rounded-full bg-[#0A5EB0] transition-all duration-500 group-hover:w-full" />

        </div>
      </Link>
    </motion.div>
  );
}