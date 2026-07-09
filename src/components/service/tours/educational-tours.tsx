"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import {
  Bus,
  Map,
  Users,
  Camera,
} from "lucide-react";

import TourCard from "./tour-card";

const activities = [
  {
    icon: Bus,
    title: "Educational Tours",
    description:
      "Students visit educational institutions, parks, museums and other places to gain practical learning experiences beyond the classroom.",
  },
  {
    icon: Map,
    title: "Community Exposure",
    description:
      "Community visits help students develop social interaction, confidence and awareness of the world around them.",
  },
  {
    icon: Users,
    title: "Group Learning",
    description:
      "Outdoor activities encourage teamwork, communication and meaningful friendships among students.",
  },
  {
    icon: Camera,
    title: "Memorable Experiences",
    description:
      "Every tour creates joyful memories while supporting emotional, social and personal development.",
  },
];

export default function EducationalTours() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <SectionHeading
          badge="EDUCATIONAL TOURS"
          title="Learning Beyond the Classroom"
          description="Real-world experiences help students explore new environments, build confidence and develop valuable life skills through guided educational visits."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <TourCard
              key={activity.title}
              {...activity}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}