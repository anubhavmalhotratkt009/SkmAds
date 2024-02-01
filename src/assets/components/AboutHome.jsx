import React from "react";
import { motion } from "framer-motion";
import About1 from "../../../public/images/abouthome1.webp";
import About2 from "../../../public/images/abouthome2.webp";
import About3 from "../../../public/images/abouthome3.webp";
import "../../index.css";

const AboutHome = () => {
  return (
    <>
      <div className="about-home-con ps-5 gap-5">
        <motion.div
          initial={{ y: 0 }}
          transition={{ type: "tween", duration: 1.2 }}
          whileInView={{ y: -80 }}
          className="col-lg-6 px-5 align-items-center img-about "
        >
          <div className="row">
            <div className="col-lg-7">
              <img src={About1} className="img-fluid rounded" />
            </div>

            <div className="col-lg-5 mt-3">
              <img src={About2} className="img-fluid rounded" />
            </div>
          </div>
          <div className="col-lg-8 d-flex justify-content-end w-100 mt-4">
            <img src={About3} className="img-fluid rounded w-75" />
          </div>
        </motion.div>

        <div className="col-lg-6 col-12 about-home-inner-2">
          <h1 className="about-con-header">
            About
            <span
              className="about-con-header mt-5"
              style={{
                display: "inline-table",
              }}
            >
              &nbsp;Company
              <motion.hr
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ type: "tween", duration: 1.5 }}
                style={{
                  width: "100%",
                  borderBottom: "15px solid #05518c",
                  marginTop: "-30px",
                  color: "#05518c",
                  opacity: 0.5,
                }}
              />
            </span>
          </h1>

          <p
            className="fs-5 fw-bold mt-3 about-header-inner"
            style={{ color: "#7a7a7a" }}
          >
            "SKMADS - Innovate. Advertise. Succeed."
          </p>
          <p className="fs-5 text-muted inner-desc-about mt-5">
            SKMADS is a leading advertising company that specializes in
            providing in-app and web advertising services through our powerful
            dashboards. Our team of skilled professionals is committed to
            delivering exceptional results, and we pride ourselves on offering
            innovative and tailored solutions to meet our clients' unique needs.
          </p>
          <a href="/SkmAds/about">
            <button className="hero-btn2 mt-5 " data-hover="More about us">
              <div>More about us</div>
            </button>
          </a>
        </div>
      </div>
    </>
  );
};

export default AboutHome;
