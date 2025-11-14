import React, { useEffect, useState } from "react";
import Btn from "./Btn";
import { useLocation } from "react-router-dom";

function Subscribe() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const [errors, setErrors] = useState({});
  const [valids, setValids] = useState("");
  const location = useLocation();

  // Took help from chatgpt for useLocation
  useEffect(() => {
    setFormData({ email: "" });
    setErrors({});
    setValids("");
  }, [location.pathname]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    setValids("");
  };

  const validateForm = () => {
    const newErrors = {};

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = " Please enter a valid email example: name@email.com";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    try {
      const res = await fetch(
        "https://win25-jsf-assignment.azurewebsites.net/api/subscribe",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setFormData({ email: "" });
      setErrors({});
      setValids("Thanks for subscribing.");
    } catch {
      console.error("something went wrong");
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
                {valids && <span className="success">{valids}</span>}
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
