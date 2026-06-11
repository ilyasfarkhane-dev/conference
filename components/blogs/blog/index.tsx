import Breadcrumb from "../../common/breadcrumbs/breadcrumb";
import FooterOne from "../../layout/footers/FooterOne";
import BlogArea from "./BlogArea";

const Blog = () => {
  return (
    <>      <main>
        <Breadcrumb top_title="Blog Page" title="Blog" />
        <BlogArea />
      </main>
      <FooterOne />
    </>
  );
};

export default Blog;
