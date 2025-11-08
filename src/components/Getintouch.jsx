import React, { useState } from "react";
import Titlecomp from "./Titlecomp";
import Btn from "./Btn";

function Getintouch() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    telephone: "",
    subject: "",
    comments: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("works")

    
  };

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
            <form className="form-box" onSubmit={handleSubmit} noValidate>
              <div className="yourname">
                <p className="form-p">Your name*</p>
                <input
                  className="yourname-input"
                  required
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />
              </div>

              <div className="email-tele">
                <div className="email">
                  <p className="form-p">Email*</p>
                  <input
                    className="email-input"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                  />
                </div>

                <div className="tele">
                  <p className="form-p">Telephone</p>
                  <input
                    className="tele-input"
                    type="telephone"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Telephone"
                  />
                </div>
              </div>

              <div className="subject">
                <p className="form-p">Subjecet*</p>
                <input
                  className="subject-input"
                  type="subjecttext"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you"
                />
              </div>

              <div className="comments">
                <p className="form-p">Comments / Questions *</p>
                <textarea
                  className="comments-input"
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  placeholder="Comments"
                ></textarea>
              </div>

              <Btn className="btn" type="submit" btnText="Submit"/>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getintouch;
