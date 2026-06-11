export interface RegistrationPlan {
  id: string;
  title: string;
  description: string;
  price: number;
  currency: "MAD";
  featured?: boolean;
  features: string[];
}

export const registrationPlans: RegistrationPlan[] = [
  {
    id: "in-person",
    title: "In-person",
    description: "Attend on site at the Faculty of Science Ben M'Sick, Casablanca.",
    price: 300,
    currency: "MAD",
    featured: true,
    features: [
      "Communication certificate",
      "Certificate of participation",
      "Conference materials",
      "Access to exhibitions",
      "Lunch and tea/coffee breaks",
      "Conference documents",
      "Briefcase & proceedings report",
      "Notebook & pen",
      "Badge, brochure & program",
    ],
  },
  {
    id: "distance",
    title: "Distance",
    description: "Join remotely and access conference documents online.",
    price: 150,
    currency: "MAD",
    features: [
      "Communication certificate",
      "Certificate of participation",
      "Conference documents",
    ],
  },
];

export const registrationSteps = [
  {
    step: "01",
    title: "Choose your plan",
    description: "Select in-person or distance registration based on how you will attend.",
  },
  {
    step: "02",
    title: "Register on EasyChair",
    description: "Complete your registration through the official ICTIM'26 conference portal.",
  },
  {
    step: "03",
    title: "Confirm your attendance",
    description: "Follow the instructions sent by the registration chairs to finalize your spot.",
  },
] as const;
