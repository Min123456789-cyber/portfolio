import React from "react";
import HeroImg from "../assets/don.png";
import { RiContactsFill } from "react-icons/ri";

const About = () => {
  return (
    <>
      <div className="m-4">
        <div className="container">
          <div>
            <h5 className="fs-2 py-4 font-medium underline">About Me</h5>
          </div>
          <div className="row mb-3">
            <div className="col-lg-4 mb-">
              <img src={HeroImg} className="img-fluid" alt="MyImage" />
            </div>
            <div className="col-lg-8 border roundedp-2">
              <RiContactsFill className="my-3 fs-1 border p-2 rounded bg-body-tertiary"/>
              <p className="text-align-justify">
                As a passionate and versatile full-stack developer, I bring a
                wealth of expertise in both front-end and back-end technologies
                to create seamless and efficient web applications. With a strong
                foundation in HTML, CSS, and JavaScript, I excel in building
                dynamic and responsive user interfaces using React.js that
                enhance user experience. My proficiency in the .NET framework
                for back-end development allows me to develop robust, scalable,
                and secure applications.
              </p>
              <br />
              <p className="text-md">
                I am adept at utilizing modern frameworks and libraries,
                ensuring the delivery of high-quality, full-fledged solutions.
                My commitment to continuous learning and staying updated with
                the latest industry trends ensures that I bring innovative and
                cutting-edge solutions to every project. Collaborating
                effectively with cross-functional teams.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;