"use client";

import { motion } from "framer-motion";

import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

import HeroStats from "./hero-stats";

export default function HeroContent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="relative z-10 max-w-3xl text-white"
    >
      <span className="mt-0   rounded-full border border-white/20 bg-white/10 px-6 py-1 text-sm font-medium backdrop-blur-md">
        Since 1992 • Ballari, Karnataka
      </span>
        <h1 className="mt-4 max-w-1.5xl text-3xl font-bold leading-[1.05] md:text-3xl lg:text-4xl">
      
        Empowering Lives Through
        <br />
        Education, Rehabilitation & Compassionate Care
      </h1>

      <p className="mt-6 max-w-xl text-base leading-8 text-slate-200 md:text-lg">
        For over three decades, Vishwa Bharathi Kalanikethan and Education Society has been empowering children with special needs, supporting persons with disabilities and providing compassionate care for senior citizens through inclusive education, rehabilitation services and community initiatives.
      </p>

      <div className="mt-2 flex flex-wrap gap-4">
        <DonateButton />

        <EnquireButton />
      </div>

      <HeroStats />
    </motion.div>
  );
}