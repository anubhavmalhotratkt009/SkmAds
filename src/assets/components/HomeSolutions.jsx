import React, { useState } from "react";
import "./HomeSolutions.css";
import { Link } from "react-router-dom";

const HomeSolutions = ({ bg }) => {
  const [skmTypes, setSkmTypes] = useState([
    {
      id: 1,
      title: "SKMADS Mobile",
      desc: "At SKMADS, our Mobile Advertising solutions are designed to help app developers acquire high-quality, engaged users.",
      show: false,
      class: "fa-solid fa-mobile",
    },
    {
      id: 2,
      title: "SKMADS Convert",
      desc: `SKMADS'Performance-Based Advertising drives lead acquisition and customer conversion, fostering loyalty and expanding brands' reach.`,
      show: false,
      class: "fa-solid fa-rotate-right",
    },
    {
      id: 3,
      title: "SKMADS Targeting",
      desc: "SKMADS' programmatic ad solutions leverage Target's network of SSPs and DSPs for extensive web and mobile inventory access.",
      show: false,
      class: "fa-solid fa-bullseye",
    },
  ]);
  const showBtn = (id) => {
    setSkmTypes((prevSkmTypes) =>
      prevSkmTypes.map((skm) => {
        if (skm.id === id) {
          return { ...skm, show: true };
        } else {
          return skm;
        }
      })
    );
  };

  const notShowBtn = (id) => {
    setSkmTypes((prevSkmTypes) =>
      prevSkmTypes.map((skm) => {
        if (skm.id === id) {
          return { ...skm, show: false };
        } else {
          return skm;
        }
      })
    );
  };

  return (
    <>
      <section
        className="lqd-section design-services pt-5 pb-4 ca-initvalues-applied lqd-animations-done snipcss-2jZQn"
        id="services"
        style={{ background: bg ? bg : "#fff" }}
      >
        <div className="position-relative top-0">
          <div className="ld-particles-container position-relative w-100">
            <div
              className="ld-particles-inner lqd-overlay d-flex pointer-events-auto"
              id="lqd-particle-design-services"
            >
              <canvas
                className="particles-js-canvas-el style-J9j6G"
                width={0}
                height={0}
                id="style-J9j6G"
              ></canvas>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="w-450 d-flex flex-column position-relative items-center max-w-100 text-center mx-auto">
              <div className="ld-fancy-heading position-relative w-auto  animation-element lqd-unit-animation-done">
                <h6 className="ld-fh-element position-relative text-12 py-2 px-3 rounded-4  bg-gray  uppercase tracking-1 text-slate-500 m-0">
                  How we Advertise
                </h6>
              </div>
              <div className="ld-fancy-heading position-relative mask-text">
                <h2 className="ld-fh-element position-relative lqd-highlight-classic lqd-highlight-grow-bottom lqd-highlight-reset-onhover lqd-split-lines mb-1 mt-1 split-text-applied is-in-view">
                  <div
                    className="split-unit lqd-lines lqd-unit-animation-done style-jwcoH"
                    id="style-jwcoH"
                  >
                    <span className="split-inner5">
                      Our&nbsp;
                      <mark className="lqd-highlight">
                        <span
                          className="lqd-highlight-txt"
                          style={{ zIndex: "2" }}
                        >
                          Solutions
                        </span>
                        <span
                          className="bottom-0 left-0 lqd-highlight-inner bg-purple-100 style-9pqpl"
                          style={{ zIndex: "1" }}
                          id="style-9pqpl"
                        ></span>
                      </mark>
                    </span>
                  </div>
                </h2>
              </div>
              <div className="position-absolute -top-5percent module-shape">
                <div className="lqd-imggrp-single d-block position-relative">
                  <div className="lqd-imggrp-img-container d-inline-flex position-relative items-center justify-content-center">
                    <figure className="w-100 position-relative lqd-unit-animation-done">
                      <img
                        width={67}
                        height={73}
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape.svg"
                        alt="shape"
                      />
                    </figure>
                  </div>
                </div>
              </div>
              <div className="ld-fancy-heading position-relative mask-text ld">
                <p
                  className="ld-fh-element position-relative lqd-split-lines text-17 leading-1/3em split-text-applied"
                  data-split-text="true"
                  data-split-options='{"type": "lines"}'
                ></p>
                <div
                  className="split-unit lqd-lines lqd-unit-animation-done style-1sYgN"
                  id="style-1sYgN"
                >
                  <span className="text-muted text-18 text-wrap">
                    We unleash your business potential by maximising the
                    innovation.
                  </span>
                </div>
                <div
                  className="split-unit lqd-lines lqd-unit-animation-done style-JJSQl"
                  id="style-JJSQl"
                >
                  <span className="text-muted text-18"></span>
                </div>
                <div
                  className="split-unit lqd-lines lqd-unit-animation-done style-B92Od"
                  id="style-B92Od"
                >
                  <span className="text-muted text-18"></span>
                </div>
                <p></p>
              </div>
            </div>

            <div className="d-flex col-12 flex-row d-flex gap-3 flex-wrap  module-iconbo mt-1 mb-4 justify-content-center">
              {skmTypes.map((skm, index) => {
                return (
                  <div
                    className="max-w-100 col-lg-4  col-10 animation-element lqd-unit-animation-done"
                    key={index}
                    onMouseEnter={() => showBtn(skm.id)}
                    onMouseLeave={() => notShowBtn(skm.id)}
                  >
                    <div className="m-0 py-5 pe-5 ps-4 rounded-2 text-start lqd-iconbox-scale transition-all">
                      <div className="iconbox d-flex flex-grow-1 position-relative flex-column iconbox-default iconbox-contents-show-onhover hide-target">
                        <div
                          className="ld-slideelement-visible style-lhFZy"
                          id="style-lhFZy"
                        >
                          <div
                            className="ld-slideelement-visible-inner style-Cr65X"
                            id="style-Cr65X"
                          >
                            <div className="iconbox-icon-wrap">
                              <div className="w-35 text-36 mb-40 text-36 mb-40 iconbox-icon-container d-inline-flex text-primary">
                                <i className={skm.class}></i>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="ld-slideelement-visible style-cPz6v"
                          id="style-cPz6v"
                        >
                          <div
                            className="ld-slideelement-visible-inner style-t9zow"
                            id="style-t9zow"
                          >
                            <h3 className="text-22 mb-0/75em lqd-iconbox-heading">
                              {skm.title}
                            </h3>
                          </div>
                        </div>
                        <div className="contents">
                          <div
                            className="ld-slideelement-visible style-fcIJl"
                            id="style-fcIJl"
                          >
                            <div
                              className="ld-slideelement-visible-inner style-9UAhv"
                              id="style-9UAhv"
                            >
                              <p className="text-15 leading-1/25em">
                                {skm.desc}
                              </p>
                            </div>
                          </div>

                          {skm.show ? (
                            <div
                              className="ld-slideelement-hidden style-CfLgd"
                              id="style-CfLgd"
                              style={{
                                transform: skm.show
                                  ? "scale(1.02)"
                                  : "translateY(0%)",
                                transition: "transform .5s ease-in-out",
                              }}
                            >
                              <div
                                className="ld-slideelement-hidden-inner style-kYhvt mt-3"
                                id="style-kYhvt"
                                style={{ marginLeft: "-10px" }}
                              >
                                <a href="/SkmAds/solutions" className="btn">
                                  <span
                                    className="btn-txt mt-4 fw-bold"
                                    style={{ fontSize: "14px" }}
                                    data-text="Explore"
                                  >
                                    Explore
                                  </span>
                                  <span className="btn-icon ms-1">
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          ) : (
                            <div
                              className="ld-slideelement-hidden style-CfLgd"
                              id="style-CfLgd"
                            >
                              <div
                                className="ld-slideelement-hidden-inner style-kYhvt mt-3"
                                id="style-kYhvt"
                              >
                                <a href="SkmAds/solutions" className="btn" a>
                                  <span
                                    className="btn-txt mt-4 fw-bold"
                                    style={{ fontSize: "14px" }}
                                    data-text="Explore"
                                  >
                                    Explore
                                  </span>
                                  <span className="btn-icon ms-1">
                                    <i className="fa-solid fa-arrow-right"></i>
                                  </span>
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="col col-12 text-center mt-4">
              <div className="w-100 d-flex flex-wrap items-center justify-content-center transition-all">
                <div className="module-text-border border-1 rounded-2 border-black-10 transition-all ld-fancy-heading position-relative hover:inner-text-black animation-element lqd-unit-animation-done">
                  <p className="ld-fh-element position-relative inner-text-black py-2 px-2 m-0 text-slate-300">
                    Still have a question?
                    <a
                      href="tel:+6531581448"
                      style={{ textDecoration: "none" }}
                      className="text-slate-300 inner-text-black"
                      target="_blank"
                    >
                      <u>&nbsp;call us</u>
                    </a>
                    &nbsp;or
                    <Link
                      to="/Contact"
                      className="text-slate-300 inner-text-black"
                    >
                      <u>&nbsp;submit a form.</u>
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeSolutions;
