import React from "react";
import { motion } from "framer-motion";

const imagesDetails = [
  {
    img: "t-1.webp",
  },
  {
    img: "t-2.webp",
  },
  {
    img: "t-3.webp",
  },
  {
    img: "t-4.webp",
  },
  {
    img: "t-5.webp",
  },
  {
    img: "t-6.webp",
  },
];

const TrackingPartnersHome = () => {
  return (
    <>
      <div className="text-center col py-5">
        <h4 className="text-center fw-bold tracking-header">
          OUR TRACKING
          <span
            className="fw-bold tracking-header mt-5"
            style={{
              display: "inline-table",
              fontSize: "24px",
            }}
          >
            &nbsp;PARTNERS
            <motion.hr
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ type: "tween", duration: 1.5 }}
              style={{
                width: "100%",
                borderBottom: "8px solid #05518c",
                marginTop: "-6px",
                opacity: 0.9,
              }}
            />
          </span>
        </h4>
        <div className="d-flex justify-content-center">
          <div className="col-lg-9 d-flex mt-3 flex-wrap">
            {imagesDetails.map((i, index) => {
              return (
                <div key={index} className="col-lg-2 col-4 mt-3">
                  <img src={`images/${i.img}`} className="img-fluid w-75" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default TrackingPartnersHome;
