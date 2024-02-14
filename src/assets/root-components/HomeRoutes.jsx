import { useScroll } from "framer-motion";
import React, { lazy, useRef } from "react";
import ContactHome from "../components/ContactHome";

const HeroContainer = lazy(() => import("../components/HeroContainer"));
const AboutHome = lazy(() => import("../components/AboutHome"));
const SolutionsHome = lazy(() => import("../components/SolutionsHome"));
const ServicesHome = lazy(() => import("../components/ServicesHome"));
const TrackingPartnersHome = lazy(() =>
  import("../components/TrackingPartnersHome")
);
const TestimonialsHome = lazy(() => import("../components/TestimonialsHome"));

const HomeRoutes = () => {
  const progressRef = useRef(null);
  const { scrollY } = useScroll({
    container: progressRef,
  });

  return (
    <>
      {/* these are all the components at the home page, they have been declassified as follows */}
      <div ref={progressRef}>
        <HeroContainer />
        <AboutHome />
        <SolutionsHome />
        <ServicesHome />
        <TrackingPartnersHome />
        <TestimonialsHome />
        <ContactHome />
      </div>
    </>
  );
};

export default HomeRoutes;
