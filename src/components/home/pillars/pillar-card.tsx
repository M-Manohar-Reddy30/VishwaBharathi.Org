"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface PillarCardProps {
  title: string;
  description: string;
  image: string;
  href: string;
}

export default function PillarCard({
  title,
  description,
  image,
  href,
}: PillarCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
    >
      <Link
        href={href}
        className="group flex h-full flex-col overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
      >
        <div className="relative aspect-[16/10] overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-1 flex-col p-8">
          <h3 className="text-2xl font-bold text-slate-900">
            {title}
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            {description}
          </p>

          <div className="mt-6 inline-flex items-center gap-2 font-semibold text-[#0A5EB0]">
            Learn More
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}