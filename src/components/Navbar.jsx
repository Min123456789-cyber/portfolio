import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-dark bg-gradient position-fixed z-1"
        style={{ width: "100%" }}
      >
        <div className="container shadow-lg">
          <Logo />
          <button
            className="navbar-toggler "
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
                <Link className="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
            </ul>
            <div className="flex">
              <div className="">
                <Link className="text-white" to="#contact">
                  <FaPenNib className="inline-block" /> Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
