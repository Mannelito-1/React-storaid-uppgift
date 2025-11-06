import React from "react";
import Althero from "../components/Althero";
import Getintouch from "../components/Getintouch";
import Findus from "../components/Findus";
import Faq from "../components/Faq";

function ContactusPG() {
  return (
    <>
      <Althero
        heroText="Contact Us"
        heroPtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />
      <Getintouch/>
      <Findus/>
      <Faq/>
    </>
  );
}

export default ContactusPG;
