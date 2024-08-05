import React from "react";
import Logo from "./Logo";
import { Link } from "react-router-dom";
import { FaPenNib } from "react-icons/fa";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
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
            <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/project">
                  Project
                </Link>
              </li>
            </ul>
            <li className="nav-item">
              <a className="nav-link" href="#contact">
                <FaPenNib className="inline-block" /> Contact
              </a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
