import { images } from "./images";

export interface Service {
  id: number;
  title: string;
  shortDescription: string;
  image: string;
  href: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Special School",
    shortDescription:
      "Empowering children with intellectual disabilities through quality education, therapy and holistic development.",
    image: images.services.specialSchool,
    href: "/services/special-school",
  },
  {
    id: 2,
    title: "Old Age Home",
    shortDescription:
      "Providing elderly residents with a peaceful, caring and dignified environment supported by compassionate caregivers.",
    image: images.services.oldAgeHome,
    href: "/services/old-age-home",
  },
  {
    id: 3,
    title: "Rehabilitation Centre",
    shortDescription:
      "Helping individuals regain confidence, independence and a better quality of life through rehabilitation services.",
    image: images.services.rehabilitationCentre,
    href: "/services/rehabilitation-centre",
  },
];