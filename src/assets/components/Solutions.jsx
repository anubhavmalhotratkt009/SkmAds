import React, { Fragment, useState } from "react";
import HomeSolutions from "./HomeSolutions.jsx";

import "./Common.css";
import "./HeroContainer.css";
import "./HomeSolutions.css";
import "./Testimonials.css";
import "./Tracking.css";

const aboutTypes = [
  {
    header: "SKMADS Mobile",
    title:
      "SKMADS  has its  Mobile Advertising solutions that are designed to help app developers acquire high-quality, engaged users.",
    desc: ` Utilizing cutting-edge proprietary tracking technology alongside our trusted third-party partners, we meticulously orchestrate your campaigns across our extensive network of thousands of traffic sources. Our adept team, with a wealth of experience in in-app and mobile web advertising, is dedicated to optimizing campaigns in real-time to precisely meet your KPIs. We employ a diverse range of platforms to ensure unparalleled reach and impactful engagement with your target audience. Furthermore, our commitment to customization ensures that each mobile advertising campaign is meticulously tailored to your unique business needs, enabling you to effectively connect and captivate your audience on their preferred mobile devices`,
    img: "j-3.png",
    left: false,
  },
  {
    header: "SKMADS Convert",
    title:
      "SKMADS  Performance-Based Advertising drives lead acquisition and customer conversion, fostering loyalty and expanding brands' reach.",
    desc: `Our Performance-Based Advertising solutions are designed to help brands acquire new qualified leads and convert prospects into loyal customers.

    Our team specializes in developing customized cross-channel campaigns that reach your customers on the media they're consuming, leveraging our extended network of partners to deliver targeted, effective advertising. We use advanced tracking and optimization tools to ensure that your campaigns are achieving the desired results, whether that's increased leads, sales, or other performance metrics. With SKM Ads, you can trust that your advertising dollars are being used effectively and efficiently to drive real results for your business.`,
    img: "j-2.png",

    left: true,
  },
  {
    header: "SKMADS Targeting",
    title:
      "SKMADS  programmatic ad solutions leverage Target's network of SSPs and DSPs for extensive web and mobile inventory access.",
    desc: `SKMADS programmatic advertising, powered by our Target unit, offers comprehensive solutions with access to a vast network of SSPs and DSPs for web and mobile ad inventory. Our data-driven approach enables precise audience targeting, real-time optimization, and ongoing performance analysis, ensuring maximum campaign success across millions of users. Whether you aim to drive brand awareness, increase website traffic, or boost sales, SKMADS delivers unparalleled efficiency and accuracy, empowering you to achieve your advertising goals effectively.`,
    img: "j-1.png",
    left: false,
  },
];

