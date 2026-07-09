"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import {
  HeartPulse,
  Ear,
  Hand,
  Brain,
} from "lucide-react";

import TherapyCard from "./therapy-card";

const therapies = [
  {
    icon: HeartPulse,
    title: "Physiotherapy",
    description:
      "Improves posture, balance, coordination, mobility and physical independence through structured therapeutic exercises.",
  },

  {
    icon: Ear,
    title: "Speech Therapy",
    description:
      "Develops communication, speech clarity, language understanding and social interaction skills for every child.",
  },

  {
    icon: Hand,
    title: "Occupational Therapy",
    description:
      "Enhances fine motor skills, sensory integration and daily living activities to build greater independence.",
  },

  {
    icon: Brain,
    title: "Behavioural & Development Support",
    description:
      "Individualized interventions help children improve emotional regulation, attention, learning behaviour and overall development.",
  },
];

export default function TherapyServices() {
  return (
    <section className="bg-white py-24">
      <Container>

        <SectionHeading
          badge="THERAPY SERVICES"
          title="Supporting Every Child Beyond the Classroom"
          description="Our multidisciplinary therapy services help children improve communication, mobility, independence and confidence through individualized care."
        />

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {therapies.map((therapy) => (
            <TherapyCard
              key={therapy.title}
              {...therapy}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}