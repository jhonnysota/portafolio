import React from 'react';
import logo from '../image/logo.svg'
import  './style/Nav.css';
import conocimiento from '../components/Conocimiento.jsx'
import { Link } from 'react-router-dom';

function nav(){
  
}
const Nav=()=>{
        return(
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary sticky-top">
            <a className="navbar-brand" href="#">
                <img src={logo} alt="" className="logo-nav"/>
                 </a><div><h2>DevSota </h2></div>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" href={conocimiento}><div className="Home"><h4>Home</h4></div><div className="linea"></div><span className="sr-only">(current)</span></Link>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#"><div className="Home"><h4>Proyect</h4></div><div className="linea"></div></a>
                </li>
                <li className="nav-item active">
                  <a className="nav-link" href="#"><div className="Home"><h4>About</h4></div><div className="linea"></div></a>
                </li>
              </ul>
              <span className="navbar-text">
                Jhonny Sota Bautista
              </span>
            </div>
          </nav>
        );
}
export default Nav;

