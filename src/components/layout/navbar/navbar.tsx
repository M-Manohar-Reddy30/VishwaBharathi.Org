"use client";

import { useEffect, useState } from "react";
import { Heart, Phone } from "lucide-react";

import Container from "@/components/common/container";

import Logo from "./logo";
import NavLinks from "./nav-links";
import MobileMenu from "./mobile-menu";
import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";
import { SITE_CONFIG } from "@/lib/constants";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const whatsappMessage = encodeURIComponent(
    `Hello,

I visited the official website of Vishwa Bharathi Kalanikethan and Education Society.

I would like to contribute towards your organization through a donation.

Kindly guide me regarding the donation process.

Thank you.`
  );

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <Logo />

        <NavLinks />

        <div className="hidden items-center gap-3 lg:flex">
          <DonateButton />
          <EnquireButton />
        </div>

        <MobileMenu />
      </Container>
    </header>
  );
}