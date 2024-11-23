import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterTwo from "../layout/footers/FooterTwo";
import HeaderTwo from "../layout/headers/header-2";
import ContractArea from "./ContractArea";
import ContractServices from "./ContractServices";
import GoogleMap from "./GoogleMap";

const Contact = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Programme" title="programme" />
        <GoogleMap
          
        />
      
       
      </main>
      <FooterTwo />
    </>
  );
};

export default Contact;
