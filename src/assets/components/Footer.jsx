import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Footer.css";
import { Link } from "react-router-dom";

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
      <footer
        id="site-footer"
        class="main-footer bg-transparent py-70 snipcss-IQHcK style-xK3EL"
      >
        <div class="container">
          <div class="d-flex flex-wrap">
            <div class="w-20percent mb-30 w-50percent">
              <div class="ld-fancy-heading relative">
                <h6 class="ld-fh-element relative mb-3em text-10 font-bold tracking-1 text-white-40 uppercase">
                  COMPANY
                </h6>
              </div>
              <nav class="link-white-80 lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none d-flex justify-content-center">
                <ul class="reset-ul">
                  <li class="mb-15">
                    <a href="#">Contact Us</a>
                  </li>

                  <li class="mb-15">
                    <a href="#">Careers</a>
                  </li>
                  <li>
                    <a href="#">About</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="w-20percent mb-30 w-50">
              <div class="ld-fancy-heading relative">
                <h6 class="ld-fh-element relative mb-3em text-10 font-bold tracking-1 text-white-40 uppercase">
                  SUPPORT
                </h6>
              </div>
              <nav class="link-white-80 lqd-fancy-menu lqd-custom-menu relative lqd-menu-td-none  d-flex justify-content-center">
                <ul class="reset-ul">
                  <li class="mb-15">
                    <Link to="/privacy-and-policy">Privacy Policy</Link>
                  </li>
                  <li class="mb-15">
                    <Link to="/terms-and-conditions">Terms and Conditions</Link>
                  </li>
                  <li class="mb-15">
                    <a href="#">Linkedin</a>
                  </li>
                </ul>
              </nav>
            </div>
            <div class="w-20percent mb-30 sm:w-full">
              <div class="ld-fancy-heading relative">
                <h6 class="ld-fh-element relative mb-3em text-10 font-bold tracking-1 text-white-40 uppercase">
                  NEED HELP?
                </h6>
              </div>
              <div class="ld-fancy-heading relative">
                <h6 class="ld-fh-element inline-block relative mb-0/5em text-9 uppercase tracking-1 text-white-30">
                  CALL US DIRECTLY
                </h6>
              </div>
              <div class="ld-fancy-heading relative">
                <p class="ld-fh-element relative mb-1/65em text-18 font-medium text-white">
                  (123) 567 8901
                </p>
              </div>
              <div class="ld-fancy-heading relative">
                <h6 class="ld-fh-element inline-block relative mb-0/5em text-9 uppercase tracking-1 text-white-30">
                  CALL US DIRECTLY
                </h6>
              </div>
              <div class="ld-fancy-heading relative">
                <p class="ld-fh-element relative mb-1/65em text-18 font-medium text-white">
                  info@liquid.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
