import React from "react";
import Btn from "./Btn";

function Pagenotfound() {
  return (
    <>
      <section className="pageNotFound">
        <div className="container-space">
          <div className="pg-text">
            <h5 className="pg-title-small">Oops!</h5>
            <h1 className="pg-header">Page Not Found</h1>
            <p className="pg-small">
              Sorry, the page you are looking for does not exist. It may have
              been moved, removed altogether or is temporarily unavailable.
            </p>
            <Btn to="/" btnText="Back To Home"/>
          </div>
        </div>
      </section>
    </>
  );
}

export default Pagenotfound;
