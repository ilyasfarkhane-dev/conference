import Breadcrumb from "../common/breadcrumbs/breadcrumb";
import FooterTwo from "../layout/footers/FooterTwo";
import { GallerySection } from "../gallery";

const Login = () => {
  return (
    <>      <main>
        <Breadcrumb top_title="Gallery" title="Gallery" />
        <GallerySection showArchiveCta={false} />
      </main>
      <FooterTwo />
    </>
  );
};

export default Login;
