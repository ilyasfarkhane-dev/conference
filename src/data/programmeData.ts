export interface ProgrammeDay {
  id: string;
  day: string;
  date: string;
  sessions: string[];
}

export const programmePublicationNote =
  "Proceedings of ICTIM'26 will be published in Springer's Communications in Computer and Information Science (CCIS) series. Extended versions of selected papers will be submitted to Scopus-indexed journals.";

/** Set when the official programme PDF is uploaded to /public */
export const programmePdf = {
  url: null as string | null,
  filename: "ICTIM26_Conference_Programme.pdf",
};

export const programmeDays: ProgrammeDay[] = [
  {
    id: "day-1",
    day: "Day 1",
    date: "November 26, 2026",
    sessions: [
      "Registration and welcome coffee",
      "Opening ceremony",
      "Keynote addresses",
      "Technical paper sessions",
      "Welcome reception",
    ],
  },
  {
    id: "day-2",
    day: "Day 2",
    date: "November 27, 2026",
    sessions: [
      "Workshops and tutorials",
      "Parallel paper sessions",
      "Panel discussions",
      "Poster presentations",
      "Conference dinner",
    ],
  },
  {
    id: "day-3",
    day: "Day 3",
    date: "November 28, 2026",
    sessions: [
      "Technical paper sessions",
      "Industry and research showcases",
      "Awards ceremony",
      "Closing remarks",
    ],
  },
];
