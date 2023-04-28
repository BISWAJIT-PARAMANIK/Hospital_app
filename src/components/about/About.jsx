import React from "react";
import "./about.css";
import chamber from "../../images/chamber1.jpg";
import doctor from "../../images/chamber2.png";

const About = () => {
  return (
    <section id="about" className="about_wrapper">
      <div className="container">
        <div className="row">
          <div className="col-md-6 mb-md-0 mb-5">
            <div className="position-relative">
              <img src={chamber} alt="" className="img-fluid about-chamber" />
              <img src={doctor} alt="" className="about-animate" />
            </div>
          </div>
          <div className="col-md-6 text-center text-md-start">
            <h2>Welcome to the Family</h2>
            <p>
              We are here to always help you and your cared ones. Our main
              priority is the patient first.
            </p>
            <div className="mt-5 card">
              <div className="about-clinic">
                <h4>500+</h4>
                <p> Happy Patients</p>
              </div>
              <div className="about-clinic">
                <h4>28+</h4>
                <p>Qualified Doctors</p>
              </div>
              <div className="about-clinic">
                <h4>5+</h4>
                <p>Years Experience</p>
              </div>
              <div className="about-clinic">
                <h4>26+</h4>
                <p>Best Hospital Awards</p>
              </div>
              <span className="line-1"></span>
              <span className="line-2"></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
