import React from "react";

function Project(props) {
  return (
    <div className="project-card">
      <div className="project-img-icon">
        <img src="#" />
      </div>
      <div className="project-text">
        <h2>{props.item}</h2>
        <h3>
          some text about the project, what it is and what it does etc. take
          from resume
        </h3>
      </div>
    </div>
  );
}
export default Project;
