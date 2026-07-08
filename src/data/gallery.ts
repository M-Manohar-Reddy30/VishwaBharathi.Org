export type GalleryCategory =
  | "all"
  | "special-school"
  | "old-age-home"
  | "rehabilitation"
  | "events"
  | "activities";

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
    label: "Old Age Home",
    value: "old-age-home",
  },
  {
    id: 4,
    label: "Rehabilitation",
    value: "rehabilitation",
  },
  {
    id: 5,
    label: "Events",
    value: "events",
  },
  {
    id: 6,
    label: "Activities",
    value: "activities",
  },
];

export interface GalleryImage {
  id: number;
  title: string;
  category: GalleryCategory;
  image: string;
}

export const galleryImages: GalleryImage[] = [
  {
    id: 1,
    title: "Classroom Learning",
    category: "special-school",
    image: "/images/gallery/special-school/special-school-01.jpg",
  },
  {
    id: 2,
    title: "Student Activities",
    category: "activities",
    image: "/images/gallery/activities/activity-01.jpg",
  },
  {
    id: 3,
    title: "Therapy Session",
    category: "rehabilitation",
    image: "/images/gallery/rehabilitation/rehabilitation-01.jpg",
  },
  {
    id: 4,
    title: "Old Age Home",
    category: "old-age-home",
    image: "/images/gallery/old-age-home/old-age-home-01.jpg",
  },
  {
    id: 5,
    title: "Annual Event",
    category: "events",
    image: "/images/gallery/events/event-01.jpg",
  },
  {
    id: 6,
    title: "Vocational Training",
    category: "special-school",
    image: "/images/gallery/special-school/special-school-02.jpg",
  },
  {
    id: 7,
    title: "Community Event",
    category: "events",
    image: "/images/gallery/events/event-02.jpg",
  },
  {
    id: 8,
    title: "Outdoor Activity",
    category: "activities",
    image: "/images/gallery/activities/activity-02.jpg",
  },
  {
    id: 9,
    title: "Rehabilitation Care",
    category: "rehabilitation",
    image: "/images/gallery/rehabilitation/rehabilitation-02.jpg",
  },
  {
    id: 10,
    title: "students",
    category: "special-school",
    image: "/images/gallery/special-school/special-school-03.jpg",
  },
];