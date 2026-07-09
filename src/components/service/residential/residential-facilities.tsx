import Container from "@/components/common/container";

import ResidentialImage from "./residential-image";
import ResidentialContent from "./residential-content";

export default function ResidentialFacilities() {
  return (
    <section className="bg-white py-24">
      <Container>

        <div className="grid items-center gap-20 lg:grid-cols-2">

          <ResidentialImage />

          <ResidentialContent />

        </div>

      </Container>
    </section>
  );
}