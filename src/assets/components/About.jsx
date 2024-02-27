import React from "react";
import "./Common.css";
import "./HeroContainer.css";
import "./HomeSolutions.css";
import "./Testimonials.css";
import Accordion from "react-bootstrap/Accordion";

const betterDetails = [
  {
    title: "Brand safety",
    desc: "Your brand's safety is our top priority for building healthy relationship",
    class: "fa-solid fa-lock",
    newBg: "rgb(244 244 244)",
  },
  {
    title: "Our Priority",
    desc: "Our main goal is user retention & engagement for all the campaigns we run to get more ROI",
    class: "fa-regular fa-user",
    newBg: "rgb(244 244 244)",
  },
  {
    title: "Anti-Fraud ",
    desc: "Our in-house anti-fraud technology works in background to fight fraud.",
    class: "fa-solid fa-shield-halved",
    newBg: "rgb(244 244 244)",
  },
  {
    title: "Auto Optimization",
    desc: "Our in-house auto optimization tool taking care of CVR and EVR.",
    class: "fa-solid fa-chart-line",
    newBg: "rgb(244 244 244)",
  },
];

const About = () => {
  return (
    <>
      <div className="main-bg">
        <div className="titlebar-inner2 d-flex flex-column ">
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
                <h1>About Us</h1>
                {/* <div className="wave w-100"></div> */}
                <p className="leading-20 text-gray-400">
                  SKMADS provides targeted and transparent advertising solutions
                  to help businesses grow
                </p>
              </div>
            </div>
          </div>
        </div>
        <section
          className="elementor-section bg-light elementor-top-section py-5 elementor-element elementor-element-df71ffa elementor-section-content-middle elementor-section-boxed elementor-section-height-default snipcss-fKgND"
          data-id="df71ffa"
          data-element_type="section"
          data-settings='{"background_background":"classic"}'
        >
          <div className="elementor-container col-lg-10 col-11 elementor-column-gap-default ">
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-ef807eb"
              data-id="ef807eb"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  className="elementor-element elementor-element-99e6870 elementor-widget elementor-widget-hub_fancy_heading"
                  data-id="99e6870"
                  data-element_type="widget"
                  data-widget_type="hub_fancy_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      id="ld-fancy-heading-634ee22577365"
                      className="ld-fancy-heading pos-rel"
                    >
                      <h2
                        className="ld-fh-element d-inline-block pos-rel text-dark  lqd-highlight-grow-left h2 text-start"
                        style={{
                          fontSize: "40px",
                        }}
                      >
                        Inspiration, innovation, and opportunities.
                      </h2>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-7b26c1a elementor-widget elementor-widget-hub_fancy_heading"
                  data-id="7b26c1a"
                  data-element_type="widget"
                  data-widget_type="hub_fancy_heading.default"
                >
                  <div className="elementor-widget-container">
                    <div
                      id="ld-fancy-heading-634ee22578cd4"
                      className="ld-fancy-heading pos-rel"
                    >
                      <p className="ld-fh-element d-inline-block pos-rel  lqd-highlight-classic lqd-highlight-grow-left p text-start">
                        SKMADS drives advertising success through dynamic
                        strategies and creative brilliance instantly.
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className="elementor-element elementor-element-624da75 elementor-widget elementor-widget-ld_accordion"
                  data-id="624da75"
                  data-element_type="widget"
                  data-widget_type="ld_accordion.default"
                >
                  <Accordion flush>
                    <Accordion.Item eventKey="item1">
                      <Accordion.Header>WHO WE ARE</Accordion.Header>
                      <Accordion.Body className="text-start">
                        SKMADS is a leading advertising company that specializes
                        in providing in-app and web advertising services through
                        our powerful dashboards. Our team of skilled
                        professionals is committed to delivering exceptional
                        results, and we pride ourselves on offering innovative
                        and tailored solutions to meet our clients' unique
                        needs.​ With years of experience in the industry, SKMADS
                        has established itself as a trusted partner for
                        businesses looking to enhance their online presence and
                        reach their target audience. Our in-house team of
                        experts possesses extensive knowledge in creating and
                        managing effective advertising campaigns that drive
                        results. At SKMADS, we believe in the power of
                        collaboration, and we work closely with our clients to
                        understand their goals and objectives, ensuring that
                        every campaign is designed to deliver maximum impact.
                        Our focus on quality and attention to detail has earned
                        us a reputation for excellence in the industry, and we
                        are committed to maintaining that reputation through
                        every project we undertake.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="item2">
                      <Accordion.Header>IMPACT</Accordion.Header>
                      <Accordion.Body className="text-start">
                        SKMADS leads the way in advertising, specializing in
                        in-app and web services through our robust dashboards.
                        With a team of skilled professionals dedicated to
                        delivering exceptional results, we pride ourselves on
                        offering innovative solutions tailored to each client's
                        unique needs, ensuring advertising excellence every step
                        of the way.
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="item3">
                      <Accordion.Header>CREATIVITY</Accordion.Header>
                      <Accordion.Body className="text-start">
                        At SKMADS, we're dedicated to empowering advertising
                        success. Our expertise lies in providing in-app and web
                        advertising services through dynamic dashboards. With a
                        committed team of professionals, we offer tailored
                        solutions that drive exceptional results, ensuring our
                        clients achieve advertising excellence with every
                        campaign.
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </div>
              </div>
            </div>
            <div
              className="elementor-column elementor-col-50 elementor-top-column elementor-element elementor-element-e6731a7"
              data-id="e6731a7"
              data-element_type="column"
            >
              <div className="elementor-widget-wrap elementor-element-populated">
                <div
                  data-parallax="true"
                  data-parallax-options='{"ease":["linear"],"start":"top bottom","end":"bottom+=0px top"}'
                  data-parallax-from='{"y":"60px"}'
                  data-parallax-to='{"y":"-75px"}'
                  className="elementor-element elementor-element-5b8d58d elementor-widget elementor-widget-ld_fancy_image style-U9ktw"
                  data-id="5b8d58d"
                  data-element_type="widget"
                  data-widget_type="ld_fancy_image.default"
                  id="style-U9ktw"
                >
                  <div className="elementor-widget-container">
                    <div
                      className="lqd-imggrp-single d-block pos-rel"
                      data-shadow-style={4}
                    >
                      <div className="lqd-imggrp-img-container d-inline-flex pos-rel align-items-center justify-content-center">
                        <figure className="w-100 pos-rel loaded">
                          <img
                            width={392}
                            height={674}
                            src="https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x.jpg"
                            className="attachment-full size-full ld-lazyload entered loaded"
                            alt=""
                            itemProp="image"
                            data-src="https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x.jpg"
                            data-srcset="https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x.jpg 592w, https://companyhub.liquid-themes.com/elementor/wp-content/uploads/2019/12/img-1@2x-264x300.jpg 264w"
                            data-sizes="(max-width: 592px) 100vw, 592px"
                            data-aspect="0.87833827893175"
                            data-ll-status="loaded"
                          />
                        </figure>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column mt-5">
            <div className="col-lg-10 col-11 d-flex flex-column my-5">
              <div className="col titlebar-col col-xl-12 col-lg-12 col-12 text-start">
                <h3 className="team-header2">How it Works</h3>
                {/* <div className="wave w-100"></div> */}
              </div>
              <ul className="process">
                <li className="process__item">
                  <span className="process__number">1</span>
                  <span className="process__title">Initial Consultation </span>
                  <span className="process__subtitle">
                    The team conducts an initial consultation with the client to
                    understand their business objectives and advertising needs
                  </span>
                </li>

                <li className="process__item">
                  <span className="process__number">2</span>
                  <span className="process__title">Proposal Development</span>
                  <span className="process__subtitle">
                    SKMADS develops a detailed proposal outlining the
                    advertising solutions that best fit the client's needs.
                  </span>
                </li>

                <li className="process__item">
                  <span className="process__number">3</span>
                  <span className="process__title">Review / Approval</span>
                  <span className="process__subtitle">
                    The proposal is reviewed and discussed with the client to
                    ensure that it meets their expectations
                  </span>
                </li>

                <li className="process__item">
                  <span className="process__number">4</span>
                  <span className="process__title">Implement / Monitor</span>
                  <span className="process__subtitle">
                    Once the proposal is approved, we implement the advertising
                    campaign and monitor closely.
                  </span>
                </li>
              </ul>
            </div>
            <div className="col-lg-10 col-11 d-flex flex-column my-5">
              <div className="col titlebar-col col-xl-12 col-lg-12 col-12 text-start">
                <h3 className="team-header2">Why We're Better</h3>
                {/* <div className="wave w-100"></div> */}
              </div>
              <div className="d-flex flex-row justify-content-center mt-3">
                <div className="col-12 d-flex flex-row gap-4  process-con">
                  {betterDetails.map((better, index) => {
                    return (
                      <div className="w-90" key={index}>
                        <div
                          className="py-4  h-100 rounded-1 d-flex flex-column align-items-center services-home-con ab-con shadow-sm"
                          style={{ backgroundColor: "transparent" }}
                        >
                          <div className="ld-fancy-heading position-relative snipcss0-12-80-81">
                            <h4 className="ld-fh-element position-relative text-20 mb-0/25em snipcss0-13-81-82"></h4>
                          </div>
                          <div className="my-4">
                            <i
                              className={`${better.class}`}
                              style={{ color: "#003c71", fontSize: "60px" }}
                            />
                          </div>
                          <div className="ld-fancy-heading position-relative snipcss0-12-80-83">
                            <p
                              className="ld-fh-element position-relative fs-4 mb-1em snipcss0-13-83-84 fw-bold"
                              style={{ color: "#003c71" }}
                            >
                              {better.title.toUpperCase()}
                            </p>
                          </div>
                          <div className="w-230 lqd-imggrp-single block position-relative snipcss0-12-80-85">
                            <p className="mb-5 px-4 process__subtitle ">
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
            <div className=" main-bg">
              {" "}
              <div className="d-flex flex-column align-items-center pt-5 my-5">
                <div className="container titlebar-container">
                  <div className="titlebar-container d-flex flex-column justify-content-center align-items-center">
                    <div className="col titlebar-col col-xl-6 col-lg-8 col-12 text-center">
                      <h3 className="team-header">Meet the Team</h3>
                      {/* <div className="wave w-100"></div> */}
                    </div>
                    <div className="d-flex col-lg-10 abt-main gap-4 mt-4">
                      <div className="col-lg-6 z-1 d-flex flex-column">
                        <img
                          src="images/ceo.webp"
                          className="img-fluid rounded-2 abt-image"
                        />
                        <h2 className="split-inner19 mt-3">
                          Sanjay Kumar Meena
                        </h2>
                        <p
                          className=" fw-bold text-dark text-center"
                          style={{ fontSize: "14px" }}
                        >
                          FOUNDER & CEO
                        </p>
                      </div>
                      <div className="col-lg-6 d-flex flex-column justify-content-center ">
                        <img
                          src="images/cmo.png"
                          className="img-fluid rounded-2 abt-image"
                        />
                        <h2 className="split-inner19 mt-3">
                          Chandrabhan Meena
                        </h2>
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
        </section>
      </div>
    </>
  );
};

export default About;
