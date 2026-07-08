interface GalleryHeaderProps {
  preview?: boolean;
}

export default function GalleryHeader({
  preview = false,
}: GalleryHeaderProps) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold tracking-wide text-[#0A5EB0]">
        GALLERY
      </span>

      <h2 className="mt-4 text-3xl font-bold tracking-tight text-slate-900 md:text-3xl">
        Moments That Matter
      </h2>

      <p className="mt-4 text-lg leading-6 text-slate-600">
        Every smile, every achievement and every milestone reflects our
        commitment to creating a safe, inclusive and caring environment
        where every individual is encouraged to learn, grow and thrive.
      </p>

      {preview && (
        <p className="mt-4 text-sm text-slate-500">
          Explore a few of our recent moments. Visit the complete gallery
          to discover many more memories.
        </p>
      )}
    </div>
  );
}