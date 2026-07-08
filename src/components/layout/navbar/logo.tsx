import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-3 transition-opacity hover:opacity-90"
    >
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#0A5EB0] text-lg font-bold text-white shadow-lg">
        VB
      </div>

      <div className="hidden sm:block">
        <h2 className="font-heading text-lg font-bold leading-none text-slate-900">
          Vishwa Bharathi
        </h2>

        <p className="text-xs text-slate-500">
          Kalanikethan & Education Society
        </p>
      </div>
    </Link>
  );
}