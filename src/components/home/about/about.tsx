import Container from "@/components/common/container";

import AboutContent from "./about-content";
import AboutImage from "./about-image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-10"
    >
      <Container>
        <div className="grid items-center gap-20 lg:grid-cols-2">
          <AboutImage />

          <AboutContent />
        </div>
      </Container>
    </section>
  );
}