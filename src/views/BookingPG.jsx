import React from "react";
import Althero from "../components/Althero";
import ChooseUs from "../components/ChooseUs";
import BookNow from "../components/BookNow";

function BookingPG() {
  return (
    <>
      <Althero
        heroText="Booking"
        heroPtext="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo."
      />

      <ChooseUs/>
      <BookNow/>
    </>
  );
}

export default BookingPG;
