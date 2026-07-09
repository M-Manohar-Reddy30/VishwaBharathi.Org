"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

interface ServiceHeroProps {
  title: string;
  tagline: string;
  description: string;
  image: string;
}

export default function ServiceHero({
  title,
  tagline,
  description,
  image,
}: ServiceHeroProps) {
  return (
    <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">

      {/* Background */}

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}

      <div className="absolute inset-0 bg-black/55" />

      <div className="absolute inset-0 bg-gradient-to-r from-[#04172F]/90 via-[#04172F]/65 to-transparent" />

      <div className="absolute inset-0 bg-gradient-to-t from-[#04172F]/60 via-transparent to-transparent" />

      {/* Content */}

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 py-24">

        {/* Breadcrumb */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-sm text-white/80"
        >
          <Link
            href="/"
            className="transition hover:text-white"
          >
            Home
          </Link>

          <ChevronRight className="h-4 w-4" />

          <Link
            href="/#services"
            className="transition hover:text-white"
          >
            Services
          </Link>

          <ChevronRight className="h-4 w-4" />

          <span className="font-medium text-white">
            {title}
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}

          <span className="inline-flex rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-md">
            Vishwa Bharathi Services
          </span>

          {/* Title */}

          <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white md:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Tagline */}

          <h2 className="mt-5 text-xl font-semibold text-blue-200 md:text-2xl">
            {tagline}
          </h2>

          {/* Description */}

          <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
            {description}
          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-wrap gap-4">
            <EnquireButton />
            <DonateButton />
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-28 w-full bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}