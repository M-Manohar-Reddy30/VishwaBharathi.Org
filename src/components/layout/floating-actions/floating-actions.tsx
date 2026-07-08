"use client";

import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

import DonateButton from "@/components/common/buttons/donate-button";
import EnquireButton from "@/components/common/buttons/enquire-button";

export default function FloatingActions() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      <DonateButton className="shadow-xl" />

      <EnquireButton className="shadow-xl" />

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 text-white shadow-xl transition hover:scale-110"
      >
        <ArrowUp size={18} />
      </button>
    </div>
  );
}