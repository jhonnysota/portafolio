/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import logo from "../image/logo.svg";
import "./style/Nav.css";
import conocimiento from "../components/Conocimiento.jsx";
import { Link } from "react-router-dom";
function nav() {}
const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg  sticky-top">
      <a
        className="navbar-brand"
        data-toggle="tooltip"
        data-placement="top"
        title="Tooltip on top"
        href="#"
      >
        <img src={logo} alt="" className="logo-nav" />
      </a>

      <div>
        <h2>DevSota </h2>
      </div>
      <button
        className="navbar-toggler"
        type=" a"
        data-toggle="collapse"
        data-target="#navbarText"
        aria-controls="navbarText"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarText">
        <ul className="navbar-nav mr-auto iconos-navbar">
          <a className="nav-button" href="#" data-toggle="tooltip" title="Home">
            <li className="nav-item active">
              <i className="fas fa-home  nav-icon"></i>
            </li>
          </a>

          <a
            className=" nav-button"
            href="#"
            data-toggle="tooltip"
            title="Estudie"
          >
            <li className="nav-item active">
              <i className="fas fa-user-graduate nav-icon"></i>
            </li>
          </a>

          <a
            className=" nav-button"
            href="#"
            data-toggle="tooltip"
            title="Experite"
          >
            <li className="nav-item active">
              <i className="fas fa-tasks nav-icon"></i>
            </li>
          </a>
          <a
            className=" nav-button"
            href="#"
            data-toggle="tooltip"
            title="Project"
          >
            <li className="nav-item active">
              <i className="fas fa-project-diagram nav-icon"></i>
            </li>
          </a>
          <a
            className=" nav-button"
            href="#"
            data-toggle="tooltip"
            title="About"
          >
            <li className="nav-item active">
              <i className="fas fa-address-card nav-icon"></i>
            </li>
          </a>
        </ul>
        <span className="navbar-text">Jhonny Sota Bautista</span>
      </div>
    </nav>
  );
};
export default Nav;
