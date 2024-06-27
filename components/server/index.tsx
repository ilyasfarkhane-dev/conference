import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import TestimonailHomeOne from "../homes/home/TestimonailHomeOne";
import CoreFeatures from "../hosting/CoreFeatures";
import PriceArea from "../hosting/PriceArea";
import PricingHomeTwo from "../homes/home-2/PricingHomeTwo";
import FooterTwo from "../layout/footers/FooterTwo";
import HeaderTwo from "../layout/headers/header-2";
import ChoseAreaHomeOne from "./../homes/home/ChoseAreaHomeOne";

const Server = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Registration" title="Registration" />
        <PricingHomeTwo />
      </main>
      <FooterTwo />
    </>
  );
};

export default Server;
