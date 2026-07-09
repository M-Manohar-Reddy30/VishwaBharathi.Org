"use client";

import CountUp from "react-countup";
import {
  Calendar,
  Users,
  HeartHandshake,
  HandHelping,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: 30,
    suffix: "+",
    label: "Years of Service",
    description: "Serving the community since 1992",
  },
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Children Supported",
    description: "Empowering children through inclusive education",
  },
  {
    icon: HeartHandshake,
    value: 250,
    suffix: "+",
    label: "Senior Citizens Cared For",
    description: "Providing compassionate residential care",
  },
  {
    icon: HandHelping,
    value: 13000,
    suffix: "+",
    label: "Assistive Devices Distributed",
    description: "Supporting persons with disabilities",
  },
];

export default function HeroStats() {
  return (
    <div className="mt-4 grid grid-cols-2 gap-2.5 lg:grid-cols-4">
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