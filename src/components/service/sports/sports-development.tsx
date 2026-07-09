"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import {
  Trophy,
  Dumbbell,
  Activity,
  HeartPulse,
} from "lucide-react";

import SportsCard from "./sports-card";

const sportsPrograms = [
  {
    icon: Trophy,
    title: "Special Olympics",
    description:
      "Students participate in Special Olympics and district-level competitions, building confidence, teamwork and achievement.",
  },
  {
    icon: Dumbbell,
    title: "Physical Fitness",
    description:
      "Daily physical exercises improve strength, coordination, flexibility and overall well-being for every student.",
  },
  {
    icon: Activity,
    title: "Indoor & Outdoor Games",
    description:
      "Children enjoy structured games and recreational activities that encourage social interaction and active learning.",
  },
  {
    icon: HeartPulse,
    title: "Yoga & Meditation",
    description:
      "Yoga and meditation sessions improve concentration, emotional balance, physical health and self-confidence.",
  },
];

export default function SportsDevelopment() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="SPORTS & WELLNESS"
          title="Building Strong Minds and Healthy Bodies"
          description="Physical activities, sports, yoga and recreational programs help students improve confidence, teamwork, fitness and emotional well-being."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {sportsPrograms.map((program) => (
            <SportsCard
              key={program.title}
              {...program}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}