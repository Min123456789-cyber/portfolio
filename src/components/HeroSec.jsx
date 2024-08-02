import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const HeroSec = () => {
  const [text] = useTypewriter({
    words: ["Aspiring Developer", "FullStack Developer", "DotNet Developer", "Learner"],
    loop: true,
    typeSpeed: 120,
    deleteSpeed: 80,
  });

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center" style={{height: "95vh"}}>
      <h1 className="text-5xl sm:text-3xl font-mono">
        Hi, I'm <br /> <span className="font-serif">Min Bahadur Gurung</span>
      </h1>
      <h1 className="text-center fs-1 font-sans sm:text-3xl">
        I'm a <span className="text-info">{text}</span>
        <span>
          <Cursor cursorBlinking cursorStyle=">" cursorColor="orange" className="z-0"/>
        </span>
      </h1>
    </div>
  );
};

export default HeroSec;
