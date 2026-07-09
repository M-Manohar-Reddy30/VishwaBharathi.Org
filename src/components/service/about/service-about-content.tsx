"use client";

import { motion } from "framer-motion";

import ServiceAboutStats from "./service-about-stats";

export default function ServiceAboutContent() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: 40,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once: true,
      }}
      transition={{
        duration: 0.7,
      }}
    >
      <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold uppercase tracking-wide text-[#0A5EB0]">
        About The School
      </span>

      <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
        G. Chenga Reddy Memorial
        Residential Special School
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        Established in 1996, the Special School provides quality education,
        individualized learning and holistic development for children with
        intellectual disabilities. Every child is encouraged to learn,
        participate and become an independent member of society through
        specialized teaching methods and compassionate care.
      </p>

      <p className="mt-5 text-lg leading-8 text-slate-600">
        Along with academics, the school provides therapy services,
        vocational training, sports, cultural activities and residential
        facilities, ensuring that every child receives opportunities for
        educational, social, emotional and personal growth.
      </p>

      <ServiceAboutStats />
    </motion.div>
  );
}