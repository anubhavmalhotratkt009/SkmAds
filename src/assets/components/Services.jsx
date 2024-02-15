import React, { useState } from "react";
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
    </>
  );
};

export default Services;
