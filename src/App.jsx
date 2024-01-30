import React, { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import TermsAndConditions from "./assets/components/TermsAndConditions";

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

const App = () => {
  return (
    <BrowserRouter basename={import.meta.env.DEV ? "/" : "/SkmAds/"}>
      <Navbar />
      <Routes>
        {/* individual routes to respective pages */}
        <Route path="/SkmAds/home" element={<HomeRoutes />} />
        <Route path="/SkmAds/services" element={<Services />} />
        <Route path="/SkmAds/solutions" element={<Solutions />} />
        <Route path="/SkmAds/about" element={<About />} />
        <Route path="/SkmAds/contact" element={<Contact />} />
        <Route path="/SkmAds/careers" element={<Careers />} />
        <Route
          path="/SkmAds/privacy-and-policy"
          element={<PrivacyAndPolicy />}
        />
        <Route
          path="/SkmAds/terms-and-conditions"
          element={<TermsAndConditions />}
        />

        {/* website load route below */}
        <Route index element={<HomeRoutes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
