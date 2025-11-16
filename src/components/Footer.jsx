import React from "react";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="container-space">
          <div className="footer-text-left">
            <p>© 2025 StorAid, All rights reserved.</p>
          </div>

          <div className="footer-text-right">
            <div className="terms-btn">
              <NavLink to="/404" className="footer-btn">
                <img src="src/components/Images/Chevron-right.svg" alt="" />
              </NavLink>
              <p> Terms & Conditions</p>
            </div>
            <div className="terms-btn">
              <NavLink to="/404" className="footer-btn">
                <img src="src/components/Images/Chevron-right.svg" alt="arrow icon" />
              </NavLink>
              <p> Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
