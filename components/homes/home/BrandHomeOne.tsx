"use client";  
import Slider from "react-slick";  
import React, { useRef } from "react";  
import Image, { StaticImageData } from "next/image";  
// brand data images  
import brand_1 from "../../../public/assets/img/brand/univ.png";  
import brand_2 from "../../../public/assets/img/brand/brand2.jpg";  
import brand_3 from "../../../public/assets/img/brand/wizara.png";  
import brand_4 from "../../../public/assets/img/brand/brand4.jpg";  
import brand_5 from "../../../public/assets/img/brand/brand5.jpg";  
import brand_6 from "../../../public/assets/img/brand/tim.png";  
import brand_7 from "../../../public/assets/img/brand/brand7.png";  
import brand_8 from "../../../public/assets/img/brand/brand8.jpg";  
import brand_9 from "../../../public/assets/img/brand/brand9.png";  

// brand data type  
interface brand_images_type {  
  img: StaticImageData;  
}  

// brand data  
const brand_images: brand_images_type[] = [  
  { img: brand_1 },  
  { img: brand_2 },  
  { img: brand_3 },  
  { img: brand_4 },  
  { img: brand_6 },  
  { img: brand_5 },  
  { img: brand_7 },  
  { img: brand_8 },  
  { img: brand_9 },  
];  

// slider setting  
const setting = {  
  dots: false,  
  arrows: false,  
  infinite: true,  
  speed: 300,  
  slidesToShow: 5,  
  slidesToScroll: 1,  
  responsive: [  
    {  
      breakpoint: 1024,  
      settings: {  
        slidesToShow: 4,  
        slidesToScroll: 1,  
        infinite: true,  
        dots: false,  
      },  
    },  
    {  
      breakpoint: 600,  
      settings: {  
        slidesToShow: 2,  
        slidesToScroll: 2,  
      },  
    },  
    {  
      breakpoint: 480,  
      settings: {  
        slidesToShow: 2,  
        slidesToScroll: 1,  
      },  
    },  
  ],  
};  

const BrandHomeOne = ({ style }: any) => {  
  const sliderRef = useRef(null);  

  return (  
    <>  
      <section className={`brand-area ${style && "pt-120"} pb-180 pt-120`}>  
        <div className="container">  
          <div className="row"> {/* Change to use Bootstrap's grid-row */}  
            {brand_images.map((item, i) => (  
              <div key={i} className="col-6 col-md-4 col-lg-2"> {/* Two images per row on mobile and adjust for larger screens */}  
                <div className="single-brand text-center mb-4"> {/* Optional margin bottom for spacing */}  
                  <Image  
                    src={item.img}  
                    alt="brand"  
                    className="img-fluid"  
                    style={{ maxWidth: "100%", height: "auto" }}  
                  />  
                </div>  
              </div>  
            ))}  
          </div>  
        </div>  
      </section>  
    </>  
  );  
};  

export default BrandHomeOne;