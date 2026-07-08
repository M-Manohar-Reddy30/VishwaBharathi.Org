import Container from "@/components/common/container";
import ServiceCard from "./service-card";
import { services } from "@/data/services";

export default function Services() {
  return (
    <section
      id="services"
      className="bg-white py-10"
    >
      <Container>

        <div className="mx-auto mb-8 max-w-1xl text-center">

          <span className="inline-flex rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-[#0A5EB0]">
            OUR SERVICES
          </span>

          <h2 className="mt-4 text-3xl font-bold text-slate-900">
            Compassionate Services
            <br />
            for Every Stage of Life
          </h2>

          <p className="mt-4 text-lg leading-6 text-slate-600">
            We proudly serve children, senior citizens and individuals
            requiring rehabilitation through dedicated services focused
            on dignity, care and long-term wellbeing.
          </p>

        </div>

        <div className="grid gap-6 lg:grid-cols-3">

          {services.map((service, index) => (

            <ServiceCard
              key={service.id}
              index={index}
              {...service}
            />

          ))}

        </div>

      </Container>
    </section>
  );
}