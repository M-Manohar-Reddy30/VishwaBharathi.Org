import type { Metadata } from "next";

import ServicePage from "@/components/service/service-page";
import { specialSchool } from "@/data/services/special-school";

export const metadata: Metadata = {
  title: "Special School | Vishwa Bharathi",
  description:
    "Discover the Special School at Vishwa Bharathi, providing inclusive education, therapy, life skills and personalized support for children with special needs in Ballari.",

  keywords: [
    "Special School Ballari",
    "Special Education Karnataka",
    "Inclusive Education",
    "Special Needs School",
    "Vishwa Bharathi",
  ],

  openGraph: {
    title: "Special School | Vishwa Bharathi",
    description:
      "Empowering every child through inclusive education and compassionate care.",
    images: [
      {
        url: "/images/services/special-school.jpg",
      },
    ],
  },
};

export default function SpecialSchoolPage() {
  return <ServicePage service={specialSchool} />;
}