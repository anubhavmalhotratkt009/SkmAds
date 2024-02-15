import React, { useState } from "react";
import AboutHome from "./AboutHome.jsx";

import "./Services.css";
import "./HeroContainer.css";
import "./AboutHome.css";
import "./Testimonials.css";
import "./Tracking.css";

const aboutTypes = [
  {
    header: "SKMADS Mobile",
    title:
      "At SKMADS, our Mobile Advertising solutions are designed to help app developers acquire high-quality, engaged users.",
    desc: `At SKMADS, our Mobile Advertising solutions are designed to help app developers acquire high-quality, engaged users. We use our proprietary tracking technology and trusted third-party partners to run your campaigns on our network of thousands of traffic sources, all optimized in real-time to meet your KPIs. Our experienced team specializes in in-app and mobile web advertising, and we work with a variety of platforms to ensure maximum reach and impact.
    We offer customized mobile advertising campaigns tailored to your business needs, helping you to reach and engage your target audience on their mobile devices.`,
    img: "t1.jpg",
  },
  {
    header: "SKMADS Convert",
    title:
      "SKMADS'Performance-Based Advertising drives lead acquisition and customer conversion, fostering loyalty and expanding brands' reach.",
    desc: `At SKMADS, our Performance-Based Advertising solutions are designed to help brands acquire new qualified leads and convert prospects into loyal customers.

    Our team specializes in developing customized cross-channel campaigns that reach your customers on the media they're consuming, leveraging our extended network of partners to deliver targeted, effective advertising. We use advanced tracking and optimization tools to ensure that your campaigns are achieving the desired results, whether that's increased leads, sales, or other performance metrics. With SKM Ads, you can trust that your advertising dollars are being used effectively and efficiently to drive real results for your business.`,
    img: "t3.jpg",
  },
  {
    header: "SKMADS Targeting",
    title:
      "SKMADS' programmatic ad solutions leverage Target's network of SSPs and DSPs for extensive web and mobile inventory access.",
    desc: `SKMADS programmatic advertising solutions are powered by our Target business unit. With our extensive network of supply-side platforms (SSPs) and demand-side platforms (DSPs), we can access a vast inventory of advertising opportunities across the web and mobile apps.

    Our programmatic buying process allows us to add layers of data to your campaigns, ensuring precise targeting or re-targeting of specific audiences. Simply set your bid and targeting criteria, and we'll handle the rest - running your campaign across millions of users while optimizing against your KPIs.
    
    Our data-driven approach empowers us to maximize the success of your campaigns, with real-time optimization based on insights from ongoing performance analysis. Whether you're looking to drive brand awareness, increase website traffic, or boost sales, SKMADS programmatic solutions can help you achieve your goals with unparalleled efficiency and accuracy.`,
    img: "t2.jpg",
  },
];

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
    img: "s-1.jpg",
    left: window.innerWidth > 1068 ? true : true,
    newColor: "#05518c",
    newBg: "#fff1ed",
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
    img: "s-2.jpg",
    left: window.innerWidth > 1068 ? false : true,
    newColor: "#05518c",
    newBg: "#fff1ed",
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
    img: "s-3.jpg",
    left: window.innerWidth > 1068 ? true : true,
    newColor: "#05518c",
    newBg: "#fff1ed",
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
    img: "s-4.jpg",
    left: window.innerWidth > 1068 ? false : true,
    newColor: "#05518c",
    newBg: "#fff1ed",
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
    img: "s-5.jpg",
    left: window.innerWidth > 1068 ? true : true,
    newColor: "#05518c",
    newBg: "#fff1ed",
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
    img: "s-6.jpg",
    left: window.innerWidth > 1068 ? false : true,
    newColor: "#05518c",
    newBg: "#fff1ed",
  },
];

