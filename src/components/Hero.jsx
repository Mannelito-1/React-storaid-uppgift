import React from 'react'

function Hero() {
  return (
    <>
     <section class="hero">
      <div class="container-space">
        <div class="hero-img-side">
          <img src="src/components/Images/hero-img.svg" alt="" />
        </div>

        <div class="hero-text-side">
          <h4 class="hero-small-tittle">Welcome to StorAid</h4>
          <h1 class="hero-heading">Space Simplified, Storage Perfected</h1>
          <p class="hero-p">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean a
            sem magna. Etiam ac odio sit amet lorem fringilla sodales. Cras
            lobortis, libero at iaculis luctus, nisi ex pellentesque nisi, at
            euismod sem ipsum ac dolor.
          </p>
          <button class="btn hero-btn">Discover More</button>
        </div>
      </div>
    </section>
    </>
  )
}

export default Hero