"use client";

import {
  Calendar,
  GraduationCap,
  Users,
  Building2,
} from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "1996",
    label: "Established",
  },
  {
    icon: GraduationCap,
    value: "278+",
    label: "Students",
  },
  {
    icon: Users,
    value: "85+",
    label: "Staff",
  },
  {
    icon: Building2,
    value: "35",
    label: "Classrooms",
  },
];

export default function ServiceAboutStats() {
  return (
    <div className="mt-10 grid grid-cols-2 gap-5">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <div
            key={stat.label}
            className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
          >
            <Icon className="h-7 w-7 text-[#0A5EB0]" />

            <h3 className="mt-4 text-3xl font-bold text-slate-900">
              {stat.value}
            </h3>

            <p className="mt-1 text-slate-600">
              {stat.label}
            </p>
          </div>
        );
      })}
    </div>
  );
}