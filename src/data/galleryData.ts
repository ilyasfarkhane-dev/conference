export type GalleryCategory =
  | "conference"
  | "award"
  | "ceremony"
  | "workshop"
  | "community";

export type GalleryLayout = "featured" | "wide" | "tall" | "standard";

export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  date: string;
  category: GalleryCategory;
  image: string;
  images: string[];
  featured?: boolean;
  layout: GalleryLayout;
}

export const galleryCategories: {
  id: GalleryCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "conference", label: "Conferences" },
  { id: "award", label: "Awards" },
  { id: "ceremony", label: "Ceremonies" },
  { id: "workshop", label: "Workshops" },
  { id: "community", label: "Community" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "g1",
    title: "ICTIM Opening Ceremony",
    description:
      "The grand opening of the international conference, welcoming researchers and academics from around the world to Casablanca.",
    date: "November 2024",
    category: "ceremony",
    image: "/assets/img/galery/ga9.jpg",
    images: ["/assets/img/galery/ga9.jpg", "/assets/img/galery/ga1.jpg"],
    featured: true,
    layout: "featured",
  },
  {
    id: "g2",
    title: "Keynote Address",
    description:
      "Leading voices in AI and intelligent systems share insights on the future of digital ecosystems.",
    date: "November 2024",
    category: "conference",
    image: "/assets/img/galery/2.jpg",
    images: ["/assets/img/galery/2.jpg"],
    layout: "wide",
  },
  {
    id: "g3",
    title: "Research Excellence Award",
    description:
      "Celebrating outstanding contributions to information technology and modeling research.",
    date: "November 2023",
    category: "award",
    image: "/assets/img/galery/ga6.jpg",
    images: ["/assets/img/galery/ga6.jpg", "/assets/img/galery/ga3.jpg"],
    layout: "tall",
  },
  {
    id: "g4",
    title: "Panel Discussion",
    description:
      "Experts debate emerging trends in generative AI, sustainability, and smart systems.",
    date: "November 2024",
    category: "conference",
    image: "/assets/img/galery/ga1.jpg",
    images: ["/assets/img/galery/ga1.jpg"],
    layout: "standard",
  },
  {
    id: "g5",
    title: "Honorary Tribute",
    description:
      "A gallery tribute dedicated to emeritus professors and their lasting academic legacy.",
    date: "November 2022",
    category: "ceremony",
    image: "/assets/img/galery/daif.jpg",
    images: ["/assets/img/galery/daif.jpg"],
    layout: "standard",
  },
  {
    id: "g6",
    title: "Hands-on Workshop",
    description:
      "Interactive sessions on machine learning pipelines, data mining, and intelligent modeling.",
    date: "November 2024",
    category: "workshop",
    image: "/assets/img/galery/ga8.jpg",
    images: ["/assets/img/galery/ga8.jpg", "/assets/img/galery/ga4.jpg"],
    layout: "wide",
  },
  {
    id: "g7",
    title: "Networking Evening",
    description:
      "Researchers, industry partners, and students connect during the community social event.",
    date: "November 2023",
    category: "community",
    image: "/assets/img/galery/ga10.jpg",
    images: ["/assets/img/galery/ga10.jpg"],
    layout: "standard",
  },
  {
    id: "g8",
    title: "Best Paper Recognition",
    description:
      "Authors receive awards for exceptional peer-reviewed contributions to the proceedings.",
    date: "November 2023",
    category: "award",
    image: "/assets/img/galery/ga3.jpg",
    images: ["/assets/img/galery/ga3.jpg"],
    layout: "tall",
  },
  {
    id: "g9",
    title: "Technical Sessions",
    description:
      "Parallel tracks covering computer vision, NLP, blockchain, and cloud computing.",
    date: "November 2024",
    category: "conference",
    image: "/assets/img/galery/ga4.jpg",
    images: ["/assets/img/galery/ga4.jpg"],
    layout: "standard",
  },
  {
    id: "g10",
    title: "Student Poster Session",
    description:
      "Emerging scholars present innovative projects to the ICTIM research community.",
    date: "November 2024",
    category: "workshop",
    image: "/assets/img/galery/ga7.jpg",
    images: ["/assets/img/galery/ga7.jpg"],
    layout: "standard",
  },
  {
    id: "g11",
    title: "Community Gathering",
    description:
      "Moments of collaboration and cultural exchange among international delegates.",
    date: "November 2023",
    category: "community",
    image: "/assets/img/galery/ga11.jpg",
    images: ["/assets/img/galery/ga11.jpg", "/assets/img/galery/ga5.jpg"],
    layout: "standard",
  },
  {
    id: "g12",
    title: "Closing Ceremony",
    description:
      "A memorable farewell celebrating achievements and announcing the next edition.",
    date: "November 2024",
    category: "ceremony",
    image: "/assets/img/galery/ga5.jpg",
    images: ["/assets/img/galery/ga5.jpg"],
    layout: "wide",
  },
];

export const galleryMemoryCount = "120+";
