import React from "react";
import Logo from '../assets/logo.png'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaSquareInstagram } from "react-icons/fa6";

const Connect = () => {
  return (
    <div className="container">
      <div className="d-flex flex-column justify-content-center align-items-center">
        <img src={Logo} style={{width: "50px", height: "50px"}} className="m-3" alt="Logo" />
        <h2 className="text-center fs-3">
          Feel Free <br /> to check on Me!
        </h2>
        <div className="fs-1 d-flex pointer gap-4 m-3">
          <Link to="https://github.com/Min123456789-cyber" className="text-black" target="_blank"><FaGithub/></Link>
          <Link to="https://www.linkedin.com/in/minbahadurgurung/" className="text-black" target="_blank"><FaLinkedin/></Link>
          <Link to="https://www.instagram.com/mingurung45/" className="text-black" target="_blank"><FaSquareInstagram/></Link>
        </div>
      </div>
    </div>
  );
};

export default Connect;
