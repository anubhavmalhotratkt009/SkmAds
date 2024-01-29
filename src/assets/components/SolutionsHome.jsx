import React from "react";
import "../../index.css";

const solutionsDetails = [
  {
    title: "SKMADS MOBILE",
    desc: "At SKMADS, our Mobile Advertising solutions are designed to help app developers acquire high-quality, engaged users.",
    img: "solutionshome1.webp",
  },
  {
    title: "SKMADS CONVERT",
    desc: "At SKMADS, our Performance-Based Advertising solutions are designed to help brands acquire new qualified leads and convert prospects into loyal customers.",
    img: "solutionshome2.webp",
  },
  {
    title: "SKMADS TARGETING",
    desc: "SKMADS programmatic advertising solutions are powered by our Target business unit. With our extensive network of supply-side platforms (SSPs) and demand-side platforms (DSPs), we can access a vast inventory of advertising opportunities across the web and mobile apps.",
    img: "solutionshome3.webp",
  },
];

const SolutionsHome = () => {
  return (
    <>
      <div className="solutions-home-con">
        <h1
          className="text-center fw-bold solutions-header"
          style={{ color: "#05518c" }}
        >
          Our Solutions
        </h1>
        <p className="fs-6  mt-3 text-center" style={{ color: "#7a7a7a" }}>
          We unleash your business potential by maximising the innovation.
        </p>

        <div className="d-flex justify-content-center mt-4">
          <div className="col-lg-12 row justify-content-center gap-4">
            {solutionsDetails?.map((sol) => {
              return (
                <div className="card bg-white col-lg-3 col-12 p-0 col rounded-5 border-white shadow-sm">
                  <img
                    src={`src/images/${sol.img}`}
                    className="img-fluid w-100 rounded-top"
                  />
                  <div className="container p-3">
                    <span className="fw-bold bg-con w-25 p-2 rounded">
                      SKMADS
                    </span>

                    <h5 className="fw-bold mt-3">{sol.title}</h5>

                    <p className="text-muted sol-desc">{sol.desc}</p>

                    <a>
                      <p className="fw-bold" style={{ color: "#05518c" }}>
                        EXPLORE
                        <i class="fa-solid fa-chevron-right fw-bold ms-2"></i>
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h6
          className="text-center fw-semibold sol-inner-des"
          id="inner-sol"
          style={{ color: "#05518c" }}
        >
          TAKE THE RIGHT STEP , DO BIG THINGS
        </h6>

        <div className="d-flex justify-content-center mt-4">
          <div className="col-lg-10 row justify-content-center">
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder sol-extra-header">33+</h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                GLOBAL ADVERTISERS
              </h6>
            </div>
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder sol-extra-header">4000+</h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                CAMPAIGNS
              </h6>
            </div>
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder sol-extra-header">2.5Mn+</h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                CONVERSIONS
              </h6>
            </div>
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder sol-extra-header">30+</h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                MEDIA BUYERS
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SolutionsHome;
