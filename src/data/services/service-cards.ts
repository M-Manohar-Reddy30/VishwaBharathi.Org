export interface ServiceCard {
  slug: string;
  title: string;
  description: string;
  image: string;
}

export const serviceCards: ServiceCard[] = [
  {
    slug: "special-school",
    title: "Special School",
    description:
      "Empowering children with special needs through inclusive education, therapy and life skill development.",
    image: "/images/services/special-school/hero.jpg",
  },

  {
    slug: "old-age-home",
    title: "Old Age Home",
    description:
      "Providing compassionate care, dignity and a safe home for senior citizens.",
    image: "/images/services/old-age-home/hero.jpg",
  },

  {
    slug: "rehabilitation-centre",
    title: "Rehabilitation Centre",
    description:
      "Supporting individuals through professional therapy and rehabilitation services.",
    image: "/images/services/rehabilitation/hero.jpg",
  },
];