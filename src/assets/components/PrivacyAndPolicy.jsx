import React from "react";
import "./Common.css";
import "./HeroContainer.css";
import "./HomeSolutions.css";
import "./Testimonials.css";
import "./Tracking.css";

const details = [
  {
    title: "The Information SKMADS Collects",
    desc: `User-Provided Information: – When registering an account or expressing an interest in obtaining additional information about SKMADS or the Service you may provide to SKMADS what is generally called “personally identifiable” information such as your name, postal mailing address, e-mail address, telephone number, credit card number, and other billing information. In addition, SKMADS may give you the option to provide us with certain information about your business.“Cookies” Information: – When you visit the SKMADS Site, we may send one or more cookies – a small text file containing a string of alphanumeric characters – to your computer. SKMADS may use both session cookies and persistent cookies. A persistent cookie remains after you close your browser and may be used by your browser on subsequent visits to the SKMADS Site. By using these cookies, we can “remember” what you have done on the SKMADS Site before and personalize our site for you. These persistent types of cookies can be removed. Each web browser implements different functionality, so please refer to the manuals or technical support resources that are available in conjunction with your web browser to learn the correct way to modify your cookies set-up. Please note that disabling cookies, if any, may prevent you from accessing some of the functionality and offerings available via the SKMADS Site. “Automatically Collected” Information: – When you visit the SKMADS Site or open one of our HTML emails, we may record certain information from your web browser by using different types of technology, including “clear gifs” or “web beacons”. This “automatically collected” information may include your Internet Protocol address (“IP Address”), web browser type, the web pages or sites that you visit just before or just after the SKMADS Site, the pages you view on our site, and the dates and times that you visit. When your end-users connect to the Service on their mobile device, SKMADS may automatically receive from their mobile phone service provider information identifying their unique mobile device, their phone number, and/or other unique identifiers for their device (“Mobile Device Information”). For the avoidance of doubt, your end users are not “Users” covered by this Privacy Policy, and any information that you collect from your end users is governed by your privacy policy if any, and not this Privacy Policy.
    “Retargeting” – SKMADS uses retargeting technologies on the internet. This enables us to reach those internet users with advertising who were already interested in our services. The retargeting advertisements are shown on a cookie-based analysis of user behavior. Naturally, there will be no personal data saved and the usage of retargeting technology is affected under consideration of effective legal privacy policies.
     `,
  },
  {
    title: "The Way SKMADS Uses Information",
    desc: `SKMADS uses the information that we collect to provide the Service and all of the features and services found on the SKMADS Site, to consistently improve SKMADS’s services and products, including the Service, to fulfill your requests regarding SKMADS and/or the Service, and to contact you about special offers and new products and services. We will also use your email address, without further consent, for non-marketing or administrative purposes such as notifying you of major site updates.

    SKMADS may use all of the information that we collect from our Users to understand the usage trends and preferences, improve the way the SKMADS Site works and looks, improve our marketing and promotional efforts, and create new features and functionality.
    
    SKMADS may use automatically-collected information and cookies information to (a) remember your information so that you will not have to re-enter it during your visit or the next time you visit the SKMADS Site; (b) provide custom, personalized advertisements, content, and information; (c) monitor the effectiveness of our marketing campaigns; and (d) monitor aggregate usage metrics such as a total number of visitors and pages viewed.`,
  },
  {
    title: "When SKMADS Discloses Information",
    desc: `SKMADS may disclose both personally identifiable and automatically collected information to affiliated companies or other businesses or persons to process such information on our behalf, to provide website maintenance and security, to offer certain features on the Service and the SKMADS Site, to assist us in improving the way the Service and the SKMADS Site work and look, and to create new features. We use reasonable efforts to (i) see that these parties process such information in compliance with our Privacy Policy, (ii) limit their use of such information, and (iii) see that these parties use other appropriate confidentiality and security measures.

    We may share automatically collected and other aggregate non-personally-identifiable information with interested third parties to assist them in understanding the usage patterns for certain content, services, advertisements, promotions, and/or functionality on the Service and the SKMADS Site.
    
    Except as otherwise noted in this Privacy Policy, SKMADS does not share personal information about Users with third parties unless doing so is appropriate to carry out a User’s request or it reasonably believes that doing so is legally required or is in SKMADS’s interest to protect its property or other legal rights or the rights or property of others.
    
    We do not share your personally identifiable information with other third-party organizations for their marketing or promotional use without your consent or except as part of a specific program or feature for which you will have the ability to opt in.`,
  },
  {
    title: "User Profile and Password",
    desc: `You have access to your personal information and you may update, correct, or delete your member information and email preferences at any time by logging in to your account and changing the information on file or by e-mailing SKMADS at partners(at)SKMADS(dot)io with your request. To protect your privacy and security, we take reasonable steps to verify your identity before granting Users profile access. YOU ARE RESPONSIBLE FOR MAINTAINING THE SECRECY OF YOUR UNIQUE PASSWORD AND ACCOUNT INFORMATION AT ALL TIMES.    `,
  },
  {
    title: "Children",
    desc: `Consistent with the federal Children’s Online Privacy Protection Act of 1998 (COPPA), we will never knowingly collect personally identifiable information from anyone under the age of thirteen (13) without requiring parental consent (hereafter “Children Information”). If we will become aware that SKMADS has collected or received such Children Information without requesting or receiving prior parent consent, we will use reasonable efforts to remove such information from SKMADS’s records.`,
  },
  {
    title: "Third-party Advertisers, Links to Other Sites",
    desc: `SKMADS may allow other companies, called third-party ad servers or ad networks, to serve advertisements within the SKMADS Site. These third-party ad servers or ad networks may use technology to send, directly to your browser, the advertisements, and links that appear on the SKMADS Site. They may automatically receive your IP Address when this happens. They may also use other technologies (such as cookies, JavaScript, or web beacons) to measure the effectiveness of their advertisements and to personalize their advertising content.

    SKMADS does not provide any of your personally identifiable information to these third-party ad servers or ad networks without your consent or except as part of a specific program or feature for which you will have the ability to opt-in. However, please note that if an advertiser asks SKMADS to show an advertisement to a certain audience or audience segment and you respond to that advertisement, the advertiser or ad-server may conclude that you fit the description of the audience they were trying to reach.
    
    You should consult the respective privacy policies of these third-party ad servers or ad networks. SKMADS’s Privacy Policy does not apply to, and we cannot control the activities of, such other advertisers or websites.
    
    `,
  },
  {
    title: "Our Commitment to Data Security",
    desc: `No data transmissions over the Internet can be guaranteed to be 100% secure. Consequently, we cannot ensure or warrant the security of any information you transmit to us and you do so at your own risk. Once we receive your transmission, we make reasonable efforts to ensure the security of our systems. We use secure server software (SSL) and firewalls to protect your information from unauthorized access, disclosure, alteration, or destruction. However, please note that this is not a guarantee that such information may not be accessed, disclosed, altered, or destroyed by a breach of such firewalls and secure server software. You can help to ensure the security of your information by taking simple precautions such as preventing unauthorized access to your log-in information and signing off of your account when you are finished using your computer.

    If SKMADS learns of a security systems breach, then we may attempt to notify you electronically so that you can take appropriate protective steps. By using the SKMADS Site or providing personal information to us, you agree that we can communicate with you electronically regarding security, privacy, and administrative issues relating to your use of the SKMADS Site. SKMADS may post a notice on the SKMADS Site if a security breach occurs. If this happens, you will need a web browser enabling you to view SKMADS’s Service. SKMADS may also send an email to you at the email address you have provided to us in these circumstances. Depending on where you live, you may have a legal right to receive notice of a security breach in writing. To receive a free written notice of a security breach (or to withdraw your consent from receiving electronic notice) you should notify us via email at partners(at)SKMADS(dot)io.
    
    `,
  },
  {
    title: "In the Event of a Merger or Sale",
    desc: `If SKMADS should ever file for bankruptcy or have its assets or stock sold to or merge with another entity, information SKMADS receives from you through the SKMADS Site is a SKMADS asset and may be transferred to any such entity.`,
  },
  {
    title: "Our Commitment to CCPA Compliance",
    desc: `As a global company, we are accustomed to adapting to a specific country and state requirements around the world. Our products and services are currently undergoing a thorough CCPA review, in joint consultation with a leading data privacy law firm, and these efforts remain ongoing.
`,
  },
  {
    title: "Support For IAB’s CCPA Consent Solution",
    desc: `We anticipate timely support of the IAB CCPA Compliance Framework. Read more about the framework and how it is helping all parties in the digital advertising ecosystem ensure that they comply with CCPA when processing personal data or accessing non-personal or personal data on user devices.`,
  },
  {
    title: "Changes and Updates to this Privacy Policy",
    desc: `We may occasionally update this Privacy Policy. When we do, we will also revise the “Last Updated” section below. For changes to this Privacy Policy that may be materially less restrictive on our use or disclosure of your personal information going forward, we will notify you via the most recent email address that we have on file if any, and we will attempt to obtain your consent before implementing the change. We encourage you to periodically review this Privacy Policy to stay informed about how we are protecting the personal information we collect. Your continued use of the SKMADS Site constitutes your agreement to this Privacy Policy and any updates.`,
  },
  {
    title: "Contacting SKMADS",
    desc: `If you have any questions, comments, or concerns about this Privacy Policy, please email us at support@skmads.com.`,
  },
];

