import React from "react";
import "./Services.css";
import "./HeroContainer.css";
import "./AboutHome.css";
import "./Testimonials.css";
import TrackingPartnersHome from "./TrackingPartnersHome";

const betterDetails = [
  {
    title: "Brand safety",
    desc: "Your brand's safety is our top priority for building healthy relationship",
    class: "fa-solid fa-lock",
    newBg: "#eaeff4",
  },
  {
    title: "Our Priority",
    desc: "Our main goal is user retention & engagement for all the campaigns we run to get more ROI",
    class: "fa-regular fa-user",
    newBg: "#f2ebe9",
  },
  {
    title: "Anti-Fraud Mechanism",
    desc: "Our in-house anti-fraud technology works in background to fight fraud.",
    class: "fa-solid fa-shield-halved",
    newBg: "#eaeff4",
  },
  {
    title: "Auto Optimization",
    desc: "Our in-house auto optimization tool taking care of CVR and EVR.",
    class: "fa-solid fa-chart-line",
    newBg: "#f2ebe9",
  },
];

const processDetails = [
  {
    title: "01 / Consultation",
    desc: "SKMADS team conducts an initial consultation with the client to understand their business objectives and advertising needs. This includes identifying the target audience, budget, ad formats, and other relevant factors.",
  },
  {
    title: "02 / Proposal Development",
    desc: "Based on the consultation, SKMADS develops a detailed proposal outlining the advertising solutions that best fit the client's needs. This includes the advertising strategy, targeting options, ad formats, and budget.",
  },
  {
    title: "03 / Review and Approval",
    desc: "The proposal is reviewed and discussed with the client to ensure that it meets their expectations and requirements. Any adjustments or modifications are made to the proposal as needed until it is approved by the client.",
  },
  {
    title: "04 / Implementation and Monitoring",
    desc: "Once the proposal is approved, SKMADS implements the advertising campaign and monitors its performance closely. Regular reports are provided to the client to track ad performance and adjust the campaign as needed to achieve optimal results.",
  },
];

const teamDetails = [
  { name: "SANJAY KUMAR MEENA", designation: "Founder & CEO", img: "ceo.webp" },
  {
    name: "CHANDRABHAN MEENA",
    designation: "Chief Marketing Officer",
    img: "cmo.webp",
  },
];

