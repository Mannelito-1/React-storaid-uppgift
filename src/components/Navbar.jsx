import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section class="nav">
        <div class="container">
          <div class="logotype">
            <Link to="/">
              <img src="src/components/Images/logo-type.svg" alt="" />
            </Link>
          </div>

          <div class="nav-menu">
            <div class="home-btn">
              <NavLink class="text-lg" to="/">
                Home
              </NavLink>
            </div>

            <div class="about-us-btn">
              <NavLink class="text-lg" to="About">
                About us
              </NavLink>
            </div>

            <div class="services-btn">
              <NavLink class="text-lg" to="/Services">
                Services
              </NavLink>
            </div>

            <div class="contact-us-btn">
              <NavLink class="text-lg" to="Contact">
                Contact us
              </NavLink>
            </div>
          </div>

          <div class="book-now">
            <button class="btn">Book now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
