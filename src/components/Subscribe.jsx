import React from 'react'
import Btn from "./Btn";

function Subscribe() {
  return (
    <>
    <section className='subscribe'>
      <div className="container-space">
        <div className="subscribe-left">
          <h3>Subscribe Our Newsletter</h3>
          <p>Subscribe to our newsletter to receive early discount offers, updates and info</p>
        </div>
        <div className="subscribe-right">
          <div className="sub-email">
            <input className='email' type="text" placeholder='      Enter Email' />
          </div>
          <div className="sub-btn">
            <Btn btnText="Submit"/>
          </div>

        </div>
      </div>


    </section>

    </>
  )
}

export default Subscribe