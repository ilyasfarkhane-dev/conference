import ChoseAreaHomeOne from "../homes/home/ChoseAreaHomeOne";
import PriceArea from "../hosting/PriceArea";
import FooterTwo from "../layout/footers/FooterTwo";
import HeaderTwo from "../layout/headers/header-2";
import Breadcrumb from "./../common/breadcrumbs/breadcrumb";
import FAQArea from "./FAQArea";
import IntroVideoArea from "./IntroVideoArea";

const Affiliate = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="TIM'24" title="Sujets" />
      
        <FAQArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Affiliate;
