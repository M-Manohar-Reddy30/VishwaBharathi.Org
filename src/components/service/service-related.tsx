"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { serviceCards } from "@/data/services/service-cards";

interface ServiceRelatedProps {
  current: string;
}

export default function ServiceRelated({
  current,
}: ServiceRelatedProps) {
  const relatedServices = serviceCards.filter(
    (service) => service.slug !== current
  );

  return (
    <section className="bg-slate-50 py-28">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A5EB0]">
            EXPLORE MORE
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Our Other Services
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Discover the complete range of education, care and
            rehabilitation services offered by Vishwa Bharathi.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {relatedServices.map((service, index) => (

            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.15,
              }}
            >

              <Link
                href={`/services/${service.slug}`}
                className="group block overflow-hidden rounded-[30px] bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative aspect-[16/10] overflow-hidden">

                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                  />

                </div>

                <div className="p-8">

                  <h3 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h3>

                  <p className="mt-4 leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <div className="mt-8 inline-flex items-center gap-2 font-semibold text-[#0A5EB0]">

                    Learn More

                    <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />

                  </div>

                </div>

              </Link>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}