import React from "react";
import "../../index.css";

const servicesDetails = [
  {
    title: "Programmatic Buying",
    desc: "Proprietary performance distribution platform for programmatic buying for performance campaigns.",
    class: "fa fa-bar-chart",
  },
  {
    title: "Media Buying",
    desc: "We do plan for your brand to achieve results from all the channels including social media.",
    class: "fa-solid fa-pager",
  },
  {
    title: "User Acquisition",
    desc: "Multi-Channel user acquisition technology to get you unique users.",
    class: "fa-regular fa-user",
  },
  {
    title: "Transparency",
    desc: "Proactive approach ensures compliant traffic and allows full-brand safety and transparency to the advertisers.",
    class: "fa-regular fa-eye",
  },
  {
    title: "Data Analysis",
    desc: "Analyzing massive amounts of data to quickly identify opportunities and take advantage of it.",
    class: "fa-solid fa-magnifying-glass-chart",
  },
  {
    title: "Explicit Targeting",
    desc: "Customized targeting by zip codes, gender, device id and other parameters according to your campaign requirement.",
    class: "fa-solid fa-bullseye",
  },
];

const ServicesHome = () => {
  return (
    <>
      <div className="services-home-con p-5">
        <div className="text-center">
          <span
            className="p-3 rounded-5 services-header-outer"
            style={{ backgroundColor: "#eee8f9", color: "#884ff0" }}
          >
            OUR SERVICES
          </span>
        </div>
        <div className="d-flex justify-content-center text-center mt-5 fw-bold">
          <h1 className="w-75 fw-bold services-home-inner-header">
            Why SKMADS is the Ultimate Partner for Your Digital Advertising
            Needs
          </h1>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <div className="col-lg-12 d-flex flex-wrap gap-4 justify-content-center">
            {servicesDetails.map((services) => {
              return (
                <div className="col-lg-3 col-11 bg-white py-5 rounded-3 shadow-sm">
                  <div className="d-flex justify-content-center">
                    <span className="icon-con">
                      <i class={`${services.class} icon-services`}></i>
                    </span>
                  </div>
                  <div className="mt-4 text-center px-3">
                    <h5 className="fw-bolder">{services.title}</h5>
                    <p className="text-muted ">{services.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesHome;