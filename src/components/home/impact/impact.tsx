import Container from "@/components/common/container";
import ImpactCard from "./impact-card";
import { impactStats } from "@/data/impact";

export default function Impact() {
  return (
    <section
      id="impact"
      className="bg-gradient-to-br from-[#0A5EB0] via-[#0B66C3] to-[#083A75] py-4"
    >
      <Container>
        <div className="mx-auto max-w-1xl text-center">

          <span className="inline-flex rounded-full bg-white/15 px-4 py-2 text-sm font-semibold text-white backdrop-blur">
            OUR IMPACT
          </span>

          <h2 className="mt-4 text-3xl font-bold text-white lg:text-4xl">
            Transforming Lives
            <br />
            Since 1992
          </h2>

          <p className="mt-4 text-lg leading-6 text-blue-100">
            For more than three decades, Vishwa Bharathi has empowered children with special needs, supported persons with disabilities and cared for senior citizens through education, rehabilitation and compassionate service.
          </p>

        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3 xl:grid-cols-3">

          {impactStats.map((item, index) => (
            <ImpactCard
              key={item.id}
              icon={item.icon}
              value={item.value}
              suffix={item.suffix}
              title={item.title}
              description={item.description}
              delay={index * 0.12}
            />
          ))}

        </div>
      </Container>
    </section>
  );
}