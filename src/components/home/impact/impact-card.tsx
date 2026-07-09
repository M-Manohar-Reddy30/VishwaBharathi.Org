"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  GraduationCap,
  BriefcaseBusiness,
  HeartHandshake,
  Accessibility,
  Tent,
  Users,
} from "lucide-react";

interface ImpactCardProps {
  icon: string;
  value: number;
  suffix: string;
  title: string;
  description: string;
  delay?: number;
}

export default function ImpactCard({
  icon,
  value,
  suffix,
  title,
  description,
  delay = 0,
}: ImpactCardProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.35,
  });

  const icons = {
    "graduation-cap": GraduationCap,
    briefcase: BriefcaseBusiness,
    heart: HeartHandshake,
    accessibility: Accessibility,
    tent: Tent,
    users: Users,
  };

  const Icon = icons[icon as keyof typeof icons];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay,
      }}
      whileHover={{
        y: -8,
      }}
      className="group rounded-[28px] bg-white p-8 shadow-xl transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" >
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#0A5EB0]/10">
        <Icon className="h-7 w-7 text-[#0A5EB0]" />
      </div>
      <h3 className="text-5xl font-bold tracking-tight text-[#0A5EB0]">
        {inView ? (
          <CountUp
            end={value}
            duration={2}
            decimals={Number.isInteger(value) ? 0 : 1}
          />
        ) : (
          0
        )}

        <span>{suffix}</span>
      </h3>

      <h4 className="mt-6 text-1xl font-semibold text-slate-900">
        {title}
      </h4>

      <p className="mt-3 leading-6 text-slate-600">
        {description}
      </p>
        <div className="mt-4 h-1 w-16 rounded-full bg-[#0A5EB0] transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
}