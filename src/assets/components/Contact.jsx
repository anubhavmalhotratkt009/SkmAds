import React from "react";

import "./ContactHome.css";
import "./HeroContainer.css";
import "./AboutHome.css";
import "./Testimonials.css";
import ContactHome from "./ContactHome";

const Contact = () => {
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
