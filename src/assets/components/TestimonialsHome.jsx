import React, { useRef } from "react";
import Slider from "react-slick";
import Marquee from "react-fast-marquee";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Testimonials.css";

const testimonialsDetails = [
  {
    title: "Rey Johnson",
    desc: "Working with SKMADS has been a game changer for our business. Their targeted advertising solutions have helped us reach the right audiences and achieve better results",
    class: "justify-content-start",
  },
  {
    title: "Dean Smith",
    desc: "SKMADS's team is knowledgeable, responsive, and transparent. Their data analysis services have provided us with valuable insights to optimize our advertising strategies and drive growth",
    class: "justify-content-end",
  },
  {
    title: "Kristen Josheph",
    desc: "SKMADS advertising solutions have helped us improve our brand visibility and reach new audiences. Their in-app advertising dashboard is user-friendly and provides detailed metrics to track ad performance.",
    class: "justify-content-start",
  },
];

const TestimonialsHome = () => {
  let sliderRef = useRef(null);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    style: {
      display: "flex",
      justifyContent: "center",
      gap: "20px",
    },
  };
  return (
    <>
      <div
        className="pb-5 d-flex flex-column justify-content-center"
        style={{ backgroundColor: "#f9f8f3" }}
      >
        <div className="d-flex flex-column align-items-center px-5 snipcss-VioC9">
          <div className="ld-fancy-heading relative mask-text">
            <p
              className="ld-fh-element relative lqd-split-lines text-18 mb-1/5em text-slate-400 split-text-applied"
              data-split-text="true"
              data-split-options='{"type": "lines"}'
            ></p>
            <div
              className="split-unit lqd-lines lqd-unit-animation-done style-5KMqK"
              id="style-5KMqK"
            >
              <span className="split-inner fs-5" style={{}}>
                Trusted by these amazing companies
              </span>
            </div>
            <p></p>
          </div>
          <div className="ld-fancy-heading relative mask-text">
            <h2
              className="mb-0 ld-fh-element relative lqd-split-lines split-text-applied"
              data-split-text="true"
              data-split-options='{"type": "lines"}'
              style={{}}
            >
              <div
                className="split-unit lqd-lines lqd-unit-animation-done style-ZMBIF"
                id="style-ZMBIF"
              >
                <span className="split-inner" style={{}}>
                  Testimonials
                </span>
              </div>
            </h2>
          </div>
          <div className="ld-fancy-heading relative mask-text">
            <h2
              className="ld-fh-element relative lqd-highlight-classic lqd-highlight-grow-left lqd-split-lines h2 mb-0/75em split-text-applied"
              data-split-text="true"
              data-split-options='{"type": "lines"}'
              style={{}}
            >
              <div
                className="split-unit lqd-lines lqd-unit-animation-done style-LDaWZ"
                id="style-LDaWZ"
              >
                <span className="split-inner" style={{}}>
                  <span className="lqd-adv-txt-item">People</span>
                  <span className="relative z-3 lqd-adv-txt-item">
                    <span className="relative d-inline-flex rounded-circle vertical-top -mr-30 ms-3">
                      <img
                        className="lqd-adv-txt-fig w-55 border-5 border-white rounded-circle"
                        decoding="async"
                        width={58}
                        height={58}
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-1.jpg"
                        alt="testimonials avatar"
                      />
                    </span>
                  </span>
                  <span className="relative z-2 lqd-adv-txt-item">
                    <span className="relative d-inline-flex rounded-circle vertical-top -mr-35">
                      <img
                        className="lqd-adv-txt-fig w-55 border-5 border-white rounded-circle"
                        decoding="async"
                        width={58}
                        height={58}
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-2.jpg"
                        alt="testimonials avatar"
                      />
                    </span>
                  </span>
                  <span className="relative z-1 lqd-adv-txt-item">
                    <span className="relative d-inline-flex rounded-circle vertical-top">
                      <img
                        className="lqd-adv-txt-fig w-55 border-5 border-white rounded-circle"
                        decoding="async"
                        width={58}
                        height={58}
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-1.jpg"
                        alt="testimonials avatar"
                      />
                    </span>
                  </span>
                  <span className="lqd-adv-txt-item">are talking.</span>
                </span>
              </div>
            </h2>
          </div>
          <div
            className="d-flex py-3 px-4 align-items-center bg-gray-100 rounded-1 animation-element sm:w-100 lqd-unit-animation-done"
            style={{}}
          >
            <div className="max-w-100 w-30 lqd-imggrp-single d-block position-relative">
              <div className="lqd-imggrp-img-container d-inline-flex position-relative align-items-center justify-center">
                <figure
                  className="w-100 relative lqd-unit-animation-done"
                  style={{}}
                >
                  <img
                    width={30}
                    height={30}
                    src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/g2.png"
                    alt="g2 shape"
                  />
                </figure>
              </div>
            </div>
            <div
              className="ml-10 ld-fancy-heading position-relative animation-element lqd-unit-animation-done"
              style={{}}
            >
              <p className="ld-fh-element position-relative text-14 fw-normal m-0 text-slate-600">
                Trustpilot reviews
              </p>
            </div>
            <div
              className="star-rating pl-10 text-slate-600 animation-element lqd-unit-animation-done"
              title="5/5"
              style={{}}
            >
              <i className="star-full">★</i>
              <i className="star-full">★</i>
              <i className="star-full">★</i>
              <i className="star-full">★</i>
              <i className="star-full">★</i>
              <span className="sr-only">5/5</span>
            </div>
          </div>
        </div>
        <div className="d-flex justify-content-center">
          <div className="mt-5 col-10">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              <div className="w-90 lqd-testi position-relative lqd-testi-style-1 flex flex-col-reverse rounded-3 py-4 px-4 bg-orange-100 module-content">
                <div className=" d-flex flex-wrap justify-content-between mb-1">
                  <div className="lqd-testi-details flex items-center py-2 px-4">
                    <figure className="lqd-testi-avatar rounded-circle overflow-hidden mr-1/5em me-3">
                      <img
                        decoding="async"
                        className="rounded-full"
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/testi-avatar-2.png"
                        alt="ritamjahed"
                      />
                    </figure>
                    <div className="pl-1/5">
                      <h3 className="text-orange-600 text-18">ritamjahed</h3>
                      <h4 className="font-weight-light text-orange-600 text-16">
                        Envato CEO
                      </h4>
                    </div>
                  </div>
                </div>{" "}
                <div className="lqd-testi-quote text-orange-600">
                  <blockquote>
                    <p className="text-18">
                      Incredible theme and fantastic support! Every time I had a
                      question, they got back to you so quickly and fixed your
                      problem! Im so impressed! Thank you guys again for your
                      precious help! Your customer support is amazing!
                    </p>
                  </blockquote>
                </div>
              </div>

              <div className="w-90 lqd-testi relative lqd-testi-style-1 flex flex-col-reverse lqd-testi-shadow-xs lqd-testi-details-lg lqd-testi-quote-18 lqd-testi-avatar-72 rounded-3 py-4 px-4 bg-orange-100 module-content snipcss-aShUp">
                <div className="lqd-testi-info flex flex-wrap justify-between mb-1em">
                  <div className="lqd-testi-details flex items-center">
                    <figure className="lqd-testi-avatar rounded-full overflow-hidden mr-1/5em me-3">
                      <img
                        decoding="async"
                        className="rounded-full"
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/testi-avatar-2.png"
                        alt="ritamjahed"
                      />
                    </figure>
                    <div className="pl-1/5">
                      <h3 className="text-orange-600 text-18">ritamjahed</h3>
                      <h4 className="font-weight-light text-orange-600 text-16">
                        Envato CEO
                      </h4>
                    </div>
                  </div>
                </div>{" "}
                <div className="lqd-testi-quote text-orange-600">
                  <blockquote>
                    <p className="text-18">
                      Incredible theme and fantastic support! Every time I had a
                      question, they got back to you so quickly and fixed your
                      problem! Im so impressed! Thank you guys again for your
                      precious help! Your customer support is amazing!
                    </p>
                  </blockquote>
                </div>
              </div>
            </Slider>
          </div>
        </div>

        <div className="d-flex flex-column mt-5">
          <div>
            <span className="split-inner snipcss-WxzCR fs-4 fw-bold mt-5">
              Trusted by global brands.&nbsp;
              <span className="text-slate-400 fs-4 fw-bold">
                Join Millions of customers around the globe.
              </span>
            </span>
          </div>
          <div className="py-5">
            <Marquee
              speed={50} // Speed of the marquee (Optional)
              loop={0}
              autoFill={true}
              style={{
                height: 50, // Your own styling (Optional)
              }}
            >
              <div
                className="d-flex mt-2 "
                style={{
                  gap: "250px",
                }}
              >
                <img src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/client-amazon.svg" />
                <img src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/client-amd-logo.svg" />
                <img src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/client-dropcam.svg" />
                <img src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/client-marvel.svg" />
                <img
                  src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/client-nike.svg"
                  style={{ marginRight: "150px" }}
                />
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsHome;
