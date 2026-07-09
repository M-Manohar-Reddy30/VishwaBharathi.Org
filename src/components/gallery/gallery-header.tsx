interface GalleryHeaderProps {
  preview?: boolean;
}

export default function GalleryHeader({
  preview = false,
}: GalleryHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl text-center">
      {/* Badge */}

      <span className="inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold tracking-wider text-[#0A5EB0] uppercase">
        Our Gallery
      </span>

      {/* Heading */}

      <h2 className="mt-5 text-3xl font-bold leading-tight tracking-tight text-slate-900 lg:text-3xl">
        Capturing Moments,
        <br />
        Creating Memories
      </h2>

      {/* Description */}

      <p className="mx-auto mt-5 max-w-1xl text-lg leading-6 text-slate-600">
        Every photograph tells a story of hope, learning, compassion and
        achievement. Explore the inspiring journey of Vishwa Bharathi through
        inclusive education, rehabilitation services, vocational training,
        celebrations, community programs and compassionate elderly care.
      </p>

      {/* Homepage Text */}

      {preview && (
        <div className="mx-auto mt-5 max-w-2xl rounded-2xl border border-blue-100 bg-blue-50 px-6 py-3">
          <p className="text-sm font-medium text-slate-700">
            Explore a selection of our latest moments here. Visit the complete
            gallery to discover our full collection of photographs, events and
            memories.
          </p>
        </div>
      )}
    </div>
  );
}