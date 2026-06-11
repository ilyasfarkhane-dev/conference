import HeroHomeTwo from "./HeroHomeTwo";
import DomainSearchHomeTwo from "./DomainSearchHomeTwo";
import CoreFeaturesHomeTwo from "./CoreFeaturesHomeTwo";
import ServicesHomeOne from "../home/ServicesHomeOne";
import PricingHomeTwo from "./PricingHomeTwo";
import { GallerySection } from "../../gallery";
import ChoseAreaHomeOne from "../home/ChoseAreaHomeOne";
import TestimonailHomeOne from "../home/TestimonailHomeOne";
import NewsFeedHomeOne from "../home/NewsFeedHomeOne";
import BrandHomeOne from "../home/BrandHomeOne";
import FooterTwo from "../../layout/footers/FooterTwo";
import FAQHomeOne from "../home/FAQHomeOne";
import Team from "../../team/TeamArea";

const HomeTwo = () => {
  return (
    <>
      <HeroHomeTwo />
      <main>
        <ChoseAreaHomeOne />
        <FAQHomeOne />
        <Team />
        <GallerySection />
        <BrandHomeOne />
      </main>
      <FooterTwo />
    </>
  );
};

export default HomeTwo;
