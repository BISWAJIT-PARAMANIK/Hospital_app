import React from "react";
import Nav from "./nav/Nav";
import About from "./about/About";
import Testimonial from "./testimonial/Testimonial";
import Footer from "./footer/Footer";
import Home from "./home/Home";
import Team from "./team/team";
import Services from "./services/services";
import Gallery from "./gallery/gallery";
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
      <Footer />
    </>
  );
};

export default MainPage;
