import React from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <>
      <section className="nav">
        <div className="container">
          <div className="logotype">
            <Link to="/">
              <img src="src/components/Images/logo-type.svg" alt="" />
            </Link>
          </div>

          <div className="nav-menu">
            <div className="home-btn">
              <NavLink className="text-lg" to="/">
                Home
              </NavLink>
            </div>

            <div className="about-us-btn">
              <NavLink className="text-lg" to="About">
                About us
              </NavLink>
            </div>

            <div className="services-btn">
              <NavLink className="text-lg" to="/Services">
                Services
              </NavLink>
            </div>

            <div className="contact-us-btn">
              <NavLink className="text-lg" to="Contact">
                Contact us
              </NavLink>
            </div>
          </div>

          <div className="book-now">
            <button className="btn">Book now</button>
          </div>
        </div>
      </section>
    </>
  );
}

export default Navbar;
