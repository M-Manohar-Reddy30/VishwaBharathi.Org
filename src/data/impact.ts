export interface ImpactStat {
  id: number;
  value: number;
  suffix: string;
  title: string;
  description: string;
}

export const impactStats: ImpactStat[] = [
  {
    id: 1,
    value: 27,
    suffix: "+",
    title: "Years of Service",
    description:
      "Serving children and the community with compassion since 1996.",
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    title: "Children Supported",
    description:
      "Providing education, care and rehabilitation to children with special needs.",
  },
  {
    id: 3,
    value: 4.7,
    suffix: "★",
    title: "Community Rating",
    description:
      "Trusted and appreciated by families, volunteers and the local community.",
  },
  {
    id: 4,
    value: 1000,
    suffix: "+",
    title: "Lives Impacted",
    description:
      "Making a positive difference through education, care and social support.",
  },
];