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

  const [errors, setErrors] = useState({});
  const [validSubmit, setValidSubmit] = useState(false);

  const validateField = (name, value) => {
    let error = "";

    if (name === "name" && !/^[A-Za-zÅÄÖåäö\s]{2,}$/.test(value)) {
      error = "Must contain at least 2 characters, no numbers";
    } else if (
      name === "email" &&
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(value)
    ) {
      error = "Must be a valid email (eg. name@domain.com)";
    } else if (name === "unit" && !/^[A-Za-zÅÄÖåäö\s0-9]{2,}$/.test(value)) {
      error = "Must contain at least 2 characters";
    } else if (name === "storage" && !/^[A-Za-zÅÄÖåäö\s0-9]{2,}$/.test(value)) {
      error = "Must contain at least 2 characters";
    }

    setErrors((prev) => ({ ...prev, [name]: error }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[A-Za-zÅÄÖåäö\s]{2,}$/.test(formData.name))
      newErrors.name = "Must contain at least 2 characters, no numbers ";

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)
    )
      newErrors.email = "Must be a valid email (eg. name@domain.com) ";

    if (!/^[A-Za-zÅÄÖåäö\s0-9]{2,}$/.test(formData.unit))
      newErrors.unit = "Must contain at least 2 characters";

    if (!/^[A-Za-zÅÄÖåäö\s0-9]{2,}$/.test(formData.storage))
      newErrors.storage = "Must contain at least 2 characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    validateField(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("valid");
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/booking",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            selectedUnit: formData.unit,
            purpose: formData.storage,
          }),
        }
      );

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          unit: "",
          storage: "",
        });
        setValidSubmit(true);
        setTimeout(() => setValidSubmit(false), 3000);
      }
    } else {
      console.log("not working");
    }
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
                  <p className="form-p">
                    Your name <span className="validation-star"> *</span>
                  </p>
                  <input
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`name-email-input ${
                      errors.name ? "input-error" : ""
                    }`}
                    name="name"
                    type="name"
                    placeholder="Your name"
                  />{" "}
                  {errors.name && (
                    <span className="validation-error"> {errors.name} </span>
                  )}
                </div>
                <div className="email">
                  <p className="form-p">
                    Email<span className="validation-star"> *</span>
                  </p>
                  <input
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`name-email-input ${
                      errors.email ? "input-error" : ""
                    }`}
                    name="email"
                    type="email"
                    placeholder="Email"
                  />{" "}
                  {errors.email && (
                    <span className="validation-error"> {errors.email} </span>
                  )}
                </div>
              </div>
              <div className="chooseunit">
                <p className="form-p">
                  Choose Unit<span className="validation-star"> *</span>
                </p>
                <input
                  required
                  value={formData.unit}
                  onChange={handleChange}
                  className={`unit-input ${errors.unit ? "input-error" : ""}`}
                  name="unit"
                  type="text"
                  placeholder="Choose unti"
                />{" "}
                {errors.unit && (
                  <span className="validation-error"> {errors.unit} </span>
                )}
              </div>
              <div className="storage">
                <p className="form-p">
                  Storage purpose<span className="validation-star"> *</span>
                </p>
                <textarea
                  required
                  value={formData.storage}
                  onChange={handleChange}
                  className={`storage-input ${
                    errors.storage ? "input-error" : ""
                  }`}
                  name="storage"
                  type="text"
                  placeholder="Describe your storage purpose so that we can match your request"
                ></textarea>
                {errors.storage && (
                  <span className="validation-error"> {errors.storage} </span>
                )}
              </div>
              {validSubmit && (
                <p className="valid-submit">Thank you for your booking</p>
              )}
              <Btn type="submit" btnText="Book Unit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Bookingunit;
