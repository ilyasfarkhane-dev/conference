export const conference = {
  shortName: "ICTIM'26",
  fullName:
    "The 8th International Conference on Information Technology and Modeling",
  location: "Faculty of Science Ben M'Sick – Casablanca, Morocco",
  dates: "November 26–28, 2026",
  theme: {
    title:
      "Artificial Intelligence, Generative AI and Intelligent Digital Ecosystems",
    subtitle: "Shaping the Future of Smart and Sustainable Systems",
  },
  importantDates: [
    { step: "01", label: "Paper Submission Date", date: "July 15, 2026" },
    { step: "02", label: "Notification of Acceptance", date: "August 30, 2026" },
    { step: "03", label: "Camera-Ready Submission", date: "September 20, 2026" },
    { step: "04", label: "Conference Dates", date: "November 26–28, 2026" },
  ],

  contactEmail: "tim24fsbm@gmail.com",

  links: {
    submission: "https://easychair.org/conferences/?conf=icitm26",
    cfp: "https://easychair.org/cfp/ICITM26",
    topics: "/topics",
    contact: "mailto:tim24fsbm@gmail.com",
  },
} as const;
