import React from "react";
import Titlecomp from "./Titlecomp";
import Btn from "./Btn";
function Getintouch() {
  return (
    <>
      <section className="Getintouch">
        <div className="container-space">
          <div className="left-side">
            <div className="text-left">
              <Titlecomp
                h4Title="Get in Touch"
                h3Title="Get Personalized Assistance – Contact Us"
                pText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo"
              />
            </div>
            <div className="img-left">
              <img src="src/components/Images/getintouch-img.svg" alt="" />
            </div>
          </div>

          <div className="right-side">
            <div className="infotext">
              <div className="input-text">
                <p>Your name</p> <p className="star">*</p>
              </div>
              <div className="name-input">
                <input
                  className="name-box"
                  type="text"
                  placeholder="  Your name"
                />
              </div>
            </div>

            <div className="email-tele">
              <div className="infotext">
                <div className="input-text">
                  <p>Email</p> <p className="star">*</p>
                </div>
                <div className="email-input">
                  <input
                    className="inputstows"
                    type="text"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="infotext">
                <div className="input-text">
                  <p>Telephone</p> <p className="star">*</p>
                </div>
                <div className="tele-input">
                  <input
                    className="inputstows"
                    type="text"
                    placeholder="Telephone"
                  />
                </div>
              </div>
            </div>

            <div className="subject">
              <div className="infotext">
                <div className="input-text">
                  <p>Subject</p> <p className="star">*</p>
                </div>
                <input
                  className="subject-box"
                  type="text"
                  placeholder="How can we help you"
                />
              </div>
            </div>

            <div className="comments">
              <div className="infotext">
                <div className="input-text">
                  <p>Comments / Questions </p> <p className="star">*</p>
                </div>
                <div className="comments-input">
                  <input
                    className="comments-box"
                    type="text"
                    placeholder="  Comments"
                  />
                </div>
              </div>
            </div>

            <div className="btn-submit-forum">
              <Btn btnText="Submit" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getintouch;
