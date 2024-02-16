import React, { Suspense, lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";

const HomeRoutes = lazy(() => import("./assets/root-components/HomeRoutes"));
const Services = lazy(() => import("./assets/components/Services"));
const Solutions = lazy(() => import("./assets/components/Solutions"));
const Navbar = lazy(() => import("./assets/components/Navbar"));
const About = lazy(() => import("./assets/components/About"));
const Footer = lazy(() => import("./assets/components/Footer"));
const Contact = lazy(() => import("./assets/components/Contact"));
const Careers = lazy(() => import("./assets/components/Careers"));
const PrivacyAndPolicy = lazy(() =>
  import("./assets/components/PrivacyAndPolicy")
);
const TermsAndConditions = lazy(() =>
  import("./assets/components/TermsAndConditions")
);

const App = () => {
  return (
    <BrowserRouter basename={"/SkmAds/"}>
      <Suspense fallback="ok">
        <Navbar />
        <Routes basename={"/SkmAds/"}>
          {/* individual routes to respective pages */}
          <Route path="home" element={<HomeRoutes />} />
          <Route path="services" element={<Services />} />
          <Route path="solutions" element={<Solutions />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="careers" element={<Careers />} />
          <Route path="privacy-and-policy" element={<PrivacyAndPolicy />} />
          <Route path="terms-and-conditions" element={<TermsAndConditions />} />

          {/* website load route below */}
          <Route index element={<HomeRoutes />} />
        </Routes>
        <Footer />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
