import Image from "next/image";

import HeroContent from "./hero-content";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <Image
        src="/images/hero.jpg"
        alt="Vishwa Bharathi Campus"
        fill
        priority
        className="object-cover"
      />

      <div className="absolute inset-0 bg-gradient-to-r from-[#041a36]/90 via-[#041a36]/70 to-[#041a36]/40" />

      <div className="relative mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-24 lg:px-8 lg:pt-32">
        <HeroContent />
      </div>
    </section>
  );
}