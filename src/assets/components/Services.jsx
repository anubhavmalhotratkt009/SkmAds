import React from "react";

const servicesDetails = [
  {
    title: "Programmatic Buying",
    class: "fa fa-bar-chart",
    desc: "Programmatic buying is an automated process of buying and selling advertising inventory in real-time through an online advertising exchange. It allows advertisers to more effectively target their desired audience, optimize their ad spend, and gain transparency and control over their ad campaigns.",
    highlights: [
      "Automated process of buying and selling advertising inventory in real-time",
      "Uses technology to analyze user behavior and target audience with greater precision",
      "Offers transparency and control over ad campaigns",
      "Optimizes ad spend and adjusts bidding strategies for maximum impact and ROI",
      "Leverages data and machine learning algorithms for better results in digital advertising",
    ],
    img: "s-1.jpg",
    left: window.innerWidth > 768 ? true : true,
  },
  {
    title: "Media Buying",
    class: "fa-solid fa-pager",
    desc: "SKMADS provides expert media buying services to help businesses reach their target audience effectively. Our team has a deep understanding of the media landscape and can help clients navigate the complexities of media buying to achieve maximum impact. We work closely with clients to develop customized strategies that align with their objectives and budget constraints.",
    highlights: [
      "Expert media buying services to help businesses reach their target audience effectively",
      "Deep understanding of the media landscape to navigate the complexities of media buying",
      "Customized strategies to align with clients objectives and budget constraints",
      "Focus on maximizing impact and ROI for clients through effective media buying tactics.",
    ],
    img: "s-2.jpg",
    left: window.innerWidth > 768 ? false : true,
  },
  {
    title: "User Acquisition",
    class: "fa-regular fa-user",
    desc: "SKMADS offers user acquisition services to help businesses acquire high-quality users for their mobile apps or websites. Our team utilizes the latest techniques and tools to drive user acquisition, including targeted advertising campaigns, app store optimization, and social media marketing. We work closely with clients to understand their unique needs and goals, and develop customized user acquisition strategies to help them achieve success.",
    highlights: [
      "User acquisition services to help businesses acquire high-quality users for their mobile apps or websites",
      "Utilizes targeted advertising campaigns, app store optimization, and social media marketing techniques to drive user acquisition",
      "Customized strategies developed in close collaboration with clients to meet their unique needs and goals.",
    ],
    img: "s-3.jpg",
    left: window.innerWidth > 768 ? true : true,
  },
  {
    title: "Transparency",
    class: "fa-regular fa-eye",
    desc: "At SKMADS, we value transparency in our advertising solutions. We believe that transparency is essential to building trust with our clients and achieving the best results. Thats why we provide our clients with detailed reporting and insights into their advertising campaigns, including ad performance, audience engagement, and other key metrics.",
    highlights: [
      " Detailed reporting and insights provided to clients, including ad performance and audience engagement metrics",
      "Open communication and collaboration with clients to ensure they understand every aspect of their advertising campaigns",
      "Detailed reporting and insights provided to clients, including ad performance and audience engagement metrics",
    ],
    img: "s-4.jpg",
    left: window.innerWidth > 768 ? false : true,
  },
  {
    title: "Data Analysis",
    class: "fa-solid fa-magnifying-glass-chart",
    desc: "SKMADS offers expert data analysis services to help businesses gain insights into the performance of their advertising campaigns. Our team utilizes the latest data analytics tools and techniques to extract valuable insights from advertising data, including audience behavior, ad performance, and other key metrics. We work closely with clients to provide actionable recommendations for optimizing their advertising strategies and achieving better results.",
    highlights: [
      "Expert data analysis services to gain insights into advertising campaign performance",
      "Utilizes latest data analytics tools and techniques to extract valuable insights from advertising data",
      "Provides actionable recommendations for optimizing advertising strategies and achieving better results",
    ],
    img: "s-5.jpg",
    left: window.innerWidth > 768 ? true : true,
  },
  {
    title: "Explicit Targeting",
    class: "fa-solid fa-bullseye",
    desc: "Explicit targeting is a key feature of SKMADS advertising solutions. With explicit targeting, we enable businesses to target their advertising to specific audiences based on demographics, interests, behaviors, and other relevant factors. This allows businesses to reach the right people with the right message, increasing the effectiveness and impact of their advertising campaigns.",
    highlights: [
      "Explicit targeting is a key feature of SKM Ads advertising solutions",
      "Allows businesses to target their advertising to specific audiences based on demographics, interests, behaviors, and other relevant factors",
      "Helps increase the effectiveness and impact of advertising campaigns",
    ],
    img: "s-6.jpg",
    left: window.innerWidth > 768 ? false : true,
  },
];

const Services = () => {
  return (
    <>
      <div className="services-con col justify-content-center pt-5">
        <div className="row justify-content-center">
          <div className="col text-center ">
            <h1 className="fw-bold services-header">Our Services</h1>
            <p className="text-muted fw-semibold services-inner-desc px-3">
              SKMADS provides targeted and transparent advertising solutions to
              help businesses grow
            </p>
          </div>
          <div className="d-flex justify-content-center services-inner-main-con mt-4">
            <div className="d-flex gap-1 w-75 services-inner-3">
              {servicesDetails.map((ser) => {
                return (
                  <div className="col-lg-2 col-12 py-3 px-2 ser-inner-con col justify-content-center text-center mt-3">
                    <i class={`${ser.class} icon-services2`}></i>
                    <h6 className="fw-bold mt-4 icon-services-text">
                      {ser.title}
                    </h6>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-5">
          {servicesDetails.map((service, index) => (
            <React.Fragment key={index}>
              {service.left ? (
                <>
                  <div className="row" style={{ backgroundColor: "#fafafa" }}>
                    <div className="col-lg-6 p-0">
                      <img
                        src={`src/images/${service.img}`}
                        className="img-fluid"
                      />
                    </div>
                    <div className="col-lg-6 p-5">
                      <h3 className="fw-bold">{service.title}</h3>
                      <p className="mt-3 fw-semibold ser-desc text-muted">
                        {service.desc}
                      </p>
                      {service.highlights.map((ser) => {
                        return (
                          <>
                            <p>
                              <i class="fa-solid fa-square-check text-success"></i>
                              &nbsp;
                              {ser}
                            </p>
                          </>
                        );
                      })}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="row" style={{ backgroundColor: "white" }}>
                    <div className="col-lg-6 p-5">
                      <h3 className="fw-bold">{service.title}</h3>
                      <p className="mt-3 fw-semibold ser-desc text-muted">
                        {service.desc}
                      </p>
                      {service.highlights.map((ser) => {
                        return (
                          <>
                            <p>
                              <i class="fa-solid fa-square-check text-success"></i>
                              &nbsp;
                              {ser}
                            </p>
                          </>
                        );
                      })}
                    </div>
                    <div className="col-lg-6 p-0">
                      <img
                        src={`src/images/${service.img}`}
                        className="img-fluid"
                      />
                    </div>
                  </div>
                </>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
