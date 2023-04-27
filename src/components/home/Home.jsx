import React from "react";
import "./home.css";
import nurse from "../../images/nurse1.png";
import doctor from "../../images/doctor1.png";
import helpdesk from "../../images/can-i-help-you-.png";
import appointment from "../../images/appointment.png";
import emergency from "../../images/emergency.png";
import service from "../../images/24-7-service.avif";

const Home = () => {
  return (
    <section id="home" className="home">
      <div className="banner_wrapper warapper">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 order-md-1 order-2">
              <h3> Better life thoughts</h3>
              <h1>Better Hospitality</h1>
              <p>
                {" "}
                join us to a fun and friendly environment. Our professinals are
                wroking so far to see smile on your face that you deservel! We
                are dedicated to our duties.
              </p>
              <a href="" className="main-btn mt-4 fill-btn">
                appointment
              </a>
              <a href="" className="main-btn mt-4 ms-3">
                Learn more
              </a>
            </div>
            <div className="col-md-6 order-md-2 order-1 mb-md-0 mb-5">
              <div className="top-right-sec">
                <div className="animate-img">
                  <img src={nurse} alt="aimg1" className="aimg1" />
                  <img src={doctor} alt="aimg2" className="aimg2" />
                </div>
                <img
                  src={helpdesk}
                  alt="aimg3"
                  className="img-fluid ms-xl-5 aimg3"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="wrapper pb-0">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="icon-box">
                  <img
                    src={appointment}
                    alt="appointment_icon"
                    className="homepageicons"
                  />
                </div>
                <div>
                  <h4>Easy Appointment</h4>
                  <p>Book an appointment and feel the advance hospitality</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="icon-box">
                  <img
                    src={emergency}
                    alt="emergency_icon"
                    className="homepageicons"
                  />
                </div>
                <div>
                  <h4>Emergengy service</h4>
                  <p>We will give you emergency services</p>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6 mb-4">
              <div className="card text-center">
                <div className="icon-box">
                  <img
                    src={service}
                    alt="service_icon"
                    className="homepageicons"
                  />
                </div>
                <div>
                  <h4>24x7 Service</h4>
                  <p>We are always open 24*7 at your service</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
