import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";

const Footer = () => {
  const form = useRef();
  const [show, setShow] = useState(true);

  const sendEmail = (e) => {
    setShow(false);
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3vqpt6q",
        "template_97i11ul",
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
      <div className="footer-con  d-flex justify-content-center main-bg">
        <div className="col-lg-10 d-flex footer-inner-con">
          <div className="col-lg-4 col ">
            <h5 className="text-white mb-5 fw-bold">SKMTEK PTE. LTD.</h5>
            <h6 className="text-white fw-light add-foot">68 CIRCULAR ROAD</h6>
            <h6 className="text-white fw-light add-foot">#02-01D</h6>
            <h6 className="text-white fw-light add-foot">SINGAPORE - 049422</h6>

            <a
              href="mailto:sales@skmads.com"
              style={{ textDecoration: "none" }}
            >
              <p className="mt-3 text-white fw-bold">
                <i className="fa-regular fa-envelope"></i>&nbsp;
                sales@skmads.com
              </p>
            </a>
            <a href="tel:+6531581448" style={{ textDecoration: "none" }}>
              <p className="mt-4 text-white fw-bold">
                <i className="fa-solid fa-phone"></i> &nbsp;+65 3158 1448
              </p>
            </a>
          </div>

          <div className="col-lg-4 col">
            <h5 className="text-white mb-5 fw-bold">Useful Links</h5>

            <a
              href="/SkmAds/privacy-and-policy"
              style={{ textDecoration: "none" }}
            >
              <h6 className="text-white add-foot2">Privacy and Policy</h6>
            </a>
            <a
              href="/SkmAds/terms-and-conditions"
              style={{ textDecoration: "none" }}
            >
              <h6 className="text-white add-foot2">Terms and Conditions</h6>
            </a>
            <a href="/SkmAds/careers" style={{ textDecoration: "none" }}>
              <h6 className="text-white add-foot2">Careers</h6>
            </a>
          </div>

          <div className="col-lg-4 col">
            {show ? (
              <form ref={form} onSubmit={sendEmail}>
                <h5 className="text-white mb-5 fw-bold">Get a Quote</h5>
                <input
                  className="form-control rounded-0 p-2"
                  placeholder="      Name"
                  name="name"
                  required
                />
                <input
                  className="form-control mt-3 rounded-0 p-2"
                  placeholder="      E-mail"
                  name="email"
                  required
                />
                <select
                  className="form-select mt-3  rounded-0 p-2"
                  aria-label="Default select example"
                  name="option"
                  required
                >
                  <option style={{ color: "#d3d3d3" }}>
                    &nbsp;&nbsp;&nbsp;&nbsp;-Please choose an option-
                  </option>
                  <option value="I want to advertise my application/website">
                    I want to advertise my application/website
                  </option>
                  <option value="I want to monetise my traffic">
                    I want to monetise my traffic
                  </option>
                </select>

                <button className="footer-btn p-2 text-white mt-4 border-0 rounded-1 px-5 fs-6">
                  Send Email
                </button>
              </form>
            ) : (
              <div
                className="d-flex flex-column justify-content-center align-items-center text-center"
                style={{ height: "30vh" }}
              >
                <i
                  className="fa-solid fa-circle-check text-light mb-3"
                  style={{ fontSize: "80px" }}
                ></i>
                <p className="text-light">
                  Your Message has been successfully sent!
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="text-center bg-black text-white pt-2 py-3">
        <small className="credits">
          © 2024 SKMADS all rights reserved. Owned and Operated By SKMTEK PTE.
          LTD.
        </small>
      </div>
    </>
  );
};

export default Footer;
