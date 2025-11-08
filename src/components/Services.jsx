import React, { useState } from "react";

function Services() {
  const [onHover,setOnHover] = useState(null)
  return (
    <>
      <section className="services">
        <div className="container-space">
          <div className="top-text">
            <div className="top-text-tittle">
              <h4>Our Services</h4>
            </div>

            <div className="top-text-small">
              <h3>Specialized Storage for Every Special Item</h3>
              <p>
                
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
                molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
                Mauris ac blandit nisi non sodales augue. Phasellus eget elit
                gravida.
              </p>
            </div>
          </div>
        </div>

        <div className="container-space">
          <div className="services-grid">
            <div className={`box1 ${onHover === "box1" ? "active" : ""}`}
              onMouseEnter={() => setOnHover("box1")}
              onMouseLeave={()=> setOnHover (null)}>
              <h4>Diverse Unit Sizes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div className="img-box">
              <img src="src/components/Images/services-img1.svg" alt="" />
            </div>

            <div className={`box2 ${onHover === "box2" ? "active" : ""}`}
              onMouseEnter={() => setOnHover("box2")}
              onMouseLeave={()=> setOnHover (null)}>
              <h4>Vehicle Storage</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div className={`box3 ${onHover === "box3" ? "active" : ""}`}
              onMouseEnter={() => setOnHover("box3")}
              onMouseLeave={()=> setOnHover (null)}>
              <h4>Moving Assistance</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div className={`box4 ${onHover === "box4" ? "active" : ""}`}
              onMouseEnter={() => setOnHover("box4")}
              onMouseLeave={()=> setOnHover (null)}>
              <h4>Top-Notch Security</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
