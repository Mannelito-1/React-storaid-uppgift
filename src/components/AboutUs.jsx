import React from 'react'

function AboutUs() {
  return (
    <>
     <section className="about-us">
      <div className="container-space">
        <div className="about-us-left">
          <img src="src/components/Images/about-us-img.svg" alt="" />
          <div className="img-bar">
            <div className="img-number">
              <h2>12+</h2>
              <p>Years of Experience</p>
            </div>

            <div className="img-number">
              <h2>150K+</h2>
              <p>Satisfied Clients</p>
            </div>

            <div className="img-number">
              <h2>35+</h2>
              <p>Warehouse</p>
            </div>
          </div>
        </div>

        <div className="about-us-right">
          <div className="about-info">
            <h4>About Us</h4>
            <h3>Providing a Safe Space for Your Treasured Items</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi, non sodales augue. Phasellus eget elit
              gravida.
            </p>
          </div>

          <div className="hover-btn-about-us">
            <button className="hover-btn">
              <h5>Vision</h5>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusan tium doloremque laudantium.
              </p>
            </button>

            <button className="hover-btn">
              <h5>Mission</h5>
              <p className="hover-p">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusan tium doloremque laudantium.
              </p>
            </button>
          </div>
          <div className="about-us-lower">
            <div className="btn-lower">
              <button className="btn">Discover More</button>
            </div>

            <div className="img-icon">
              <img src="src/components/Images/about-us-ph.svg" alt="" />
               
            </div>
             <div className="icon-text">
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