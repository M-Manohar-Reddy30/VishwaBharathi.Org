"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function ResidentialImage() {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -40,
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
      className="relative"
    >
      <Image
        src="/images/services/special-school/residential.jpg"
        alt="Residential Facilities"
        width={700}
        height={750}
        className="rounded-[36px] object-cover shadow-2xl"
      />
    </motion.div>
  );
}