const About = () => {
  return (
    <>
      <div className="main-bg">
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
                <h1>About Us</h1>
                {/* <div class="wave w-100"></div> */}
                <p class="leading-20 text-gray-400">
                  SKMADS provides targeted and transparent advertising solutions
                  to help businesses grow
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-row col-11">
          <div className="col-lg-6 d-flex justify-content-center flex-column ps-5 ms-5">
            {" "}
            <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-27 is-in-view lqd-unit-animation-done text-start">
              Who we are &nbsp;🏢
            </h2>
            <p className="text-17 mt-2 leading-16 m-0 lqd-iconbox-heading w-100  text-start">
              SKMADS is a leading advertising company that specializes in
              providing in-app and web advertising services through our powerful
              dashboards. Our team of skilled professionals is committed to
              delivering exceptional results, and we pride ourselves on offering
              innovative and tailored solutions to meet our clients' unique
              needs.​ With years of experience in the industry, SKMADS has
              established itself as a trusted partner for businesses looking to
              enhance their online presence and reach their target audience. Our
              in-house team of experts possesses extensive knowledge in creating
              and managing effective advertising campaigns that drive results.
              At SKMADS, we believe in the power of collaboration, and we work
              closely with our clients to understand their goals and objectives,
              ensuring that every campaign is designed to deliver maximum
              impact. Our focus on quality and attention to detail has earned us
              a reputation for excellence in the industry, and we are committed
              to maintaining that reputation through every project we undertake.
            </p>
          </div>
          <div className="col-lg-6">
            <img src="images/about-us.png" className="img-fluid" />
          </div>
        </div>
        <TrackingPartnersHome />

        <div className="d-flex flex-column justify-content-center align-items-center mt-5">
          <div className="col-lg-10 d-flex flex-column">
            <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-27 is-in-view lqd-unit-animation-done text-start">
              Why We're Better &nbsp;💡
            </h2>
            <div className="d-flex flex-row justify-content-center mt-3">
              <div className="col-12 d-flex flex-row gap-4">
                {betterDetails.map((better, index) => {
                  return (
                    <div className="w-90" key={index}>
                      <div
                        className="py-4  h-100 rounded-1 d-flex flex-column align-items-center services-home-con ab-con"
                        style={{ backgroundColor: `${better.newBg}` }}
                      >
                        <div className="ld-fancy-heading position-relative snipcss0-12-80-81">
                          <h4 className="ld-fh-element position-relative text-20 mb-0/25em snipcss0-13-81-82"></h4>
                        </div>
                        <div className="ld-fancy-heading position-relative snipcss0-12-80-83">
                          <p className="ld-fh-element position-relative text-15 mb-1em snipcss0-13-83-84 fw-bold">
                            {better.title}
                          </p>
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
                            <i
                              className={`${better.class} icon-services fs-1`}
                            />
                          </div>
                          <p className="mb-5 px-4" style={{ fontSize: "12px" }}>
                            {better.desc}
                          </p>
                        </div>
                        <div className="divider w-full snipcss0-12-80-89">
                          <span className="w-full my-25 border-top border-black-20 snipcss0-13-89-90"></span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column justify-content-center align-items-center mt-5 pb-5">
          <div className="col-lg-10 d-flex flex-column">
            <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-27 is-in-view lqd-unit-animation-done text-start">
              The Process &nbsp;⚙️
            </h2>
            <span className="text-start mt-3 d-flex flex-row gap-4">
              <li
                className="split-inner18  px-4 py-5 w-90 ab-con "
                style={{ backgroundColor: "#eaeff4" }}
              >
                {" "}
                <div className="d-flex justify-content-end">
                  <i class="fa-solid fa-arrow-right-arrow-left fs-1"></i>
                </div>
                1. Consultation: &nbsp;
                <br />
                <br />
                <span className="text00">
                  &nbsp; SKMADS team conducts an initial consultation with the
                  client to understand their business objectives and advertising
                  needs. This includes identifying the target audience, budget,
                  ad formats, and other relevant factors.
                </span>
              </li>
              <li
                className="split-inner18 px-4 py-5 w-90 ab-con "
                style={{ backgroundColor: "#f2ebe9" }}
              >
                {" "}
                <div className="d-flex justify-content-end">
                  <i class="fa-solid fa-arrow-right-arrow-left fs-1"></i>
                </div>
                2. Proposal Development:&nbsp;
                <br />
                <br />
                <span className="text00">
                  &nbsp; &nbsp; Based on the consultation, SKMADS develops a
                  detailed proposal outlining the advertising solutions that
                  best fit the client's needs. This includes the advertising
                  strategy, targeting options, ad formats, and budget.
                </span>
              </li>
              <li
                className="split-inner18 px-4 py-5 w-90 ab-con"
                style={{ backgroundColor: "#eaeff4" }}
              >
                <div className="d-flex justify-content-end">
                  <i class="fa-solid fa-arrow-right-arrow-left fs-1"></i>
                </div>
                3. Review and Approval:&nbsp;
                <br />
                <br />
                <span className="text00">
                  &nbsp; &nbsp;The proposal is reviewed and discussed with the
                  client to ensure that it meets their expectations and
                  requirements. Any adjustments or modifications are made to the
                  proposal as needed until it is approved.
                </span>
              </li>
              <li
                className="split-inner18 px-4 py-5 w-90 ab-con"
                style={{ backgroundColor: "#f2ebe9" }}
              >
                <div className="d-flex justify-content-end">
                  <i class="fa-solid fa-hourglass-end fs-1"></i>
                </div>
                4. Implementation and Monitoring: &nbsp;
                <br />
                <br />
                <span className="text00">
                  &nbsp;&nbsp; Once the proposal is approved, we implement the
                  advertising campaign and monitor its performance closely.
                  Regular reports are provided to the client .
                </span>
              </li>
            </span>
          </div>
        </div>
        <div id="banner2" className="py-5 main-bg">
          {" "}
          <div class="d-flex flex-column align-items-center pt-5">
            {/* <div className="d-flex flex-row position-relative">
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
            </div> */}
            <div class="container titlebar-container">
              <div class="titlebar-container d-flex flex-column align-items-center">
                <div class="col titlebar-col col-xl-6 col-lg-8 col-12 text-center">
                  <h1>Meet the Team</h1>
                  {/* <div class="wave w-100"></div> */}
                </div>
                <div className="d-flex col-lg-10 gap-4 mt-4">
                  <div className="col-lg-6 z-1 d-flex flex-column">
                    <img
                      src="images/ceo.webp"
                      className="img-fluid rounded-2"
                    />
                    <h2 className="split-inner19 mt-3">Sanjay Kumar Meena</h2>
                    <p
                      className=" fw-bold text-dark text-center"
                      style={{ fontSize: "14px" }}
                    >
                      FOUNDER & CEO
                    </p>
                  </div>
                  <div className="col-lg-6">
                    <img src="images/cmo.png" className="img-fluid rounded-2" />
                    <h2 className="split-inner19 mt-3">Chandrabhan Meena</h2>
                    <p
                      className=" fw-bold text-dark text-center"
                      style={{ fontSize: "14px" }}
                    >
                      Chief Marketing Officer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
