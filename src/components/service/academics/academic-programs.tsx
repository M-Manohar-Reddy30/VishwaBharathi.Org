"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import {
  BookOpen,
  Brain,
  School,
  ClipboardCheck,
} from "lucide-react";

import AcademicCard from "./academic-card";

const programs = [
  {
    icon: School,
    title: "Special Education",
    description:
      "Every child receives individualized education based on their abilities through specially trained teachers and inclusive teaching methods.",
  },
  {
    icon: Brain,
    title: "Individual Learning",
    description:
      "Learning goals are planned according to each child's behaviour, development and daily progress using specialized teaching materials.",
  },
  {
    icon: ClipboardCheck,
    title: "Life Skill Education",
    description:
      "Children are guided in communication, self-care, daily routines and social interaction to build confidence and independence.",
  },
  {
    icon: BookOpen,
    title: "Creative Learning",
    description:
      "Interactive classroom activities, visual teaching materials and practical learning experiences make education engaging and meaningful.",
  },
];

export default function AcademicPrograms() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <SectionHeading
          badge="ACADEMIC PROGRAMS"
          title="Learning Designed for Every Child"
          description="Our curriculum combines individualized teaching, creative learning methods and practical life skills to support every child's educational journey."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {programs.map((program) => (
            <AcademicCard
              key={program.title}
              {...program}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}