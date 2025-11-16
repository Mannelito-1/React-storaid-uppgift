import React from 'react'
import Btn from './Btn'

function Hero() {
  return (
    <>
     <section className="hero" aria-label='Welcome section'>
      <div className="container-space">
        <div className="hero-img-side">
          <img src="src/components/Images/hero-img.svg" alt="Man holding a storage box" />
        </div>

        <div className="hero-text-side">
          <h4 className="hero-small-tittle">Welcome to StorAid</h4>
          <h1 className="hero-heading">Space Simplified, Storage Perfected</h1>
          <p className="hero-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras
            lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at
            euismod sem ipsum ac dolor.
          </p>
          <Btn btnText="Discover More" to="/services"/>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero