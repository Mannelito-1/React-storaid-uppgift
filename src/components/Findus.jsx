import React from "react";
import { Link } from "react-router-dom";

function Findus() {
  return (
    <>
      <section className="find-us">
        <div className="container-space">
          <div className="left-side">
            <img src="src/components/Images/findus-img.svg" alt="" />
          </div>

          <div className="right-side">
            <div className="title-text">
              <h3>Find Us On:</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
              </p>
            </div>
            <div className="logos">
              <div className="logo-box">
                <div className="logo">
                  <img src="src/components/Images/about-us-ph.svg" alt="" />
                </div>
                <div className="logo-text2">
                  <h5>Call Center</h5>
                  <p>+46 8 123 122 44</p>
                </div>
              </div>

              <div className="logo-box">
                <div className="logo">
                  <img src="src/components/Images/bigmail-icon.svg" alt="" />
                </div>
                <div className="logo-text2">
                  <h5>Email Address</h5>
                  <p>contact@domain.com</p>
                </div>
              </div>

              <div className="logo-box">
                <div className="logo">
                  <img src="src/components/Images/location-icon.svg" alt="" />
                </div>
                <div className="logo-text2">
                  <h5>Location</h5>
                  <p>Klarabergsviadukten 90, Stockholm</p>
                </div>
              </div>
            </div>
            <div className="lower-text">
              <h5>Our Social Media</h5>
              <p>───────────────</p>
              <div className="socialmedia-icon">
                <Link className="header-btn" to="/404">
                  <img src="src/components/Images/FB-icon.svg" alt="" />
                </Link>

                <Link className="header-btn" to="/404">
                  <img src="src/components/Images/twitter-ico.svg" alt="" />
                </Link>
                <Link className="header-btn" to="/404">
                  <img src="src/components/Images/instagram-icon.svg" alt="" />
                </Link>
                <Link className="header-btn" to="/404">
                  <img src="src/components/Images/youtube-icon.svg" alt="" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Findus;
