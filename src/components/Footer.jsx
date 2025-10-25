import React from "react";

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
              <button className="footer-btn">
                <img src="src/components/Images/Chevron-right.svg" alt="" />
              </button>
              <p> Terms & Conditions</p>
            </div>
            <div className="terms-btn">
              <button className="footer-btn">
                <img src="src/components/Images/Chevron-right.svg" alt="" />
              </button>
              <p> Privacy Policy</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
