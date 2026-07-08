"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

interface ServiceOverviewProps {
  title: string;
  description: string;
  image: string;
  highlights: string[];
}

export default function ServiceOverview({
  title,
  description,
  image,
  highlights,
}: ServiceOverviewProps) {
  return (
    <section className="py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Image */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[32px] shadow-2xl"
          >
            <Image
              src={image}
              alt={title}
              width={800}
              height={600}
              className="h-full w-full object-cover transition duration-700 hover:scale-105"
            />
          </motion.div>

          {/* Content */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A5EB0]">
              ABOUT THIS SERVICE
            </span>

            <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
              {title}
            </h2>

            <p className="mt-8 text-lg leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-10 space-y-5">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-4"
                >
                  <CheckCircle2 className="mt-1 h-6 w-6 text-[#0A5EB0]" />

                  <p className="text-lg text-slate-700">
                    {item}
                  </p>
                </div>
              ))}
            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}