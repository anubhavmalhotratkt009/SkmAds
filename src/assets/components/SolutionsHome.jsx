import React from "react";
import "../../index.css";
import { motion } from "framer-motion";

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
          style={{ color: "#232e6c" }}
        >
          Our
          <span
            className="about-con-header mt-4"
            style={{
              display: "inline-table",
            }}
          >
            &nbsp;Solutions
            <motion.hr
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ type: "tween", duration: 1.5 }}
              style={{
                width: "100%",
                borderBottom: "15px solid #05518c",
                marginTop: "-30px",
                opacity: 0.5,
              }}
            />
          </span>
        </h1>
        <p
          className="inner-solu  py-3 text-center"
          style={{ color: "#7a7a7a" }}
        >
          We unleash your business potential by maximising the innovation.
        </p>

        <div className="d-flex justify-content-center mt-4">
          <div className="col-lg-11 row justify-content-center gap-5">
            {solutionsDetails?.map((sol, i) => {
              return (
                <div
                  key={i}
                  className="card bg-white col-lg-3 col-10 p-0 col rounded-5 border-white shadow-sm"
                >
                  <img
                    src={`images/${sol.img}`}
                    className="img-fluid w-100 rounded-top"
                  />
                  <div className="container p-3">
                    <span className="fw-bold bg-con w-25 p-2 rounded">
                      SKMADS
                    </span>

                    <h5 className="fw-bold mt-3">{sol.title}</h5>

                    <p className="text-muted sol-desc">{sol.desc}</p>

                    <a href="/SkmAds/about" style={{ textDecoration: "none" }}>
                      <p className="fw-bold" style={{ color: "#05518c" }}>
                        EXPLORE
                        <i className="fa-solid fa-chevron-right fw-bold ms-2"></i>
                      </p>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <h6
          className="text-center fw-semibold sol-inner-des py-5"
          id="inner-sol"
          style={{ color: "#05518c" }}
        >
          TAKE THE RIGHT STEP , DO BIG THINGS
        </h6>

        <div className="d-flex justify-content-center">
          <div className="col-lg-10 col-10 row justify-content-center pb-5">
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder  sol-extra-header d-flex flex-column justify-content-center align-items-center">
                33+
                <motion.hr
                  initial={{ width: "0%" }}
                  whileInView={{ width: "40%" }}
                  transition={{ type: "tween", duration: 1.5 }}
                  style={{
                    width: "100%",
                    borderBottom: "12px solid #05518c",
                    marginTop: "-25px",
                    opacity: 0.7,
                  }}
                  className="hr-tag"
                />
              </h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                GLOBAL ADVERTISERS
              </h6>
            </div>
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder  sol-extra-header d-flex flex-column justify-content-center align-items-center">
                4000+
                <motion.hr
                  initial={{ width: "0%" }}
                  whileInView={{ width: "70%" }}
                  transition={{ type: "tween", duration: 1.5 }}
                  style={{
                    width: "100%",
                    borderBottom: "12px solid #05518c",
                    marginTop: "-25px",
                    opacity: 0.7,
                  }}
                  className="hr-tag"
                />
              </h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                CAMPAIGNS
              </h6>
            </div>
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder  sol-extra-header d-flex flex-column justify-content-center align-items-center">
                2.5Mn+
                <motion.hr
                  initial={{ width: "0%" }}
                  whileInView={{ width: "70%" }}
                  transition={{ type: "tween", duration: 1.5 }}
                  style={{
                    width: "100%",
                    borderBottom: "12px solid #05518c",
                    marginTop: "-25px",
                    opacity: 0.7,
                  }}
                  className="hr-tag"
                />
              </h1>
              <h6
                className="text-center sol-inner-des fw-semibold"
                style={{ color: "#05518c" }}
              >
                CONVERSIONS
              </h6>
            </div>
            <div className="col col-lg-3 text-center">
              <h1 className="fw-bolder  sol-extra-header d-flex flex-column justify-content-center align-items-center">
                30+
                <motion.hr
                  initial={{ width: "0%" }}
                  whileInView={{ width: "40%" }}
                  transition={{ type: "tween", duration: 1.5 }}
                  style={{
                    width: "100%",
                    borderBottom: "12px solid #05518c",
                    marginTop: "-25px",
                    opacity: 0.7,
                  }}
                  className="hr-tag"
                />
              </h1>
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
