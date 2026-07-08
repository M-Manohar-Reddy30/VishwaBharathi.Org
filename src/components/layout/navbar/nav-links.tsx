"use client";

import { navigation } from "@/data/navigation";

export default function NavLinks() {
  return (
    <nav className="hidden items-center gap-8 lg:flex">
      {navigation.map((item) => (
        <a
          key={item.name}
          href={item.href}
          className="text-sm font-medium text-slate-700 transition-colors duration-300 hover:text-[#0A5EB0]"
        >
          {item.name}
        </a>
      ))}
    </nav>
  );
}