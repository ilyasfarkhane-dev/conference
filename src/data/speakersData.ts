import type { StaticImageData } from "next/image";
import team_avatar_1 from "../../public/assets/img/team/lhabib.jpg";
import team_avatar_2 from "../../public/assets/img/team/kikomba.jpg";
import team_avatar_3 from "../../public/assets/img/team/deboch.jpg";
import team_avatar_4 from "../../public/assets/img/team/anderson.jpg";
import team_avatar_5 from "../../public/assets/img/team/angel.jpg";
import team_avatar_6 from "../../public/assets/img/team/filali.jpg";

export type SpeakerCategory =
  | "keynote"
  | "invited"
  | "committee"
  | "organizer"
  | "honorary";

export interface SpeakerSocialLinks {
  linkedin?: string;
  scholar?: string;
  researchgate?: string;
  website?: string;
}

export interface Speaker {
  id: string;
  fullName: string;
  photo: StaticImageData;
  role: string;
  institution: string;
  country: string;
  countryCode: string;
  category: SpeakerCategory;
  biography: string;
  researchAreas: string[];
  keynoteTitle?: string;
  socialLinks: SpeakerSocialLinks;
  featured: boolean;
}

export const speakerCategories: {
  id: SpeakerCategory | "all";
  label: string;
}[] = [
  { id: "all", label: "All" },
  { id: "keynote", label: "Keynote Speakers" },
  { id: "invited", label: "Invited Experts" },
  { id: "committee", label: "Committee Members" },
  { id: "organizer", label: "Organizers" },
  { id: "honorary", label: "Honorary Guests" },
];

export const speakersExpertCount = "120+";

export const speakers: Speaker[] = [
  {
    id: "sp1",
    fullName: "Pr. El Habib Benlahmar",
    photo: team_avatar_1,
    role: "Professor",
    institution: "Faculty of Sciences Ben M'Sick, Hassan II University of Casablanca",
    country: "Morocco",
    countryCode: "MA",
    category: "keynote",
    biography:
      "Professor in the Department of Mathematics and Computer Science at the Faculty of Sciences Ben M'Sik at Hassan II University of Casablanca, Morocco.",
    researchAreas: ["Intelligent Systems", "Mathematical Modeling", "Computer Science"],
    keynoteTitle: "Advances in Intelligent Digital Ecosystems",
    socialLinks: {},
    featured: true,
  },
  {
    id: "sp6",
    fullName: "Pr. Sanaa El Filali",
    photo: team_avatar_6,
    role: "Professor",
    institution: "Faculty of Sciences Ben M'Sick, Hassan II University of Casablanca",
    country: "Morocco",
    countryCode: "MA",
    category: "committee",
    biography:
      "Professor in the Department of Mathematics and Computer Science at the Faculty of Sciences Ben M'Sik at Hassan II University of Casablanca, Morocco.",
    researchAreas: ["Information Systems", "Data Modeling", "Academic Research"],
    socialLinks: {},
    featured: false,
  },
  {
    id: "sp2",
    fullName: "Pr. Anderson Rocha",
    photo: team_avatar_4,
    role: "Full Professor",
    institution: "Institute of Computing, University of Campinas (Unicamp)",
    country: "Brazil",
    countryCode: "BR",
    category: "keynote",
    biography:
      "Full-Professor of Artificial Intelligence and Digital Forensics at the Institute of Computing, University of Campinas (Unicamp), Brazil.",
    researchAreas: ["Artificial Intelligence", "Digital Forensics", "Machine Learning"],
    keynoteTitle: "AI for Trustworthy Intelligent Systems",
    socialLinks: {},
    featured: false,
  },
  {
    id: "sp3",
    fullName: "Pr. KIKOMBA KAHUNGU Michael",
    photo: team_avatar_2,
    role: "Professor",
    institution: "ISP-Gombe-Kinshasa",
    country: "Democratic Republic of the Congo",
    countryCode: "CD",
    category: "invited",
    biography:
      "Professor at the Higher Pedagogical Institute of Gombe in the Democratic Republic of Congo.",
    researchAreas: ["Education Technology", "ICT", "Pedagogical Innovation"],
    socialLinks: {},
    featured: false,
  },
  {
    id: "sp4",
    fullName: "Pr. Olivier Debauche",
    photo: team_avatar_3,
    role: "Researcher",
    institution: "Department of Gembloux Agro-Bio Tech, University of Liège",
    country: "Belgium",
    countryCode: "BE",
    category: "invited",
    biography:
      "Researcher at the Department of Gembloux Agro-Bio Tech of the University of Liège (Belgium).",
    researchAreas: ["Agro-Bio Technology", "Sustainable Systems", "Environmental Modeling"],
    socialLinks: {},
    featured: false,
  },
  {
    id: "sp5",
    fullName: "Pr. Angel Ruiz Zafra",
    photo: team_avatar_5,
    role: "Professor of Computer Engineering",
    institution: "University of Granada",
    country: "Spain",
    countryCode: "ES",
    category: "invited",
    biography:
      "Professor of Computer Engineering, Department of Computer Languages and Systems, University of Granada (Granada, Spain).",
    researchAreas: ["Computer Engineering", "Programming Languages", "Software Systems"],
    socialLinks: {},
    featured: false,
  },
];
