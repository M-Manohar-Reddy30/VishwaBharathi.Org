"use client";

import { Heart } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface DonateButtonProps {
  className?: string;
}

export default function DonateButton({
  className = "",
}: DonateButtonProps) {
  const message = encodeURIComponent(`Hello,

I visited the official website of Vishwa Bharathi Kalanikethan and Education Society.

I would like to contribute towards your organization through a donation.

Kindly guide me regarding the donation process.

Thank you.`);

  return (
    <a
      href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#0A5EB0] px-5 py-3 font-medium text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#094f94] hover:shadow-lg ${className}`}
    >
      <Heart size={18} />
      Donate
    </a>
  );
}