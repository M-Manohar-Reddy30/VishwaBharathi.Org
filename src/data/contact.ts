export const contactInfo = {
  address: {
    title: "Visit Us",
    line1: "G. Chengareddy Memorial Special School",
    line2: "Near FM Radio Station",
    line3: "Belgal Road, Cowl Bazaar",
    line4: "Ballari, Karnataka - 583102",
  },

  phone: process.env.NEXT_PUBLIC_PHONE_NUMBER || "",

  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP || "",

  email:
    process.env.NEXT_PUBLIC_EMAIL ||
    "info@vishwabharathi.org",

  workingHours: {
    weekdays: "Monday - Saturday",
    timing: "9:00 AM - 5:00 PM",
  },

  mapEmbed:
    process.env.NEXT_PUBLIC_GOOGLE_MAP_EMBED || "",
};