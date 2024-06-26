import Image from "next/image";
import hosting_bg from "../../../public/assets/img/slider/header-hostingbg.png";

interface hero_content_type {
  bg_img: string;
  sub_title: string;
  title: string;
  price: string;
  offer: string;
}
const hero_content: hero_content_type = {
  bg_img: "/assets/img/slider/serviebg.jpg",
  sub_title: "Isometric Hosting",
  title:
    "TIM'24:   7th International Conference on Information Technology and Modeling . ",
  price: "Faculty of Sciences Ben M'Sik | Casablanaca - Morocco",
  offer: "26 - 27 - November 2024",
};
const { bg_img, sub_title, title, price, offer } = hero_content;

const HeroHomeTwo = () => {
  return (
    <>
      <section className="slider-area position-relative fix">
        <div className="slider-ac">
          <div
            className="single-slider d-flex pt-130 align-items-center slider-height"
            style={{ backgroundImage: `url(${bg_img})` }}
          >
            <div className="container">
              <div className="row">
                <div className="col-xl-7">
                  <div className="slider-text slider-text-2">
                    <h2 className="wow fadeInUp animated" data-wow-delay="0.6s">
                      {title}
                    </h2>
                    <div
                      className="slider-text-offer wow fadeInUp animated"
                      data-wow-delay="0.9s"
                    >
                      <div className="row">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="single-offer mb-30">
                            <h3>{price}</h3>
                          </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                          <div className="single-offer pl-65 mb-30">
                            <h3>{offer}</h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-xl-5 d-none d-xl-block">
                  <div
                    className="slider-bottom-imgs wow fadeInRight animated"
                    data-wow-delay="1.3s"
                  >
                    <Image src={hosting_bg} alt="theme-pure" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroHomeTwo;
