import Image from "next/image";
import SocialLinks, { CopyRight } from "../../common/social-links";
import footer_logo from "../../../public/assets/img/logo/logo.png";
import Link from "next/link";

interface footer_content_2_type {
  footer_info: string;
  footer_data: {
    id: number;
    title: string;
    links: {
      title: string;
      link: string;
    }[];
  }[];
}

const footer_content_2: footer_content_2_type = {
  footer_info:
    "There’s a good chance Everyday Health is the most appropriately named blog on this list because it focuses on the.",
  footer_data: [
    {
      id: 1,
      title: "Contactez-nous",
      links: [
        {
          title:
            "Faculty of sciences Ben M'Sick, University Hassan II | Casablanca, Maroc",
          link: "#",
        },
        { title: "tim24fsbm@gmail.com", link: "#" },
        { title: "omar.zahour@univh2c.ma", link: "#" },
        { title: "+212 660-082091", link: "#" },
      ],
    },
    {
      id: 2,
      title: "Liens Pratiques",
      links: [
        // { title: "Modèle de soumission", link: "#" },
        // { title: "Galery", link: "/gallery" },
        { title: "Registration", link: "/registration" },
        { title: "Committee", link: "/committee" },
        { title: "Topics", link: "/topics" },
      ],
    },
  ],
};
const { footer_info, footer_data } = footer_content_2;

const FooterTwo = () => {
  return (
    <>
      <footer
        className="footer-default"
        style={{ backgroundImage: `url(/assets/img/bg/footer-bg.jpg)` }}
      >
        <section className="footer-area pt-110 pb-90 bg-footer">
          <div className="container">
            <div className="row d-flex justify-content-between">
              <div className="col-xl-3 col-lg-3 col-md-12 mb-30">
                <div className="footer-info">
                  <div className="widgets">
                    <div className="footer-logo">
                      <Image src={footer_logo} alt="theme-pure" />
                    </div>
                  </div>
                  <div className="footer-social-info">
                    {/* <SocialLinks /> */}
                  </div>
                </div>
              </div>
              {footer_data.map((item, i) => (
                <div key={i} className="col-xl-3 col-lg-3 col-md-4">
                  <div className="wigets mb-30 pl-40">
                    <div className="widgets-titles">
                      <h4>{item.title}</h4>
                    </div>
                    <div className="wegets-body">
                      <ul>
                        {item.links.map((link, index) => (
                          <li key={index}>
                            <a href={link.link}>{link.title}</a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        <div className="copyright-area">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="copyright-text text-center">
                  <p>
                    {" "}
                    <CopyRight />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default FooterTwo;
