import React, { useState } from "react";
import logo from "../../images/icon.jpg";
import { AiOutlineMenu } from "react-icons/ai";
import "./nav.css";

const Nav = () => {
  const [fix, setFix] = useState(false);
  function handleScroll() {
    if (window.scrollY > 100) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", handleScroll);
  return (
    <header className="header_wrapper">
      <nav
        className={
          fix
            ? "navbar navbar-expand-lg bg-body-tertiary header-scrolled"
            : "navbar navbar-expand-lg bg-body-tertiary"
        }
      >
        <div className="container-fluid">
          <a className="navbar-brand logo_full" href="#">
            <img src={logo} className="img-fluid logo_img" />
            Doctor's meet
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <AiOutlineMenu />
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav menu-navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#home">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href=" #services">
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href=" #team">
                  Team
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#gallery">
                  Gallery
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href=" #testimonial">
                  Testimonial
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link " href="#blog">
                  Blog
                </a>
              </li>
              <li className="nav-item mt-3 mt-lg-2">
                <a className="nav-link " href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
