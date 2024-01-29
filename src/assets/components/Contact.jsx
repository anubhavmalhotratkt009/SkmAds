import React from "react";

const Contact = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-lg-10 row justify-content-center">
            <div
              className="col-lg-6 col-12 col contact-inner1 align-items-center rounded-1"
              style={{ border: "1px solid #e3e3e3" }}
            >
              <h1 className="fw-semibold">Contact Us</h1>
              <p className="text-muted mt-5">
                We are here to answer any question you may have. Feel free to
                reach via contact form or you can mail us to sales@skmads.com.
              </p>
              <div className="col-lg-4 col mt-5">
                <h6 className="text-muted">68 CIRCULAR ROAD</h6>
                <h6 className="text-muted">#02-01D</h6>
                <h6 className="text-muted">SINGAPORE - 049422</h6>

                <p className="mt-3 text-muted">
                  <span className="contact-icon-con">
                    <i class="fa-regular fa-envelope contact-icon"></i>
                  </span>
                  &nbsp; sales@skmads.com
                </p>
                <p className="mt-3 text-muted">
                  <span className="contact-icon-con">
                    <i class="fa-solid fa-phone contact-icon"></i>
                  </span>
                  &nbsp;+65 3158 1448
                </p>
              </div>
            </div>

            <div className="col-lg-6 col-12 p-5">
              <div className="w-100 col">
                <label className="text-muted">Your name</label>
                <input type="text" className="form-control form-color mt-3" />
                <label className="text-muted mt-4">Your email</label>
                <input type="text" className="form-control form-color mt-3" />
                <label className="text-muted mt-4">Your subject</label>
                <input type="text" className="form-control form-color mt-3" />
                <label className="text-muted mt-4">Your subject</label>
                <textarea
                  className="form-control form-color mt-3"
                  style={{ height: "200px" }}
                />
              </div>

              <div className="d-flex justify-content-start mt-4">
                <a href="https://skmads.com/contact">
                  <button className="mt-3 rounded-1 px-3 py-2  btn btn-success">
                    Submit
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
