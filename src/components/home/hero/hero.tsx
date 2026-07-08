"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

import { heroImages } from "@/data/hero-images";

import HeroContent from "./hero-content";

export default function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentImage}
          initial={{
            opacity: 0,
            scale: 1,
          }}
          animate={{
            opacity: 1,
            scale: 1.08,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 6,
            ease: "easeOut",
          }}
          className="absolute inset-0"
        >
          <Image
            src={heroImages[currentImage]}
            alt="Vishwa Bharathi Campus"
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-r from-[#041a36]/90 via-[#041a36]/70 to-[#041a36]/40" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-24 lg:px-8 lg:pt-32">
        <HeroContent />
      </div>
    </section>
  );
}