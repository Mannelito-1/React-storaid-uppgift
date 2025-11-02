import React, { useState } from "react";
import Titlecomp from "./Titlecomp";
import Btn from "./Btn";

function Bookingunit() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    unit: "",
    storage: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("test submit works");
  };

  return (
    <>
      <section className="bookingunit">
        <div className="container-space">
          <div className="bookleft">
            <Titlecomp
              h4Title="Booking Unit"
              h3Title="Book Your Storage Unit Now & Simplify Your Life!"
            />

            <img src="src/components/Images/bookingunit-img.svg" alt="" />
          </div>

          <div className="bookingright">
            <p className="heading-p">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              molestie nisl sed dui lacinia gravida. Nulla quis nulla leo.
              Mauris ac blandit nisi non sodales augue. Phasellus eget elit
              gravida.
            </p>
            <form className="form-box" onSubmit={handleSubmit} noValidate>
              <div className="yourname-email">
                <div className="yourname">
                  <p className="form-p">Your name</p>
                  <input
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="name-email-input"
                    name="name"
                    type="name"
                    placeholder="Your name"
                  />
                </div>
                <div className="email">
                  <p className="form-p">Email</p>
                  <input
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="name-email-input"
                    name="email"
                    type="email"
                    placeholder="Email"
                  />
                </div>
              </div>
              <div className="chooseunit">
                <p className="form-p">Choose Unit*</p>
                <input
                  required
                  value={formData.unit}
                  onChange={handleChange}
                  className="unit-input"
                  name="unit"
                  type="Unit"
                  placeholder="Choose unti"
                />
              </div>
              <div className="storage">
                <p className="form-p">Storage purpose *</p>
                <textarea
                  required
                  value={formData.storage}
                  onChange={handleChange}
                  className="storage-input"
                  name="storage"
                  placeholder="Describe your storage purpose so that we can match your request"
                ></textarea>
              </div>
              <button className="btn" type="submit">Book Unit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookingunit;
