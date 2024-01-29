import React from "react";
import Banner from "../../images/banner.webp";
import "../../index.css";

const HeroContainer = () => {
  return (
    <div className="d-flex hero-con align-items-center container">
      <div className="col-lg-6 d-flex justify-content-end hero-inner-1">
        <div className="d-flex row col-lg-11 con-1">
          <h1 className="hero-text-con">
            <div>
              <span className="hero-text">Unleash your brand's</span>
            </div>
            <div>
              <span className="hero-text">creativity with</span>
            </div>
            <div>
              <span>
                <mark className="lqd-highlight ">
                  <span className="hero-text">SKMADS</span>
                  <span className="hero-text"> - Crafting</span>
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

          <section>
            <div>
              <div>
                <div className="d-flex gap-5 mt-5 hero-btn-con">
                  <a href="/contact">
                    <button className="hero-btn mt-5">
                      Start your campaign
                    </button>
                  </a>
                  <img
                    src="https://modernagency.liquid-themes.com/elementor/wp-content/uploads/2021/07/asset-11.svg"
                    width="150"
                    className="hero-btn-img"
                  />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="col-lg-6 hero-inner-2">
        <img src={Banner} className="img-fluid banner-1" />
      </div>
    </div>
  );
};

export default HeroContainer;
