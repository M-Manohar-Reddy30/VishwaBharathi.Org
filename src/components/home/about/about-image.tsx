"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutImage() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="relative"
    >
      <Image
        src="/images/hero/slide-1.jpg"
        alt="Students at Vishwa Bharathi"
        width={650}
        height={650}
        className="rounded-[32px] object-cover shadow-2xl"
      />

      <div className="absolute -bottom-3 -right-3 rounded-3xl bg-white p-3 shadow-xl">
        <p className="text-2xl font-bold text-[#0A5EB0]">
          30+
        </p>

        <p className="mt-1 text-slate-600">
          Years of Dedicated Service
        </p>
      </div>
    </motion.div>
  );
}