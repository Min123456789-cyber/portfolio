import React from "react";
import Dice from '../assets/dice.png'

const Project = () => {
  return (
    <>
      <section className="container">
        <div style={{paddingTop: "150px"}} className="">
          <h3 className="text-center">Some of <br /> the basic <span className="badge bg-info">Projects</span></h3>
        </div>
        <hr />
        <div className="row my-4">
          <div className="col-lg-4">
            <div className="card" style={{width: "18rem"}}>
              <img src={Dice} className="card-img-top" alt="Dice Game" />
              <div className="card-body">
                <h5 className="card-title">Dice Game</h5>
                <p className="card-text">
                  Simple Dice game using React js
                </p>
                <div className="d-flex gap-3">
                <a href="https://github.com/Min123456789-cyber/dice-game" target="_blank" className="btn btn-secondary">
                  Code
                </a>
                <a href="https://dice-game-kappa-ebon.vercel.app/" target="_blank" className="btn btn-outline-secondary">
                  Play Game
                </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Project;