const Solutions = () => {
  return (
    <>
      <div
        class="titlebar-inner "
        style={{ borderBottom: "1px solid #f0f0f0" }}
      >
        <div class="container titlebar-container">
          <div class="row titlebar-container justify-center">
            <div class="col titlebar-col col-xl-6 col-lg-8 col-12 text-center">
              <h1>Solutions</h1>
              <p class="leading-20 text-gray-400">
                We are here to answer any question you may have.​
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutHome bg="white" />
      <div className="container">
        <div className="row">
          <div className="w-450 d-flex flex-column position-relative items-center max-w-100 text-center mx-auto">
            <div className="ld-fancy-heading position-relative w-auto  animation-element lqd-unit-animation-done"></div>
            <div className="ld-fancy-heading position-relative mask-text">
              <h2 className="ld-fh-element position-relative lqd-highlight-classic lqd-highlight-grow-bottom lqd-highlight-reset-onhover lqd-split-lines mb-1 mt-1 split-text-applied is-in-view">
                <div
                  className="split-unit lqd-lines lqd-unit-animation-done "
                  id="style-jwcoH"
                >
                  <span className="split-inner">
                    <mark
                      className="lqd-highlight"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <span className="lqd-highlight-txt">Dive Deeper</span>
                      <span
                        className={`bottom-0 left-0 lqd-highlight-inner 
                       bg-purple-100                        style-9pqpl`}
                        id="style-9pqpl"
                      ></span>
                    </mark>
                  </span>
                </div>
              </h2>
            </div>
          </div>
        </div>
      </div>

      <div
        className="d-flex flex-row py-5 gap-5"
        style={{ background: "linear-gradient(to bottom,  white,#fff3fc)" }}
      >
        <div className="col-lg-6">
          <div className="w-100">
            <img src="./images/a-1.jpg" style={{ position: "sticky" }} />
          </div>
          <div>
            <img src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/over-vision-2.jpg" />
          </div>
          <div>
            <img src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/over-vision-1.jpg" />
          </div>
        </div>
        <div className="col-lg-5 d-flex justify-content-center flex-column">
          <div className="py-5 px-3 align-items-center text-start">
            {aboutTypes.map((ab) => {
              return (
                <div className="d-flex flex-wrap ca-initvalues-applied lqd-animations-done snipcss-5mnKy">
                  <div className="d-flex flex-wrap pb-200 module-content">
                    <div className="m-0  rounded-1 bg-slate-200 ld-fancy-heading position-relative animation-element lqd-unit-animation-done">
                      <h6 className="ld-fh-element d-inline-block position-relative bg-gray py-2 px-3 rounded-5 text-12 -tracking-0/5 text-slate-500 text-uppercase">
                        {ab.header}
                      </h6>
                    </div>
                    <div className="ld-fancy-heading position-relative">
                      <h2 className="ld-fh-element position-relative lqd-highlight-custom lqd-highlight-custom-2 mt-0/25em mb-0/75em text-38 is-in-view lqd-unit-animation-done">
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
                        &nbsp;🔔
                      </h2>
                    </div>
                    <div className="mb-30 iconbox d-flex flex-grow-1 position-relative iconbox-circle iconbox-icon-ripple lqd-unit-animation-done">
                      <div className="iconbox-icon-wrap me-2">
                        <div className="iconbox-icon-container inline-flex position-relative z-1 rounded-full text-24 w-30 h-30 text-accent bg-white shadow-md">
                          <i
                            aria-hidden="true"
                            className="fa fa-circle text-success"
                          />
                        </div>
                      </div>
                      <p className="text-13 leading-16 m-0 lqd-iconbox-heading">
                        {ab.desc}
                      </p>
                    </div>
                  </div>
                  <a href="#" className="text-dark">
                    <span
                      data-text="Learn More"
                      className="btn-txt fw-bold  text-decoration-underline"
                      style={{ textUnderlineOffset: "10px" }}
                    >
                      Learn More <i class="fa-solid fa-arrow-right"></i>
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Solutions;
