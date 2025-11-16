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
    } else if (
      name === "subject" &&
      !/^[A-Za-zÅÄÖåäö0-9\s.,!?'"():;\-]{2,}$/.test(value)
    ) {
      error = "Must contain at least 2 characters";
    } else if (
      name === "comments" &&
      !/^[A-Za-zÅÄÖåäö0-9\s.,!?'"():;\-]{2,}$/.test(value)
    ) {
      error = "Must contain at least 2 characters";
    } else if (name === "telephone" && !/^\+?[0-9\s-]{1,20}$/.test(value)) {
      error = "Must contain at numbers";
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

    if (!/^[A-Za-zÅÄÖåäö0-9\s.,!?'"():;\-]{2,}$/.test(formData.subject))
      newErrors.subject = "Must contain at least 2 characters";

    if (!/^[A-Za-zÅÄÖåäö0-9\s.,!?'"():;\-]{2,}$/.test(formData.comments))
      newErrors.comments = "Must contain at least 2 characters";

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
        "https://win25-jsf-assignment.azurewebsites.net/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phoneNumber: formData.telephone,
            subject: formData.subject,
            comment: formData.comments,
          }),
        }
      );

      if (res.ok) {
        setFormData({
          name: "",
          email: "",
          telephone: "",
          subject: "",
          comments: "",
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
                <p className="form-p">
                  Your name<span className="validation-star"> *</span>
                </p>
                <input
                  className={`yourname-input ${
                    errors.name ? "input-error" : ""
                  }`}
                  required
                  type="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                />{" "}
                {errors.name && (
                  <span className="validation-error"> {errors.name} </span>
                )}
              </div>

              <div className="email-tele">
                <div className="email">
                  <p className="form-p">
                    Email<span className="validation-star"> *</span>
                  </p>
                  <input
                    className={`email-input ${
                      errors.email ? "input-error" : ""
                    }`}
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Email"
                  />
                  {errors.email && (
                    <span className="validation-error"> {errors.email} </span>
                  )}
                </div>

                <div className="tele">
                  <p className="form-p">Telephone</p>
                  <input
                    className={`tele-input ${
                      errors.telephone ? "input-error" : ""
                    }`}
                    type="tel"
                    name="telephone"
                    value={formData.telephone}
                    onChange={handleChange}
                    placeholder="Telephone"
                  />
                  {errors.telephone && (
                    <span className="validation-error">
                      {" "}
                      {errors.telephone}{" "}
                    </span>
                  )}
                </div>
              </div>

              <div className="subject">
                <p className="form-p">
                  Subjecet<span className="validation-star"> *</span>
                </p>
                <input
                  className={`subject-input ${
                    errors.subject ? "input-error" : ""
                  }`}
                  type="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="How can we help you"
                />
                {errors.subject && (
                  <span className="validation-error"> {errors.subject} </span>
                )}
              </div>

              <div className="comments">
                <p className="form-p">
                  Comments / Questions
                  <span className="validation-star"> *</span>
                </p>
                <textarea
                  className={`comments-input ${
                    errors.comments ? "input-error" : ""
                  }`}
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  required
                  placeholder="Comments"
                ></textarea>
                {errors.comments && (
                  <span className="validation-error"> {errors.comments} </span>
                )}
              </div>
              {validSubmit && (
                <p className="valid-submit">Thank you for your Question</p>
              )}

              <Btn className="btn" type="submit" btnText="Submit" />
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Getintouch;
