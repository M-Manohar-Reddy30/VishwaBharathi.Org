"use client";

import { motion } from "framer-motion";

import { CheckCircle2 } from "lucide-react";

const facilities = [
  "Safe & Comfortable Residential Hostel",

  "Nutritious & Hygienic Meals",

  "24×7 Care & Supervision",

  "Medical Care & Health Monitoring",

  "Library & Indoor Recreation",

  "Transportation Facilities",

  "Safe Campus Environment",

  "Compassionate Caregivers",
];

export default function ResidentialContent() {
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
        Residential Facilities
      </span>

      <h2 className="mt-5 text-4xl font-bold leading-tight text-slate-900">
        A Safe, Caring and
        Comfortable Home
      </h2>

      <p className="mt-6 text-lg leading-8 text-slate-600">
        The residential campus provides a secure, inclusive and nurturing
        environment where children receive continuous care, education and
        support. Every aspect of campus life is designed to promote safety,
        dignity, confidence and holistic development.
      </p>

      <div className="mt-10 grid gap-5">

        {facilities.map((facility) => (
          <div
            key={facility}
            className="flex items-center gap-4"
          >
            <CheckCircle2 className="h-6 w-6 text-[#0A5EB0]" />

            <span className="text-lg text-slate-700">
              {facility}
            </span>
          </div>
        ))}

      </div>
    </motion.div>
  );
}