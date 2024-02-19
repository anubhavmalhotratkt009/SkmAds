import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactHome.css";
import "./HeroContainer.css";
import "./AboutHome.css";
import "./Testimonials.css";
import ContactHome from "./ContactHome";

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
      <div className="main-bg2 ">
        <section
          className="lqd-section contact-form bg-center bg-cover pt-4  snipcss-FHrny style-iyHqK "
          id="contact"
        >
          <ContactHome />
        </section>
      </div>
    </>
  );
};

export default Contact;
