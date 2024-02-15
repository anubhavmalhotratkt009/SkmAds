import React, { Fragment, useState } from "react";
import AboutHome from "./AboutHome.jsx";

import "./Services.css";
import "./HeroContainer.css";
import "./AboutHome.css";
import "./Testimonials.css";

const servicesDetails = [
  {
    title: "Programmatic Buying",
    class: "lqd-icn-ess icon-lqd-presentation",
    desc: "Programmatic buying is an automated process of buying and selling advertising inventory in real-time through an online advertising exchange. It allows advertisers to more effectively target their desired audience, optimize their ad spend, and gain transparency and control over their ad campaigns.",
    highlights: [
      "Automated process of buying and selling advertising inventory in real-time",
      "Uses technology to analyze user behavior and target audience with greater precision",
      "Offers transparency and control over ad campaigns",
      "Optimizes ad spend and adjusts bidding strategies for maximum impact and ROI",
      "Leverages data and machine learning algorithms for better results in digital advertising",
    ],
    img: "ss-1.png",
    left: window.innerWidth > 1068 ? false : false,
  },
  {
    title: "Media Buying",
    class: "lqd-icn-ess icon-lqd-mobile",
    desc: "SKMADS provides expert media buying services to help businesses reach their target audience effectively. Our team has a deep understanding of the media landscape and can help clients navigate the complexities of media buying to achieve maximum impact. We work closely with clients to develop customized strategies that align with their objectives and budget constraints.",
    highlights: [
      "Expert media buying services to help businesses reach their target audience effectively",
      "Deep understanding of the media landscape to navigate the complexities of media buying",
      "Customized strategies to align with clients objectives and budget constraints",
      "Focus on maximizing impact and ROI for clients through effective media buying tactics.",
    ],
    img: "ss-2.png",
    left: window.innerWidth > 1068 ? true : false,
  },
  {
    title: "User Acquisition",
    class: "lqd-icn-ess icon-lqd-user",
    desc: "SKMADS offers user acquisition services to help businesses acquire high-quality users for their mobile apps or websites. Our team utilizes the latest techniques and tools to drive user acquisition, including targeted advertising campaigns, app store optimization, and social media marketing. We work closely with clients to understand their unique needs and goals, and develop customized user acquisition strategies to help them achieve success.",
    highlights: [
      "User acquisition services to help businesses acquire high-quality users for their mobile apps or websites",
      "Utilizes targeted advertising campaigns, app store optimization, and social media marketing techniques to drive user acquisition",
      "Customized strategies developed in close collaboration with clients to meet their unique needs and goals.",
    ],
    img: "ss-3.png",
    left: window.innerWidth > 1068 ? false : false,
  },
  {
    title: "Transparency",
    class: "lqd-icn-ess icon-lqd-tools",
    desc: "At SKMADS, we value transparency in our advertising solutions. We believe that transparency is essential to building trust with our clients and achieving the best results. Thats why we provide our clients with detailed reporting and insights into their advertising campaigns, including ad performance, audience engagement, and other key metrics.",
    highlights: [
      " Detailed reporting and insights provided to clients, including ad performance and audience engagement metrics",
      "Open communication and collaboration with clients to ensure they understand every aspect of their advertising campaigns",
      "Detailed reporting and insights provided to clients, including ad performance and audience engagement metrics",
    ],
    img: "ss-4.png",
    left: window.innerWidth > 1068 ? true : false,
  },
  {
    title: "Data Analysis",
    class: "fa-solid fa-database",
    desc: "SKMADS offers expert data analysis services to help businesses gain insights into the performance of their advertising campaigns. Our team utilizes the latest data analytics tools and techniques to extract valuable insights from advertising data, including audience behavior, ad performance, and other key metrics. We work closely with clients to provide actionable recommendations for optimizing their advertising strategies and achieving better results.",
    highlights: [
      "Expert data analysis services to gain insights into advertising campaign performance",
      "Utilizes latest data analytics tools and techniques to extract valuable insights from advertising data",
      "Provides actionable recommendations for optimizing advertising strategies and achieving better results",
    ],
    img: "ss-5.png",
    left: window.innerWidth > 1068 ? false : false,
  },
  {
    title: "Explicit Targeting",
    class: "lqd-icn-ess icon-lqd-target",
    desc: "Explicit targeting is a key feature of SKMADS advertising solutions. With explicit targeting, we enable businesses to target their advertising to specific audiences based on demographics, interests, behaviors, and other relevant factors. This allows businesses to reach the right people with the right message, increasing the effectiveness and impact of their advertising campaigns.",
    highlights: [
      "Explicit targeting is a key feature of SKM Ads advertising solutions",
      "Allows businesses to target their advertising to specific audiences based on demographics, interests, behaviors, and other relevant factors",
      "Helps increase the effectiveness and impact of advertising campaigns",
    ],
    img: "ss-6.png",
    left: window.innerWidth > 1068 ? true : false,
  },
];

