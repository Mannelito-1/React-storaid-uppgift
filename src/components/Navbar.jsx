import React from "react";
import { Link, NavLink } from "react-router-dom";
import Btn from "./Btn";

function Navbar() {
  return (
    <>
      <nav className="nav" aria-label="Navigation">
        <div className="container">
          <div className="logotype">
            <Link to="/" aria-label="Homepage">
              <img src="src/components/Images/logo-type.svg" alt="brand logo" />
            </Link>
          </div>

          <div className="nav-menu">
            <div className="home-btn">
              <NavLink  to="/" className={({isActive}) => (isActive ? "text-lg nav-active" : "text-lg")}>
                Home
              </NavLink>
            </div>

            <div className="about-us-btn">
              <NavLink  to="/about" className={({isActive}) => (isActive ? "text-lg nav-active" : "text-lg")}>
                About us
              </NavLink>
            </div>

            <div className="services-btn">
              <NavLink  to="/services" className={({isActive}) => (isActive ? "text-lg nav-active" : "text-lg")}>
                Services
              </NavLink>
            </div>

            <div className="contact-us-btn">
              <NavLink to="/contact" className={({isActive}) => (isActive ? "text-lg nav-active" : "text-lg")}>
                Contact us
              </NavLink>
            </div>
          </div>

          <div className="book-now">
            <Btn  btnText="Booking" />
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
