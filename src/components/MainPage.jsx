import React from "react";
import Nav from "./nav/Nav";
import About from "./about/About";
import Testimonial from "./testimonial/Testimonial";
import Footer from "./footer/Footer";
import Home from "./home/Home";

const MainPage = () => {
  return (
    <>
      <Nav />
      <Home />
      <About />
      <Testimonial />
      <Footer />
    </>
  );
};

export default MainPage;
