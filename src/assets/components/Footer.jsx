import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer-con  py-5 d-flex justify-content-center">
        <div className="col-lg-10 d-flex footer-inner-con">
          <div className="col-lg-4 col ">
            <h5 className="text-white mb-5 fw-bold">SKMTEK PTE. LTD.</h5>
            <h6 className="text-white">68 CIRCULAR ROAD</h6>
            <h6 className="text-white">#02-01D</h6>
            <h6 className="text-white">SINGAPORE - 049422</h6>

            <p className="mt-3 text-white">
              <i class="fa-regular fa-envelope"></i>&nbsp; sales@skmads.com
            </p>
            <p className="mt-3 text-white">
              <i class="fa-solid fa-phone"></i> &nbsp;+65 3158 1448
            </p>
          </div>

          <div className="col-lg-4 col">
            <h5 className="text-white mb-5 fw-bold">Useful Links</h5>

            <a href="/privacy-and-policy" style={{ textDecoration: "none" }}>
              <h6 className="text-white">Privacy and Policy</h6>
            </a>
            <a href="/terms-and-conditions" style={{ textDecoration: "none" }}>
              <h6 className="text-white">Terms and Conditions</h6>
            </a>
            <a href="/careers" style={{ textDecoration: "none" }}>
              <h6 className="text-white">Careers</h6>
            </a>
          </div>

          <div className="col-lg-4 col">
            <h5 className="text-white mb-5 fw-bold">Get a Quote</h5>
            <input className="form-control" placeholder="Name" />
            <input className="form-control mt-2" placeholder="Email" />
            <select
              class="form-select mt-2"
              aria-label="Default select example"
            >
              <option selected>Please choose an option</option>
              <option value="1">
                I want to advertise my application/website
              </option>
              <option value="2">I want to monetise my traffic</option>
            </select>

            <button className="footer-btn p-2 text-white mt-3 border-0 rounded-1 px-5">
              Send Email
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
