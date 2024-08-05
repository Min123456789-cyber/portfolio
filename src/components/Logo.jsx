import React from "react";
import LogoPic from "../assets/logo.png";
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="p-3 border-none">
      <Link to="/">
        <img src={LogoPic} style={{width: "50px", height: "50px"}} alt="Logo" />
      </Link>
    </div>
  );
};

export default Logo;
