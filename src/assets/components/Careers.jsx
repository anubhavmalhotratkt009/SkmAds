import React from "react";
import CareersImage from "../../../public/images/careers.webp";

const Careers = () => {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center ">
        <div className="col-lg-10 row justify-content-center align-items-center px-2 py-5">
          <div className="col-lg-6">
            <h1 className="fw-bold">Join SKMADS</h1>
            <h4 className="text-muted mt-5 fw-light">
              We provide digital experience services to startups and small
              businesses to looking for a partner of their digital media.
            </h4>
            <div className="d-flex justify-content-start mt-4">
              <a href="/SkmAds/contact">
                <button className="hero-btn mt-3 rounded-5 px-5 py-3 fw-bold">
                  JOB OPENINGS
                </button>
              </a>
            </div>
          </div>
          <div className="col-lg-6 mt-5">
            <img src={CareersImage} className="img-fluid w-100" />
          </div>
        </div>

        <div className=" d-flex justify-content-center align-items-center bg-light w-100 py-3">
          <div className="d-flex flex-column justify-content-center align-items-center w-100 py-5">
            <h1 className="text-center">Current Openings</h1>
            <div className="bg-white col-lg-8 col-12 p-4 mt-3">
              <div className="d-flex justify-content-between p-4">
                <div>
                  <h6>AdOps Specialist</h6>
                </div>
                <div>
                  <small className="text-secondary">Bangalore, India</small>
                </div>
                <a href="mailto:sales@skmads.com">
                  <button className="careers-btn m-0">Apply</button>
                </a>
              </div>

              <div className="d-flex justify-content-between p-4">
                <div>
                  <h6>Account Manager</h6>
                </div>
                <div>
                  <small className="text-secondary">Bangalore, India</small>
                </div>
                <a href="mailto:sales@skmads.com">
                  <button className="careers-btn m-0">Apply</button>
                </a>
              </div>

              <div className="d-flex justify-content-between p-4">
                <div>
                  <h6>B. Dev Executive</h6>
                </div>
                <div>
                  <small className="text-secondary">Bangalore, India</small>
                </div>

                <a href="mailto:sales@skmads.com">
                  <button className="careers-btn m-0">Apply</button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Careers;
