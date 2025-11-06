import React from 'react'

function Hero() {
  return (
    <>
     <section className="hero">
      <div className="container-space">
        <div className="hero-img-side">
          <img src="src/components/Images/hero-img.svg" alt="" />
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
          <button className="btn hero-btn">Discover More</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero