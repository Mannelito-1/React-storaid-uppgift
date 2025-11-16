import React from "react";
import Althero from "../components/Althero";
import AboutUs from "../components/AboutUs";
import LogosSection from "../components/LogosSection";
import ChooseUs from "../components/ChooseUs";
import Testimonial from "../components/Testimonial";

function AboutPG() {
  return (
    <>
      <Althero
        heroText="About us"
        heroPtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <AboutUs/>
      <LogosSection/>
      <Testimonial/>
      <ChooseUs/>
    </>
  );
}

export default AboutPG;
