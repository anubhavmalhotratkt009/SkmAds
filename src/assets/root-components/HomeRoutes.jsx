import React, { lazy } from "react";

const HeroContainer = lazy(() => import("../components/HeroContainer"));
const AboutHome = lazy(() => import("../components/AboutHome"));
const SolutionsHome = lazy(() => import("../components/SolutionsHome"));
const ServicesHome = lazy(() => import("../components/ServicesHome"));
const TrackingPartnersHome = lazy(() =>
  import("../components/TrackingPartnersHome")
);
const TestimonialsHome = lazy(() => import("../components/TestimonialsHome"));

const HomeRoutes = () => {
  return (
    <>
    {/* these are all the components at the home page, they have been declassified as follows */}
      <HeroContainer />
      <AboutHome />
      <SolutionsHome />
      <ServicesHome />
      <TrackingPartnersHome />
      <TestimonialsHome />
    </>
  );
};

export default HomeRoutes;
