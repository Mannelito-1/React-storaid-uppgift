import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import LogosSection from '../components/LogosSection'
import Services from '../components/Services'
import ChooseUs from '../components/ChooseUs'
import Pricing from '../components/Pricing'
import BookNow from '../components/BookNow'
import Blogs from '../components/Blogs'
import Testimonial from '../components/Testimonial'

function Home() {
  return (
    <>
    
    <Hero/>
    <AboutUs/>
    <LogosSection/>
    <Services/>
    <Testimonial/>
    <ChooseUs/>
    <Pricing/>
    <BookNow/>
    <Blogs/>
   
    </>
  )
}

export default Home