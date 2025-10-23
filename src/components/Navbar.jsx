import React from 'react'

function Navbar() {
  return (
    <>

     <section class="nav">
      <div class="container">
        <div class="logotype">
          <img src="src/components/Images/logo-type.svg" alt="" />
        </div>

        <div class="nav-menu">
          <div class="home-btn">
            <a class="text-lg" href="">Home</a>
          </div>

          <div class="about-us-btn">
            <a class="text-lg" href="">About us</a>
          </div>

          <div class="services-btn">
            <a class="text-lg" href="">Services</a>
          </div>

          <div class="contact-us-btn">
            <a class="text-lg" href="">Contact us</a>
          </div>
        </div>

        <div class="book-now">
          <button class="btn">Book now</button>
        </div>
      </div>
    </section>


    </>
  )
}

export default Navbar