const Services = () => {
  return (
    <>
      <div class="titlebar-inner d-flex flex-column">
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
        <div class="container titlebar-container">
          <div class="row titlebar-container justify-center">
            <div class="col titlebar-col col-xl-6 col-lg-8 col-12 text-center">
              <h1>Services</h1>
              {/* <div class="wave w-100"></div> */}
              <p class="leading-20 text-gray-400">
                SKMADS provides targeted and transparent advertising solutions
                to help businesses grow
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex flex-row mt-3 gap-5  sol-inner">
        <div className="col-lg-12 d-flex justify-content-center flex-column gap-5">
          {servicesDetails.map((ab, index) => {
            return (
              <Fragment key={index}>
                {ab.left ? (
                  <>
                    <div className="d-flex flex-row">
                      <div className="col-lg-6">
                        <div className="w-100">
                          <img
                            src={`./images/${ab.img}`}
                            style={{ opacity: ".9" }}
                            className=" img-fluid"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 py-5 px-5 align-items-center text-start">
                        <div className="d-flex flex-wrap ca-initvalues-applied lqd-animations-done solutions-inner">
                          <div className="d-flex flex-wrap module-content px-3">
                            <div className="m-0 mb-4 rounded-1 bg-slate-200 ld-fancy-heading position-relative animation-element lqd-unit-animation-done">
                              <h6 className=" ld-fh-element d-inline-block position-relative bg-gray py-2 px-3 rounded-5 text-12 -tracking-0/5 text-slate-500 text-uppercase">
                                {ab.header}
                              </h6>
                            </div>
                            <div className="ld-fancy-heading position-relative mb-3">
                              <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-26 is-in-view lqd-unit-animation-done text-center">
                                <mark
                                  className="lqd-highlight"
                                  style={{ background: "transparent" }}
                                >
                                  <span className="lqd-highlight-txt">
                                    {ab.title.split(" ").at(0)}
                                  </span>
                                  <span
                                    className="bottom-10 left-0 lqd-highlight-inner style-TgRvE"
                                    id="style-TgRvE"
                                  >
                                    <svg
                                      className="lqd-highlight-brush-svg lqd-highlight-brush-svg-2  w-100"
                                      height={13}
                                      viewBox="0 0 233 13"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      preserveAspectRatio="none"
                                      style={{ marginTop: "35px" }}
                                    >
                                      <path
                                        d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"
                                        fill="#7150E8"
                                      />
                                    </svg>
                                  </span>
                                </mark>
                                {ab.title.split(" ").slice(1).join(" ")}
                                &nbsp;🔔
                              </h2>
                            </div>
                            <div className="mb-30 iconbox d-flex flex-grow-1 position-relative iconbox-circle iconbox-icon-ripple lqd-unit-animation-done">
                              <div className="iconbox-icon-wrap me-2">
                                <div className="iconbox-icon-container inline-flex position-relative z-1 rounded-full text-24 w-30 h-30 text-accent bg-white shadow-md">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-circle text-success fs-6"
                                  />
                                </div>
                              </div>
                              <p className="text-17 leading-16 m-0 lqd-iconbox-heading ">
                                {ab.desc}
                              </p>
                            </div>
                            {ab.highlights.map((a, index) => (
                              <React.Fragment key={index}>
                                <h6 className="px-5 text-15 leading-16 mt-2 lqd-iconbox-heading">
                                  <i className="fa-regular fa-circle-check text-success"></i>{" "}
                                  &nbsp;{a}
                                </h6>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="d-flex flex-row">
                      <div className="col-lg-6 py-5 px-5 align-items-center text-start">
                        <div className="d-flex flex-wrap ca-initvalues-applied lqd-animations-done solutions-inner">
                          <div className="d-flex flex-wrap module-content px-3">
                            <div className="m-0 mb-4 rounded-1 bg-slate-200 ld-fancy-heading position-relative animation-element lqd-unit-animation-done">
                              <h6 className=" ld-fh-element d-inline-block position-relative bg-gray py-2 px-3 rounded-5 text-12 -tracking-0/5 text-slate-500 text-uppercase">
                                {ab.header}
                              </h6>
                            </div>
                            <div className="ld-fancy-heading position-relative mb-3">
                              <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-26 is-in-view lqd-unit-animation-done text-center">
                                <mark
                                  className="lqd-highlight"
                                  style={{ background: "transparent" }}
                                >
                                  <span className="lqd-highlight-txt">
                                    {ab.title.split(" ").at(0)}
                                  </span>
                                  <span
                                    className="bottom-10 left-0 lqd-highlight-inner style-TgRvE"
                                    id="style-TgRvE"
                                  >
                                    <svg
                                      className="lqd-highlight-brush-svg lqd-highlight-brush-svg-2  w-100"
                                      height={13}
                                      viewBox="0 0 233 13"
                                      xmlns="http://www.w3.org/2000/svg"
                                      aria-hidden="true"
                                      preserveAspectRatio="none"
                                      style={{ marginTop: "35px" }}
                                    >
                                      <path
                                        d="m.624 9.414-.312-2.48C0 4.454.001 4.454.002 4.454l.035-.005.102-.013.398-.047c.351-.042.872-.102 1.557-.179 1.37-.152 3.401-.368 6.05-.622C13.44 3.081 21.212 2.42 31.13 1.804 50.966.572 79.394-.48 113.797.24c34.387.717 63.927 2.663 84.874 4.429a1048.61 1048.61 0 0 1 24.513 2.34 641.605 641.605 0 0 1 8.243.944l.432.054.149.02-.318 2.479-.319 2.48-.137-.018c-.094-.012-.234-.03-.421-.052a634.593 634.593 0 0 0-8.167-.936 1043.26 1043.26 0 0 0-24.395-2.329c-20.864-1.76-50.296-3.697-84.558-4.413-34.246-.714-62.535.332-82.253 1.556-9.859.612-17.574 1.269-22.82 1.772-2.622.251-4.627.464-5.973.614a213.493 213.493 0 0 0-1.901.22l-.094.01-.028.004Z"
                                        fill="#7150E8"
                                      />
                                    </svg>
                                  </span>
                                </mark>
                                {ab.title.split(" ").slice(1).join(" ")}
                                &nbsp;🔔
                              </h2>
                            </div>
                            <div className="mb-30 iconbox d-flex flex-grow-1 position-relative iconbox-circle iconbox-icon-ripple lqd-unit-animation-done">
                              <div className="iconbox-icon-wrap me-2">
                                <div className="iconbox-icon-container inline-flex position-relative z-1 rounded-full text-24 w-30 h-30 text-accent bg-white shadow-md">
                                  <i
                                    aria-hidden="true"
                                    className="fa fa-circle text-success fs-6"
                                  />
                                </div>
                              </div>
                              <p className="text-17 leading-16 m-0 lqd-iconbox-heading ">
                                {ab.desc}
                              </p>
                            </div>
                            {ab.highlights.map((a, index) => (
                              <React.Fragment key={index}>
                                <p className="px-5 text-15 leading-16 mt-2 lqd-iconbox-heading">
                                  <i className="fa-regular fa-circle-check text-success"></i>{" "}
                                  &nbsp;{a}
                                </p>
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6">
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
    </>
  );
};

export default Services;
