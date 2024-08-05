import React from "react";
import Dice from '../assets/dice.png'

const Project = () => {
  return (
    <>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-lg-4">
            <div className="card" style="width: 18rem;">
              <img src={Dice} className="card-img-top" alt="Dice Game" />
              <div className="card-body">
                <h5 className="card-title">Dice Game</h5>
                <p className="card-text">
                  Simple Dice game using React js
                </p>
                <a href="https://github.com/Min123456789-cyber/dice-game" target="_blank" className="btn btn-secondary">
                  Code
                </a>
                <a href="https://dice-game-5rg91esbd-min123456789-cybers-projects.vercel.app/" target="_blank" className="btn btn-outline-secondary">
                  Play Game
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
