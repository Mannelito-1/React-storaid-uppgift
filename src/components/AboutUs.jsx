import React from 'react'

function AboutUs() {
  return (
    <>
     <section class="about-us">
      <div class="container-space">
        <div class="about-us-left">
          <img src="src/components/Images/about-us-img.svg" alt="" />
          <div class="img-bar">
            <div class="img-number">
              <h2>12+</h2>
              <p>Years of Experience</p>
            </div>

            <div class="img-number">
              <h2>150K+</h2>
              <p>Satisfied Clients</p>
            </div>

            <div class="img-number">
              <h2>35+</h2>
              <p>Warehouse</p>
            </div>
          </div>
        </div>

        <div class="about-us-right">
          <div class="about-info">
            <h4>About Us</h4>
            <h3>Providing a Safe Space for Your Treasured Items</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi, non sodales augue. Phasellus eget elit
              gravida.
            </p>
          </div>

          <div class="hover-btn-about-us">
            <button class="hover-btn">
              <h5>Vision</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusan tium doloremque laudantium.
              </p>
            </button>

            <button class="hover-btn">
              <h5>Mission</h5>
              <p class="hover-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusan tium doloremque laudantium.
              </p>
            </button>
          </div>
          <div class="about-us-lower">
            <div class="btn-lower">
              <button class="btn">Discover More</button>
            </div>

            <div class="img-icon">
              <img src="src/components/Images/about-us-ph.svg" alt="" />
               
            </div>
             <div class="icon-text">
              <h5>More Information</h5>
              <p>+46 8 123 122 44</p>
            </div>

           
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default AboutUs