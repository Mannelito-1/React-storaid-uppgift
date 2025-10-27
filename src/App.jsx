import React from 'react'
import Header from './components/header'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import AboutUs from './components/AboutUs'
import LogosSection from './components/LogosSection'
import Footer from './components/Footer'
import Services from './components/Services'
import ChooseUs from './components/ChooseUs'
import BookNow from './components/BookNow'

function App() {
  return (
    <>
    <Header />

    <Navbar />

    <Hero />

    <AboutUs/>

    <LogosSection/>

    <Services/>

    <ChooseUs/>

    <BookNow/>
    
    
    <Footer/>
    </>
  )
}

export default App