const PrivacyAndPolicy = () => {
  return (
    <>
      <div className="main-bg">
        <div className="titlebar-inner d-flex flex-column">
          <div className="d-flex flex-row position-relative">
            <div className="col-3 position-absolute">
              <img
                width={369}
                height={135}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path.svg"
                alt="shape"
              />
            </div>

            <div className="col-3">
              <img
                width={57}
                height={54}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141907.svg"
                alt="shape"
              />
            </div>
            <div className="col-3">
              <img
                width={49}
                height={14}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141908.svg"
                alt="shape"
              />
            </div>
            <div className="col-3">
              <img
                width={21}
                height={68}
                src="https://hubhtml.liquid-themes.com/assets/images/demo/start-hub-8/shape-Path-141909.svg"
                alt="shape"
              />
            </div>
          </div>
          <div className="container titlebar-container">
            <div className="row titlebar-container justify-center">
              <div className="col titlebar-col col-xl-12 col-lg-8 col-12 text-center">
                <h1 className="w-100">Privacy and Policy</h1>
                {/* <div className="wave w-100"></div> */}
                {/* <p className="leading-20 text-gray-400">
                SKMADS provides targeted and transparent advertising solutions
                to help businesses grow
              </p> */}
              </div>
            </div>
          </div>
        </div>
        <div className="d-flex flex-column justify-content-center align-items-center pb-5">
          {details.map((detail, index) => {
            const temp = detail.desc.split("  ");
            return (
              <div key={index} className="col-lg-10 col-10">
                <h4 className="split-inner19 fw-bold mt-4 text-start text-dark">
                  {detail.title}
                </h4>
                {temp.map((a, i) => {
                  return (
                    <p key={i} className="text-15 text-start">
                      {a}
                    </p>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default PrivacyAndPolicy;
