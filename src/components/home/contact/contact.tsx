import Container from "@/components/common/container";
import ContactMap from "./contact-map";
import ContactInfo from "./contact-info";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-slate-50 py-10"
    >
      <Container>
        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <ContactMap />

          {/* Right Side */}

          <ContactInfo />

        </div>
      </Container>
    </section>
  );
}