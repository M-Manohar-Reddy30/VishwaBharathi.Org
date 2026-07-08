import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import PillarCard from "./pillar-card";

const pillars = [
  {
    title: "Special School",
    description:
      "Inclusive education, therapy and life skill development for children with special needs.",
    image: "/images/services/special-school.jpg",
    href: "/services/special-school",
  },
  {
    title: "Rehabilitation Centre",
    description:
      "Professional rehabilitation, therapy and community support services.",
    image: "/images/gallery/rehabilitation/rehabilitation-01.jpg",
    href: "/services/rehabilitation-center",
  },
  {
    title: "Old Age Home",
    description:
      "Providing dignity, safety and compassionate care for senior citizens.",
    image: "/images/services/old-age-home.jpg",
    href: "/services/old-age-home",
  },
];

export default function Pillars() {
  return (
    <section className="bg-slate-50 py-10">
      <Container>

        <SectionHeading
          badge="OUR THREE PILLARS"
          title="Our Services That Transform Lives"
          description="Through education, rehabilitation and compassionate elderly care, Vishwa Bharathi is dedicated to building an inclusive and caring society."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {pillars.map((pillar) => (
            <PillarCard
              key={pillar.title}
              {...pillar}
            />
          ))}
        </div>

      </Container>
    </section>
  );
}