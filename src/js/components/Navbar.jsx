import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"


const Navbar = () =>{
    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <i className="fas fa-cross me-2"></i>Cristo Vive
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" href="#">Inicio</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#enseñanzas">Enseñanzas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#milagros">Milagros</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#oracion">Oración</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>


    )
};

export default Navbar;