import React from "react";
import Titlecomp from "./Titlecomp";

function ChooseUs() {
  return (
    <>
      {" "}
      <section className="ChooseUs">
        <Titlecomp
          h3Title="Choose Us for Exceptional Storage Solutions"
          pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque molestie nisl sed dui lacinia gravida. Nulla quis nulla leo. Mauris ac blandit nisi non sodales augue. Phasellus eget elit gravida.

"
          h4Title="Why Choose Us"
        />

        <div className="container-space">
          <div className="chooseus-left">
            <div className="infoBox1">
              <div className="img-box1">
                <img src="src/components/Images/lock-icon.svg" alt="" />
              </div>

              <div className="infoBox1Text">
                <h5>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="infoBox1">
              <div className="img-box1">
                <img src="src/components/Images/Money-bag.svg" alt="" />
              </div>

              <div className="infoBox1Text">
                <h5>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="infoBox1">
              <div className="img-box1">
                <img src="src/components/Images/broom-icon.svg" alt="" />
              </div>

              <div className="infoBox1Text">
                <h5>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>

            <div className="infoBox1">
              <div className="img-box1">
                <img src="src/components/Images/clock-icon.svg" alt="" />
              </div>

              <div className="infoBox1Text">
                <h5>Security and Safety</h5>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
                  elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus
                  leo.
                </p>
              </div>
            </div>
          </div>

          <div className="chooseus-right">
            <img src="src/components/Images/bg-img-1.svg" alt="" />
          </div>
        </div>
      </section>
    </>
  );
}

export default ChooseUs;
