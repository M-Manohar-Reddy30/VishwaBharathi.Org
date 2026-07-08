"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

const features = [
  "Established in 1992",
  "Registered Non-Profit Society",
  "Special School",
  "District Disability Rehabilitation Centre",
  "Old Age Home",
  "Serving Ballari & Surrounding Districts",
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
        ABOUT US
      </span>

      <h2 className="mt-2 text-2xl font-bold leading-tight text-slate-900 lg:text-3xl">
        Vishwa Bharathi
        <br />
        Kalanikethan &
        <br />
        Education Society
      </h2>

      <p className="mt-3 text-lg leading-6 text-slate-600">
        Established in 1992, Vishwa Bharathi Kalanikethan & Education Society is a registered, non-profit and non-political organization dedicated to empowering children with special needs, supporting persons with disabilities and providing compassionate care for senior citizens across Ballari and surrounding regions.
      </p>
      <p className="mt-4 text-lg leading-8 text-slate-600">
        For more than three decades, our organization has promoted
        inclusive education, rehabilitation, vocational training,
        community awareness and elderly care through three major
        service wings that continue to transform lives with dignity,
        compassion and opportunity.
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