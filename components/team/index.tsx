import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterTwo from "../layout/footers/FooterTwo";
import HeaderTwo from "../layout/headers/header-2";
import OurOfficeArea from "./OurOfficeArea";
import TeamArea from "./TeamArea";

const Team = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Steering Committee" title="Committee" />
        {/* <TeamArea /> */}
        <OurOfficeArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Team;
