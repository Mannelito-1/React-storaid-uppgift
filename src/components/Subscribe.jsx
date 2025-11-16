import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import { useLocation } from "react-router-dom";

function Subscribe() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [validSubmit, setValidSubmit] = useState(false);
  const location = useLocation();

  // Took help from chatgpt for useLocation
  useEffect(() => {
    setFormData({ email: "" });
    setErrors({});
    setValidSubmit(false);
  }, [location.pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !/^[A-Za-z0-9._-]+@[A-Za-z0-9.-]+\.[A-Za-z0-9]{2,}$/.test(formData.email)
    ) {
      newErrors.email = " Please enter a valid email example: name@email.com";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      console.log("valid");
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
          }),
        }
      );

      if (res.ok) {
        setFormData({
          email: "",
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
      <section className="subscribe">
        <div className="container-space">
          <div className="subscribe-left">
            <h3>Subscribe Our Newsletter</h3>
            <p>
              Subscribe to our newsletter to receive early discount offers,
              updates and info
            </p>
          </div>
          <div className="subscribe-right">
            <form onSubmit={handleSubmit} noValidate>
              <div className="sub-email">
                <input
                  required
                  className="email"
                  onChange={handleChange}
                  type="email"
                  name="email"
                  value={formData.email}
                  placeholder="   Enter Email"
                />
                {errors.email && (
                  <span className="validation-error">{errors.email} </span>
                )}
                {validSubmit && (
                  <span className="valid-submit">
                    Thanks for your subscription
                  </span>
                )}
                <div className="submit-btn">
                  <Btn type="submit" btnText="Submit" />
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default Subscribe;
