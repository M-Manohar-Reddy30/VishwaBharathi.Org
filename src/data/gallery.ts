export type GalleryCategory =
  | "all"
  | "special-school"
  | "rehabilitation"
  | "old-age-home"
  | "sports"
  | "events"
  | "activities"
  | "therapy"
  | "vocational"
  | "celebrations"
  | "tours";

export interface GalleryCategoryItem {
  id: number;
  label: string;
  value: GalleryCategory;
}

export const galleryCategories: GalleryCategoryItem[] = [
  {
    id: 1,
    label: "All",
    value: "all",
  },
  {
    id: 2,
    label: "Special School",
    value: "special-school",
  },
  {
    id: 3,
    label: "Rehabilitation",
    value: "rehabilitation",
  },
  {
    id: 4,
    label: "Old Age Home",
    value: "old-age-home",
  },
  {
    id: 5,
    label: "Sports",
    value: "sports",
  },
  {
    id: 6,
    label: "Events",
    value: "events",
  },
  {
    id: 7,
    label: "Activities",
    value: "activities",
  },
  {
    id: 8,
    label: "Therapy",
    value: "therapy",
  },
  {
    id: 9,
    label: "Vocational",
    value: "vocational",
  },
  {
    id: 10,
    label: "Celebrations",
    value: "celebrations",
  },
  {
    id: 11,
    label: "Tours",
    value: "tours",
  },
];

export interface GalleryImage {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
  alt: string;
  featured: boolean;
  date: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Classroom Learning",
    category: "special-school",
    image: "/images/gallery/special-school/special-school-01.jpg",
    alt: "Students learning in classroom",
    featured: true,
    date: "2026-07-01",
  },

  {
    id: 2,
    title: "Vocational Training",
    category: "vocational",
    image: "/images/gallery/special-school/special-school-02.jpg",
    alt: "Vocational training session",
    featured: true,
    date: "2026-07-02",
  },

  {
    id: 3,
    title: "Student Activities",
    category: "activities",
    image: "/images/gallery/activities/activity-01.jpg",
    alt: "Students participating in activities",
    featured: true,
    date: "2026-07-03",
  },

  {
    id: 4,
    title: "Outdoor Activities",
    category: "activities",
    image: "/images/gallery/activities/activity-02.jpg",
    alt: "Outdoor activity",
    featured: false,
    date: "2026-07-04",
  },

  {
    id: 5,
    title: "Therapy Session",
    category: "therapy",
    image: "/images/gallery/rehabilitation/rehabilitation-01.jpg",
    alt: "Therapy session",
    featured: true,
    date: "2026-07-05",
  },

  {
    id: 6,
    title: "Rehabilitation Support",
    category: "rehabilitation",
    image: "/images/gallery/rehabilitation/rehabilitation-02.jpg",
    alt: "Rehabilitation support",
    featured: true,
    date: "2026-07-06",
  },

  {
    id: 7,
    title: "Senior Citizen Care",
    category: "old-age-home",
    image: "/images/gallery/old-age-home/old-age-home-01.jpg",
    alt: "Old age home residents",
    featured: true,
    date: "2026-07-07",
  },

  {
    id: 8,
    title: "Annual Celebration",
    category: "celebrations",
    image: "/images/gallery/events/event-01.jpg",
    alt: "Annual celebration",
    featured: true,
    date: "2026-07-08",
  },

  {
    id: 9,
    title: "Community Event",
    category: "events",
    image: "/images/gallery/events/event-02.jpg",
    alt: "Community event",
    featured: false,
    date: "2026-07-09",
  },

  {
    id: 10,
    title: "School Campus",
    category: "special-school",
    image: "/images/gallery/special-school/special-school-03.jpg",
    alt: "School campus",
    featured: true,
    date: "2026-07-10",
  },
];