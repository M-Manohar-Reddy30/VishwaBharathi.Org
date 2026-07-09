import Container from "@/components/common/container";

import ServiceAboutContent from "./service-about-content";
import ServiceAboutImage from "./service-about-image";

export default function ServiceAbout() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <ServiceAboutImage />

          <ServiceAboutContent />

        </div>

      </Container>
    </section>
  );
}