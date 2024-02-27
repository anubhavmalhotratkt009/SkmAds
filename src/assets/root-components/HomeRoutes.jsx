import React, { lazy } from "react";
import ContactHome from "../components/ContactHome";

const HeroContainer = lazy(() => import("../components/HeroContainer"));
const HomeSolutions = lazy(() => import("../components/HomeSolutions"));
const HomeServices = lazy(() => import("../components/HomeServices"));
const ServicesHome = lazy(() => import("../components/ServicesHome"));
const HomeAbout = lazy(() => import("../components/HomeAbout"));
const TestimonialsHome = lazy(() => import("../components/TestimonialsHome"));

const HomeRoutes = () => {
  return (
    <div className="main-bg">
      <HeroContainer />
      <HomeSolutions />
      <HomeServices />
      <ServicesHome />
      <HomeAbout />
      <TestimonialsHome />
      <ContactHome />
    </div>
  );
};

export default HomeRoutes;
