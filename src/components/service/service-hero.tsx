"use client";

import Image from "next/image";
import { motion } from "framer-motion";

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
    <section className="relative h-[90vh] min-h-[700px] overflow-hidden">

      {/* Background Image */}

      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover"
      />

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/30" />

      {/* Decorative Gradient */}

      <div className="absolute inset-0 bg-gradient-to-t from-[#0A5EB0]/30 via-transparent to-transparent" />

      {/* Content */}

      <div className="relative z-10 flex h-full items-center">

        <div className="mx-auto w-full max-w-7xl px-6">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
            }}
            className="max-w-3xl"
          >

            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold uppercase tracking-[0.25em] text-white backdrop-blur">
              Our Services
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-7xl">
              {title}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-blue-200 md:text-3xl">
              {tagline}
            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-200">
              {description}
            </p>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row">

              <DonateButton />

              <EnquireButton />

            </div>

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-white to-transparent" />

    </section>
  );
}