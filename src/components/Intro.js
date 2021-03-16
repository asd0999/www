import React from "react";
import { Link } from "react-router-dom";

function Intro() {
  return (
    <div className="intro">
      <h1>
        Hi, my name is Tushar<p>I'm a full stack developer</p>
      </h1>{" "}
      {/* <h1>
        <Link to="/projects">click to see projects</Link>
      </h1> */}
    </div>
  );
}

export default Intro;
