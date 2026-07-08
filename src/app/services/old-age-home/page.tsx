import type { Metadata } from "next";

import ServicePage from "@/components/service/service-page";
import { oldAgeHome } from "@/data/services/old-age-home";

export const metadata: Metadata = {
  title: "Old Age Home | Vishwa Bharathi",

  description:
    "Learn about the compassionate Old Age Home at Vishwa Bharathi, providing dignified care, medical support and a peaceful environment for senior citizens.",

  keywords: [
    "Old Age Home Ballari",
    "Senior Citizen Care",
    "Elderly Care Karnataka",
    "Vishwa Bharathi",
  ],

  openGraph: {
    title: "Old Age Home | Vishwa Bharathi",

    description:
      "Providing dignity, care and companionship for senior citizens.",

    images: [
      {
        url: "/images/services/old-age-home/hero.jpg",
      },
    ],
  },
};

export default function OldAgeHomePage() {
  return <ServicePage service={oldAgeHome} />;
}