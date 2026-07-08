"use client";

import { Phone } from "lucide-react";
import { SITE_CONFIG } from "@/lib/constants";

interface EnquireButtonProps {
  className?: string;
}

export default function EnquireButton({
  className = "",
}: EnquireButtonProps) {
  return (
    <a
      href={`tel:${SITE_CONFIG.phone}`}
      className={`inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white px-5 py-3 font-medium text-slate-800 transition-all duration-300 hover:-translate-y-1 hover:border-[#0A5EB0] hover:text-[#0A5EB0] hover:shadow-lg ${className}`}
    >
      <Phone size={18} />
      Enquire
    </a>
  );
}