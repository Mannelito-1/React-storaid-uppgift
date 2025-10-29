import React from 'react'
import { Link } from 'react-router-dom'
function Header() {
  return (
    <>
     <section class="header-top">
      <div class="container">
        <div class="left-header">
          <div class="ph-header">
            <img src="src/components/Images/ph-icon.svg" alt="" />
            <p>+46 8 123 122 44</p>
          </div>

          <div class="mail-header">
            <img src="src/components/Images/mail-icon.svg" alt="" />

            <p>contact@domain.com</p>
          </div>
        </div>

        <div class="right-header">
          <div class="fb-header">
            <Link className='header-btn' to="/">
               <img src="src/components/Images/FB-icon.svg" alt="" />
            </Link>
            
          </div>

          <div class="twitter-header" to="/">
            <Link class="header-btn">
              <img src="src/components/Images/twitter-ico.svg" alt="" />
            </Link>
          </div>

          <div class="instagram-header">
            <Link class="header-btn" to="/">
              <img src="src/components/Images/instagram-icon.svg" alt="" />
            </Link>
          </div>

          <div class="youtube-icon">
            <Link class="header-btn" to="/">
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