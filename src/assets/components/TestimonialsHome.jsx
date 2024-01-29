import React from "react";

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
  return (
    <>
      <div className="testimonials-con py-5 d-flex justify-content-center">
        <div className="container col-lg-10 d-flex row pb-4 gap-4">
          <div className="col-lg-6 col">
            {testimonialsDetails.map((test) => {
              return (
                <div className={`d-flex ${test.class} mt-4`}>
                  <div className={`w-75 p-4 bg-white shadow mt-2 rounded-4`}>
                    <div className="d-flex justify-content-between">
                      <div>
                        <p>{test.title}</p>
                      </div>
                      <div>
                        <i
                          class="fa-brands fa-twitter"
                          style={{ color: "#243758", fontSize: "22px" }}
                        ></i>
                      </div>
                    </div>
                    <p className="text-muted">{test.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6 row align-items-center">
            <div className="col">
              <h1 className="fw-bold">Hear from them</h1>
              <p className="text-muted mt-3 fs-6 ">
                As a leading digital agency in Paris, we look to engage with our
                clients beyond the conventional design and development agency
                relationship, becoming a partner to the people and companies we
                work with.
              </p>

              <a href="/contact">
                <button className="hero-btn mt-3 rounded-1 p-3">
                  Start your campaign
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialsHome;
