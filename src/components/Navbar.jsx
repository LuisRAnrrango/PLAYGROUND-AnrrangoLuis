import "../assets/css/navbar.css";
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <NavLink to="/home" class="nav-link">
                  Home
                </NavLink>
              </li>
              <li class="nav-item">
                <NavLink to="/agecal" class="nav-link">
                  AGE Calculator
                </NavLink>
              </li>
              <li class="nav-item dropdown">
                <NavLink to="/kruger" className="kruger">
                  KrugerStar
                </NavLink>
              </li>
              <li>
                <NavLink to="/clock" className="clock">
                  My Clock
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="about">
                  About me
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};
