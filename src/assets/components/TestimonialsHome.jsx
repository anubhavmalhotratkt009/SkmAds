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
    class: "bg-orange-100",
  },
  {
    title: "Dean Smith",
    desc: "SKMADS's team is knowledgeable, responsive, and transparent. Their data analysis services have provided us with valuable insights to optimize our advertising strategies and drive growth",
    class: "bg-lol",
  },
  {
    title: "Kristen Josheph",
    desc: "SKMADS advertising solutions have helped us improve our brand visibility and reach new audiences. Their in-app advertising dashboard is user-friendly and provides detailed metrics to track ad performance.",
    class: "bg-orange-100",
  },
];
const imagesDetails = [
  {
    img: "t-1.webp",
  },
  {
    img: "t-2.webp",
  },
  {
    img: "t-3.webp",
  },
  {
    img: "t-4.webp",
  },
  {
    img: "t-5.webp",
  },
  {
    img: "t-6.webp",
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
        style={{ backgroundColor: "#fff" }}
      >
        <div className="d-flex flex-column align-align-items-center px-5 snipcss-VioC9">
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
              <span
                className="split-inner  fs-6 fw-bold text-decoration-underline"
                style={{ color: "#c3c3c3" }}
              >
                {/* Trusted by many amazing people{" "} */}
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
                <span className="split-inner5" style={{}}>
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
                <span className="split-inner5 " style={{}}>
                  <span className="lqd-adv-txt-item1">People have</span>
                  <span className="relative z-3 lqd-adv-txt-item">
                    <span className="relative d-inline-flex rounded-circle vertical-top -mr-30 ms-3">
                      <img
                        className="lqd-adv-txt-fig w-55 border-5 border-white rounded-circle"
                        decoding="async"
                        width={58}
                        height={58}
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-2.jpg"
                        alt="testimonials avatar"
                        style={{ opacity: ".8", filter: "hue-rotate(665deg)" }}
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
                        style={{ opacity: ".8", filter: "hue-rotate(665deg)" }}
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
                        src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/Shape-avatar-2.jpg"
                        alt="testimonials avatar"
                        style={{ opacity: ".8", filter: "hue-rotate(665deg)" }}
                      />
                    </span>
                  </span>
                  <span className="lqd-adv-txt-item1">&nbsp;been talking.</span>
                </span>
              </div>
            </h2>
          </div>
        </div>
        <div className="d-flex justify-content-center mb-5">
          <div className="mt-1 col-10">
            <Slider
              ref={(slider) => {
                sliderRef = slider;
              }}
              {...settings}
            >
              {testimonialsDetails.map((test) => {
                return (
                  <div
                    className={`${test.class} w-90 lqd-testi position-relative lqd-testi-style-1 d-flex flex-column rounded-3 mb-3 py-4 px-4 module-content`}
                  >
                    <div className=" d-flex  justify-content-between mb-1">
                      <div className="lqd-testi-details d-flex align-items-center py-2 px-4">
                        <figure className="lqd-testi-avatar rounded-circle overflow-hidden mr-1/5em me-3">
                          <img
                            decoding="async"
                            className="rounded-full"
                            src="images/bq.jpeg"
                            alt="ritamjahed"
                          />
                        </figure>
                        <div className="pl-1/5">
                          <h3 className="text-orange-600 text-18">
                            {test.title}
                          </h3>
                          <h4 className="font-weight-light text-orange-600 text-16"></h4>
                        </div>
                      </div>
                    </div>{" "}
                    <div className="lqd-testi-quote text-orange-600">
                      <blockquote>
                        <p className="text-18">{test.desc}</p>
                      </blockquote>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>

        <div className="d-flex flex-column mt-2">
          <div>
            <h3
              class="ld-fh-element position-relative lqd-highlight-classic lqd-highlight-grow-bottom lqd-highlight-reset-onhover lqd-split-lines mb-1 mt-1 split-text-applied is-in-view"
              data-inview="true"
              data-transition-delay="true"
              data-delay-options='{"elements": ".lqd-highlight-inner", "delayType": "transition"}'
              data-split-text="true"
              data-split-options='{"type": "lines"}'
            >
              <div
                class="split-unit lqd-lines lqd-unit-animation-done mb-5 style-jwcoH"
                id="style-jwcoH"
              >
                <span class="split-inner5 mt-2 text-dark">
                  Tracking
                  <mark class="lqd-highlight">
                    <span class="lqd-highlight-txt" style={{ zIndex: "1" }}>
                      {" "}
                      Partners
                    </span>
                    <span
                      class="bottom-0 left-0 lqd-highlight-inner bg-purple-100 style-9pqpl"
                      id="style-9pqpl"
                    ></span>
                  </mark>
                </span>
              </div>
            </h3>
            <span className="split-inner snipcss-WxzCR fs-2 fw-bold mt-5 text-dark"></span>
          </div>
          <div className="pb-5">
            <Marquee
              speed={50} // Speed of the marquee (Optional)
              loop={0}
              autoFill={true}
              style={{
                height: 50, // Your own styling (Optional)
              }}
            >
              <div
                className="d-flex  "
                style={{
                  gap: "250px",
                }}
              >
                {imagesDetails.map((i, index) => {
                  return (
                    <img
                      key={index}
                      src={`images/${i.img}`}
                      width={190}
                      className="ok"
                    />
                  );
                })}
              </div>
            </Marquee>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsHome;
