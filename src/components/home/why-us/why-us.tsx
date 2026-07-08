"use client";

import Container from "@/components/common/container";

import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  BriefcaseBusiness,
} from "lucide-react";

import WhyCard from "./why-card";

const items = [
  {
    icon: GraduationCap,
    title: "Experienced Educators",
    description:
      "Qualified special educators dedicated to helping every child achieve their fullest potential.",
  },
  {
    icon: HeartHandshake,
    title: "Individual Care",
    description:
      "Every child receives personalized attention, compassion and tailored learning support.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Environment",
    description:
      "A secure, inclusive and nurturing campus where children feel respected and valued.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Vocational Training",
    description:
      "Practical skill development that promotes confidence, independence and future opportunities.",
  },
];

export default function WhyUs() {
  return (
    <section
      className="bg-slate-50 py-10"
      id="why-us"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A5EB0]">
            WHY CHOOSE US
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900 lg:text-3xl">
            Trusted by Families Since 1996
          </h2>

          <p className="mt-4 text-lg leading-6 text-slate-600">
            We provide holistic education, therapy, rehabilitation and
            vocational training with compassion, dignity and care for every
            child.
          </p>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-4 xl:grid-cols-4">
          {items.map((item) => (
            <WhyCard
              key={item.title}
              {...item}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}