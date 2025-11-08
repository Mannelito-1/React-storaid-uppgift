import React, { useState } from "react";

function Btn({ btnText }) {

  const [onHover, setOnHover] = useState(null);
  

  return (
    <>
      <button className={`btn hero-btn ${onHover === btnText ? "active" : ""}`}
      onMouseEnter={() => setOnHover(btnText)}
      onMouseLeave={() => setOnHover(null)}>{btnText}</button>
    </>
  );
}

export default Btn;
 
