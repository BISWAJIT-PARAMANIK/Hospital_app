import React from "react";
import "./appointment.css";
import Appointmentimg from "../../images/gallery/appointment.png";

const Appointment = () => {
  return (
    <section className="appointment_wrapper wrapper">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-7 offset-lg-0 offset-md-0 offset-sm-0 offset-1 col-10">
            <h3>Request your appointment and start smiling</h3>
            <a href="#" className="mt-5 main-btn fill-btn">
              Request Appointment
            </a>
          </div>
          <div className="offset-lg-3 col-lg-3 offset-md-3 col-md-3 col-sm-4 offset-sm-0 offset-3 col-6">
            <img src={Appointmentimg} className="img-fluid"></img>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;
