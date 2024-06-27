interface priceing_data_type {
  id: number;
  best_value: boolean;
  title: string;
  info: string;
  price: number;
  save?: number;
  price_features: (JSX.Element | undefined)[];
}

const priceing_data: priceing_data_type[] = [
  {
    id: 1,
    best_value: false,
    title: "In-person",
    info: "More power for complex sites and heavy traffic.",
    price: 150,
    price_features: [
      <>- Certificate of Participation</>,
      <>- Conference Materials</>,
      <>- Access to Exhibitions</>,
      <>- Lunch and Tea/Coffee Breaks</>,
      <>- Conference Documents</>,
      <>- Notebook | Pen</>,
      <>- Badge | Brochure | Program</>,
    ],
  },
  {
    id: 2,
    best_value: true,
    title: "In-person",
    info: "More power for complex sites and heavy traffic.",
    price: 250,
    save: 62,
    price_features: [
      <>- Communication Certificate</>,
      <>- Certificate of Participation</>,
      <>- Conference Materials</>,
      <>- Access to Exhibitions</>,
      <>- Lunch and Tea/Coffee Breaks</>,
      <>- Conference Documents</>,
      <>- Briefcase | Proceedings Report</>,
      <>- Notebook | Pen</>,
      <>- Badge | Brochure | Program</>,
    ],
  },
  {
    id: 3,
    best_value: false,
    title: "Distance",
    info: "More power for complex sites and heavy traffic.",
    price: 150,
    save: 62,
    price_features: [
      <>- Communication Certificate</>,
      <>- Certificate of Participation</>,
      <>- Conference Documents</>,
    ],
  },
];
export default priceing_data;
