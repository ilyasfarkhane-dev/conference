"use client";
import { useState } from "react";
import Image, { StaticImageData } from "next/image";
// chose images
import chose_icon_1 from "../../../public/assets/img/chose/c01.png";
import chose_icon_2 from "../../../public/assets/img/chose/c02.png";
import chose_icon_3 from "../../../public/assets/img/chose/c03.png";
// chose data type
interface chose_data_type {
  id: number;
  active: string;
  sirial_no: string;
  icon: StaticImageData;
  title: string;
  info: string;
}
// chose data
const chose_data: chose_data_type[] = [
  {
    id: 1,
    active: "",
    sirial_no: "01",
    icon: chose_icon_1,
    title: "Start of Submissions",
    info: "July 1, 2024",
  },
  {
    id: 2,
    active: "",
    sirial_no: "02",
    icon: chose_icon_3,
    title: "Submission Deadline",
    info: "August 15, 2024",
  },
  {
    id: 3,
    active: "active",
    sirial_no: "03",
    icon: chose_icon_2,
    title: "Notification of Acceptance",
    info: "September 15, 2024",
  },
  {
    id: 4,
    active: "",
    sirial_no: "05",
    icon: chose_icon_3,
    title: "Final Manuscript Due",
    info: "September 30, 2024",
  },

  {
    id: 5,
    active: "",
    sirial_no: "04",
    icon: chose_icon_3,
    title: "Date of the Conference",
    info: "November 26 - 27, 2024",
  },
];
const ChoseAreaHomeOne = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const handleMouseEnter = (index: number) => {
    setActiveIndex(index);
  };

  return (
    <>
      <section className="chose-area pt-115 pb-90">
        <div className="container">
          <div className="row ">
            <div className="col-xl-6 offset-xl-3 col-lg-8 offset-lg-2">
              <div className="section-title text-center mb-70">
                <h2>Participation Process</h2>
              </div>
            </div>
          </div>
          <div
            className="row chose-row wow fadeInUp animated"
            data-wow-delay="0.3s"
          >
            {chose_data.map((item, i) => (
              <div key={i} className="col-xl-2 col-lg-4 col-md-6 col-sm-12">
                <div
                  className={`chose-box text-center ${
                    activeIndex === i ? "active" : ""
                  } mb-4`}
                  onMouseEnter={() => handleMouseEnter(i)}
                >
                  <div className="chose-content">
                    <span>{item.sirial_no}</span>
                    <h5>{item.title}</h5>
                    <p>{item.info}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ChoseAreaHomeOne;
