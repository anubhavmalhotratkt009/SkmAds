import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "./SolutionsHome.css";
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
  };
  return (
    <>
      <section
        className="lqd-section services pt-50 pb-40 snipcss-Octoh"
        id="features"
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
              <div className="flex flex-wrap relative w-full justify-between items-start">
                <div className="ld-fancy-heading relative mask-text">
                  <h2
                    className="ld-fh-element relative lqd-split-chars mb-0/75em split-text-applied"
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
                          <span className="split-inner" style={{}}>
                            Creative Services
                          </span>
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
          <div className="w-75">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="w-90">
                <div className="pt-20 pb-25 rounded-10 flex flex-col items-center bg-green-200 snipcss0-11-79-80 snipcss-K7j5D">
                  <div className="ld-fancy-heading relative snipcss0-12-80-81">
                    <h4 className="ld-fh-element relative text-20 mb-0/25em snipcss0-13-81-82">
                      Branding Strategy
                    </h4>
                  </div>
                  <div className="ld-fancy-heading relative snipcss0-12-80-83">
                    <p className="ld-fh-element relative text-15 mb-1em snipcss0-13-83-84">
                      Mobile Application
                    </p>
                  </div>
                  <div className="w-230 lqd-imggrp-single block relative snipcss0-12-80-85">
                    <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center snipcss0-13-85-86">
                      <figure className="w-full relative rounded-full snipcss0-14-86-87">
                        <img
                          className="rounded-full snipcss0-15-87-88"
                          width={458}
                          height={602}
                          src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg"
                          alt="services"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="divider w-full snipcss0-12-80-89">
                    <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                  </div>
                  <a
                    href="#contact-modal"
                    className="z-10 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-black before:bg-black snipcss0-12-80-91"
                    data-lity="#contact-modal"
                  >
                    <span
                      data-text="Nos valeurs"
                      className="btn-txt snipcss0-13-91-92"
                    >
                      Nos valeurs
                    </span>
                    <span className="btn-icon snipcss0-13-91-93">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-arrow-forward snipcss0-14-93-94"
                      ></i>
                    </span>
                  </a>
                  <a
                    href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                    className="block lqd-overlay flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                    data-fresco-group="true"
                    id="style-q4e75"
                  ></a>
                </div>
              </div>
              <div className="w-90">
                <div className="pt-20 pb-25 rounded-10 flex flex-col items-center bg-green-200 snipcss0-11-79-80 snipcss-K7j5D">
                  <div className="ld-fancy-heading relative snipcss0-12-80-81">
                    <h4 className="ld-fh-element relative text-20 mb-0/25em snipcss0-13-81-82">
                      Branding Strategy
                    </h4>
                  </div>
                  <div className="ld-fancy-heading relative snipcss0-12-80-83">
                    <p className="ld-fh-element relative text-15 mb-1em snipcss0-13-83-84">
                      Mobile Application
                    </p>
                  </div>
                  <div className="w-230 lqd-imggrp-single block relative snipcss0-12-80-85">
                    <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center snipcss0-13-85-86">
                      <figure className="w-full relative rounded-full snipcss0-14-86-87">
                        <img
                          className="rounded-full snipcss0-15-87-88"
                          width={458}
                          height={602}
                          src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg"
                          alt="services"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="divider w-full snipcss0-12-80-89">
                    <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                  </div>
                  <a
                    href="#contact-modal"
                    className="z-10 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-black before:bg-black snipcss0-12-80-91"
                    data-lity="#contact-modal"
                  >
                    <span
                      data-text="Nos valeurs"
                      className="btn-txt snipcss0-13-91-92"
                    >
                      Nos valeurs
                    </span>
                    <span className="btn-icon snipcss0-13-91-93">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-arrow-forward snipcss0-14-93-94"
                      ></i>
                    </span>
                  </a>
                  <a
                    href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                    className="block lqd-overlay flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                    data-fresco-group="true"
                    id="style-q4e75"
                  ></a>
                </div>
              </div>
              <div className="w-90">
                <div className="pt-20 pb-25 rounded-10 flex flex-col items-center bg-green-200 snipcss0-11-79-80 snipcss-K7j5D">
                  <div className="ld-fancy-heading relative snipcss0-12-80-81">
                    <h4 className="ld-fh-element relative text-20 mb-0/25em snipcss0-13-81-82">
                      Branding Strategy
                    </h4>
                  </div>
                  <div className="ld-fancy-heading relative snipcss0-12-80-83">
                    <p className="ld-fh-element relative text-15 mb-1em snipcss0-13-83-84">
                      Mobile Application
                    </p>
                  </div>
                  <div className="w-230 lqd-imggrp-single block relative snipcss0-12-80-85">
                    <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center snipcss0-13-85-86">
                      <figure className="w-full relative rounded-full snipcss0-14-86-87">
                        <img
                          className="rounded-full snipcss0-15-87-88"
                          width={458}
                          height={602}
                          src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg"
                          alt="services"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="divider w-full snipcss0-12-80-89">
                    <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                  </div>
                  <a
                    href="#contact-modal"
                    className="z-10 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-black before:bg-black snipcss0-12-80-91"
                    data-lity="#contact-modal"
                  >
                    <span
                      data-text="Nos valeurs"
                      className="btn-txt snipcss0-13-91-92"
                    >
                      Nos valeurs
                    </span>
                    <span className="btn-icon snipcss0-13-91-93">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-arrow-forward snipcss0-14-93-94"
                      ></i>
                    </span>
                  </a>
                  <a
                    href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                    className="block lqd-overlay flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                    data-fresco-group="true"
                    id="style-q4e75"
                  ></a>
                </div>
              </div>
              <div className="w-90">
                <div className="pt-20 pb-25 rounded-10 flex flex-col items-center bg-green-200 snipcss0-11-79-80 snipcss-K7j5D">
                  <div className="ld-fancy-heading relative snipcss0-12-80-81">
                    <h4 className="ld-fh-element relative text-20 mb-0/25em snipcss0-13-81-82">
                      Branding Strategy
                    </h4>
                  </div>
                  <div className="ld-fancy-heading relative snipcss0-12-80-83">
                    <p className="ld-fh-element relative text-15 mb-1em snipcss0-13-83-84">
                      Mobile Application
                    </p>
                  </div>
                  <div className="w-230 lqd-imggrp-single block relative snipcss0-12-80-85">
                    <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center snipcss0-13-85-86">
                      <figure className="w-full relative rounded-full snipcss0-14-86-87">
                        <img
                          className="rounded-full snipcss0-15-87-88"
                          width={458}
                          height={602}
                          src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg"
                          alt="services"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="divider w-full snipcss0-12-80-89">
                    <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                  </div>
                  <a
                    href="#contact-modal"
                    className="z-10 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-black before:bg-black snipcss0-12-80-91"
                    data-lity="#contact-modal"
                  >
                    <span
                      data-text="Nos valeurs"
                      className="btn-txt snipcss0-13-91-92"
                    >
                      Nos valeurs
                    </span>
                    <span className="btn-icon snipcss0-13-91-93">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-arrow-forward snipcss0-14-93-94"
                      ></i>
                    </span>
                  </a>
                  <a
                    href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                    className="block lqd-overlay flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                    data-fresco-group="true"
                    id="style-q4e75"
                  ></a>
                </div>
              </div>
              <div className="w-90">
                <div className="pt-20 pb-25 rounded-10 flex flex-col items-center bg-green-200 snipcss0-11-79-80 snipcss-K7j5D">
                  <div className="ld-fancy-heading relative snipcss0-12-80-81">
                    <h4 className="ld-fh-element relative text-20 mb-0/25em snipcss0-13-81-82">
                      Branding Strategy
                    </h4>
                  </div>
                  <div className="ld-fancy-heading relative snipcss0-12-80-83">
                    <p className="ld-fh-element relative text-15 mb-1em snipcss0-13-83-84">
                      Mobile Application
                    </p>
                  </div>
                  <div className="w-230 lqd-imggrp-single block relative snipcss0-12-80-85">
                    <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center snipcss0-13-85-86">
                      <figure className="w-full relative rounded-full snipcss0-14-86-87">
                        <img
                          className="rounded-full snipcss0-15-87-88"
                          width={458}
                          height={602}
                          src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg"
                          alt="services"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="divider w-full snipcss0-12-80-89">
                    <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                  </div>
                  <a
                    href="#contact-modal"
                    className="z-10 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-black before:bg-black snipcss0-12-80-91"
                    data-lity="#contact-modal"
                  >
                    <span
                      data-text="Nos valeurs"
                      className="btn-txt snipcss0-13-91-92"
                    >
                      Nos valeurs
                    </span>
                    <span className="btn-icon snipcss0-13-91-93">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-arrow-forward snipcss0-14-93-94"
                      ></i>
                    </span>
                  </a>
                  <a
                    href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                    className="block lqd-overlay flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                    data-fresco-group="true"
                    id="style-q4e75"
                  ></a>
                </div>
              </div>
              <div className="w-90">
                <div className="pt-20 pb-25 rounded-10 flex flex-col items-center bg-green-200 snipcss0-11-79-80 snipcss-K7j5D">
                  <div className="ld-fancy-heading relative snipcss0-12-80-81">
                    <h4 className="ld-fh-element relative text-20 mb-0/25em snipcss0-13-81-82">
                      Branding Strategy
                    </h4>
                  </div>
                  <div className="ld-fancy-heading relative snipcss0-12-80-83">
                    <p className="ld-fh-element relative text-15 mb-1em snipcss0-13-83-84">
                      Mobile Application
                    </p>
                  </div>
                  <div className="w-230 lqd-imggrp-single block relative snipcss0-12-80-85">
                    <div className="lqd-imggrp-img-container inline-flex relative items-center justify-center snipcss0-13-85-86">
                      <figure className="w-full relative rounded-full snipcss0-14-86-87">
                        <img
                          className="rounded-full snipcss0-15-87-88"
                          width={458}
                          height={602}
                          src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/service-2.jpg"
                          alt="services"
                        />
                      </figure>
                    </div>
                  </div>
                  <div className="divider w-full snipcss0-12-80-89">
                    <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                  </div>
                  <a
                    href="#contact-modal"
                    className="z-10 btn btn-underlined border-thin btn-icon-right btn-hover-reveal text-black before:bg-black snipcss0-12-80-91"
                    data-lity="#contact-modal"
                  >
                    <span
                      data-text="Nos valeurs"
                      className="btn-txt snipcss0-13-91-92"
                    >
                      Nos valeurs
                    </span>
                    <span className="btn-icon snipcss0-13-91-93">
                      <i
                        aria-hidden="true"
                        className="lqd-icn-ess icon-ion-ios-arrow-forward snipcss0-14-93-94"
                      ></i>
                    </span>
                  </a>
                  <a
                    href="./assets/images/demo/start-hub-8/services/services-2.jpg"
                    className="block lqd-overlay flex z-3 fresco snipcss0-12-80-95 style-q4e75"
                    data-fresco-group="true"
                    id="style-q4e75"
                  ></a>
                </div>
              </div>
            </Slider>
          </div>
        </div>
      </section>
    </>
  );
};

export default SolutionsHome;
