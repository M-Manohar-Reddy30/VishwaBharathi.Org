"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import {
  Music4,
  Palette,
  Drama,
  PartyPopper,
} from "lucide-react";

import CulturalCard from "./cultural-card";

const activities = [
  {
    icon: Music4,
    title: "Music & Dance",
    description:
      "Students participate in music and dance programs that build confidence, creativity and joyful self-expression.",
  },
  {
    icon: Palette,
    title: "Art & Craft",
    description:
      "Painting, drawing, crafts and creative projects help improve imagination, fine motor skills and artistic talent.",
  },
  {
    icon: Drama,
    title: "Drama & Stage Performance",
    description:
      "Stage activities and role-play improve communication skills, teamwork and self-confidence while encouraging social participation.",
  },
  {
    icon: PartyPopper,
    title: "Festivals & Annual Celebrations",
    description:
      "Students actively celebrate national festivals, annual functions and cultural events, creating memorable experiences for children and their families.",
  },
];

export default function CulturalActivities() {
  return (
    <section className="bg-slate-50 py-24">
      <Container>

        <SectionHeading
          badge="ARTS & CULTURAL ACTIVITIES"
          title="Celebrating Creativity, Confidence and Joy"
          description="Beyond academics, students explore music, art, dance and cultural celebrations that encourage creativity, communication and self-confidence."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {activities.map((activity) => (
            <CulturalCard
              key={activity.title}
              {...activity}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}