import type { StaticImageData } from "next/image";
import logo_univ from "../../public/assets/img/brand/univ.png";
import logo_brand2 from "../../public/assets/img/brand/brand2.jpg";
import logo_wizara from "../../public/assets/img/brand/wizara.png";
import logo_brand4 from "../../public/assets/img/brand/brand4.jpg";
import logo_brand5 from "../../public/assets/img/brand/brand5.jpg";
import logo_tim from "../../public/assets/img/brand/tim.png";
import logo_brand7 from "../../public/assets/img/brand/brand7.png";
import logo_brand8 from "../../public/assets/img/brand/brand8.jpg";
import logo_brand9 from "../../public/assets/img/brand/brand9.png";

export interface Partner {
  id: string;
  name: string;
  logo: StaticImageData;
  href?: string;
}

export const partners: Partner[] = [
  { id: "p1", name: "Hassan II University of Casablanca", logo: logo_univ },
  { id: "p2", name: "Partner institution", logo: logo_brand2 },
  { id: "p3", name: "Ministry partner", logo: logo_wizara },
  { id: "p4", name: "Academic partner", logo: logo_brand4 },
  { id: "p5", name: "Research partner", logo: logo_brand5 },
  { id: "p6", name: "TIM", logo: logo_tim },
  { id: "p7", name: "Technology partner", logo: logo_brand7 },
  { id: "p8", name: "Industry partner", logo: logo_brand8 },
  { id: "p9", name: "Conference partner", logo: logo_brand9 },
];
