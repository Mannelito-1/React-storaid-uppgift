import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <header className="header-top" aria-label='Information top bar'>
      <div className="container">
        <div className="left-header">
          <div className="ph-header">
            <img src="src/components/Images/ph-icon.svg" alt="Phone icon" />
            <a href="tel:+46812312244">+46 8 123 122 44</a>
          </div>

          <div className="mail-header">
            <img src="src/components/Images/mail-icon.svg" alt="Email icon" />
            <a href="mailto:contact@domain.com">contact@domain.com</a>
           
          </div>
        </div>

        <div className="right-header" aria-label='social media links'>
          <div className="fb-header">
            <Link className='header-btn' to="/404" aria-label='Facebook'>
               <img src="src/components/Images/FB-icon.svg" alt="Visit our Facebook" />
            </Link>
            
          </div>

          <div className="twitter-header">
            <Link className="header-btn"  to="/404" aria-label='x'>
              <img src="src/components/Images/twitter-ico.svg" alt="Visit our X" />
            </Link>
          </div>

          <div className="instagram-header">
            <Link className="header-btn" to="/404" aria-label='Instagram'>
              <img src="src/components/Images/instagram-icon.svg" alt="Visit our Instagram" />
            </Link>
          </div>

          <div className="youtube-icon">
            <Link className="header-btn" to="/404" aria-label='Youtube'>
              <img src="src/components/Images/youtube-icon.svg" alt="Visit our youtube" />
            </Link>
          </div>
        </div>
      </div>
    </header>
    
    
    
    </>
 )
}

export default Header