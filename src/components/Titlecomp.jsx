import React from "react";

function Titlecomp({ h3Title, pText, h4Title }) {
  return (
    <>
      <div className="container-space">
        <div className="top-text">
          <div className="top-text-tittle">
            <h4>{h4Title}</h4>
          </div>

          <div className="top-text-small">
            <h3 className="h3-title">{h3Title}</h3>
            <p>{pText}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Titlecomp;
