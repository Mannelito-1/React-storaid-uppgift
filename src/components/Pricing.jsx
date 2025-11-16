import React, { useState } from "react";
import Titlecomp from "./Titlecomp";
import Btn from "./Btn";

function Pricing() {
  const [onHover, setOnHover] = useState(null);
  return (
    <>
      <section className="pricing">
        <Titlecomp
          h3Title="Find the Perfect Plan for Your Storage Needs"
          h4Title="Pricing Plan"
          
        />
        <div className="container-space">
          <div
            className={`pricingCard ${
              onHover === "small unit" ? "active" : ""
            }`}
            onMouseEnter={() => setOnHover("small unit")}
            onMouseLeave={() => setOnHover(null)}
          >
            <h5>Small Unit</h5>
            <div className="priceNumber">
              <h4 className="dollar">$</h4>
              <h2>50</h2>
              <h5 className="month">/month</h5>
            </div>
            <p className="p-text">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <p className="line">──────────────────────</p>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="pricing-btn">
              <Btn btnText="Rent now"  to="/booking" />
            </div>
          </div>
          <div
            className={`pricingCard ${
              onHover === "medium unit" ? "active" : ""
            }`}
            onMouseEnter={() => setOnHover("medium unit")}
            onMouseLeave={() => setOnHover(null)}
          >
            <h5>Medium Unit</h5>
            <div className="priceNumber">
              <h4 className="dollar">$</h4>
              <h2>100</h2>
              <h5 className="month">/month</h5>
            </div>
            <p className="p-text">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <p className="line">──────────────────────</p>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="pricing-btn">
              <Btn btnText="Rent now"  to="/booking" />
            </div>
          </div>
          <div
            className={`pricingCard ${
              onHover === "large unit" ? "active" : ""
            }`}
            onMouseEnter={() => setOnHover("large unit")}
            onMouseLeave={() => setOnHover(null)}
          >
            <h5>Large Unit</h5>
            <div className="priceNumber">
              <h4 className="dollar">$</h4>
              <h2>150</h2>
              <h5 className="month">/month</h5>
            </div>
            <p className="p-text">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <p className="line">──────────────────────</p>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="pricing-btn">
              <Btn btnText="Rent now" to="/booking"/>
            </div>
          </div>
          <div
            className={`pricingCard ${
              onHover === "executive unit" ? "active" : ""
            }`}
            onMouseEnter={() => setOnHover("executive unit")}
            onMouseLeave={() => setOnHover(null)}
          >
            <h5>Executive Unit</h5>
            <div className="priceNumber">
              <h4 className="dollar">$</h4>
              <h2>200</h2>
              <h5 className="month">/month</h5>
            </div>
            <p className="p-text">
              Phasellus sollicitudin sapien eu massa accumsan, quis semper odio
              suscipit.
            </p>
            <p className="line">──────────────────────</p>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="priceP">
              <p className="checkmark">✔</p>
              <p>Nam nec ipsum in dolor</p>
            </div>
            <div className="pricing-btn">
              <Btn btnText="Rent now"  to="/booking" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
