import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePG from "./views/HomePG";
import AboutPG from "./views/AboutPG";
import ServicesPG from "./views/ServicesPG";
import ContactusPG from "./views/ContactusPG";
import Header from "./components/header";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Subscribe from "./components/Subscribe";
import BookingPG from "./views/BookingPG";

function App() {
  return (
    <BrowserRouter>
    <Header />
    <Navbar/>
    <main>
      <Routes>
        <Route path="/" element={<HomePG />} />
        <Route path="/about" element={<AboutPG />} />
        <Route path="/services" element={<ServicesPG />} />
        <Route path="/contact" element= {<ContactusPG />} />
         <Route path="/Booking" element= {<BookingPG />} />
      </Routes>

    </main>
    <Subscribe/>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
