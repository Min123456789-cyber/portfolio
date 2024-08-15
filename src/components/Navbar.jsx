import React from "react";
import Logo from "./Logo";
import { NavLink } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-white position-fixed z-1" style={{width: "100%", marginBottom: "-5px"}}>
        <div className="container border shadow rounded mt-3">
          <Logo />
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link fs-4" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link fs-4" to="/project">
                  Project
                </NavLink>
              </li>
            </ul>
            <li className="nav-item text-bg-info rounded">
              <NavLink className="nav-link fs-4 p-2" to="mailto: meen.gurung333@gmail.com ">
                <FaPenNib/> Contact
              </NavLink>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
