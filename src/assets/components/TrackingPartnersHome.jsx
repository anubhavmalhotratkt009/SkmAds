import React from "react";

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
        <h4 className="fw-bolder tracking-header">OUR TRACKING PARTNERS</h4>
        <div className="d-flex justify-content-center">
          <div className="col-lg-9 d-flex mt-3 flex-wrap">
            {imagesDetails.map((i) => {
              return (
                <div className="col-lg-2 col-4 mt-3">
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
