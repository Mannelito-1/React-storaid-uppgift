import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <section className="header-top">
      <div className="container">
        <div className="left-header">
          <div className="ph-header">
            <img src="src/components/Images/ph-icon.svg" alt="" />
            <p>+46 8 123 122 44</p>
          </div>

          <div className="mail-header">
            <img src="src/components/Images/mail-icon.svg" alt="" />

            <p>contact@domain.com</p>
          </div>
        </div>

        <div className="right-header">
          <div className="fb-header">
            <Link className='header-btn' to="/">
               <img src="src/components/Images/FB-icon.svg" alt="" />
            </Link>
            
          </div>

          <div className="twitter-header" to="/">
            <Link className="header-btn">
              <img src="src/components/Images/twitter-ico.svg" alt="" />
            </Link>
          </div>

          <div className="instagram-header">
            <Link className="header-btn" to="/">
              <img src="src/components/Images/instagram-icon.svg" alt="" />
            </Link>
          </div>

          <div className="youtube-icon">
            <Link className="header-btn" to="/">
              <img src="src/components/Images/youtube-icon.svg" alt="" />
            </Link>
          </div>
        </div>
      </div>
    </section>
    
    
    
    </>
 )
}

export default Header