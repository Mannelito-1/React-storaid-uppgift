import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Btn({ btnText, to, type = "button" }) {

  const [onHover, setOnHover] = useState(null);
  const navigate = useNavigate();

  const handleClick = () => {
    if (to) {
      navigate(to);
      
    }
  };
  

  return (
    <>
      <button
      type={type}
      className={`btn hero-btn ${onHover === btnText ? "active" : ""}`}
      onMouseEnter={() => setOnHover(btnText)}
      onMouseLeave={() => setOnHover(null)}
      onClick={handleClick}>{btnText}</button>
      
    </>
  );
}

export default Btn;
 
