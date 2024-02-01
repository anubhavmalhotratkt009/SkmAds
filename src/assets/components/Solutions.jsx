import React from "react";
import { motion } from "framer-motion";

const solutionsDetails = [
  {
    title: "SKMADS MOBILE",
    desc: `At SKMADS, our Mobile Advertising solutions are designed to help app developers acquire high-quality, engaged users. We use our proprietary tracking technology and trusted third-party partners to run your campaigns on our network of thousands of traffic sources, all optimized in real-time to meet your KPIs. Our experienced team specializes in in-app and mobile web advertising, and we work with a variety of platforms to ensure maximum reach and impact.<br/> We offer customized mobile advertising campaigns tailored to your business needs, helping you to reach and engage your target audience on their mobile devices.`,
    img: "t-1.jpg",
    left: window.innerWidth > 1068 ? true : true,
  },
  {
    title: "SKMADS CONVERT",
    desc: `At SKMADS, our Performance-Based Advertising solutions are designed to help brands acquire new qualified leads and convert prospects into loyal customers.<br/>  Our team specializes in developing customized cross-channel campaigns that reach your customers on the media they're consuming, leveraging our extended network of partners to deliver targeted, effective advertising. We use advanced tracking and optimization tools to ensure that your campaigns are achieving the desired results, whether that's increased leads, sales, or other performance metrics. With SKM Ads, you can trust that your advertising dollars are being used effectively and efficiently to drive real results for your business.`,
    img: "t-3.jpg",
    left: window.innerWidth > 1068 ? false : true,
  },
  {
    title: "SKMADS TARGET",
    desc: `SKMADS programmatic advertising solutions are powered by our Target business unit. With our extensive network of supply-side platforms (SSPs) and demand-side platforms (DSPs), we can access a vast inventory of advertising opportunities across the web and mobile apps.<br/> Our programmatic buying process allows us to add layers of data to your campaigns, ensuring precise targeting or re-targeting of specific audiences. Simply set your bid and targeting criteria, and we'll handle the rest - running your campaign across millions of users while optimizing against your KPIs.<br/>
    Our data-driven approach empowers us to maximize the success of your campaigns, with real-time optimization based on insights from ongoing performance analysis. Whether you're looking to drive brand awareness, increase website traffic, or boost sales, SKMADS programmatic solutions can help you achieve your goals with unparalleled efficiency and accuracy.`,
    img: "t-2.jpg",
    left: window.innerWidth > 1068 ? true : true,
  },
];
const Solutions = () => {
  return (
    <div className="solutions-con col justify-content-center pt-2 pb-0">
      <div className="row justify-content-center p-0">
        <div className="d-flex flex-column text-center justify-content-center align-items-center mb-5">
          <h1 className="text-center fw-bold services-header">
            Our&nbsp;
            <span
              className="services-header mt-5"
              style={{
                display: "inline-table",
              }}
            >
              Solutions
              <motion.hr
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                transition={{ type: "tween", duration: 1.5 }}
                style={{
                  width: "100%",
                  borderBottom: "15px solid #f74900",
                  marginTop: "-20px",
                  opacity: 0.6,
                }}
              />
            </span>
          </h1>
          <p className="text-secondary col-lg-5 col-10services-inner-desc mt-3">
            SKMADS provides targeted and transparent advertising solutions to
            help businesses grow
          </p>
        </div>
      </div>

      <div className="mt-3">
        {solutionsDetails.map((service, index) => (
          <React.Fragment key={index}>
            {service.left ? (
              <>
                <div
                  className="row parentDiv"
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <div
                    className="col-lg-6 p-0 serv-img-con"
                    style={{
                      backgroundImage: `url(images/${service.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                  <div className="col-lg-6 solutions-inner-container">
                    <h1 className="fw-bold mb-5">{service.title}</h1>
                    {service.desc.split("<br/>").map((a, i) => {
                      return (
                        <p
                          key={i}
                          className="mt-3 text-muted"
                          style={{ fontSize: "17px" }}
                        >
                          {a}
                        </p>
                      );
                    })}
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="row" style={{ backgroundColor: "white" }}>
                  <div className="col-lg-6 solutions-inner-container">
                    <h1 className="fw-bold mb-5">{service.title}</h1>
                    {service.desc.split("<br/>").map((a, i) => {
                      return (
                        <p
                          key={i}
                          className="mt-3 text-muted"
                          style={{ fontSize: "17px" }}
                        >
                          {a}
                        </p>
                      );
                    })}
                  </div>
                  <div
                    className="col-lg-6 p-0 serv-img-con"
                    style={{
                      backgroundImage: `url(images/${service.img})`,
                      backgroundSize: "cover",
                      backgroundPosition: "center center",
                    }}
                  ></div>
                </div>
              </>
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Solutions;
