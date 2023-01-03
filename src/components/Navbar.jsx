import "../assets/css/navbar.css"
import React from "react";
import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div className="nav-container">
        <NavLink to="/home" className="home">
          Home
        </NavLink>
        <NavLink to="/imccal"  className="imccal"> IMC Calculator </NavLink>
        <NavLink to="/agecal" className="agecal"> AGE Calculator </NavLink>
        <NavLink to="/kruger" className="kruger"> KrugerStar </NavLink>
        <NavLink to="/clock" className="clock"> My Clock </NavLink>
        <NavLink to="/about" className="about"> About me </NavLink>
        <NavLink to="/contact" className="contact"> Contact</NavLink>
      </div>
    </div>
  );
};
