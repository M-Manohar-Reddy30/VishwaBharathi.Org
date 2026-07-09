import type { Metadata } from "next";

import ServicePage from "@/components/service/service-page";
import { rehabilitationCentre } from "@/data/services/rehabilitation-centre";

export const metadata: Metadata = {
  title: "Rehabilitation Centre | Vishwa Bharathi",

  description:
    "Professional rehabilitation services including physiotherapy, occupational therapy and speech therapy to promote independence and well-being.",

  keywords: [
    "Rehabilitation Centre Ballari",
    "Therapy Centre Karnataka",
    "Speech Therapy",
    "Occupational Therapy",
    "Physiotherapy",
  ],

  openGraph: {
    title: "Rehabilitation Centre | Vishwa Bharathi",

    description:
      "Supporting recovery, independence and quality of life through professional rehabilitation services.",

    images: [
      {
        url: "/images/services/rehabilitation/hero.jpg",
      },
    ],
  },
};

export default function RehabilitationPage() {
  return <ServicePage service={rehabilitationCentre} />;
}