const Solutions = () => {
  return (
    <>
      <div className="main-bg pb-5">
        <div className="titlebar-inner d-flex flex-column ">
          <div className="d-flex flex-row position-relative">
            <div className="col-3 position-absolute">
              <img
                width={369}
                height={135}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path.svg"
                alt="shape"
              />
            </div>

            <div className="col-3">
              <img
                width={57}
                height={54}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141907.svg"
                alt="shape"
              />
            </div>
            <div className="col-3">
              <img
                width={49}
                height={14}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141908.svg"
                alt="shape"
              />
            </div>
            <div className="col-3">
              <img
                width={21}
                height={68}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141909.svg"
                alt="shape"
              />
            </div>
          </div>
          <div className="container titlebar-container">
            <div className="row titlebar-container justify-center">
              <div className="col titlebar-col col-xl-6 col-lg-8 col-12 text-center">
                <h1>Solutions</h1>
                {/* <div className="wave w-100"></div> */}
                <p className="leading-20 text-gray-400">
                  SKMADS provides targeted and transparent advertising solutions
                  to help businesses grow
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-row mt-3 gap-5  sol-inner">
          <div className="col-lg-12 d-flex justify-content-center flex-column gap-5">
            {aboutTypes.map((ab, index) => {
              return (
                <Fragment key={index}>
                  {ab.left ? (
                    <>
                      <div className="d-flex flex-row sol-main-con sol-main-inn2 justify-content-center">
                        <div className="col-lg-6 col-11">
                          <div className="w-100">
                            <img
                              src={`./images/${ab.img}`}
                              style={{ opacity: ".9" }}
                              className=" img-fluid"
                            />
                          </div>
                        </div>
                        <div className="col-lg-6 col-11 py-5 px-5 align-items-center text-start sol-main-inn">
                          <div className="d-flex flex-wrap ca-initvalues-applied lqd-animations-done solutions-inner">
                            <div className="d-flex flex-wrap module-content px-3">
                              <div className="m-0 mb-4 rounded-1 bg-slate-200 ld-fancy-heading position-relative animation-element lqd-unit-animation-done">
                                <h6 className=" ld-fh-element d-inline-block position-relative bg-gray py-2 px-3 rounded-5 text-12 -tracking-0/5 text-slate-500 text-uppercase">
                                  {ab.header}
                                </h6>
                              </div>
                              <div className="ld-fancy-heading position-relative mb-3">
                                <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-24 is-in-view lqd-unit-animation-done text-center">
                                  <mark className="lqd-highlight">
                                    <span className="lqd-highlight-txt">
                                      {ab.title.split(" ").at(0)}
                                    </span>
                                    <span
                                      className="bottom-10 left-0 lqd-highlight-inner bg-purple-100 style-TgRvE"
                                      id="style-TgRvE"
                                    >
                                      <svg
                                        className="lqd-highlight-brush-svg lqd-highlight-brush-svg-2"
                                        width={233}
                                        height={13}
                                        viewBox="0 0 233 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        preserveAspectRatio="none"
                                      >
                                        <path
                                          d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"
                                          fill="#7150E8"
                                        />
                                      </svg>
                                    </span>
                                  </mark>
                                  {ab.title.split(" ").slice(1).join(" ")}
                                  &nbsp;
                                </h2>
                              </div>
                              <div className="mb-30 iconbox d-flex flex-grow-1  iconbox-circle iconbox-icon-ripple lqd-unit-animation-done">
                                <p className="text-13 leading-16 m-0 lqd-iconbox-heading ">
                                  {ab.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      <div className="d-flex flex-row sol-main-con">
                        <div className="col-lg-6 py-5 px-5 align-items-center text-start sol-main-inn">
                          <div className="d-flex flex-wrap ca-initvalues-applied lqd-animations-done solutions-inner">
                            <div className="d-flex flex-wrap px-3 module-content">
                              <div className="m-0 mb-4 rounded-1 bg-slate-200 ld-fancy-heading  animation-element lqd-unit-animation-done">
                                <h6 className=" ld-fh-element d-inline-block  bg-gray py-2 px-3 rounded-5 text-12 -tracking-0/5 text-slate-500 text-uppercase">
                                  {ab.header}
                                </h6>
                              </div>
                              <div className="ld-fancy-heading position-relative mb-3 ks">
                                <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-24 is-in-view lqd-unit-animation-done text-center">
                                  <mark className="lqd-highlight">
                                    <span className="lqd-highlight-txt">
                                      {ab.title.split(" ").at(0)}
                                    </span>
                                    <span
                                      className="bottom-10 left-0 lqd-highlight-inner bg-purple-100 style-TgRvE"
                                      id="style-TgRvE"
                                    >
                                      <svg
                                        className="lqd-highlight-brush-svg lqd-highlight-brush-svg-2"
                                        width={233}
                                        height={13}
                                        viewBox="0 0 233 13"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                        preserveAspectRatio="none"
                                      >
                                        <path
                                          d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"
                                          fill="#7150E8"
                                        />
                                      </svg>
                                    </span>
                                  </mark>
                                  {ab.title.split(" ").slice(1).join(" ")}
                                  &nbsp;
                                </h2>
                              </div>
                              <div className="mb-30 iconbox d-flex flex-grow-1 position-relative iconbox-circle iconbox-icon-ripple lqd-unit-animation-done">
                                <p className="text-13 leading-16 m-0 lqd-iconbox-heading">
                                  {ab.desc}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-lg-6 sol-main-inn2 justify-content-center">
                          <div className="w-100">
                            <img
                              src={`./images/${ab.img}`}
                              style={{ opacity: ".9" }}
                              className="img-fluid"
                            />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
