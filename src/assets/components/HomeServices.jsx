import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./HomeAbout.css";
const servicesDetails = [
  {
    title: "Programmatic Buying",
    class: "lqd-icn-ess icon-lqd-presentation",
    desc: "Proprietary performance distribution platform for programmatic buying for performance campaigns.",

    img: "https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-1.jpg",
    newBg: "#eaeff4",
  },
  {
    title: "Media Buying",
    class: "lqd-icn-ess icon-lqd-mobile",
    desc: "We do plan for your brand to achieve results from all the channels including social media.",

    img: "https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg",

    newBg: "#f2ebe9",
  },
  {
    title: "User Acquisition",
    class: "lqd-icn-ess icon-lqd-user",
    desc: "Multi-Channel user acquisition technology to help you get  unique users.",

    img: "https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-3.jpg",

    newBg: "#eaeff4",
  },
  {
    title: "Transparency",
    class: "lqd-icn-ess icon-lqd-tools",
    desc: "Proactive approach with compliant traffic allows brand safety and transparency to advertisers.",

    img: "https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-1.jpg",

    newBg: "#f2ebe9",
  },
  {
    title: "Data Analysis",
    class: "fa-solid fa-database",
    desc: "Analyzing massive amounts of data to quickly identify opportunities and take advantage of it.",

    img: "https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg",
    newBg: "#eaeff4",
  },
  {
    title: "Explicit Targeting",
    class: "lqd-icn-ess icon-lqd-target",
    desc: "Customized targeting by zip, gender, id and other parameters according to your campaign requirement.",

    img: "https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-3.jpg",

    newBg: "#f2ebe9",
  },
];

const HomeServices = () => {
  let sliderRef = useRef(null);
  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    style: {
      display: "flex",
      justifyContent: "center",
    },
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section
        className="lqd-section services pt-5 pb-4 snipcss-Octoh"
        id="features"
        style={{ backgroundColor: "#fff" }}
      >
        <div className="absolute mb-0 top-0 z-0 max-w-full module-shape">
          <figure
            id="lqd-draw-shape-851c9d9"
            className="lqd-draw-shape"
            data-lqd-draw-shape="true"
            data-draw-shape-options='{"drawSVG": "0% 0%", "stagger" : 0 , "start": "top bottom", "end": "center 20%", "scrub" : 1 , "ease": "linear"}'
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="255.64"
              height="182.773"
              viewBox="0 0 255.64 182.773"
            >
              <path
                d="M629.327,2793.022s26.615,148.038,71.511,142.649c13.427-2.278,22.262-11.867,28.131-22.554,8-14.569,9.938-31.107,9.938-31.107s29.991,80.066,62.334,80.06,27.3-44.1,27.3-44.1,9.277,42.023,49.372,50.767"
                transform="translate(-625.844 -2789.539)"
                fill="none"
                stroke="#ff5125"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={6}
                style={{
                  strokeDashoffset: 0,
                  strokeDasharray: "408.458px, 69.4338px",
                }}
              ></path>
            </svg>
          </figure>
        </div>
        <div className="container">
          <div className="row">
            <div
              className="col col-12 ca-initvalues-applied lqd-animations-done"
              data-custom-animations="true"
              data-ca-options='{"animationTarget": ".lqd-split-chars .lqd-chars .split-inner, .lqd-adv-txt-fig", "duration" : 1100 , "delay" : 20 , "ease": "expo.out", "initValues": {"y": "85px", "rotationZ" : 10} , "animations": {"y": "0px", "rotationZ" : 0}}'
            >
              <div className="d-flex flex-wrap position-relative w-full justify-between items-start">
                <div className="ld-fancy-heading position-relative mask-text">
                  <h2
                    className="ld-fh-element position-relative lqd-split-chars mb-0/75em split-text-applied"
                    data-split-text="true"
                    data-split-options='{"type": "chars, words"}'
                  >
                    <div
                      className="split-unit lqd-words style-xPbM9"
                      id="style-xPbM9"
                    >
                      <span className="split-inner">
                        <div
                          className="split-unit lqd-chars lqd-unit-animation-done style-PdZP4"
                          id="style-PdZP4"
                        >
                          <span className="split-inner5">Our Services</span>
                        </div>
                      </span>
                    </div>
                  </h2>
                </div>
                <div
                  id="services-carousel-nav-container"
                  className="carousel-nav-appended"
                >
                  <div className="carousel-nav carousel-nav-right carousel-nav-floated">
                    <button
                      className="flickity-button flickity-prev-next-button previous"
                      type="button"
                      aria-label="Previous"
                      onClick={previous}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height="13.4"
                        viewBox="0 0 16 13.4"
                      >
                        <path
                          d="M9.3,1.3,7.9,2.7,12.2,7H0V9H12.2L7.9,13.3l1.4,1.4L16,8Z"
                          transform="translate(16 14.7) rotate(180)"
                        ></path>
                      </svg>
                    </button>
                    <button
                      className="flickity-button flickity-prev-next-button next"
                      type="button"
                      aria-label="Next"
                      onClick={next}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={16}
                        height="13.4"
                        viewBox="0 0 16 13.4"
                      >
                        <path d="M9.3,13.4,7.9,12l4.3-4.3H0v-2H12.2L7.9,1.4,9.3,0,16,6.7Z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="col-lg-10 col-11">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {servicesDetails.map((ser, index) => {
                return (
                  <div className="w-90" key={index}>
                    <div
                      className="py-4 rounded-1 d-flex flex-column align-items-center services-home-con col-12"
                      style={{ backgroundColor: `${ser.newBg}` }}
                    >
                      <div className="ld-fancy-heading position-relative snipcss0-12-80-81">
                        <h4 className="ld-fh-element position-relative text-20 mb-0/25em snipcss0-13-81-82">
                          {ser.title}
                        </h4>
                      </div>
                      <div className="ld-fancy-heading position-relative snipcss0-12-80-83">
                        <p className="ld-fh-element position-relative text-15 mb-1em snipcss0-13-83-84"></p>
                      </div>
                      <div className="w-230 lqd-imggrp-single block position-relative snipcss0-12-80-85">
                        {/* <div className="lqd-imggrp-img-container d-inline-flex position-relative align-items-center justify-content-center snipcss0-13-85-86">
                          <figure className="w-full position-relative rounded-circle snipcss0-14-86-87">
                            <img
                              className="rounded-circle snipcss0-15-87-88"
                              width={458}
                              height={602}
                              src={ser.img}
                              alt="services"
                            />
                          </figure>
                        </div> */}
                        <div className="my-4">
                          <i className={`${ser.class} icon-services`} />
                        </div>
                        <p
                          className="mb-5 slider-desc"
                          style={{ fontSize: "13px" }}
                        >
                          {ser.desc}
                        </p>
                      </div>
                      <div className="divider w-full snipcss0-12-80-89">
                        <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                      </div>
                      <hr
                        className="w-100"
                        style={{ marginTop: "1px solid #e0e0e0" }}
                      />
                      <a
                        href="/SkmAds/services"
                        className="z-10 btn btn-underlined  btn-icon-right text-black before:bg-black snipcss0-12-80-91"
                        data-lity="#contact-modal"
                      >
                        <span
                          data-text="Know More"
                          className="btn-txt snipcss0-13-91-92"
                          x
                        >
                          Know More
                        </span>
                      </a>
                      <a
                        href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                        className="block lqd-overlay d-flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                        data-fresco-group="true"
                        id="style-q4e75"
                      ></a>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeServices;
