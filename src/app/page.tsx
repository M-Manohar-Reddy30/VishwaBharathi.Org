import Hero from "@/components/home/hero/hero";
import About from "@/components/home/about/about";
import Pillars from "@/components/home/pillars/pillars";
import WhyUs from "@/components/home/why-us/why-us";
import Journey from "@/components/home/journey/journey";
import Gallery from "@/components/gallery/gallery";
import Impact from "@/components/home/impact/impact";
import Contact from "@/components/home/contact/contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Pillars />
      <WhyUs />
      <Journey />
      <Gallery mode="preview" />
      <Impact />
      <Contact />
    </>
  );
}