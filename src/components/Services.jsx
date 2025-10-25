import React from "react";

function Services() {
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
                {" "}
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
            <div className="box1">
              <h4>Diverse Unit Sizes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div className="img-box">
              <img src="src/components/Images/services-img1.svg" alt="" />
            </div>

            <div className="box2">
              <h4>Diverse Unit Sizes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div className="box3">
              <h4>Diverse Unit Sizes</h4>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
                tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.{" "}
              </p>
            </div>

            <div className="box4">
              <h4>Diverse Unit Sizes</h4>
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
