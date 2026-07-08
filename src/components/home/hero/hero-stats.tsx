"use client";

import CountUp from "react-countup";
import { GraduationCap, HeartHandshake, Star, Calendar } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 27,
    suffix: "+",
    label: "Years of Service",
  },
  {
    icon: GraduationCap,
    value: 500,
    suffix: "+",
    label: "Students Empowered",
  },
  {
    icon: Star,
    value: 4.7,
    suffix: "/5",
    decimals: 1,
    label: "Community Rating",
  },
  {
    icon: HeartHandshake,
    value: 99,
    suffix: "%",
    label: "Dedicated Care",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-6 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.label}
            className="rounded-2xl border border-white/20 bg-white/10 p-5 text-white backdrop-blur-md"
          >
            <Icon className="mb-1.5 h-5 w-5 text-blue-300" />

            <h3 className="text-1.5xl font-bold">
              <CountUp
                end={item.value}
                decimals={item.decimals ?? 0}
                duration={2}
              />
              {item.suffix}
            </h3>

            <p className="mt-1 text-sm text-slate-200">
              {item.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}