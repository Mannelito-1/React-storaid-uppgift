import React from "react";

function Althero({heroText, heroPtext}) {
  return (
    <>
      <section className="althero">
        <div className="container-space">
          <h1>{heroText}</h1>
          <p>{heroPtext}</p>
        </div>
      </section>
    </>
  );
}

export default Althero;
