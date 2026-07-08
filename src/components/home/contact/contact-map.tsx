import { contactInfo } from "@/data/contact";

export default function ContactMap() {
  return (
    <div className="overflow-hidden rounded-[32px] bg-white shadow-xl">
      <iframe
        src={contactInfo.mapEmbed}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="min-h-[420px] w-full border-0"
        title="Vishwa Bharathi Location"
      />
    </div>
  );
}