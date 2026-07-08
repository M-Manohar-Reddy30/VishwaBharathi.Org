"use client";

import {
  Menu,
  Heart,
  Phone,
} from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

import { navigation } from "@/data/navigation";
import { SITE_CONFIG } from "@/lib/constants";

export default function MobileMenu() {
  const whatsappMessage = encodeURIComponent(
    `Hello,

I visited the official website of Vishwa Bharathi Kalanikethan and Education Society.

I would like to contribute towards your organization through a donation.

Kindly guide me regarding the donation process.

Thank you.`
  );

  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger>
          <Menu className="h-7 w-7" />
        </SheetTrigger>

        <SheetContent side="right">
          <div className="mt-12 flex flex-col gap-6">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-medium"
              >
                {item.name}
              </a>
            ))}

            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}?text=${whatsappMessage}`}
                target="_blank"
                className="flex items-center justify-center gap-2 rounded-xl bg-[#0A5EB0] px-5 py-3 text-white"
              >
                <Heart size={18} />

                Donate
              </a>

              <a
                href={`tel:${SITE_CONFIG.phone}`}
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-300 px-5 py-3"
              >
                <Phone size={18} />

                Enquire
              </a>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}