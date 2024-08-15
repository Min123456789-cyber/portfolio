import React from "react";
import Dice from "../assets/dice.png";
import ProjectCard from "./ProjectCard";
import ImageUps from "../assets/ImageUps.png";

const Project = () => {
  return (
    <>
      <section className="container">
        <div style={{ paddingTop: "150px" }} className="">
          <h3 className="text-center">
            Some of <br /> the basic{" "}
            <span className="badge bg-info">Projects</span>
          </h3>
        </div>
        <hr />
        <div className="row my-4 gap-10">
          <div className="col-lg-5 col-sm-12 mx-auto mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <center>
                <ProjectCard
                  Image={Dice}
                  title="Dice Game"
                  description="Dice game with easy to understand rule."
                  link="https://github.com/Min123456789-cyber/dice-game"
                  live="https://dice-game-kappa-ebon.vercel.app/"
                  code="Code"
                  liveTitle="Play Game"
                />
              </center>
            </div>
          </div>
          <div className="col-lg-5 col-sm-12 mx-auto mb-3">
            <div className="card" style={{ width: "18rem" }}>
              <center>
                <ProjectCard
                  Image={ImageUps}
                  title="Image Uploader"
                  description="Upload Your Image and make it a memory."
                  link="https://github.com/Min123456789-cyber/ImageUpoader"
                  code="Code"
                  liveTitle="Not Available"
                />
              </center>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
