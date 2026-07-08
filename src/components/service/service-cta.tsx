"use client";

import { motion } from "framer-motion";

import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

interface ServiceCTAProps {
  title: string;
  description: string;
}

export default function ServiceCTA({
  title,
  description,
}: ServiceCTAProps) {
  return (
    <section className="py-28">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-hidden rounded-[36px] bg-gradient-to-r from-[#0A5EB0] via-[#0B66C3] to-[#083A75] px-8 py-16 text-center shadow-2xl md:px-20"
        >

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            {title}
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-blue-100">
            {description}
          </p>

          <div className="mt-10 flex flex-col justify-center gap-5 sm:flex-row">

            <DonateButton />

            <EnquireButton />

          </div>

        </motion.div>

      </div>
    </section>
  );
}