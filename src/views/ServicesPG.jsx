import React from "react";
import Althero from "../components/Althero";
import Services from "../components/Services";
import BookNow from "../components/BookNow";
import Testimonial from "../components/Testimonial";
import Faq from "../components/Faq";

function ServicesPG() {
  return (
    <>
      <Althero
        heroText="Services"
        heroPtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <Services/>
      <Testimonial/>
      <Faq/>
      <BookNow/>
    </>
  );
}

export default ServicesPG;
