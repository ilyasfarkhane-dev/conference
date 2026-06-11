import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import PricingHomeTwo from "../homes/home-2/PricingHomeTwo";
import FooterTwo from "../layout/footers/FooterTwo";
import ChoseAreaHomeOne from "./../homes/home/ChoseAreaHomeOne";

const Server = () => {
  return (
    <>      <main>
        <Breadcrumb top_title="Registration" title="Registration" />
        <PricingHomeTwo />
      </main>
      <FooterTwo />
    </>
  );
};

export default Server;
