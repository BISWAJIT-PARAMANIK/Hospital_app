import React from "react";
import Nav from "./nav/Nav";
import About from "./about/About";
import Testimonial from "./testimonial/Testimonial";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Team from "./team/Team";
import Services from "./services/Services";
import Gallery from "./gallery/Gallery";
import Appointment from "./appointment/Appointment";
const MainPage = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Services />
      <Team />
      <Gallery />
      <Testimonial />
      <Appointment />

      <Footer />
    </>
  );
};

export default MainPage;
