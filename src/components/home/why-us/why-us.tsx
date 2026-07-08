"use client";

import Container from "@/components/common/container";

import {
  GraduationCap,
  HeartHandshake,
  ShieldCheck,
  BriefcaseBusiness,
  Stethoscope,
  Users,
} from "lucide-react";

import WhyCard from "./why-card";

const items = [
  {
    icon: GraduationCap,
    title: "Inclusive Education",
    description:
      "Personalized education designed to help every child learn, grow and achieve independence.",
  },
  {
    icon: Stethoscope,
    title: "Therapy & Rehabilitation",
    description:
      "Professional therapy and rehabilitation services that support physical, emotional and developmental growth.",
  },
  {
    icon: BriefcaseBusiness,
    title: "Vocational Training",
    description:
      "Practical skill development that prepares individuals for greater confidence and independent living.",
  },
  {
    icon: ShieldCheck,
    title: "Safe Residential Campus",
    description:
      "A secure, inclusive and caring campus where children and senior citizens feel safe and respected.",
  },
  {
    icon: HeartHandshake,
    title: "Compassionate Care",
    description:
      "Dedicated educators, therapists and caregivers committed to improving lives with dignity and compassion.",
  },
  {
    icon: Users,
    title: "Family & Community Partnership",
    description:
      "Working closely with families and the community to create lasting positive change and support.",
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
            Why Families Trust Vishwa Bharathi
          </h2>

          <p className="mt-4 text-lg leading-6 text-slate-600">
            For over three decades, Vishwa Bharathi has empowered children with special needs, supported persons with disabilities and cared for senior citizens through education, rehabilitation and compassionate service.
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