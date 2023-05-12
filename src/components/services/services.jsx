import React from "react";
import services1 from "../../images/services1.png";
import services2 from "../../images/services2.png";
import services3 from "../../images/services3.png";
import services4 from "../../images/services4.png";
import services5 from "../../images/services5.png";
import services6 from "../../images/sevices6.png";

import "./services.css";

const services = () => {
  return (
    <section id="services" className="services_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3>Our Services</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6  mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={services1} alt="" />
              </div>
              <div className="card-inner-box">
                <h4> Complete hospitality</h4>
                <p>
                  We provide a comlete package of hospitality to our clients
                </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={services2} alt="" />
              </div>
              <div className="card-inner-box">
                <h4> X- ray services</h4>
                <p>
                  You can have your X-rays checked by our new technical facility
                </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={services3} alt="" />
              </div>
              <div className="card-inner-box">
                <h4> Blood services </h4>
                <p> Blood tests are done in a hygienci manner </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={services4} alt="" />
              </div>
              <div className="card-inner-box">
                <h4>Laboratory services</h4>
                <p> Our provide a full package of hospitality to our clients</p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={services5} alt="" />
              </div>
              <div className="card-inner-box">
                <h4>Emergengy rooms</h4>
                <p> Our patients don't have to worry about their emergencies</p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6  mb-4">
            <div className="card">
              <div className="icon-box">
                <img src={services6} alt="" />
              </div>
              <div className="card-inner-box">
                <h4>Surgical services</h4>
                <p>
                  Our advance technology will give you a new surgical experience
                </p>
                <a href="" className="main-btn mt-4">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default services;
