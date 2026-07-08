"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface Feature {
  title: string;
  description: string;
  image: string;
}

interface ServiceFeaturesProps {
  heading: string;
  description: string;
  features: Feature[];
}

export default function ServiceFeatures({
  heading,
  description,
  features,
}: ServiceFeaturesProps) {
  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Header */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A5EB0]">
            OUR FACILITIES
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            {heading}
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            {description}
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{ y: -8 }}
              className="overflow-hidden rounded-[28px] bg-white shadow-lg transition-all duration-500 hover:shadow-2xl"
            >

              <div className="relative aspect-[16/10]">

                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {feature.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}