import React, { useState } from "react";
import Banner from "../../../public/images/banner.webp";
import Particle from "./Particle";
import { motion } from "framer-motion";

import "../../index.css";

const HeroContainer = React.memo(() => {
  return (
    <div className="d-flex hero-con justify-content-center align-items-center ">
      <div className="col-lg-10 d-flex container main-con-hero">
        <Particle />
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 0.7 }}
          transition={{ type: "tween", duration: 0.8 }}
          className="col-lg-6 col-12 col-md-5 d-flex justify-content-center hero-inner-1"
        >
          <div className="d-flex row con-1">
            <h1 className="hero-text-con">
              <div>
                <span className="hero-text">Unleash your brand's</span>
              </div>
              <div>
                <span className="hero-text">creativity with</span>
              </div>
              <div>
                <span>
                  <mark className="lqd-highlight d-flex flex-row">
                    <div>
                      <span className="hero-text ">
                        SKMADS&nbsp;
                        <hr className="skmads-text" />
                      </span>
                    </div>
                    <div>
                      <span className="hero-text">- Crafting</span>
                    </div>
                  </mark>
                </span>
              </div>
              <div>
                <span className="hero-text">compelling ads that</span>
              </div>
              <div>
                <span className="hero-text">convert!</span>
              </div>
            </h1>

            <section style={{ zIndex: "99" }}>
              <div>
                <div>
                  <div className="d-flex gap-5 mt-5 hero-btn-con">
                    <div className="col-lg-6 col-8">
                      <a href="/SkmAds/contact">
                        <button
                          id="hero-btn33"
                          className="hero-btn mt-5 p-0"
                          onMouseEnter={() => setShow(true)}
                          onMouseLeave={() => setShow(!show)}
                        >
                          <span className="hero-txt">Start your campaign </span>
                        </button>
                      </a>
                    </div>
                    <div className="col-lg-6 ">
                      <img
                        src="https://modernagency.liquid-themes.com/elementor/wp-content/uploads/2021/07/asset-11.svg"
                        width="120"
                        className="hero-btn-img"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </motion.div>
        <div className="col-lg-6 col-md-10 col-12 hero-inner-2">
          <img src={Banner} className="img-fluid ban-1" />
        </div>
      </div>
    </div>
  );
});

export default HeroContainer;
