import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterTwo from "../layout/footers/FooterTwo";
import HeaderTwo from "../layout/headers/header-2";
import LoginArea from "./LoginArea";

const Login = () => {
  return (
    <>
      <HeaderTwo style={true} />
      <main>
        <Breadcrumb top_title="Gallery" title="Gallery" />
        <LoginArea />
      </main>
      <FooterTwo />
    </>
  );
};

export default Login;
