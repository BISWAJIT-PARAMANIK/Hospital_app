import React from "react";
import doctor1 from "../../images/D1.png";
import doctor2 from "../../images/D2.jpg";
import doctor3 from "../../images/D3.png";
import { FaFacebook, FiFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaInstagram } from "react-icons/fa";
import "./team.css";
const Team = () => {
  return (
    <section id="team" className="team_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 text-center mb-5">
            <h3 className="text-black"> Our Doctors</h3>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4  mb-4">
            <div className="card rounded-3">
              <div className="team-img">
                <img
                  src={doctor1}
                  alt="doctor1"
                  className="img-fluid team-doctor "
                />
              </div>
              <div className="team-info pt-4 text-center">
                <h5>Dr. Aditya Gupta</h5>
                <p> Health dietices</p>
                <ul className="social-network">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/" target="_blank">
                      <SiGmail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4  mb-4">
            <div className="card rounded-3">
              <div className="team-img">
                <img
                  src={doctor2}
                  alt="doctor2"
                  className="img-fluid team-doctor"
                />
              </div>
              <div className="team-info pt-4 text-center">
                <h5>Dr.Rajeev Verma</h5>
                <p> Heart specialist</p>
                <ul className="social-network">
                  <li>
                    <a href="https://www.facebook.com/ " target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/" target="_blank">
                      <SiGmail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4  mb-4">
            <div className="card rounded-3">
              <div className="team-img">
                <img
                  src={doctor3}
                  alt="doctor3"
                  className="img-fluid team-doctor"
                />
              </div>
              <div className="team-info pt-4 text-center">
                <h5>Dr.Shreya Jha</h5>
                <p> Gynacologist</p>
                <ul className="social-network">
                  <li>
                    <a href="https://www.facebook.com/" target="_blank">
                      <FaFacebook />
                    </a>
                  </li>
                  <li>
                    <a href="https://twitter.com/" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <FaInstagram />
                    </a>
                  </li>
                  <li>
                    <a href="https://mail.google.com/" target="_blank">
                      <SiGmail />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
