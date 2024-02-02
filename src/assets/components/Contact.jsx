import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const [show, setShow] = useState(true);
  const form = useRef();

  const sendEmail = (e) => {
    setShow(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vqpt6q",
        "template_4hvstrb",
        form.current,
        "X9JXI__uGfxd1leot"
      )
      .then((result) => {
        console.log(result.text);
        setTimeout(() => {
          setShow(true);
        }, [5000]);
      })
      .catch((error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="container py-5">
        <div className="d-flex flex-row justify-content-center ">
          <div className="col-lg-11 d-flex col-12 gap-5 flex-row contact-con justify-content-center">
            <div
              className="col-lg-6 col-12 col contact-inner1 align-items-center rounded-1"
              style={{ border: "1px solid #e3e3e3" }}
            >
              <h1 className="fw-semibold">Contact Us</h1>
              <p className="text-muted mt-5">
                We are here to answer any question you may have. Feel free to
                reach via contact form or you can mail us to sales@skmads.com.
              </p>
              <div className="col-lg-6 col mt-5">
                <p className=" text-muted d-flex flex-row">
                  <span className="contact-icon-con">
                    <i className="fa-solid fa-location-dot contact-icon"></i>
                  </span>
                  <span className="fs-6 mt-4 ms-2 fw-semibold">
                    68 CIRCULAR ROAD
                    <br />
                    #02-01D
                    <br />
                    SINGAPORE - 049422
                  </span>
                </p>
                <a
                  href="mailto:sales@skmads.com"
                  style={{ textDecoration: "none" }}
                >
                  <p className=" text-muted fw-semibold">
                    <span className="contact-icon-con">
                      <i className="fa-regular fa-envelope contact-icon"></i>
                    </span>
                    &nbsp; sales@skmads.com
                  </p>
                </a>
                <a href="tel:++6531581448" style={{ textDecoration: "none" }}>
                  <p className=" text-muted fw-semibold">
                    <span className="contact-icon-con">
                      <i className="fa-solid fa-phone contact-icon"></i>
                    </span>
                    &nbsp;+65 3158 1448
                  </p>
                </a>
              </div>
            </div>

            <div className="col-lg-5 col-md-12 px-3 py-1 d-flex justify-content-center ">
              <div className="w-100 col ms-5">
                {show ? (
                  <form ref={form} onSubmit={sendEmail}>
                    <label className="text-muted required contact-label">
                      Your name
                    </label>
                    <input
                      type="text"
                      className="form-control form-color mt-3 required mt-2 rounded-0 contact-inp"
                      name="name"
                      required
                    />
                    <label className="text-muted mt-4 required contact-label">
                      Your email
                    </label>
                    <input
                      type="text"
                      className="form-control form-color mt-3 mt-2 rounded-0 contact-inp"
                      name="email"
                      required
                    />
                    <label className="text-muted mt-4 required contact-label">
                      Your subject
                    </label>
                    <input
                      type="text"
                      className="form-control form-color mt-3 mt-2 rounded-0 contact-inp"
                      name="subject"
                      required
                    />
                    <label className="text-muted mt-4 required contact-label">
                      Your message
                    </label>
                    <textarea
                      className="form-control form-color mt-3 required mt-2 rounded-0 "
                      style={{ height: "210px", border: "none" }}
                      name="message"
                      required
                    />
                    <div className="d-flex justify-content-start mt-4 w-100">
                      <input
                        value="Submit"
                        type="submit"
                        className="mt-3 rounded-1 px-3 py-2  btn btn-success w-25"
                      />
                    </div>
                  </form>
                ) : (
                  <div
                    className="d-flex flex-column justify-content-center align-items-center text-center"
                    style={{ height: "80vh" }}
                  >
                    <i
                      className="fa-solid fa-circle-check text-success mb-3"
                      style={{ fontSize: "80px" }}
                    ></i>
                    <p className="text-muted">
                      Your Message has been successfully sent!
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
