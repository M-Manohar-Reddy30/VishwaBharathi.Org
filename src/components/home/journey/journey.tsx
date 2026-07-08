"use client";

import Container from "@/components/common/container";
import SectionHeading from "@/components/common/section-heading";

import { journey } from "@/data/journey";

import JourneyItem from "./journey-item";

export default function Journey() {
  return (
    <section className="bg-white py-28">
      <Container>

        <SectionHeading
          badge="OUR JOURNEY"
          title="Three Decades of Service"
          description="Since 1992, Vishwa Bharathi has continued to grow with one mission — empowering lives through education, rehabilitation and compassionate care."
        />

        <div className="relative mt-20">

          {/* Timeline Line */}

          <div className="absolute left-0 right-0 top-7 hidden h-1 bg-blue-100 lg:block" />

          <div className="grid gap-14 lg:grid-cols-5">

            {journey.map((item) => (
              <JourneyItem
                key={item.year}
                {...item}
              />
            ))}

          </div>

        </div>

      </Container>
    </section>
  );
}