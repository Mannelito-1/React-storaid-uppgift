import React from 'react'

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
            <button class="header-btn">
              <img src="src/components/Images/FB-icon.svg" alt="" />
            </button>
          </div>

          <div class="twitter-header">
            <button class="header-btn">
              <img src="src/components/Images/twitter-ico.svg" alt="" />
            </button>
          </div>

          <div class="instagram-header">
            <button class="header-btn">
              <img src="src/components/Images/instagram-icon.svg" alt="" />
            </button>
          </div>

          <div class="youtube-icon">
            <button class="header-btn">
              <img src="src/components/Images/youtube-icon.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
    </section>
    
    
    
    </>
 )
}

export default Header