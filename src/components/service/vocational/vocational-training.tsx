"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import {
  BriefcaseBusiness,
  Scissors,
  Palette,
  HandHelping,
} from "lucide-react";

import VocationalCard from "./vocational-card";

const programs = [
  {
    icon: BriefcaseBusiness,
    title: "Life Skill Development",
    description:
      "Students are trained in daily living, communication and practical skills that encourage confidence and independent living.",
  },
  {
    icon: Scissors,
    title: "Skill-Based Training",
    description:
      "Hands-on activities help students develop vocational abilities suited to their interests and capabilities.",
  },
  {
    icon: Palette,
    title: "Creative Work",
    description:
      "Art, craft and creative activities encourage self-expression while developing fine motor and practical skills.",
  },
  {
    icon: HandHelping,
    title: "Preparing for Independence",
    description:
      "Vocational education prepares students to participate confidently in society and pursue meaningful opportunities.",
  },
];

export default function VocationalTraining() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <SectionHeading
          badge="VOCATIONAL TRAINING"
          title="Preparing Students for Independent Living"
          description="Our vocational programs focus on practical skills, confidence and self-reliance, helping every student become as independent as possible."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <VocationalCard
              key={program.title}
              {...program}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}