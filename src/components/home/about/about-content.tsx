"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

const features = [
  "Special Education",
  "Therapy & Rehabilitation",
  "Vocational Training",
  "Parent Guidance & Support",
];

export default function AboutContent() {
  return (
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="max-w-xl"
    >
      <span className="inline-flex rounded-full bg-blue-100 px-2 py-1 text-sm font-semibold text-[#0A5EB0]">
        ABOUT VISHWA BHARATHI
      </span>

      <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">
        Providing Care,
        <br />
        Education and Hope
        <br />
        for Every Child.
      </h2>

      <p className="mt-3 text-lg leading-6 text-slate-600">
        Established in 1996, Vishwa Bharathi Kalanikethan and Education Society
        is dedicated to empowering children with intellectual disabilities
        through quality education, therapy, rehabilitation and vocational
        training in a safe, caring and inclusive environment.
      </p>

      <div className="mt-5 grid gap-2">
        {features.map((feature) => (
          <div
            key={feature}
            className="flex items-center gap-2"
          >
            <CheckCircle2 className="h-6 w-6 text-[#0A5EB0]" />

            <span className="text-lg text-slate-700">
              {feature}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-wrap gap-4">
        <DonateButton />

        <EnquireButton />
      </div>
    </motion.div>
  );
}