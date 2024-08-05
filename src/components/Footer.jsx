import React from "react";
import LogoPic from "./Logo";
import { IoIosArrowUp } from "react-icons/io";

const Footer = () => {
  const top = () => {
    window.scrollTo(0, 0);
  };

  return (
    <footer>
        <IoIosArrowUp
          onClick={() => top()}
          className="fs-1 position-absolute bg-dark bg-gradient rounded text-white p-1"
          style={{ right: "0" }}
        />
      <div className="d-flex flex-column justify-content-center align-items-center bg-body-tertiary">
        <LogoPic />
        <h3 className="text-xl text-center text-dark pb-3">
          Copyrights &copy; 2024
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
